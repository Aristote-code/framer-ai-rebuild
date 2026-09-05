// motion-runtime.ts — the thin layer that ports framer's motion behaviors
// onto our extracted DOM. consumes the JSON specs captured by extract-site
// (appear-effects + scroll-motion) and drives equivalent animations using
// framer-motion's `animate()` primitive (no framer chunks needed).
//
// element matching: every spec carries a `csId` that corresponds to
// `[data-cs-id="N"]` in the rendered DOM. cs-ids are assigned by
// extract-site/src/computed-styles.ts in a deterministic depth-first walk;
// extract-site/src/appear-effects.ts and scroll-motion.ts replicate that
// walk so their cs-ids align.

import { animate } from 'framer-motion';

// ─── types (mirror the JSON shapes from extract-site) ─────────────────

export interface AppearEffectSpec {
  id: string;
  csId: string | null;
  framerName: string | null;
  appearId: string | null;
  initial: Record<string, string>;  // opacity / transform / filter / will-change
  rawStyle: string;
  // v0.7: measured entrance timing, joined from animations.json by framerName
  // at generation time (`extract-site rebuild`). undefined → fall back to the
  // framer-default smooth curve below. easing is the raw CSS timing function
  // ("cubic-bezier(...)"/keyword); parseEasing() normalizes it for framer-motion.
  duration?: number;   // seconds
  easing?: string;     // raw CSS timing function
}

export interface ScrollBehaviorSpec {
  selector: string;
  csId?: string;
  framerName?: string;
  tag: string;
  kind: ('pinned' | 'parallax' | 'scroll-scaled' | 'scroll-translated' | 'scroll-faded' | 'pin-scrub' | 'scroll-rotated')[];
  scrollFrom: number;
  scrollTo: number;
  vpTopSlope: number;
  scaleStart?: number;
  scaleEnd?: number;
  translateXStart?: number;
  translateXEnd?: number;
  translateYStart?: number;
  translateYEnd?: number;
  rotateStart?: number;
  rotateEnd?: number;
  opacityStart?: number;
  opacityEnd?: number;
  // measured trajectory across the scroll range. real scroll effects are often
  // non-monotonic (framer's hero scales 1 → 2.15 → 1.18), so a start/end lerp
  // flattens the motion away. when present these win over the *Start/*End pair.
  keyframes?: Array<{ s: number; scale?: number; tx?: number; ty?: number; rot?: number; op?: number }>;
  nonMonotonic?: boolean;
  bboxStart: { x: number; y: number; w: number; h: number };
  bboxEnd: { x: number; y: number; w: number; h: number };
  text?: string;
  sectionSlug?: string;
}

export interface HoverSpec {
  // either selector OR triggerCsId identifies what you point at
  selector?: string;
  triggerCsId?: string;
  // targetCsId identifies the descendant that visually animates
  targetCsId?: string;
  framerName?: string;
  delta: Record<string, { from: string; to: string }>;
  duration?: string;
  easing?: string;
}

// v0.7 (1a+): bbox-keyed measured timing. each entry is one CDP-captured
// entrance animation with its document-relative rect + measured duration/easing.
// the runtime matches appear elements to the nearest entry by geometry for
// per-element timing (vs the page-dominant fallback baked into AppearEffectSpec).
export interface CdpTimingSpec {
  bbox: { x: number; y: number; w: number; h: number };
  duration: number;  // seconds
  easing?: string;   // raw CSS timing function
}

export interface MotionData {
  appear: { effects: AppearEffectSpec[] };
  scroll: { behaviors: ScrollBehaviorSpec[] };
  hover?: HoverSpec[];
  appearTiming?: CdpTimingSpec[];
}

// ─── easing / timing ─────────────────────────────────────────────────────

// framer's default "smooth" curve — the fallback whenever we have no measured
// timing or can't faithfully map what was measured (springs, steps()).
const DEFAULT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DEFAULT_CSS_EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'; // DEFAULT_EASE as a CSS timing function
const DEFAULT_APPEAR_DUR = 0.8;

