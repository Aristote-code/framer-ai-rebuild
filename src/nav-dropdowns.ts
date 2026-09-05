import { chromium } from 'playwright';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

// NAV DROPDOWN CAPTURE
//
// Framer MOUNTS mega-menu panels on hover — they are not in the resting DOM at
// all (framer-ai.com's header has only three 8×8 chevrons until you point at a
// nav item, then a 1440×900 panel with a dozen links appears). So a static DOM
// dump can never contain them, and a rebuild made from one has dead nav
// dropdowns no matter how faithful everything else is.
//
// This captures them by hovering each nav trigger with a MutationObserver
// running, taking the outermost newly-mounted subtree, and inlining its
// computed styles so the panel renders standalone in the rebuild.
//
// Captured ONCE per site, not per page: the header is shared across routes, so
// `rebuild-site` injects the same panels into every route. That also means
// adding dropdowns doesn't require re-extracting pages already captured.

const INLINE_PROPS = [
  'display', 'position', 'top', 'right', 'bottom', 'left', 'zIndex', 'boxSizing',
  'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight',
  'margin', 'padding', 'flexDirection', 'flexWrap', 'justifyContent', 'alignItems',
  'alignContent', 'alignSelf', 'flexGrow', 'flexShrink', 'flexBasis', 'gap',
  'rowGap', 'columnGap', 'order', 'gridTemplateColumns', 'gridTemplateRows',
  'gridColumn', 'gridRow', 'placeItems', 'placeContent',
  'color', 'backgroundColor', 'backgroundImage', 'backgroundSize',
  'backgroundPosition', 'backgroundRepeat', 'backgroundClip',
  'borderRadius', 'border', 'borderColor', 'borderWidth', 'borderStyle',
  'boxShadow', 'outline', 'opacity', 'overflow', 'overflowX', 'overflowY',
  'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight',
  'letterSpacing', 'textAlign', 'textDecoration', 'textTransform', 'whiteSpace',
  'textOverflow', 'verticalAlign', 'listStyle', 'objectFit', 'objectPosition',
  'transform', 'transformOrigin', 'filter', 'backdropFilter', 'mixBlendMode',
  'pointerEvents', 'cursor', 'visibility', 'aspectRatio', 'inset',
];

export interface NavDropdown {
  triggerText: string;
  framerName?: string | null;
  width: number;
  height: number;
  linkCount: number;
  html: string;
}

