// page.tsx — the page shell, composing each section as a real component.
// edit a section in its own file under src/sections/<NN-Name>.tsx; edit
// shell-level markup (nav wrappers, etc.) directly here.
//
// sections (in render order):
//   1. "Desktop Nav" → src/sections/01-DesktopNav.tsx
//   2. "Header" → src/sections/02-Header.tsx
//   3. "Bento" → src/sections/03-Bento.tsx
//   4. "Benefits" → src/sections/04-Benefits.tsx
//   5. "Extras NEW" → src/sections/05-ExtrasNEW.tsx
//   6. "Stories" → src/sections/06-Stories.tsx
//   7. "Related Features" → src/sections/07-RelatedFeatures.tsx
//   8. "New Pivot" → src/sections/08-NewPivot.tsx
//   9. "Bottom" → src/sections/09-Bottom.tsx
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "./content/shell";
import { DesktopNav } from "./sections/01-DesktopNav";
import { Header } from "./sections/02-Header";
import { Bento } from "./sections/03-Bento";
import { Benefits } from "./sections/04-Benefits";
import { ExtrasNEW } from "./sections/05-ExtrasNEW";
import { Stories } from "./sections/06-Stories";
import { RelatedFeatures } from "./sections/07-RelatedFeatures";
import { NewPivot } from "./sections/08-NewPivot";
import { Bottom } from "./sections/09-Bottom";
import "./hover.css";
import "./responsive.css";

