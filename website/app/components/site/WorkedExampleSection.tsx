import { links } from "../../content";
import { Ext, SectionHead, SourceNote } from "./Primitives";
import { WorkedExample } from "./WorkedExample";

export function WorkedExampleSection() {
  return (
    <section id="example" className="section sectionWhite" aria-labelledby="example-title">
      <div className="container">
        <SectionHead
          id="example-title"
          kicker="5.6 · Worked example"
          level={3}
          title="The procurement request, read end to end."
          lede={
            <p>
              The scenario from the start of the page, assessed. An employee asks an AI procurement agent to identify a
              supplier and prepare a purchase request. The agent uses a model, retrieves supplier information, invokes a
              procurement tool, acts through a service identity and reaches an enterprise business system across a trust
              boundary. Six views show what the methodology records at each step, and what it declines to conclude.
            </p>
          }
        />
        <p className="syntheticBanner" role="note">
          <span aria-hidden="true">◇ </span>Synthetic example for methodology illustration only. It does not describe a
          real organisation, system or assessment.
        </p>
        <WorkedExample />
        <SourceNote>
          Website example, not an Artifact #10 reference case. Predicates: <Ext href={links.doc("12-ontology-specification.md")}>Artifact #12</Ext>.
          Grades and relations: <Ext href={links.doc("06-evidence-model.md")}>Artifact #6</Ext> §0.9, §1. Result states:{" "}
          <Ext href={links.doc("04-scoring-framework.md")}>Artifact #4</Ext> §0.5. Finding and decision separation:{" "}
          <Ext href={links.doc("02-core-conceptual-model.md")}>Artifact #2</Ext> §7.4. For calibrated cases, see{" "}
          <Ext href={links.doc("10-reference-assessment-repository.md")}>Artifact #10</Ext>.
        </SourceNote>
      </div>
    </section>
  );
}
