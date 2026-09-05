# extract-site

Reverse-engineer any website (especially Framer sites) into a structured `reference/` folder containing static DOM, screenshots, motion specs, assets, and design tokens — ready for Claude Code (or any agent) to rebuild section-by-section with framer-tier polish.

## Why

AI-built websites usually look average. Not because the models are bad, but because the workflow is wrong: you ask "make it premium" and the model has nothing concrete to anchor on. Easings get invented, durations get guessed, taste evaporates.

This tool captures the **exact** durations, easing curves, framer-motion props, design tokens, and asset library from a real, deployed site — so when you tell Claude Code to rebuild it, it has hard ground truth instead of vibes.

> **Cloning a Framer site? Read [`PLAYBOOK.md`](./PLAYBOOK.md) first.** It's the
> full agent-facing method: which path to take, how to verify fidelity against the
> live URL with the shipped `probe.mjs`, how to port motion, and the mistakes that
> waste a day. The README covers the *tool*; the PLAYBOOK covers the *process*.

## Install

```bash
git clone https://github.com/<you>/extract-site ~/.claude/skills/extract-site
cd ~/.claude/skills/extract-site
bun install
bunx playwright install chromium
```

## Usage

### As a CLI

```bash
~/.claude/skills/extract-site/bin/extract-site https://framer.com
~/.claude/skills/extract-site/bin/extract-site https://linear.app --name linear
~/.claude/skills/extract-site/bin/extract-site https://example.framer.website --out ./refs

# multi-page site: crawl same-origin routes, one reference/<slug>/<route>/ per page
~/.claude/skills/extract-site/bin/extract-site https://studio.framer.website --routes --max-routes 20
```

Defaults:
- `--out` = `./reference`
- `--name` = auto-derived from hostname
- `--routes` = off (single page); `--max-routes` = 20 when `--routes` is set
- **Always runs headed — don't override it.** Framer's motion libraries
  (`motion/react`, GSAP) are rAF + IntersectionObserver driven and hover needs a
  real render context; under headless you capture a site with **zero motion** and
  don't notice. The `--headless` flag exists for CI on static sites only.

### Building a whole SITE, not one page

A single-page rebuild is only half a clone: the nav links point nowhere and the
mega-menus are dead. Two extra captures and one composer close that gap.

```bash
ES=~/.claude/skills/extract-site/bin/extract-site

# 1. extract each page you want as a route (~12 min each, headed)
$ES https://example.com/            --name site-home
$ES https://example.com/pricing     --name site-pricing

# 2. capture the hover-MOUNTED nav dropdowns — once for the whole site.
#    Framer mounts mega-menu panels on hover, so they are NOT in the resting
#    DOM and no page capture contains them. The header is shared across
#    routes, so one capture serves every page and re-extraction isn't needed.
$ES capture-nav https://example.com/ --out reference/_nav

# 3. (optional, recommended) measure which appear-effects really are entrances.
#    Elements resting at opacity 0 are ambiguous: a closed menu must stay
#    hidden, a not-yet-played entrance must be revealed — and withholding a
#    PARENT's entrance blanks its whole subtree. This scrolls the live page and
#    decides from evidence instead of guessing.
$ES capture-entrances reference/site-home

# 4. compose them into one navigable site
$ES rebuild-site reference/site-home reference/site-pricing --out site --force
cd site && bun install && bun run dev
```

`rebuild-site` gives each reference a lazily-loaded route (its markup *and* its
~470 kB stylesheet load only when visited), rewrites links between rebuilt pages
to internal routes, points everything else at the live origin so nothing
dead-ends, and injects the shared nav dropdowns on every route.

Notes:
- Route paths come from each reference's `meta.json` URL, so extract the URLs
  you actually want as routes.
- Some hosts are wget-style MIRRORS whose markup uses `../../page/index.html`.
  Those resolve at the mirror's depth but escape the root when served from `/`;
  the generator normalizes them.
- Every page carries its own `framer-baseline.css`. Route CSS is not unloaded on
  navigation, so stylesheets accumulate as you browse. Pages of one site share a
  design system and Framer class names are content-hashed, so they stack
  harmlessly — worth deduping if you ever compose unrelated designs.

### As a Claude Code skill

If installed at `~/.claude/skills/extract-site/`, the SKILL.md is auto-discovered. Just tell Claude Code:

> "Extract this site: https://example.framer.website"

The agent reads `SKILL.md`, runs the CLI, summarizes what was captured, and offers to start a section-by-section rebuild.

## What it captures

```
reference/<name>/
├── meta.json                  # url, captured-at, detected stack
├── REBUILD.md                 # ★ the rebuild prompt, ready to paste
├── dom/full.html              # complete inlined dom
├── dom/sections/*.html        # per-section subtrees
├── screenshots/{desktop,tablet,mobile}-full.png
├── screenshots/sections/*.png # per-section, per-viewport
├── motion/animations.json     # raw capture (computed CSS + CDP)
├── motion/motion-specs.md     # ★ human-readable cheat sheet
├── assets/{images,videos,fonts}/  # everything harvested
├── assets/manifest.json
├── tokens/{colors,typography,spacing}.json
├── tokens/tokens.css          # ready-to-import css vars
└── stack/detected.md          # framework detection notes
```

## How it works

1. **Headed Chromium** opens the URL — you watch it scroll, hover, capture.
2. **Auto-scroll** triggers lazy-loaded content + viewport-bound animations.
3. **CDP `Animation.enable`** subscribes to every animation that fires, capturing duration / easing / delay / keyframes.
4. **Computed-style scan** walks every DOM node, pulls non-trivial `transition` / `animation` / `data-framer-*`.
5. **Stack detection** (Framer? Webflow? Lenis? GSAP? Three?) by sniffing scripts + DOM markers.
6. **Token extraction** clusters colors / type / spacing / radii / shadows by usage frequency.
7. **Section detection** prefers `<section>` tags, falls back to top-level layout children.
8. **Asset harvest** intercepts every image/video/font response, saves locally with a manifest.
9. **Synthesis** writes `motion-specs.md` (the cheat sheet) and `REBUILD.md` (the prompt template).

## The rebuild loop

Once you have a `reference/` folder, the workflow is:

1. Open `REBUILD.md` — it has the per-section table and a ready-to-paste prompt.
2. Tell Claude Code to build the first section, using the screenshot + DOM subtree + motion specs + tokens.
3. After the build, screenshot your output at 1440×900, diff against `screenshots/sections/01-*-desktop.png`.
4. Tell Claude Code what to fix (use arrows/notes on the screenshot if you want).
5. Move to the next section. Don't move on until pixel-close.

## Limits (v0.1)

- No authenticated sites (no cookie injection yet)
- Canvas/WebGL captured as screenshots only
- Sites that gate by user-agent or geofence may not capture cleanly
- Big sites (>50 sections) are slow — best for landing pages

## License

MIT
