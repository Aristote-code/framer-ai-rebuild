#!/usr/bin/env bun
// `extract-site rebuild-site <reference...> --out <dir> [--force]`
//
// Composes SEVERAL single-page rebuilds into one navigable site: each
// reference becomes a lazily-loaded route, links between them resolve
// internally, and anything not rebuilt still points at the live origin.
//
// Why a composer instead of one big generator: the per-page output is already
// self-contained (page.tsx + sections/ + content/ + data/ + its own CSS), so
// the cheapest correct thing is to run the existing `rebuild` per reference
// and mount each result as a route. No change to the single-page path, which
// is the one that's been verified against the live site.
//
// CSS note: every page carries its own ~470 kB framer-baseline.css. It's
// imported inside the route chunk, so it loads on demand — but it is NOT
// unloaded on navigation. Pages of one site share a design system and Framer
// class names are content-hashed, so the duplicates stack harmlessly rather
// than fighting. Worth deduping if this ever spans unrelated designs.

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILL_DIR = path.resolve(__dirname, "..");

function readJsonSafe(p: string): any {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

/** Route path for a reference, from the URL it was captured from. */
function routeOf(reference: string): string {
  const meta = readJsonSafe(path.join(reference, "meta.json"));
  let p = "/";
  try { p = new URL(meta?.url ?? "").pathname; } catch { /* fall through */ }
  p = p.replace(/\/index\.html$/i, "/").replace(/\.html$/i, "");
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p || "/";
}

/** Import-safe module name for a route ("/solutions/designers" → "solutions-designers"). */
function slugOf(route: string): string {
  const s = route.replace(/^\/+/, "").replace(/\/+$/, "").replace(/[^a-zA-Z0-9]+/g, "-");
  return s || "home";
}

function parseArgs(argv: string[]) {
  const args = argv.slice(3); // strip [bun, script, "rebuild-site"]
  const flags = new Set(["--out", "--force"]);
  const positional: string[] = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--out") { i++; continue; }
    if (flags.has(args[i])) continue;
    if (args[i].startsWith("--")) continue;
    positional.push(args[i]);
  }
  const outIdx = args.indexOf("--out");
  const out = outIdx >= 0 ? args[outIdx + 1] : "site-rebuild";
  if (!positional.length) {
    console.error("Usage: extract-site rebuild-site <reference...> --out <dir> [--force]");
    process.exit(2);
  }
  return {
    references: positional.map((r) => path.resolve(process.cwd(), r)),
    out: path.resolve(process.cwd(), out),
    force: args.includes("--force"),
  };
}

function copyDir(src: string, dst: string) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

const { references, out, force } = parseArgs(process.argv);

console.log(`\n🏗  extract-site rebuild-site`);
console.log(`   references: ${references.length}`);
console.log(`   out:        ${out}`);

if (fs.existsSync(out)) {
  if (!force) {
    console.error(`\n❌ ${out} already exists — pass --force to replace it`);
    process.exit(1);
  }
  fs.rmSync(out, { recursive: true, force: true });
}

// 1. resolve routes first: every per-page rebuild needs the FULL route list so
//    its nav hrefs can be rewritten to internal paths rather than the live site.
const pages = references
  .filter((r) => {
    if (fs.existsSync(path.join(r, "meta.json"))) return true;
    console.warn(`   ⚠ skipping ${path.basename(r)} — no meta.json`);
    return false;
  })
  .map((reference) => {
    const route = routeOf(reference);
    return { reference, route, slug: slugOf(route) };
  });

// de-dupe routes (two references capturing the same URL)
const seen = new Set<string>();
const unique = pages.filter((p) => {
  if (seen.has(p.route)) {
    console.warn(`   ⚠ duplicate route ${p.route} — keeping the first`);
    return false;
  }
  seen.add(p.route);
  return true;
});

const routeList = unique.map((p) => p.route).join(",");
console.log(`   routes:     ${unique.map((p) => p.route).join("  ")}\n`);

const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "es-site-"));
fs.mkdirSync(path.join(out, "src", "pages"), { recursive: true });

let scaffoldFrom: string | null = null;

