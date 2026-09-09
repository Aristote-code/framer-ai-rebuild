// probe.mjs — numerical CSS parity probe (the fidelity oracle for a rebuild)
//
// Captures bounding rect + ~30 computed style props for a matched set of
// elements on TWO urls (the live original and your local rebuild), pairs them
// in DOM order per selector group, and writes a human-readable css-diff.md plus
// a machine-readable css-diff.json. This is what you iterate against until the
// diffs collapse to single digits. No mirror required — it just needs two
// reachable urls.
//
// usage:
//   bun probe.mjs <originalUrl> <rebuildUrl> [outDir=.]
// example:
//   bun probe.mjs https://moment.framer.photos http://localhost:5173 ./reference/moment
//
// output: <outDir>/css-diff.md, <outDir>/css-diff.json

import { chromium } from 'playwright';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const originalUrl = process.argv[2];
const rebuildUrl = process.argv[3];
const outDir = process.argv[4] || '.';

if (!originalUrl || !rebuildUrl) {
  console.error('usage: bun probe.mjs <originalUrl> <rebuildUrl> [outDir=.]');
  process.exit(1);
}

// the props that actually matter for visual fidelity. fontFamily is included but
// treated leniently in the diff (a resolved `sans-serif` vs a named family with
// the same metric grid is visually identical).
const PROPS = [
  'fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing',
  'fontStyle', 'textAlign', 'textTransform', 'color', 'backgroundColor',
  'opacity', 'transform', 'transformOrigin', 'transitionTimingFunction',
  'transitionDuration', 'transitionDelay', 'borderRadius', 'boxShadow',
  'display', 'flexDirection', 'justifyContent', 'alignItems', 'gap',
  'padding', 'margin', 'width', 'height', 'maxWidth', 'zIndex', 'filter',
];

// selector groups. h1/h2/h3/p/nav cover typographic + structural parity; the
// framer-name groups catch the authored layout blocks. extend per target via
// the PROBE_EXTRA_SELECTORS env var (comma-separated) — `extract-site verify`
// uses this to widen coverage without hand-editing this file.
const EXTRA_SELECTORS = (process.env.PROBE_EXTRA_SELECTORS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const SELECTORS = [...new Set(['h1', 'h2', 'h3', 'p', 'nav', '[data-framer-name]', ...EXTRA_SELECTORS])];

async function capture(url) {
  // MUST be headed: Framer motion libraries (motion/react, GSAP) gate on rAF +
  // IntersectionObserver + real layout/compositing, and hover/mouse events need a
  // real rendering context. Headless silently skips entry/hover/scroll motion, so
  // a headless probe reads wrong resting states and reports false diffs.
  // MUST match the capture conditions. `extract-site` captures with
// --hide-scrollbars, so full-width elements resolve to 1440px and get inlined
// at that size. Measuring the LIVE page in a browser that draws a classic
// 15px scrollbar lays it out at 1425 instead, so every centred element reads
// ~7px off and every full-width one ~15px narrow — 244 phantom diffs on a page
// that actually had 69. (Older Chromium used overlay scrollbars here, which is
// why this only surfaced after a version bump.)
const browser = await chromium.launch({ headless: false, args: ['--hide-scrollbars'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  // settle: let fonts + entry motion finish so we read resting state
  await page.evaluate(() => document.fonts.ready);
  // scroll through to trigger entrance reveals (IntersectionObserver-gated) on
  // BOTH pages, then return to top. without this, below-fold elements read
  // opacity:0/transform on the rebuild (never scrolled into view) but revealed
  // on the live page → false diffs. (Same gotcha the PLAYBOOK flags for
  // fullPage screenshots.)
  // each step only waits 2 RAFs (~33ms) — enough to FIRE an IntersectionObserver
  // callback, nowhere near enough for a staggered group (per-item delays can run
  // into seconds) to finish animating. A full 14000px page scrolls through in
  // under a second at that rate, so far-down entrances get measured mid-flight —
  // and since total elapsed real time depends on machine/scheduler jitter, the
  // diff count becomes NON-DETERMINISTIC run to run (observed: 85 → 219 → 211 on
  // an unchanged build). Give every triggered animation real time to settle
  // BEFORE jumping back to top, not just a flat wait at the top.
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    }
    // settle at the bottom: covers realistic max entrance duration + stagger
    // delay for whatever was still animating when the scroll pass reached it.
    await new Promise((r) => setTimeout(r, 2500));
    window.scrollTo(0, 0);
  });
  await page.evaluate(() => new Promise((r) => setTimeout(r, 800)));

  const data = await page.evaluate(({ selectors, props }) => {
    const out = {};
    for (const sel of selectors) {
      const els = Array.from(document.querySelectorAll(sel));
      out[sel] = els.slice(0, 50).map((el) => {
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        const style = {};
        for (const p of props) style[p] = cs[p];
        return {
          text: (el.textContent || '').trim().slice(0, 40),
          rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
          framerName: el.getAttribute('data-framer-name') || null,
          style,
        };
      });
    }
    return out;
  }, { selectors: SELECTORS, props: PROPS });

  await browser.close();
  return data;
}

function diffPair(a, b) {
  const diffs = [];
  // rect (allow 1px rounding slack)
  for (const k of ['x', 'y', 'w', 'h']) {
    if (Math.abs(a.rect[k] - b.rect[k]) > 1) diffs.push({ prop: `rect.${k}`, original: a.rect[k], rebuild: b.rect[k] });
  }
  for (const p of PROPS) {
    if (a.style[p] !== b.style[p]) {
      // fontFamily is lenient: only flag if neither resolves to a generic
      if (p === 'fontFamily') {
        const generic = (v) => /^(sans-serif|serif|monospace)$/i.test((v || '').trim());
        if (generic(a.style[p]) || generic(b.style[p])) continue;
      }
      // transformOrigin has NO visual effect without a transform, so don't flag
      // it when neither side is transformed (its resolved px center otherwise
      // just tracks element width — e.g. a scrollbar-gutter delta — as noise).
      if (p === 'transformOrigin') {
        const noTx = (v) => !v || v === 'none';
        if (noTx(a.style.transform) && noTx(b.style.transform)) continue;
      }
      diffs.push({ prop: p, original: a.style[p], rebuild: b.style[p] });
    }
  }
  return diffs;
}

const [orig, rebuilt] = await Promise.all([capture(originalUrl), capture(rebuildUrl)]);

// Pair elements by IDENTITY (data-framer-name, else normalized text) with a
// bbox tiebreak — NOT by DOM index. The rebuild and the live page routinely
// differ in element order/extras (e.g. a collapsed vs expanded nav menu), so
// positional pairing matches the wrong elements and cascades into garbage
// diffs. Identity pairing diffs like-for-like and reports the leftovers as
// missing/extra.
const normText = (s) => (s || '').trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 40);
const keyOf = (el) => ((el.framerName || '').trim() || normText(el.text));

