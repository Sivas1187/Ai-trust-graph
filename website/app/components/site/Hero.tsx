import { links, notValidatedShort, release } from "../../content";
import { isPublished, publication } from "../../publication";
import { HeroGraph } from "./HeroGraph";

/** Hero copy. EDITORIAL; the descriptive line is the owner-approved positioning from the redesign brief. */
export const heroLine =
  "A graph-based, evidence-driven methodology for assessing trust, authority and exposure across connected AI systems.";
export const heroSupport =
  "AI systems now act through agents, tools, identities, data and providers. AI Trust Graph examines those connections as one graph, asks what each relationship actually allows, and ties every conclusion to evidence. Where the evidence runs out, the answer stays UNKNOWN.";

function Sep() {
  return (
    <>
      <span aria-hidden="true"> · </span>
      <span className="visuallyHidden">, </span>
    </>
  );
}

export function Hero() {
  const published = isPublished();
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="heroInner container">
        <div className="heroCopy">
          <p className="heroAuthor">
            Independent research by <a href="#author">{publication.author}</a>
          </p>
          <h1 id="hero-title" className="heroTitle">
            AI Trust Graph
          </h1>
          <p className="heroLine">{heroLine}</p>
          <p className="heroSupport">{heroSupport}</p>
          <div className="heroActions">
            <a className="btn btnPrimary" href="#methodology">
              Explore the methodology
            </a>
            <a className="btn btnSecondary" href={links.repo} rel="noopener noreferrer">
              View on GitHub<span className="visuallyHidden"> (canonical source)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
            {published ? (
              <a className="btn btnTertiary" href={publication.pdfUrl} rel="noopener noreferrer">
                Download the whitepaper (PDF)
              </a>
            ) : (
              <a className="btn btnTertiary btnPending" href="#publications">
                Whitepaper <span className="pendingTag">in preparation</span>
              </a>
            )}
          </div>
          <p className="heroStatus">
            <span>{release.status}</span>
            <Sep />
            <span>Bundle {release.bundle}</span>
            <Sep />
            <span>
              <time dateTime={release.snapshot}>{release.snapshotLabel}</time>
            </span>
            <Sep />
            <span>{notValidatedShort}</span>
          </p>
        </div>
        <HeroGraph />
      </div>
    </section>
  );
}
