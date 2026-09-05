// html-to-jsx.ts — convert an extracted section's HTML subtree into a real,
// editable JSX component (instead of an HTML string rendered via
// dangerouslySetInnerHTML). Output is a .tsx component you can edit element by
// element. This is the deterministic core of the Phase 3/4 clean-code path.
//
// 4a (self-contained motion): cmd-rebuild passes per-element annotations that
//   - inline measured entrance animations as framer-motion props
//     (`<motion.div initial=... whileInView=... transition=...>`)
//   - append generated :hover classes (hover.css)
//   - strip `data-cs-id` from elements the runtime no longer needs to find
//
// 4c (content decoupling): every non-decorative TEXT node, <img src/alt>,
// <a href>, and <video src> is hoisted into a sibling `content/<Name>.ts`
// module and referenced as `{content.key}` — so re-skinning a section (new
// copy, new photos, new links) means editing one flat object, not hunting
// through JSX. Keys are named from the nearest `data-framer-name` when Framer
// authored one (it usually did), else `heading1`/`paragraph1`/`image1`/etc.
//
// Scope/limits (honest): this produces faithful, editable components with inline
// style OBJECTS (already pruned upstream) — not idiomatic Tailwind. Also: content
// is extracted at DOM-leaf granularity, so a heading split into per-word spans
// (a stagger effect) becomes several keys, not one editable sentence — merging
// them back risks desyncing the per-word motion count, so it's left as-is.

import * as cheerio from "cheerio";

// ─── annotations (4a) ───────────────────────────────────────────────────────

export interface MotionProps {
  initial: Record<string, string | number>;
  whileInView: Record<string, string | number>;
  transition: { duration?: number; delay?: number; ease?: number[] | string };
}

export interface JsxAnnotations {
  motion?: Map<string, MotionProps>;    // csId → inline entrance animation
  extraClasses?: Map<string, string[]>; // csId → classes to append (hover.css)
  // csIds the motion runtime still binds (scroll behaviors + residual specs).
  // When provided, every OTHER data-cs-id attribute is stripped from output.
  keepCsIds?: Set<string>;
}

// ─── content extraction (4c) ────────────────────────────────────────────────

export interface ContentEntry {
  key: string;
  kind: "text" | "image" | "link" | "video";
  value: string | { src: string; alt: string };
}

interface EmitCtx {
  ann?: JsxAnnotations;
  usedMotion: boolean;
  content: ContentEntry[];
  usedContentKeys: Set<string>;
  fallbackCounters: Record<string, number>;
}

// "Menu Label" → "menuLabel", "CTA Text" → "ctaText". Framer authors name most
// nodes descriptively — using that beats inventing generic names from scratch.
function slugToCamel(name: string): string {
  const words = name.trim().toLowerCase().split(/[^a-zA-Z0-9]+/).filter(Boolean);
  if (!words.length) return "";
  return words.map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))).join("");
}

function uniqueContentKey(base: string, ctx: EmitCtx): string {
  if (!ctx.usedContentKeys.has(base)) { ctx.usedContentKeys.add(base); return base; }
  let n = 2;
  while (ctx.usedContentKeys.has(`${base}_${n}`)) n++;
  const key = `${base}_${n}`;
  ctx.usedContentKeys.add(key);
  return key;
}

// Key priority: the nearest data-framer-name in scope (human-authored, so it's
// the best name available) → a `<kind><counter>` fallback typed by tag (h1-h6 →
// "heading", p → "paragraph", a → "linkText") so untitled content is at least
// legible in bulk.
// Framer names are USUALLY short labels ("Menu Label", "CTA Text") but
// occasionally an author pastes a full sentence into the name field (seen:
// a whole marketing tagline as one element's data-framer-name). Treat those as
// not-a-real-label: past this many words or characters it reads as prose, not
// a name, and would slugify into an unreadable wall-of-camelCase identifier.
const MAX_NAME_WORDS = 6;
const MAX_NAME_CHARS = 30;

