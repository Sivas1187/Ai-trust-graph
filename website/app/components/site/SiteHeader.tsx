import { links } from "../../content";
import { BrandMark } from "../BrandMark";
import { PrimaryNav, type NavItem } from "../PrimaryNav";

/**
 * Site navigation. One level, website sections only (never a methodology
 * construct). The brand link is "Home". On sub-pages the fragment links point
 * back to the homepage sections.
 */
export function homeNav(prefix = "", home = "#top"): NavItem[] {
  return [
    { href: home, label: "Home" },
    { href: `${prefix}#why`, label: "Why it exists" },
    { href: `${prefix}#methodology`, label: "Methodology" },
    { href: `${prefix}#example`, label: "Worked example" },
    { href: `${prefix}#artifacts`, label: "Artifacts" },
    { href: `${prefix}#publications`, label: "Publications" },
    { href: `${prefix}#author`, label: "About the author" },
    { href: links.repo, label: "GitHub", srSuffix: "(canonical source)", external: true },
  ];
}

export function SiteHeader({ home = "#top", prefix = "" }: { home?: string; prefix?: string }) {
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <a className="brand" href={home} aria-label="AI Trust Graph, home">
          <BrandMark />
          <span>AI Trust Graph</span>
        </a>
        <PrimaryNav items={homeNav(prefix, home)} />
      </div>
    </header>
  );
}
