import { canonicalReasoningChain, links, theoryMap } from "../../content";
import { chainStages } from "../../site-content";
import { Detail, Ext, SectionHead, SourceNote } from "./Primitives";

/**
 * The canonical reasoning chain (Artifact #2 §0.10), nine stages in canonical
 * order, each with its §0.10 theory-map question and concept. Four stages link
 * to the place on the page where they are developed. The Decision note
 * (#decision) quotes Artifact #2 §7.4, §3.8 and §1.10 verbatim.
 */
const stageLink: Record<string, string> = {
  "Authority and Influence": "#authority",
  Controls: "#breakpoints",
  Evidence: "#evidence",
  Decision: "#decision",
};

export function ReasoningChain() {
  const ccm = links.doc("02-core-conceptual-model.md");
  return (
    <section id="flow" className="section sectionPaper" aria-labelledby="flow-title">
      <div className="container">
        <SectionHead
          id="flow-title"
          kicker="04 · Reasoning chain"
          title="From what exists to what can be defended."
          lede={
            <p>
              The reasoning chain is the conceptual spine of the methodology: nine stages, each answering one question.
              It is not the fieldwork plan. The thirteen-phase assessment lifecycle further down is a separate construct.
            </p>
          }
        />

        <p className="chainLine" aria-label="Canonical reasoning chain">
          {canonicalReasoningChain.map((s, i) => (
            <span key={s} className="chainLineItem">
              {s}
              {i < canonicalReasoningChain.length - 1 && (
                <span className="chainLineArrow" aria-hidden="true">
                  {" "}
                  →{" "}
                </span>
              )}
            </span>
          ))}
        </p>

        <ol className="chain" aria-label="Reasoning chain, Artifact #2 §0.10">
          {chainStages.map((c, i) => {
            const href = stageLink[c.stage];
            return (
              <li key={c.stage} className={`chainStep chainStep-${i + 1}`}>
                <span className="chainNum" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="chainStage">{href ? <a href={href}>{c.stage}</a> : c.stage}</h3>
                <p className="chainQuestion">{c.question}</p>
                <p className="chainConcept">{c.concept}</p>
                <Detail as="p" className="chainNote">
                  {c.note}
                </Detail>
              </li>
            );
          })}
        </ol>

        <div className="chainFoot">
          <SourceNote>
            Stage names and order: <Ext href={ccm}>Artifact #2 · Core Conceptual Model</Ext> §0.10 REASONING CHAIN
            (verbatim). Questions and concepts: the §0.10 theory map; its last row covers both Evidence and Decision.
            Stage notes are website explanation.
          </SourceNote>
          <details className="chainTheory depthDetail">
            <summary>The §0.10 theory map as published</summary>
            <div className="tableWrap" role="region" aria-label="Theory map table" tabIndex={0}>
            <table className="dataTable">
              <caption className="visuallyHidden">Theory map, Artifact #2 §0.10</caption>
              <thead>
                <tr>
                  <th scope="col">Question</th>
                  <th scope="col">Concept</th>
                </tr>
              </thead>
              <tbody>
                {theoryMap.map((r) => (
                  <tr key={r.question}>
                    <th scope="row">{r.question}</th>
                    <td>{r.concept}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </details>
        </div>

        <article id="decision" className="decisionNote" aria-labelledby="decision-title">
          <p className="kicker kickerSmall">Stage 9 · Decision</p>
          <h3 id="decision-title" className="decisionTitle">
            Accountable decision.
          </h3>
          <p className="decisionText">
            A finding is an evidence-linked assessment conclusion. A decision is accountable disposition. Keeping them
            separate prevents management acceptance or remediation preference from changing the assessed condition.
          </p>
          <p className="decisionSmall">
            This separation prevents observations, interpretations and management choices from being collapsed into a
            single status field. Human approval is required for material facts, findings, exceptions and risk decisions.
            Inference accelerates review; accountable approval determines accepted state.
          </p>
          <SourceNote>
            <Ext href={ccm}>Artifact #2 · Core Conceptual Model</Ext> §7.4 · §3.8 · §1.10 (verbatim).
          </SourceNote>
        </article>
      </div>
    </section>
  );
}
