#!/usr/bin/env bun
// `extract-site capture-nav <url> --out <reference-dir>`
//
// Captures the hover-mounted nav dropdown panels ONCE for a site. They live in
// the shared header, so every route reuses them and no page needs re-extracting.
import { captureNavDropdowns, writeNavDropdowns } from './nav-dropdowns.ts';

const argv = process.argv.slice(3);
const url = argv.find((a) => !a.startsWith('--'));
const outIdx = argv.indexOf('--out');
const out = outIdx >= 0 ? argv[outIdx + 1] : undefined;
if (!url || !out) {
  console.error('Usage: extract-site capture-nav <url> --out <reference-dir>');
  process.exit(2);
}
console.log(`\n🧭 extract-site capture-nav → ${url}`);
const panels = await captureNavDropdowns(url);
if (!panels.length) {
  console.log('  (no hover-mounted nav panels found — nothing to write)');
  process.exit(0);
}
await writeNavDropdowns(out, panels);
console.log(`\n✅ ${panels.length} nav panel(s) → ${out}/motion/nav-dropdowns.json`);