// CSS named easings → bezier control points. framer-motion's `ease` option does
// NOT accept CSS keywords or a raw "cubic-bezier(...)" string — only a 4-tuple
// or its own named curves — so we normalize CSS timing functions here.
const NAMED_EASINGS: Record<string, [number, number, number, number]> = {
  ease: [0.25, 0.1, 0.25, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1],
};

// Parse a CSS timing function into a framer-motion `ease` value (a 4-tuple or
// "linear"). Returns undefined for anything we can't faithfully map (spring(),
// steps(), unknown) so the caller falls back to DEFAULT_EASE.
function parseEasing(raw?: string): [number, number, number, number] | 'linear' | undefined {
  if (!raw) return undefined;
  const v = raw.trim().toLowerCase();
  if (v === 'linear') return 'linear';
  if (v in NAMED_EASINGS) return NAMED_EASINGS[v];
  const m = /cubic-bezier\(\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*\)/.exec(v);
  if (m) {
    const nums = m.slice(1, 5).map(Number);
    if (nums.every((n) => Number.isFinite(n))) return nums as [number, number, number, number];
  }
  return undefined;
}

// ─── element lookup ────────────────────────────────────────────────────

function findElement(spec: { csId?: string | null; framerName?: string | null }): HTMLElement | null {
  if (spec.csId != null) {
    const el = document.querySelector<HTMLElement>(`[data-cs-id="${spec.csId}"]`);
    if (el) return el;
  }
  if (spec.framerName) {
    // CSS attribute selectors don't escape easily; use querySelectorAll fallback
    const all = document.querySelectorAll<HTMLElement>('[data-framer-name]');
    for (const el of Array.from(all)) {
      if (el.getAttribute('data-framer-name') === spec.framerName) return el;
    }
  }
  return null;
}

// ─── bbox timing match (1a+) ──────────────────────────────────────────────

interface DocRect { x: number; y: number; w: number; h: number }

// element rect in DOCUMENT coordinates (matches how CDP bbox was captured:
// top/left + scroll offset). measured at resting state, before the entrance
// transform is re-applied, so it lines up with the original's resting capture.
function docRect(el: HTMLElement): DocRect {
  const r = el.getBoundingClientRect();
  return { x: r.left + window.scrollX, y: r.top + window.scrollY, w: r.width, h: r.height };
}

// find the CDP-captured animation whose rect best matches this element. scoring
// is VERTICAL-DOMINANT: the rebuilt page is a tall single column, so vertical
// position is the reliable axis. horizontal is de-weighted (text alignment can
// differ between original and rebuild) and element SIZE is ignored entirely —
// the CDP box is the animating span while the matched appear element is often
// its container, so their sizes legitimately differ (an earlier size penalty
// wrecked the hit rate). returns null when nothing is within the gate (element
// wasn't a captured animation → caller falls back to the dominant/framerName
// timing). the gate is generous on purpose: same-region entrances share timing,
// so picking a vertically-adjacent box can't assign a wrongly-timed curve.
function matchTiming(rect: DocRect, table: CdpTimingSpec[]): CdpTimingSpec | null {
  if (!table.length) return null;
  const cy = rect.y + rect.h / 2;
  const cx = rect.x + rect.w / 2;
  let best: CdpTimingSpec | null = null;
  let bestScore = Infinity;
  for (const t of table) {
    const tcy = t.bbox.y + t.bbox.h / 2;
    const tcx = t.bbox.x + t.bbox.w / 2;
    const score = Math.abs(cy - tcy) + Math.abs(cx - tcx) * 0.25;
    if (score < bestScore) { bestScore = score; best = t; }
  }
  return best && bestScore < 250 ? best : null;
}

// ─── appear effects (entry animations on viewport intersect) ──────────

