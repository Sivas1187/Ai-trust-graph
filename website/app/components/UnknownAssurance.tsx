import { links, nonNumericResultStates, unknownVsNotTested } from "../content";
import { MarginReference } from "./Marginalia";
import { PageIndexReturn } from "./PageIndexReturn";

/**
 * UNKNOWN — an assurance invariant, set on graphite.
 *
 * The dominant assertion "UNKNOWN stays UNKNOWN.", then a typographic
 * non-equivalence argument (UNKNOWN ≠ Safe / Failed / Zero risk / N/A), the
 * SC-INV-01 invariant, and the distinction from Not Tested — two distinct
 * non-numeric result states, set as a register rather than side-by-side cards.
 * No alert, warning, traffic-light or failure styling: UNKNOWN is an
 * assurance state, not an error. Numeric and reporting treatment sits in one
 * native disclosure.
 *
 * Sources: Artifact #6 Evidence Model §0.5 (state meanings) and §1.1 (E0);
 * Artifact #4 Scoring Framework §0.5 (numeric and reporting treatment,
 * non-numeric states) and SC-INV-01; README (no overall trust score).
 */

const notConvertedInto = ["Safe", "Failed", "Zero risk", "N/A"];

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function UnknownAssurance() {
  const scoring = links.doc("04-scoring-framework.md");
  const evidence = links.doc("06-evidence-model.md");
  return (
    <section id="unknown" className="unknownAct" aria-labelledby="unknown-title">
      <div className="actFrame">
        <div className="actIntro">
          <MarginReference className="marginRefSide">
            <A href={scoring}>Artifact #4</A>
            <br />
            §0.5 · SC-INV-01
            <br />
            <A href={evidence}>Artifact #6</A>
            <br />
            §0.5 · §1.1
          </MarginReference>
          <h2 id="unknown-title" className="unknownTitle">
            <span>UNKNOWN</span> <span className="unknownStays">stays</span> <span>UNKNOWN.</span>
          </h2>
          {/* The unresolved motif from Act II: an open, dashed ring. Decorative. */}
          <svg className="unknownMotif" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
            <line x1="4" y1="116" x2="48" y2="72" />
            <circle cx="60" cy="60" r="16" />
          </svg>
          <p className="unknownLead">
            Insufficient evidence does not silently become a favourable — or an adverse — conclusion. UNKNOWN remains
            visible until sufficient evidence and accountable review resolve the material assertion.
          </p>
        </div>

        <div className="unknownBody">
          <ul className="unknownNot" aria-label="UNKNOWN is never silently converted into">
            {notConvertedInto.map((x) => (
              <li key={x}>
                <span className="unknownFrom">UNKNOWN</span>
                <span className="unknownNeq" aria-hidden="true">
                  {" ≠ "}
                </span>
                <span className="visuallyHidden"> is not </span>
                <span className="unknownTo">{x}</span>
              </li>
            ))}
          </ul>
          <blockquote className="unknownInvariant" cite={scoring}>
            <p>
              <span className="noteRuleLabel">
                Invariant SC-INV-01 · <A href={scoring}>Artifact #4 — Scoring Framework</A>
              </span>
              UNKNOWN is not zero, weak, safe or effective.
            </p>
          </blockquote>
        </div>

        <div className="unknownStates">
          <h3 className="unknownStatesTitle">UNKNOWN is not Not Tested.</h3>
          <p className="unknownStatesLede">They are distinct non-numeric result states with different meanings.</p>
          <dl className="stateRegister">
            {unknownVsNotTested.map((st) => (
              <div key={st.state}>
                <dt>{st.state}</dt>
                <dd>{st.meaning}</dd>
              </div>
            ))}
          </dl>
          <details className="unknownDetails">
            <summary>Numeric and reporting treatment</summary>
            <table className="stateTable">
              <caption className="visuallyHidden">Numeric and reporting treatment, Artifact #4 §0.5</caption>
              <thead>
                <tr>
                  <th scope="col">State</th>
                  <th scope="col">Numeric treatment</th>
                  <th scope="col">Reporting treatment</th>
                </tr>
              </thead>
              <tbody>
                {unknownVsNotTested.map((st) => (
                  <tr key={st.state}>
                    <th scope="row">{st.state}</th>
                    <td>{st.numeric}</td>
                    <td>{st.reporting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
          <p className="unknownRule">
            <strong>Neither may be silently converted into a fabricated effectiveness result.</strong> Evidence grade
            E0 (no evidence) can support either, according to context:{" "}
            <q>The only defensible conclusion is UNKNOWN or Not Tested.</q>
          </p>
        </div>

        <div className="unknownResultStates">
          <p className="noteLabel" id="result-states-label">
            Distinct non-numeric result states
          </p>
          <ul className="stateIds" aria-labelledby="result-states-label">
            {nonNumericResultStates.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="unknownNote">
            Each state has its own numeric and reporting treatment. They must never be silently collapsed into one
            another, into a score, or into a pass/fail. AI Trust Graph deliberately produces{" "}
            <strong>no single overall trust score</strong>.
          </p>
        </div>

        <MarginReference className="marginRefEnd actRefEnd">
          <A href={scoring}>Artifact #4</A> §0.5 · SC-INV-01 · <A href={evidence}>Artifact #6</A> §0.5 · §1.1
        </MarginReference>
        <PageIndexReturn />
      </div>
    </section>
  );
}
