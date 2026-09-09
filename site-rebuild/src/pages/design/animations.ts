// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured 209 appear-effects + 14 scroll behaviors + 0 hover effects
// + 52 measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";

// cs-ids whose entrance was compiled into framer-motion props. The scroll
// runtime must not step-reveal these — both would write `transform` and fight
// (that double-drive cost /agents 49 diffs).
const INLINED_ENTRANCE: string[] = ["109","136","235","304","359","371","422","472","479","489","491","493","495","497","499","532","541","583","690","704","727","811","812","942","945","952","955","962","965","987","988","989","990","991","992","993","994","995","996","997","998","999","1000","1001","1002","1022","1023","1024","1025","1026","1027","1028","1029","1030","1031","1032","1033","1034","1035","1036","1037","1060","1068","1081","1088","1097","1104","1117","1124","1133","1140","1149","1156","1167","1174","1176","1373","1656","1658","1660","1662","1664","1666","1668","1670","1672","1674","1677","1682","1743","1746","1747","1748","1751","1752","1755","1756","1759","1760","1763","1764","1767","1768","1803","1921","1958","1963","1970","1975","2214","2425","2894","2895","2896","2897","2898","2899","2900","2901","2902","2903","2904","3360","4045"];
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any, inlinedEntrance: INLINED_ENTRANCE });
}