function makeContentKey(
  nearestName: string | undefined,
  kind: ContentEntry["kind"],
  parentTag: string | undefined,
  ctx: EmitCtx,
): string {
  const usable = nearestName && nearestName.trim().split(/\s+/).length <= MAX_NAME_WORDS;
  const named = usable ? slugToCamel(nearestName!) : "";
  // must be a valid bare identifier for `content.KEY` dot-access: e.g. a
  // data-framer-name of "100%" or "7-10 Days" slugs to "100"/"710Days" — both
  // start with a digit, which is invalid after a dot. Reject rather than
  // patch (prefixing with "_" produces uglier keys than just falling back).
  if (named && named.length <= MAX_NAME_CHARS && /^[a-zA-Z_$][\w$]*$/.test(named)) {
    return uniqueContentKey(named, ctx);
  }
  const counterKey = `${kind}:${parentTag ?? ""}`;
  ctx.fallbackCounters[counterKey] = (ctx.fallbackCounters[counterKey] ?? 0) + 1;
  const n = ctx.fallbackCounters[counterKey];
  const label =
    kind === "text"
      ? /^h[1-6]$/.test(parentTag ?? "") ? "heading" : parentTag === "p" ? "paragraph" : parentTag === "a" ? "linkText" : "text"
      : kind;
  return uniqueContentKey(`${label}${n}`, ctx);
}

// Render a `content/<Name>.ts` module: a flat, re-skinnable object of every
// text/image/link/video value extracted from one section (or the page shell).
export function renderContentModule(entries: ContentEntry[], label: string): string {
  const lines: string[] = [
    `// content for ${label} — extracted by extract-site.`,
    `// Edit values here to re-skin ${label} (copy, photos, links) without touching`,
    `// its layout, styles, or motion.`,
    ``,
    `export default {`,
  ];
  for (const e of entries) {
    if (e.kind === "image") {
      const v = e.value as { src: string; alt: string };
      lines.push(`  ${e.key}: { src: ${JSON.stringify(v.src)}, alt: ${JSON.stringify(v.alt)} },`);
    } else {
      lines.push(`  ${e.key}: ${JSON.stringify(e.value)},`);
    }
  }
  lines.push(`};`, ``);
  return lines.join("\n");
}

// serialize a plain JS value as source (object literal / array / primitive)
function jsVal(v: unknown): string {
  if (Array.isArray(v)) return `[${v.map(jsVal).join(", ")}]`;
  if (typeof v === "object" && v !== null) {
    const entries = Object.entries(v as Record<string, unknown>)
      .filter(([, x]) => x !== undefined)
      .map(([k, x]) => `${/^[a-zA-Z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${jsVal(x)}`);
    return `{ ${entries.join(", ")} }`;
  }
  return JSON.stringify(v);
}

function motionPropsSource(mo: MotionProps): string {
  // viewport mirrors the runtime IntersectionObserver it replaces
  // (rootMargin '0px 0px -10% 0px', threshold 0.05).
  return (
    ` initial={${jsVal(mo.initial)}}` +
    ` whileInView={${jsVal(mo.whileInView)}}` +
    ` viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }}` +
    ` transition={${jsVal(mo.transition)}}`
  );
}

// ─── attribute handling ─────────────────────────────────────────────────────

const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

// HTML attribute name → JSX attribute name. data-* / aria-* pass through. SVG
// presentation/structural attrs are restored to camelCase (HTML parsing
// lowercases them, which React rejects on SVG elements).
const ATTR_RENAME: Record<string, string> = {
  class: "className", for: "htmlFor", tabindex: "tabIndex", readonly: "readOnly",
  maxlength: "maxLength", cellpadding: "cellPadding", cellspacing: "cellSpacing",
  rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder",
  contenteditable: "contentEditable", crossorigin: "crossOrigin", autoplay: "autoPlay",
  playsinline: "playsInline", srcset: "srcSet", autocomplete: "autoComplete",
  enctype: "encType", novalidate: "noValidate", datetime: "dateTime",
  fetchpriority: "fetchPriority",
  // SVG
  viewbox: "viewBox", preserveaspectratio: "preserveAspectRatio",
  "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin", "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset", "stroke-opacity": "strokeOpacity",
  "stroke-miterlimit": "strokeMiterlimit",
  "fill-rule": "fillRule", "fill-opacity": "fillOpacity", "clip-rule": "clipRule",
  "clip-path": "clipPath", "stop-color": "stopColor", "stop-opacity": "stopOpacity",
  gradientunits: "gradientUnits", gradienttransform: "gradientTransform",
  patternunits: "patternUnits", patterncontentunits: "patternContentUnits",
  maskunits: "maskUnits", maskcontentunits: "maskContentUnits",
  "color-interpolation-filters": "colorInterpolationFilters",
};

