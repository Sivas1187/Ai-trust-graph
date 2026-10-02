import type { ReactNode } from "react";

/**
 * Shared presentation primitives for the research site.
 *
 * - SectionHead: kicker (section number and short label), heading and lede.
 * - SourceNote: an expandable, compact source marker. Native <details>, so it
 *   works without JavaScript; the reading-depth control can open all of them.
 * - Ext: an external link that says it leaves the site.
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
      <span className="visuallyHidden"> (opens GitHub)</span>
    </a>
  );
}

/** Content that the "Overview" reading depth hides. */
export function Detail({ children, as: Tag = "div", className }: { children: ReactNode; as?: "div" | "p" | "section"; className?: string }) {
  return <Tag className={className ? `depthDetail ${className}` : "depthDetail"}>{children}</Tag>;
}
