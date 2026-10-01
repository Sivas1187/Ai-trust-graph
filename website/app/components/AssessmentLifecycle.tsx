import { assessmentPhases, assessmentTypes, exitCriteria, lifecycleIntro, links, phaseIterationRule } from "../content";
import { MarginReference } from "./Marginalia";
import { PageIndexReturn } from "./PageIndexReturn";

/**
 * Assessment lifecycle — the controlled fieldwork sequence (Artifact #7).
 *
 * Deliberately unlike Act III's reasoning chain: a numbered register of the
 * thirteen phases with their primary outcomes, every row drawn identically —
 * no markers, check marks, fills, percentages or "current" state. The
 * iteration rule leads. Gate tests sit in one native disclosure; the ten
 * assessment types are a typographic list of native disclosures (name →
 * definition) in Artifact #7 order, which implies no priority.
 *
 * Sources: Artifact #7 §0.11 (phases, outcomes, iteration rule), §0.12 (gate
 * tests), §1.1–§1.10 (assessment types); METHODOLOGY_MANIFEST §1 (role of #7).
 */
export function AssessmentLifecycle() {
  const am = links.doc("07-assessment-methodology.md");
  return (
    <section id="lifecycle" className="lifecycleAct" aria-labelledby="lifecycle-title">
      <div className="actFrame">
        <div className="actIntro">
          <MarginReference className="marginRefSide">
            <a href={am} rel="noopener noreferrer">
              Artifact #7
            </a>
            <br />
            §0.11 · §0.12
            <br />
            §1.1–§1.10
            <br />
            <a href={links.manifest} rel="noopener noreferrer">
              Manifest
            </a>{" "}
            §1
          </MarginReference>
          <h2 id="lifecycle-title" className="actTitle">
            Thirteen controlled phases.
          </h2>
          <p className="actLede">
            Separate from the reasoning chain: Artifact #7 governs the controlled fieldwork lifecycle and gates without
            redefining upstream semantics.
          </p>
          <p className="lcRuleLine">
            {lifecycleIntro} <strong>{phaseIterationRule}</strong>
          </p>
        </div>

        <ol className="phaseRegister" aria-label="Assessment Methodology phases, Artifact #7 §0.11">
          {assessmentPhases.map((p) => (
            <li key={p.n} className="phaseRow">
              <span className="phaseNum">
                <span className="visuallyHidden">Phase </span>
                {p.n}
              </span>
              <span className="phaseName">{p.name}</span>
              <span className="phaseOutcome">{p.outcome}</span>
            </li>
          ))}
        </ol>

        <details className="lcDetails">
          <summary>Gate tests between phases</summary>
          <p className="lcGateIntro">{exitCriteria.intro.join(" ")}</p>
          <dl className="gateRegister" aria-label="Gate tests, Artifact #7 §0.12">
            {exitCriteria.gates.map((g) => (
              <div key={g.test}>
                <dt>{g.test}</dt>
                <dd>{g.rule}</dd>
              </div>
            ))}
          </dl>
        </details>

        <div className="lcTypesBlock">
          <h3 id="assessment-types-title" className="lcTypesTitle">
            Assessment types
          </h3>
          <p className="noteSmall">Listed in Artifact #7 order; the order implies no priority.</p>
          <ul className="typeRegister" aria-labelledby="assessment-types-title">
            {assessmentTypes.map((t) => (
              <li key={t.name}>
                <details className="typeEntry">
                  <summary>{t.name}</summary>
                  <p>{t.definition}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>

        <MarginReference className="marginRefEnd actRefEnd">
          <a href={am} rel="noopener noreferrer">
            Artifact #7 — Assessment Methodology
          </a>{" "}
          §0.11 · §0.12 · §1.1–§1.10 ·{" "}
          <a href={links.manifest} rel="noopener noreferrer">
            METHODOLOGY_MANIFEST
          </a>{" "}
          §1
        </MarginReference>
        <PageIndexReturn />
      </div>
    </section>
  );
}
