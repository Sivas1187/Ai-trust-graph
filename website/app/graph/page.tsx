import type { Metadata } from "next";
import { GraphExplorer } from "../components/GraphExplorer";
import { SiteFooter } from "../components/site/SiteFooter";
import { SiteHeader } from "../components/site/SiteHeader";
import "./graph.css";

export const metadata: Metadata = {
  title: "Interactive graph",
  description:
    "Interactive implementation view of the AI Trust Graph methodology, with a synthetic fallback and optional Neo4j-backed snapshot.",
  alternates: { canonical: "/graph/" },
};

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
