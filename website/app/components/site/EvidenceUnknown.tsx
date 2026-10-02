import { evidenceGrades, links, nonNumericResultStates, unknownVsNotTested } from "../../content";
import { evidenceRelations } from "../../site-content";
import { Detail, Ext, SectionHead, SourceNote } from "./Primitives";

/**
 * Evidence and UNKNOWN. Every state carries a text label and a distinct
 * symbol, never colour alone. Canonical text: Artifact #6 §0.5, §0.9, §1.1 to
 * §1.6 and line 38 (grade, quality, confidence, coverage and decision are
 * separate); Artifact #4 §0.5 and SC-INV-01.
 */
const relationSymbol: Record<string, string> = {
  supports: "✓",
  corroborates: "✓✓",
  qualifies: "◐",
  disputes: "✕",
  unknown: "?",
};

const notConvertedInto = ["Safe", "Failed", "Zero risk", "N/A"];

export function EvidenceUnknown() {
  const scoring = links.doc("04-scoring-framework.md");
  const evidence = links.doc("06-evidence-model.md");
  return (
    <section id="unknown" className="section sectionPaper" aria-labelledby="unknown-title">
      <div className="container">
        <SectionHead
          id="unknown-title"
          kicker="06 · Evidence and UNKNOWN"
          title="UNKNOWN stays UNKNOWN."
          lede={
            <p>
              When the evidence is absent, insufficient or materially conflicting, the answer is UNKNOWN. It is not
              quietly turned into a favourable conclusion, and not automatically into an adverse one. It stays visible
              until sufficient evidence and accountable review resolve it.
            </p>
          }
        />

        <div className="unknownLayout">
          <div className="unknownPanel">
            <ul className="neqList" aria-label="UNKNOWN is never silently converted into">
              {notConvertedInto.map((x) => (
                <li key={x}>
                  <span className="stateBadge state-unknown">
                    <span aria-hidden="true">? </span>UNKNOWN
                  </span>
                  <span className="neq" aria-hidden="true">
                    ≠
                  </span>
                  <span className="visuallyHidden"> is not </span>
                  <span className="neqTo">{x}</span>
                </li>
              ))}
            </ul>
            <blockquote className="invariant" cite={scoring}>
              <p className="miniLabel">
                Invariant SC-INV-01 · <Ext href={scoring}>Artifact #4 · Scoring Framework</Ext>
              </p>
              <p className="invariantText">UNKNOWN is not zero, weak, safe or effective.</p>
            </blockquote>
          </div>

          <div id="evidence" className="evidencePanel">
            <h3 className="subTitle">How evidence relates to an assertion</h3>
            <ul className="relations" aria-label="Evidence relations, Artifact #6 §0.9, and the UNKNOWN state">
              {evidenceRelations.map((r) => (
                <li key={r.key} className={`relation state-${r.key}`}>
                  <span className="relSymbol" aria-hidden="true">
                    {relationSymbol[r.key]}
                  </span>
                  <span className="relLabel">{r.label}</span>
                  <span className="relText">{r.text}</span>
                </li>
              ))}
            </ul>
            <p className="separationNote">
              <strong>Grade is not confidence.</strong>{" "}
              <q>
                The model separates evidence grade, evidence quality, assertion confidence, coverage and reviewer
                decision because combining them creates false certainty.
              </q>
            </p>
          </div>
        </div>

        <div className="grades">
          <h3 className="subTitle">Evidence grades E0 to E5</h3>
          <p className="gradesNote">
            A grade says what kind of evidence it is. It does not say how confident anyone should be, and higher grades
            still hold only for the scope, period and conditions observed.
          </p>
          <ol className="gradeScale" aria-label="Evidence grades, Artifact #6 §1.1 to §1.6">
            {evidenceGrades.map((g) => (
              <li key={g.grade} className={`grade grade-${g.grade.toLowerCase()}`}>
                <span className="gradeId">{g.grade}</span>
                <span className="gradeName">{g.name}</span>
                <Detail as="p" className="gradeMeaning">
                  {g.meaning}
                </Detail>
                <Detail as="p" className="gradeSupports">
                  {g.supports}
                </Detail>
              </li>
            ))}
          </ol>
          <ul className="gradeRules" aria-label="How to read evidence grades, Artifact #6 §1.8">
            <li>
              <strong>Grade is not sufficiency.</strong> Meeting the grade minimum is necessary but not sufficient;
              relevance, scope, currentness, representativeness, conflict status and an approved reviewer decision still
              govern.
            </li>
            <li>
              <strong>A high grade can confirm an adverse state.</strong> A low grade can weakly suggest a favorable state.
            </li>
            <li>
              <strong>Grade is its own quantity.</strong> Never add evidence grade to control effectiveness, severity,
              maturity or risk as if they were the same quantity.
            </li>
          </ul>
        </div>

        <div className="unknownStates">
          <h3 className="subTitle">UNKNOWN is not Not Tested.</h3>
          <p>They are distinct non-numeric result states with different meanings.</p>
          <div className="tableWrap" role="region" aria-label="UNKNOWN and Not Tested table" tabIndex={0}>
            <table className="dataTable">
              <caption className="visuallyHidden">UNKNOWN and Not Tested, Artifact #6 §0.5 and Artifact #4 §0.5</caption>
              <thead>
                <tr>
                  <th scope="col">State</th>
                  <th scope="col">Meaning</th>
                  <th scope="col">Numeric treatment</th>
                  <th scope="col">Reporting treatment</th>
                </tr>
              </thead>
              <tbody>
                {unknownVsNotTested.map((s) => (
                  <tr key={s.state}>
                    <th scope="row">{s.state}</th>
                    <td>{s.meaning}</td>
                    <td>{s.numeric}</td>
                    <td>{s.reporting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong>Neither may be silently converted into a fabricated effectiveness result.</strong> Evidence grade E0
            can support either, according to context: <q>The only defensible conclusion is UNKNOWN or Not Tested.</q>
          </p>
          <p className="resultStatesLine">
            <span className="miniLabel">Distinct non-numeric result states</span>
          </p>
          <ul className="chipList" aria-label="Distinct non-numeric result states, Artifact #4 §0.5">
            {nonNumericResultStates.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
          <p>
            They must never be silently collapsed into one another, into a score, or into a pass/fail. AI Trust Graph
            deliberately produces <strong>no single overall trust score</strong>.
          </p>
        </div>

        <SourceNote>
          <Ext href={evidence}>Artifact #6 · Evidence Model</Ext> §0.5 state meanings, §0.9 evidence relations, §1.1 to
          §1.6 grades, §1.8 reading rules, and the §0.3 separation sentence (verbatim).{" "}
          <Ext href={scoring}>Artifact #4 · Scoring Framework</Ext> §0.5 numeric treatment and invariant SC-INV-01
          (verbatim). Symbols are a website reading aid.
        </SourceNote>
      </div>
    </section>
  );
}
