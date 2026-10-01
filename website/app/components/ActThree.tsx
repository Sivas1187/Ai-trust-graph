import {
  authorityClasses,
  canonicalReasoningChain,
  distinctAssertions,
  links,
  pathRoles,
  pathValidationStates,
  theoryMap,
} from "../content";
import { BreakpointExplorer } from "./BreakpointExplorer";
import { MarginReference } from "./Marginalia";
import { PageIndexReturn } from "./PageIndexReturn";

/**
 * Act III — how the method thinks.
 *
 * The canonical Artifact #2 §0.10 reasoning chain set as one typographic
 * argument (no numbering, dots, rail or cards), the §0.10 theory map in one
 * native disclosure, and footnote-style annotations keyed a–d to four stages:
 *   a  Authority and Influence — "Access is not authority." (§3.6, §5.2)
 *   b  Controls — control breakpoints (§1.8, §6.3, §6.6)
 *   c  Evidence — continues in the Evidence section (not redesigned yet)
 *   d  Decision — "Accountable decision" (from the §0.10 theory map: "Evidence,
 *      confidence and accountable decision."); plain text, no destination yet.
 *      Deliberately not linked to UNKNOWN: Decision is not an assurance state.
 * The keys are editorial pointers, not a mapping of questions onto stages.
 */

const notes: Record<string, { key: string; id: string }> = {
  "Authority and Influence": { key: "a", id: "authority" },
  Controls: { key: "b", id: "breakpoints" },
  Evidence: { key: "c", id: "note-evidence" },
  Decision: { key: "d", id: "note-decision" },
};

