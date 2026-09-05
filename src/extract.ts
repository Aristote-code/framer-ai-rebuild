#!/usr/bin/env bun
import { chromium } from 'playwright';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import {
  autoScroll,
  takeFullScreenshots,
  dumpFullDOM,
  createAssetCollector,
} from './static.ts';
import { sampledScrollCapture } from './sampler.ts';
import {
  detectStack,
  scanComputedTransitions,
  captureCDPAnimations,
  resolveCDPAnimationNodes,
  linkAnimationsToSections,
  classifyAnimatedElement,
  classifyCDPAnimation,
  tagStaggerGroups,
  tagCDPStaggerGroups,
  detectCharStagger,
  summarizeSectionMotion,
  writeMotionArtifacts,
} from './motion.ts';
import { captureHoverStates, writeHoverArtifacts } from './hover.ts';
import { captureFiberHovers, writeFiberHoverArtifacts } from './hover-fiber.ts';
import { captureHoversThoroughIsolated, writeThoroughHoverArtifacts } from './hover-thorough.ts';
import { captureScrollLinkedMotion, writeScrollMotionArtifacts } from './scroll-motion.ts';
import { measureLivenessInPage, writeEntranceLiveness } from './entrance-liveness.ts';
import { synthesizeTransitions, writeTransitionArtifacts } from './transitions.ts';
import { extractTokens, writeTokenArtifacts, extractCSSVars } from './tokens.ts';
import { detectSections, captureSectionScreenshots } from './sections.ts';
import { writeRebuildMd, writeStackMd } from './rebuild.ts';
import {
  extractSectionContent,
  linkAssetsToSections,
  writeContentArtifacts,
  harvestBackgroundImages,
} from './content.ts';
import { captureComputedStyles, captureResponsiveStyles } from './computed-styles.ts';
import { captureAppearEffects } from './appear-effects.ts';
import { extractSectionLayouts, writeLayoutArtifacts } from './layout.ts';
import { generateFontFaceCSS } from './fonts.ts';
import type { ExtractOptions, Viewport, Meta } from './types.ts';

const DEFAULT_VIEWPORTS: Viewport[] = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

interface CliArgs extends ExtractOptions {
  routes: boolean;
  maxRoutes: number;
  outRoot: string;
  host: string;
}

function parseArgs(argv: string[]): CliArgs {
  const args = argv.slice(2);
  const url = args.find((a) => !a.startsWith('--'));
  if (!url) {
    console.error('Usage: extract-site <url> [--out <dir>] [--name <slug>] [--headless] [--skip-hover] [--routes] [--max-routes <n>]');
    process.exit(1);
  }
  const get = (k: string) => {
    const i = args.indexOf(`--${k}`);
    return i >= 0 ? args[i + 1] : undefined;
  };
  const has = (k: string) => args.includes(`--${k}`);
  const host = new URL(url).hostname.replace(/^www\./, '');
  const name = get('name') ?? host.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  const outRoot = resolve(process.cwd(), get('out') ?? 'reference');
  return {
    url,
    name,
    outDir: join(outRoot, name),
    headless: has('headless'),
    skipHover: has('skip-hover'),
    viewports: DEFAULT_VIEWPORTS,
    routes: has('routes'),
    maxRoutes: Number(get('max-routes') ?? 20),
    outRoot,
    host,
  };
}

// turn a route pathname into a folder-safe slug. "/" → "home", "/our-work" →
// "our-work", "/project/foo" → "project-foo".
function routeSlug(pathname: string): string {
  const cleaned = pathname.replace(/^\/+|\/+$/g, '');
  if (!cleaned) return 'home';
  return cleaned.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
}

// discover same-origin internal routes from the homepage's <a href>. headed so
// hydration-injected nav links are present. bounded by maxRoutes.
async function discoverRoutes(url: string, headless: boolean, maxRoutes: number): Promise<string[]> {
  const browser = await chromium.launch({ headless, args: ['--disable-blink-features=AutomationControlled'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    // some Framer apps never reach networkidle — fail over to `load` after 20s
    // rather than blocking discovery for a full minute.
    await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 }).catch(() => page.goto(url, { waitUntil: 'load', timeout: 40000 }));
    await page.waitForTimeout(2000);
    const origin = new URL(url).origin;
    const hrefs = await page.$$eval('a[href]', (els) => els.map((a) => (a as HTMLAnchorElement).href));
    await browser.close();
    const paths = new Set<string>(['/']); // always include the homepage
    for (const h of hrefs) {
      try {
        const u = new URL(h, url);
        if (u.origin !== origin) continue;              // same-origin only
        if (/\.(pdf|zip|png|jpe?g|svg|webp|mp4|woff2?)$/i.test(u.pathname)) continue; // not files
        if (u.pathname.length > 80) continue;           // skip junk
        paths.add(u.pathname.replace(/\/+$/, '') || '/');
      } catch { /* ignore malformed */ }
    }
    return Array.from(paths).slice(0, maxRoutes);
  } finally {
    await browser.close().catch(() => {});
  }
}