// SVG tag names whose camelCase is significant (HTML parsing lowercases them).
const SVG_TAG_CASE: Record<string, string> = {
  lineargradient: "linearGradient", radialgradient: "radialGradient",
  clippath: "clipPath", textpath: "textPath", foreignobject: "foreignObject",
  feblend: "feBlend", fegaussianblur: "feGaussianBlur", feoffset: "feOffset",
  fecolormatrix: "feColorMatrix", fecomposite: "feComposite", femerge: "feMerge",
  femergenode: "feMergeNode", feflood: "feFlood",
};

function cssPropToJs(prop: string): string {
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function styleKey(prop: string): string {
  if (prop.startsWith("--")) return JSON.stringify(prop); // CSS var: literal string key
  const js = cssPropToJs(prop);
  return /^[a-zA-Z_$][\w$]*$/.test(js) ? js : JSON.stringify(js);
}

// "width:1425px;color:rgb(0,0,0)" → `{{ width: "1425px", color: "rgb(0,0,0)" }}`
function styleToObjectLiteral(style: string): string {
  const entries: string[] = [];
  for (const decl of style.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop || !val) continue;
    entries.push(`${styleKey(prop)}: ${JSON.stringify(val)}`);
  }
  // cast to CSSProperties: Framer styles carry CSS custom properties
  // (--framer-*) and string values for numeric props, both of which the strict
  // CSSProperties type rejects on a bare literal though they're valid at runtime.
  return `{{ ${entries.join(", ")} } as CSSProperties}`;
}

// Framer runtime-only attributes that leak into the DOM. They're meaningless
// without Framer's layout engine and aren't valid HTML, so React's typed JSX
// rejects them — strip them (purely cosmetic, no effect on static rendering).
// Also strip any `_`-prefixed attr (e.g. `_constraints`). data-* / aria-* are
// kept (valid + sometimes targeted by the baseline CSS / motion runtime).
const STRIP_ATTRS = new Set([
  "parentsize", "rotation", "shadows",
  // `as` is Framer's polymorphic-component prop leaked onto the rendered
  // intrinsic element (e.g. <section as="section">); React's typed JSX rejects
  // it on intrinsic elements and it's a no-op at runtime.
  "as",
  // Framer SSR/build metadata — runtime-only junk (the hydrate blob is also
  // huge and full of quotes); useless without Framer's runtime.
  "data-framer-hydrate-v2", "data-framer-ssr-released-at",
  "data-framer-page-optimized-at", "data-framer-generated-page",
]);
// attributes React types as numeric. The aria-* ones matter: React's JSX types
// declare them `number`, so emitting Framer's raw string (aria-posinset="1")
// is a type error that fails `tsc -b` — i.e. `bun run build` breaks even though
// the dev server (esbuild, no typecheck) is perfectly happy.
const NUMERIC_ATTRS = new Set([
  "tabIndex", "rowSpan", "colSpan",
  "aria-level", "aria-posinset", "aria-setsize",
  "aria-colcount", "aria-colindex", "aria-colspan",
  "aria-rowcount", "aria-rowindex", "aria-rowspan",
  "aria-valuemax", "aria-valuemin", "aria-valuenow",
]);

// elements where `name` is a valid HTML attribute. Framer also leaks `name` as
// a layer-identifier onto layout elements (div/section/span/…) — duplicating
// data-framer-name — where React's typed JSX rejects it. Strip it there, keep
// it on the elements that genuinely use it.
// (NB: `a` and `embed` are intentionally NOT here — React's AnchorHTMLAttributes
// doesn't type `name`, and Framer's `name` on an anchor is just a layer-name
// leak. Only elements whose React types actually accept `name` are listed.)
const NAME_VALID_TAGS = new Set([
  "input", "button", "select", "textarea", "form", "fieldset", "output",
  "object", "param", "map", "meta", "iframe", "slot",
]);