function Ref({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
}

function NoteHead({ k, stage }: { k: string; stage: string }) {
  return (
    <p className="noteHead">
      <span className="noteKey" aria-hidden="true">
        {k}
      </span>
      <span className="visuallyHidden">Annotation {k}: </span>
      <i>{stage}</i>
    </p>
  );
}

export function ActThree() {
  const ccm = links.doc("02-core-conceptual-model.md");
  const last = canonicalReasoningChain.length - 1;
  return (
    <section id="flow" className="act3" aria-labelledby="flow-title">
      <div className="act3Frame">
        <div className="act3Intro">
          <MarginReference className="marginRefSide">
            <Ref href={ccm}>
              Artifact #2
              <br />
              Core Conceptual Model
            </Ref>
            <br />
            §0.10
          </MarginReference>
          <h2 id="flow-title" className="actTitle">
            From what exists to what can be defended.
          </h2>
          <p className="act3Spine">
            The Core Conceptual Model calls this chain <q>the intellectual spine of the methodology</q>.
          </p>
        </div>

        {/* The ordered list is the source of truth; arrows are aria-hidden text. No numbering,
            markers, rail or fill: the chain is an argument, not a progress tracker. */}
        <ol className="chain" role="list" aria-label="Canonical reasoning chain, Artifact #2 §0.10">
          {canonicalReasoningChain.map((stage, i) => {
            const note = notes[stage];
            return (
              <li key={stage}>
                {note ? (
                  <a className="chainAnchor" href={`#${note.id}`}>
                    <span className="chainStage">{stage}</span>
                    <sup className="noteKey" aria-hidden="true">
                      {note.key}
                    </sup>
                    <span className="visuallyHidden"> (annotation {note.key})</span>
                  </a>
                ) : (
                  <span className="chainStage">{stage}</span>
                )}
                {i < last && (
                  <span className="chainArrow" aria-hidden="true">
                    {" →"}
                  </span>
                )}{" "}
              </li>
            );
          })}
        </ol>

        <details className="act3Questions">
          <summary>Canonical reasoning questions</summary>
          <table className="act3Table">
            <caption className="visuallyHidden">Theory map, Artifact #2 §0.10</caption>
            <thead>
              <tr>
                <th scope="col">Question</th>
                <th scope="col">Concept</th>
              </tr>
            </thead>
            <tbody>
              {theoryMap.map((row) => (
                <tr key={row.question}>
                  <td className="act3Question">{row.question}</td>
                  <td>{row.concept}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>

        <div className="act3Notes">
          {/* a — Authority and Influence */}
          <article id="authority" className="note noteFull" aria-labelledby="authority-title">
            <MarginReference className="marginRefSide">
              <Ref href={ccm}>Artifact #2</Ref>
              <br />
              §3.6 · §5.2
            </MarginReference>
            <NoteHead k="a" stage="Authority and Influence" />
            <h3 id="authority-title" className="noteTitle">
              Access is not authority.
            </h3>
            <ul className="assertLine" aria-label="Distinct assertions">
              {distinctAssertions.map((a, i) => (
                <li key={a}>
                  {i > 0 && (
                    <span className="neq" aria-hidden="true">
                      ≠{" "}
                    </span>
                  )}
                  <span className="assertion">{a}</span>{" "}
                </li>
              ))}
            </ul>
            <p className="noteSmall">
              Each is a separate claim that needs its own evidence; none is silently inferred from another. An
              illustration of distinct assertions, not a canonical sequence, ladder or state machine.
            </p>
            <blockquote className="noteRule" cite={ccm}>
              <p>
                <span className="noteRuleLabel">Separation rule</span> The capability definition, its network
                reachability, granted authority and actual invocation are different concepts and require different
                relationships.
              </p>
            </blockquote>
            <div className="noteClasses">
              <p className="noteLabel" id="authority-classes-label">
                Authority classes
              </p>
              <ul className="inlineList" aria-labelledby="authority-classes-label">
                {authorityClasses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="noteSmall">
                Authority classes describe the kind of consequence an entity can cause. They are not maturity
                levels and should not be ranked without considering target, scope, conditions and criticality.
              </p>
            </div>
          </article>

          {/* b — Controls: control breakpoints */}
          <article id="breakpoints" className="note noteFull" aria-labelledby="bp-title">
            <MarginReference className="marginRefSide">
              <Ref href={ccm}>Artifact #2</Ref>
              <br />
              §1.8 · §6.3 · §6.6
            </MarginReference>
            <NoteHead k="b" stage="Controls" />
            <h3 id="bp-title" className="noteTitle">
              Where can a material path be interrupted?
            </h3>
            <p className="noteText">
              A control breakpoint is a node, relationship or boundary where an effective control can materially
              stop, constrain, detect or contain a path. Alternate and residual paths must still be checked.
            </p>
            <BreakpointExplorer />
            <details className="noteDisclosure">
              <summary>Path validation state and path role</summary>
              <p>
                <span className="noteLabel">Validation state</span>{" "}
                <span className="inlineText">{pathValidationStates.join(" · ")}</span>
              </p>
              <p>
                <span className="noteLabel">Path role</span>{" "}
                <span className="inlineText">{pathRoles.join(" · ")}</span>
              </p>
              <p className="noteSmall">
                Validation state and role are orthogonal dimensions and are not collapsed into one state machine.
              </p>
            </details>
          </article>

          {/* c points to the Evidence section; d stays a plain-text note until a later
              visual-reset PR gives Decision its own destination. */}
          <ul className="noteShort" aria-label="Where the chain continues">
            <li id="note-evidence">
              <a href="#evidence">
                <span className="noteKey" aria-hidden="true">
                  c
                </span>
                <span className="visuallyHidden">Annotation c: </span>
                <i>Evidence</i> — Six grades of evidentiary support.
              </a>
            </li>
            <li id="note-decision">
              <span className="noteKey" aria-hidden="true">
                d
              </span>
              <span className="visuallyHidden">Annotation d: </span>
              <i>Decision</i> — Accountable decision.
            </li>
          </ul>
        </div>

        <MarginReference className="marginRefEnd act3RefEnd">
          <Ref href={ccm}>Artifact #2 Core Conceptual Model</Ref> · §0.10 · §3.6 · §5.2 · §1.8 · §6.3 · §6.6
        </MarginReference>
        <PageIndexReturn />
      </div>
    </section>
  );
}
