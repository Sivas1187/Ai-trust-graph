import type { Metadata } from "next";
import { BrandMark } from "../components/BrandMark";
import { GraphExplorer } from "../components/GraphExplorer";
import { PrimaryNav, type NavItem } from "../components/PrimaryNav";
import { SiteFooter } from "../components/SiteFooter";
import { links } from "../content";

export const metadata: Metadata = {
  title: "Interactive graph",
  description:
    "Interactive implementation view of the AI Trust Graph methodology, with a synthetic fallback and optional Neo4j-backed snapshot.",
  alternates: { canonical: "/graph/" },
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#flow", label: "Method" },
  { href: "/#domains", label: "Domains" },
  { href: "/#methodology", label: "Source" },
  { href: links.repo, label: "GitHub", srSuffix: "(canonical source)", external: true },
];

export default function GraphPage() {
  return (
    <>
      <a className="skipLink" href="#graph-main">
        Skip to content
      </a>
      <header className="siteHeader">
        <div className="headerInner">
          <a className="brand" href="/" aria-label="AI Trust Graph — home">
            <BrandMark />
            <span>AI Trust Graph</span>
          </a>
          <PrimaryNav items={navItems} />
        </div>
      </header>
      <main id="graph-main" className="graphPage" tabIndex={-1}>
        <GraphExplorer />
      </main>
      <SiteFooter />
    </>
  );
}
