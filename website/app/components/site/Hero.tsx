import { links, release, reviewStatus } from "../../content";
import { author } from "../../site-content";
import { HeroGraph } from "./HeroGraph";

/**
 * Hero (section 1, opening). EDITORIAL copy from the narrative brief. It
 * starts with the reason for the research; release metadata is compact
 * secondary text, and the graph motif is decorative (the signature visual
 * in section 4 carries the semantics).
 */
export const heroDescriptor = "A graph-based, evidence-driven methodology for connected AI systems.";
export const heroSupport =
  "Modern AI systems are not just models. They connect people, agents, identities, tools, data, providers and business systems. AI Trust Graph was created to examine those relationships while keeping authority, evidence and uncertainty explicit.";

function Sep() {
  return (
    <>
      <span aria-hidden="true"> · </span>
      <span className="visuallyHidden">, </span>
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="heroInner container">
        <div className="heroCopy">
          <h1 id="hero-title" className="heroTitle">
            AI Trust Graph
          </h1>
          <p className="heroLine">{heroDescriptor}</p>
          <p className="heroSupport">{heroSupport}</p>
          <p className="heroAuthor">
            Independent research by <a href="#author">{author.name}</a>
          </p>
          <div className="heroActions">
            <a className="btn btnPrimary" href="#why">
              Understand why it exists
            </a>
            <a className="btn btnSecondary" href="#methodology">
              Explore the methodology
            </a>
            <a className="btn btnTertiary" href={links.repo} rel="noopener noreferrer">
              View on GitHub<span className="visuallyHidden"> (canonical source)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
          <p className="heroStatus">
            <span>Version {release.bundle}</span>
            <Sep />
            <span>{release.status}</span>
            <Sep />
            <span>{reviewStatus[1]}</span>
            <span className="visuallyHidden">
              , snapshot <time dateTime={release.snapshot}>{release.snapshotLabel}</time>
            </span>
          </p>
        </div>
        <HeroGraph />
      </div>
    </section>
  );
}
