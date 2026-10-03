import type { ReactNode } from "react";

/**
 * Shared presentation primitives for the research site.
 *
 * - SectionHead: kicker (section number and short label), heading and lede.
 * - SourceNote: an expandable, compact source marker. Native <details>, so it
 *   works without JavaScript; the reading-depth control can open all of them.
 * - Ext: a link to the canonical files on GitHub, marked with a decorative ↗.
 *   The page says once (methodology lede and footer) that ↗ links open
 *   GitHub, instead of announcing it on every link.
 */

export function SectionHead({
  id,
  kicker,
  title,
  lede,
  tone = "light",
  level = 2,
}: {
  id: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  /** 2 for main narrative sections, 3 for methodology subsections. */
  level?: 2 | 3;
}) {
  const H = level === 3 ? "h3" : "h2";
  return (
    <header className={`sectionHead sectionHead--${tone}${level === 3 ? " sectionHead--sub" : ""}`}>
      <p className="kicker">{kicker}</p>
      <H id={id} className={level === 3 ? "sectionTitle sectionTitleSub" : "sectionTitle"}>
        {title}
      </H>
      {lede && <div className="sectionLede">{lede}</div>}
    </header>
  );
}

export function SourceNote({ children, label = "Source" }: { children: ReactNode; label?: string }) {
  return (
    <details className="srcNote depthSource">
      <summary>
        <span className="srcMark" aria-hidden="true">
          §
        </span>
        {label}
      </summary>
      <div className="srcBody">{children}</div>
    </details>
  );
}

export function Ext({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={className} rel="noopener noreferrer">
      {children}
      <span className="extMark" aria-hidden="true">
        {" "}
        ↗
      </span>
    </a>
  );
}

/**
 * A short glossary under a list of state names: native <details>, closed by
 * default, so the definitions are one click away without lengthening the page.
 */
export function Glossary({ label, terms, source }: { label: string; terms: [string, string][]; source: ReactNode }) {
  return (
    <details className="glossary">
      <summary>{label}</summary>
      <dl className="glossaryList">
        {terms.map(([term, def]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{def}</dd>
          </div>
        ))}
      </dl>
      <p className="glossarySource">{source}</p>
    </details>
  );
}

/** Content that the "Overview" reading depth hides. */
export function Detail({ children, as: Tag = "div", className }: { children: ReactNode; as?: "div" | "p" | "section"; className?: string }) {
  return <Tag className={className ? `depthDetail ${className}` : "depthDetail"}>{children}</Tag>;
}