function pairByIdentity(A, B) {
  const used = new Set();
  const pairs = [];
  const unmatchedA = [];
  for (const a of A) {
    const ak = keyOf(a);
    let bestIdx = -1;
    let bestScore = Infinity;
    if (ak) {
      for (let j = 0; j < B.length; j++) {
        if (used.has(j) || keyOf(B[j]) !== ak) continue;
        const b = B[j];
        const score = Math.abs(a.rect.y - b.rect.y) + Math.abs(a.rect.x - b.rect.x) * 0.25;
        if (score < bestScore) { bestScore = score; bestIdx = j; }
      }
    }
    if (bestIdx >= 0) { used.add(bestIdx); pairs.push([a, B[bestIdx]]); }
    else unmatchedA.push(a);
  }
  const unmatchedB = B.filter((_, j) => !used.has(j));
  return { pairs, unmatchedA, unmatchedB };
}

let totalDiffs = 0;
let totalPaired = 0;
let fullyMatching = 0;
const report = [];

for (const sel of SELECTORS) {
  const A = orig[sel] || [];
  const B = rebuilt[sel] || [];
  const { pairs, unmatchedA, unmatchedB } = pairByIdentity(A, B);
  if (unmatchedA.length || unmatchedB.length) {
    report.push({
      selector: sel,
      countMismatch: { original: A.length, rebuild: B.length },
      unmatched: { missingInRebuild: unmatchedA.length, extraInRebuild: unmatchedB.length },
    });
  }
  pairs.forEach(([a, b], i) => {
    totalPaired++;
    const d = diffPair(a, b);
    totalDiffs += d.length;
    if (d.length === 0) fullyMatching++;
    else report.push({ selector: sel, index: i, text: a.text, framerName: a.framerName, diffs: d });
  });
}

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'css-diff.json'), JSON.stringify({ originalUrl, rebuildUrl, totalDiffs, totalPaired, fullyMatching, report }, null, 2), 'utf8');

const md = [
  `# CSS parity diff`,
  ``,
  `- original: ${originalUrl}`,
  `- rebuild:  ${rebuildUrl}`,
  `- **${totalDiffs} total style diffs across ${totalPaired} paired elements; ${fullyMatching} fully matching**`,
  ``,
  ...report.flatMap((r) => {
    if (r.countMismatch) return [`## \`${r.selector}\` — COUNT MISMATCH: original ${r.countMismatch.original} vs rebuild ${r.countMismatch.rebuild}`, ``];
    const head = `## \`${r.selector}\`[${r.index}] ${r.framerName ? `(${r.framerName}) ` : ''}— "${r.text}"`;
    const rows = r.diffs.map((d) => `- \`${d.prop}\`: original \`${d.original}\` → rebuild \`${d.rebuild}\``);
    return [head, ...rows, ``];
  }),
].join('\n');

await writeFile(join(outDir, 'css-diff.md'), md, 'utf8');
console.log(`${totalDiffs} diffs across ${totalPaired} paired (${fullyMatching} fully matching) → ${join(outDir, 'css-diff.md')}`);
