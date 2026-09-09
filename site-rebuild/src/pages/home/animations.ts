// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured 151 appear-effects + 14 scroll behaviors + 0 hover effects
// + 67 measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";

// cs-ids whose entrance was compiled into framer-motion props. The scroll
// runtime must not step-reveal these — both would write `transform` and fight
// (that double-drive cost /agents 49 diffs).
const INLINED_ENTRANCE: string[] = ["133","135","199","213","374","383","384","385","387","388","389","391","392","394","395","396","397","398","399","400","401","403","404","405","406","407","408","409","410","411","417","441","603","718","753","757","761","766","770","774","779","783","787","790","836","860","1130","1160","1190","1220","1250","1403","1411","1419","1458","1462","1466","1500","1567","1640","1666","1704","1712","1728","1744","1760","1776","1792","1808","1824","1970","2025","2030","2034","2302","2303","2304","2305","2306","2307","2308","2309","2310","2311","2312","2768","3066"];
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any, inlinedEntrance: INLINED_ENTRANCE });
}