function mountAppearEffects(effects: AppearEffectSpec[], timingTable: CdpTimingSpec[] = []): number {
  let matched = 0;
  let precise = 0;
  // group by viewport: one IntersectionObserver shared across all
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const initialJSON = el.dataset.appearInit;
        if (!initialJSON) continue;
        const initial: Record<string, string> = JSON.parse(initialJSON);
        // measured timing (joined at generation time), framer-default fallback.
        const duration = el.dataset.appearDur ? parseFloat(el.dataset.appearDur) : DEFAULT_APPEAR_DUR;
        const ease = el.dataset.appearEase || DEFAULT_CSS_EASE; // raw CSS timing function
        // Reveal via a native CSS transition — NOT framer-motion's animate().
        // animate() mangles complex transform strings (e.g. "translateY(10px)
        // scale(1) rotate(0deg) skewX(0deg)…" → "none"), producing a degenerate
        // matrix(0,…) that collapses the element to 0×0 (this hid tourly's hero
        // word-spans). CSS transitions interpolate ANY transform form correctly.
        const props = Object.keys(initial).filter((p) => p !== 'will-change');
        el.style.transition = props.map((p) => `${p} ${duration}s ${ease}`).join(', ');
        requestAnimationFrame(() => {
          if ('opacity' in initial) el.style.opacity = '1';
          if ('transform' in initial) el.style.transform = 'none';
          if ('filter' in initial) el.style.filter = 'blur(0px)';
        });
        observer.unobserve(el);
        window.setTimeout(() => {
          el.style.transition = '';
          delete el.dataset.appearInit;
          delete el.dataset.appearDur;
          delete el.dataset.appearEase;
        }, duration * 1000 + 80);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );

  for (const fx of effects) {
    const el = findElement(fx);
    if (!el) continue;
    matched++;
    // bbox-join: measure resting geometry BEFORE applying the initial transform,
    // then match to the nearest CDP-captured animation for per-element timing.
    // fall back to the dominant/framerName timing baked into the effect.
    const hit = matchTiming(docRect(el), timingTable);
    if (hit) precise++;
    const duration = hit?.duration ?? fx.duration;
    const easing = hit?.easing ?? fx.easing;
    // apply initial state inline (overrides any current style)
    for (const [prop, val] of Object.entries(fx.initial)) {
      el.style.setProperty(prop, val);
    }
    el.dataset.appearInit = JSON.stringify(fx.initial);
    if (duration != null) el.dataset.appearDur = String(duration);
    if (easing) el.dataset.appearEase = easing;
    observer.observe(el);
  }
  if (timingTable.length) {
    console.log(`[motion-runtime] appear precise-timing: ${precise}/${matched} matched a captured animation (table ${timingTable.length})`);
  }
  return matched;
}

// ─── scroll-linked motion (parallax, pin, scrub) ──────────────────────

interface BoundParallax {
  el: HTMLElement;
  spec: ScrollBehaviorSpec;
  baseDocTop: number;  // element's natural docTop at scroll=0
  baseTransform: string;  // existing transform we need to compose with (e.g. rotate, scale)
}

