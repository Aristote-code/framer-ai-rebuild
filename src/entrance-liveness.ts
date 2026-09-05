import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// ENTRANCE LIVENESS
//
// `cmd-rebuild` must decide, per captured appear-effect, whether an element
// resting at opacity 0 is:
//   (a) an INTERACTION-GATED panel (closed menu, hover highlight) — keep hidden
//   (b) an ENTRANCE that simply hadn't played at capture time — reveal it
//
// Resting opacity can't tell them apart. On framer-ai.com/agents 223 of 276
// appear effects rest at 0, so "resting 0 ⇒ hidden" discards 81% of the page's
// entrances — and dropping a PARENT hides its whole subtree (that page's left
// icon rail, 48×480 with 10 icons, renders black behind an opacity-0
// `Side nav`).
//
// So measure the live page: scroll it and record how often each element is
// actually visible.
//
// KEYED ON IDENTITY, NOT ON data-cs-id.
// The first version of this re-derived cs-ids with the same DFS as
// computed-styles.ts. That is unsound across page loads: /agents walked 3568
// elements against the reference's 3570, and a two-node difference shifts every
// id after it. Reference csId 23 (`BG`) resolved to an SVG <use> and 245
// (`Side nav`) to unrelated body text, so the verdicts described other
// elements — and a total-count guard happily passed at 0.06% apart. Now each
// element is keyed on `framerName|WxH` and only keys occurring EXACTLY ONCE on
// both sides are used, so a match is unambiguous or absent. Ambiguous elements
// simply get no verdict and fall back to the conservative default.
//
// Two further requirements learned the hard way:
//   * EFFECTIVE opacity (the product up the ancestor chain), because the logo
//     context menu sits at opacity 1 with its closed state applied by a parent.
//   * SUSTAINED visibility (≥2 samples), because nav hover-highlight overlays
//     flash once during the header's entrance and then rest at 0.

export interface EntranceLiveness {
  capturedAt: string;
  sampleCount: number;
  matched: number;
  ambiguous: number;
  /** cs-id → highest effective opacity observed */
  maxOpacity: Record<string, number>;
  /** cs-id → number of samples where it was effectively visible */
  visibleCount: Record<string, number>;
}