export function Page() {
  return (
    <>
      <div id="main" style={{ width: "1440px", height: "8002.44px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <style data-framer-html-style="">
          {content.text1}
        </style>
        <div className="framer-ykIBb framer-Grv0o framer-zprce9" data-layout-template="true" data-selection="true" style={{ width: "auto", height: "8002.44px", minHeight: "100vh", padding: "64px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", overflow: "hidden", "--1moyfq9": "64px 0px 0px 0px", "--1r5dcfs": "hidden", "--u410qi": "var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))" } as CSSProperties}>
          <div className="framer-1w39556-container" data-cs-id="3" style={{ width: "1440px", height: "64px", position: "fixed", bottom: "836px", zIndex: "10", inset: "0px 0px 836px", display: "block", flexDirection: "row" } as CSSProperties}>
            <div className="ssr-variant hidden-sv03hi" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <DesktopNav />
            </div>
          </div>
          <style data-framer-html-style="">
            {content.text2}
          </style>
          <div data-framer-root="" className="framer-ONboO framer-Grv0o framer-lRLSj framer-0k2u9 framer-OM6Dg framer-KItR8 framer-1bopbls" style={{ height: "min-content", minHeight: "100vh", position: "relative", display: "contents", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", overflow: "clip", width: "auto" } as CSSProperties}>
            <Header />
            <Bento />
            <Benefits />
            <ExtrasNEW />
            <Stories />
            <RelatedFeatures />
          </div>
          <div id="overlay" style={{ position: "static", display: "block", flexDirection: "row" } as CSSProperties} className="hv-1835" />
          <div className="framer-1j2gvch" style={{ position: "relative", display: "block", flexDirection: "row" } as CSSProperties} />
          <NewPivot />
          <Bottom />
        </div>
        <div id="template-overlay" style={{ width: "1440px", position: "static", display: "block", flexDirection: "row" } as CSSProperties} />
      </div>
      <div id="svg-templates" style={{ position: "absolute", top: "900px", right: "1440px", zIndex: "0", inset: "900px 1440px 0px 0px", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", contain: "strict" } as CSSProperties} aria-hidden="true">
        {" "}
        <svg viewBox="0 0 14 14" id="svg10231122378" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.75 6.417 C 1.75 3.839 3.839 1.75 6.417 1.75 C 8.994 1.75 11.083 3.839 11.083 6.417 C 11.083 8.994 8.994 11.083 6.417 11.083 C 3.839 11.083 1.75 8.994 1.75 6.417 Z M 12.25 12.25 L 9.713 9.713" fill="transparent" strokeWidth="1.4" stroke="var(--token-6fff741a-90b6-438e-9423-1f7c07944681, rgb(255, 255, 255))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 16" id="svg12320550327" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 10 1 L 10 6 L 5 6 L 0 1 Z M 0 6 L 5 6 L 10 11 L 5 11 L 5 16 L 0 11 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg11045117364" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 2.293 3.707 C 2.683 3.317 2.683 2.683 2.293 2.293 L 0 0" transform="translate(2.5 1) rotate(90 1.5 3)" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 7, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 1 14" overflow="visible" id="svg-1042835341_364" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <path d="M 0 0 L 0 14" fill="transparent" strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 14 1" overflow="visible" id="svg-181037867_364" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <path d="M 0 0 L 14 0" fill="transparent" strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 20 20" id="svg11304852885" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 2.5 5.5 C 2.5 3.843 3.843 2.5 5.5 2.5 L 14.5 2.5 C 16.157 2.5 17.5 3.843 17.5 5.5 L 17.5 14.5 C 17.5 16.157 16.157 17.5 14.5 17.5 L 5.5 17.5 C 3.843 17.5 2.5 16.157 2.5 14.5 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 7.5 3 L 6 3 C 4.343 3 3 4.343 3 6 L 3 7.5" fill="transparent" strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 12.5 3 L 14 3 C 15.657 3 17 4.343 17 6 L 17 7.5" fill="transparent" strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 12.5 17 L 14 17 C 15.657 17 17 15.657 17 14 L 17 12.5" fill="transparent" strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 7.5 17 L 6 17 C 4.343 17 3 15.657 3 14 L 3 12.5" fill="transparent" strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 20 20" id="svg10389741507" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g transform="translate(2.5 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 2.5)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 6.5 1.5 C 6.5 0.948 6.948 0.5 7.5 0.5 L 7.5 0.5 C 8.052 0.5 8.5 0.948 8.5 1.5 L 8.5 13.5 C 8.5 14.052 8.052 14.5 7.5 14.5 L 7.5 14.5 C 6.948 14.5 6.5 14.052 6.5 13.5 Z" fill={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 1 C 0 0.448 0.448 0 1 0 L 14 0 C 14.552 0 15 0.448 15 1 L 15 1 C 15 1.552 14.552 2 14 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" fill={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 20 20" id="svg10799232319" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 10.856 3.919 C 10.467 3.274 9.533 3.274 9.144 3.919 L 2.165 15.483 C 1.763 16.15 2.243 17 3.021 17 L 16.979 17 C 17.757 17 18.237 16.15 17.835 15.483 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg11517213957" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g transform="translate(2.5 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 2.5)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 6 0 C 6.828 0 7.5 0.672 7.5 1.5 C 7.5 2.328 6.828 3 6 3 C 5.172 3 4.5 2.328 4.5 1.5 C 4.5 0.672 5.172 0 6 0 Z" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 1.5 4.5 C 2.328 4.5 3 5.172 3 6 C 3 6.828 2.328 7.5 1.5 7.5 C 0.672 7.5 0 6.828 0 6 C 0 5.172 0.672 4.5 1.5 4.5 Z" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 1.5 4 L 1.5 0.5" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 3 6 L 3 6 C 4.657 6 6 4.657 6 3 L 6 3" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 18 18" id="svg12764361015" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6.272 2.863 C 5.272 2.263 4 2.983 4 4.149 L 4 13.851 C 4 15.017 5.272 15.737 6.272 15.137 L 14.356 10.286 C 15.327 9.704 15.327 8.296 14.356 7.714 Z" fill={"var(--token-30fd6b0d-9c3a-4ed1-b7e6-4bdbb9d0fff9, rgba(255, 255, 255, 0.2)) /* {\"name\":\"Icon 100 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg9231101006" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 5.299 0.5 C 7.054 0.5 8.68 1.42 9.584 2.924 C 10.488 4.428 10.538 6.295 9.715 7.845 C 9.557 8.136 9.608 8.497 9.842 8.732 L 11.463 10.354 C 11.756 10.647 11.756 11.121 11.463 11.414 C 11.17 11.707 10.696 11.707 10.403 11.414 L 8.851 9.862 C 8.605 9.616 8.222 9.572 7.926 9.755 C 6.122 10.868 3.812 10.723 2.162 9.393 C 0.512 8.062 -0.12 5.836 0.585 3.837 C 1.29 1.838 3.179 0.5 5.299 0.5 M 1.799 5.5 C 1.799 7.433 3.366 9 5.299 9 C 7.232 9 8.799 7.433 8.799 5.5 C 8.799 3.567 7.232 2 5.299 2 C 3.366 2 1.799 3.567 1.799 5.5" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg10916887430" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 0.75 C 4 0.336 4.336 0 4.75 0 C 5.164 0 5.5 0.336 5.5 0.75 L 5.5 8.75 C 5.5 9.164 5.164 9.5 4.75 9.5 C 4.336 9.5 4 9.164 4 8.75 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 0 4.75 C 0 4.336 0.336 4 0.75 4 L 8.75 4 C 9.164 4 9.5 4.336 9.5 4.75 C 9.5 5.164 9.164 5.5 8.75 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12148588862" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 0.5 5.422 C 0.5 4.522 0.904 3.67 1.6 3.1 L 4.1 1.054 C 5.205 0.15 6.795 0.15 7.9 1.054 L 10.4 3.1 C 11.096 3.67 11.5 4.522 11.5 5.422 L 11.5 9 C 11.5 10.657 10.157 12 8.5 12 L 3.5 12 C 1.843 12 0.5 10.657 0.5 9 Z" id="a1386z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1387z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1386z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1386z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} clipPath="url(#a1387z)" strokeWidth="3" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
          <path d="M 6 10.5 L 6 8" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10345077649" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g transform="translate(2.5 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 2.5)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 6 0 C 6.828 0 7.5 0.672 7.5 1.5 C 7.5 2.328 6.828 3 6 3 C 5.172 3 4.5 2.328 4.5 1.5 C 4.5 0.672 5.172 0 6 0 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 1.5 4.5 C 2.328 4.5 3 5.172 3 6 C 3 6.828 2.328 7.5 1.5 7.5 C 0.672 7.5 0 6.828 0 6 C 0 5.172 0.672 4.5 1.5 4.5 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 1.5 4 L 1.5 0.5" fill="transparent" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 3 6 L 3 6 C 4.657 6 6 4.657 6 3 L 6 3" fill="transparent" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12154967484" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.75 2.75 C 1.75 1.645 2.645 0.75 3.75 0.75 L 4.75 0.75 C 5.302 0.75 5.75 1.198 5.75 1.75 L 5.75 4.25 C 5.75 4.802 6.198 5.25 6.75 5.25 L 9.25 5.25 C 9.802 5.25 10.25 5.698 10.25 6.25 L 10.25 9.25 C 10.25 10.355 9.355 11.25 8.25 11.25 L 3.75 11.25 C 2.645 11.25 1.75 10.355 1.75 9.25 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 4.5 0.75 L 5.672 0.75 C 6.202 0.75 6.711 0.961 7.086 1.336 L 9.664 3.914 C 10.039 4.289 10.25 4.798 10.25 5.328 L 10.25 6.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12454476165" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 8.75 C 1.5 8.75 1.5 4.631 1.5 3.25 C 1.5 1.869 3.515 0.75 6 0.75 C 8.485 0.75 10.5 1.869 10.5 3.25 C 10.5 3.595 10.5 8.75 10.5 8.75 M 10.5 8.75 C 10.5 10.131 8.485 11.25 6 11.25 C 3.515 11.25 1.5 10.131 1.5 8.75" fill={"var(--token-30fd6b0d-9c3a-4ed1-b7e6-4bdbb9d0fff9, rgba(255, 255, 255, 0.2)) /* {\"name\":\"Icon 100 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.25 3.25 C 10.25 4.355 8.347 5.25 6 5.25 C 3.653 5.25 1.75 4.355 1.75 3.25" fill="transparent" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.25 6 C 10.25 7.105 8.347 8 6 8 C 3.653 8 1.75 7.105 1.75 6" fill="transparent" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg9600780301" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 8.75 C 1.5 8.75 1.5 4.631 1.5 3.25 C 1.5 1.869 3.515 0.75 6 0.75 C 8.485 0.75 10.5 1.869 10.5 3.25 C 10.5 3.595 10.5 8.75 10.5 8.75 M 10.5 8.75 C 10.5 10.131 8.485 11.25 6 11.25 C 3.515 11.25 1.5 10.131 1.5 8.75" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.25 3.25 C 10.25 4.355 8.347 5.25 6 5.25 C 3.653 5.25 1.75 4.355 1.75 3.25" fill="transparent" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.25 6 C 10.25 7.105 8.347 8 6 8 C 3.653 8 1.75 7.105 1.75 6" fill="transparent" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg9795512163" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.25 4.25 L 1.25 4.25 L 1.25 9 C 1.25 9.966 2.034 10.75 3 10.75 L 9 10.75 C 9.966 10.75 10.75 9.966 10.75 9 L 10.75 5.75 C 10.75 4.922 10.078 4.25 9.25 4.25 L 8 4.25 C 7.448 4.25 7 3.802 7 3.25 L 7 2.75 C 7 1.922 6.328 1.25 5.5 1.25 L 2.75 1.25 C 1.922 1.25 1.25 1.922 1.25 2.75 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 8.5 4.25 L 1.5 4.25" fill="transparent" strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg10694597803" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.542 16.381 C 2.256 16.788 1.128 15.421 1.772 14.235 L 7.742 3.238 C 8.499 1.843 10.501 1.843 11.258 3.238 L 17.228 14.235 C 17.872 15.421 16.744 16.788 15.458 16.381 L 9.801 14.595 C 9.605 14.533 9.395 14.533 9.199 14.595 Z" transform="translate(3.5 4.5) rotate(-45 9.5 8.75)" fill={"var(--token-30fd6b0d-9c3a-4ed1-b7e6-4bdbb9d0fff9, rgba(255, 255, 255, 0.2)) /* {\"name\":\"Icon 100 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0.0953012, 13.7803)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg10923056801" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 14.352 23.648 C 18.526 24.597 22.5 21.424 22.5 17.144 L 22.5 10.5 C 22.5 9.672 21.828 9 21 9 L 21 9 C 20.172 9 19.5 9.672 19.5 10.5 L 19.5 13 L 19.5 14 L 19.5 14 L 19.5 8.5 C 19.5 7.672 18.828 7 18 7 L 18 7 C 17.172 7 16.5 7.672 16.5 8.5 L 16.5 14 L 16.5 14 L 16.5 7.5 C 16.5 6.672 15.828 6 15 6 L 15 6 C 14.172 6 13.5 6.672 13.5 7.5 L 13.5 14 L 13.5 14 L 13.5 9.5 C 13.5 8.672 12.828 8 12 8 L 12 8 C 11.172 8 10.5 8.672 10.5 9.5 L 10.5 14 L 10.5 14.566 C 10.5 15.013 9.926 15.197 9.667 14.833 L 8.93 13.803 C 8.425 13.095 7.429 12.957 6.75 13.5 L 6.75 13.5 C 6.048 14.062 5.905 15.073 6.423 15.808 L 9.951 20.806 C 10.948 22.218 12.433 23.212 14.119 23.595 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg9701220275" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 15 7 C 19.418 7 23 10.582 23 15 C 23 19.418 19.418 23 15 23 L 9 23 C 7.895 23 7 22.105 7 21 L 7 15 C 7 10.582 10.582 7 15 7 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg9434921750" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 15 23.5 C 10.306 23.5 6.5 19.694 6.5 15 C 6.5 12.796 7.339 10.787 8.716 9.277 C 9.404 8.521 10.226 7.891 11.145 7.422 C 11.605 7.188 12.088 6.994 12.591 6.846 L 12.682 6.828 C 13.337 6.701 13.885 7.329 13.67 7.961 L 13.67 7.961 C 13.559 8.456 13.5 8.971 13.5 9.5 C 13.5 13.366 16.634 16.5 20.5 16.5 C 21.029 16.5 21.544 16.441 22.039 16.33 L 22.039 16.33 C 22.671 16.115 23.299 16.663 23.172 17.318 L 23.154 17.409 C 23.08 17.66 22.994 17.907 22.898 18.148 C 22.802 18.389 22.695 18.625 22.578 18.855 C 22.109 19.774 21.479 20.596 20.723 21.284 C 19.213 22.661 17.204 23.5 15 23.5 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 20 20" id="svg10980010547" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.021 5.43 C 7.355 5.023 6.5 5.502 6.5 6.283 L 6.5 13.717 C 6.5 14.498 7.355 14.977 8.021 14.57 L 14.104 10.853 C 14.742 10.463 14.742 9.537 14.104 9.147 Z" fill="rgba(153, 153, 153, 0.2)" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 20 20" id="svg12538134848" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 10 5 L 10 15" fill="transparent" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 5 10 L 15 10" fill="transparent" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 11.5 2.5" overflow="visible" id="svg-1653932831_617" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <path d="M 1.25 0 C 1.94 0 2.5 0.56 2.5 1.25 C 2.5 1.94 1.94 2.5 1.25 2.5 C 0.56 2.5 0 1.94 0 1.25 C 0 0.56 0.56 0 1.25 0 M 5.75 0 C 6.44 0 7 0.56 7 1.25 C 7 1.94 6.44 2.5 5.75 2.5 C 5.06 2.5 4.5 1.94 4.5 1.25 C 4.5 0.56 5.06 0 5.75 0 M 10.25 0 C 10.94 0 11.5 0.56 11.5 1.25 C 11.5 1.94 10.94 2.5 10.25 2.5 C 9.56 2.5 9 1.94 9 1.25 C 9 0.56 9.56 0 10.25 0" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 9.25 5.379" overflow="visible" id="svg314421345_484" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <path d="M 0 2.75 L 2.189 4.939 C 2.47 5.221 2.852 5.379 3.25 5.379 C 3.648 5.379 4.03 5.221 4.311 4.939 L 9.25 0" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg9342344358" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 0.75 C 4 0.336 4.336 0 4.75 0 C 5.164 0 5.5 0.336 5.5 0.75 L 5.5 8.75 C 5.5 9.164 5.164 9.5 4.75 9.5 C 4.336 9.5 4 9.164 4 8.75 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 1\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 0 4.75 C 0 4.336 0.336 4 0.75 4 L 8.75 4 C 9.164 4 9.5 4.336 9.5 4.75 C 9.5 5.164 9.164 5.5 8.75 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 1\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10867483945" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 9 1 C 10.105 1 11 1.895 11 3 C 11 4.105 10.105 5 9 5 C 7.895 5 7 4.105 7 3 C 7 1.895 7.895 1 9 1 Z" fill={"var(--token-30fd6b0d-9c3a-4ed1-b7e6-4bdbb9d0fff9, rgba(255, 255, 255, 0.2)) /* {\"name\":\"Icon 100 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 3 7 C 4.105 7 5 7.895 5 9 C 5 10.105 4.105 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.895 1.895 7 3 7 Z" fill={"var(--token-30fd6b0d-9c3a-4ed1-b7e6-4bdbb9d0fff9, rgba(255, 255, 255, 0.2)) /* {\"name\":\"Icon 100 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 3 6.5 L 3 1" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 5 9 L 6 9 C 7.657 9 9 7.657 9 6 L 9 5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg11500755854" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 Z M 1.5 6 C 1.5 8.281 3.197 10.165 5.396 10.46 C 5.585 10.648 5.788 10.75 6 10.75 C 6.212 10.75 6.415 10.648 6.604 10.46 C 8.803 10.165 10.5 8.281 10.5 6 C 10.5 3.719 8.803 1.835 6.604 1.54 C 6.415 1.352 6.212 1.25 6 1.25 C 5.788 1.25 5.585 1.352 5.396 1.54 C 3.197 1.835 1.5 3.719 1.5 6 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 6 0.75 C 7.243 0.75 8.25 3.101 8.25 6 C 8.25 8.899 7.243 11.25 6 11.25 C 4.757 11.25 3.75 8.899 3.75 6 C 3.75 3.101 4.757 0.75 6 0.75 Z" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 1 6 C 1 6 3.5 6.5 6 6.5 C 8.5 6.5 11 6 11 6" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 6 1 C 8.761 1 11 3.239 11 6 C 11 8.761 8.761 11 6 11 C 3.239 11 1 8.761 1 6 C 1 3.239 3.239 1 6 1 Z" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg9203629568" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0.75 6 C 0.75 3.101 3.101 0.75 6 0.75 L 6 0.75 C 8.899 0.75 11.25 3.101 11.25 6 L 11.25 6 C 11.25 8.899 8.899 11.25 6 11.25 L 6 11.25 C 3.101 11.25 0.75 8.899 0.75 6 Z" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 5.75 6.25 L 5.75 3.75 M 5.75 6.25 L 7.25 6.25" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg8798386552" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.25 1.5 L 6.043 4.293 C 6.433 4.683 6.433 5.317 6.043 5.707 L 3.25 8.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-80b6d9ee-6797-4273-85d5-55a0c0e39c2c, rgb(102, 102, 102)) /* {\"name\":\"Icon 40\"} */"} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg11832395151" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6 1 C 7.519 1 8.75 2.231 8.75 3.75 C 8.75 5.269 7.519 6.5 6 6.5 C 4.481 6.5 3.25 5.269 3.25 3.75 C 3.25 2.231 4.481 1 6 1 Z" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 2.111 11.111 C 3.106 10.116 4.481 9.5 6 9.5 C 7.519 9.5 8.894 10.116 9.889 11.111" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10054467923" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 0.5 5.422 C 0.5 4.522 0.904 3.67 1.6 3.1 L 4.1 1.054 C 5.205 0.15 6.795 0.15 7.9 1.054 L 10.4 3.1 C 11.096 3.67 11.5 4.522 11.5 5.422 L 11.5 9 C 11.5 10.657 10.157 12 8.5 12 L 3.5 12 C 1.843 12 0.5 10.657 0.5 9 Z" id="a3318z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a3319z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a3318z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a3318z" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} clipPath="url(#a3319z)" strokeWidth="3" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
          <path d="M 6 10.5 L 6 8" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg8686964075" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.75 2.75 C 1.75 1.645 2.645 0.75 3.75 0.75 L 4.75 0.75 C 5.302 0.75 5.75 1.198 5.75 1.75 L 5.75 4.25 C 5.75 4.802 6.198 5.25 6.75 5.25 L 9.25 5.25 C 9.802 5.25 10.25 5.698 10.25 6.25 L 10.25 9.25 C 10.25 10.355 9.355 11.25 8.25 11.25 L 3.75 11.25 C 2.645 11.25 1.75 10.355 1.75 9.25 Z" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 4.5 0.75 L 5.672 0.75 C 6.202 0.75 6.711 0.961 7.086 1.336 L 9.664 3.914 C 10.039 4.289 10.25 4.798 10.25 5.328 L 10.25 6.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg11698504620" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 8.75 C 1.5 8.75 1.5 4.631 1.5 3.25 C 1.5 1.869 3.515 0.75 6 0.75 C 8.485 0.75 10.5 1.869 10.5 3.25 C 10.5 3.595 10.5 8.75 10.5 8.75 M 10.5 8.75 C 10.5 10.131 8.485 11.25 6 11.25 C 3.515 11.25 1.5 10.131 1.5 8.75" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.25 3.25 C 10.25 4.355 8.347 5.25 6 5.25 C 3.653 5.25 1.75 4.355 1.75 3.25" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.25 6 C 10.25 7.105 8.347 8 6 8 C 3.653 8 1.75 7.105 1.75 6" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12349103208" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 8.75 C 1.5 8.75 1.5 4.631 1.5 3.25 C 1.5 1.869 3.515 0.75 6 0.75 C 8.485 0.75 10.5 1.869 10.5 3.25 C 10.5 3.595 10.5 8.75 10.5 8.75 M 10.5 8.75 C 10.5 10.131 8.485 11.25 6 11.25 C 3.515 11.25 1.5 10.131 1.5 8.75" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(135, 135, 135, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.25 3.25 C 10.25 4.355 8.347 5.25 6 5.25 C 3.653 5.25 1.75 4.355 1.75 3.25" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg10994104066" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 2.293 3.707 C 2.683 3.317 2.683 2.683 2.293 2.293 L 0 0" transform="translate(2.5 1) rotate(90 1.5 3)" fill="transparent" strokeWidth="1.5" stroke={"var(--token-80b6d9ee-6797-4273-85d5-55a0c0e39c2c, rgb(102, 102, 102)) /* {\"name\":\"Icon 40\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 7, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12583983403" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 2.5 6.5 L 3.793 7.793 C 4.183 8.183 4.817 8.183 5.207 7.793 L 9 4" fill="transparent" strokeWidth="1.75" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="367334708" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 7 L 6.293 0.707 C 6.683 0.317 7.317 0.317 7.707 0.707 L 14 7" fill="transparent" id="aD_3Sblea" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 6.5) rotate(540 7 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 17, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3797874707" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 Z M 13 13 L 16 16" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Uo84kFvT9" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2571499015" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="o8Zoz5r1l" transform="translate(3 3) rotate(90 7 6.979)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 16.979, 2.979)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 7.414 L 6.273 0.77 C 6.668 0.352 7.332 0.352 7.727 0.77 L 14 7.414" fill="transparent" id="r00KAI_6S" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 7) rotate(180 7 3.707)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 14, 14.414)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 13.5 L 0 0" fill="transparent" id="NYZlkwKPr" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 0) rotate(180 0.5 6.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 7, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="3112628790" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="nlSrohSU_" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="KsCrzTmH6" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 3.383 17.372 C 2.123 17.792 0.979 16.488 1.56 15.293 L 7.202 3.697 C 7.931 2.197 10.069 2.197 10.798 3.697 L 16.44 15.293 C 17.021 16.488 15.877 17.792 14.617 17.372 L 9.632 15.711 C 9.222 15.574 8.778 15.574 8.368 15.711 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="B1gctVLSo" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(-1.5 -1.5) rotate(-45 9 9.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, -5.4047, 7.57322)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="919011021" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.393 1.496 C 7.453 0.653 8.155 0 9 0 L 9 0 C 9.845 0 10.547 0.653 10.607 1.496 L 10.615 1.615 C 10.836 4.706 13.294 7.164 16.385 7.385 L 16.504 7.393 C 17.347 7.453 18 8.155 18 9 L 18 9 C 18 9.845 17.347 10.547 16.504 10.607 L 16.385 10.615 C 13.294 10.836 10.836 13.294 10.615 16.385 L 10.607 16.504 C 10.547 17.347 9.845 18 9 18 L 9 18 C 8.155 18 7.453 17.347 7.393 16.504 L 7.385 16.385 C 7.164 13.294 4.706 10.836 1.615 10.615 L 1.496 10.607 C 0.653 10.547 0 9.845 0 9 L 0 9 C 0 8.155 0.653 7.453 1.496 7.393 L 1.615 7.385 C 4.706 7.164 7.164 4.706 7.385 1.615 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Yx3KDFIth" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2225151273" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 5.39 0.306 C 6.032 0.042 6.732 -0.054 7.421 0.029 C 8.31 0.131 9.102 0.509 9.797 1.162 C 9.806 1.171 9.819 1.177 9.83 1.181 C 9.843 1.184 9.856 1.184 9.868 1.181 C 10.772 0.947 11.729 1.034 12.576 1.425 L 12.618 1.445 L 12.721 1.495 C 13.608 1.945 14.299 2.703 14.666 3.628 C 14.851 4.081 14.944 4.553 14.946 5.046 C 14.959 5.412 14.919 5.778 14.827 6.133 C 14.817 6.169 14.827 6.208 14.853 6.235 C 15.381 6.774 15.731 7.417 15.905 8.164 C 16.162 9.43 15.899 10.573 15.116 11.589 L 14.995 11.737 C 14.477 12.33 13.797 12.759 13.039 12.971 C 13.006 12.98 12.979 13.006 12.967 13.038 C 12.797 13.528 12.627 13.948 12.309 14.366 C 11.509 15.421 10.334 16.007 9.011 16 C 7.955 15.995 7.02 15.609 6.204 14.843 C 6.179 14.819 6.144 14.811 6.111 14.821 C 5.766 14.932 5.418 14.948 5.041 14.944 C 4.44 14.939 3.849 14.797 3.312 14.53 C 2.749 14.251 2.259 13.845 1.881 13.343 C 1.746 13.164 1.611 12.995 1.513 12.795 C 1.378 12.52 1.268 12.234 1.184 11.94 C 1.006 11.272 1.002 10.569 1.171 9.898 C 1.177 9.882 1.179 9.865 1.177 9.848 C 1.174 9.832 1.165 9.817 1.153 9.805 C 0.742 9.39 0.428 8.889 0.234 8.338 C 0.104 7.999 0.029 7.641 0.011 7.278 C -0.022 6.801 0.02 6.321 0.136 5.856 C 0.435 4.868 1.009 4.092 1.854 3.529 C 2.043 3.404 2.221 3.306 2.388 3.236 C 2.576 3.158 2.768 3.091 2.963 3.034 C 2.99 3.025 3.012 3.003 3.02 2.975 C 3.166 2.452 3.417 1.963 3.757 1.54 C 4.186 0.995 4.749 0.57 5.39 0.306 Z M 4.444 5.778 L 5.778 8 L 4.444 10.222 M 8.889 10.222 L 11.556 10.222" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="CfFbo5RBd" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3578254236" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7 0 C 10.866 0 14 1.791 14 4 L 14 12 C 14 14.209 10.866 16 7 16 C 3.134 16 0 14.209 0 12 L 0 4 C 0 1.791 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="aaLS5enQH" transform="translate(3 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <g fill="transparent" id="fdGgwC0DY" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 16 0 L 16 4 C 16 6.761 12.418 9 8 9 C 3.582 9 0 6.761 0 4 L 0 0 L 2 0 L 2 4 C 2 5.657 4.686 7 8 7 C 11.314 7 14 5.657 14 4 L 14 0 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="PZu71jGFm" transform="translate(0 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 16 0 L 16 4 C 16 6.761 12.418 9 8 9 C 3.582 9 0 6.761 0 4 L 0 0 L 2 0 L 2 4 C 2 5.657 4.686 7 8 7 C 11.314 7 14 5.657 14 4 L 14 0 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="oUitYhQFY" transform="translate(0 4)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0, 4)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 7 0 C 10.866 0 14 1.791 14 4 C 14 6.209 10.866 8 7 8 C 3.134 8 0 6.209 0 4 C 0 1.791 3.134 0 7 0 Z" fill="transparent" id="cPFaCmSEu" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 0)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 0)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="4209924379" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 5 L 5.174 5 C 5.851 2.133 8.426 0 11.5 0 C 15.09 0 18 2.91 18 6.5 C 18 10.09 15.09 13 11.5 13 L 4 13 C 1.791 13 0 11.209 0 9 C 0 6.791 1.791 5 4 5 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Pmy4ozTPP" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1642661144" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.316 0.282 C 7.371 0.198 7.5 0.237 7.5 0.336 L 7.5 6.5 L 14.077 6.5 C 14.474 6.5 14.713 6.941 14.496 7.273 L 7.684 17.718 C 7.629 17.802 7.5 17.763 7.5 17.664 L 7.5 11.5 L 0.923 11.5 C 0.526 11.5 0.287 11.059 0.504 10.727 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="JLnAV7wPe" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.5 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3899503700" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="B1xT_zB1_" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 3.086 L 2.793 0.293 C 3.183 -0.098 3.817 -0.098 4.207 0.293 L 7 3.086 M 3.5 1.086 L 3.5 7.086" fill="transparent" id="y6myV9DAS" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 6.414)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6.5, 6.414)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3553501619" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="J2g_sQzdi" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="qn9v4TGjc" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <g fill="transparent" id="k07xWAi3X" transform="translate(5 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 5, 3)", transformOrigin: "0px 0px" } as CSSProperties}>
              <path d="M 0 5.44 L 4.264 0.801 C 4.66 0.37 5.34 0.37 5.736 0.801 L 10 5.44" fill="transparent" id="GmiaU4Xf8" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 5) rotate(180 5 2.72)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 10, 10.44)", transformOrigin: "0px 0px" } as CSSProperties} />
              <path d="M 0 9.5 L 0 0" fill="transparent" id="pFwTi47Ta" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4 0) rotate(180 0.5 4.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 5, 9.5)", transformOrigin: "0px 0px" } as CSSProperties} />
            </g>
            <path d="M 0 0 L 14 0" fill="transparent" id="WdxxX2Yz3" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 17)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 17)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="1825208344" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="DUPc5oIsM" transform="translate(3 3) rotate(-90 7 6.979)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, -1, 1, 0, 3.021, 16.979)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 7.414 L 6.273 0.77 C 6.668 0.352 7.332 0.352 7.727 0.77 L 14 7.414" fill="transparent" id="Fb3UNma2k" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 7) rotate(180 7 3.707)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 14, 14.414)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 13.5 L 0 0" fill="transparent" id="xsId7KutQ" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 0) rotate(180 0.5 6.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 7, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg id="1184508750" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" id="yWvBZM3cg" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6.812 6.83 C 5.25 8.391 2.718 8.39 1.157 6.828 C -0.405 5.266 -0.405 2.734 1.157 1.172 C 2.718 -0.39 5.25 -0.391 6.812 1.17" fill="transparent" id="hGfwFfnW8" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8.018 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 8.018, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3500918179" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 8 C 0 3.582 3.582 0 8 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="RxA5u2sRg" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="974992432" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3.25 C 0 1.455 1.455 0 3.25 0 L 10.75 0 C 12.545 0 14 1.455 14 3.25 L 14 5.86 C 14 10.192 11.419 14.106 7.437 15.813 L 7.394 15.831 C 7.142 15.939 6.858 15.939 6.606 15.831 L 6.563 15.813 C 2.581 14.106 0 10.192 0 5.86 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="AhUB4ivr4" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="587222984" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.501 0 C 13.196 0 17.001 3.806 17.001 8.501 C 17.001 13.196 13.195 17.001 8.5 17.001 C 3.805 17.001 0 13.195 0 8.5 C 0 3.805 3.806 0 8.501 0 Z M 2.001 8.5 C 2.001 11.215 3.689 13.645 6.233 14.593 C 5.479 13.126 5.001 10.941 5.001 8.5 C 5.001 6.059 5.479 3.874 6.233 2.407 C 3.689 3.355 2.001 5.785 2.001 8.5 Z M 15.001 8.5 C 15.001 5.785 13.313 3.355 10.769 2.407 C 11.523 3.874 12.001 6.059 12.001 8.5 C 12.001 10.941 11.523 13.126 10.769 14.593 C 13.313 13.645 15.001 11.215 15.001 8.5 Z M 6.501 8.5 C 6.501 12.09 7.396 15 8.501 15 C 9.606 15 10.501 12.09 10.501 8.5 C 10.501 4.91 9.606 2 8.501 2 C 7.396 2 6.501 4.91 6.501 8.5 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="i4i8H9Zao" transform="translate(1.5 1.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.5, 1.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 0 C 4.277 0.987 8.723 0.987 13 0 L 13 0" fill="transparent" id="lTo6Obt5s" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 9.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 9.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 7 0 C 10.866 0 14 3.134 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="bNnSt6Y2K" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2313243780" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="PepNG7kzP" transform="translate(1 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 3)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 3.665 C 0.304 2.947 0.743 2.3 1.286 1.757 C 2.372 0.672 3.872 0 5.528 0 C 7.185 0 8.685 0.672 9.771 1.757 C 10.314 2.3 10.753 2.947 11.057 3.665" fill="transparent" id="wgUabV51_" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 10.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0, 10.5)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 0 C 0.391 0.08 0.767 0.198 1.126 0.35 C 1.844 0.653 2.491 1.093 3.033 1.635 C 3.576 2.178 4.016 2.825 4.319 3.543" fill="transparent" id="E8ylNNXOe" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(13.209 10.622)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 13.209, 10.622)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="dg3d1hpbO" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 0)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 0)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 0 C 1.933 0 3.5 1.567 3.5 3.5 C 3.5 5.433 1.933 7 0 7" fill="transparent" id="p7NIlbP8y" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(12 0)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 12, 0)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="2458882080" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3.609 L 0.303 3.061 C 1.35 1.172 3.34 0 5.5 0 L 5.5 0 C 7.66 0 9.65 1.172 10.697 3.061 L 11 3.609" fill="transparent" id="ZJ3NhD5NK" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4.5 14)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 4.5, 14)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="PMrgT3meu" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2330263925" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="m_7BCXUc9" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 4 M 0 4 L 4 4" fill="transparent" id="l5vGPS0a0" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2682099051" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 5.5 6 C 5.776 6 6 5.776 6 5.5 L 6 0" fill="transparent" id="vr_TAFMOr" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(11 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 11, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 11.096 11.096 C 9.92 12.272 8.295 13 6.5 13 C 2.91 13 0 10.09 0 6.5 C 0 2.91 2.91 0 6.5 0 C 8.295 0 9.92 0.728 11.096 1.904 C 11.684 2.492 12.16 3.192 12.489 3.97 C 12.654 4.359 12.781 4.767 12.868 5.19" fill="transparent" id="cYnyhOdPU" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1915987791" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="vEX_qhXWW" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 16 M 0 8 L 8 8" fill="transparent" id="MA2yDOaeV" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="323229016" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 9.5 3.5 C 11.433 1.567 14.567 1.567 16.5 3.5 L 16.5 3.5 C 18.433 5.433 18.433 8.567 16.5 10.5 L 10.5 16.5 C 8.567 18.433 5.433 18.433 3.5 16.5 L 3.5 16.5 C 1.567 14.567 1.567 11.433 3.5 9.5 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="xNhgxO09z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="qAQ6OiS7t" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 2.392 5.392 L 1.392 6.392 C -0.541 8.325 -0.541 11.459 1.392 13.392 L 1.392 13.392 C 3.325 15.325 6.459 15.325 8.392 13.392 L 9.392 12.392 M 12.392 9.392 L 13.392 8.392 C 15.325 6.459 15.325 3.325 13.392 1.392 L 13.392 1.392 C 11.459 -0.541 8.325 -0.541 6.392 1.392 L 5.392 2.392 M 5.892 8.892 L 8.892 5.892" fill="transparent" id="uU7sFAGda" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.5 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1635548955" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 7 C 14 8.657 12.657 10 11 10 L 3 10 C 1.343 10 0 8.657 0 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="AdeKayc7d" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 7)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 10 3.5 L 10 3 C 10 1.343 8.657 0 7 0 L 3 0 C 1.343 0 0 1.343 0 3 L 0 7" fill="transparent" id="Ax6FRJvk6" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2642697163" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.351 0.553 C 8.725 0.234 9.275 0.234 9.649 0.553 L 11.509 2.138 C 11.669 2.275 11.868 2.357 12.078 2.374 L 14.514 2.568 C 15.004 2.607 15.393 2.996 15.432 3.486 L 15.626 5.922 C 15.643 6.132 15.725 6.331 15.862 6.491 L 17.447 8.351 C 17.766 8.725 17.766 9.275 17.447 9.649 L 15.862 11.509 C 15.725 11.669 15.643 11.868 15.626 12.078 L 15.432 14.514 C 15.393 15.004 15.004 15.393 14.514 15.432 L 12.078 15.626 C 11.868 15.643 11.669 15.725 11.509 15.862 L 9.649 17.447 C 9.275 17.766 8.725 17.766 8.351 17.447 L 6.491 15.862 C 6.331 15.725 6.132 15.643 5.922 15.626 L 3.486 15.432 C 2.996 15.393 2.607 15.004 2.568 14.514 L 2.374 12.078 C 2.357 11.868 2.275 11.669 2.138 11.509 L 0.553 9.649 C 0.234 9.275 0.234 8.725 0.553 8.351 L 2.138 6.491 C 2.275 6.331 2.357 6.132 2.374 5.922 L 2.568 3.486 C 2.607 2.996 2.996 2.607 3.486 2.568 L 5.922 2.374 C 6.132 2.357 6.331 2.275 6.491 2.138 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="TFoVo3jqg" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3983927620" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 7 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 7 C 14 8.657 12.657 10 11 10 L 3 10 C 1.343 10 0 8.657 0 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="TJgu9bozd" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 8 5 L 8 4 C 8 1.791 6.209 0 4 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 5" fill="transparent" id="WUdG9cSLB" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 18 52" id="svg12031952737" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 17.146 2.733 C 17.507 1.578 16.422 0.493 15.267 0.854 L 2.366 4.886 C 1.29 5.222 0.956 6.581 1.753 7.378 L 10.622 16.247 C 11.419 17.044 12.778 16.71 13.114 15.634 Z" transform="translate(0.6 -0.4) rotate(-90 9 9)" fill={"var(--token-66dfdba2-b084-43a3-a18d-237c2893b6a7, rgb(153, 0, 255)) /* {\"name\":\"Purple\"} */"} style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, -1, 1, 0, 0.6, 17.6)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        <svg viewBox="0 0 18 52" id="svg9867962348" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 17.146 2.733 C 17.507 1.578 16.422 0.493 15.267 0.854 L 2.366 4.886 C 1.29 5.222 0.956 6.581 1.753 7.378 L 10.622 16.247 C 11.419 17.044 12.778 16.71 13.114 15.634 Z" transform="translate(0.6 -0.4) rotate(-90 9 9)" fill={"var(--token-0245ad54-dffa-4280-9b49-9d43ad68acaa, rgb(102, 0, 255)) /* {\"name\":\"Dusk\"} */"} style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, -1, 1, 0, 0.6, 17.6)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
      </div>
      <div id="g_id_onload" data-login_uri="https://www.framer.com/api-proxy/auth-google-one-tap-callback" data-client_id="494526493439-djlkk2cal7r0lijnrd6en51c9vo4icgp.apps.googleusercontent.com" data-state_cookie_domain="framer.com" data-auto_prompt="false" data-prompt_parent_id="__framer-flap" data-cancel_on_tap_outside="false" data-use_fedcm_for_prompt="true" data-itp_support="true" style={{ width: "1440px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties} />
      <iframe height="0" width="0" style={{ position: "static", display: "none", flexDirection: "row", border: "2px inset rgb(0, 0, 0)", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", visibility: "hidden" } as CSSProperties} />
      <div style={{ position: "static", display: "contents", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <div style={{ width: "380px", height: "143px", padding: "20px", position: "fixed", top: "757px", right: "1060px", zIndex: "10", inset: "757px 1060px 0px 0px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px", left: "0px", bottom: "0px", boxSizing: "border-box", touchAction: "none", pointerEvents: "none" } as CSSProperties} data-cs-id="2591">
          <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", pointerEvents: "none", maxWidth: "unset" } as CSSProperties}>
            <div style={{ width: "340px", height: "103px", maxHeight: "calc(-40px + 100vh)", position: "relative", zIndex: "100", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", pointerEvents: "auto", opacity: "1", transform: "none", willChange: "transform" } as CSSProperties}>
              <div className="--framer-cookie-banner-container --framer-cookie-banner-type-simple" style={{ width: "100%", height: "103px", maxWidth: "340px", position: "static", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0 0 0 1px var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", overflow: "scroll", background: "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} data-gtm-vis-recent-on-screen9263478_141="5387" data-gtm-vis-first-on-screen9263478_141="5387" data-gtm-vis-total-visible-time9263478_141="100" data-gtm-vis-has-fired9263478_141="1">
                <div style={{ width: "340px", height: "103px", padding: "20px", position: "static", display: "flex", flexDirection: "row", gap: "20px" } as CSSProperties}>
                  <p style={{ width: "242.039px", height: "63px", position: "static", display: "block", flexDirection: "row", alignItems: "center", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "14px", lineHeight: "1.5em", letterSpacing: "-0.1px", color: "rgb(34, 34, 34)", margin: "0px", padding: "0px", fontFeatureSettings: "\"cv05\", \"cv11\"", fontStyle: "normal", fontWeight: "400", flex: "1 1 0%" } as CSSProperties}>
                    {content.paragraph1}{" "}
                    <span style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                      {content.text1_2}{" "}
                      <a target="_blank" style={{ position: "static", display: "inline", flexDirection: "row", color: "rgb(0, 153, 255)", textDecoration: "none" } as CSSProperties} data-external-route="1" href={content.link1}>
                        {content.linkText1}
                      </a>
                      {content.text2_2}
                    </span>
                  </p>
                  <div style={{ width: "37.9609px", height: "63px", position: "static", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" } as CSSProperties}>
                    <input className="__framer-cookie-component-button" id="__framer-cookie-component-button-dismiss" type="button" tabIndex={0} value="Ok" style={{ width: "auto", height: "auto", padding: "10px", position: "static", display: "block", flexDirection: "row", backgroundColor: "rgb(222, 222, 222)", borderRadius: "10px", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontSize: "14px", fontWeight: "500", lineHeight: "1em", letterSpacing: "-0.3px", textAlign: "center", whiteSpace: "pre", overflow: "clip", appearance: "none", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", background: "rgb(222, 222, 222)", color: "var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))", cursor: "pointer", fontFeatureSettings: "\"cv05\", \"cv11\"", fontStyle: "normal" } as CSSProperties} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image1.src} alt={content.image1.alt} />
      <motion.img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }} src={content.image2.src} alt={content.image2.alt} />
      <div id="__framer-flap-wrapper" style={{ width: "1440px", padding: "0px 20px", position: "fixed", top: "64px", bottom: "836px", zIndex: "99", inset: "64px 0px 836px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        {" "}
        <div id="__framer-flap-container" style={{ width: "1400px", maxWidth: "1400px", position: "static", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" } as CSSProperties}>
          {" "}
          <div id="__framer-flap" style={{ position: "static", display: "block", flexDirection: "row", opacity: "0", transform: "matrix(1, 0, 0, 1, 8, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          {" "}
        </div>
        {" "}
      </div>
      <img id="podscribe-request" aria-hidden="true" style={{ position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties} src={content.image3.src} alt={content.image3.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image4.src} alt={content.image4.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image5.src} alt={content.image5.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image6.src} alt={content.image6.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image7.src} alt={content.image7.alt} />
    </>
  );
}