// pin-scrub binding (1b): the element is pinned (handled natively by its
// fixed/sticky ancestor) AND scrubs scale/translate/opacity across a scroll
// range — the "hero shrink" pattern. we only drive the scrubbed properties.
interface BoundScrub {
  el: HTMLElement;
  spec: ScrollBehaviorSpec;
  baseTransform: string;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// scroll progress through a behavior's range, clamped to [0,1].
function scrollProgress(y: number, from: number, to: number): number {
  const span = to - from;
  if (span <= 0) return 0;
  return Math.max(0, Math.min(1, (y - from) / span));
}

function mountScrollMotion(behaviors: ScrollBehaviorSpec[]): number {
  const parallaxBindings: BoundParallax[] = [];
  const scrubBindings: BoundScrub[] = [];
  const flowBindings: {
    el: HTMLElement;
    spec: ScrollBehaviorSpec;
    ramps: Record<KfChannel, boolean>;
  }[] = [];
  const boundEls = new Set<HTMLElement>();
  let matched = 0;

  // first pass: collect candidates. pin-scrub takes priority over parallax
  // (a pinned hero that also drifts is a scrub, not flow parallax).
  const candidates: { el: HTMLElement; spec: ScrollBehaviorSpec }[] = [];
  for (const b of behaviors) {
    const el = findElement(b);
    if (!el) continue;
    matched++;
    if (b.kind.includes('pin-scrub')) {
      const cs = getComputedStyle(el);
      const baseTransform = cs.transform === 'none' ? '' : cs.transform;
      scrubBindings.push({ el, spec: b, baseTransform });
    } else if (b.kind.includes('parallax')) {
      // REQUIRE MEASURED MOTION. A vpTop slope near -1 is normal document
      // flow; the sampler's slope estimate carries a few points of noise, so
      // "slope != -1" alone is not evidence of parallax. Framer drives real
      // parallax by writing transforms, which the capture records as a ty/tx
      // ramp — if there's no ramp, there's nothing to reproduce and the
      // browser's own layout is already correct.
      //
      // Guessing here is actively destructive: on this page `Header`
      // (slope -0.91, no measured ramp) got translated -223px by the slope
      // fallback, which pushed it out of an `overflow: clip` ancestor and made
      // the "Your next idea starts here" headline disappear entirely.
      if (hasStickyAncestor(el)) continue; // native sticky already produces it
      const pkf = b.keyframes;
      const measured =
        !!pkf && (channelShape(pkf, 'ty') === 'ramp' || channelShape(pkf, 'tx') === 'ramp');
      if (!measured) continue;
      candidates.push({ el, spec: b });
    } else if (
      b.keyframes &&
      b.keyframes.length >= 3 &&
      (b.kind.includes('scroll-scaled') ||
        b.kind.includes('scroll-translated') ||
        b.kind.includes('scroll-rotated') ||
        b.kind.includes('scroll-faded')) &&
      hasScrollRamp(b)
    ) {
      // IN-FLOW SCRUB. The element is NOT pinned — it scrolls with the document
      // — but framer drives its transform/opacity from scroll position anyway.
      // This is the framer hero pattern (scale 1 → 2.15 → 1.18). Without this
      // branch these elements were counted as "matched" and then never
      // animated, so the rebuild rendered them dead still.
      //
      // Replay is ABSOLUTE, not delta: the captured tx/ty/rot/scale are the
      // decomposition of framer's own matrix, so re-emitting them in
      // translate→rotate→scale order reconstructs it. Composing onto the base
      // transform here would double-apply it.
      const kf = b.keyframes!;
      flowBindings.push({
        el,
        spec: b,
        ramps: {
          scale: channelShape(kf, 'scale') === 'ramp',
          tx: channelShape(kf, 'tx') === 'ramp',
          ty: channelShape(kf, 'ty') === 'ramp',
          rot: channelShape(kf, 'rot') === 'ramp',
          op: channelShape(kf, 'op') === 'ramp',
        },
      });
    }
  }

  // leaf-only: skip elements whose ancestor is also a parallax candidate.
  // why: parallax translates the element. if both parent and child translate
  // the same delta, they compound visually — child appears to move 2x.
  // framer's runtime composes transforms in a single matrix per element;
  // we approximate by only animating the deepest binding in each chain.
  const candidateSet = new Set(candidates.map((c) => c.el));
  for (const { el, spec } of candidates) {
    let p: HTMLElement | null = el.parentElement;
    let hasAncestorBound = false;
    while (p) {
      if (candidateSet.has(p)) { hasAncestorBound = true; break; }
      p = p.parentElement;
    }
    if (hasAncestorBound) continue;
    const rect = el.getBoundingClientRect();
    const baseDocTop = rect.top + window.scrollY;
    // capture existing transform so we can compose (don't stomp framer's
    // rotate/scale on tilted polaroids etc.). filter out any pre-existing
    // translate3d we might have left from a hot-reload.
    const cs = getComputedStyle(el);
    const baseTransform = cs.transform === 'none' ? '' : cs.transform;
    parallaxBindings.push({ el, spec, baseDocTop, baseTransform });
    boundEls.add(el);
  }
  void boundEls; // for future cross-mount coordination

  // plain pinned (no scrub): handled natively. the element's fixed/sticky
  // ancestor (whose computed position we inlined) holds it in the viewport —
  // verified empirically: pinned elements reproduce slope≈0 in the rebuild.
  // pin-scrub elements pin the same way; we only drive their scrubbed
  // scale/translate/opacity below (1b).

  if (parallaxBindings.length === 0 && scrubBindings.length === 0 && flowBindings.length === 0) return matched;

  let raf = 0;
  let lastY = -1;
  const update = () => {
    raf = 0;
    const y = window.scrollY;
    if (y === lastY) return;
    lastY = y;
    for (const { el, spec, baseDocTop, baseTransform } of parallaxBindings) {
      void baseDocTop;
      if (y < spec.scrollFrom - 200 || y > spec.scrollTo + 200) continue;
      let extra: number;
      const pkf = spec.keyframes;
      if (pkf && pkf.length >= 3 && kfHas(pkf, 'ty')) {
        // replay the measured translateY trajectory piecewise, delta-from-start
        const at = sampleKf(pkf, 'ty', y);
        const at0 = sampleKf(pkf, 'ty', spec.scrollFrom);
        extra = at != null && at0 != null ? at - at0 : 0;
      } else if (spec.translateYStart != null && spec.translateYEnd != null) {
        // 1c: replay the MEASURED translateY keyframes. delta-from-start so the
        // element sits at rest at scrollFrom (matches the slope path's origin)
        // and tracks the captured offset thereafter. bounded by the measured
        // values, so no clamp needed.
        const p = scrollProgress(y, spec.scrollFrom, spec.scrollTo);
        extra = (spec.translateYEnd - spec.translateYStart) * p;
      } else {
        // fallback: captured slope dVpTop/dScrollY (≈ -1 for normal flow).
        // delta = (1 + slope) * (y - scrollFrom). clamp the heuristic so a bad
        // slope estimate can't fling an element off-screen.
        extra = -(y - spec.scrollFrom) * (1 + spec.vpTopSlope);
        extra = Math.max(-400, Math.min(400, extra));
      }
      // compose with the element's existing transform (rotate/scale on tilted
      // polaroids etc.) by prepending a translate3d.
      el.style.transform = `translate3d(0, ${extra.toFixed(2)}px, 0) ${baseTransform}`.trim();
    }

    // 1b: pin-scrub — element is pinned (native) and scrubs scale/translate/
    // opacity across its scroll range. interpolate each captured channel by
    // scroll progress and compose onto the base transform.
    for (const { el, spec, baseTransform } of scrubBindings) {
      const p = scrollProgress(y, spec.scrollFrom, spec.scrollTo);
      const parts: string[] = [];
      const skf = spec.keyframes;
      if (skf && skf.length >= 3) {
        // measured trajectory wins — keeps mid-range peaks that a lerp drops
        const ty = kfHas(skf, 'ty') ? sampleKf(skf, 'ty', y) : undefined;
        const ty0 = kfHas(skf, 'ty') ? sampleKf(skf, 'ty', spec.scrollFrom) : undefined;
        const tx = kfHas(skf, 'tx') ? sampleKf(skf, 'tx', y) : undefined;
        const tx0 = kfHas(skf, 'tx') ? sampleKf(skf, 'tx', spec.scrollFrom) : undefined;
        const dx = tx != null && tx0 != null ? tx - tx0 : 0;
        const dy = ty != null && ty0 != null ? ty - ty0 : 0;
        if (dx || dy) parts.push(`translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`);
        const rot = kfHas(skf, 'rot') ? sampleKf(skf, 'rot', y) : undefined;
        if (rot != null) parts.push(`rotate(${rot.toFixed(2)}deg)`);
        const sc = kfHas(skf, 'scale') ? sampleKf(skf, 'scale', y) : undefined;
        if (sc != null) parts.push(`scale(${sc.toFixed(4)})`);
        if (parts.length) el.style.transform = `${parts.join(' ')} ${baseTransform}`.trim();
        const op = kfHas(skf, 'op') ? sampleKf(skf, 'op', y) : undefined;
        if (op != null) el.style.opacity = op.toFixed(3);
        continue;
      }
      if (spec.translateYStart != null && spec.translateYEnd != null) {
        const ty = lerp(spec.translateYStart, spec.translateYEnd, p) - spec.translateYStart;
        if (ty) parts.push(`translate3d(0, ${ty.toFixed(2)}px, 0)`);
      }
      if (spec.translateXStart != null && spec.translateXEnd != null) {
        const tx = lerp(spec.translateXStart, spec.translateXEnd, p) - spec.translateXStart;
        if (tx) parts.push(`translate3d(${tx.toFixed(2)}px, 0, 0)`);
      }
      if (spec.scaleStart != null && spec.scaleEnd != null) {
        parts.push(`scale(${lerp(spec.scaleStart, spec.scaleEnd, p).toFixed(4)})`);
      }
      if (spec.rotateStart != null && spec.rotateEnd != null) {
        parts.push(`rotate(${lerp(spec.rotateStart, spec.rotateEnd, p).toFixed(2)}deg)`);
      }
      if (parts.length) el.style.transform = `${parts.join(' ')} ${baseTransform}`.trim();
      if (spec.opacityStart != null && spec.opacityEnd != null) {
        el.style.opacity = String(lerp(spec.opacityStart, spec.opacityEnd, p));
      }
    }

    // in-flow scrub: absolute replay of framer's own matrix decomposition,
    // rebuilt in translate → rotate → scale order (the order CSS decomposes
    // matrix() into). Elements here scroll normally; only their transform and
    // opacity are scroll-driven.
    for (const { el, spec, ramps } of flowBindings) {
      const kf = spec.keyframes!;
      // NOTE: no early `continue` outside the measured range. sampleKf clamps
      // to the nearest measured end, so the element settles at its start or
      // end pose instead of freezing at whatever value it last held.
      const parts: string[] = [];
      const tx = ramps.tx ? sampleKf(kf, 'tx', y) : undefined;
      const ty = ramps.ty ? sampleKf(kf, 'ty', y) : undefined;
      if (tx != null || ty != null) {
        parts.push(`translate3d(${(tx ?? 0).toFixed(2)}px, ${(ty ?? 0).toFixed(2)}px, 0)`);
      }
      const rot = ramps.rot ? sampleKf(kf, 'rot', y) : undefined;
      if (rot != null) parts.push(`rotate(${rot.toFixed(2)}deg)`);
      const sc = ramps.scale ? sampleKf(kf, 'scale', y) : undefined;
      if (sc != null) parts.push(`scale(${sc.toFixed(4)})`);
      if (parts.length) el.style.transform = parts.join(' ');
      // opacity is only ours to drive when it genuinely ramps — a stepped
      // opacity belongs to the entrance path, which owns this element's fade.
      const op = ramps.op ? sampleKf(kf, 'op', y) : undefined;
      if (op != null) el.style.opacity = op.toFixed(3);
    }
  };

  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  update();
  console.log(
    `[motion-runtime] scroll: ${parallaxBindings.length} parallax, ${scrubBindings.length} pin-scrub, ${flowBindings.length} in-flow scrub bound`,
  );
  return matched;
}

// ─── keyframe sampling ───────────────────────────────────────────────────
// Piecewise-linear read of a measured channel at scroll offset `y`. Walks the
// captured samples instead of lerping start→end, so peaks and reversals in the
// middle of the range survive. Returns undefined when the channel wasn't
// measured (so callers can leave that axis alone).
type KfChannel = 'scale' | 'tx' | 'ty' | 'rot' | 'op';

function sampleKf(
  kf: NonNullable<ScrollBehaviorSpec['keyframes']>,
  ch: KfChannel,
  y: number,
): number | undefined {
  // only consider samples where this channel was actually recorded
  let prev: { s: number; v: number } | null = null;
  let next: { s: number; v: number } | null = null;
  for (const k of kf) {
    const v = k[ch];
    if (v == null) continue;
    if (k.s <= y) prev = { s: k.s, v };
    else { next = { s: k.s, v }; break; }
  }
  if (prev && next) {
    const span = next.s - prev.s;
    if (span <= 0) return prev.v;
    const t = (y - prev.s) / span;
    return prev.v + (next.v - prev.v) * t;
  }
  // outside the measured range → clamp to the nearest measured end
  if (prev) return prev.v;
  if (next) return next.v;
  return undefined;
}

function kfHas(kf: NonNullable<ScrollBehaviorSpec['keyframes']>, ch: KfChannel): boolean {
  return kf.some((k) => k[ch] != null);
}

// ─── ramp vs step: is a channel really scroll-LINKED? ────────────────────
// The scroll sampler measures every element at N scroll offsets, so anything
// that changes *while* you scroll lands in scroll-motion.json — including
// IntersectionObserver ENTRANCE animations, which are not scroll-linked at all.
// Telling them apart matters: an entrance replayed as scroll-linked un-fades
// when you scroll back up, and freezes mid-fade once you pass its range.
//
// The shape is the tell. A scroll-linked ramp changes progressively across its
// whole range. An entrance is a step: flat, one fast transition, flat again.
// So measure the scroll span the middle of the transition occupies; if the
// whole change happens in a small fraction of the range, it's an entrance.
const CHANNEL_EPS: Record<KfChannel, number> = {
  scale: 0.05,
  tx: 8,
  ty: 8,
  rot: 2,
  op: 0.1,
};

function pct(sorted: number[], q: number): number {
  if (!sorted.length) return 0;
  const i = (sorted.length - 1) * q;
  const lo = Math.floor(i);
  const hi = Math.ceil(i);
  return lo === hi ? sorted[lo] : sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo);
}

