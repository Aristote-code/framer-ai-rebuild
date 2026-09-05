// computed-styles.ts — capture per-element computed CSS so a rebuild can
// inline the layout-critical values that framer's runtime sets at mount time.
//
// flow:
//   1. annotate every visible element with `data-cs-id="N"` (stable identifier)
//   2. dump getComputedStyle() for ~40 visual properties per node
//   3. write to dom/computed-styles.json keyed by cs-id
//
// the rebuild then walks each section's html with cheerio, looks up styles by
// cs-id, and inlines them as `style="..."` attributes — bypassing the need
// for framer's runtime to compute layout dynamically.

import { Page, BrowserContext } from "playwright";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { autoScroll } from "./static.ts";

// the list of CSS properties that matter for visual reproduction. anything not
// in here either inherits cleanly or doesn't affect rendering.
const VISUAL_PROPS = [
  // box model
  "width", "height", "min-width", "min-height", "max-width", "max-height",
  "padding", "margin",
  // positioning
  "position", "top", "right", "bottom", "left", "z-index", "inset",
  // display / layout
  "display", "flex-direction", "flex-wrap", "justify-content", "align-items",
  "align-content", "gap", "row-gap", "column-gap",
  "grid-template-columns", "grid-template-rows", "grid-area",
  // visual
  "background", "background-color", "background-image", "background-size",
  "background-position", "background-repeat",
  "border", "border-radius", "box-shadow", "outline",
  "opacity", "filter", "backdrop-filter", "mix-blend-mode",
  "transform", "transform-origin", "perspective",
  // typography
  "font-family", "font-size", "font-weight", "font-style", "line-height",
  "letter-spacing", "text-align", "text-transform", "text-decoration",
  "color", "white-space",
  // overflow + visibility
  "overflow", "overflow-x", "overflow-y", "visibility", "pointer-events",
  // misc
  "object-fit", "object-position", "aspect-ratio",
];

// props whose "none" is a real, high-value signal (display:none = hidden at
// this breakpoint — the single most common responsive change) rather than an
// unset-default we want to filter out.
const KEEP_NONE_FOR = new Set(["display"]);

export async function captureComputedStyles(page: Page, outDir: string) {
  await mkdir(join(outDir, "dom"), { recursive: true });

  const result = await page.evaluate(({ props, keepNoneFor }) => {
    // assign a stable id to every visible element
    let counter = 0;
    const out: Record<string, Record<string, string>> = {};

    // skip script/style/meta/etc — only walk visual nodes
    const SKIP = new Set(["SCRIPT", "STYLE", "META", "LINK", "HEAD", "TITLE", "BR", "NOSCRIPT"]);

    function walk(el: Element) {
      if (SKIP.has(el.tagName)) return;
      const id = String(counter++);
      el.setAttribute("data-cs-id", id);
      const cs = window.getComputedStyle(el);
      const styles: Record<string, string> = {};
      for (const prop of props) {
        const v = cs.getPropertyValue(prop);
        const isDefaultish = v === "normal" || v === "auto" || v === "0px" || (v === "none" && !keepNoneFor.includes(prop));
        if (v && !isDefaultish) {
          styles[prop] = v;
        }
      }
      // also pull bounding box — useful for sanity checks + as fallback for layout
      const r = el.getBoundingClientRect();
      if (r.width > 0 || r.height > 0) {
        styles.__bbox = `${Math.round(r.width)}x${Math.round(r.height)}`;
      }
      if (Object.keys(styles).length > 0) {
        out[id] = styles;
      }
      for (const child of Array.from(el.children)) walk(child);
    }

    if (document.body) walk(document.body);
    return { count: counter, styles: out };
  }, { props: VISUAL_PROPS, keepNoneFor: Array.from(KEEP_NONE_FOR) });

  const path = join(outDir, "dom", "computed-styles.json");
  await writeFile(path, JSON.stringify(result.styles, null, 0), "utf8");
  console.log(`  🎨 computed-styles.json (${result.count} nodes, ${Object.keys(result.styles).length} with styles)`);
  return path;
}

