import { evidenceGrades, links } from "../content";
import { MarginReference } from "./Marginalia";
import { PageIndexReturn } from "./PageIndexReturn";

/**
 * Evidence — six grades of evidentiary support.
 *
 * E0–E5 as textual stops on one quiet evidentiary axis (hairline, identical
 * hollow nodes; vertical on narrow screens). Order is canonical and means
 * increasing evidentiary support only — not safety, desirability, compliance
 * or maturity — and the axis says so in text. No colour progression, sizes,
 * fills or ladder. Each grade's canonical meaning and what it can support sit
 * in one native disclosure, as a register.
 *
 * Source: Artifact #6 Evidence Model §1.1–§1.6 (grades, verbatim) and §1.8
 * (grade does not equal truth; anti-error rule).
 */
export function EvidenceSequence() {
  const evidence = links.doc("06-evidence-model.md");
  return (
    <section id="evidence" className="evidenceAct" aria-labelledby="evidence-title">
      <div className="actFrame">
        <div className="actIntro">
          <MarginReference className="marginRefSide">
            <a href={evidence} rel="noopener noreferrer">
              Artifact #6
            </a>
            <br />
            §1.1–§1.8
          </MarginReference>
          <h2 id="evidence-title" className="actTitle">
            Six grades of evidentiary support.
          </h2>
          <p className="actLede">Grade measures evidentiary support, not desirability, safety or compliance.</p>
        </div>

        <figure className="evAxis">
          <ol className="evLine" aria-label="Evidence grades E0 to E5, in order of increasing evidentiary support">
            {evidenceGrades.map((g) => (
              <li key={g.grade} className="evStop">
                <span className="evGrade">{g.grade}</span>
                <span className="visuallyHidden"> — </span>
                <span className="evGradeName">{g.name}</span>
              </li>
            ))}
          </ol>
          <figcaption className="evAxisNote">
            <span aria-hidden="true">E0 → E5 </span>
            Increasing evidentiary support only. The order does not measure safety, desirability or compliance.
          </figcaption>
        </figure>

        <details className="evDetails">
          <summary>Meaning, and what each grade can support</summary>
          <dl className="evRegister">
            {evidenceGrades.map((g) => (
              <div key={g.grade} className="evEntry">
                <dt>
                  <span className="evGrade">{g.grade}</span> <span className="evEntryName">{g.name}</span>
                </dt>
                <dd>
                  <span className="noteLabel">Meaning</span> {g.meaning}
                </dd>
                <dd>
                  <span className="noteLabel">What it can support</span> {g.supports}
                </dd>
              </div>
            ))}
          </dl>
        </details>

        <ul className="evRules" aria-label="How to read evidence grades">
          <li>
            <strong>Grade is not sufficiency.</strong> Meeting the grade minimum is necessary but not sufficient;
            relevance, scope, currentness, representativeness, conflict status and an approved reviewer decision still
            govern.
          </li>
          <li>
            <strong>A high grade can confirm an adverse state.</strong> A low grade can weakly suggest a favorable
            state.
          </li>
          <li>
            <strong>Grade is its own quantity.</strong> Never add evidence grade to control effectiveness, severity,
            maturity or risk as if they were the same quantity.
          </li>
        </ul>

        <MarginReference className="marginRefEnd actRefEnd">
          <a href={evidence} rel="noopener noreferrer">
            Artifact #6 — Evidence Model
          </a>{" "}
          §1.1–§1.8 · the full sufficiency rules are deliberately not summarized here
        </MarginReference>
        <PageIndexReturn />
      </div>
    </section>
  );
}
