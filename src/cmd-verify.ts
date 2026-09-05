#!/usr/bin/env bun
// `extract-site verify <reference-dir> <rebuildUrl> [opts]`
//
// The fidelity gate. Wraps probe.mjs (numerical CSS parity, the primary oracle)
// and optionally motion-probe.mjs (scroll-keyframe motion sanity), diffing your
// running rebuild against the LIVE original (URL read from reference/meta.json).
// Parses the diffs, prints a RANKED fix list, and exits non-zero until parity is
// under the threshold — so "reliable" is enforced numerically, not by eye.
//
// opts:
//   --max-diffs N   pass threshold on totalDiffs (default 10)
//   --motion        also run motion-probe on both URLs (slow; coarse sanity)
//   --interval N    motion-probe scroll step in px (default 60)
//   --out <dir>     where to write reports (default: the reference dir)
//
// exit code: 0 if within threshold, 1 otherwise (CI / loop friendly).

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILL_DIR = path.resolve(__dirname, "..");

interface Args {
  reference: string;
  rebuildUrl: string;
  maxDiffs: number;
  motion: boolean;
  interval: number;
  out: string;
}

function parseArgs(argv: string[]): Args {
  const args = argv.slice(3); // strip [bun, script, "verify"]
  const positional = args.filter((a, i) => !a.startsWith("--") && !args[i - 1]?.startsWith("--"));
  const reference = positional[0];
  const rebuildUrl = positional[1];
  if (!reference || !rebuildUrl) {
    console.error("Usage: extract-site verify <reference-dir> <rebuildUrl> [--max-diffs N] [--motion] [--interval N] [--out <dir>]");
    process.exit(2);
  }
  const get = (k: string) => {
    const i = args.indexOf(`--${k}`);
    return i >= 0 ? args[i + 1] : undefined;
  };
  const refResolved = path.resolve(process.cwd(), reference);
  return {
    reference: refResolved,
    rebuildUrl,
    maxDiffs: Number(get("max-diffs") ?? 10),
    motion: args.includes("--motion"),
    interval: Number(get("interval") ?? 60),
    out: path.resolve(process.cwd(), get("out") ?? refResolved),
  };
}