// 4d: capture computed styles at a target viewport on a FRESH page load — NOT
// by resizing the already-loaded, already-scrolled desktop `page`. Verified
// empirically: resizing an already-interacted-with page leaves Framer's
// JS-driven responsive values (font-size, line-height — anything computed by
// framer-motion/its runtime rather than a plain CSS media query) stuck at a
// stale intermediate value from whatever state the page was in before the
// resize (e.g. mid-entrance-animation from the desktop scroll-through).
// Native CSS-driven properties (width/height/layout) are unaffected either
// way, but a mixed-reliability capture isn't trustworthy, so every property
// here comes from a cold start at the TARGET size.
//
// Re-walks and re-assigns data-cs-id from scratch (a fresh load has none of
// the desktop pass's tags) using the IDENTICAL deterministic DFS as
// captureComputedStyles — this only lines up with desktop's ids if the DOM
// structure/order is the same at every breakpoint. Verified on both reference
// sites (element counts matched at every breakpoint); Framer's own
// "ssr-variant hidden-X" pattern — rendering all breakpoint variants at once
// and toggling visibility via CSS — is presumably exactly why this holds.
async function walkAndCapture(page: Page): Promise<{ count: number; styles: Record<string, Record<string, string>> }> {
  return page.evaluate(({ props, keepNoneFor }) => {
    let counter = 0;
    const out: Record<string, Record<string, string>> = {};
    const SKIP = new Set(["SCRIPT", "STYLE", "META", "LINK", "HEAD", "TITLE", "BR", "NOSCRIPT"]);
    function walk(el: Element) {
      if (SKIP.has(el.tagName)) return;
      const id = String(counter++);
      el.setAttribute("data-cs-id", id);
      const cs = window.getComputedStyle(el);
      const styles: Record<string, string> = {};
      for (const prop of props) {
        const v = cs.getPropertyValue(prop);
        const isDefaultish = v === "normal" || v === "auto" || v === "0px" || (v === "none" && !keepNoneFor.includes(prop));
        if (v && !isDefaultish) styles[prop] = v;
      }
      const r = el.getBoundingClientRect();
      if (r.width > 0 || r.height > 0) styles.__bbox = `${Math.round(r.width)}x${Math.round(r.height)}`;
      if (Object.keys(styles).length > 0) out[id] = styles;
      for (const child of Array.from(el.children)) walk(child);
    }
    if (document.body) walk(document.body);
    return { count: counter, styles: out };
  }, { props: VISUAL_PROPS, keepNoneFor: Array.from(KEEP_NONE_FOR) });
}

// Orchestrates a fresh, dedicated page (own tab, same browser context) per
// non-desktop viewport: navigate cold at the target size, settle fonts, a
// short scroll-through (triggers lazy content + lets any viewport-specific
// entrance animation resolve to ITS correct resting value, not desktop's),
// return to top, then walk + capture. Mirrors how appear-effects.ts already
// isolates its own capture in a separate browser instance — the main
// extraction page is never touched, so this can't regress the phases that
// depend on its already-scrolled, already-interacted-with state.
export async function captureResponsiveStyles(
  context: BrowserContext,
  url: string,
  outDir: string,
  viewports: { name: string; width: number; height: number }[],
): Promise<void> {
  for (const vp of viewports) {
    const page = await context.newPage();
    try {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 }).catch(async () => {
        await page.goto(url, { waitUntil: "load", timeout: 60000 });
      });
      await page.evaluate(() => document.fonts.ready);
      await autoScroll(page, { stepPx: Math.round(vp.height * 0.8), pauseMs: 150 });
      await page.waitForTimeout(400);
      const result = await walkAndCapture(page);
      const path = join(outDir, "dom", `computed-styles.${vp.name}.json`);
      await writeFile(path, JSON.stringify(result.styles, null, 0), "utf8");
      console.log(`  🎨 computed-styles.${vp.name}.json (${result.count} nodes, ${Object.keys(result.styles).length} with styles, cold-loaded @${vp.width}px)`);
    } catch (e) {
      console.warn(`  ⚠️  ${vp.name} responsive capture failed:`, (e as Error).message);
    } finally {
      await page.close().catch(() => {});
    }
  }
}
