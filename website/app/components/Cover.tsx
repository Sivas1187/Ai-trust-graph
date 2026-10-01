import { coverFieldDesktop, coverFieldMobile } from "../graph/coverField";
import { coverContext, coverProposition, links, notValidatedShort, release } from "../content";
import { GraphField } from "./GraphField";

/**
 * Act I — the research cover.
 *
 * Editorial title page: the methodology name set large in the serif display
 * face, the approved proposition with one subordinate context line (from the
 * Manifesto core proposition), two plain text links, and a running
 * colophon under a full-width hairline. The graph field behind it is
 * decorative; desktop and mobile use separately curated compositions.
 *
 * Layout (globals.css, "Cover"): the copy is bottom-anchored inside
 * `.coverFrame`, whose top padding reserves the node-free band, so larger
 * text or zoom grows the cover downward instead of pushing type into the
 * graph.
 */
export function Cover() {
  return (
    <section id="top" className="cover" aria-labelledby="hero-title">
      <div className="coverFrame">
        <GraphField data={coverFieldDesktop} className="coverField coverFieldDesktop" />
        <GraphField data={coverFieldMobile} className="coverField coverFieldMobile" />
        <div className="coverCopy">
          <h1 id="hero-title" className="coverTitle">
            AI Trust Graph
          </h1>
          <p className="coverProp">{coverProposition}</p>
          <p className="coverContext">{coverContext}</p>
          <p className="coverLinks">
            <a href={links.repo} rel="noopener noreferrer" className="coverLinkPrimary">
              Read the methodology
              <span className="visuallyHidden"> (canonical source on GitHub)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
            <a href="#flow">
              How it reasons<span aria-hidden="true"> ↓</span>
            </a>
          </p>
        </div>
      </div>
      <div className="coverFoot">
        <p className="colophon">
          <span className="colophonGroup">
            <span>{release.status}</span>
            <span className="colophonSep" aria-hidden="true"> · </span>
            <span className="visuallyHidden">, </span>
            <span>Bundle {release.bundle}</span>
          </span>
          <span className="colophonSep colophonSepMid" aria-hidden="true"> · </span>
          <span className="visuallyHidden">, </span>
          <span className="colophonGroup">
            <span>
              <time dateTime={release.snapshot}>{release.snapshotLabel}</time>
            </span>
            <span className="colophonSep" aria-hidden="true"> · </span>
            <span className="visuallyHidden">, </span>
            <span>{notValidatedShort}</span>
          </span>
        </p>
      </div>
    </section>
  );
}
