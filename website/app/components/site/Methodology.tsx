import { links } from "../../content";
import { outcomes } from "../../site-content";
import { Ext, SectionHead, SourceNote } from "./Primitives";
import { SignatureGraph } from "./SignatureGraph";

/** What the methodology helps a practitioner do, then the signature figure. */
export function Methodology() {
  const manifesto = links.doc("01-manifesto.md");
  const ccm = links.doc("02-core-conceptual-model.md");
  const ontology = links.doc("12-ontology-specification.md");
  return (
    <>
      <section id="methodology" className="section sectionWhite" aria-labelledby="methodology-title">
        <div className="container">
          <SectionHead
            id="methodology-title"
            kicker="02 · Methodology"
            title="What the methodology helps a practitioner do."
            lede={
              <p>
                Six kinds of work, carried out over one graph. They are not a product feature list and not a fixed order:
                an assessment may return to any of them as evidence changes.
              </p>
            }
          />
          <ol className="outcomes">
            {outcomes.map((o, i) => (
              <li key={o.key} className={`outcome outcome-${o.key}`}>
                <span className="outcomeNum" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="outcomeTitle">{o.title}</h3>
                <p>{o.text}</p>
              </li>
            ))}
          </ol>
          <SourceNote>
            Paraphrased from <Ext href={manifesto}>Artifact #1 · Manifesto</Ext> §7 (Discover the estate; Construct the
            graph; Classify trust and authority; Analyze paths; Validate controls; Decide and prioritize; Monitor change).
          </SourceNote>
        </div>
      </section>

      <section id="graph" className="section sectionInk" aria-labelledby="graph-title">
        <div className="container">
          <SectionHead
            id="graph-title"
            tone="dark"
            kicker="03 · The graph"
            title="One path, read the way the methodology reads it."
            lede={
              <p>
                Every arrow is a typed, directed assertion with a state and its own evidence. Reaching a system and having
                authority in it are drawn as different assertions. Where evidence is missing, the drawing says UNKNOWN
                instead of guessing.
              </p>
            }
          />
          <SignatureGraph />
          <p className="figureCaption figureCaptionDark">
            Synthetic illustration. Evidence grades are examples, and the potential consequence is a hypothesis, not a
            finding.
          </p>
          <p className="graphPageLink">
            <a href="/graph/">Open the interactive implementation view</a>, which reads the same kind of synthetic graph
            through system, authority, control and evidence views.
          </p>
          <SourceNote>
            Relationship names and caveats: <Ext href={ontology}>Artifact #12 · Ontology Specification</Ext> predicate
            catalogue. Boundaries, paths and consequence: <Ext href={ccm}>Artifact #2 · Core Conceptual Model</Ext> §3.2,
            §6, §6.6. States and grades: Artifact #6 §0.5, §1.
          </SourceNote>
        </div>
      </section>
    </>
  );
}
