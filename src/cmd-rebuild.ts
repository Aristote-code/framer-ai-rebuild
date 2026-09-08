#!/usr/bin/env bun
// `extract-site rebuild <reference-dir> [--out <project-dir>] [--name <slug>]`
//
// transpiles an extract-site reference into a fully editable react+vite project.
// each top-level section becomes its own component (editable html literal +
// framer-motion entry animation). framer's css is preserved verbatim so layouts
// stay pixel-faithful. user can reorder, remove, replace, or add sections by
// editing real react code.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import { htmlToJsxComponent, convertHtmlToJsx, renderContentModule, type JsxAnnotations, type MotionProps } from "./html-to-jsx.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILL_DIR = path.resolve(__dirname, "..");
const TPL_DIR   = path.join(SKILL_DIR, "templates", "rebuild");

interface Args {
  reference: string;
  out: string;
  name: string;
  sourceMirror?: string;
}

function parseArgs(argv: string[]): Args {
  const args = argv.slice(3); // strip [bun, script, "rebuild"]
  const positional = args.filter((a, i) => !a.startsWith("--") && !args[i - 1]?.startsWith("--"));
  const reference = positional[0];
  if (!reference) {
    console.error("Usage: extract-site rebuild <reference-dir> [--out <project-dir>] [--name <slug>]");
    process.exit(1);
  }
  const get = (k: string) => {
    const i = args.indexOf(`--${k}`);
    return i >= 0 ? args[i + 1] : undefined;
  };
  const refResolved = path.resolve(process.cwd(), reference);
  const fallbackName = path.basename(refResolved).replace(/[^a-z0-9]+/gi, "-").toLowerCase() || "rebuild";
  const name = get("name") ?? fallbackName;
  const out  = path.resolve(process.cwd(), get("out") ?? `${fallbackName}-rebuild`);
  const sourceMirrorRaw = get("source-mirror");
  const sourceMirror = sourceMirrorRaw ? path.resolve(process.cwd(), sourceMirrorRaw) : undefined;
  return { reference: refResolved, out, name, sourceMirror };
}

