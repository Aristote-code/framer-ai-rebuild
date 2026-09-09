// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured 254 appear-effects + 22 scroll behaviors + 1 hover effects
// + 70 measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";

// cs-ids whose entrance was compiled into framer-motion props. The scroll
// runtime must not step-reveal these — both would write `transform` and fight
// (that double-drive cost /agents 49 diffs).
const INLINED_ENTRANCE: string[] = ["180","249","282","305","317","368","418","433","597","600","606","608","614","617","626","631","637","639","642","648","663","681","694","705","718","723","729","742","750","765","828","837","839","880","897","905","922","930","947","955","972","980","997","1005","1022","1030","1052","1067","1071","1075","1080","1084","1088","1092","1096","1100","1104","1124","1135","1156","1187","1189","1191","1194","1203","1204","1208","1216","1219","1221","1223","1225","1233","1236","1239","1245","1267","1282","1375","1434","1440","1447","1448","1458","1462","1463","1480","1485","1581","1589","1597","1630","1641","1654","1661","1668","1670","1690","1697","1704","1706","1726","1733","1740","1742","1769","1776","1778","1798","1805","1812","1814","1834","1841","1848","1869","1947","1956","1975","1998","2013","2026","2039","2060","2073","2093","2100","2101","2106","2113","2114","2119","2127","2132","2140","2145","2153","2158","2166","2171","2179","2184","2192","2197","2205","2210","2218","2227","2269","2277","2284","2287","2318","2368","2470","2472","2490","2494","2495","2501","2519","2527","2545","2549","2550","2556","2574","2582","2765","2766","2767","2768","2769","2770","2771","2772","2773","2774","2775","3231","3547"];
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any, inlinedEntrance: INLINED_ENTRANCE });
}
