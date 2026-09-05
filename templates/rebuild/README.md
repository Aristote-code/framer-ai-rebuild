# PROJECT_NAME

Auto-rebuilt from REFERENCE_URL by `extract-site rebuild`.

## what this is

A **fully editable React app** that reproduces the original Framer site as clean,
reusable code. Each top-level section is its own real JSX component, the copy/
images/links are hoisted into editable content files, and entrance/hover motion
is inlined with the *measured* timing from the original — no Framer runtime.

```
src/
  main.tsx                 entry — imports the CSS
  App.tsx                  mounts <Page/> + boots the small motion runtime
  page.tsx                 the page shell — composes every section, REORDER/REMOVE HERE
  sections/
    01-Name.tsx            a real component per section — edit JSX directly
    02-Name.tsx
    ...
  content/
    01-Name.ts             copy / image srcs / links for that section — EDIT TO RE-SKIN
    shell.ts               content for the shell (nav, footer, …)
  framer-baseline.css      the original Framer stylesheet (layout + responsive)
  hover.css                generated :hover effects (measured from the original)
  app.css                  your own overrides
  animations.ts + lib/     small runtime for the few scroll/parallax effects that
                           genuinely need JS (most motion is inline on the elements)
public/
  images/, fonts/, videos/ every asset the original referenced
```

## quick start

```bash
bun install
bun run dev          # http://localhost:5173
bun run build        # → dist/
```

## how to edit

| change | how |
|---|---|
| **re-skin** (new copy, photos, links) | edit the section's file in `src/content/` — layout & motion untouched |
| reorder / remove sections | edit `src/page.tsx` — move or delete the `<Section/>` tags |
| add a section | write `src/sections/NN-NewName.tsx`, render it in `page.tsx` |
| change a section's layout | edit its `.tsx` in `src/sections/` — it's real JSX + inline styles |
| tune an entrance animation | edit the `initial` / `whileInView` / `transition` props on that element |
| change a hover effect | edit `src/hover.css` |
| global colors / fonts | edit `src/app.css` or the CSS variables in `src/framer-baseline.css` |

## fidelity notes

- **Motion is inline + measured** — entrances are `motion.*` props carrying the
  original's real duration/easing; hovers are generated CSS. A handful of
  scroll/parallax effects are driven by the small runtime in `animations.ts`.
- **Assets** — copied locally under `public/`.
- **Desktop is the primary target.** Tablet/mobile currently come from the
  original `framer-baseline.css` (not regenerated), so small screens are
  best-effort.

## known limitations (read before assuming a bug)

A clean static rebuild reproduces layout, styling, and measured motion — but it
does **not** run Framer's interaction runtime. So these need manual attention:

- **Scroll-choreographed / multi-variant sections.** Framer sections that pin
  and reposition their contents on scroll (stacking cards, pinned reveals) or
  that render several breakpoint variants toggled by interaction can render
  their elements at their *raw* (pre-choreography) positions — which may
  overlap or misalign. Fixing one means hand-laying-out that section.
- **Code-components & embeds** (video players, forms, live widgets) are captured
  as static markup/placeholders, not working widgets — wire these up manually.
- **Lazy / CMS-driven media** the extractor didn't capture may be missing.

Per-project specifics (if any) are noted below.