// Same class of problem as `name`: Framer leaks layer props onto plain layout
// elements where React's typed JSX rejects them, while the same attribute IS
// legitimate on specific (usually SVG) tags. Keep it where it's real, strip it
// everywhere else.
const TAG_SCOPED_ATTRS: Record<string, Set<string>> = {
  // `radius` is an SVG filter-primitive attribute; on a <div> it's a Framer
  // corner-radius layer prop and a `tsc -b` failure.
  radius: new Set(["feMorphology"]),
  // width/height are real HTML attributes on media/canvas/embeds and on SVG
  // elements, but Framer also leaks them as layer dimensions onto buttons and
  // divs, where React's typed JSX rejects them (98 occurrences on one page).
  // The visual size comes from the inlined style either way.
  width: new Set(["img", "canvas", "iframe", "video", "embed", "object", "input", "svg", "rect", "image", "foreignObject", "pattern", "mask", "filter", "use"]),
  height: new Set(["img", "canvas", "iframe", "video", "embed", "object", "input", "svg", "rect", "image", "foreignObject", "pattern", "mask", "filter", "use"]),
};

// Framer serialises component layer props straight onto the DOM node — `fonts`,
// `rawhtml`, `verticalalignment`, `withexternallayout` and friends. They are
// meaningless to the browser and every one of them is a `tsc -b` failure, so
// they can't be enumerated one build error at a time (each new page brings
// more). Anything that is not a recognised HTML/SVG/React attribute, not
// data-*/aria-*, and not a framer-motion prop is treated as a layer-prop leak
// and dropped. `KNOWN_ATTRS` names are POST-rename (camelCase).
const KNOWN_ATTRS = new Set([
  // global HTML
  "className", "id", "style", "title", "lang", "dir", "translate", "role", "slot", "part",
  "hidden", "tabIndex", "draggable", "spellCheck", "contentEditable", "accessKey", "inert",
  "itemProp", "itemScope", "itemType", "itemID", "itemRef", "is", "nonce", "popover",
  // links / media / embeds
  "href", "target", "rel", "download", "hrefLang", "ping", "referrerPolicy",
  "src", "srcSet", "sizes", "alt", "loading", "decoding", "fetchPriority", "crossOrigin",
  "useMap", "isMap", "poster", "preload", "autoPlay", "loop", "muted", "controls",
  "playsInline", "controlsList", "disablePictureInPicture", "disableRemotePlayback",
  "width", "height", "frameBorder", "allow", "allowFullScreen", "sandbox", "srcDoc",
  "integrity", "media", "type", "as", "kind", "label", "srcLang", "default",
  // forms
  "name", "value", "defaultValue", "checked", "defaultChecked", "placeholder", "disabled",
  "readOnly", "required", "multiple", "selected", "min", "max", "step", "pattern",
  "maxLength", "minLength", "size", "rows", "cols", "wrap", "autoComplete", "autoFocus",
  "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget",
  "action", "method", "encType", "noValidate", "acceptCharset", "accept", "htmlFor",
  "list", "capture", "inputMode", "enterKeyHint", "open", "reversed", "start", "span",
  // tables
  "colSpan", "rowSpan", "headers", "scope", "abbr", "summary", "cellPadding", "cellSpacing",
  // script/meta
  "async", "defer", "charSet", "content", "httpEquiv", "property", "sameSite",
  "dateTime", "cite", "datetime", "coords", "shape", "usemap",
  // SVG structural + presentation
  "viewBox", "xmlns", "xmlnsXlink", "xlinkHref", "preserveAspectRatio", "version",
  "x", "y", "x1", "y1", "x2", "y2", "cx", "cy", "r", "rx", "ry", "dx", "dy",
  "d", "points", "pathLength", "transform", "transformOrigin", "gradientUnits",
  "gradientTransform", "patternUnits", "patternContentUnits", "patternTransform",
  "maskUnits", "maskContentUnits", "filterUnits", "primitiveUnits", "clipPathUnits",
  "spreadMethod", "fx", "fy", "fr", "offset", "stopColor", "stopOpacity",
  "fill", "fillRule", "fillOpacity", "stroke", "strokeWidth", "strokeLinecap",
  "strokeLinejoin", "strokeDasharray", "strokeDashoffset", "strokeOpacity",
  "strokeMiterlimit", "clipPath", "clipRule", "mask", "filter", "opacity",
  "color", "colorInterpolationFilters", "floodColor", "floodOpacity", "lightingColor",
  "stdDeviation", "in", "in2", "result", "mode", "operator", "k1", "k2", "k3", "k4",
  "values", "tableValues", "type2", "baseFrequency", "numOctaves", "seed", "scale",
  "xChannelSelector", "yChannelSelector", "edgeMode", "preserveAlpha", "kernelMatrix",
  "divisor", "bias", "targetX", "targetY", "order", "surfaceScale", "specularConstant",
  "specularExponent", "diffuseConstant", "azimuth", "elevation", "pointsAtX", "pointsAtY",
  "pointsAtZ", "limitingConeAngle", "markerWidth", "markerHeight", "markerUnits",
  "refX", "refY", "orient", "startOffset", "textAnchor", "dominantBaseline",
  "alignmentBaseline", "baselineShift", "fontFamily", "fontSize", "fontWeight",
  "fontStyle", "letterSpacing", "wordSpacing", "textDecoration", "textRendering",
  "writingMode", "unicodeBidi", "direction", "display", "visibility", "overflow",
  "cursor", "pointerEvents", "shapeRendering", "imageRendering", "colorRendering",
  "vectorEffect", "paintOrder", "strokeLinecap2", "systemLanguage", "requiredFeatures",
  "requiredExtensions", "attributeName", "attributeType", "begin", "end", "dur",
  "repeatCount", "repeatDur", "from", "to", "by", "keyTimes", "keySplines",
  "calcMode", "additive", "accumulate", "restart", "fillOpacity2",
  // framer-motion props the generator itself emits
  "initial", "animate", "exit", "variants", "transition", "viewport",
  "whileHover", "whileTap", "whileInView", "whileFocus", "whileDrag",
  "layout", "layoutId", "drag", "dragConstraints", "custom", "onAnimationComplete",
  // React
  "key", "ref", "dangerouslySetInnerHTML", "suppressHydrationWarning", "children",
]);