export async function captureNavDropdowns(
  url: string,
  opts: { headless?: boolean } = {}
): Promise<NavDropdown[]> {
  // headed by default for the same reason as everything else here: Framer's
  // hover/mount path is rAF-driven and frequently no-ops under headless.
  const browser = await chromium.launch({
    headless: opts.headless ?? false,
    args: ['--disable-blink-features=AutomationControlled', '--hide-scrollbars'],
  });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page
      .goto(url, { waitUntil: 'networkidle', timeout: 25000 })
      .catch(() => page.goto(url, { waitUntil: 'load', timeout: 45000 }));
    await page.waitForTimeout(3000);

    await page.evaluate(() => {
      (window as any).__esiAdded = [];
      (window as any).__esiMo = new MutationObserver((muts) => {
        for (const m of muts) {
          for (const n of Array.from(m.addedNodes)) {
            if (n.nodeType === 1) (window as any).__esiAdded.push(n);
          }
        }
      });
      (window as any).__esiMo.observe(document.body, { childList: true, subtree: true });
    });

    const triggers: string[] = await page.evaluate(() => {
      const nav = document.querySelector('nav') || document.querySelector('header');
      if (!nav) return [];
      const out: string[] = [];
      for (const e of Array.from(nav.querySelectorAll('*'))) {
        if (e.children.length !== 0) continue;
        const t = (e.textContent ?? '').trim();
        if (t.length < 3 || t.length > 20) continue;
        if (!out.includes(t)) out.push(t);
      }
      return out;
    });

    const found: NavDropdown[] = [];
    for (const t of triggers) {
      await page.evaluate(() => { (window as any).__esiAdded = []; });
      try {
        await page.locator(`nav >> text="${t}"`).first().hover({ timeout: 2500 });
      } catch {
        continue; // not hoverable (covered, offscreen) — nothing to capture
      }
      await page.waitForTimeout(900);

      const panel = await page.evaluate((props) => {
        const added: Element[] = ((window as any).__esiAdded as Element[]).filter((n) => {
          if (!n.isConnected) return false;
          const r = n.getBoundingClientRect();
          return r.width > 200 && r.height > 100;
        });
        // outermost only — the panel plus all its children get reported
        const outer = added.filter((n) => !added.some((o) => o !== n && o.contains(n)));
        if (!outer.length) return null;
        const el = outer[0] as HTMLElement;

        // Inline the OPEN state's computed styles so the panel renders on its
        // own in the rebuild (it has no entry in computed-styles.json — it
        // didn't exist when that pass ran).
        const clone = el.cloneNode(true) as HTMLElement;
        const srcNodes = [el, ...Array.from(el.querySelectorAll('*'))] as HTMLElement[];
        const dstNodes = [clone, ...Array.from(clone.querySelectorAll('*'))] as HTMLElement[];
        for (let i = 0; i < srcNodes.length && i < dstNodes.length; i++) {
          const cs = getComputedStyle(srcNodes[i]);
          const decl: string[] = [];
          for (const p of props) {
            const v = cs.getPropertyValue(p.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()));
            if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'visible') {
              decl.push(`${p.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())}:${v}`);
            }
          }
          // the panel itself must not carry the trigger-driven hide state
          if (i === 0) decl.push('opacity:1', 'visibility:visible', 'pointer-events:auto');
          dstNodes[i].setAttribute('style', decl.join(';'));
          dstNodes[i].removeAttribute('data-cs-id');
        }
        // absolutise links + assets: the mirror serves document-relative paths
        // that would resolve differently from the rebuild's route.
        for (const a of Array.from(clone.querySelectorAll('a[href]'))) {
          const i = Array.from(clone.querySelectorAll('a[href]')).indexOf(a);
          const live = el.querySelectorAll('a[href]')[i] as HTMLAnchorElement | undefined;
          if (live?.href) a.setAttribute('href', live.href);
        }
        for (const tag of ['img', 'source', 'video']) {
          const clones = Array.from(clone.querySelectorAll(tag));
          const lives = Array.from(el.querySelectorAll(tag));
          for (let i = 0; i < clones.length; i++) {
            const lv = lives[i] as HTMLImageElement | undefined;
            if (lv && (lv as any).currentSrc) clones[i].setAttribute('src', (lv as any).currentSrc);
            clones[i].removeAttribute('srcset');
          }
        }
        return {
          framerName: el.getAttribute('data-framer-name'),
          width: Math.round(el.getBoundingClientRect().width),
          height: Math.round(el.getBoundingClientRect().height),
          linkCount: el.querySelectorAll('a[href]').length,
          html: clone.outerHTML,
        };
      }, INLINE_PROPS);

      if (panel) {
        found.push({ triggerText: t, ...panel });
        console.log(`  ▾ "${t}" → ${panel.framerName ?? 'panel'} ${panel.width}×${panel.height}, ${panel.linkCount} link(s), ${(panel.html.length / 1024).toFixed(0)}KB`);
      }
      // move away so the next hover starts from a closed state
      await page.mouse.move(5, 700);
      await page.waitForTimeout(700);
    }
    return found;
  } finally {
    await browser.close();
  }
}

export async function writeNavDropdowns(outDir: string, panels: NavDropdown[]) {
  await mkdir(join(outDir, 'motion'), { recursive: true });
  await writeFile(
    join(outDir, 'motion', 'nav-dropdowns.json'),
    JSON.stringify({ capturedAt: new Date().toISOString(), panels }, null, 2),
    'utf8'
  );
  console.log(`  🧭 nav-dropdowns.json (${panels.length} panel(s))`);
}