async function main() {
  const cli = parseArgs(process.argv);

  // multi-route mode: discover same-origin routes, extract each into its own
  // reference/<slug>/<route>/ folder. rebuild each as a Next.js route. this is
  // the clean-rebuild replacement for the old mirror crawl — no runtime copying.
  if (cli.routes) {
    console.log(`\n🗺  route mode → discovering same-origin routes on ${cli.host}`);
    const routes = await discoverRoutes(cli.url, cli.headless, cli.maxRoutes);
    console.log(`   found ${routes.length} route(s): ${routes.join(', ')}\n`);
    const origin = new URL(cli.url).origin;
    for (const [i, path] of routes.entries()) {
      const slug = routeSlug(path);
      console.log(`\n━━━ route ${i + 1}/${routes.length}: ${path} → ${slug}/ ━━━`);
      // per-route guard: a single heavy/never-idle route (some Framer apps never
      // reach networkidle) must not stall the whole batch. cap at 4 min/route.
      const extract = extractOne({
        url: origin + path,
        name: slug,
        outDir: join(cli.outRoot, cli.name, slug),
        headless: cli.headless,
        skipHover: cli.skipHover,
        viewports: cli.viewports,
      });
      const timeout = new Promise<void>((_, rej) =>
        setTimeout(() => rej(new Error('route timed out after 4min')), 240_000)
      );
      await Promise.race([extract, timeout]).catch((e) =>
        console.error(`  💥 route ${path} failed:`, (e as Error).message)
      );
    }
    console.log(`\n✅ all routes done → ${join(cli.outRoot, cli.name)}/`);
    return;
  }

  await extractOne(cli);
}