function readJsonSafe(p: string): unknown {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

// ─── asset path rewriter ─────────────────────────────────────────────────
// extract-site saves assets with hash prefixes like "ba885af0-original.png" to
// dedupe + correct mistyped extensions (e.g. .png that's actually avif). the
// html and css still reference the ORIGINAL filenames. this map lets us rewrite
// every reference (img src, srcset, css url()) to the actual saved path.

interface ManifestEntry {
  originalUrl: string;
  localPath: string;
  type: string;
  ok: boolean;
}

interface AssetRewriter {
  rewrite(input: string): string;
}

function buildAssetRewriter(reference: string): AssetRewriter {
  const manifestPath = path.join(reference, "assets", "manifest.json");
  const manifest = readJsonSafe(manifestPath) as ManifestEntry[] | null;
  if (!manifest || !Array.isArray(manifest)) {
    return { rewrite: (s) => s };
  }

  // basename(originalUrl) → public-relative path like "/images/HASH-NAME.ext"
  const map = new Map<string, string>();
  for (const entry of manifest) {
    if (!entry?.ok) continue;
    const origBase = path.basename(entry.originalUrl.split("?")[0]);
    const localBase = path.basename(entry.localPath);
    const sub = entry.type === "font" ? "fonts" : entry.type === "video" ? "videos" : entry.type === "audio" ? "audio" : "images";
    map.set(origBase, `/${sub}/${localBase}`);
  }

  // sort longer keys first so we never partially shadow a longer match
  const keys = Array.from(map.keys()).sort((a, b) => b.length - a.length);

  return {
    rewrite(input) {
      let out = input;
      for (const k of keys) {
        if (!out.includes(k)) continue;
        const escapedBase = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        // consume any optional URL prefix path (./__mirror/.../images/) along
        // with the basename so we don't end up with `/images//images/...`
        // doubled paths. covers: bare basename, ./path/X, /path/X, full URL.
        // A srcset candidate list is comma-separated with no required space
        // ("url1 512w,url2 1000w"), so the lookbehind ALSO accepts a comma as
        // a valid boundary (letting a match start right after one) — but the
        // prefix-consumption group EXCLUDES commas from what it can eat, so
        // it can anchor at a comma without ever being able to backtrack PAST
        // one. Without both halves of this: allow only whitespace/quote to
        // anchor → the match can't start after a bare comma, so the greedy
        // prefix consumption instead anchors on the space before the PRIOR
        // candidate's descriptor and swallows forward across it — eating
        // "512w,https://.../images/" whole and silently deleting the
        // descriptor + comma along with the domain.
        const re = new RegExp(
          `(?<=["'(\\s,])(?:[^"'(\\s,)]*\\/)?${escapedBase}(?=$|[?"'\\s),])`,
          "g",
        );
        out = out.replace(re, map.get(k)!);
      }
      // any leftover `./__mirror/...` paths fall through to the source-mirror
      // copy at /public/__mirror/... (see cmd-rebuild's --source-mirror flag).
      out = out.replace(/(["'(])\.?\/?__mirror\//g, '$1/__mirror/');
      return out;
    },
  };
}

// ─── computed-styles merge ────────────────────────────────────────────────
// reads dom/computed-styles.json + walks each section's html with cheerio,
// merging the captured `getComputedStyle()` values onto every element via
// inline `style="..."`. this is what gives the rebuild visual fidelity
// without needing framer's runtime to compute layout dynamically.

type ComputedStylesMap = Record<string, Record<string, string>>;

function loadComputedStyles(reference: string, viewport?: string): ComputedStylesMap | null {
  const file = viewport ? `computed-styles.${viewport}.json` : "computed-styles.json";
  return readJsonSafe(path.join(reference, "dom", file)) as ComputedStylesMap | null;
}

// getComputedStyle RESOLVES every property, so each element arrives with ~28
// props — most of them browser defaults Framer never set (background longhands,
// outline:none, object-fit:fill, transform:none, opacity:1, …). Inlining all of
// them is the main reason the generated section files are huge and unreadable.
// Prune props that are redundant shorthand expansions or equal their initial
// value. This is purely cosmetic — defaults don't render differently — and we
// only drop NON-inherited props (plus visibility:visible, which is safe because
// a resolved `visible` means no ancestor forced hidden), so inheritance from an
// element's also-inlined ancestors can't change.
const PRUNE_REDUNDANT = new Set([
  "background",                                   // verbose shorthand; background-color is kept
  "background-position", "background-position-x", "background-position-y",
  "background-repeat", "background-attachment", "background-origin",
  "background-clip", "background-size", "background-image",
  "overflow-x", "overflow-y",                     // keep the `overflow` shorthand
]);
const PRUNE_IF_DEFAULT: Array<[string, RegExp]> = [
  ["outline", /\bnone\b/],
  ["border", /^0px none/],
  ["flex-wrap", /^nowrap$/],
  ["object-fit", /^fill$/],
  ["object-position", /^50% 50%$/],
  ["visibility", /^visible$/],
  ["overflow", /^visible$/],
  ["transform", /^(none|matrix\(1, 0, 0, 1, 0, 0\))$/],
  ["opacity", /^1$/],
  ["border-radius", /^0px$/],
  ["box-shadow", /^none$/],
  ["filter", /^none$/],
  ["align-content", /^normal$/],
  ["pointer-events", /^auto$/],
  ["mix-blend-mode", /^normal$/],
  // NB: no padding/margin prune here — 0px is NOT the UA default on every tag
  // (ul/ol/button have non-zero default padding; p/h1-h6/ul/figure have
  // non-zero default margin). Pruning an authored "padding:0px" override lets
  // the UA default reassert and shifts layout. Tag-conditional version is
  // deferred to 4d alongside the other layout-class prunes.
  // 4b: transparent background = the initial value (a rule-set bg would have
  // been CAPTURED as that color, so transparent means nothing set it).
  ["background-color", /^rgba\(0, 0, 0, 0\)$/],
  // NB: layout-class initial values (position:static, flex-direction:row,
  // display, min-*, inset, z-index) are NOT pruned — inline restatements
  // currently override framer-baseline.css rules the capture can't see
  // (verified: pruning them shifted layout, rect.x diffs ×105). Revisit in 4d
  // when framer-baseline.css is dropped and we own the whole cascade.
];

// 4b: CSS-inherited props — dropped when they EQUAL the nearest styled
// ancestor's captured value (the child would inherit the same value anyway).
// Both sides compare CAPTURED computed styles, so the resolution chain stays
// exact by induction: each element either states a value or inherits it from
// the first ancestor that does.
const INHERITED_PROPS = new Set([
  "font-family", "font-size", "font-weight", "font-style", "line-height",
  "letter-spacing", "text-align", "text-transform", "color", "white-space",
  "word-spacing", "direction", "text-indent",
]);


// ─── scrollbar-width compensation ───────────────────────────────────────────
// Chromium draws a classic 15px scrollbar, so during capture a full-width
// element resolved to `width: 1425px` at a 1440px viewport — and inlining that
// pixel value freezes every full-bleed section 15px narrow, shifting centred
// content ~7px. Captures made after the `--hide-scrollbars` fix don't have
// this, but existing references do, so detect the offset and restore those
// widths to `100%` (which is what the source CSS said).
//
// Detection is deliberately narrow: only when a consistent 1..20px gap exists
// between the captured viewport width and the widest element, and only for
// widths within half a pixel of that exact value.
function detectScrollbarInset(styles: ComputedStylesMap | null, viewportWidth: number): number {
  if (!styles || !viewportWidth) return 0;
  // FREQUENCY, not maximum. `body`/`html` legitimately resolve to the full
  // viewport width (they're not inside the scrolling box), so taking the widest
  // element finds 1440 and hides the problem. Every *content* element that
  // wanted 100% resolved to viewport-minus-scrollbar instead, so the real
  // signal is the most COMMON near-viewport width — on framer-ai's homepage
  // 1425px appears 24 times against a single 1440px.
  const counts = new Map<number, number>();
  for (const cs of Object.values(styles)) {
    const w = parseFloat(String((cs as Record<string, string>)["width"] ?? ""));
    if (!Number.isFinite(w)) continue;
    if (w > viewportWidth || w < viewportWidth - 25) continue;
    const k = Math.round(w * 2) / 2; // half-pixel buckets
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  let best = 0;
  let bestCount = 0;
  for (const [w, c] of counts) {
    if (c > bestCount || (c === bestCount && w > best)) { best = w; bestCount = c; }
  }
  // need real repetition to believe it — a couple of odd widths prove nothing
  if (bestCount < 3) return 0;
  const inset = viewportWidth - best;
  return inset > 0 && inset <= 20 ? inset : 0;
}

function compensateScrollbarWidth(
  styles: ComputedStylesMap | null,
  viewportWidth: number,
  inset: number,
): number {
  if (!styles || !inset) return 0;
  const target = viewportWidth - inset;
  let fixed = 0;
  for (const cs of Object.values(styles)) {
    const rec = cs as Record<string, string>;
    for (const prop of ["width", "maxWidth", "max-width", "minWidth", "min-width"]) {
      const raw = rec[prop];
      if (!raw || !raw.endsWith("px")) continue;
      if (Math.abs(parseFloat(raw) - target) > 0.5) continue;
      rec[prop] = "100%";
      fixed++;
    }
  }
  return fixed;
}

function pruneComputedStyles(
  cs: Record<string, string>,
  tag?: string,
  parentCs?: Record<string, string>,
): Record<string, string> {
  const defaults = new Map(PRUNE_IF_DEFAULT);
  const gap = cs["gap"];
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(cs)) {
    if (k.startsWith("__")) { out[k] = v; continue; } // metadata (__bbox) passes through
    if (PRUNE_REDUNDANT.has(k)) continue;
    // row/column-gap: keep only when they differ from the `gap` shorthand
    if ((k === "row-gap" || k === "column-gap")) {
      if (gap != null && v !== gap) out[k] = v;
      continue;
    }
    if (k === "gap" && /^normal$/.test(v)) continue;
    // 4b: inherited prop equal to the nearest styled ancestor's captured value
    // → the cascade reproduces it; drop the restatement.
    if (parentCs && INHERITED_PROPS.has(k) && parentCs[k] === v) continue;
    // (display / margin / padding tag-default prunes deferred to 4d — see the
    // PRUNE_IF_DEFAULT note; they unmasked baseline-css rules and shifted layout.)
    void tag;
    const def = defaults.get(k);
    if (def && def.test(v)) continue;
    out[k] = v;
  }
  // transform-origin is meaningless without a transform — drop it if transform
  // was pruned or absent.
  if (!("transform" in out)) delete out["transform-origin"];
  return out;
}

function mergeStyleString(
  existing: string | undefined,
  computedRaw: Record<string, string>,
  tag?: string,
  parentCs?: Record<string, string>,
): string {
  const computed = pruneComputedStyles(computedRaw, tag, parentCs);
  // existing inline styles are AUTHOR-INTENT (framer set them deliberately).
  // computed styles are FALLBACK for properties the author didn't inline.
  // strategy: build the final declaration list with computed first, then existing
  // overrides last so they win cascade order.
  const seen = new Set<string>();
  const parts: string[] = [];
  for (const [prop, val] of Object.entries(computed)) {
    if (prop.startsWith("__")) continue; // skip metadata like __bbox
    seen.add(prop);
    parts.push(`${prop}:${val}`);
  }
  if (existing) {
    for (const decl of existing.split(";")) {
      const m = decl.match(/^\s*([\w-]+)\s*:\s*(.+?)\s*$/);
      if (!m) continue;
      const prop = m[1].toLowerCase();
      if (seen.has(prop)) {
        // override: replace the earlier computed value
        const idx = parts.findIndex((p) => p.startsWith(prop + ":"));
        if (idx >= 0) parts[idx] = `${prop}:${m[2]}`;
      } else {
        parts.push(`${prop}:${m[2]}`);
      }
    }
  }
  return parts.join(";");
}

function applyComputedStyles(html: string, styles: ComputedStylesMap | null): string {
  if (!styles) return html;
  const $ = cheerio.load(html, { decodeEntities: false }, false);
  $("[data-cs-id]").each((_, el) => {
    const id = $(el).attr("data-cs-id");
    if (!id) return;
    const cs = styles[id];
    if (!cs) return;
    // nearest styled ancestor — the inheritance source for the 4b dedup.
    // cheerio .parents() returns closest-first.
    let parentCs: Record<string, string> | undefined;
    const ancestors = $(el).parents("[data-cs-id]");
    for (let i = 0; i < ancestors.length; i++) {
      const aid = $(ancestors[i]).attr("data-cs-id");
      if (aid && styles[aid]) { parentCs = styles[aid]; break; }
    }
    const tag = ((el as any).name as string | undefined)?.toLowerCase();
    const merged = mergeStyleString($(el).attr("style"), cs, tag, parentCs);
    if (merged) $(el).attr("style", merged);
  });
  return $.html();
}

// ─── post-processing for section html ────────────────────────────────────
// framer's initial state encoded inline (opacity:0.001, transform:translateY)
// keeps elements invisible until framer's runtime animates them in. without
// that runtime we'd see a blank page. so: snap initial opacity to 1 and
// strip the initial transform so elements appear immediately. (framer-motion
// will still drive section-level entry animations on top of this.)

function neutralizeFramerInitialState(html: string): string {
  return html
    // opacity: 0.001 → opacity: 1 (Framer's GPU-layer entrance trick)
    .replace(/opacity\s*:\s*0\.0+1\s*;?/g, "opacity: 1;")
    // will-change: transform with opacity:0.001 friend — also strip the matching
    // initial transform so the element doesn't sit translated/scaled forever
    .replace(/transform\s*:\s*translate[XY]?\(-?\d+(?:\.\d+)?(?:px|%)\)(?:\s+(?:rotate|scale|translate)\([^)]+\))?\s*;?/g, (m) => {
      // only strip if it looks like an initial-state translate (Y±, X±, or scale 0.x).
      // if it's a deliberate transform (rotate(90deg) etc), keep it.
      if (/translate(?:Y|X)?\(-?\d+px\)/.test(m) || /scale\(0\./.test(m)) return "";
      return m;
    })
    // matrix() / matrix3d() entrance scale-from-~0 states. Framer bakes the
    // initial scale into a matrix (which the translate/scale-keyword rule above
    // misses), and these aren't always captured as appear effects — so the
    // element stays collapsed to ~0 size and is invisible (this hid tourly's
    // entire hero text block). Discriminate via the 2x2 determinant: a
    // scale-to-zero collapses area (det≈0) and is reset to none; a rotation or
    // legitimate scale preserves area (det≈1, e.g. rotate 90° = matrix(0,-1,1,0))
    // and is kept.
    .replace(/transform\s*:\s*(matrix3d|matrix)\(([^)]*)\)\s*;?/g, (full, kind, args) => {
      const n = String(args).split(",").map((s) => parseFloat(s));
      const a = n[0], b = n[1];
      const c = kind === "matrix3d" ? n[4] : n[2];
      const d = kind === "matrix3d" ? n[5] : n[3];
      if ([a, b, c, d].every((x) => Number.isFinite(x)) && Math.abs(a * d - b * c) < 0.001) return "";
      return full;
    });
}

// ─── css extraction ───────────────────────────────────────────────────────
// pull every <style>…</style> from full.html into a single concatenated string.
// preserves the exact rules framer ships (custom properties, font-face,
// .framer-* class definitions, layout grid rules, etc).

function extractStylesFromHtml(html: string): string {
  const styles: string[] = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    styles.push(m[1]);
  }
  // also pull any <link rel="stylesheet" href="..."> hrefs into a comment so the
  // user can manually inline them if visuals are off.
  const linkRe = /<link[^>]+rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
  const links: string[] = [];
  while ((m = linkRe.exec(html)) !== null) {
    links.push(m[1]);
  }

  const banner = `/* framer-baseline.css — extracted verbatim from the source mirror.
   contains every <style> block from the original page in cascade order.
   do NOT hand-edit; if you need overrides, put them in app.css. */\n\n`;
  const linkComment = links.length
    ? `/* the source page also linked these external stylesheets:\n${links.map(l => `   - ${l}`).join("\n")}\n   if visuals are off, manually inline their contents below. */\n\n`
    : "";
  return banner + linkComment + styles.join("\n\n/* ─── next <style> block ─── */\n\n");
}

// ─── section parsing ──────────────────────────────────────────────────────
// each section file from extract is a single-line html subtree. pull off the
// outer <section> tag's data-framer-name (or fall back to filename).

function parseSection(html: string, fallbackName: string): { framerName: string; html: string } {
  const m = /<(section|div|main|article|aside)\b[^>]*\bdata-framer-name=["']([^"']+)["']/.exec(html);
  return {
    framerName: m?.[2] ?? fallbackName,
    html,
  };
}

function toPascalCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("") || "Section";
}

// ─── shared animation-entry types ──────────────────────────────────────────
// extract-site's animations.json has every animated element with:
//   { selector, classification, sectionSlug, cssDuration, cssTimingFunction, ... }

interface AnimEntry {
  selector?: string;
  framerName?: string;
  classification?: string[];
  sectionSlug?: string;
  cssDuration?: string;
  cssTimingFunction?: string;
  cssDelay?: string;
}

function parseDurationToSeconds(s?: string): number | undefined {
  if (!s) return undefined;
  const m = /^([\d.]+)(ms|s)?$/.exec(s.trim());
  if (!m) return undefined;
  const n = Number(m[1]);
  return m[2] === "ms" ? n / 1000 : n;
}

// ─── appear-effect timing join ─────────────────────────────────────────────
// appear-effects.json captures the entrance FROM-state (opacity:0, translateY…)
// but no timing. the measured durations/easings live in animations.json — most
// reliably in the `cdp` array (framer drives appear effects via WAAPI, captured
// by CDP), with the `computed` CSS scan as a secondary source. we join the two
// by framerName (the only shared key), fall back to the page-dominant timing for
// the many effects with no framerName, and let the runtime fall back to the
// framer-default curve when even that is missing.

interface CdpEntry {
  duration?: number;   // milliseconds
  delay?: number;      // milliseconds
  easing?: string;
  framerName?: string;
  sectionSlug?: string;
  bbox?: { x: number; y: number; w: number; h: number };  // document-relative
}

interface AppearTiming {
  duration?: number;   // seconds
  delay?: number;      // seconds (stagger offsets from CDP)
  easing?: string;     // raw CSS timing function
}

function tallyDominant(list: AppearTiming[]): AppearTiming {
  const freq = new Map<string, { t: AppearTiming; n: number }>();
  for (const t of list) {
    if (t.duration == null && !t.easing) continue;
    const key = `${t.duration ?? "?"}|${t.easing ?? "?"}`;
    const cur = freq.get(key);
    if (cur) cur.n++;
    else freq.set(key, { t, n: 1 });
  }
  let dominant: AppearTiming = {};
  let best = 0;
  for (const { t, n } of freq.values()) if (n > best) { best = n; dominant = t; }
  return dominant;
}

function buildAppearTiming(
  animations: { computed?: AnimEntry[]; cdp?: CdpEntry[] } | null,
): { byFramerName: Map<string, AppearTiming>; byWxH: Map<string, AppearTiming | null>; dominant: AppearTiming } {
  const byFramerName = new Map<string, AppearTiming>();
  // W×H join: computed-styles __bbox only stores "WxH" (no x/y), but a CDP
  // entry and its appear element were measured on the SAME live page, so a
  // unique size match identifies the element. Ambiguous sizes map to null.
  const byWxH = new Map<string, AppearTiming | null>();
  const cdpTimings: AppearTiming[] = [];
  const computedTimings: AppearTiming[] = [];

  // An entry counts as a real ENTRANCE timing only within a plausible duration
  // window. Lower bound: > 0 excludes the many computed-scan elements that
  // resolve to `0s` (not animating) — a 0s mapping would override the dominant
  // with an instant snap. Upper bound: entrance reveals are essentially always
  // under ~2.5s; anything longer is a MARQUEE / infinite loop / scroll-linked
  // animation, NOT an entrance. Without the cap, a site whose only captured CDP
  // animation is a 47s logo-marquee (real case: portfoleon) makes that 47s the
  // "dominant" and applies it to EVERY inlined entrance → the whole page fades
  // in over 47 seconds and looks permanently half-invisible. Excluded entries
  // fall through to the framer-default 0.8s, which is correct for an entrance.
  const MAX_APPEAR_DURATION = 3; // seconds
  const isReal = (t: AppearTiming) => t.duration != null && t.duration > 0 && t.duration <= MAX_APPEAR_DURATION;

  // cdp first (measured WAAPI entrances) — these win the framerName lookup.
  for (const a of animations?.cdp ?? []) {
    const t: AppearTiming = {
      duration: a.duration != null ? a.duration / 1000 : undefined,
      delay: a.delay != null && a.delay > 0 ? a.delay / 1000 : undefined,
      easing: a.easing,
    };
    if (!isReal(t)) continue;
    cdpTimings.push(t);
    if (a.framerName && !byFramerName.has(a.framerName)) byFramerName.set(a.framerName, t);
    if (a.bbox) {
      const key = `${Math.round(a.bbox.w)}x${Math.round(a.bbox.h)}`;
      byWxH.set(key, byWxH.has(key) ? null : t); // duplicate size → ambiguous
    }
  }
  // computed CSS scan fills framerName gaps cdp didn't cover.
  for (const a of animations?.computed ?? []) {
    const t: AppearTiming = {
      duration: parseDurationToSeconds(a.cssDuration),
      easing: a.cssTimingFunction,
    };
    if (!isReal(t)) continue;
    computedTimings.push(t);
    if (a.framerName && !byFramerName.has(a.framerName)) byFramerName.set(a.framerName, t);
  }

  // dominant = most frequent timing among the measured entrances (cdp preferred).
  // (delay is intentionally excluded from dominance — it's per-element stagger.)
  const dominant = cdpTimings.length
    ? tallyDominant(cdpTimings.map((t) => ({ duration: t.duration, easing: t.easing })))
    : tallyDominant(computedTimings);
  return { byFramerName, byWxH, dominant };
}

// ─── 4a: inline-motion helpers ───────────────────────────────────────────────

// CSS timing function → framer-motion `ease` (generation-time twin of the
// runtime's parseEasing). undefined → caller falls back to the framer default.
const GEN_NAMED_EASINGS: Record<string, [number, number, number, number]> = {
  ease: [0.25, 0.1, 0.25, 1],
  "ease-in": [0.42, 0, 1, 1],
  "ease-out": [0, 0, 0.58, 1],
  "ease-in-out": [0.42, 0, 0.58, 1],
};
function parseEaseForMotion(raw?: string): number[] | "linear" | undefined {
  if (!raw) return undefined;
  const v = raw.trim().toLowerCase();
  if (v === "linear") return "linear";
  if (v in GEN_NAMED_EASINGS) return GEN_NAMED_EASINGS[v];
  const m = /cubic-bezier\(\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*\)/.exec(v);
  if (m) {
    const nums = m.slice(1, 5).map(Number);
    if (nums.every((n) => Number.isFinite(n))) return nums;
  }
  return undefined;
}

// Parse a captured entrance transform string into individual framer-motion
// props (x / y / scale / rotate / skewX / skewY). Individual props are what
// framer-motion interpolates reliably — animating a raw complex transform
// STRING is exactly the bug that collapsed elements to matrix(0) before.
// Returns null when the string can't be represented (matrix/3d forms) — those
// elements stay on the runtime's CSS-transition path instead.
function parseTransformToMotionProps(t: string | undefined): Record<string, number | string> | null {
  if (!t || t === "none") return {};
  if (/matrix|perspective|rotate3d|translate3d|translateZ|scale3d|rotate[XY]\(/i.test(t)) return null;
  const out: Record<string, number | string> = {};
  const re = /(translateX|translateY|translate|scaleX|scaleY|scale|rotate|skewX|skewY)\(([^)]*)\)/g;
  let m: RegExpExecArray | null;
  const px = (s: string): number | string => (s.trim().endsWith("%") ? s.trim() : parseFloat(s));
  while ((m = re.exec(t))) {
    const args = m[2].split(",").map((s) => s.trim());
    switch (m[1]) {
      case "translateX": out.x = px(args[0]); break;
      case "translateY": out.y = px(args[0]); break;
      case "translate": out.x = px(args[0]); if (args[1]) out.y = px(args[1]); break;
      case "scale": out.scale = parseFloat(args[0]); break;
      case "scaleX": out.scaleX = parseFloat(args[0]); break;
      case "scaleY": out.scaleY = parseFloat(args[0]); break;
      case "rotate": out.rotate = parseFloat(args[0]); break;
      case "skewX": out.skewX = parseFloat(args[0]); break;
      case "skewY": out.skewY = parseFloat(args[0]); break;
    }
  }
  // BAIL on anything we couldn't parse to a real number. Framer emits
  // `translate(calc(-50% - 9.2px), -50%)` for centring-with-an-offset, and
  // `parseFloat("calc(…)")` is NaN — which serialises into the generated JSX as
  // `initial={{ x: null }}`, failing `tsc -b` and handing framer-motion a null.
  // Returning null routes the effect to the runtime instead, which replays the
  // raw transform string via a CSS transition and interpolates calc() fine.
  for (const v of Object.values(out)) {
    if (typeof v === "number" && !Number.isFinite(v)) return null;
  }
  // drop identity values — they add noise and animate to themselves anyway
  for (const [k, v] of Object.entries(out)) {
    const idle = k === "scale" || k === "scaleX" || k === "scaleY" ? 1 : 0;
    if (typeof v === "number" && Math.abs(v - idle) < 1e-6) delete out[k];
  }
  return out;
}

// resting target for a motion prop (what whileInView animates to)
function motionRestingValue(
  key: string,
  initial: number | string,
  cs?: Record<string, string> | null,
): number | string {
  if (key === "scale" || key === "scaleX" || key === "scaleY") return 1;

  // PERCENTAGE TRANSLATES ARE AMBIGUOUS — decide by whether there's an anchor.
  // `translateX(-50%)` means two completely different things in Framer output:
  //   * CENTRING, when the element is absolutely/fixed positioned against an
  //     explicit left/top (academy's sidebar: position:fixed, left:720px). The
  //     translate is part of the layout and must be KEPT — animating it to 0
  //     slid that sidebar 620px off its column.
  //   * An ENTRANCE OFFSET, when the element sits in normal flow with no
  //     left/top to offset against (collaborate's `CTA`: position:relative,
  //     left:auto, width:1440px). Here the translate must animate to 0 —
  //     holding it parked the "Everything your…" heading at left:-600, fully
  //     off-screen.
  // A percentage can only centre against something, so the anchor is the tell.
  if (typeof initial === "string" && initial.endsWith("%")) {
    const positioned = cs?.position === "absolute" || cs?.position === "fixed";
    const axisAnchored =
      key === "x"
        ? isLength(cs?.left) || isLength(cs?.right)
        : key === "y"
          ? isLength(cs?.top) || isLength(cs?.bottom)
          : false;
    if (positioned && axisAnchored) return initial; // centring — hold it
    return "0%"; // entrance offset — animate it away
  }
  return 0;
}

/** A CSS length that actually anchors (not `auto`, not missing). */
function isLength(v: string | undefined | null): boolean {
  return typeof v === "string" && v.trim() !== "" && v !== "auto" && /[\d.]/.test(v);
}


// hover deltas expressible as pure CSS :hover rules (everything else stays on
// the runtime). transform is safe here — CSS interpolates full strings.
const CSS_HOVER_SAFE = new Set([
  "color", "backgroundColor", "borderColor", "opacity", "transform",
  "boxShadow", "filter", "letterSpacing", "borderRadius", "fill", "stroke",
  "textDecorationColor", "outlineColor",
]);
const kebab = (p: string) => p.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());