export async function captureEntranceLiveness(
  url: string,
  referenceDir: string,
  opts: { headless?: boolean } = {}
): Promise<EntranceLiveness | null> {
  const effects = (
    JSON.parse(readFileSync(join(referenceDir, 'motion', 'appear-effects.json'), 'utf8')).effects ?? []
  ) as Array<{ csId?: string | null; framerName?: string | null }>;
  const styles = JSON.parse(
    readFileSync(join(referenceDir, 'dom', 'computed-styles.json'), 'utf8')
  ) as Record<string, Record<string, string>>;
  if (!effects.length) return null;

  // reference side: key → csIds. Only singletons are usable.
  const refByKey = new Map<string, string[]>();
  for (const fx of effects) {
    if (fx.csId == null) continue;
    const bbox = styles[String(fx.csId)]?.__bbox;
    if (!bbox) continue; // no geometry ⇒ can't key it
    const key = `${fx.framerName ?? ''}|${bbox}`;
    const list = refByKey.get(key) ?? [];
    list.push(String(fx.csId));
    refByKey.set(key, list);
  }
  const uniqueRefKeys = [...refByKey.entries()].filter(([, ids]) => ids.length === 1);
  const ambiguous = refByKey.size - uniqueRefKeys.length;
  if (!uniqueRefKeys.length) return null;

  const browser = await chromium.launch({
    headless: opts.headless ?? false,
    args: ['--disable-blink-features=AutomationControlled', '--hide-scrollbars'],
  });
  try {
    const page = await (
      await browser.newContext({ viewport: { width: 1440, height: 900 } })
    ).newPage();
    await page
      .goto(url, { waitUntil: 'networkidle', timeout: 25000 })
      .catch(() => page.goto(url, { waitUntil: 'load', timeout: 45000 }));
    await page.waitForTimeout(2500);
    // park the pointer well away from the header so hovering nothing is the
    // baseline state
    await page.mouse.move(1430, 880);
    await page.waitForTimeout(400);

    const wanted = uniqueRefKeys.map(([key, ids]) => ({ key, csId: ids[0] }));

    // tag the live elements whose key is unique on THIS page too
    const matched: string[] = await page.evaluate((want) => {
      const byKey = new Map<string, Element[]>();
      for (const el of Array.from(document.querySelectorAll('*'))) {
        const r = el.getBoundingClientRect();
        const key = `${el.getAttribute('data-framer-name') ?? ''}|${Math.round(r.width)}x${Math.round(r.height)}`;
        const list = byKey.get(key) ?? [];
        list.push(el);
        byKey.set(key, list);
      }
      const ok: string[] = [];
      for (const { key, csId } of want) {
        const hits = byKey.get(key);
        if (!hits || hits.length !== 1) continue; // ambiguous or absent here
        hits[0].setAttribute('data-liveness-id', csId);
        ok.push(csId);
      }
      return ok;
    }, wanted);

    if (!matched.length) return null;

    const maxOpacity: Record<string, number> = {};
    const visibleCount: Record<string, number> = {};
    let sampleCount = 0;

    const sample = async () => {
      sampleCount++;
      const vals: Record<string, number> = await page.evaluate(() => {
        const out: Record<string, number> = {};
        for (const el of Array.from(document.querySelectorAll('[data-liveness-id]'))) {
          const id = el.getAttribute('data-liveness-id')!;
          // effective opacity: the product up the chain, since a parent can
          // hold an opacity-1 element invisible
          let eff = 1;
          let n: Element | null = el;
          while (n && n !== document.documentElement) {
            const cs = getComputedStyle(n);
            if (cs.display === 'none' || cs.visibility === 'hidden') { eff = 0; break; }
            eff *= parseFloat(cs.opacity);
            if (eff <= 0.001) break;
            n = n.parentElement;
          }
          out[id] = eff;
        }
        return out;
      });
      for (const [id, v] of Object.entries(vals)) {
        if (!(id in maxOpacity) || v > maxOpacity[id]) maxOpacity[id] = v;
        if (v > 0.02) visibleCount[id] = (visibleCount[id] ?? 0) + 1;
      }
    };

    const totalH: number = await page.evaluate(() => document.documentElement.scrollHeight);
    await sample();
    for (let y = 0; y <= totalH; y += 300) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(70);
      if (y % 900 === 0) await sample();
    }
    await page.waitForTimeout(600);
    await sample();

    return {
      capturedAt: new Date().toISOString(),
      sampleCount,
      matched: matched.length,
      ambiguous,
      maxOpacity,
      visibleCount,
    };
  } finally {
    await browser.close();
  }
}

export function writeEntranceLiveness(referenceDir: string, data: EntranceLiveness) {
  mkdirSync(join(referenceDir, 'motion'), { recursive: true });
  writeFileSync(
    join(referenceDir, 'motion', 'entrance-liveness.json'),
    JSON.stringify(data, null, 2),
    'utf8'
  );
  const ids = Object.keys(data.maxOpacity);
  const sustained = ids.filter((id) => (data.visibleCount[id] ?? 0) >= 2).length;
  const never = ids.filter((id) => (data.visibleCount[id] ?? 0) === 0).length;
  console.log(
    `  👁  entrance-liveness.json (${data.matched} unambiguously matched over ${data.sampleCount} samples: ` +
      `${sustained} sustained-visible, ${never} never visible; ${data.ambiguous} key group(s) too ambiguous to match)`
  );
}

