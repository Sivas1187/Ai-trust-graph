import type { Metadata } from "next";
import { pageMetadata } from "../page-metadata";
import { links } from "../content";
import { SimplePage } from "../components/site/SimplePage";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility statement",
  description:
    "Accessibility aims, measures and known limitations of the AI Trust Graph website.",
  path: "/accessibility/",
});

export default function Accessibility() {
  return (
    <SimplePage title="Accessibility statement">
      <p>
        This website aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. It has not been
        audited by an independent accessibility specialist.
      </p>
      <h2 className="simpleSub">Measures taken</h2>
      <ul>
        <li>Every diagram has a text alternative, and the main graph has a keyboard-operable list of its relationships.</li>
        <li>States such as UNKNOWN are shown with text and symbols, never by colour alone.</li>
        <li>All content is reachable without JavaScript; interactive tabs and filters are enhancements.</li>
        <li>Motion is minimal and is removed when the system asks for reduced motion.</li>
        <li>The layout works from 320 pixels wide and at 200% zoom, and respects forced-colour modes.</li>
      </ul>
      <h2 className="simpleSub">Known limitations</h2>
      <ul>
        <li>The interactive graph page draws a dense diagram; its relationship list is the recommended route for screen reader users.</li>
        <li>On narrow screens the interactive graph drawing scrolls sideways; its relationship list needs no scrolling.</li>
        <li>Artifacts on GitHub are Markdown documents whose accessibility depends on GitHub&apos;s rendering.</li>
      </ul>
      <p>
        To report a barrier, open an issue in the{" "}
        <a href={links.repo} rel="noopener noreferrer">
          GitHub repository
        </a>
        .
      </p>
      <p>
        This statement was last reviewed on <time dateTime="2026-10-03">3 October 2026</time>, with an automated
        axe-core check of every page at mobile and desktop widths.
      </p>
    </SimplePage>
  );
}
