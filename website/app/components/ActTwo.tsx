import { links, problemThesis, topologyInvariant } from "../content";
import { problemFieldDesktop, problemFieldMobile } from "../graph/problemField";
import { GraphField } from "./GraphField";
import { FigureNote, MarginReference } from "./Marginalia";

/**
 * Act II — why graph reasoning.
 *
 * The Cover's graph field continues into a graphite act: the cyan path enters
 * where it left the Cover and ends in the dashed "unresolved" motif. The
 * headline and the Manifesto thesis sit top left; the §4 topology invariant is
 * the act's pull quote. All copy is canonical (Artifact #1 §2.2, §4).
 *
 * Wide layouts (≥ 1024px) place the quote on the approved composition's
 * column; narrower layouts stack the copy in normal flow and keep the field
 * to a right-hand strip, so text never meets the drawing.
 */
export function ActTwo() {
  const manifesto = links.doc("01-manifesto.md");
  return (
    <section id="problem" className="act2" aria-labelledby="problem-title">
      <div className="act2Frame">
        <GraphField data={problemFieldDesktop} tone="dark" className="act2Field act2FieldDesktop" />
        <GraphField data={problemFieldMobile} tone="dark" className="act2Field act2FieldMobile" />
        <MarginReference className="marginRefSide act2RefSide">
          <a href={manifesto} rel="noopener noreferrer">
            Artifact #1
            <br />
            Manifesto
          </a>
          <br />
          §2.2 · §4
        </MarginReference>
        <div className="act2Head">
          <h2 id="problem-title" className="actTitle">
            AI systems are no longer isolated models.
          </h2>
          <p className="act2Thesis">{problemThesis}</p>
        </div>
        <blockquote className="act2Quote" cite={manifesto}>
          <p className="act2Invariant">{topologyInvariant[0]}</p>
          <p className="act2Condition">{topologyInvariant[1]}</p>
        </blockquote>
        <div className="act2Foot">
          <FigureNote className="act2Note">Illustrative topology</FigureNote>
          <MarginReference className="marginRefEnd">
            <a href={manifesto} rel="noopener noreferrer">
              Artifact #1 Manifesto
            </a>{" "}
            · §2.2 · §4
          </MarginReference>
        </div>
      </div>
    </section>
  );
}