// ─── in-run measurement (the exact one) ─────────────────────────────────────
// Run this INSIDE the extraction, in the same page instance that
// `captureComputedStyles` just tagged. The ids are then exact by construction:
// no cross-load matching, no ambiguity, and every element gets a verdict
// instead of the ~17% that `framerName|WxH` keying can uniquely identify.
//
// Must run BEFORE the hover phase, or hover-gated panels will have been opened
// and will measure as visible. Earlier scroll passes are fine — and in fact
// helpful: "did this ever become visible while scrolling" is exactly the
// question, so anything still at 0 after the page has been scrolled is
// genuinely interaction-gated.
export async function measureLivenessInPage(
  page: import('playwright').Page,
  csAll: Record<string, Record<string, string>>
): Promise<EntranceLiveness | null> {
  const csIds = Object.entries(csAll)
    .filter(([, v]) => v.opacity === '0')
    .map(([k]) => k);
  if (!csIds.length) return null;

  // VALIDATE FIRST, RE-TAG ONLY IF NEEDED, AND REFUSE IF STILL UNALIGNED.
  // Two things can go wrong. Framer's own React re-renders during the run
  // (resizing the viewport for the full-page screenshots does it), which
  // replaces nodes and drops the data-cs-id attributes phase 3 injected — a
  // first attempt resolved 2 of 10 ids. And re-walking doesn't necessarily
  // rescue it: if the DOM itself moved on, fresh ids don't line up either
  // (measured 43% alignment when this ran after the screenshot pass).
  //
  // So prove alignment against the __bbox recorded for each id, and emit
  // nothing when it can't be proven. Silent misalignment is the failure mode
  // that made the earlier cross-load version worse than useless: it produced
  // confident verdicts about entirely different elements.
  const bboxSamples = Object.entries(csAll)
    .filter(([, v]) => typeof v.__bbox === 'string')
    .slice(0, 120)
    .map(([k, v]) => [k, v.__bbox] as [string, string]);

  const validate = (retag: boolean) =>
    page.evaluate(
      ({ expected, doRetag }) => {
        if (doRetag) {
          let counter = 0;
          const SKIP = new Set(['SCRIPT', 'STYLE', 'META', 'LINK', 'HEAD', 'TITLE', 'BR', 'NOSCRIPT']);
          const walk = (el: Element) => {
            if (SKIP.has(el.tagName)) return;
            el.setAttribute('data-cs-id', String(counter++));
            for (const child of Array.from(el.children)) walk(child);
          };
          walk(document.documentElement);
        }
        let ok = 0;
        let bad = 0;
        for (const [id, bbox] of expected) {
          const el = document.querySelector(`[data-cs-id="${id}"]`);
          if (!el) { bad++; continue; }
          const r = el.getBoundingClientRect();
          if (`${Math.round(r.width)}x${Math.round(r.height)}` === bbox) ok++;
          else bad++;
        }
        return { ok, bad };
      },
      { expected: bboxSamples, doRetag: retag }
    );

  let check = await validate(false);
  let rate = check.ok / Math.max(1, check.ok + check.bad);
  let how = 'existing tags';
  if (rate < 0.8) {
    check = await validate(true);
    rate = check.ok / Math.max(1, check.ok + check.bad);
    how = 're-tagged';
  }
  if (rate < 0.8) {
    console.warn(
      `  ⚠️  cs-id alignment only ${(rate * 100).toFixed(0)}% (${check.ok} ok / ${check.bad} bad) after re-tag — skipping rather than guessing`
    );
    return null;
  }
  console.log(
    `  ✓ cs-id alignment ${(rate * 100).toFixed(0)}% verified via __bbox (${how}); ${csIds.length} candidate(s)`
  );

  // park the pointer away from the header so "hovering nothing" is the baseline
  await page.mouse.move(1430, 880).catch(() => {});
  await page.waitForTimeout(300);

  const maxOpacity: Record<string, number> = {};
  const visibleCount: Record<string, number> = {};
  let sampleCount = 0;

  const sample = async () => {
    sampleCount++;
    const vals: Record<string, number> = await page.evaluate((ids) => {
      const out: Record<string, number> = {};
      for (const id of ids) {
        const el = document.querySelector(`[data-cs-id="${id}"]`);
        if (!el) continue;
        // EFFECTIVE opacity: the product up the ancestor chain. An element's
        // own opacity says nothing about whether it paints — a closed menu
        // sits at opacity 1 under a hidden parent.
        let eff = 1;
        let n: Element | null = el;
        while (n && n !== document.documentElement) {
          const cs = getComputedStyle(n);
          if (cs.display === 'none' || cs.visibility === 'hidden') { eff = 0; break; }
          eff *= parseFloat(cs.opacity);
          if (eff <= 0.001) break;
          n = n.parentElement;
        }
        out[id] = eff;
      }
      return out;
    }, csIds);
    for (const [id, v] of Object.entries(vals)) {
      if (!(id in maxOpacity) || v > maxOpacity[id]) maxOpacity[id] = v;
      if (v > 0.02) visibleCount[id] = (visibleCount[id] ?? 0) + 1;
    }
  };

  const totalH: number = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await sample();
  // creep, so IntersectionObserver entrances actually fire — an instant jump
  // can carry an element past the viewport between two frames
  for (let y = 0; y <= totalH; y += 300) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(60);
    if (y % 900 === 0) await sample();
  }
  await page.waitForTimeout(500);
  await sample();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);

  return {
    capturedAt: new Date().toISOString(),
    sampleCount,
    matched: csIds.length,
    ambiguous: 0,
    maxOpacity,
    visibleCount,
  };
}