async function extractOne(opts: ExtractOptions) {
  const t0 = Date.now();
  console.log(`\n🎯 extract-site → ${opts.url}`);
  console.log(`   out: ${opts.outDir}`);
  console.log(`   headed: ${!opts.headless}\n`);
  if (opts.skipHover) console.log('   hover capture: skipped\n');

  await mkdir(opts.outDir, { recursive: true });
  await mkdir(join(opts.outDir, 'stack'), { recursive: true });

  const browser = await chromium.launch({
    headless: opts.headless,
    args: [
      '--disable-blink-features=AutomationControlled',
      // HIDE SCROLLBARS. Chromium draws a classic 15px scrollbar that eats
      // layout width, so `getComputedStyle(el).width` on a full-width element
      // measures 1425 instead of 1440 — and the rebuild inlines that as a
      // FIXED `width: 1425px`. Every full-width element on every page ends up
      // 15px narrow, with centred content shifted ~7px. macOS/live browsers use
      // overlay scrollbars that take no width, so hiding them here is also the
      // more faithful match.
      '--hide-scrollbars',
    ],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  const assets = createAssetCollector(page, opts.outDir);

  console.log('▶ phase 1: navigate');
  await page.goto(opts.url, { waitUntil: 'networkidle', timeout: 60000 }).catch(async () => {
    console.warn('  ⚠️  networkidle timeout, falling back to load');
    await page.goto(opts.url, { waitUntil: 'load', timeout: 60000 });
  });
  await page.waitForTimeout(2000);

  // CDP capture has to happen on the FIRST scroll-through, otherwise
  // framer-motion's `whileInView`/`once` triggers won't refire on a 2nd pass.
  console.log('\n▶ phase 1b: CDP animation capture (during scroll)');
  const cdp = await context.newCDPSession(page);
  const cdpRaw = await captureCDPAnimations(cdp, page, 12000);
  console.log(`  🎞  ${cdpRaw.length} CDP animations fired during scroll`);

  // Sampled scroll: captures viewport screenshots + lazy-image deltas + visible
  // framer-named regions at every scroll step.
  console.log('\n▶ phase 1c: sampled scroll capture');
  const scrollSamples = await sampledScrollCapture(page, opts.outDir);

  const pageTitle = await page.title();
  console.log(`  📄 "${pageTitle}"`);

  console.log('\n▶ phase 2: detect stack');
  const stack = await detectStack(page);
  console.log(`  framework=${stack.framework} framer=${stack.framer} motion=${stack.framerMotion} lenis=${stack.lenis} gsap=${stack.gsap}`);

  console.log('\n▶ phase 3: dom dump + computed styles + screenshots');
  // capture computed styles FIRST — also tags every element with data-cs-id="N"
  // so the same identifier shows up in full.html and per-section dumps below.
  await captureComputedStyles(page, opts.outDir);
  await dumpFullDOM(page, opts.outDir);

  // Which appear-effects are real entrances vs interaction-gated panels can't
  // be told from resting opacity — and getting it wrong either blanks an
  // element AND its whole subtree, or pins a menu open over the header. Measure
  // it here, in THIS page instance: `captureComputedStyles` already tagged
  // every element with data-cs-id, so the ids are exact and every candidate
  // gets a verdict. Doing it from a separate page load instead forces
  // identity-matching, which can only resolve ~17% of them.
  //
  // Placement is deliberate: after computed-styles (ids exist) and BEFORE the
  // hover phase (or hover-gated panels would already be open and measure as
  // visible).
  console.log('\n▶ phase 3c: entrance liveness (same-page, exact cs-ids)');
  try {
    const csPath = join(opts.outDir, 'dom', 'computed-styles.json');
    const csAll = JSON.parse(await readFile(csPath, 'utf8')) as Record<string, Record<string, string>>;
    const liveness = await measureLivenessInPage(page, csAll);
    if (liveness) writeEntranceLiveness(opts.outDir, liveness);
    else console.log('  (nothing to measure, or cs-id alignment unverifiable)');
  } catch (e) {
    console.warn('  ⚠️  entrance liveness failed:', (e as Error).message);
  }


  // 4d: tablet + mobile computed styles. Uses its OWN fresh page(s) — a
  // resize of the already-scrolled, already-animated desktop `page` leaves
  // JS-driven responsive values (font-size, etc.) stuck at a stale
  // intermediate state (verified empirically); only a cold load at the target
  // size gets these right. Doesn't touch `page`, so nothing below is at risk.
  console.log('\n▶ phase 3a: responsive computed styles (tablet + mobile, fresh page per breakpoint)');
  await captureResponsiveStyles(context, opts.url, opts.outDir, opts.viewports.filter((v) => v.name !== 'desktop'));

  // capture appear-effect specs by re-loading in a sandboxed browser where
  // IntersectionObserver + Element.animate are nooped. framer's runtime
  // injects the appear-css block but never animates → rules persist → we
  // grab them. runs in parallel-ish (its own browser instance).
  console.log('\n▶ phase 3b: appear-effect capture (sandboxed page)');
  await captureAppearEffects(opts.url, opts.outDir, { headless: true }).catch((e) => {
    console.warn('  ⚠️  appear-effect capture failed:', (e as Error).message);
  });
  await takeFullScreenshots(page, opts.outDir, opts.viewports);
  // reset to desktop for everything else
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(400);

  console.log('\n▶ phase 4: design tokens + source CSS vars');
  const tokens = await extractTokens(page);
  const cssVars = await extractCSSVars(page).catch(() => []);
  await writeTokenArtifacts(opts.outDir, tokens, cssVars);

  console.log('\n▶ phase 5: section detection + per-section captures');
  const sections = await detectSections(page);
  await captureSectionScreenshots(page, opts.outDir, sections, opts.viewports);

  console.log('\n▶ phase 6: classify + link motion to sections');
  console.log(`  🎞  resolving ${new Set(cdpRaw.map((a) => a.backendNodeId).filter(Boolean)).size} CDP node ids → bbox`);
  const cdpResolved = await resolveCDPAnimationNodes(cdp, cdpRaw);
  let computed = await scanComputedTransitions(page);

  // classify + tag stagger groups + char stagger (CSS path)
  for (const a of computed) a.classification = classifyAnimatedElement(a);
  computed = tagStaggerGroups(computed);
  computed = detectCharStagger(computed);
  for (const a of cdpResolved) a.classification = classifyCDPAnimation(a);

  // link both to sections by bbox containment
  const computedLinked = linkAnimationsToSections(computed, sections);
  let cdpLinked = linkAnimationsToSections(cdpResolved, sections);

  // CDP-based stagger detection (catches framer-motion WAAPI char-stagger that
  // CSS scan can't see). Has to run AFTER section linking.
  cdpLinked = tagCDPStaggerGroups(cdpLinked);

  await writeMotionArtifacts(opts.outDir, computedLinked, cdpLinked, stack);

  console.log('\n▶ phase 7: deep content extraction (text, images, bg, framer attrs)');
  const sectionContents = await extractSectionContent(page, sections);
  await harvestBackgroundImages(page, opts.outDir, assets.manifest);
  const augmentedManifest = linkAssetsToSections(assets.manifest, sectionContents);

  console.log('\n▶ phase 8: structural layout trees per section');
  const layouts = await extractSectionLayouts(page, sections);
  await writeLayoutArtifacts(opts.outDir, layouts);

  console.log('\n▶ phase 9: hover-state capture (page-wide cs-id + React fiber + mouse-section)');
  let hovers: Awaited<ReturnType<typeof captureHoverStates>> = [];
  if (opts.skipHover) {
    console.log('  ⏭  skipped by --skip-hover');
    await writeThoroughHoverArtifacts(opts.outDir, []);
    await writeFiberHoverArtifacts(opts.outDir, []);
    await writeHoverArtifacts(opts.outDir, []);
  } else {
    // Primary: page-wide cs-id-keyed scan with subtree fingerprint. This is
    // the most reliable approach — no section caps, no path-selector brittleness.
    const thoroughHovers = await captureHoversThoroughIsolated(context, opts.url).catch((e) => {
      console.warn('  ⚠️  thorough hover capture failed:', (e as Error).message);
      return [];
    });
    await writeThoroughHoverArtifacts(opts.outDir, thoroughHovers);
    // Secondary: React fiber walk for explicit `whileHover` props (works on
    // sites that don't compile motion away).
    const fiberHovers = await captureFiberHovers(page).catch((e) => {
      console.warn('  ⚠️  fiber hover capture failed:', (e as Error).message);
      return [];
    });
    await writeFiberHoverArtifacts(opts.outDir, fiberHovers);
    // Tertiary: section-scoped mouse-driven scan (legacy, for comparison).
    hovers = await captureHoverStates(page, sections, 30).catch((e) => {
      console.warn('  ⚠️  hover capture failed:', (e as Error).message);
      return [];
    });
    await writeHoverArtifacts(opts.outDir, hovers);
  }

  // defence in depth: any earlier phase that resized this page (section
  // screenshots loop over all viewports) would otherwise make scroll-motion
  // capture the mobile layout. Scroll behaviour is viewport-dependent, so
  // assert desktop right before measuring it.
  {
    const vp = page.viewportSize();
    const desktop = opts.viewports.find((v) => v.name === 'desktop') ?? opts.viewports[0];
    if (desktop && (vp?.width !== desktop.width || vp?.height !== desktop.height)) {
      console.warn(`  ⚠️  viewport was ${vp?.width}×${vp?.height}; resetting to desktop ${desktop.width}×${desktop.height}`);
      await page.setViewportSize({ width: desktop.width, height: desktop.height });
      await page.waitForTimeout(500);
    }
  }

  console.log('\n▶ phase 9b: scroll-linked motion (pin-scrub, parallax, scroll-scaled)');
  const { behaviors: scrollBehaviors, sectionBgColors } = await captureScrollLinkedMotion(page, sections).catch((e) => {
    console.warn('  ⚠️  scroll-motion capture failed:', (e as Error).message);
    return { behaviors: [], sectionBgColors: new Map<string, string>() };
  });
  await writeScrollMotionArtifacts(opts.outDir, scrollBehaviors, sectionBgColors);

  console.log('\n▶ phase 9c: section-boundary transitions (the choreography between sections)');
  const transitions = synthesizeTransitions(sections, scrollBehaviors, sectionBgColors);
  await writeTransitionArtifacts(opts.outDir, transitions);

  console.log('\n▶ phase 10: per-section motion summary + finalize artifacts');
  const sectionMotion = summarizeSectionMotion(sections, computedLinked, cdpLinked, hovers);
  await writeFile(
    join(opts.outDir, 'motion', 'per-section.json'),
    JSON.stringify(sectionMotion, null, 2),
    'utf8'
  );
  await assets.finalize();
  await writeContentArtifacts(opts.outDir, sectionContents, augmentedManifest);
  await generateFontFaceCSS(opts.outDir);
  await writeStackMd(opts.outDir, stack);

  const meta: Meta = {
    url: opts.url,
    capturedAt: new Date().toISOString(),
    name: opts.name,
    viewports: opts.viewports,
    pageTitle,
    stack,
    sectionCount: sections.length,
    animationCount: computedLinked.length + cdpLinked.length,
    assetCount: assets.manifest.length,
  };
  await writeFile(join(opts.outDir, 'meta.json'), JSON.stringify(meta, null, 2), 'utf8');
  await writeRebuildMd(opts.outDir, meta, sections, sectionContents, sectionMotion, hovers, scrollBehaviors, sectionBgColors, transitions, augmentedManifest);

  await context.close();
  await browser.close();

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`\n✅ done in ${elapsed}s → ${opts.outDir}`);
  console.log(`   open: ${join(opts.outDir, 'REBUILD.md')}`);
}

main().catch((e) => {
  console.error('💥 extract failed:', e);
  process.exit(1);
});