function readJsonSafe(p: string): any {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

// ─── ranking ────────────────────────────────────────────────────────────────
// weight diffs by how visible they are: layout (rect) dominates, then box-model,
// then type, then color, then transform/etc. This is what orders the fix list.
function propWeight(prop: string): number {
  if (prop.startsWith("rect.")) return 100;                                  // position / size
  if (/^(width|height|maxWidth|padding|margin|gap)$/.test(prop)) return 60;  // box model
  if (/^(fontSize|fontWeight|lineHeight|letterSpacing|fontFamily|fontStyle|textAlign|textTransform)$/.test(prop)) return 40;
  if (/^(color|backgroundColor|boxShadow|borderRadius|opacity|filter)$/.test(prop)) return 30;
  if (/^(transform|transformOrigin|transition)/.test(prop)) return 20;
  return 10;
}

interface DiffEntry { prop: string; original: string; rebuild: string }
interface ReportRow {
  selector: string;
  index?: number;
  text?: string;
  framerName?: string | null;
  diffs?: DiffEntry[];
  countMismatch?: { original: number; rebuild: number };
  unmatched?: { missingInRebuild: number; extraInRebuild: number };
}

function clip(s: string, n = 32): string {
  s = String(s ?? "");
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

interface Analysis {
  mismatches: ReportRow[];  // selector groups whose element COUNT differs
  alignedRows: ReportRow[]; // diff'd elements from count-ALIGNED groups (trustworthy)
  alignedDiffs: number;     // the meaningful score — style diffs among aligned pairs
  rawDiffs: number;         // probe's raw total (includes misaligned-group garbage)
}

// Split the probe report into structural mismatches vs trustworthy style diffs.
// probe.mjs pairs elements by DOM order within a selector group, so when a group
// has a different element COUNT between live and rebuild, every pair is offset
// and its per-index diffs are noise. We exclude those groups from the score and
// surface them separately as a structural problem to fix first.
function analyze(diff: any): Analysis {
  const report: ReportRow[] = diff.report ?? [];
  const mismatches = report.filter((r) => r.countMismatch);
  // identity pairing makes every diff row a like-for-like match, so all diffs
  // are trustworthy and count toward the score; unmatched elements are surfaced
  // separately (informational — they're gaps in structure, not style diffs).
  const alignedRows = report.filter((r) => r.diffs?.length);
  const alignedDiffs = alignedRows.reduce((s, r) => s + (r.diffs?.length ?? 0), 0);
  return { mismatches, alignedRows, alignedDiffs, rawDiffs: diff.totalDiffs ?? 0 };
}

function rankStatic(a: Analysis): string[] {
  const out: string[] = [];

  // 1. unmatched elements — structural gaps (missing/extra), not style diffs
  if (a.mismatches.length) {
    out.push(`\n### ⚠ Unmatched elements (structural gaps — no like-for-like counterpart)`);
    for (const r of a.mismatches) {
      const u = r.unmatched;
      out.push(`- \`${r.selector}\`: ${u?.missingInRebuild ?? 0} missing in rebuild, ${u?.extraInRebuild ?? 0} extra (live ${r.countMismatch!.original} vs rebuild ${r.countMismatch!.rebuild})`);
    }
  }

  // 2. property-frequency table over ALIGNED elements, weighted by visibility
  const byProp = new Map<string, number>();
  for (const r of a.alignedRows) for (const d of r.diffs!) byProp.set(d.prop, (byProp.get(d.prop) ?? 0) + 1);
  if (byProp.size) {
    const rows = [...byProp.entries()]
      .sort((x, y) => propWeight(y[0]) * y[1] - propWeight(x[0]) * x[1])
      .slice(0, 12);
    out.push(`\n### Most impactful diffs (aligned elements; property × count, visibility-weighted)`);
    for (const [prop, n] of rows) out.push(`- \`${prop}\` — ${n} element${n > 1 ? "s" : ""}`);
  }

  // 3. worst ALIGNED elements — highest weighted diff load, with their diffs
  const scored = a.alignedRows
    .map((r) => ({ r, score: r.diffs!.reduce((s, d) => s + propWeight(d.prop), 0) }))
    .sort((x, y) => y.score - x.score)
    .slice(0, 8);
  if (scored.length) {
    out.push(`\n### Worst aligned elements (fix these for the biggest gain)`);
    for (const { r } of scored) {
      const id = `\`${r.selector}\`${r.index != null ? `[${r.index}]` : ""}`;
      const label = r.framerName ? ` (${clip(r.framerName)})` : r.text ? ` "${clip(r.text)}"` : "";
      out.push(`- ${id}${label}`);
      for (const d of r.diffs!.slice(0, 6)) {
        out.push(`    - \`${d.prop}\`: \`${clip(d.original)}\` → \`${clip(d.rebuild)}\``);
      }
    }
  }
  return out;
}

// ─── runners ──────────────────────────────────────────────────────────────
function runProbe(liveUrl: string, rebuildUrl: string, outDir: string): any {
  // structural blocks only — LOW-cardinality so DOM-order pairing stays valid.
  // high-cardinality groups (a/li/img/button) routinely differ in count between
  // live and rebuild and cascade into garbage diffs, so they're excluded.
  const extra = ["section", "main", "header", "footer"].join(",");
  console.log(`\n▶ static parity: probe.mjs (live vs rebuild, +${extra.split(",").length} structural selectors)`);
  const res = spawnSync("bun", [path.join(SKILL_DIR, "probe.mjs"), liveUrl, rebuildUrl, outDir], {
    stdio: "inherit",
    env: { ...process.env, PROBE_EXTRA_SELECTORS: extra },
  });
  if (res.status !== 0) {
    console.error(`[err] probe.mjs failed (exit ${res.status}). Is the rebuild dev server running at ${rebuildUrl}?`);
    process.exit(2);
  }
  return readJsonSafe(path.join(outDir, "css-diff.json"));
}

function runMotion(url: string, interval: number, outFile: string): any {
  console.log(`\n▶ motion: motion-probe.mjs ${url}`);
  const res = spawnSync("bun", [path.join(SKILL_DIR, "motion-probe.mjs"), url, String(interval), outFile], {
    stdio: "inherit",
  });
  if (res.status !== 0) { console.warn(`[warn] motion-probe failed for ${url} (exit ${res.status})`); return null; }
  return readJsonSafe(outFile);
}

// ─── main ───────────────────────────────────────────────────────────────────
function main() {
  const { reference, rebuildUrl, maxDiffs, motion, interval, out } = parseArgs(process.argv);

  if (!fs.existsSync(reference)) {
    console.error(`[err] reference dir not found: ${reference}`);
    process.exit(2);
  }
  const meta = readJsonSafe(path.join(reference, "meta.json"));
  const liveUrl: string | undefined = meta?.url;
  if (!liveUrl) {
    console.error(`[err] no live URL in ${path.join(reference, "meta.json")} — can't verify against the original.`);
    process.exit(2);
  }
  fs.mkdirSync(out, { recursive: true });

  console.log(`\n🔬 extract-site verify`);
  console.log(`   live original: ${liveUrl}`);
  console.log(`   rebuild:       ${rebuildUrl}`);
  console.log(`   threshold:     ≤ ${maxDiffs} total style diffs`);

  // ── static parity (primary oracle) ──
  const diff = runProbe(liveUrl, rebuildUrl, out);
  if (!diff) { console.error("[err] probe produced no css-diff.json"); process.exit(2); }

  const analysis = analyze(diff);
  const lines: string[] = [];
  lines.push(`# extract-site verify report`);
  lines.push(``);
  lines.push(`- live: ${liveUrl}`);
  lines.push(`- rebuild: ${rebuildUrl}`);
  lines.push(`- **${analysis.alignedDiffs} style diffs across ${diff.totalPaired} identity-matched pairs** (${diff.fullyMatching} fully matching)`);
  lines.push(...rankStatic(analysis));

  // ── motion sanity (coarse; opt-in) ──
  let motionNote = "";
  if (motion) {
    const liveM = runMotion(liveUrl, interval, path.join(out, "motion-live.json"));
    const rebuildM = runMotion(rebuildUrl, interval, path.join(out, "motion-rebuild.json"));
    if (liveM?.summary && rebuildM?.summary) {
      const lw = liveM.summary.elementsWithMotion || 0;
      const rw = rebuildM.summary.elementsWithMotion || 0;
      const pct = lw ? Math.round((rw / lw) * 100) : 0;
      const hLive = liveM.summary.maxScroll || 0;
      const hRebuild = rebuildM.summary.maxScroll || 0;
      const hPct = hLive ? Math.round((hRebuild / hLive) * 100) : 0;
      motionNote = `animated elements: live ${lw} vs rebuild ${rw} (${pct}%); scroll height ${hPct}% of original`;
      lines.push(`\n### Motion sanity (coarse — element ids don't join across sites)`);
      lines.push(`- ${motionNote}`);
      if (pct < 60) lines.push(`- ⚠ rebuild reproduces <60% of the original's animated elements — motion likely under-ported`);
    } else {
      lines.push(`\n### Motion sanity`);
      lines.push(`- (motion-probe did not produce comparable output)`);
    }
  }

  // ── verdict (on the aligned diffs, not the raw count) ──
  const pass = analysis.alignedDiffs <= maxDiffs;
  lines.push(``);
  lines.push(`## Verdict: ${pass ? "✅ PASS" : "❌ above threshold"} — ${analysis.alignedDiffs}/${maxDiffs} style diffs${analysis.mismatches.length ? ` (+${analysis.mismatches.length} group(s) with unmatched elements)` : ""}`);

  const md = lines.join("\n");
  fs.writeFileSync(path.join(out, "verify-report.md"), md, "utf8");

  // print the ranked report to the terminal too
  console.log("\n" + md);
  console.log(`\n📄 full report → ${path.relative(process.cwd(), path.join(out, "verify-report.md"))}`);
  console.log(`   (css-diff.md / css-diff.json alongside it)`);

  process.exit(pass ? 0 : 1);
}

main();