export type ChannelShape = 'flat' | 'step' | 'ramp';

export function channelShape(
  kf: NonNullable<ScrollBehaviorSpec['keyframes']>,
  ch: KfChannel,
): ChannelShape {
  const pts = kf.filter((k) => k[ch] != null).map((k) => ({ s: k.s, v: k[ch] as number }));
  if (pts.length < 3) return 'flat';
  const vals = pts.map((p) => p.v).slice().sort((a, b) => a - b);
  // percentiles, not min/max: a single-sample transient (a frame caught
  // mid-entrance) must not qualify a channel that is otherwise dead flat.
  const lo = pct(vals, 0.1);
  const hi = pct(vals, 0.9);
  const amp = hi - lo;
  if (amp < CHANNEL_EPS[ch]) return 'flat';
  const totalSpan = pts[pts.length - 1].s - pts[0].s;
  if (totalSpan <= 0) return 'flat';
  // scroll span occupied by the 25%→75% part of the transition
  const q1 = lo + amp * 0.25;
  const q3 = lo + amp * 0.75;
  const inBand = pts.filter((p) => p.v >= q1 && p.v <= q3);
  let bandSpan: number;
  if (inBand.length >= 2) {
    bandSpan = inBand[inBand.length - 1].s - inBand[0].s;
  } else {
    // no sample landed inside the band → the transition happened between two
    // adjacent samples. Use that gap as the span.
    let gap = totalSpan;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1].v;
      const b = pts[i].v;
      if ((a < q1 && b > q3) || (a > q3 && b < q1)) gap = Math.min(gap, pts[i].s - pts[i - 1].s);
    }
    bandSpan = gap;
  }
  return bandSpan / totalSpan < 0.3 ? 'step' : 'ramp';
}

