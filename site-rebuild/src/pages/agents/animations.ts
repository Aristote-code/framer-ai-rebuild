// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured 276 appear-effects + 47 scroll behaviors + 1 hover effects
// + 1 measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";

// cs-ids whose entrance was compiled into framer-motion props. The scroll
// runtime must not step-reveal these — both would write `transform` and fight
// (that double-drive cost /agents 49 diffs).
const INLINED_ENTRANCE: string[] = ["117","130","143","156","169","182","195","208","221","234","245","246","254","258","262","266","270","274","278","282","286","2275","2319","2327","2334","2337","2368","2426","2532","2534","2552","2556","2557","2563","2581","2589","2607","2611","2612","2618","2636","2644","2805","2806","2807","2808","2809","2810","2811","2812","2813","2814","2815","3271"];
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any, inlinedEntrance: INLINED_ENTRANCE });
}
