import { links } from "../../content";
import { BrandMark } from "../BrandMark";
import { PrimaryNav, type NavItem } from "../PrimaryNav";

/**
 * Site navigation: the visitor journey (why, big idea, methodology,
 * artifacts, publications, about), one level only. The brand link returns
 * home; GitHub is a separate, always-visible action. On sub-pages the
 * fragment links point back to the homepage sections.
 */
export function homeNav(prefix = ""): NavItem[] {
  return [
    { href: `${prefix}#why`, label: "Why it exists" },
    { href: `${prefix}#big-idea`, label: "The big idea" },
    { href: `${prefix}#methodology`, label: "Methodology" },
    { href: `${prefix}#artifacts`, label: "Artifacts" },
    { href: `${prefix}#publications`, label: "Publications" },
    { href: `${prefix}#author`, label: "About" },
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
        <div className="headerEnd">
          <PrimaryNav items={homeNav(prefix)} />
          <a className="headerGithub" href={links.repo} rel="noopener noreferrer">
            GitHub<span className="visuallyHidden"> (canonical source, opens GitHub)</span>
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
