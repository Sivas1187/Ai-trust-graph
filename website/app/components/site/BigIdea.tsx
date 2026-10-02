import { links } from "../../content";
import { bigIdeaConcepts, frameworks } from "../../site-content";
import { Ext, SectionHead, SourceNote } from "./Primitives";

/**
 * Section 3: the big idea in five concepts, a sentence on paths, the
 * "What changes?" panel and the framework positioning (#frameworks). The
 * concepts are drawn as one layered stack, each layer adding to the last.
 */
const conceptGlyph: Record<string, string> = {
  entities: "M6 12a2.5 2.5 0 1 0 0 .01 M18 6a2.5 2.5 0 1 0 0 .01 M18 18a2.5 2.5 0 1 0 0 .01",
  relationships: "M6 12a2.5 2.5 0 1 0 0 .01 M18 6a2.5 2.5 0 1 0 0 .01 M18 18a2.5 2.5 0 1 0 0 .01 M8 11l8-4 M8 13l8 4",
  conditions: "M12 4l8 8-8 8-8-8z",
  authority: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7z",
  evidence: "M7 3h7l4 4v14H7z M10 12h5 M10 16h5",
};

export function BigIdea() {
  const ccm = links.doc("02-core-conceptual-model.md");
  const manifesto = links.doc("01-manifesto.md");
  return (
    <section id="big-idea" className="section sectionPaper bigIdea" aria-labelledby="big-idea-title">
      <div className="container">
        <SectionHead
          id="big-idea-title"
          kicker="03 · The big idea"
          title="Assess the connected system, not only the model."
          lede={
            <p>
              AI Trust Graph represents the relevant parts of an AI environment, and the relationships between them, as
              an evidence-linked graph. Five concepts carry the idea.
            </p>
          }
        />

        <ol className="concepts" aria-label="Five concepts">
          {bigIdeaConcepts.map((c, i) => (
            <li key={c.key} className={`concept concept-${c.key}`} style={{ ["--i" as string]: i }}>
              <svg className="conceptGlyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={conceptGlyph[c.key]} />
              </svg>
              <p>
                <strong className="conceptName">{c.name}</strong> {c.text}
              </p>
            </li>
          ))}
        </ol>
        <p className="pathsLine">
          <strong>Paths</strong> combine these elements. A path through entities, relationships and conditions, read
          together with authority and evidence, supports a bounded analysis of exposure, control and consequence.
        </p>

        <div className="whatChanges" aria-labelledby="what-changes-title">
          <h3 id="what-changes-title" className="whatChangesTitle">
            What changes?
          </h3>
          <div className="whatChangesGrid">
            <div className="wcCell">
              <p className="miniLabel">Instead of asking only</p>
              <p className="wcQuestion">“Is this component controlled?”</p>
            </div>
            <div className="wcCell wcCellNew">
              <p className="miniLabel">AI Trust Graph also asks</p>
              <p className="wcQuestion">“How do trust, authority and evidence connect across the wider system?”</p>
            </div>
          </div>
          <p className="wcNote">
            Control-based assessment remains part of the method: controls are assessed where they sit on a path, and
            their effectiveness needs its own evidence.
          </p>
        </div>

        <div id="frameworks" className="frameworks">
          <h3 className="subTitle">Alongside existing standards and frameworks</h3>
          <p>
            {frameworks.existing} {frameworks.contributes}
          </p>
          <p className="fwBoundary">
            <span className="fwBoundaryMark" aria-hidden="true">
              !
            </span>
            <span>{frameworks.boundary}</span>
          </p>
        </div>

        <SourceNote>
          Concepts: <Ext href={ccm}>Artifact #2 · Core Conceptual Model</Ext> (objects, typed relationships,
          conditions, paths, authority §5.2, evidence). Framework positioning:{" "}
          <Ext href={manifesto}>Artifact #1 · Manifesto</Ext> principle 10 and §11. Wording here is website explanation.
        </SourceNote>
      </div>
    </section>
  );
}
