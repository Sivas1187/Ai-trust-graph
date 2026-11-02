import type { Metadata } from "next";
import { pageMetadata } from "../page-metadata";
import { GraphExplorer } from "../components/GraphExplorer";
import { SiteFooter } from "../components/site/SiteFooter";
import { SiteHeader } from "../components/site/SiteHeader";
import "./graph.css";

export const metadata: Metadata = pageMetadata({
  title: "Interactive graph",
  description:
    "Explore a synthetic AI Trust Graph through system, authority, control and evidence views. An illustrative implementation, not part of the methodology.",
  path: "/graph/",
});

export default function GraphPage() {
  return (
    <>
      <a className="skipLink" href="#graph-main">
        Skip to content
      </a>
      <SiteHeader home="/" prefix="/" />
      <main id="graph-main" className="graphPage" tabIndex={-1}>
        <GraphExplorer />
      </main>
      <SiteFooter prefix="/" />
    </>
  );
}