// ─── asset copy ──────────────────────────────────────────────────────────

function copyDirContents(src: string, dst: string) {
  if (!fs.existsSync(src)) return 0;
  fs.mkdirSync(dst, { recursive: true });
  let n = 0;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const sp = path.join(src, entry.name);
    const dp = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      n += copyDirContents(sp, dp);
    } else {
      fs.copyFileSync(sp, dp);
      n++;
    }
  }
  return n;
}

// ─── template copy with marker interpolation ──────────────────────────────

function copyTemplate(src: string, dst: string, replacements: Record<string, string>) {
  let content = fs.readFileSync(src, "utf8");
  for (const [k, v] of Object.entries(replacements)) {
    content = content.replaceAll(k, v);
  }
  fs.writeFileSync(dst, content);
}

// ─── main ────────────────────────────────────────────────────────────────


// ─── navigation hrefs ───────────────────────────────────────────────────────
// Some Framer hosts (framer-ai.com among them) are wget-style MIRRORS: their
// markup carries document-relative links like `../../academy/index.html` plus
// `.html` suffixes, and even `../../../framerusercontent.com/...` for assets.
// Those resolve correctly at the mirror's own depth, but the rebuild serves
// its page from `/`, so every `../../` escapes the root and the whole nav
// dead-ends. Normalize them to root-absolute routes.
//
// A route we actually rebuilt becomes an internal path (`/enterprise`); any
// other same-site link becomes an absolute URL back to the live origin, so a
// visitor is never sent to a 404 inside the rebuild.
export function normalizeMirrorPath(href: string): string | null {
  if (!href) return null;
  // leave in-page anchors, mail/tel, and already-absolute URLs alone
  if (/^(#|mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  if (/^https?:\/\//i.test(href)) return null;
  // asset links that the mirror expressed relatively — not navigation
  if (href.includes("framerusercontent.com")) return null;
  let p = href.replace(/^(\.\.\/)+/, "/").replace(/^\.\//, "/");
  if (!p.startsWith("/")) p = "/" + p;
  p = p.replace(/\/index\.html$/i, "/").replace(/\.html$/i, "");
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p || "/";
}

function rewriteNavHrefs(
  $body: cheerio.CheerioAPI,
  refUrl: string,
  built: Set<string>,
): void {
  let origin = "";
  try {
    origin = new URL(refUrl).origin;
  } catch {
    /* refUrl is a placeholder — leave external fallbacks off */
  }
  let internal = 0;
  let external = 0;
  $body("a[href]").each((_, el) => {
    const $a = $body(el);
    const raw = $a.attr("href") ?? "";
    const p = normalizeMirrorPath(raw);
    if (p == null) return;
    if (built.has(p)) {
      $a.attr("href", p);
      internal++;
    } else if (origin) {
      // not part of this rebuild — send it to the live site rather than a 404
      $a.attr("href", origin + (p === "/" ? "/" : p));
      $a.attr("data-external-route", "1");
      external++;
    }
  });
  if (internal || external) {
    console.log(`   ✓ nav hrefs rewritten: ${internal} internal route(s), ${external} → live origin`);
  }
}

// Routes this project serves locally. Extended when the multi-page shell is
// generated; a single-page rebuild serves only "/".
function builtRoutes(): Set<string> {
  const fromEnv = process.env.REBUILD_ROUTES;
  const set = new Set<string>(["/"]);
  if (fromEnv) {
    for (const r of fromEnv.split(",").map((x) => x.trim()).filter(Boolean)) {
      set.add(r.startsWith("/") ? r.replace(/\/+$/, "") || "/" : "/" + r);
    }
  }
  return set;
}

async function main() {
  const { reference, out, name, sourceMirror } = parseArgs(process.argv);

  if (!fs.existsSync(reference)) {
    console.error(`[err] reference dir not found: ${reference}`);
    process.exit(1);
  }
  if (fs.existsSync(out) && fs.readdirSync(out).length > 0) {
    console.error(`[err] output dir is not empty: ${out}`);
    console.error(`      delete it first, or pass --out <other-dir>`);
    process.exit(1);
  }

  const meta = readJsonSafe(path.join(reference, "meta.json")) as { url?: string; pageTitle?: string } | null;
  const refUrl = meta?.url ?? "<reference url>";

  console.log(`\n🔧 extract-site rebuild`);
  console.log(`   reference: ${reference}`);
  console.log(`   out:       ${out}`);
  console.log(`   name:      ${name}`);
  console.log(`   source:    ${refUrl}\n`);

  fs.mkdirSync(out, { recursive: true });
  fs.mkdirSync(path.join(out, "src", "sections"), { recursive: true });
  fs.mkdirSync(path.join(out, "src", "lib"), { recursive: true });
  fs.mkdirSync(path.join(out, "public"), { recursive: true });

  // 0. build the asset path rewriter (manifest-driven)
  const rewriter = buildAssetRewriter(reference);

  // 1. extract framer's css from full.html and write to src/framer-baseline.css
  const fullHtmlPath = path.join(reference, "dom", "full.html");
  if (!fs.existsSync(fullHtmlPath)) {
    console.error(`[err] missing reference/dom/full.html. extract-site reference looks incomplete.`);
    process.exit(1);
  }
  const fullHtml = fs.readFileSync(fullHtmlPath, "utf8");
  const framerCssRaw = extractStylesFromHtml(fullHtml);
  const framerCss = rewriter.rewrite(framerCssRaw);
  fs.writeFileSync(path.join(out, "src", "framer-baseline.css"), framerCss);
  console.log(`   ✓ framer-baseline.css extracted (${(framerCss.length / 1024).toFixed(1)} kB, paths rewritten)`);

  // 2. find sections
  const sectionsDir = path.join(reference, "dom", "sections");
  if (!fs.existsSync(sectionsDir)) {
    console.error(`[err] missing reference/dom/sections/. extract-site reference looks incomplete.`);
    process.exit(1);
  }
  const sectionFiles = fs.readdirSync(sectionsDir)
    .filter((f) => f.endsWith(".html"))
    .sort(); // filename prefix gives order

  const animations = readJsonSafe(path.join(reference, "motion", "animations.json")) as { computed?: AnimEntry[]; cdp?: CdpEntry[] } | null;

  // 2b. computed-styles: read once, applied per section below
  const computedStyles = loadComputedStyles(reference);
  if (computedStyles) {
    console.log(`   ✓ computed-styles.json loaded (${Object.keys(computedStyles).length} nodes)`);
    const vpW = (readJsonSafe(path.join(reference, "meta.json")) as any)?.viewports?.find(
      (v: any) => v.name === "desktop",
    )?.width ?? 1440;
    const inset = detectScrollbarInset(computedStyles, vpW);
    if (inset) {
      const fixed = compensateScrollbarWidth(computedStyles, vpW, inset);
      if (fixed) {
        console.log(
          `   ✓ scrollbar inset ${inset}px compensated: ${fixed} pinned width(s) → 100% (captured at ${vpW - inset}px of a ${vpW}px viewport)`,
        );
      }
    }
  } else {
    console.warn(`   ⚠ no computed-styles.json — sections may not render visually (re-extract with v0.4+)`);
  }

  // ─── 4a: self-contained motion — build per-element JSX annotations ────────
  // Entrances become inline framer-motion props in the generated components,
  // CSS-expressible hovers become :hover rules in hover.css, and data-cs-id is
  // stripped from everything the runtime no longer needs to find.
  type AppearEffect = {
    id: string;
    csId?: string | null;
    framerName: string | null;
    appearId: string | null;
    initial: Record<string, string>;
    rawStyle: string;
    duration?: number;   // seconds (joined below)
    delay?: number;      // seconds (joined below)
    easing?: string;     // raw CSS timing function (joined below)
  };
  const appearEffects = readJsonSafe(path.join(reference, "motion", "appear-effects.json")) as
    | { effects: AppearEffect[] }
    | null;
  const scrollMotion = readJsonSafe(path.join(reference, "motion", "scroll-motion.json")) as
    | { behaviors: any[] }
    | null;
  const hoverThorough = readJsonSafe(path.join(reference, "motion", "hover-thorough.json")) as any[] | null;
  const hoverLegacy = readJsonSafe(path.join(reference, "motion", "hover.json")) as any[] | null;

  // Decide, per appear-effect, whether an element resting at opacity 0 is an
  // interaction-gated panel (keep hidden) or an entrance that hadn't played at
  // capture time (reveal).
  //
  // Resting opacity can't distinguish them, and getting it wrong is bad in both
  // directions: withholding a PARENT's entrance hides its whole subtree (the
  // /agents left icon rail renders black behind an opacity-0 `Side nav`), while
  // revealing a closed panel pins the logo context menu open over the header
  // and highlights every nav item.
  //
  // `extract-site capture-entrances` measures it on the live page. It keys on
  // `framerName|WxH` and only uses keys occurring exactly ONCE on both sides,
  // so a verdict is unambiguous or absent — on /agents that's 14 confident
  // matches, which cleanly separates the two cases (5 nav `BG` highlights and
  // `Links: Brand` at 0/28 samples visible; `Side nav` at 26/28).
  //
  // Requires EFFECTIVE opacity (product up the ancestor chain — the logo menu
  // sits at opacity 1 under a hidden parent) and SUSTAINED visibility (≥2
  // samples — nav highlights flash once during the header entrance).
  // Anything without a verdict falls back to the conservative default.
  const liveness = readJsonSafe(path.join(reference, "motion", "entrance-liveness.json")) as
    | { maxOpacity?: Record<string, number>; visibleCount?: Record<string, number>; matched?: number }
    | null;
  const livenessMax = liveness?.maxOpacity;
  const livenessSeen = liveness?.visibleCount;

  const isHiddenResting = (csId?: string | null) => {
    if (csId == null) return false;
    if (computedStyles?.[csId]?.opacity !== "0") return false;
    if (livenessMax) {
      const eff = livenessMax[String(csId)];
      const seen = livenessSeen?.[String(csId)] ?? 0;
      if (eff != null) return !(eff >= 0.5 && seen >= 2); // measured verdict
    }
    return true; // no verdict — stay conservative
  };
  if (livenessMax) {
    const ids = Object.keys(livenessMax);
    const reveal = ids.filter(
      (id) => livenessMax[id] >= 0.5 && (livenessSeen?.[id] ?? 0) >= 2,
    ).length;
    console.log(
      `   ✓ entrance liveness: ${ids.length} measured, ${reveal} revealed as real entrances (rest stay hidden)`,
    );
  }

  const { byFramerName, byWxH, dominant } = buildAppearTiming(animations);
  const enrichedAppear = (appearEffects?.effects ?? [])
    .filter((fx) => !isHiddenResting(fx.csId))
    .map((fx) => {
      const wxh = fx.csId != null ? (computedStyles?.[fx.csId]?.__bbox as string | undefined) : undefined;
      const t =
        (fx.framerName ? byFramerName.get(fx.framerName) : undefined) ??
        (wxh ? byWxH.get(wxh) ?? undefined : undefined) ??
        dominant;
      return { ...fx, duration: fx.duration ?? t.duration, easing: fx.easing ?? t.easing, delay: fx.delay ?? t.delay };
    });
  const droppedHidden = (appearEffects?.effects?.length ?? 0) - enrichedAppear.length;
  if (droppedHidden > 0) console.log(`   ✓ kept ${droppedHidden} interaction-hidden element(s) hidden (e.g. closed menu panel)`);

  // scroll-bound elements keep the runtime as their (only) transform driver —
  // inlining a motion entrance too would mean two writers to style.transform.
  const scrollCsIds = new Set<string>(
    (scrollMotion?.behaviors ?? []).map((b: any) => String(b.csId)).filter((s: string) => s && s !== "undefined" && s !== "null"),
  );

  const motionMap = new Map<string, MotionProps>();
  const residualAppear: AppearEffect[] = [];
  for (const fx of enrichedAppear) {
    const tf = fx.csId != null && !scrollCsIds.has(fx.csId) ? parseTransformToMotionProps(fx.initial?.transform) : null;
    const filterOk = !fx.initial?.filter || /^blur\(/.test(fx.initial.filter);
    if (fx.csId == null || tf === null || !filterOk) {
      residualAppear.push(fx);
      continue;
    }
    const initial: Record<string, number | string> = {};
    const whileInView: Record<string, number | string> = {};
    if (fx.initial.opacity != null) {
      initial.opacity = parseFloat(fx.initial.opacity);
      whileInView.opacity = 1;
    }
    const fxCs = fx.csId != null ? computedStyles?.[fx.csId] : null;
    for (const [k, v] of Object.entries(tf)) {
      initial[k] = v;
      whileInView[k] = motionRestingValue(k, v, fxCs);
    }
    if (fx.initial.filter) {
      initial.filter = fx.initial.filter;
      whileInView.filter = "blur(0px)";
    }
    if (!Object.keys(initial).length) continue; // nothing animates — plain element
    motionMap.set(fx.csId, {
      initial,
      whileInView,
      transition: {
        duration: fx.duration ?? 0.8,
        ...(fx.delay ? { delay: fx.delay } : {}),
        ease: parseEaseForMotion(fx.easing) ?? [0.16, 1, 0.3, 1],
      },
    });
  }

  // hovers → :hover CSS where the whole delta is CSS-expressible
  type HoverSpecJson = {
    selector?: string; triggerCsId?: string; targetCsId?: string;
    delta?: Record<string, { from: string; to: string }>;
    duration?: string; easing?: string;
  };
  const hoverSpecs: HoverSpecJson[] = ((hoverThorough?.length ? hoverThorough : hoverLegacy) ?? []) as HoverSpecJson[];
  const hoverCssRules: string[] = [];
  const hoverResidual: HoverSpecJson[] = [];
  const extraClasses = new Map<string, string[]>();
  const addClass = (id: string, cls: string) => {
    const a = extraClasses.get(id) ?? [];
    if (!a.includes(cls)) a.push(cls);
    extraClasses.set(id, a);
  };
  for (const h of hoverSpecs) {
    const trig = h.triggerCsId;
    const targ = h.targetCsId ?? trig;
    const props = Object.keys(h.delta ?? {});
    if (!trig || !targ || !props.length || !props.every((p) => CSS_HOVER_SAFE.has(p))) {
      hoverResidual.push(h);
      continue;
    }
    const trigCls = `hv-${trig}`;
    addClass(trig, trigCls);
    const self = targ === trig;
    const targCls = self ? trigCls : `hvt-${targ}`;
    if (!self) addClass(targ, targCls);
    const dur = h.duration && parseFloat(h.duration) > 0 ? h.duration : "0.2s";
    const ease = h.easing || "ease";
    // !important is REQUIRED, not stylistic: the target element also carries an
    // inline `style={{}}` with its resting value for these same properties, and
    // an inline style beats ANY class selector regardless of specificity or
    // pseudo-class — a plain `.hv-N:hover { color: ... }` rule is silently a
    // no-op against it. (Found by actually triggering a hover in a browser —
    // the runtime's "hover N/N mounted" log only counts registered listeners,
    // it doesn't prove the CSS visually applies.) `transition` itself is safe
    // un-flagged: computed-styles.ts never captures/inlines transition-*, so
    // there's nothing for it to lose to.
    hoverCssRules.push(
      `.${targCls} { transition: ${props.map((p) => `${kebab(p)} ${dur} ${ease}`).join(", ")}; }`,
      `.${trigCls}:hover${self ? "" : ` .${targCls}`} { ${props.map((p) => `${kebab(p)}: ${h.delta![p].to} !important;`).join(" ")} }`,
    );
  }

  // 4d: responsive overrides — diff tablet/mobile computed styles (captured by
  // the extractor, keyed by the SAME cs-ids as desktop) against desktop's
  // already-inlined values, and emit only what changed as CSS media queries,
  // using Framer's own default breakpoint cutoffs. Same "diff, don't restate"
  // approach as 4b's style pruning. `!important` is REQUIRED (see hover fix
  // above) — these override the SAME inline style={{}} the desktop pass wrote.
  // NB (honest limit): only "prop appeared or changed" is caught — a prop
  // present at desktop but ABSENT at a breakpoint (reverted toward a browser
  // default) can't be generically un-set from a sparse diff, so that direction
  // is left alone. Covers the common case (mobile ADDS a constraint: column
  // layout, smaller type, a hidden nav) not the rarer "mobile removes one."
  const TABLET_MAX = 1199; // px — Framer's default tablet breakpoint upper bound
  const MOBILE_MAX = 809;  // px — Framer's default mobile breakpoint upper bound
  const tabletStyles = loadComputedStyles(reference, "tablet");
  const mobileStyles = loadComputedStyles(reference, "mobile");
  const responsiveCssRules: string[] = [];
  let responsiveElementCount = 0;

  // Same cs-id at two breakpoints is only trustworthy when Framer's responsive
  // layout RESTYLES the same DOM, not when it swaps in different markup (a
  // hamburger-menu mobile nav is rarely the same DOM as a desktop menu bar —
  // confirmed empirically: independently-loaded breakpoints diverge in total
  // element count, and by id ~20 on a real site the SAME id already pointed at
  // unrelated elements — 44×24 desktop vs 335×360 "mobile"). A plain reflow of
  // the SAME element never flips its aspect ratio drastically; a correlation
  // that does is almost certainly comparing two different elements that happen
  // to share an id number. Reject those rather than risk a wrong override
  // (this is the exact class of bug that produced the overlapping-text
  // regression earlier in 4d).
  const ASPECT_RATIO_TOLERANCE = 4;
  function plausibleMatch(desktopBbox: string | undefined, bpBbox: string | undefined): boolean {
    if (!desktopBbox || !bpBbox) return false;
    const [dw, dh] = desktopBbox.split("x").map(Number);
    const [bw, bh] = bpBbox.split("x").map(Number);
    if (![dw, dh, bw, bh].every((n) => Number.isFinite(n) && n > 0)) return false;
    const ratio = (dw / dh) / (bw / bh);
    const worse = Math.max(ratio, 1 / ratio);
    return worse < ASPECT_RATIO_TOLERANCE;
  }

  let rejectedImplausible = 0;
  function diffBreakpoint(csId: string, bpStyles: Record<string, string> | undefined): Record<string, string> {
    if (!bpStyles) return {};
    const base = computedStyles?.[csId] ?? {};
    if (!plausibleMatch(base.__bbox, bpStyles.__bbox)) {
      if (base.__bbox && bpStyles.__bbox) rejectedImplausible++; // both existed, just didn't correlate
      return {};
    }
    const diff: Record<string, string> = {};
    for (const [prop, val] of Object.entries(bpStyles)) {
      if (prop.startsWith("__")) continue; // __bbox metadata, not a style
      if (base[prop] !== val) diff[prop] = val;
    }
    return diff;
  }
  const cssDecls = (diff: Record<string, string>) =>
    Object.entries(diff).map(([k, v]) => `${k}: ${v} !important;`).join(" ");

  // DISABLED — do not re-enable without a fundamentally different correlation
  // strategy (see comment below). Kept as dead-but-documented code because the
  // capture side (tabletStyles/mobileStyles, fresh-page-per-viewport) is
  // correct and worth preserving for whoever builds that strategy.
  //
  // Why disabled: matching an element across breakpoints by "same cs-id" (DFS
  // position in an independently-loaded page) is unreliable on real Framer
  // sites, confirmed through three separate empirical failures on tourly:
  //   1. Resizing an already-interacted-with page leaves JS-driven values
  //      (font-size) stuck stale — fixed by loading each breakpoint fresh.
  //   2. Fresh loads expose that breakpoints can have GENUINELY DIFFERENT DOM
  //      structure (a mobile hamburger nav vs a desktop menu bar), not just
  //      different styles on the same DOM — so "same id" stops meaning "same
  //      element" partway through the page (confirmed: id 20 pointed at a
  //      44×24 desktop element and an unrelated 335×360 "mobile" one).
  //   3. An aspect-ratio plausibility filter (reject correlations whose
  //      dimensions don't look like a reflow of the same element) was added
  //      as a safety net — but shipped-and-screenshotted testing showed it's
  //      too weak a signal: two unrelated elements often share a similar
  //      aspect ratio, so wrong correlations still passed and produced a
  //      visibly broken mobile layout (floating shapes, overlapping text,
  //      off-screen images) — WORSE than shipping no override at all.
  // A safe version needs to correlate by something more specific than DOM
  // position — e.g. matching on data-framer-name + text content, which
  // survives structural reshuffling — before this can ship.
  if (false && (tabletStyles || mobileStyles)) {
    const allIds = new Set([...Object.keys(tabletStyles ?? {}), ...Object.keys(mobileStyles ?? {})]);
    allIds.delete("0"); // cs-id 0 is document.body itself — never emitted as a
    // JSX element (React mounts into a div inside the static HTML body), so a
    // rule for it would be a permanently-orphaned no-op.
    for (const csId of allIds) {
      const tabletDiff = diffBreakpoint(csId, tabletStyles?.[csId]);
      const mobileDiff = diffBreakpoint(csId, mobileStyles?.[csId]);
      if (!Object.keys(tabletDiff).length && !Object.keys(mobileDiff).length) continue;
      const cls = `resp-${csId}`;
      addClass(csId, cls);
      responsiveElementCount++;
      // tablet block MUST precede mobile in source order: both are max-width
      // queries, so at a narrow viewport both match and the LATER one (mobile)
      // correctly wins the cascade for any prop they both touch.
      if (Object.keys(tabletDiff).length) {
        responsiveCssRules.push(`@media (max-width: ${TABLET_MAX}px) { .${cls} { ${cssDecls(tabletDiff)} } }`);
      }
      if (Object.keys(mobileDiff).length) {
        responsiveCssRules.push(`@media (max-width: ${MOBILE_MAX}px) { .${cls} { ${cssDecls(mobileDiff)} } }`);
      }
    }
  }

  // csIds the runtime still binds; every other data-cs-id is stripped
  const keepCsIds = new Set<string>(scrollCsIds);
  for (const fx of residualAppear) if (fx.csId != null) keepCsIds.add(fx.csId);
  for (const h of hoverResidual) {
    if (h.triggerCsId) keepCsIds.add(h.triggerCsId);
    if (h.targetCsId) keepCsIds.add(h.targetCsId);
  }
  const annotations: JsxAnnotations = { motion: motionMap, extraClasses, keepCsIds };
  console.log(`   ✓ motion inlined: ${motionMap.size} entrances as framer-motion props, ${hoverCssRules.length / 2} hovers as CSS (runtime keeps ${residualAppear.length} appear + ${hoverResidual.length} hover + ${scrollCsIds.size} scroll)`);
  void responsiveElementCount; void rejectedImplausible; // reserved for when the CSS generation below is re-enabled
  if (tabletStyles || mobileStyles) {
    console.log(`   ⚠ responsive.css: NOT generated — tablet/mobile data captured (for future use) but the cs-id correlation across breakpoints proved unsafe on real sites; see the DISABLED comment in cmd-rebuild.ts`);
  } else {
    console.log(`   ⚠ no tablet/mobile computed-styles.json captured`);
  }

  // 3. extract the full body html and prepare it for client-side rendering.
  // strategy: take the entire <body> innerHTML, strip framer scripts, apply
  // computed styles + asset rewrites. preserves the parent layout chain.
  const $body = cheerio.load(fullHtml, { decodeEntities: false });
  $body("script").remove();
  $body("noscript").remove();
  // Framer's own editor/promo chrome — meaningless (and actively noisy) once
  // this is a standalone rebuild: the badge is Framer's "made with Framer"
  // link, and the editorbar iframe points at framer.com's live in-context
  // editor for the ORIGINAL site (it's what's been causing the "Framing
  // 'https://framer.com/' violates ... frame-ancestors" console warning seen
  // throughout every browser check this session).
  $body("#__framer-badge-container, #__framer-editorbar").remove();
  // dead resource hints: <link rel=modulepreload> is always a Framer runtime JS
  // module (we don't load Framer's runtime), and any link to framerusercontent
  // is an asset we've localized or don't use — both just 404 in the rebuild.
  $body('link[rel="modulepreload"], link[href*="framerusercontent.com"]').remove();
  rewriteNavHrefs($body, refUrl, builtRoutes());
  let bodyHtml = $body("body").html() ?? "";
  bodyHtml = rewriter.rewrite(bodyHtml);
  bodyHtml = applyComputedStyles(bodyHtml, computedStyles);
  bodyHtml = neutralizeFramerInitialState(bodyHtml);

  // 4. SPLIT into per-section files. find every top-level data-framer-name
  // element inside <main>, extract its outerHTML to its own file, replace
  // with a template-literal interpolation marker. user can now edit any
  // section's html in isolation — hot reload picks it up via vite's HMR.
  const $page = cheerio.load(`<root>${bodyHtml}</root>`, { decodeEntities: false });
  const sectionInfos: { exportName: string; framerName: string; importPath: string }[] = [];
  const usedExports = new Set<string>();
  let sectionIdx = 0;

  // identify sections: direct children of <main> with data-framer-name,
  // or top-level <section> elements anywhere
  // DIRECT CHILDREN ONLY. `main section` matched sections at ANY depth, which
  // promotes an element out of its real layout context: extracted sections get
  // re-stacked directly in the page shell (`flex column; align-items:center`),
  // so any intermediate ancestor is lost. framer-ai.com/academy's sidebar sits
  // inside a centred 1240px box with `align-items:flex-start`; hoisting it out
  // of that box re-centred it, moving it from x=120 to x=740.
  const sectionSelectors = ["main > [data-framer-name]", "main > section", "body > main > div[data-framer-name]"];

  // NEVER promote a child of a ROW layout into a top-level section.
  // Sections get stacked by the page shell, which on Framer pages is
  // `display:flex; flex-direction:column; align-items:center`. Pulling one
  // column of a side-by-side layout out of its row therefore re-centres it:
  // framer-ai.com/academy's sticky sidebar nav (180px wide) moved from x=120
  // to x=740, a 620px error on an element whose entire ancestor chain has
  // byte-identical computed styles. Leaving such an element unextracted keeps
  // it inline in the shell, where its real parent still lays it out.
  const parentIsRowLayout = (el: any): boolean => {
    const parent = $page(el).parent();
    if (!parent.length) return false;
    const csId = parent.attr("data-cs-id");
    const cs = csId != null ? computedStyles?.[csId] : null;
    if (!cs) return false;
    const display = String(cs.display ?? "");
    const dir = String(cs["flex-direction"] ?? "row");
    const isFlexRow = /(^|\s)(inline-)?flex/.test(display) && /^row/.test(dir);
    const isGrid = /grid/.test(display);
    if (!isFlexRow && !isGrid) return false;
    // a single child can't be a side-by-side layout
    return parent.children().length > 1;
  };

  const candidates: cheerio.Cheerio<any>[] = [];
  let skippedRowChildren = 0;
  for (const sel of sectionSelectors) {
    $page(sel).each((_, el) => {
      const $el = $page(el);
      // skip if already inside another candidate (avoid nested duplicates)
      if (candidates.some((c) => c.find(el).length > 0)) return;
      if (parentIsRowLayout(el)) { skippedRowChildren++; return; }
      candidates.push($el);
    });
  }
  if (skippedRowChildren > 0) {
    console.log(`   ✓ ${skippedRowChildren} row-layout child(ren) left inline (splitting them would re-centre the column)`);
  }

  // Fallback for sites that don't use a <main> wrapper — Framer often renders
  // into <div id="main"> (tourly), which the selectors above miss, leaving the
  // whole page as one un-split shell. Find the content container and take its
  // top-level framer-named / <section> blocks (the dedup keeps only outermost).
  if (candidates.length === 0) {
    const containerSel = $page("#main").length ? "#main" : ($page("[id=main]").length ? "[id=main]" : "root");
    $page(`${containerSel} [data-framer-name], ${containerSel} section`).each((_, el) => {
      const $el = $page(el);
      if (candidates.some((c) => c.find(el).length > 0)) return;
      candidates.push($el);
    });
  }

  for (const $section of candidates) {
    const framerName = $section.attr("data-framer-name") || `section-${sectionIdx}`;
    sectionIdx++;
    let baseExport = toPascalCase(framerName);
    if (!baseExport || /^\d/.test(baseExport)) baseExport = `Section${sectionIdx}`;
    let exportName = baseExport;
    while (usedExports.has(exportName)) exportName = `${baseExport}_${sectionIdx}`;
    usedExports.add(exportName);
    const fileName = `${String(sectionIdx).padStart(2, "0")}-${exportName}`;
    const sectionHtml = $page.html($section as any) ?? "";

    // convert the section subtree into a REAL editable JSX component; 4c hoists
    // its text/images/links into a sibling content/<fileName>.ts module.
    const { code: sectionTsx, content: sectionContent } = htmlToJsxComponent(
      sectionHtml, exportName, annotations, `../content/${fileName}`,
    );
    fs.writeFileSync(path.join(out, "src", "sections", `${fileName}.tsx`), sectionTsx);
    if (sectionContent.length) {
      fs.mkdirSync(path.join(out, "src", "content"), { recursive: true });
      fs.writeFileSync(
        path.join(out, "src", "content", `${fileName}.ts`),
        renderContentModule(sectionContent, `the "${framerName}" section`),
      );
    }

    // replace the section in the page tree with a placeholder element; after we
    // convert the shell to JSX we swap `<section-slot data-name="X" />` → `<X />`.
    $section.replaceWith(`<section-slot data-name="${exportName}"></section-slot>`);

    sectionInfos.push({ exportName, framerName, importPath: `./sections/${fileName}` });
  }

  // convert the page SHELL (body minus extracted sections) to JSX, then swap
  // each placeholder for its section component tag.
  const shellHtml = $page("root").html() ?? bodyHtml;
  const shell = convertHtmlToJsx(shellHtml, 3, annotations); // depth 3 → nested inside <> in Page
  let shellJsx = shell.jsx;
  for (const s of sectionInfos) {
    shellJsx = shellJsx.replaceAll(`<section-slot data-name="${s.exportName}" />`, `<${s.exportName} />`);
  }
  if (shell.content.length) {
    fs.mkdirSync(path.join(out, "src", "content"), { recursive: true });
    fs.writeFileSync(
      path.join(out, "src", "content", "shell.ts"),
      renderContentModule(shell.content, "the page shell (nav, footer wrapper, etc.)"),
    );
  }

  const sectionImports = sectionInfos
    .map((s) => `import { ${s.exportName} } from "${s.importPath}";`)
    .join("\n");

  const pageTsx = `// page.tsx — the page shell, composing each section as a real component.
// edit a section in its own file under src/sections/<NN-Name>.tsx; edit
// shell-level markup (nav wrappers, etc.) directly here.
//
// sections (in render order):
${sectionInfos.map((s, i) => `//   ${i + 1}. "${s.framerName}" → src/sections/${path.basename(s.importPath)}.tsx`).join("\n")}
import type { CSSProperties } from "react";
${shell.usedMotion ? `import { motion } from "framer-motion";\n` : ""}${shell.content.length ? `import content from "./content/shell";\n` : ""}${sectionImports}
import "./hover.css";
import "./responsive.css";

export function Page() {
  return (
    <>
${shellJsx.replace(/\n+$/, "\n")}    </>
  );
}
`;
  fs.writeFileSync(path.join(out, "src", "page.tsx"), pageTsx);
  console.log(`   ✓ page.tsx (JSX shell) + ${sectionInfos.length} section component(s) generated`);

  // 5. App.tsx with framer-motion animation post-mount
  const appTsx = `// App.tsx — composes the rebuilt page + runs entry animations.
// edit src/page.tsx for the shell, src/sections/*.tsx for individual sections.

import { useEffect } from "react";
import { animate } from "framer-motion";
import { Page } from "./page";
import { runEntryAnimations } from "./animations";

export function App() {
  useEffect(() => {
    runEntryAnimations(animate);
  }, []);
  return <Page />;
}
`;
  fs.writeFileSync(path.join(out, "src", "App.tsx"), appTsx);

  // 6. motion runtime — copy templates/rebuild/src/lib/motion-runtime.ts
  // (the framer-runtime port) and the captured motion JSONs into src/data/.
  // animations.ts becomes a thin shim that calls mountMotion(data).
  fs.cpSync(
    path.join(TPL_DIR, "src", "lib", "motion-runtime.ts"),
    path.join(out, "src", "lib", "motion-runtime.ts"),
  );
  fs.mkdirSync(path.join(out, "src", "data"), { recursive: true });
  // scroll-motion.json is the only artifact copied verbatim — appear + hover
  // are now mostly INLINE (motion props / hover.css); the runtime only gets the
  // residual specs it still owns.
  {
    const src = path.join(reference, "motion", "scroll-motion.json");
    if (fs.existsSync(src)) fs.cpSync(src, path.join(out, "src", "data", "scroll-motion.json"));
    else fs.writeFileSync(path.join(out, "src", "data", "scroll-motion.json"), '{"behaviors":[]}');
  }
  fs.writeFileSync(
    path.join(out, "src", "data", "appear-effects.json"),
    JSON.stringify({ effects: residualAppear }, null, 2),
  );
  fs.writeFileSync(
    path.join(out, "src", "data", "hover-thorough.json"),
    JSON.stringify(hoverResidual, null, 2),
  );
  // legacy hover.json must stay an empty stub — the runtime falls back to it
  // when hover-thorough is empty, which would double-bind the CSS hovers.
  fs.writeFileSync(path.join(out, "src", "data", "hover.json"), "[]");

  // generated :hover rules (classes injected into the JSX by the annotator)
  fs.writeFileSync(
    path.join(out, "src", "hover.css"),
    `/* hover.css — generated by extract-site from MEASURED hover deltas.\n   .hv-N = trigger element, .hvt-N = animated descendant. */\n\n${hoverCssRules.join("\n")}\n`,
  );

  // 4d: generated responsive overrides (classes injected by the annotator)
  fs.writeFileSync(
    path.join(out, "src", "responsive.css"),
    `/* responsive.css — generated by extract-site from MEASURED tablet/mobile\n   computed styles, diffed against desktop's inlined values. Only what\n   CHANGES at each breakpoint is here — desktop's values stay in the\n   component's style={{}}. !important is required to win over that inline\n   style (see hover.css note in cmd-rebuild.ts if patching by hand). */\n\n${responsiveCssRules.join("\n")}\n`,
  );

  // 1a+: per-element timing TABLE for the runtime bbox-join. cdp entries carry
  // a document-relative bbox + the measured duration/easing of the animation
  // that actually fired there. the runtime (motion-runtime.ts) matches each
  // appear element to the nearest entry by geometry — strictly more precise
  // than the framerName/dominant timing baked into appear-effects.json, which
  // remains the fallback for elements with no captured animation nearby.
  const appearTimingTable = (animations?.cdp ?? [])
    .filter((c) => c.bbox && c.duration != null && c.duration > 0)
    .map((c) => ({ bbox: c.bbox!, duration: c.duration! / 1000, easing: c.easing }));
  fs.writeFileSync(
    path.join(out, "src", "data", "appear-timing.json"),
    JSON.stringify(appearTimingTable, null, 2),
  );

  // animations.ts is now a thin shim: it imports the bundled appear/scroll
  // JSONs and hands them to motion-runtime.ts which does the IO + scroll wiring.
  // App.tsx still calls runEntryAnimations() — we keep the export name for
  // compat but the body just delegates to mountMotion().
  const hoverCount = hoverResidual.length;
  const animationsTs = `// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured ${appearEffects?.effects?.length ?? 0} appear-effects + ${scrollMotion?.behaviors?.length ?? 0} scroll behaviors + ${hoverCount} hover effects
// + ${appearTimingTable.length} measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any });
}
`;
  fs.writeFileSync(path.join(out, "src", "animations.ts"), animationsTs);
  console.log(`   ✓ animations.ts → runtime shim (residual: ${residualAppear.length} appear, ${hoverResidual.length} hover; ${scrollMotion?.behaviors?.length ?? 0} scroll)`);
  console.log(`   ✓ App.tsx composed`);

  // 5. copy assets — extract puts them in assets/{images,videos,fonts}/...
  let assetCount = 0;
  const assetSubdirs = ["images", "videos", "fonts", "audio"];
  for (const sub of assetSubdirs) {
    const src = path.join(reference, "assets", sub);
    if (fs.existsSync(src)) {
      assetCount += copyDirContents(src, path.join(out, "public", sub));
    }
  }
  console.log(`   ✓ ${assetCount} asset(s) copied to public/`);

  // 5b. (optional) copy the source mirror's __mirror tree as a fallback for
  // any asset extract-site didn't download (e.g. font subsets that never loaded
  // during scroll). without this you'll see broken font fallbacks.
  if (sourceMirror && fs.existsSync(sourceMirror)) {
    const mirrorSrc = fs.statSync(sourceMirror).isDirectory()
      ? sourceMirror
      : path.dirname(sourceMirror);
    const mirrorDst = path.join(out, "public", "__mirror");
    const n = copyDirContents(mirrorSrc, mirrorDst);
    console.log(`   ✓ ${n} mirror file(s) copied as fallback (--source-mirror)`);
  } else if (sourceMirror) {
    console.warn(`   ⚠ --source-mirror path not found: ${sourceMirror}`);
  }

  // 6. project files (template-driven)
  copyTemplate(path.join(TPL_DIR, "package.json"),  path.join(out, "package.json"),  { PROJECT_NAME: name });
  copyTemplate(path.join(TPL_DIR, "index.html"),    path.join(out, "index.html"),    { PROJECT_NAME: meta?.pageTitle || name });
  copyTemplate(path.join(TPL_DIR, "README.md"),     path.join(out, "README.md"),     { PROJECT_NAME: name, REFERENCE_URL: refUrl });
  fs.cpSync(path.join(TPL_DIR, "vite.config.ts"),   path.join(out, "vite.config.ts"));
  fs.cpSync(path.join(TPL_DIR, "tsconfig.json"),    path.join(out, "tsconfig.json"));
  fs.cpSync(path.join(TPL_DIR, ".gitignore"),       path.join(out, ".gitignore"));
  fs.cpSync(path.join(TPL_DIR, "src", "main.tsx"),  path.join(out, "src", "main.tsx"));
  fs.cpSync(path.join(TPL_DIR, "src", "app.css"),   path.join(out, "src", "app.css"));
  console.log(`   ✓ vite/react/ts/motion scaffolding written\n`);

  console.log(`✅ rebuilt at ${out}`);
  console.log(``);
  console.log(`next steps:`);
  console.log(`  cd ${path.relative(process.cwd(), out) || "."}`);
  console.log(`  bun install`);
  console.log(`  bun run dev      # → http://localhost:5173`);
  console.log(``);
  console.log(`each section is at src/sections/. edit the HTML literal in any of`);
  console.log(`them and the page hot-reloads. reorder via src/App.tsx.`);
}

main().catch((e) => {
  console.error("[err]", e.message);
  console.error(e.stack);
  process.exit(1);
});