// A non -1 vpTop slope does NOT imply parallax. If any ancestor is sticky or
// fixed, the browser is already holding this element back as you scroll — that
// IS the measured slope. Translating it in JS on top of that double-moves it,
// which reads as the whole block sliding wrongly against its neighbours.
function hasStickyAncestor(el: HTMLElement): boolean {
  let p: HTMLElement | null = el;
  while (p && p !== document.body) {
    const pos = getComputedStyle(p).position;
    if (pos === 'sticky' || pos === 'fixed') return true;
    p = p.parentElement;
  }
  return false;
}

// A behaviour is worth binding only if at least one channel genuinely ramps.
export function hasScrollRamp(spec: ScrollBehaviorSpec): boolean {
  const kf = spec.keyframes;
  if (!kf || kf.length < 3) return false;
  return (['scale', 'tx', 'ty', 'rot', 'op'] as KfChannel[]).some(
    (ch) => channelShape(kf, ch) === 'ramp',
  );
}

// ─── hover effects (whileHover replay) ────────────────────────────────

function parseDur(s?: string): number {
  if (!s) return 0.2;
  const v = parseFloat(s);
  if (s.endsWith('ms')) return v / 1000;
  return v || 0.2;
}

function mountHover(specs: HoverSpec[]): number {
  let matched = 0;
  for (const spec of specs) {
    const triggerSel = spec.triggerCsId
      ? `[data-cs-id="${spec.triggerCsId}"]`
      : spec.selector;
    if (!triggerSel) continue;
    const trigger = document.querySelector<HTMLElement>(triggerSel);
    if (!trigger) continue;
    // target = the descendant that visually changes; falls back to trigger
    const target = spec.targetCsId
      ? document.querySelector<HTMLElement>(`[data-cs-id="${spec.targetCsId}"]`) ?? trigger
      : trigger;
    matched++;

    const dur = parseDur(spec.duration);
    const ease = parseEasing(spec.easing) ?? DEFAULT_EASE;
    const fromValues: Record<string, string> = {};
    const toValues: Record<string, string | number> = {};
    for (const [prop, { from, to }] of Object.entries(spec.delta)) {
      // prop names from extract-site are camelCase getComputedStyle keys.
      // animate() can take camelCase too; framer-motion normalizes.
      fromValues[prop] = from;
      toValues[prop] = to;
    }

    let activeAnim: { stop: () => void } | null = null;
    const onEnter = () => {
      if (activeAnim) activeAnim.stop();
      const anim = animate(target, toValues, { duration: dur, ease });
      activeAnim = { stop: () => anim.stop() };
    };
    const onLeave = () => {
      if (activeAnim) activeAnim.stop();
      const anim = animate(target, fromValues, { duration: dur, ease });
      activeAnim = { stop: () => anim.stop() };
    };
    trigger.addEventListener('pointerenter', onEnter);
    trigger.addEventListener('pointerleave', onLeave);
  }
  return matched;
}

