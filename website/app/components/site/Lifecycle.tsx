import { assessmentPhases, assessmentTypes, exitCriteria, lifecycleIntro, links, phaseIterationRule } from "../../content";
import { Detail, Ext, SectionHead, SourceNote } from "./Primitives";

/**
 * The thirteen-phase assessment lifecycle (Artifact #7 §0.11, verbatim names
 * and outcomes). This is the fieldwork lifecycle, not the reasoning chain.
 * Desktop: a staged loop of phase tiles with a return path from Reassess.
 * Mobile: a vertical timeline. Reassess points back to a new or updated run,
 * and the iteration rule is stated beside it, so the loop does not read as
 * strictly linear or as a closed state machine.
 */
export function Lifecycle() {
  const am = links.doc("07-assessment-methodology.md");
  return (
    <section id="lifecycle" className="section sectionPaper" aria-labelledby="lifecycle-title">
      <div className="container">
        <SectionHead
          id="lifecycle-title"
          kicker="08 · Assessment lifecycle"
          title="How an assessment is run."
          lede={
            <>
              <p>
                {lifecycleIntro} This is the fieldwork lifecycle: what an assessment team does, in what order, with which
                gates. It is a different construct from the nine-stage reasoning chain above, which describes how a
                conclusion is reasoned.
              </p>
              <p className="canonQuote">{phaseIterationRule}</p>
            </>
          }
        />

        <ol className="phases" aria-label="Thirteen assessment phases, Artifact #7 §0.11">
          {assessmentPhases.map((p) => (
            <li key={p.n} className={`phase phase-${p.n}${p.n === 13 ? " phaseReassess" : ""}`}>
              <span className="phaseNum">{String(p.n).padStart(2, "0")}</span>
              <span className="phaseName">{p.name}</span>
              <span className="phaseOutcome">{p.outcome}</span>
            </li>
          ))}
        </ol>
        <p className="loopNote">
          <svg className="loopIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20 12a8 8 0 1 1-3-6.2M20 4v5h-5" />
          </svg>
          Reassess starts a new or updated run when a trigger fires: a material change, an incident, an approved cadence
          or an approved event-driven signal. Phases may iterate; required gates may not be skipped.
        </p>

        <Detail className="lifecycleMore">
          <details>
            <summary>Phase exit gates</summary>
            {exitCriteria.intro.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <dl className="gateList">
              {exitCriteria.gates.map((g) => (
                <div key={g.test}>
                  <dt>{g.test}</dt>
                  <dd>{g.rule}</dd>
                </div>
              ))}
            </dl>
          </details>
          <details>
            <summary>Ten assessment types</summary>
            <dl className="gateList">
              {assessmentTypes.map((t) => (
                <div key={t.name}>
                  <dt>{t.name}</dt>
                  <dd>{t.definition}</dd>
                </div>
              ))}
            </dl>
          </details>
        </Detail>

        <SourceNote>
          <Ext href={am}>Artifact #7 · Assessment Methodology</Ext> §0.11 phases, outcomes and iteration rule; §0.12 exit
          gates; §1.1 to §1.10 assessment types (verbatim). The trigger examples under Reassess are website explanation
          drawn from the §1 assessment types.
        </SourceNote>
      </div>
    </section>
  );
}
