// page.tsx — the page shell, composing each section as a real component.
// edit a section in its own file under src/sections/<NN-Name>.tsx; edit
// shell-level markup (nav wrappers, etc.) directly here.
//
// sections (in render order):
//   1. "Desktop Nav" → src/sections/01-DesktopNav.tsx
//   2. "Header" → src/sections/02-Header.tsx
//   3. "UI" → src/sections/03-UI.tsx
//   4. "Agent" → src/sections/04-Agent.tsx
//   5. "Benefits" → src/sections/05-Benefits.tsx
//   6. "Bento" → src/sections/06-Bento.tsx
//   7. "Extras NEW" → src/sections/07-ExtrasNEW.tsx
//   8. "Related Features" → src/sections/08-RelatedFeatures.tsx
//   9. "New Pivot" → src/sections/09-NewPivot.tsx
//   10. "Bottom" → src/sections/10-Bottom.tsx
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import content from "./content/shell";
import { DesktopNav } from "./sections/01-DesktopNav";
import { Header } from "./sections/02-Header";
import { UI } from "./sections/03-UI";
import { Agent } from "./sections/04-Agent";
import { Benefits } from "./sections/05-Benefits";
import { Bento } from "./sections/06-Bento";
import { ExtrasNEW } from "./sections/07-ExtrasNEW";
import { RelatedFeatures } from "./sections/08-RelatedFeatures";
import { NewPivot } from "./sections/09-NewPivot";
import { Bottom } from "./sections/10-Bottom";
import "./hover.css";
import "./responsive.css";