// ─── public mount ──────────────────────────────────────────────────────

export interface MountOptions {
  // parallax is on by default in v0.6+ (classifier was tightened in
  // scroll-motion.ts to skip structural elements; runtime composes with
  // existing transforms instead of stomping). pass false to disable.
  enableParallax?: boolean;
}

export interface MountResult {
  appearMatched: number;
  appearTotal: number;
  scrollMatched: number;
  scrollTotal: number;
  hoverMatched: number;
  hoverTotal: number;
}

export function mountMotion(data: MotionData, opts: MountOptions = {}): MountResult {
  const enableParallax = opts.enableParallax ?? true;
  const appearMatched = mountAppearEffects(data.appear?.effects ?? [], data.appearTiming ?? []);
  const scrollMatched = enableParallax
    ? mountScrollMotion(data.scroll?.behaviors ?? [])
    : 0;
  const hoverMatched = mountHover(data.hover ?? []);
  const result: MountResult = {
    appearMatched,
    appearTotal: data.appear?.effects?.length ?? 0,
    scrollMatched,
    scrollTotal: data.scroll?.behaviors?.length ?? 0,
    hoverMatched,
    hoverTotal: data.hover?.length ?? 0,
  };
  console.log(
    `[motion-runtime] mounted: appear ${result.appearMatched}/${result.appearTotal}, scroll ${result.scrollMatched}/${result.scrollTotal}, hover ${result.hoverMatched}/${result.hoverTotal}`,
  );
  return result;
}