// 2. build each page, then graft its src/ in as a route module
for (const [i, p] of unique.entries()) {
  const tmp = path.join(tmpRoot, p.slug);
  console.log(`[${i + 1}/${unique.length}] ${p.route}  ←  ${path.basename(p.reference)}`);
  const res = spawnSync(
    "bun",
    [path.join(SKILL_DIR, "src", "cmd-rebuild.ts"), "rebuild", p.reference, "--out", tmp],
    { encoding: "utf8", env: { ...process.env, REBUILD_ROUTES: routeList } },
  );
  if (res.status !== 0) {
    console.error(`   ❌ rebuild failed for ${p.route}`);
    console.error((res.stderr || res.stdout || "").split("\n").slice(-8).join("\n"));
    continue;
  }
  const nav = (res.stdout || "").split("\n").find((l) => l.includes("nav hrefs"));
  if (nav) console.log(`  ${nav.trim()}`);

  copyDir(path.join(tmp, "src"), path.join(out, "src", "pages", p.slug));
  // assets are hash-named by the extractor, so pages sharing an image share a
  // filename and the copy is idempotent.
  if (fs.existsSync(path.join(tmp, "public"))) copyDir(path.join(tmp, "public"), path.join(out, "public"));
  if (!scaffoldFrom) scaffoldFrom = tmp;

  // the per-page main.tsx pulls in that page's global CSS; as a route module
  // the page has to import its own CSS itself.
  const pageDir = path.join(out, "src", "pages", p.slug);
  fs.rmSync(path.join(pageDir, "main.tsx"), { force: true });
  fs.rmSync(path.join(pageDir, "App.tsx"), { force: true });
  const cssImports = ["framer-baseline.css", "app.css"]
    .filter((f) => fs.existsSync(path.join(pageDir, f)))
    .map((f) => `import "./${f}";`)
    .join("\n");
  fs.writeFileSync(
    path.join(pageDir, "index.tsx"),
    `// route module for ${p.route} — generated by \`extract-site rebuild-site\`
import { useEffect } from "react";
import { animate } from "framer-motion";
import { Page } from "./page";
import { runEntryAnimations } from "./animations";
${cssImports}

export default function Route() {
  useEffect(() => {
    runEntryAnimations(animate);
  }, []);
  return <Page />;
}
`,
    "utf8",
  );
}

if (!scaffoldFrom) {
  console.error("\n❌ no page built successfully");
  process.exit(1);
}

// 3. shared scaffolding, taken from the first successful page build
for (const f of ["package.json", "tsconfig.json", "vite.config.ts", ".gitignore"]) {
  const s = path.join(scaffoldFrom, f);
  if (fs.existsSync(s)) fs.copyFileSync(s, path.join(out, f));
}
const pkgPath = path.join(out, "package.json");
const pkg = readJsonSafe(pkgPath) ?? {};
pkg.name = path.basename(out);
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf8");

const built = unique.filter((p) => fs.existsSync(path.join(out, "src", "pages", p.slug, "index.tsx")));

fs.writeFileSync(
  path.join(out, "src", "routes.ts"),
  `// route table — generated by \`extract-site rebuild-site\`.
// Lazy imports so each page's markup AND its ~470 kB stylesheet load only when
// that route is visited.
import { lazy } from "react";
import type { ComponentType } from "react";

export const routes: Record<string, ReturnType<typeof lazy<ComponentType>>> = {
${built.map((p) => `  ${JSON.stringify(p.route)}: lazy(() => import("./pages/${p.slug}")),`).join("\n")}
};

export const routePaths = Object.keys(routes);
`,
  "utf8",
);

fs.writeFileSync(
  path.join(out, "src", "App.tsx"),
  `// App.tsx — generated by \`extract-site rebuild-site\`.
//
// A ~40-line history router rather than a react-router dependency: the rebuilt
// markup is plain <a href="/route"> (the generator rewrote the mirror's
// ../../ paths), so all this needs to do is intercept those clicks, push
// history, and swap the route module.
import { Suspense, useCallback, useEffect, useState } from "react";
import { routes } from "./routes";

function currentPath(): string {
  const p = window.location.pathname.replace(/\\/+$/, "");
  return p || "/";
}

export function App() {
  const [path, setPath] = useState(currentPath);

  const navigate = useCallback((to: string) => {
    if (to === currentPath()) return;
    window.history.pushState({}, "", to);
    setPath(to);
  }, []);

  useEffect(() => {
    const onPop = () => setPath(currentPath());
    window.addEventListener("popstate", onPop);

    const onClick = (e: MouseEvent) => {
      // let the browser handle anything that isn't a plain left-click on an
      // internal link — new tabs, downloads and external routes must survive.
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      if (a.hasAttribute("download") || a.hasAttribute("data-external-route")) return;
      if (a.target && a.target !== "" && a.target !== "_self") return;
      const href = a.getAttribute("href") ?? "";
      if (!href.startsWith("/")) return; // #anchor, mailto:, http(s):// … not ours
      const to = href.replace(/\\/+$/, "") || "/";
      if (!(to in routes)) return; // not a route we serve — let it 404 honestly
      e.preventDefault();
      navigate(to);
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick);
    };
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const Route = routes[path];
  if (!Route) {
    return (
      <main style={{ padding: "6rem 2rem", fontFamily: "system-ui", color: "#fff", background: "#000", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Not rebuilt</h1>
        <p style={{ opacity: 0.7 }}>
          <code>{path}</code> isn't one of the rebuilt routes.
        </p>
        <ul style={{ marginTop: "1.5rem", lineHeight: 1.9 }}>
          {Object.keys(routes).map((r) => (
            <li key={r}><a href={r} style={{ color: "#8ab4ff" }}>{r}</a></li>
          ))}
        </ul>
      </main>
    );
  }

  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#000" }} />}>
      <Route key={path} />
    </Suspense>
  );
}
`,
  "utf8",
);