// Attributes React/DOM understand: the allowlist, plus any data-/aria- prefixed
// attribute and any React event handler (onClick etc).
function isKnownAttr(name: string): boolean {
  if (name.startsWith("data-") || name.startsWith("aria-")) return true;
  if (/^on[A-Z]/.test(name)) return true;
  return KNOWN_ATTRS.has(name);
}

let strippedLeaks = 0;
export function takeStrippedLeakCount(): number {
  const n = strippedLeaks;
  strippedLeaks = 0;
  return n;
}

// boolean attributes — must be emitted BARE (`autoPlay` → React `={true}`).
// emitting `autoPlay=""` makes React treat the empty string as falsy and DROP
// the attribute, which silently breaks video autoplay. names are post-rename.
const BOOLEAN_ATTRS = new Set([
  "autoPlay", "loop", "muted", "controls", "playsInline", "disabled", "checked",
  "selected", "readOnly", "required", "hidden", "autoFocus", "multiple", "open",
  "default", "reversed", "async", "defer",
]);

// Emit a JSX attribute value. JSX attribute strings can't contain raw
// " { } < > & or backslashes, so values with any of those fall back to a
// JS-string expression `{"..."}`; everything else is a plain quoted string.
function attrValueLiteral(val: string): string {
  if (/["{}<>&\\\n\t]/.test(val)) return `{${JSON.stringify(val)}}`;
  return `"${val}"`;
}

function emitAttrs(attribs: Record<string, string>, tagName: string): string {
  const out: string[] = [];
  for (const [rawName, rawVal] of Object.entries(attribs)) {
    if (rawName === "style") {
      if (rawVal.trim()) out.push(`style=${styleToObjectLiteral(rawVal)}`);
      continue;
    }
    if (STRIP_ATTRS.has(rawName) || rawName.startsWith("_")) continue;
    // a value of "[object Object]" is a Framer runtime prop (a JS object)
    // that got stringified into the DOM — always junk on a hash-named attr
    // like `hvlzw343p="[object Object]"`; React's typed JSX rejects the attr too.
    if (rawVal === "[object Object]") continue;
    // Framer leaks `name` (layer identifier) onto layout elements where it isn't
    // valid HTML; drop it there (data-framer-name already carries the name).
    if (rawName === "name" && !NAME_VALID_TAGS.has(tagName)) continue;
    const name = ATTR_RENAME[rawName] ?? rawName;
    if (BOOLEAN_ATTRS.has(name)) {
      out.push(name); // bare → React `={true}` (correct for boolean attrs)
      continue;
    }
    const scoped = TAG_SCOPED_ATTRS[name];
    if (scoped && !scoped.has(tagName)) { strippedLeaks++; continue; } // leak on this tag
    if (!isKnownAttr(name)) { strippedLeaks++; continue; } // Framer layer-prop leak
    if (NUMERIC_ATTRS.has(name)) {
      const n = parseInt(rawVal, 10);
      out.push(`${name}={${Number.isFinite(n) ? n : 0}}`);
      continue;
    }
    // non-boolean valueless attrs → `=""`, NOT bare (`={true}` warns on those).
    out.push(`${name}=${attrValueLiteral(rawVal)}`);
  }
  // autoplay videos MUST be muted or the browser blocks playback (Framer mutes
  // via its runtime, which a clean rebuild doesn't run).
  if (tagName === "video" && "autoplay" in attribs && !("muted" in attribs)) {
    out.push("muted");
  }
  return out.length ? " " + out.join(" ") : "";
}

// JSX text can't contain { } < > raw.
function escapeJsxText(t: string): string {
  return t
    .replace(/[{}]/g, (c) => (c === "{" ? "&#123;" : "&#125;"))
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

interface Node { type: string; name?: string; data?: string; attribs?: Record<string, string>; children?: Node[] }

// tags whose text/media children are NOT re-skinnable content: form-control
// option/value text (editing it wouldn't change what the control submits) and
// anything inside <svg> (icon paths/labels, not copy).
const NO_CONTENT_TAGS = new Set(["textarea", "select", "option", "svg"]);

function emitNode(
  node: Node,
  depth: number,
  ctx: EmitCtx,
  nearestName?: string,
  noContent?: boolean,
  parentTag?: string,
): string {
  const pad = "  ".repeat(depth);
  if (node.type === "text") {
    const raw = node.data || "";
    if (!raw.trim()) {
      // whitespace-only node between inline siblings (e.g. word-split spans) is
      // a SIGNIFICANT space — Framer's DOM is minified, so it's a real space,
      // not indentation. emit an explicit JSX space (bare whitespace between
      // tags on separate lines is stripped by JSX → words would run together).
      return raw.length ? `${pad}{" "}\n` : "";
    }
    // preserve a leading/trailing space (significant in inline flow) as {" "}
    const collapsed = raw.replace(/\s+/g, " ");
    const lead = collapsed.startsWith(" ") ? '{" "}' : "";
    const trail = collapsed.endsWith(" ") ? '{" "}' : "";
    const trimmed = collapsed.trim();
    if (!noContent) {
      const key = makeContentKey(nearestName, "text", parentTag, ctx);
      ctx.content.push({ key, kind: "text", value: trimmed });
      return `${pad}${lead}{content.${key}}${trail}\n`;
    }
    return `${pad}${lead}${escapeJsxText(trimmed)}${trail}\n`;
  }
  if (node.type !== "tag" && node.type !== "script" && node.type !== "style") return ""; // drop comments/directives
  // apply annotations (clone attribs so we can adjust class / cs-id)
  const attribs = { ...(node.attribs || {}) };
  const csId = attribs["data-cs-id"];
  const ann = ctx.ann;
  const mo = csId != null ? ann?.motion?.get(csId) : undefined;
  const extra = csId != null ? ann?.extraClasses?.get(csId) : undefined;
  if (extra?.length) {
    attribs.class = [attribs.class, ...extra].filter(Boolean).join(" ");
  }
  if (ann?.keepCsIds && csId != null && !ann.keepCsIds.has(csId)) {
    delete attribs["data-cs-id"];
  }

  const rawTag = node.name!;
  const childNearestName = attribs["data-framer-name"] || nearestName;
  const childNoContent = noContent || NO_CONTENT_TAGS.has(rawTag);

  // 4c: media/link content — swap the literal attribute for a content lookup.
  // Runs BEFORE emitAttrs so the literal src/href is never also emitted.
  let contentAttrs = "";
  if (!noContent && rawTag === "img" && attribs.src) {
    const key = makeContentKey(childNearestName, "image", rawTag, ctx);
    ctx.content.push({ key, kind: "image", value: { src: attribs.src, alt: attribs.alt || "" } });
    delete attribs.src;
    delete attribs.alt;
    contentAttrs = ` src={content.${key}.src} alt={content.${key}.alt}`;
  } else if (!noContent && rawTag === "a" && attribs.href && !/^\s*(#|javascript:)/i.test(attribs.href) && attribs.href.trim()) {
    const key = makeContentKey(childNearestName, "link", rawTag, ctx);
    ctx.content.push({ key, kind: "link", value: attribs.href });
    delete attribs.href;
    contentAttrs = ` href={content.${key}}`;
  } else if (!noContent && rawTag === "video" && attribs.src) {
    const key = makeContentKey(childNearestName, "video", rawTag, ctx);
    ctx.content.push({ key, kind: "video", value: attribs.src });
    delete attribs.src;
    contentAttrs = ` src={content.${key}}`;
  }

  let tag = SVG_TAG_CASE[rawTag] ?? rawTag;
  let motionSrc = "";
  if (mo) {
    ctx.usedMotion = true;
    tag = `motion.${tag}`;
    motionSrc = motionPropsSource(mo);
  }
  const attrs = emitAttrs(attribs, rawTag) + motionSrc + contentAttrs;
  const children = (node.children || [])
    .map((c) => emitNode(c, depth + 1, ctx, childNearestName, childNoContent, rawTag))
    .join("");
  if (VOID_ELEMENTS.has(rawTag) || !children.trim()) {
    return `${pad}<${tag}${attrs} />\n`;
  }
  return `${pad}<${tag}${attrs}>\n${children}${pad}</${tag}>\n`;
}

// ─── public API ─────────────────────────────────────────────────────────────

// Convert an HTML subtree into JSX element source (no component wrapper). Each
// top-level element is emitted at `depth` indentation. Used for the page shell,
// which is spliced into a Page component by the caller. Content refs are
// emitted as `{content.key}` — the caller must add `import content from
// "./content/<name>";` to whatever file this fragment lands in.
export function convertHtmlToJsx(
  html: string,
  depth = 2,
  ann?: JsxAnnotations,
): { jsx: string; usedMotion: boolean; content: ContentEntry[] } {
  const $ = cheerio.load(html, { decodeEntities: false } as any, false);
  const top = ($.root()[0] as unknown as Node).children?.filter((c) => c.type === "tag") ?? [];
  const ctx: EmitCtx = { ann, usedMotion: false, content: [], usedContentKeys: new Set(), fallbackCounters: {} };
  const jsx = top.map((el) => emitNode(el, depth, ctx)).join("");
  return { jsx, usedMotion: ctx.usedMotion, content: ctx.content };
}

// Convert a section HTML subtree into a full .tsx component source file.
// `contentImportPath` is the relative path (no extension) to the sibling
// content module this section's extracted text/media should import from —
// pass it whenever the caller will also write that module (skip it, and refs
// stay unresolved, only if you intend to inline content another way).
export function htmlToJsxComponent(
  html: string,
  componentName: string,
  ann?: JsxAnnotations,
  contentImportPath?: string,
): { code: string; content: ContentEntry[] } {
  const $ = cheerio.load(html, { decodeEntities: false } as any, false);
  const top = ($.root()[0] as unknown as Node).children?.filter((c) => c.type === "tag") ?? [];
  const single = top.length === 1;
  const ctx: EmitCtx = { ann, usedMotion: false, content: [], usedContentKeys: new Set(), fallbackCounters: {} };
  const inner = top.map((el) => emitNode(el, single ? 2 : 3, ctx)).join("");
  const body = single ? inner : `    <>\n${inner}    </>\n`;
  const motionImport = ctx.usedMotion ? `import { motion } from "framer-motion";\n` : "";
  const contentImport = ctx.content.length && contentImportPath ? `import content from "${contentImportPath}";\n` : "";
  const code = `// ${componentName}.tsx — section converted to a real JSX component by extract-site.
// Editable React: entrance animations are inline framer-motion props with the
// MEASURED timing from the original site; hover effects live in hover.css.
// Copy, photos, and links live in the sibling content module — edit there to
// re-skin this section without touching layout/motion.
import type { CSSProperties } from "react";
${motionImport}${contentImport}
export function ${componentName}() {
  return (
${body.replace(/\n+$/, "\n")}  );
}
`;
  return { code, content: ctx.content };
}
