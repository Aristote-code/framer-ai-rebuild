#!/usr/bin/env bun
// `extract-site capture-entrances <reference-dir>`
//
// Records which appear-effect elements actually become visible while scrolling
// the live page, so `rebuild` can tell a not-yet-played ENTRANCE apart from an
// interaction-gated panel instead of guessing from resting opacity.
// Cheap (one page load + a scroll pass) and needs no re-extraction.
import fs from 'node:fs';
import path from 'node:path';
import { captureEntranceLiveness, writeEntranceLiveness } from './entrance-liveness.ts';

const argv = process.argv.slice(3);
const refArg = argv.find((a) => !a.startsWith('--'));
if (!refArg) {
  console.error('Usage: extract-site capture-entrances <reference-dir>');
  process.exit(2);
}
const reference = path.resolve(process.cwd(), refArg);
const meta = JSON.parse(fs.readFileSync(path.join(reference, 'meta.json'), 'utf8'));
if (!meta?.url) {
  console.error(`❌ no url in ${reference}/meta.json`);
  process.exit(1);
}
console.log(`\n👁  extract-site capture-entrances → ${meta.url}`);
const data = await captureEntranceLiveness(meta.url, reference);
if (!data) {
  console.log('  (nothing captured)');
  process.exit(0);
}
writeEntranceLiveness(reference, data);
