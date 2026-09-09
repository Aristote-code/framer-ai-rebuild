// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured 155 appear-effects + 10 scroll behaviors + 0 hover effects
// + 0 measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";

// cs-ids whose entrance was compiled into framer-motion props. The scroll
// runtime must not step-reveal these — both would write `transform` and fight
// (that double-drive cost /agents 49 diffs).
const INLINED_ENTRANCE: string[] = ["104","140","510","776","1066","1332","1622","1808","2017","2283","2697","3184","3188","3190","3192","3194","3196","3199","3819"];
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any, inlinedEntrance: INLINED_ENTRANCE });
}
