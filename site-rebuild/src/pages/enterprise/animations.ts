// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured 55 appear-effects + 9 scroll behaviors + 0 hover effects
// + 0 measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";

// cs-ids whose entrance was compiled into framer-motion props. The scroll
// runtime must not step-reveal these — both would write `transform` and fight
// (that double-drive cost /agents 49 diffs).
const INLINED_ENTRANCE: string[] = ["169","170","171","172","173","174","175","176","177","178","179","198","258","284","428","438","1063","1071","1087","1103","1119","1135","1151","1167","1183","1251","1252","1253","1254","1255","1256","1257","1258","1259","1260","1261","2026"];
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any, inlinedEntrance: INLINED_ENTRANCE });
}