export function Page() {
  return (
    <>
      <div id="main" style={{ width: "1440px", height: "12970px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <style data-framer-html-style="">
          {content.text1}
        </style>
        <div className="framer-ykIBb framer-Grv0o framer-zprce9" data-layout-template="true" data-selection="true" style={{ width: "auto", height: "12970px", minHeight: "100vh", padding: "64px 0px 0px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", "--1moyfq9": "64px 0px 0px 0px", "--1r5dcfs": "visible", "--u410qi": "var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))" } as CSSProperties}>
          <div className="framer-1w39556-container" data-cs-id="3" style={{ width: "1440px", height: "64px", position: "fixed", bottom: "836px", zIndex: "10", inset: "0px 0px 836px", display: "block", flexDirection: "row" } as CSSProperties}>
            <div className="ssr-variant hidden-sv03hi" style={{ position: "static", display: "contents", flexDirection: "row" } as CSSProperties}>
              <DesktopNav />
            </div>
          </div>
          <style data-framer-html-style="">
            {content.text2}
          </style>
          <div data-framer-root="" className="framer-IlK8z framer-Grv0o framer-lRLSj framer-OM6Dg framer-0k2u9 framer-efj7ns" style={{ height: "min-content", minHeight: "100vh", padding: "70px 0px 0px", position: "relative", display: "contents", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", alignContent: "center", backgroundColor: "rgb(0, 0, 0)", width: "auto" } as CSSProperties}>
            <Header />
            <UI />
            <Agent />
            <Benefits />
            <Bento />
            <ExtrasNEW />
            <RelatedFeatures />
          </div>
          <div id="overlay" style={{ position: "static", display: "block", flexDirection: "row" } as CSSProperties} className="hv-2976" />
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
        <svg viewBox="0 0 12 12" id="svg10083869670" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 0.5 5.422 C 0.5 4.522 0.904 3.67 1.6 3.1 L 4.1 1.054 C 5.205 0.15 6.795 0.15 7.9 1.054 L 10.4 3.1 C 11.096 3.67 11.5 4.522 11.5 5.422 L 11.5 9 C 11.5 10.657 10.157 12 8.5 12 L 3.5 12 C 1.843 12 0.5 10.657 0.5 9 Z" id="a2366z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a2367z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a2366z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a2366z" fill={"var(--token-30fd6b0d-9c3a-4ed1-b7e6-4bdbb9d0fff9, rgba(255, 255, 255, 0.2)) /* {\"name\":\"Icon 100 Transparent\"} */"} clipPath="url(#a2367z)" strokeWidth="3" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
          <path d="M 6 10.5 L 6 8" fill={"var(--token-30fd6b0d-9c3a-4ed1-b7e6-4bdbb9d0fff9, rgba(255, 255, 255, 0.2)) /* {\"name\":\"Icon 100 Transparent\"} */"} strokeWidth="2" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12154967484" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.75 2.75 C 1.75 1.645 2.645 0.75 3.75 0.75 L 4.75 0.75 C 5.302 0.75 5.75 1.198 5.75 1.75 L 5.75 4.25 C 5.75 4.802 6.198 5.25 6.75 5.25 L 9.25 5.25 C 9.802 5.25 10.25 5.698 10.25 6.25 L 10.25 9.25 C 10.25 10.355 9.355 11.25 8.25 11.25 L 3.75 11.25 C 2.645 11.25 1.75 10.355 1.75 9.25 Z" fill={"var(--token-e0633a0d-cf57-4847-a570-b6e3ee41f945, rgba(136, 136, 136, 0.2)) /* {\"name\":\"Icon 53 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 4.5 0.75 L 5.672 0.75 C 6.202 0.75 6.711 0.961 7.086 1.336 L 9.664 3.914 C 10.039 4.289 10.25 4.798 10.25 5.328 L 10.25 6.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-c21e04aa-a0e5-4f4d-853d-09e09aa40d71, rgb(136, 136, 136)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
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
        <svg viewBox="0 0 20 20" id="svg10522329964" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 10 5 L 10 15" fill="transparent" strokeWidth="2" stroke="var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 5 10 L 15 10" fill="transparent" strokeWidth="2" stroke="var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 4.38 4.38" id="svg10577983630" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3.65 L 1.438 2.212 C 1.652 1.998 1.652 1.652 1.438 1.438 L 0 0" transform="translate(1.277 0.365) rotate(90 1 1.75)" fill="transparent" strokeWidth="0.73" stroke={"var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)) /* {\"name\":\"White 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 4.027, 1.115)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg viewBox="0 0 14 16" id="svg11667034770" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 0.5 C 0 0.224 0.224 0 0.5 0 L 0.5 0 C 0.776 0 1 0.224 1 0.5 L 1 15.5 C 1 15.776 0.776 16 0.5 16 L 0.5 16 C 0.224 16 0 15.776 0 15.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 3 7 C 3 5.895 3.895 5 5 5 L 12 5 C 13.105 5 14 5.895 14 7 L 14 9 C 14 10.105 13.105 11 12 11 L 5 11 C 3.895 11 3 10.105 3 9 Z" id="a1176z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1177z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1176z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1176z" fill="rgba(0, 153, 255, 0.3)" clipPath="url(#a1177z)" strokeWidth="2" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 15 16" id="svg9035892648" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7 0.5 C 7 0.224 7.224 0 7.5 0 L 7.5 0 C 7.776 0 8 0.224 8 0.5 L 8 6 L 7 6 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 7 10 L 8 10 L 8 15.5 C 8 15.776 7.776 16 7.5 16 L 7.5 16 C 7.224 16 7 15.776 7 15.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 1 7 C 1 5.895 1.895 5 3 5 L 12 5 C 13.105 5 14 5.895 14 7 L 14 9 C 14 10.105 13.105 11 12 11 L 3 11 C 1.895 11 1 10.105 1 9 Z" id="a1182z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1183z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1182z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1182z" fill="rgba(0, 153, 255, 0.3)" clipPath="url(#a1183z)" strokeWidth="2" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 14 16" id="svg11262326325" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 13 0.5 C 13 0.224 13.224 0 13.5 0 L 13.5 0 C 13.776 0 14 0.224 14 0.5 L 14 15.5 C 14 15.776 13.776 16 13.5 16 L 13.5 16 C 13.224 16 13 15.776 13 15.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 0 7 C 0 5.895 0.895 5 2 5 L 9 5 C 10.105 5 11 5.895 11 7 L 11 9 C 11 10.105 10.105 11 9 11 L 2 11 C 0.895 11 0 10.105 0 9 Z" id="a1186z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1187z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1186z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1186z" fill="rgba(0, 153, 255, 0.3)" clipPath="url(#a1187z)" strokeWidth="2" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 16 14" id="svg10648565112" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 0.5 C 0 0.224 0.224 0 0.5 0 L 15.5 0 C 15.776 0 16 0.224 16 0.5 L 16 0.5 C 16 0.776 15.776 1 15.5 1 L 0.5 1 C 0.224 1 0 0.776 0 0.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 5 5 C 5 3.895 5.895 3 7 3 L 9 3 C 10.105 3 11 3.895 11 5 L 11 12 C 11 13.105 10.105 14 9 14 L 7 14 C 5.895 14 5 13.105 5 12 Z" id="a1190z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1191z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1190z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1190z" fill="rgba(0, 153, 255, 0.3)" clipPath="url(#a1191z)" strokeWidth="2" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 16 13" id="svg11088905614" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6.5 C 0 6.224 0.224 6 0.5 6 L 6 6 L 6 7 L 0.5 7 C 0.224 7 0 6.776 0 6.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10 6 L 15.5 6 C 15.776 6 16 6.224 16 6.5 L 16 6.5 C 16 6.776 15.776 7 15.5 7 L 10 7 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 5 2 C 5 0.895 5.895 0 7 0 L 9 0 C 10.105 0 11 0.895 11 2 L 11 11 C 11 12.105 10.105 13 9 13 L 7 13 C 5.895 13 5 12.105 5 11 Z" id="a1196z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1197z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1196z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1196z" fill="rgba(0, 153, 255, 0.3)" clipPath="url(#a1197z)" strokeWidth="2" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 16 14" id="svg9061832849" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 13.5 C 0 13.224 0.224 13 0.5 13 L 15.5 13 C 15.776 13 16 13.224 16 13.5 L 16 13.5 C 16 13.776 15.776 14 15.5 14 L 0.5 14 C 0.224 14 0 13.776 0 13.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 5 2 C 5 0.895 5.895 0 7 0 L 9 0 C 10.105 0 11 0.895 11 2 L 11 9 C 11 10.105 10.105 11 9 11 L 7 11 C 5.895 11 5 10.105 5 9 Z" id="a1200z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1201z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1200z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1200z" fill="rgba(0, 153, 255, 0.3)" clipPath="url(#a1201z)" strokeWidth="2" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 12 16" id="svg12447094736" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 0.5 C 0 0.224 0.224 0 0.5 0 L 0.5 0 C 0.776 0 1 0.224 1 0.5 L 1 15.5 C 1 15.776 0.776 16 0.5 16 L 0.5 16 C 0.224 16 0 15.776 0 15.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 11 0.5 C 11 0.224 11.224 0 11.5 0 L 11.5 0 C 11.776 0 12 0.224 12 0.5 L 12 15.5 C 12 15.776 11.776 16 11.5 16 L 11.5 16 C 11.224 16 11 15.776 11 15.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 3 5 C 3 3.895 3.895 3 5 3 L 7 3 C 8.105 3 9 3.895 9 5 L 9 11 C 9 12.105 8.105 13 7 13 L 5 13 C 3.895 13 3 12.105 3 11 Z" id="a1206z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1207z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1206z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1206z" fill="rgba(0, 153, 255, 0.3)" clipPath="url(#a1207z)" strokeWidth="2" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 16 12" id="svg9603117471" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 0.5 C 0 0.224 0.224 0 0.5 0 L 15.5 0 C 15.776 0 16 0.224 16 0.5 L 16 0.5 C 16 0.776 15.776 1 15.5 1 L 0.5 1 C 0.224 1 0 0.776 0 0.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 0 11.5 C 0 11.224 0.224 11 0.5 11 L 15.5 11 C 15.776 11 16 11.224 16 11.5 L 16 11.5 C 16 11.776 15.776 12 15.5 12 L 0.5 12 C 0.224 12 0 11.776 0 11.5 Z" fill={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <path d="M 3 5 C 3 3.895 3.895 3 5 3 L 11 3 C 12.105 3 13 3.895 13 5 L 13 7 C 13 8.105 12.105 9 11 9 L 5 9 C 3.895 9 3 8.105 3 7 Z" id="a1212z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              <clipPath id="a1213z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <use href="#a1212z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </clipPath>
            </defs>
            <use href="#a1212z" fill="rgba(0, 153, 255, 0.3)" clipPath="url(#a1213z)" strokeWidth="2" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 22 22" id="svg12043463449" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.5 8.25 L 4.854 10.896 C 4.658 11.092 4.658 11.408 4.854 11.604 L 7.5 14.25" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 14.5 8.25 L 17.146 10.896 C 17.342 11.092 17.342 11.408 17.146 11.604 L 14.5 14.25" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 6 11.25 L 16 11.25" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg10174097786" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g transform="translate(0.25 0.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0.25, 0.25)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 4 0.75 C 4 0.336 4.336 0 4.75 0 C 5.164 0 5.5 0.336 5.5 0.75 L 5.5 8.75 C 5.5 9.164 5.164 9.5 4.75 9.5 C 4.336 9.5 4 9.164 4 8.75 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 4.75 C 0 4.336 0.336 4 0.75 4 L 8.75 4 C 9.164 4 9.5 4.336 9.5 4.75 C 9.5 5.164 9.164 5.5 8.75 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg8667102793" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 5 L 3.375 3.5 C 3.741 3.208 4.259 3.208 4.625 3.5 L 6.5 5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg10008818775" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 3 L 3.375 4.5 C 3.741 4.792 4.259 4.792 4.625 4.5 L 6.5 3" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg9219629311" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.25 1.25 C 2.145 1.25 1.25 2.145 1.25 3.25 L 1.25 8.75 C 1.25 9.855 2.145 10.75 3.25 10.75 L 8.75 10.75 C 9.855 10.75 10.75 9.855 10.75 8.75 L 10.75 3.25 C 10.75 2.145 9.855 1.25 8.75 1.25 Z" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg12758152921" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.25 4 L 1.25 3.25 C 1.25 2.145 2.145 1.25 3.25 1.25 L 4 1.25" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 1.25 8 L 1.25 8.75 C 1.25 9.855 2.145 10.75 3.25 10.75 L 4 10.75" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.75 4 L 10.75 3.25 C 10.75 2.145 9.855 1.25 8.75 1.25 L 8 1.25" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 10.75 8 L 10.75 8.75 C 10.75 9.855 9.855 10.75 8.75 10.75 L 8 10.75" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg9542768051" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g transform="translate(0.5 0.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0.5, 0.5)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 2.5 0.75 C 2.5 0.336 2.836 0 3.25 0 L 7.75 0 C 8.164 0 8.5 0.336 8.5 0.75 C 8.5 1.164 8.164 1.5 7.75 1.5 L 3.25 1.5 C 2.836 1.5 2.5 1.164 2.5 0.75 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 9.5 3.25 C 9.5 2.836 9.836 2.5 10.25 2.5 C 10.664 2.5 11 2.836 11 3.25 L 11 7.75 C 11 8.164 10.664 8.5 10.25 8.5 C 9.836 8.5 9.5 8.164 9.5 7.75 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 2.5 10.25 C 2.5 9.836 2.836 9.5 3.25 9.5 L 7.75 9.5 C 8.164 9.5 8.5 9.836 8.5 10.25 C 8.5 10.664 8.164 11 7.75 11 L 3.25 11 C 2.836 11 2.5 10.664 2.5 10.25 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 3.25 C 0 2.836 0.336 2.5 0.75 2.5 C 1.164 2.5 1.5 2.836 1.5 3.25 L 1.5 7.75 C 1.5 8.164 1.164 8.5 0.75 8.5 C 0.336 8.5 0 8.164 0 7.75 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg9145490136" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.75 4 L 7.75 8" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 4.25 3 L 4.25 9" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 0.75 1.5 L 0.75 10.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 11.25 5.5 L 11.25 6.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg9568578651" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g transform="translate(1.25 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.25, 1)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 6 L 3.439 9.439 C 4.025 10.025 4.975 10.025 5.561 9.439 L 9 6" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 4.5 9.5 L 4.5 0" fill="transparent" strokeWidth="1.5" stroke={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10834631985" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 Z M 1.5 6 C 1.5 8.485 3.515 10.5 6 10.5 C 8.485 10.5 10.5 8.485 10.5 6 C 10.5 3.515 8.485 1.5 6 1.5 C 3.515 1.5 1.5 3.515 1.5 6 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} opacity="0.4" style={{ position: "static", display: "inline", flexDirection: "row", opacity: "0.4" } as CSSProperties} />
          <path d="M 0 6 C 0 2.686 2.686 0 6 0 C 6.414 0 6.75 0.336 6.75 0.75 C 6.75 1.164 6.414 1.5 6 1.5 C 3.515 1.5 1.5 3.515 1.5 6 C 1.5 8.485 3.515 10.5 6 10.5 C 6.414 10.5 6.75 10.836 6.75 11.25 C 6.75 11.664 6.414 12 6 12 C 2.686 12 0 9.314 0 6 Z" fill={"var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255)) /* {\"name\":\"Icon 100\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10315723596" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 10 L 3.939 6.061 C 4.525 5.475 4.525 4.525 3.939 3.939 L 0 0" transform="translate(3.5 1) rotate(90 2.5 5)" fill="transparent" strokeWidth="2" stroke={"var(--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3, rgba(255, 255, 255, 0.6)) /* {\"name\":\"White 60\"} */"} strokeLinecap="round" strokeLinejoin="round" opacity="0" style={{ position: "static", display: "inline", flexDirection: "row", opacity: "0", transform: "matrix(0, 1, -1, 0, 11, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg12145085063" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.383 17.372 C 2.123 17.792 0.979 16.488 1.56 15.293 L 7.202 3.697 C 7.931 2.197 10.069 2.197 10.798 3.697 L 16.44 15.293 C 17.021 16.488 15.877 17.792 14.617 17.372 L 9.632 15.711 C 9.222 15.574 8.778 15.574 8.368 15.711 Z" transform="translate(4 4) rotate(-45 9 9.25)" fill="rgba(255, 255, 255, 0.2)" strokeWidth="2" stroke="var(--token-1ff51228-9678-411c-9a08-00381f0fc70b, rgb(255, 255, 255))" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0.0953012, 13.0732)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg9096210115" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 14.352 23.648 C 18.526 24.597 22.5 21.424 22.5 17.144 L 22.5 10.5 C 22.5 9.672 21.828 9 21 9 L 21 9 C 20.172 9 19.5 9.672 19.5 10.5 L 19.5 13 L 19.5 14 L 19.5 14 L 19.5 8.5 C 19.5 7.672 18.828 7 18 7 L 18 7 C 17.172 7 16.5 7.672 16.5 8.5 L 16.5 14 L 16.5 14 L 16.5 7.5 C 16.5 6.672 15.828 6 15 6 L 15 6 C 14.172 6 13.5 6.672 13.5 7.5 L 13.5 14 L 13.5 14 L 13.5 9.5 C 13.5 8.672 12.828 8 12 8 L 12 8 C 11.172 8 10.5 8.672 10.5 9.5 L 10.5 14 L 10.5 14.566 C 10.5 15.013 9.926 15.197 9.667 14.833 L 8.93 13.803 C 8.425 13.095 7.429 12.957 6.75 13.5 L 6.75 13.5 C 6.048 14.062 5.905 15.073 6.423 15.808 L 9.951 20.806 C 10.948 22.218 12.433 23.212 14.119 23.595 Z" fill="rgba(153, 153, 153, 0.2)" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg9493335331" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 15 7 C 19.418 7 23 10.582 23 15 C 23 19.418 19.418 23 15 23 L 9 23 C 7.895 23 7 22.105 7 21 L 7 15 C 7 10.582 10.582 7 15 7 Z" fill="rgba(153, 153, 153, 0.2)" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 30 30" id="svg12425621608" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 15 23.5 C 10.306 23.5 6.5 19.694 6.5 15 C 6.5 12.796 7.339 10.787 8.716 9.277 C 9.404 8.521 10.226 7.891 11.145 7.422 C 11.605 7.188 12.088 6.994 12.591 6.846 L 12.682 6.828 C 13.337 6.701 13.885 7.329 13.67 7.961 L 13.67 7.961 C 13.559 8.456 13.5 8.971 13.5 9.5 C 13.5 13.366 16.634 16.5 20.5 16.5 C 21.029 16.5 21.544 16.441 22.039 16.33 L 22.039 16.33 C 22.671 16.115 23.299 16.663 23.172 17.318 L 23.154 17.409 C 23.08 17.66 22.994 17.907 22.898 18.148 C 22.802 18.389 22.695 18.625 22.578 18.855 C 22.109 19.774 21.479 20.596 20.723 21.284 C 19.213 22.661 17.204 23.5 15 23.5 Z" fill="rgba(153, 153, 153, 0.2)" strokeWidth="2" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg10018820250" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 2.293 3.707 C 2.683 3.317 2.683 2.683 2.293 2.293 L 0 0" transform="translate(2.5 1) rotate(90 1.5 3)" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 7, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg10994104066" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 2.293 3.707 C 2.683 3.317 2.683 2.683 2.293 2.293 L 0 0" transform="translate(2.5 1) rotate(90 1.5 3)" fill="transparent" strokeWidth="1.5" stroke={"var(--token-80b6d9ee-6797-4273-85d5-55a0c0e39c2c, rgb(102, 102, 102)) /* {\"name\":\"Icon 40\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 7, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 19.5 19.5" id="svg11460081331" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6.181 0.73 C 5.987 0.402 5.513 0.402 5.319 0.73 L 0.652 8.644 C 0.421 9.036 0.793 9.509 1.229 9.376 L 5.75 8 L 10.271 9.376 C 10.707 9.509 11.079 9.036 10.848 8.644 Z" transform="translate(2.75 3.75) rotate(-45 5.75 5)" fill={"var(--token-ded025fa-15dd-4c1c-94f4-aee06d7d238a, rgba(153, 153, 153, 0.2)) /* {\"name\":\"Icon 60 Transparent\"} */"} strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0.898602, 9.28033)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 19.5 19.5" id="svg11855643982" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g transform="translate(4.75 4.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 4.75, 4.75)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 5 0 L 5 10" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 5 L 10 5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 19.5 19.5" id="svg10115357809" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4.75 9.5 L 9.043 5.207 C 9.433 4.817 10.067 4.817 10.457 5.207 L 14.75 9.5" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 9.75 6.253 L 9.75 14.753" fill="transparent" strokeWidth="1.5" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153)) /* {\"name\":\"Icon 60\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10978486602" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.5 7 L 3.5 3" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 5 8.5 L 5.5 8.5 C 7.157 8.5 8.5 7.157 8.5 5.5 L 8.5 5.5" fill="transparent" stroke={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 8.5 2 C 9.605 2 10.5 2.895 10.5 4 C 10.5 5.105 9.605 6 8.5 6 C 7.395 6 6.5 5.105 6.5 4 C 6.5 2.895 7.395 2 8.5 2 Z M 7.5 4 C 7.5 4.552 7.948 5 8.5 5 C 9.052 5 9.5 4.552 9.5 4 C 9.5 3.448 9.052 3 8.5 3 C 7.948 3 7.5 3.448 7.5 4 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 3.5 6.5 C 4.605 6.5 5.5 7.395 5.5 8.5 C 5.5 9.605 4.605 10.5 3.5 10.5 C 2.395 10.5 1.5 9.605 1.5 8.5 C 1.5 7.395 2.395 6.5 3.5 6.5 Z M 2.5 8.5 C 2.5 9.052 2.948 9.5 3.5 9.5 C 4.052 9.5 4.5 9.052 4.5 8.5 C 4.5 7.948 4.052 7.5 3.5 7.5 C 2.948 7.5 2.5 7.948 2.5 8.5 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 8.5 2.5 C 9.328 2.5 10 3.172 10 4 C 10 4.828 9.328 5.5 8.5 5.5 C 7.672 5.5 7 4.828 7 4 C 7 3.172 7.672 2.5 8.5 2.5 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} opacity="0.2" style={{ position: "static", display: "inline", flexDirection: "row", opacity: "0.2" } as CSSProperties} />
          <path d="M 3.5 7 C 4.328 7 5 7.672 5 8.5 C 5 9.328 4.328 10 3.5 10 C 2.672 10 2 9.328 2 8.5 C 2 7.672 2.672 7 3.5 7 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} opacity="0.2" style={{ position: "static", display: "inline", flexDirection: "row", opacity: "0.2" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10540339860" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 4.75 C 2.19 4.75 2.75 5.31 2.75 6 C 2.75 6.69 2.19 7.25 1.5 7.25 C 0.81 7.25 0.25 6.69 0.25 6 C 0.25 5.31 0.81 4.75 1.5 4.75 Z M 6 4.75 C 6.69 4.75 7.25 5.31 7.25 6 C 7.25 6.69 6.69 7.25 6 7.25 C 5.31 7.25 4.75 6.69 4.75 6 C 4.75 5.31 5.31 4.75 6 4.75 Z M 10.5 4.75 C 11.19 4.75 11.75 5.31 11.75 6 C 11.75 6.69 11.19 7.25 10.5 7.25 C 9.81 7.25 9.25 6.69 9.25 6 C 9.25 5.31 9.81 4.75 10.5 4.75 Z" fill={"var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(135, 135, 135)) /* {\"name\":\"Icon 53\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
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
        <svg viewBox="0 0 10 10" id="svg11271281936" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.5 1.5 L 1.5 8.5 M 1.5 1.5 L 8.5 8.5" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg10101970430" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 9.5 2.5 L 2.5 9.5 M 2.5 2.5 L 9.5 9.5" fill="transparent" strokeWidth="1.5" stroke="var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 12 12" id="svg11324189933" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 5 0 C 7.761 0 10 2.239 10 5 C 10 6.046 9.679 7.017 9.13 7.819 L 11.164 9.854 C 11.457 10.146 11.457 10.621 11.164 10.914 C 10.871 11.207 10.396 11.207 10.104 10.914 L 8.107 8.918 C 7.254 9.595 6.174 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z M 1.5 5 C 1.5 6.933 3.067 8.5 5 8.5 C 6.933 8.5 8.5 6.933 8.5 5 C 8.5 3.067 6.933 1.5 5 1.5 C 3.067 1.5 1.5 3.067 1.5 5 Z" fill="var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg11695272811" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8 2 L 2 8 M 2 2 L 8 8" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 9.5 9.5" overflow="visible" id="svg1157502715_588" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 4.75 0 C 7.373 0 9.5 2.127 9.5 4.75 C 9.5 7.373 7.373 9.5 4.75 9.5 C 2.127 9.5 0 7.373 0 4.75 C 0 2.127 2.127 0 4.75 0 Z" fill="var(--token-5964e09d-3671-4c80-a557-31c1772b6c22, rgb(153, 153, 153))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 4.75 7 L 4.75 2.5 M 7 4.75 L 2.5 4.75" fill="transparent" strokeWidth="1.5" stroke="var(--token-5e2a9781-f258-43f3-ae02-0a76276a5519, rgb(8, 8, 8))" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg10854745354" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 6.5 L 6.5 1.5" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 6.5 6.5 L 1.5 1.5" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg width="212" height="212" fill="none" id="svg589146243_343" style={{ width: "212px", height: "212px", position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="m106 0 15.494 68.594 59.459-37.547-37.547 59.459L212 106l-68.594 15.494 37.547 59.459-59.459-37.547L106 212l-15.494-68.594-59.46 37.547 37.548-59.459L0 106l68.594-15.494-37.547-59.46 59.459 37.548L106 0Z" fill="#fff" style={{ position: "static", display: "inline", flexDirection: "row", fill: "#fff", fillOpacity: "1" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 8 8" id="svg9001655077" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6 L 3 3 L 0 0" transform="translate(2.5 1) rotate(90 1.5 3)" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 7, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 14.33 23.84" overflow="visible" id="svg-1358190970_1975" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 2.073 0.359 L 13.649 11.96 C 15.103 13.418 14.072 15.907 12.013 15.907 L 10.323 15.907 L 12.002 19.895 C 12.296 20.594 12.3 21.367 12.014 22.07 C 11.731 22.77 11.179 23.328 10.481 23.617 C 9.786 23.91 9.003 23.914 8.305 23.629 C 7.606 23.344 7.05 22.793 6.758 22.098 L 4.994 17.904 L 3.845 18.923 C 2.352 20.244 0 19.185 0 17.19 L 0 1.216 C 0 0.134 1.308 -0.408 2.073 0.36 Z" id="svg-1358190970_1975_a3394z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg-1358190970_1975_a3396z" filterUnits="objectBoundingBox" x="-58.6%" y="-43.6%" width="217.2%" height="187.2%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="2" in="SourceAlpha" result="a3399z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="2" in="a3399z" result="a3400z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a3401z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a3401z" in2="a3400z" operator="in" result="a3397z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg-1358190970_1975_a3398z" x="-58.6%" y="-43.6%" width="217.2%" height="187.2%" style={{ width: "217.2%", height: "187.2%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-58.6%" y="-43.6%" width="217.2%" height="187.2%" fill="white" style={{ width: "31.1248px", height: "44.6285px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg-1358190970_1975_a3394z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg-1358190970_1975_a3396z)" mask="url(#svg-1358190970_1975_a3398z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg-1358190970_1975_a3396z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg-1358190970_1975_a3394z" clipPath="url(#svg-1358190970_1975_a3395z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg-1358190970_1975_a3394z" fill="var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" clipPath="url(#svg-1358190970_1975_a3395z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
            <path d="M 1.381 2.276 C 1.381 2.094 1.601 2.003 1.726 2.131 L 12.65 13.076 C 12.921 13.346 13.002 13.754 12.855 14.108 C 12.709 14.461 12.363 14.692 11.98 14.691 L 8.246 14.688 L 10.731 20.593 C 11.045 21.339 10.695 22.197 9.95 22.51 C 9.205 22.824 8.346 22.474 8.033 21.729 L 5.524 15.757 L 2.955 18.032 C 2.695 18.261 2.331 18.33 2.005 18.211 C 1.679 18.093 1.444 17.806 1.392 17.463 L 1.382 17.325 L 1.382 2.274 Z" fill="var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg viewBox="0 0 10 10" id="svg10978743661" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.25 2 L 2.25 8 M 2.25 2 L 8.25 8" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        {" "}
        <svg viewBox="0 0 16 20" id="svg10770409774" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 9 13 L 11 15 M 5.5 5 C 7.985 5 10 7.015 10 9.5 C 10 11.985 7.985 14 5.5 14 C 3.015 14 1 11.985 1 9.5 C 1 7.015 3.015 5 5.5 5 Z" fill="transparent" strokeWidth="1.5" stroke="var(--token-8015ce2b-ef6f-4fe0-944b-b61f872d0501, rgb(153, 153, 153))" strokeLinecap="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
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
        <svg id="1184508750" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" id="yWvBZM3cg" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6.812 6.83 C 5.25 8.391 2.718 8.39 1.157 6.828 C -0.405 5.266 -0.405 2.734 1.157 1.172 C 2.718 -0.39 5.25 -0.391 6.812 1.17" fill="transparent" id="hGfwFfnW8" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8.018 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 8.018, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2458882080" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3.609 L 0.303 3.061 C 1.35 1.172 3.34 0 5.5 0 L 5.5 0 C 7.66 0 9.65 1.172 10.697 3.061 L 11 3.609" fill="transparent" id="ZJ3NhD5NK" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4.5 14)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 4.5, 14)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="PMrgT3meu" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="95487542" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 8 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 10 C 16 11.657 14.657 13 13 13 L 3 13 C 1.343 13 0 11.657 0 10 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="jYlNOZP6c" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 2.5" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="xoTnp1cUB" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 2.5" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="WB9hnEF0c" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(14 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 14, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1825208344" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="DUPc5oIsM" transform="translate(3 3) rotate(-90 7 6.979)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, -1, 1, 0, 3.021, 16.979)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 7.414 L 6.273 0.77 C 6.668 0.352 7.332 0.352 7.727 0.77 L 14 7.414" fill="transparent" id="Fb3UNma2k" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 7) rotate(180 7 3.707)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 14, 14.414)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 13.5 L 0 0" fill="transparent" id="xsId7KutQ" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 0) rotate(180 0.5 6.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 7, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="919011021" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.393 1.496 C 7.453 0.653 8.155 0 9 0 L 9 0 C 9.845 0 10.547 0.653 10.607 1.496 L 10.615 1.615 C 10.836 4.706 13.294 7.164 16.385 7.385 L 16.504 7.393 C 17.347 7.453 18 8.155 18 9 L 18 9 C 18 9.845 17.347 10.547 16.504 10.607 L 16.385 10.615 C 13.294 10.836 10.836 13.294 10.615 16.385 L 10.607 16.504 C 10.547 17.347 9.845 18 9 18 L 9 18 C 8.155 18 7.453 17.347 7.393 16.504 L 7.385 16.385 C 7.164 13.294 4.706 10.836 1.615 10.615 L 1.496 10.607 C 0.653 10.547 0 9.845 0 9 L 0 9 C 0 8.155 0.653 7.453 1.496 7.393 L 1.615 7.385 C 4.706 7.164 7.164 4.706 7.385 1.615 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Yx3KDFIth" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg display="block" id="4040990040" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 4 C 0 1.791 1.791 0 4 0 L 12 0 C 14.209 0 16 1.791 16 4 L 16 12 C 16 14.209 14.209 16 12 16 L 4 16 C 1.791 16 0 14.209 0 12 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="tyFcx5Hpz" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6 0 C 6 1.657 4.657 3 3 3 C 1.343 3 0 1.657 0 0" fill="transparent" id="ihAmyvfyF" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(7 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 7, 7)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1312992605" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="tq7KJh3dd" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="xSuCcKEbe" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 8.56 0 L 11.205 5.359 L 17.119 6.219 L 12.839 10.391 L 13.85 16.281 L 8.56 13.5 L 3.269 16.281 L 4.28 10.391 L 0 6.219 L 5.914 5.359 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="BLvUYOyFL" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1.44 1.859)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.44, 1.859)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="2145128083" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6.791 3.5 L 5.791 3.167 C 4.492 2.734 3.089 2.734 1.791 3.167 L 1.791 3.167 C -0.799 4.03 -0.505 7.784 2.188 8.233 L 5.393 8.767 C 8.086 9.216 8.38 12.97 5.791 13.833 L 5.791 13.833 C 4.492 14.266 3.089 14.266 1.791 13.833 L 0.791 13.5 M 3.791 0 L 3.791 2.5 M 3.791 14.5 L 3.791 17" fill="transparent" id="pNXJtKIat" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.209 1.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6.209, 1.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="920653936" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 9.5 0 L 9.832 1.129 C 11.184 5.726 10.118 10.695 7 14.333 L 7 14.333 C 6.474 14.947 5.526 14.947 5 14.333 L 5 14.333 C 1.882 10.695 0.816 5.726 2.168 1.129 L 2.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="NILXUFy2o" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4 1) rotate(180 6 7.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 16, 16.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 3.5 L 1.297 2.492 C 2.738 1.371 4.854 2.204 5.143 4.007 L 5.241 4.618 C 5.682 7.366 4.114 10.042 1.5 11 L 1.5 11" fill="transparent" id="N3FMfH7e5" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 9) rotate(180 3 5.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 7, 20)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6 3.5 L 4.703 2.492 C 3.262 1.371 1.146 2.204 0.857 4.007 L 0.759 4.618 C 0.318 7.366 1.886 10.042 4.5 11 L 4.5 11" fill="transparent" id="w2mkobRwq" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(13 9) rotate(180 3 5.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 19, 20)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3112628790" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="nlSrohSU_" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="KsCrzTmH6" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 3.383 17.372 C 2.123 17.792 0.979 16.488 1.56 15.293 L 7.202 3.697 C 7.931 2.197 10.069 2.197 10.798 3.697 L 16.44 15.293 C 17.021 16.488 15.877 17.792 14.617 17.372 L 9.632 15.711 C 9.222 15.574 8.778 15.574 8.368 15.711 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="B1gctVLSo" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(-1.5 -1.5) rotate(-45 9 9.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, -5.4047, 7.57322)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="102597446" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 2.726 1.636 C 1.526 0.916 0 1.78 0 3.179 L 0 14.821 C 0 16.22 1.526 17.084 2.726 16.364 L 12.428 10.543 C 13.593 9.844 13.593 8.156 12.428 7.457 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="jwhVgqsrf" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg display="block" id="4290634540" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="MjRrmzIjk" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="Gn3kAthqr" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 1 C 0 0.448 0.448 0 1 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 1 C 18 1.552 17.552 2 17 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="jZTFs0P0O" transform="translate(1 18)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 18)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 14.172 C 6 14.702 5.789 15.211 5.414 15.586 L 3.707 17.293 C 3.317 17.683 2.683 17.683 2.293 17.293 L 0.586 15.586 C 0.211 15.211 0 14.702 0 14.172 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="kImnoC2SX" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(5.5 -0.5) rotate(45 3 9)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, 0.707107, -0.707107, 0.707107, 12.7426, 0.0147186)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="2642697163" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.351 0.553 C 8.725 0.234 9.275 0.234 9.649 0.553 L 11.509 2.138 C 11.669 2.275 11.868 2.357 12.078 2.374 L 14.514 2.568 C 15.004 2.607 15.393 2.996 15.432 3.486 L 15.626 5.922 C 15.643 6.132 15.725 6.331 15.862 6.491 L 17.447 8.351 C 17.766 8.725 17.766 9.275 17.447 9.649 L 15.862 11.509 C 15.725 11.669 15.643 11.868 15.626 12.078 L 15.432 14.514 C 15.393 15.004 15.004 15.393 14.514 15.432 L 12.078 15.626 C 11.868 15.643 11.669 15.725 11.509 15.862 L 9.649 17.447 C 9.275 17.766 8.725 17.766 8.351 17.447 L 6.491 15.862 C 6.331 15.725 6.132 15.643 5.922 15.626 L 3.486 15.432 C 2.996 15.393 2.607 15.004 2.568 14.514 L 2.374 12.078 C 2.357 11.868 2.275 11.669 2.138 11.509 L 0.553 9.649 C 0.234 9.275 0.234 8.725 0.553 8.351 L 2.138 6.491 C 2.275 6.331 2.357 6.132 2.374 5.922 L 2.568 3.486 C 2.607 2.996 2.996 2.607 3.486 2.568 L 5.922 2.374 C 6.132 2.357 6.331 2.275 6.491 2.138 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="TFoVo3jqg" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg id="3559153988" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 12 L 0 0 L 16.5 0 L 16.5 12 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" id="gwB_ZdJt6" transform="translate(3.75 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 16.5 0" fill="transparent" id="xGkn4qbwc" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 12)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 16.5 0" fill="transparent" id="uQ9bOFKFt" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 16.5 0" fill="transparent" id="hrURkUe9P" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 18)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 18)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1642661144" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7.316 0.282 C 7.371 0.198 7.5 0.237 7.5 0.336 L 7.5 6.5 L 14.077 6.5 C 14.474 6.5 14.713 6.941 14.496 7.273 L 7.684 17.718 C 7.629 17.802 7.5 17.763 7.5 17.664 L 7.5 11.5 L 0.923 11.5 C 0.526 11.5 0.287 11.059 0.504 10.727 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="JLnAV7wPe" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.5 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="4209924379" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 5 L 5.174 5 C 5.851 2.133 8.426 0 11.5 0 C 15.09 0 18 2.91 18 6.5 C 18 10.09 15.09 13 11.5 13 L 4 13 C 1.791 13 0 11.209 0 9 C 0 6.791 1.791 5 4 5 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Pmy4ozTPP" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1635548955" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 7 C 14 8.657 12.657 10 11 10 L 3 10 C 1.343 10 0 8.657 0 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="AdeKayc7d" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 7)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 10 3.5 L 10 3 C 10 1.343 8.657 0 7 0 L 3 0 C 1.343 0 0 1.343 0 3 L 0 7" fill="transparent" id="Ax6FRJvk6" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="881773478" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="SMM7MgBJf" transform="translate(6 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 12 16 L 8 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 L 0 8 C 0 3.582 3.582 0 8 0 L 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 L 16 9.25 C 16 10.493 14.993 11.5 13.75 11.5 L 13.75 11.5 C 12.507 11.5 11.5 10.493 11.5 9.25 L 11.5 8 L 11.5 8 C 11.5 6.067 9.933 4.5 8 4.5 L 8 4.5 L 8 4.5 C 6.067 4.5 4.5 6.067 4.5 8 L 4.5 8 L 4.5 8 C 4.5 9.933 6.067 11.5 8 11.5 L 8 11.5 L 8 11.5 C 9.933 11.5 11.5 9.933 11.5 8 L 11.5 8" fill="transparent" id="FYPv_MPlc" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1770930775" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="nMTYSAq1r" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="hvRKkEQ3N" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="BkASqP34G" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 2.5 L 2.333 5 L 7 0" fill="transparent" id="zmUNotVlH" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 8) rotate(360 3.5 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6.5, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="2330263925" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="m_7BCXUc9" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 4 M 0 4 L 4 4" fill="transparent" id="l5vGPS0a0" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="673751299" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="f94NMRDup" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(12 11)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 12, 11)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="FeRO9ZKVf" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 11)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 11)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Gy68xnuPv" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6.5, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1218162679" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="nccNel0fJ" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 16 0" fill="rgba(136, 136, 136, 0.2)" id="JYauSZ_tN" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 10)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 10)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 16" fill="rgba(136, 136, 136, 0.2)" id="WFBrjlGD_" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="587222984" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8.501 0 C 13.196 0 17.001 3.806 17.001 8.501 C 17.001 13.196 13.195 17.001 8.5 17.001 C 3.805 17.001 0 13.195 0 8.5 C 0 3.805 3.806 0 8.501 0 Z M 2.001 8.5 C 2.001 11.215 3.689 13.645 6.233 14.593 C 5.479 13.126 5.001 10.941 5.001 8.5 C 5.001 6.059 5.479 3.874 6.233 2.407 C 3.689 3.355 2.001 5.785 2.001 8.5 Z M 15.001 8.5 C 15.001 5.785 13.313 3.355 10.769 2.407 C 11.523 3.874 12.001 6.059 12.001 8.5 C 12.001 10.941 11.523 13.126 10.769 14.593 C 13.313 13.645 15.001 11.215 15.001 8.5 Z M 6.501 8.5 C 6.501 12.09 7.396 15 8.501 15 C 9.606 15 10.501 12.09 10.501 8.5 C 10.501 4.91 9.606 2 8.501 2 C 7.396 2 6.501 4.91 6.501 8.5 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="i4i8H9Zao" transform="translate(1.5 1.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.5, 1.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 0 C 4.277 0.987 8.723 0.987 13 0 L 13 0" fill="transparent" id="lTo6Obt5s" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 9.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 9.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 7 0 C 10.866 0 14 3.134 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="bNnSt6Y2K" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="734873119" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7 0 C 10.866 0 14 3.134 14 7 C 14 10.866 10.866 14 7 14 C 6.034 14 3.267 14 3.267 14 L 2 14 C 0.895 14 0 13.105 0 12 L 0 10.267 C 0 10.267 0 7.966 0 7 C 0 3.134 3.134 0 7 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="FwpLe_zxq" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 3.793) rotate(135 7 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-0.707107, 0.707107, -0.707107, -0.707107, 19.8995, 10.793)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3983927620" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 7 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 7 C 14 8.657 12.657 10 11 10 L 3 10 C 1.343 10 0 8.657 0 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="TJgu9bozd" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 8)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 8 5 L 8 4 C 8 1.791 6.209 0 4 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 5" fill="transparent" id="WUdG9cSLB" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1142937281" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 7.952 C 0 6.9 0.483 5.906 1.31 5.256 L 6.588 1.11 C 7.417 0.458 8.583 0.458 9.412 1.11 L 14.69 5.256 C 15.517 5.906 16 6.9 16 7.952 L 16 13.143 C 16 15.036 14.465 16.571 12.571 16.571 L 3.429 16.571 C 1.535 16.571 0 15.036 0 13.143 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="G9b2Z7Cdx" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 1.46)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 1.46)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 1 C 0 0.448 0.448 0 1 0 L 1 0 C 1.552 0 2 0.448 2 1 L 2 7 C 2 7.552 1.552 8 1 8 L 1 8 C 0.448 8 0 7.552 0 7 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="PfMaDa8BH" transform="translate(9 11)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 9, 11)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3788105446" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4.5 0 C 6.624 0 8.112 1.472 8.5 3.451 C 8.888 1.472 10.376 0 12.5 0 C 14.986 0 17 2.015 17 4.5 C 17 11.985 8.5 15.5 8.5 15.5 L 8.5 15.5 L 8.5 15.5 C 8.5 15.5 0 11.985 0 4.5 C 0 2.015 2.015 0 4.5 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="wAsIjRFry" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1.5 2.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.5, 2.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="4111896214" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="CYaQwZbzZ" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="PrXejxNaf" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(11 12)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 11, 12)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 8 0 L 0 0" fill="transparent" id="d6zlxg5W4" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(9 5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 9, 5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 8 0 L 0 0" fill="transparent" id="NPLFDpU23" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 15)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 15)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg display="block" id="3899503700" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="B1xT_zB1_" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 3.086 L 2.793 0.293 C 3.183 -0.098 3.817 -0.098 4.207 0.293 L 7 3.086 M 3.5 1.086 L 3.5 7.086" fill="transparent" id="y6myV9DAS" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6.5 6.414)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6.5, 6.414)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1233119128" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1 5 C 0.448 5 0 4.552 0 4 C 0 3.448 0.448 3 1 3 L 3 3 L 3 1 C 3 0.448 3.448 0 4 0 C 4.552 0 5 0.448 5 1 L 5 3 L 7 3 C 7.552 3 8 3.448 8 4 C 8 4.552 7.552 5 7 5 L 5 5 L 5 7 C 5 7.552 4.552 8 4 8 C 3.448 8 3 7.552 3 7 L 3 5 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="ahQWkrM9h" transform="translate(11.25 11.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 11.25, 11.25)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0.447 5.995 C 0.25 6.328 0.49 6.75 0.877 6.75 L 7.123 6.75 C 7.51 6.75 7.75 6.328 7.553 5.995 L 4.43 0.726 C 4.236 0.399 3.764 0.399 3.57 0.726 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="yakv94JR1" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 3.25 C 0 1.455 1.455 0 3.25 0 L 3.25 0 C 5.045 0 6.5 1.455 6.5 3.25 L 6.5 3.25 C 6.5 5.045 5.045 6.5 3.25 6.5 L 3.25 6.5 C 1.455 6.5 0 5.045 0 3.25 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="Rl4fxAWqB" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(11.75 1.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 11.75, 1.25)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3.22 0.53 C 3.513 0.237 3.987 0.237 4.28 0.53 L 6.97 3.22 C 7.263 3.513 7.263 3.987 6.97 4.28 L 4.28 6.97 C 3.987 7.263 3.513 7.263 3.22 6.97 L 0.53 4.28 C 0.237 3.987 0.237 3.513 0.53 3.22 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="tMhgx7OAm" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1.25 11.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1.25, 11.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1600769421" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="mE4Gq6pdY" transform="translate(3 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 3)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 7.414 L 6.273 0.77 C 6.668 0.352 7.332 0.352 7.727 0.77 L 14 7.414" fill="transparent" id="jzgkWR9FD" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0 7) rotate(180 7 3.707)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 14, 14.414)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 13.5 L 0 0" fill="transparent" id="b4WbiSFvQ" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(6 0) rotate(180 0.5 6.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(-1, 0, 0, -1, 7, 13.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="2979049749" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 15.972 9.68 C 15.886 9.403 15.629 9.215 15.338 9.217 L 15.159 9.249 C 12.787 9.905 10.246 9.234 8.506 7.492 C 6.767 5.751 6.098 3.209 6.756 0.837 C 6.772 0.79 6.781 0.741 6.78 0.691 C 6.798 0.477 6.707 0.269 6.538 0.137 C 6.37 0.004 6.146 -0.035 5.942 0.032 C 2.162 1.091 -0.324 4.698 0.034 8.608 C 0.392 12.518 3.491 15.614 7.401 15.969 C 11.311 16.324 14.916 13.836 15.972 10.055 C 16.013 9.933 16.013 9.802 15.972 9.68 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="KC15T0eYp" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3515536241" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="nLP0ehlyA" transform="translate(3 3) rotate(45 7 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0.707107, 0.707107, -0.707107, 0.707107, 10, 0.100505)", transformOrigin: "0px 0px" } as CSSProperties}>
            <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 11 C 14 12.657 12.657 14 11 14 L 3 14 C 1.343 14 0 12.657 0 11 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="ESWflNFdW" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 0 L 12.728 0" fill="rgba(136, 136, 136, 0.2)" id="HVsnIr89l" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(0.636 7)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 0.636, 7)", transformOrigin: "0px 0px" } as CSSProperties} />
            <path d="M 0 0 L 0 12.728" fill="rgba(136, 136, 136, 0.2)" id="AnbORyPRa" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(7 0.636)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 7, 0.636)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="729886507" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <g fill="transparent" id="zvliV7Sj9" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent" id="nEYrgXddc" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            <path d="M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="x3BvMmupu" strokeDasharray="5" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          </g>
        </svg>
        {" "}
        <svg display="block" id="3725031690" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 6.696 0.344 C 7.035 0.133 7.465 0.133 7.804 0.344 L 14.004 4.192 C 14.312 4.384 14.5 4.721 14.5 5.084 L 14.5 11.909 C 14.5 12.276 14.308 12.616 13.995 12.807 L 7.795 16.569 C 7.46 16.773 7.04 16.773 6.705 16.569 L 0.505 12.807 C 0.192 12.616 0 12.276 0 11.909 L 0 5.084 C 0 4.721 0.188 4.384 0.496 4.192 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="odIny5xAj" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.75 1.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.75, 1.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 7 4 L 13.5 0" fill="transparent" id="UTPwZytmj" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 6)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 6)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 0 7.5" fill="transparent" id="ADRuiX0GT" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 10)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 10)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3093666766" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1 0 L 11 0 C 11.552 0 12 0.448 12 1 L 12 11 M 11 1 L 0 12" fill="transparent" id="eO4UoQGwI" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(4 4)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 4, 4)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1300062582" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="GB5tuunfE" transform="translate(12 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 12, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="u0TsznuVW" transform="translate(1 12)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 12)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 10 L 10 0" fill="transparent" id="RieXyxB4F" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(5 5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 5, 5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="1924246079" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 8 C 0 3.582 3.582 0 8 0 L 8 0 C 12.418 0 16 3.582 16 8 L 16 8 C 16 12.418 12.418 16 8 16 L 8 16 C 3.582 16 0 12.418 0 8 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="JN7EBnZGj" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2712300145" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 0 L 6.5 0 L 6.5 6.5" fill="transparent" id="OjGlI8Qlc" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(10 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 10, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 6.5 6.5 L 0 6.5 L 0 0" fill="transparent" id="ejozTq3FD" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 10)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 10)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 13 L 13 0" fill="transparent" id="QOTpqNjAL" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3.5 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.5, 3.5)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="548003937" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 7 0 C 10.866 0 14 3.134 14 7 C 14 7 14 7 14 7 L 14 7 C 14 7.003 14 7.006 14 7.009 C 14 7.204 13.992 7.397 13.976 7.589 C 13.581 12.434 8.518 18 7 18 C 5.482 18 0.419 12.434 0.024 7.589 C 0.008 7.395 0 7.198 0 7 C 0 3.134 3.134 0 7 0 Z M 4 7 C 4 8.657 5.343 10 7 10 C 8.657 10 10 8.657 10 7 C 10 5.343 8.657 4 7 4 C 5.343 4 4 5.343 4 7 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="o48uZV2UO" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 1)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3, 1)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2684112889" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 7 L 6.293 0.707 C 6.683 0.317 7.317 0.317 7.707 0.707 L 14 7" fill="transparent" id="XYICZl7Mv" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(3 6.5) rotate(450 7 3.5)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(0, 1, -1, 0, 13.5, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="213763293" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 2.897 14 C 1.297 14 0 12.703 0 11.103 L 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 L 16 11.103 C 16 12.703 14.703 14 13.103 14 L 11 14 L 11 8 C 11 6.343 9.657 5 8 5 C 6.343 5 5 6.343 5 8 L 5 14 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="XTTB2Ir14" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 8 0 L 8 2 L 0 2 Z" fill="var(--1l3yetw, rgb(136, 136, 136))" id="Rb8YcVYV7" transform="translate(6 16)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 6, 16)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3500918179" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 8 C 0 3.582 3.582 0 8 0 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="RxA5u2sRg" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="3674388221" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 6.5 L 4 6.5 L 7 0 L 10.5 14 L 13.5 6.5 L 18 6.5" fill="transparent" id="XrVXzKI92" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(1 3)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 1, 3)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        {" "}
        <svg display="block" id="2101120830" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 3 C 0 1.343 1.343 0 3 0 L 13 0 C 14.657 0 16 1.343 16 3 L 16 13 C 16 14.657 14.657 16 13 16 L 3 16 C 1.343 16 0 14.657 0 13 Z" fill="var(--17kkcf8, rgba(136, 136, 136, 0.2))" id="J9s8JckJ9" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2 2)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2, 2)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 0 0 L 15 0" fill="rgba(136, 136, 136, 0.2)" id="udC18naxI" strokeDasharray="0" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeWidth="var(--1iwhep7, 2)" stroke="var(--1l3yetw, rgb(136, 136, 136))" transform="translate(2.5 10)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 2.5, 10)", transformOrigin: "0px 0px" } as CSSProperties} />
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
        <svg viewBox="0 0 10 10" id="svg11051818314" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 4 0.75 C 4 0.336 4.336 0 4.75 0 C 5.164 0 5.5 0.336 5.5 0.75 L 5.5 8.75 C 5.5 9.164 5.164 9.5 4.75 9.5 C 4.336 9.5 4 9.164 4 8.75 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 0 4.75 C 0 4.336 0.336 4 0.75 4 L 8.75 4 C 9.164 4 9.5 4.336 9.5 4.75 C 9.5 5.164 9.164 5.5 8.75 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        <svg viewBox="0 0 10 10" id="svg12431047333" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 0 1.75 C 0 1.336 0.336 1 0.75 1 L 9.25 1 C 9.664 1 10 1.336 10 1.75 L 10 1.75 C 10 2.164 9.664 2.5 9.25 2.5 L 0.75 2.5 C 0.336 2.5 0 2.164 0 1.75 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 2 5.25 C 2 4.836 2.336 4.5 2.75 4.5 L 7.25 4.5 C 7.664 4.5 8 4.836 8 5.25 L 8 5.25 C 8 5.664 7.664 6 7.25 6 L 2.75 6 C 2.336 6 2 5.664 2 5.25 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 2 8.75 C 2 8.336 2.336 8 2.75 8 L 7.25 8 C 7.664 8 8 8.336 8 8.75 L 8 8.75 C 8 9.164 7.664 9.5 7.25 9.5 L 2.75 9.5 C 2.336 9.5 2 9.164 2 8.75 Z" fill={"var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
        <svg viewBox="0 0 18.772 24.222" overflow="visible" id="svg667531508_6338" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 6.406 21.562 C 5.182 20.697 4.223 19.305 3.534 17.381 L 1.425 11.446 C 1.354 11.258 1.319 11.069 1.319 10.881 C 1.318 10.658 1.407 10.443 1.567 10.288 C 1.728 10.132 1.944 10.049 2.168 10.057 C 2.559 10.057 2.854 10.292 3.051 10.763 L 4.628 14.367 C 4.738 14.642 4.874 14.83 5.035 14.932 C 5.199 15.035 5.389 15.088 5.582 15.084 C 5.797 15.09 6.003 15.002 6.148 14.844 C 6.3 14.675 6.38 14.453 6.371 14.226 L 6.371 2.25 C 6.371 1.96 6.455 1.726 6.624 1.549 C 6.798 1.37 7.04 1.274 7.289 1.285 C 7.535 1.272 7.774 1.369 7.942 1.549 C 8.104 1.726 8.184 1.96 8.184 2.25 L 8.184 10.752 C 8.181 10.922 8.247 11.087 8.367 11.209 C 8.486 11.331 8.65 11.4 8.82 11.4 C 8.994 11.404 9.161 11.337 9.283 11.215 C 9.406 11.092 9.473 10.925 9.468 10.752 L 9.468 7.666 C 9.719 7.549 9.978 7.489 10.246 7.489 C 10.559 7.489 10.809 7.59 10.993 7.79 C 11.178 7.99 11.269 8.264 11.269 8.609 L 11.269 11.2 C 11.26 11.381 11.332 11.558 11.464 11.683 C 11.587 11.797 11.749 11.86 11.918 11.858 C 12.082 11.859 12.24 11.796 12.359 11.683 C 12.491 11.558 12.563 11.381 12.554 11.2 L 12.554 8.962 C 12.804 8.853 13.06 8.797 13.318 8.797 C 13.649 8.797 13.903 8.893 14.085 9.085 C 14.265 9.277 14.355 9.551 14.355 9.904 L 14.355 11.658 C 14.347 11.836 14.418 12.009 14.55 12.129 C 14.673 12.244 14.835 12.307 15.003 12.305 C 15.167 12.305 15.326 12.242 15.445 12.129 C 15.576 12.008 15.647 11.836 15.64 11.658 L 15.64 10.246 C 16.219 10.246 16.666 10.513 16.976 11.046 C 17.286 11.581 17.441 12.341 17.441 13.331 L 17.441 15.461 C 17.441 17.056 17.166 18.401 16.616 19.501 C 16.067 20.601 15.287 21.434 14.278 22.003 C 13.271 22.572 12.083 22.856 10.717 22.856 C 9.068 22.856 7.631 22.425 6.406 21.562 Z M 14.897 23.21 C 16.113 22.534 17.064 21.556 17.747 20.272 C 18.43 18.989 18.772 17.435 18.772 15.615 L 18.772 13.153 C 18.772 11.804 18.479 10.756 17.894 10.009 C 17.309 9.264 16.481 8.887 15.415 8.88 C 15.29 8.455 15.06 8.119 14.726 7.873 C 14.392 7.625 13.982 7.502 13.496 7.502 C 13.15 7.502 12.797 7.565 12.437 7.691 C 12.295 7.235 12.047 6.876 11.694 6.613 C 11.34 6.349 10.913 6.218 10.411 6.218 C 10.119 6.218 9.821 6.262 9.515 6.348 L 9.515 2.332 C 9.515 1.618 9.304 1.051 8.885 0.63 C 8.465 0.21 7.933 0 7.289 0 C 6.637 0 6.1 0.21 5.677 0.63 C 5.252 1.051 5.04 1.618 5.04 2.332 L 5.04 12.46 C 5.04 12.529 5.009 12.564 4.946 12.564 C 4.899 12.564 4.863 12.537 4.84 12.483 L 3.911 10.186 C 3.713 9.724 3.455 9.375 3.133 9.144 C 2.811 8.913 2.45 8.797 2.049 8.797 C 1.525 8.788 1.016 8.968 0.613 9.303 C 0.204 9.641 0 10.115 0 10.728 C 0.011 11.117 0.078 11.501 0.2 11.87 L 2.308 17.816 C 3.055 19.936 4.131 21.534 5.541 22.61 C 6.95 23.684 8.659 24.222 10.67 24.222 C 12.271 24.222 13.68 23.885 14.897 23.21 Z" id="svg667531508_6338_a8112z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg667531508_6338_a8114z" filterUnits="objectBoundingBox" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="1.92" in="SourceAlpha" result="a8117z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="1.92" in="a8117z" result="a8118z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8119z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8119z" in2="a8118z" operator="in" result="a8115z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg667531508_6338_a8116z" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ width: "185.9%", height: "182.4%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" fill="white" style={{ width: "34.8971px", height: "44.1809px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg667531508_6338_a8112z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg667531508_6338_a8114z)" mask="url(#svg667531508_6338_a8116z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg667531508_6338_a8114z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg667531508_6338_a8112z" clipPath="url(#svg667531508_6338_a8113z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg667531508_6338_a8112z" fill="rgb(0,0,0)" clipPath="url(#svg667531508_6338_a8113z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 10.689 22.864 C 12.054 22.864 13.242 22.58 14.249 22.011 C 15.259 21.441 16.039 20.609 16.587 19.509 C 17.137 18.409 17.412 17.063 17.412 15.469 L 17.412 13.339 C 17.412 12.348 17.257 11.588 16.947 11.054 C 16.638 10.52 16.191 10.253 15.611 10.253 L 15.611 11.666 C 15.619 11.844 15.547 12.016 15.416 12.137 C 15.297 12.25 15.139 12.313 14.975 12.312 C 14.807 12.315 14.644 12.252 14.522 12.137 C 14.39 12.016 14.319 11.844 14.327 11.666 L 14.327 9.911 C 14.327 9.559 14.236 9.285 14.057 9.093 C 13.875 8.9 13.62 8.805 13.29 8.805 C 13.032 8.805 12.776 8.86 12.526 8.97 L 12.526 11.207 C 12.534 11.389 12.463 11.565 12.331 11.69 C 12.212 11.803 12.053 11.866 11.889 11.866 C 11.721 11.868 11.559 11.805 11.436 11.69 C 11.303 11.566 11.232 11.389 11.241 11.207 L 11.241 8.616 C 11.241 8.271 11.149 7.998 10.965 7.798 C 10.78 7.597 10.531 7.497 10.217 7.497 C 9.95 7.497 9.691 7.556 9.44 7.674 L 9.44 10.759 C 9.444 10.932 9.377 11.1 9.255 11.222 C 9.132 11.345 8.965 11.412 8.792 11.407 C 8.621 11.407 8.458 11.338 8.338 11.216 C 8.219 11.095 8.153 10.93 8.155 10.759 L 8.155 2.258 C 8.155 1.967 8.075 1.734 7.914 1.557 C 7.746 1.377 7.507 1.28 7.261 1.292 C 7.012 1.282 6.77 1.378 6.596 1.557 C 6.427 1.734 6.343 1.967 6.343 2.258 L 6.343 14.233 C 6.351 14.461 6.271 14.682 6.12 14.852 C 5.975 15.01 5.768 15.097 5.554 15.092 C 5.361 15.096 5.17 15.043 5.007 14.94 C 4.845 14.838 4.71 14.649 4.6 14.374 L 3.022 10.771 C 2.826 10.3 2.53 10.065 2.139 10.065 C 1.916 10.056 1.699 10.139 1.539 10.295 C 1.379 10.451 1.289 10.665 1.291 10.888 C 1.291 11.077 1.326 11.265 1.397 11.454 L 3.505 17.389 C 4.195 19.312 5.154 20.704 6.378 21.569 C 7.603 22.433 9.04 22.864 10.689 22.864 Z" id="svg667531508_6338_a8120z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg667531508_6338_a8122z" filterUnits="objectBoundingBox" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="0.96" in="SourceAlpha" result="a8125z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="0.96" in="a8125z" result="a8126z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8127z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8127z" in2="a8126z" operator="in" result="a8123z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg667531508_6338_a8124z" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ width: "150%", height: "146.3%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" fill="white" style={{ width: "28.158px", height: "35.4368px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg667531508_6338_a8120z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg667531508_6338_a8122z)" mask="url(#svg667531508_6338_a8124z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg667531508_6338_a8122z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg667531508_6338_a8120z" clipPath="url(#svg667531508_6338_a8121z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg667531508_6338_a8120z" fill="rgb(255,255,255)" clipPath="url(#svg667531508_6338_a8121z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
          </g>
        </svg>
        <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="2202960551" style={{ position: "static", display: "block", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" id="LjE0Ycn76" transform="translate(3.75 3.75)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 3.75, 3.75)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 13.5 0 L 0 13.5" fill="var(--21h8s6, rgb(0, 0, 0))" id="oSDwjLCvX" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 5.25, 5.25)", transformOrigin: "0px 0px" } as CSSProperties} />
          <path d="M 13.5 13.5 L 0 0" fill="var(--21h8s6, rgb(0, 0, 0))" id="H9XwXWiXU" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" style={{ position: "static", display: "inline", flexDirection: "row", transform: "matrix(1, 0, 0, 1, 5.25, 5.25)", transformOrigin: "0px 0px" } as CSSProperties} />
        </svg>
        <svg viewBox="0 0 18.772 24.222" overflow="visible" id="svg1107069997_6338" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 6.406 21.562 C 5.182 20.697 4.223 19.305 3.534 17.381 L 1.425 11.446 C 1.354 11.258 1.319 11.069 1.319 10.881 C 1.318 10.658 1.407 10.443 1.567 10.288 C 1.728 10.132 1.944 10.049 2.168 10.057 C 2.559 10.057 2.854 10.292 3.051 10.763 L 4.628 14.367 C 4.738 14.642 4.874 14.83 5.035 14.932 C 5.199 15.035 5.389 15.088 5.582 15.084 C 5.797 15.09 6.003 15.002 6.148 14.844 C 6.3 14.675 6.38 14.453 6.371 14.226 L 6.371 2.25 C 6.371 1.96 6.455 1.726 6.624 1.549 C 6.798 1.37 7.04 1.274 7.289 1.285 C 7.535 1.272 7.774 1.369 7.942 1.549 C 8.104 1.726 8.184 1.96 8.184 2.25 L 8.184 10.752 C 8.181 10.922 8.247 11.087 8.367 11.209 C 8.486 11.331 8.65 11.4 8.82 11.4 C 8.994 11.404 9.161 11.337 9.283 11.215 C 9.406 11.092 9.473 10.925 9.468 10.752 L 9.468 7.666 C 9.719 7.549 9.978 7.489 10.246 7.489 C 10.559 7.489 10.809 7.59 10.993 7.79 C 11.178 7.99 11.269 8.264 11.269 8.609 L 11.269 11.2 C 11.26 11.381 11.332 11.558 11.464 11.683 C 11.587 11.797 11.749 11.86 11.918 11.858 C 12.082 11.859 12.24 11.796 12.359 11.683 C 12.491 11.558 12.563 11.381 12.554 11.2 L 12.554 8.962 C 12.804 8.853 13.06 8.797 13.318 8.797 C 13.649 8.797 13.903 8.893 14.085 9.085 C 14.265 9.277 14.355 9.551 14.355 9.904 L 14.355 11.658 C 14.347 11.836 14.418 12.009 14.55 12.129 C 14.673 12.244 14.835 12.307 15.003 12.305 C 15.167 12.305 15.326 12.242 15.445 12.129 C 15.576 12.008 15.647 11.836 15.64 11.658 L 15.64 10.246 C 16.219 10.246 16.666 10.513 16.976 11.046 C 17.286 11.581 17.441 12.341 17.441 13.331 L 17.441 15.461 C 17.441 17.056 17.166 18.401 16.616 19.501 C 16.067 20.601 15.287 21.434 14.278 22.003 C 13.271 22.572 12.083 22.856 10.717 22.856 C 9.068 22.856 7.631 22.425 6.406 21.562 Z M 14.897 23.21 C 16.113 22.534 17.064 21.556 17.747 20.272 C 18.43 18.989 18.772 17.435 18.772 15.615 L 18.772 13.153 C 18.772 11.804 18.479 10.756 17.894 10.009 C 17.309 9.264 16.481 8.887 15.415 8.88 C 15.29 8.455 15.06 8.119 14.726 7.873 C 14.392 7.625 13.982 7.502 13.496 7.502 C 13.15 7.502 12.797 7.565 12.437 7.691 C 12.295 7.235 12.047 6.876 11.694 6.613 C 11.34 6.349 10.913 6.218 10.411 6.218 C 10.119 6.218 9.821 6.262 9.515 6.348 L 9.515 2.332 C 9.515 1.618 9.304 1.051 8.885 0.63 C 8.465 0.21 7.933 0 7.289 0 C 6.637 0 6.1 0.21 5.677 0.63 C 5.252 1.051 5.04 1.618 5.04 2.332 L 5.04 12.46 C 5.04 12.529 5.009 12.564 4.946 12.564 C 4.899 12.564 4.863 12.537 4.84 12.483 L 3.911 10.186 C 3.713 9.724 3.455 9.375 3.133 9.144 C 2.811 8.913 2.45 8.797 2.049 8.797 C 1.525 8.788 1.016 8.968 0.613 9.303 C 0.204 9.641 0 10.115 0 10.728 C 0.011 11.117 0.078 11.501 0.2 11.87 L 2.308 17.816 C 3.055 19.936 4.131 21.534 5.541 22.61 C 6.95 23.684 8.659 24.222 10.67 24.222 C 12.271 24.222 13.68 23.885 14.897 23.21 Z" id="svg1107069997_6338_a8128z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg1107069997_6338_a8130z" filterUnits="objectBoundingBox" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="1.92" in="SourceAlpha" result="a8133z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="1.92" in="a8133z" result="a8134z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8135z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8135z" in2="a8134z" operator="in" result="a8131z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg1107069997_6338_a8132z" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ width: "185.9%", height: "182.4%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" fill="white" style={{ width: "34.8971px", height: "44.1809px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg1107069997_6338_a8128z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg1107069997_6338_a8130z)" mask="url(#svg1107069997_6338_a8132z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg1107069997_6338_a8130z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg1107069997_6338_a8128z" clipPath="url(#svg1107069997_6338_a8129z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg1107069997_6338_a8128z" fill="rgb(0,0,0)" clipPath="url(#svg1107069997_6338_a8129z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 10.689 22.864 C 12.054 22.864 13.242 22.58 14.249 22.011 C 15.259 21.441 16.039 20.609 16.587 19.509 C 17.137 18.409 17.412 17.063 17.412 15.469 L 17.412 13.339 C 17.412 12.348 17.257 11.588 16.947 11.054 C 16.638 10.52 16.191 10.253 15.611 10.253 L 15.611 11.666 C 15.619 11.844 15.547 12.016 15.416 12.137 C 15.297 12.25 15.139 12.313 14.975 12.312 C 14.807 12.315 14.644 12.252 14.522 12.137 C 14.39 12.016 14.319 11.844 14.327 11.666 L 14.327 9.911 C 14.327 9.559 14.236 9.285 14.057 9.093 C 13.875 8.9 13.62 8.805 13.29 8.805 C 13.032 8.805 12.776 8.86 12.526 8.97 L 12.526 11.207 C 12.534 11.389 12.463 11.565 12.331 11.69 C 12.212 11.803 12.053 11.866 11.889 11.866 C 11.721 11.868 11.559 11.805 11.436 11.69 C 11.303 11.566 11.232 11.389 11.241 11.207 L 11.241 8.616 C 11.241 8.271 11.149 7.998 10.965 7.798 C 10.78 7.597 10.531 7.497 10.217 7.497 C 9.95 7.497 9.691 7.556 9.44 7.674 L 9.44 10.759 C 9.444 10.932 9.377 11.1 9.255 11.222 C 9.132 11.345 8.965 11.412 8.792 11.407 C 8.621 11.407 8.458 11.338 8.338 11.216 C 8.219 11.095 8.153 10.93 8.155 10.759 L 8.155 2.258 C 8.155 1.967 8.075 1.734 7.914 1.557 C 7.746 1.377 7.507 1.28 7.261 1.292 C 7.012 1.282 6.77 1.378 6.596 1.557 C 6.427 1.734 6.343 1.967 6.343 2.258 L 6.343 14.233 C 6.351 14.461 6.271 14.682 6.12 14.852 C 5.975 15.01 5.768 15.097 5.554 15.092 C 5.361 15.096 5.17 15.043 5.007 14.94 C 4.845 14.838 4.71 14.649 4.6 14.374 L 3.022 10.771 C 2.826 10.3 2.53 10.065 2.139 10.065 C 1.916 10.056 1.699 10.139 1.539 10.295 C 1.379 10.451 1.289 10.665 1.291 10.888 C 1.291 11.077 1.326 11.265 1.397 11.454 L 3.505 17.389 C 4.195 19.312 5.154 20.704 6.378 21.569 C 7.603 22.433 9.04 22.864 10.689 22.864 Z" id="svg1107069997_6338_a8136z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg1107069997_6338_a8138z" filterUnits="objectBoundingBox" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="0.96" in="SourceAlpha" result="a8141z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="0.96" in="a8141z" result="a8142z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8143z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8143z" in2="a8142z" operator="in" result="a8139z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg1107069997_6338_a8140z" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ width: "150%", height: "146.3%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" fill="white" style={{ width: "28.158px", height: "35.4368px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg1107069997_6338_a8136z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg1107069997_6338_a8138z)" mask="url(#svg1107069997_6338_a8140z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg1107069997_6338_a8138z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg1107069997_6338_a8136z" clipPath="url(#svg1107069997_6338_a8137z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg1107069997_6338_a8136z" fill="rgb(255,255,255)" clipPath="url(#svg1107069997_6338_a8137z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
          </g>
        </svg>
        <svg viewBox="0 0 18.772 24.222" overflow="visible" id="svg1821900306_6338" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
          <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 6.406 21.562 C 5.182 20.697 4.223 19.305 3.534 17.381 L 1.425 11.446 C 1.354 11.258 1.319 11.069 1.319 10.881 C 1.318 10.658 1.407 10.443 1.567 10.288 C 1.728 10.132 1.944 10.049 2.168 10.057 C 2.559 10.057 2.854 10.292 3.051 10.763 L 4.628 14.367 C 4.738 14.642 4.874 14.83 5.035 14.932 C 5.199 15.035 5.389 15.088 5.582 15.084 C 5.797 15.09 6.003 15.002 6.148 14.844 C 6.3 14.675 6.38 14.453 6.371 14.226 L 6.371 2.25 C 6.371 1.96 6.455 1.726 6.624 1.549 C 6.798 1.37 7.04 1.274 7.289 1.285 C 7.535 1.272 7.774 1.369 7.942 1.549 C 8.104 1.726 8.184 1.96 8.184 2.25 L 8.184 10.752 C 8.181 10.922 8.247 11.087 8.367 11.209 C 8.486 11.331 8.65 11.4 8.82 11.4 C 8.994 11.404 9.161 11.337 9.283 11.215 C 9.406 11.092 9.473 10.925 9.468 10.752 L 9.468 7.666 C 9.719 7.549 9.978 7.489 10.246 7.489 C 10.559 7.489 10.809 7.59 10.993 7.79 C 11.178 7.99 11.269 8.264 11.269 8.609 L 11.269 11.2 C 11.26 11.381 11.332 11.558 11.464 11.683 C 11.587 11.797 11.749 11.86 11.918 11.858 C 12.082 11.859 12.24 11.796 12.359 11.683 C 12.491 11.558 12.563 11.381 12.554 11.2 L 12.554 8.962 C 12.804 8.853 13.06 8.797 13.318 8.797 C 13.649 8.797 13.903 8.893 14.085 9.085 C 14.265 9.277 14.355 9.551 14.355 9.904 L 14.355 11.658 C 14.347 11.836 14.418 12.009 14.55 12.129 C 14.673 12.244 14.835 12.307 15.003 12.305 C 15.167 12.305 15.326 12.242 15.445 12.129 C 15.576 12.008 15.647 11.836 15.64 11.658 L 15.64 10.246 C 16.219 10.246 16.666 10.513 16.976 11.046 C 17.286 11.581 17.441 12.341 17.441 13.331 L 17.441 15.461 C 17.441 17.056 17.166 18.401 16.616 19.501 C 16.067 20.601 15.287 21.434 14.278 22.003 C 13.271 22.572 12.083 22.856 10.717 22.856 C 9.068 22.856 7.631 22.425 6.406 21.562 Z M 14.897 23.21 C 16.113 22.534 17.064 21.556 17.747 20.272 C 18.43 18.989 18.772 17.435 18.772 15.615 L 18.772 13.153 C 18.772 11.804 18.479 10.756 17.894 10.009 C 17.309 9.264 16.481 8.887 15.415 8.88 C 15.29 8.455 15.06 8.119 14.726 7.873 C 14.392 7.625 13.982 7.502 13.496 7.502 C 13.15 7.502 12.797 7.565 12.437 7.691 C 12.295 7.235 12.047 6.876 11.694 6.613 C 11.34 6.349 10.913 6.218 10.411 6.218 C 10.119 6.218 9.821 6.262 9.515 6.348 L 9.515 2.332 C 9.515 1.618 9.304 1.051 8.885 0.63 C 8.465 0.21 7.933 0 7.289 0 C 6.637 0 6.1 0.21 5.677 0.63 C 5.252 1.051 5.04 1.618 5.04 2.332 L 5.04 12.46 C 5.04 12.529 5.009 12.564 4.946 12.564 C 4.899 12.564 4.863 12.537 4.84 12.483 L 3.911 10.186 C 3.713 9.724 3.455 9.375 3.133 9.144 C 2.811 8.913 2.45 8.797 2.049 8.797 C 1.525 8.788 1.016 8.968 0.613 9.303 C 0.204 9.641 0 10.115 0 10.728 C 0.011 11.117 0.078 11.501 0.2 11.87 L 2.308 17.816 C 3.055 19.936 4.131 21.534 5.541 22.61 C 6.95 23.684 8.659 24.222 10.67 24.222 C 12.271 24.222 13.68 23.885 14.897 23.21 Z" id="svg1821900306_6338_a8144z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg1821900306_6338_a8146z" filterUnits="objectBoundingBox" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="1.92" in="SourceAlpha" result="a8149z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="1.92" in="a8149z" result="a8150z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8151z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8151z" in2="a8150z" operator="in" result="a8147z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <motion.mask id="svg1821900306_6338_a8148z" x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" style={{ width: "185.9%", height: "182.4%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.05 }} transition={{ duration: 0.75, ease: "linear" }}>
                <rect x="-43.0%" y="-41.2%" width="185.9%" height="182.4%" fill="white" style={{ width: "34.8971px", height: "44.1809px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg1821900306_6338_a8144z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </motion.mask>
              <g filter="url(#svg1821900306_6338_a8146z)" mask="url(#svg1821900306_6338_a8148z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg1821900306_6338_a8146z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg1821900306_6338_a8144z" clipPath="url(#svg1821900306_6338_a8145z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg1821900306_6338_a8144z" fill="rgb(0,0,0)" clipPath="url(#svg1821900306_6338_a8145z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
            <g style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
              <defs style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <path d="M 10.689 22.864 C 12.054 22.864 13.242 22.58 14.249 22.011 C 15.259 21.441 16.039 20.609 16.587 19.509 C 17.137 18.409 17.412 17.063 17.412 15.469 L 17.412 13.339 C 17.412 12.348 17.257 11.588 16.947 11.054 C 16.638 10.52 16.191 10.253 15.611 10.253 L 15.611 11.666 C 15.619 11.844 15.547 12.016 15.416 12.137 C 15.297 12.25 15.139 12.313 14.975 12.312 C 14.807 12.315 14.644 12.252 14.522 12.137 C 14.39 12.016 14.319 11.844 14.327 11.666 L 14.327 9.911 C 14.327 9.559 14.236 9.285 14.057 9.093 C 13.875 8.9 13.62 8.805 13.29 8.805 C 13.032 8.805 12.776 8.86 12.526 8.97 L 12.526 11.207 C 12.534 11.389 12.463 11.565 12.331 11.69 C 12.212 11.803 12.053 11.866 11.889 11.866 C 11.721 11.868 11.559 11.805 11.436 11.69 C 11.303 11.566 11.232 11.389 11.241 11.207 L 11.241 8.616 C 11.241 8.271 11.149 7.998 10.965 7.798 C 10.78 7.597 10.531 7.497 10.217 7.497 C 9.95 7.497 9.691 7.556 9.44 7.674 L 9.44 10.759 C 9.444 10.932 9.377 11.1 9.255 11.222 C 9.132 11.345 8.965 11.412 8.792 11.407 C 8.621 11.407 8.458 11.338 8.338 11.216 C 8.219 11.095 8.153 10.93 8.155 10.759 L 8.155 2.258 C 8.155 1.967 8.075 1.734 7.914 1.557 C 7.746 1.377 7.507 1.28 7.261 1.292 C 7.012 1.282 6.77 1.378 6.596 1.557 C 6.427 1.734 6.343 1.967 6.343 2.258 L 6.343 14.233 C 6.351 14.461 6.271 14.682 6.12 14.852 C 5.975 15.01 5.768 15.097 5.554 15.092 C 5.361 15.096 5.17 15.043 5.007 14.94 C 4.845 14.838 4.71 14.649 4.6 14.374 L 3.022 10.771 C 2.826 10.3 2.53 10.065 2.139 10.065 C 1.916 10.056 1.699 10.139 1.539 10.295 C 1.379 10.451 1.289 10.665 1.291 10.888 C 1.291 11.077 1.326 11.265 1.397 11.454 L 3.505 17.389 C 4.195 19.312 5.154 20.704 6.378 21.569 C 7.603 22.433 9.04 22.864 10.689 22.864 Z" id="svg1821900306_6338_a8152z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <filter id="svg1821900306_6338_a8154z" filterUnits="objectBoundingBox" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                  <feOffset dx="0" dy="0.96" in="SourceAlpha" result="a8157z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feGaussianBlur stdDeviation="0.96" in="a8157z" result="a8158z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feFlood result="a8159z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                  <feComposite in="a8159z" in2="a8158z" operator="in" result="a8155z" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                </filter>
              </defs>
              <mask id="svg1821900306_6338_a8156z" x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" style={{ width: "150%", height: "146.3%", position: "static", display: "inline", flexDirection: "row" } as CSSProperties}>
                <rect x="-25.0%" y="-23.1%" width="150.0%" height="146.3%" fill="white" style={{ width: "28.158px", height: "35.4368px", position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
                <use href="#svg1821900306_6338_a8152z" fill="black" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </mask>
              <g filter="url(#svg1821900306_6338_a8154z)" mask="url(#svg1821900306_6338_a8156z)" style={{ position: "static", display: "inline", flexDirection: "row", filter: "url(\"#svg1821900306_6338_a8154z\")" } as CSSProperties}>
                <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href="#svg1821900306_6338_a8152z" clipPath="url(#svg1821900306_6338_a8153z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
              </g>
              <use href="#svg1821900306_6338_a8152z" fill="rgb(255,255,255)" clipPath="url(#svg1821900306_6338_a8153z)" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
            </g>
          </g>
        </svg>
        <svg viewBox="0 0 12 12" id="svg12175040578" style={{ position: "static", display: "inline", flexDirection: "row", overflow: "hidden" } as CSSProperties}>
          <path d="M 1.25 3.25 C 1.25 2.145 2.145 1.25 3.25 1.25 L 8.75 1.25 C 9.855 1.25 10.75 2.145 10.75 3.25 L 10.75 8.75 C 10.75 9.855 9.855 10.75 8.75 10.75 L 3.25 10.75 C 2.145 10.75 1.25 9.855 1.25 8.75 Z" fill="rgba(0, 153, 255, 0.2)" strokeWidth="1.5" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} strokeLinecap="round" strokeLinejoin="round" style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
          <path d="M 1.5 6 L 10.5 6" fill="transparent" stroke={"var(--token-bd71055c-0a2c-4476-8cc9-4310acba652d, rgb(0, 153, 255)) /* {\"name\":\"Blue\"} */"} style={{ position: "static", display: "inline", flexDirection: "row" } as CSSProperties} />
        </svg>
      </div>
      <div id="g_id_onload" data-login_uri="https://www.framer.com/api-proxy/auth-google-one-tap-callback" data-client_id="494526493439-djlkk2cal7r0lijnrd6en51c9vo4icgp.apps.googleusercontent.com" data-state_cookie_domain="framer.com" data-auto_prompt="false" data-prompt_parent_id="__framer-flap" data-cancel_on_tap_outside="false" data-use_fedcm_for_prompt="true" data-itp_support="true" style={{ width: "1440px", position: "static", display: "block", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties} />
      <div style={{ position: "static", display: "contents", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        <div style={{ width: "380px", height: "143px", padding: "20px", position: "fixed", top: "757px", right: "1060px", zIndex: "10", inset: "757px 1060px 0px 0px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px", left: "0px", bottom: "0px", boxSizing: "border-box", touchAction: "none", pointerEvents: "none" } as CSSProperties} data-cs-id="4070">
          <div style={{ width: "100%", height: "100%", position: "static", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", pointerEvents: "none", maxWidth: "unset" } as CSSProperties}>
            <div style={{ width: "340px", height: "103px", maxHeight: "calc(-40px + 100vh)", position: "relative", zIndex: "100", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", pointerEvents: "auto", opacity: "1", transform: "none", willChange: "transform" } as CSSProperties}>
              <div className="--framer-cookie-banner-container --framer-cookie-banner-type-simple" style={{ width: "100%", height: "103px", maxWidth: "340px", position: "static", display: "block", flexDirection: "row", backgroundColor: "rgb(255, 255, 255)", borderRadius: "18px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0 0 0 1px var(--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e, rgba(255, 255, 255, 0.1))", overflow: "scroll", background: "var(--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4, rgb(255, 255, 255))" } as CSSProperties} data-gtm-vis-recent-on-screen9263478_141="7333" data-gtm-vis-first-on-screen9263478_141="7333" data-gtm-vis-total-visible-time9263478_141="100" data-gtm-vis-has-fired9263478_141="1">
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
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image2.src} alt={content.image2.alt} />
      <div id="__framer-flap-wrapper" style={{ width: "1440px", padding: "0px 20px", position: "fixed", top: "64px", bottom: "836px", zIndex: "99", inset: "64px 0px 836px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)" } as CSSProperties}>
        {" "}
        <div id="__framer-flap-container" style={{ width: "1400px", maxWidth: "1400px", position: "static", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" } as CSSProperties}>
          {" "}
          <div id="__framer-flap" style={{ position: "static", display: "block", flexDirection: "row", opacity: "0", transform: "matrix(1, 0, 0, 1, 8, 8)", transformOrigin: "0px 0px" } as CSSProperties} />
          {" "}
        </div>
        {" "}
      </div>
      <iframe height="0" width="0" style={{ position: "static", display: "none", flexDirection: "row", border: "2px inset rgb(0, 0, 0)", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", visibility: "hidden" } as CSSProperties} />
      <img id="podscribe-request" aria-hidden="true" style={{ position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip" } as CSSProperties} src={content.image3.src} alt={content.image3.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image4.src} alt={content.image4.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image5.src} alt={content.image5.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image6.src} alt={content.image6.alt} />
      <img height="1" width="1" fetchPriority="high" style={{ width: "1px", height: "1px", position: "static", display: "none", flexDirection: "row", fontFamily: "sans-serif", fontSize: "12px", fontWeight: "400", textAlign: "start", color: "rgb(0, 0, 0)", overflow: "clip", aspectRatio: "auto 1 / 1" } as CSSProperties} src={content.image7.src} alt={content.image7.alt} />
    </>
  );
}
