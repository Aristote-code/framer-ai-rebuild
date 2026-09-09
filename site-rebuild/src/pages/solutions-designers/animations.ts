// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured 152 appear-effects + 13 scroll behaviors + 3 hover effects
// + 37 measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";

// cs-ids whose entrance was compiled into framer-motion props. The scroll
// runtime must not step-reveal these — both would write `transform` and fight
// (that double-drive cost /agents 49 diffs).
const INLINED_ENTRANCE: string[] = ["109","136","279","282","288","289","292","298","299","302","308","316","325","326","327","328","329","330","331","332","333","334","335","336","337","338","339","340","360","361","362","363","364","365","366","367","368","369","370","371","372","373","374","375","395","398","404","406","419","425","426","435","441","442","455","461","462","471","477","478","487","493","494","505","511","512","514","520","538","547","551","559","565","567","569","578","589","598","607","613","621","712","767","770","771","772","775","776","779","780","783","784","787","788","791","792","827","922","937","945","946","981","993","1232","1443","1613","1614","1615","1616","1617","1618","1619","1620","1621","1622","1623","2079","2469"];
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any, inlinedEntrance: INLINED_ENTRANCE });
}