fs.writeFileSync(
  path.join(out, "src", "main.tsx"),
  `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
`,
  "utf8",
);

const title = readJsonSafe(path.join(built[0].reference, "meta.json"))?.pageTitle ?? "Rebuilt site";
// NOINDEX BY DEFAULT. This output is a faithful copy of someone else's site —
// same copy, images, fonts and branding. If it gets indexed it competes with,
// and can be mistaken for, the original. A rebuild is for development and
// comparison, so keep it out of search results unless its owner deliberately
// removes this. Paired with a Disallow-all robots.txt below.
fs.writeFileSync(
  path.join(out, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex,nofollow" />
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
  "utf8",
);

// dev + preview must serve index.html for unknown paths, or a deep link like
// /enterprise 404s before React ever loads.
fs.writeFileSync(
  path.join(out, "vite.config.ts"),
  `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // SPA fallback so deep links (/enterprise, /solutions/designers) resolve.
  appType: "spa",
});
`,
  "utf8",
);

// 4. shared nav dropdown panels (from `extract-site capture-nav`).
// Framer mounts these on hover, so no page capture contains them; they live in
// the shared header, so one capture serves every route.
const navSource = ["reference/_nav", "_nav"]
  .map((d) => path.resolve(process.cwd(), d, "motion", "nav-dropdowns.json"))
  .find((f) => fs.existsSync(f));
let navPanels: Array<{ triggerText: string; html: string; framerName?: string | null }> = [];
if (navSource) {
  navPanels = (readJsonSafe(navSource)?.panels ?? []) as typeof navPanels;
}
if (navPanels.length) {
  let origin = "";
  try { origin = new URL(readJsonSafe(path.join(built[0].reference, "meta.json"))?.url ?? "").origin; } catch {}
  const routeSet = new Set(built.map((p) => p.route));
  const fixHrefs = (html: string): string =>
    origin
      ? html.replace(new RegExp(`href="${origin}([^"]*)"`, "g"), (_m, rawPath: string) => {
          let r = String(rawPath).replace(/\/index\.html$/i, "/").replace(/\.html$/i, "");
          if (r.length > 1) r = r.replace(/\/+$/, "");
          if (!r) r = "/";
          // internal where we serve it, otherwise keep pointing at the live site
          return routeSet.has(r) ? `href="${r}"` : `href="${origin}${rawPath}"`;
        })
      : html;

  fs.writeFileSync(
    path.join(out, "src", "NavDropdowns.tsx"),
    `// NavDropdowns — generated by \`extract-site rebuild-site\` from
// \`extract-site capture-nav\`. Framer MOUNTS these mega-menu panels on hover
// (the resting DOM has only the chevrons), so they can't come from a static
// page capture; they were captured by hovering each trigger with a
// MutationObserver watching, with the open state's computed styles inlined.
//
// Triggers are matched by their visible text inside <nav>, because that's the
// only stable handle: the panels are separate subtrees with no attribute tying
// them to the item that opens them.
import { useEffect, useRef, useState } from "react";

interface Panel {
  triggerText: string;
  html: string;
}

const PANELS: Panel[] = ${JSON.stringify(navPanels.map((p) => ({ triggerText: p.triggerText, html: fixHrefs(p.html) })), null, 2)};

export function NavDropdowns() {
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const chevron = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const setChevron = (zone: HTMLElement) => {
      clearChevron();
      const arrow =
        (zone.querySelector('[data-framer-name="Dropdown"]') as HTMLElement | null) ??
        (zone.parentElement?.querySelector('[data-framer-name="Dropdown"]') as HTMLElement | null);
      if (!arrow) return;
      arrow.style.transition = "transform 0.2s ease";
      arrow.style.transform = "rotate(180deg)";
      chevron.current = arrow;
    };
    const clearChevron = () => {
      if (chevron.current) {
        chevron.current.style.transform = "";
        chevron.current = null;
      }
    };

    // DELEGATE on document, don't attach per-trigger listeners. The routed page
    // (and therefore <nav>) arrives from a lazy import AFTER this effect first
    // runs, so a one-shot querySelector("nav") finds nothing and the menu never
    // opens. Delegation also survives route changes for free.
    // mouseover (bubbles) rather than mouseenter (doesn't).
    const scheduleClose = () => {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = window.setTimeout(() => {
        setOpen(null);
        clearChevron();
      }, 180);
    };
    const cancelClose = () => window.clearTimeout(closeTimer.current);

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      if (!el || typeof el.closest !== "function") return;
      if (el.closest("#nav-dropdown-host")) {
        cancelClose(); // pointer moved down into the open panel
        return;
      }
      const nav = el.closest("nav");
      if (!nav) return;
      // walk up from the hovered node to the nav, looking for the element whose
      // text IS a trigger label (the label sits on a leaf; ancestors carry the
      // whole nav's text, so an equality test naturally stops at the right one).
      let node: Element | null = el;
      while (node && node !== nav) {
        const text = (node.textContent ?? "").trim();
        const hit = PANELS.find((p) => p.triggerText === text);
        if (hit) {
          cancelClose();
          setOpen(hit.triggerText);
          // Framer flips the chevron to point up while its menu is open. The
          // arrow is a separate 8x8 [data-framer-name="Dropdown"] node next to
          // the label, driven by Framer's own state — which we don't have — so
          // rotate it here and undo it on close.
          setChevron(node as HTMLElement);
          return;
        }
        node = node.parentElement;
      }
    };

    const onOut = (e: MouseEvent) => {
      const to = e.relatedTarget as Element | null;
      if (to && typeof to.closest === "function" && to.closest("nav, #nav-dropdown-host")) return;
      scheduleClose();
    };

    // Clicking a menu item navigates; the panel must close with it, or it
    // stays open on top of the page you just landed on.
    const onClick = (e: MouseEvent) => {
      const el = e.target as Element | null;
      if (el && typeof el.closest === "function" && el.closest("#nav-dropdown-host")) {
        window.clearTimeout(closeTimer.current);
        setOpen(null);
        clearChevron();
      }
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("click", onClick);
    return () => {
      window.clearTimeout(closeTimer.current);
      clearChevron();
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const panel = PANELS.find((p) => p.triggerText === open);

  return (
    <div
      id="nav-dropdown-host"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        pointerEvents: panel ? "auto" : "none",
      }}
    >
      {panel ? (
        <div
          key={panel.triggerText}
          style={{ position: "relative", width: "100%" }}
          dangerouslySetInnerHTML={{ __html: panel.html }}
        />
      ) : null}
    </div>
  );
}
`,
    "utf8",
  );

  // mount it above the routed page so it overlays every route
  const appPath = path.join(out, "src", "App.tsx");
  let app = fs.readFileSync(appPath, "utf8");
  app = app.replace(
    'import { routes } from "./routes";',
    'import { routes } from "./routes";\nimport { NavDropdowns } from "./NavDropdowns";',
  );
  app = app.replace(
    `  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#000" }} />}>
      <Route key={path} />
    </Suspense>
  );`,
    `  return (
    <>
      <Suspense fallback={<div style={{ minHeight: "100vh", background: "#000" }} />}>
        <Route key={path} />
      </Suspense>
      <NavDropdowns />
    </>
  );`,
  );
  fs.writeFileSync(appPath, app, "utf8");
  console.log(`   ✓ nav dropdowns: ${navPanels.length} hover panel(s) wired (${path.relative(process.cwd(), navSource!)})`);
}

fs.mkdirSync(path.join(out, "public"), { recursive: true });
fs.writeFileSync(
  path.join(out, "public", "robots.txt"),
  `# This site is a rebuilt COPY of ${(() => { try { return new URL(readJsonSafe(path.join(built[0].reference, "meta.json"))?.url ?? "").origin; } catch { return "another site"; } })()}
# produced by extract-site for development and comparison. It is not the
# original and must not be indexed as if it were.
User-agent: *
Disallow: /
`,
  "utf8",
);

fs.rmSync(tmpRoot, { recursive: true, force: true });

console.log(`\n✅ site rebuilt at ${out}`);
console.log(`   ${built.length} route(s): ${built.map((p) => p.route).join("  ")}`);
console.log(`\nnext:\n  cd ${path.relative(process.cwd(), out)}\n  bun install\n  bun run dev`);
