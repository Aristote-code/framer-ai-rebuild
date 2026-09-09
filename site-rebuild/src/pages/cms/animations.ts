// animations.ts — boot the motion runtime over the rebuilt DOM.
// captured 332 appear-effects + 14 scroll behaviors + 0 hover effects
// + 274 measured-timing entries (bbox-keyed, for per-element appear timing).

import appear from "./data/appear-effects.json";
import scroll from "./data/scroll-motion.json";
import hoverThorough from "./data/hover-thorough.json";
import hoverLegacy from "./data/hover.json";
import appearTiming from "./data/appear-timing.json";

// cs-ids whose entrance was compiled into framer-motion props. The scroll
// runtime must not step-reveal these — both would write `transform` and fight
// (that double-drive cost /agents 49 diffs).
const INLINED_ENTRANCE: string[] = ["558","567","568","569","570","788","796","864","889","914","939","964","989","1034","1038","1042","1047","1051","1055","1059","1063","1067","1071","1103","1125","1138","1143","1183","1184","1185","1186","1187","1188","1189","1190","1191","1192","1193","1195","1196","1197","1198","1199","1200","1201","1202","1203","1204","1206","1207","1208","1209","1211","1212","1214","1215","1216","1217","1218","1219","1220","1222","1223","1224","1225","1226","1228","1229","1231","1232","1233","1234","1235","1236","1237","1239","1240","1241","1242","1243","1245","1246","1247","1248","1249","1250","1251","1252","1253","1254","1256","1257","1258","1260","1261","1262","1263","1264","1265","1266","1267","1268","1270","1271","1272","1273","1274","1275","1277","1278","1279","1280","1282","1283","1284","1285","1286","1287","1288","1289","1290","1291","1292","1294","1295","1297","1298","1299","1300","1301","1302","1303","1305","1306","1307","1309","1310","1311","1312","1313","1314","1315","1316","1318","1319","1320","1321","1323","1324","1325","1327","1328","1329","1330","1332","1333","1597","1601","1605","1610","1614","1618","1622","1626","1630","1634","1672","1674","1678","1687","1689","1698","1705","1730","1742","1809","1816","1824","1826","1863","1883","1891","1914","1922","1945","1953","1976","1984","2007","2015","2038","2046","2055","2072","2087","2091","2095","2100","2104","2108","2112","2116","2120","2124","2136","2252","2278","2304","2330","2356","2382","2404","2419","2423","2427","2432","2436","2440","2444","2448","2452","2456","2483","2486","2700","2708","2716","2724","2732","2994","3000","3020","3027","3076","3098","3120","3142","3164","3186","3208","3217","3242","3246","3250","3255","3259","3263","3267","3271","3275","3279","3662","3663","3664","3665","3666","3667","3668","3669","3670","3671","3672","4128","4549"];
import { mountMotion } from "./lib/motion-runtime";

// hover-thorough is cs-id keyed (preferred). fall back to legacy hover.json
// if extract-site is older than v0.6 and didn't emit hover-thorough.
const hover = (hoverThorough as any[]).length > 0 ? hoverThorough : hoverLegacy;

export function runEntryAnimations(_animate?: unknown) {
  // _animate kept for backwards-compat with App.tsx — runtime owns animate now.
  mountMotion({ appear: appear as any, scroll: scroll as any, hover: hover as any, appearTiming: appearTiming as any, inlinedEntrance: INLINED_ENTRANCE });
}
