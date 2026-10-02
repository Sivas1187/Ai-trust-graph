"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  exAssumptions,
  exAuthority,
  exComponents,
  exConclusion,
  exConsequence,
  exControls,
  exDecision,
  exEdges,
  exEvidence,
  exStateLabel,
  exUnknowns,
  type ExState,
} from "./exampleData";

/**
 * Worked synthetic example with four views. Before hydration (and without
 * JavaScript) every view is shown in order with its heading. After hydration
 * the views become an ARIA tab set with arrow-key navigation.
 */
const views = [
  { id: "system", label: "System" },
  { id: "graph", label: "Graph" },
  { id: "evidence", label: "Evidence" },
  { id: "decision", label: "Decision" },
] as const;
type ViewId = (typeof views)[number]["id"];

const stateSymbol: Record<ExState, string> = { supported: "✓", candidate: "◇", unknown: "?", nottested: "–" };

function State({ s }: { s: ExState }) {
  return (
    <span className={`stateBadge state-${s}`}>
      <span aria-hidden="true">{stateSymbol[s]} </span>
      {exStateLabel[s]}
    </span>
  );
}

export function WorkedExample() {
  const [enhanced, setEnhanced] = useState(false);
  const [active, setActive] = useState<ViewId>("system");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => setEnhanced(true), []);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % views.length;
    if (e.key === "ArrowLeft") next = (i - 1 + views.length) % views.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = views.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(views[next].id);
    tabs.current[next]?.focus();
  };

  const panel = (id: ViewId) => ({
    id: `ex-panel-${id}`,
    className: "exPanel",
    ...(enhanced
      ? { role: "tabpanel" as const, "aria-labelledby": `ex-tab-${id}`, hidden: active !== id, tabIndex: 0 }
      : { "aria-labelledby": `ex-h-${id}` }),
  });

  return (
    <div className="example" data-enhanced={enhanced ? "true" : undefined}>
      {enhanced && (
        <div className="exTabs" role="tablist" aria-label="Views of the worked example">
          {views.map((v, i) => (
            <button
              key={v.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`ex-tab-${v.id}`}
              aria-selected={active === v.id}
              aria-controls={`ex-panel-${v.id}`}
              tabIndex={active === v.id ? 0 : -1}
              className="exTab"
              onClick={() => setActive(v.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="exTabNum" aria-hidden="true">
                {i + 1}
              </span>
              {v.label}
            </button>
          ))}
        </div>
      )}

      <div {...panel("system")}>
        <h3 id="ex-h-system" className="exPanelTitle">
          System view
        </h3>
        <ul className="exComponents">
          {exComponents.map((c) => (
            <li key={c.id} className={`exComp exComp-${c.id}`}>
              <span className="exKind">{c.kind}</span>
              <span className="exName">{c.name}</span>
              <span className="exNote">{c.note}</span>
            </li>
          ))}
        </ul>
        <h4 className="exSub">Stated assumptions</h4>
        <ul className="exPlain">
          {exAssumptions.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <div {...panel("graph")}>
        <h3 id="ex-h-graph" className="exPanelTitle">
          Graph view
        </h3>
        <ol className="exEdges">
          {exEdges.map((e, i) => (
            <li key={i} className={`exEdge state-${e.state}${e.boundary ? " exEdgeBoundary" : ""}`}>
              <span className="exTriple">
                <span className="exNode">{e.from}</span>
                <span className="exPred">{e.predicate}</span>
                <span className="exNode">{e.to}</span>
              </span>
              <span className="exMeta">
                <State s={e.state} />
                <span className="exGrade">Evidence {e.grade}</span>
                {e.boundary && <span className="exBoundary">Crosses trust boundary</span>}
              </span>
              {e.condition && <span className="exCondition">Condition: {e.condition}</span>}
            </li>
          ))}
        </ol>
        <h4 className="exSub">Authority assertions, each assessed separately</h4>
        <ul className="exAuthority">
          {exAuthority.map((a) => (
            <li key={a.claim}>
              <span className="exClaim">{a.claim}</span>
              <State s={a.state} />
              <span className="exBasis">{a.basis}</span>
            </li>
          ))}
        </ul>
      </div>

      <div {...panel("evidence")}>
        <h3 id="ex-h-evidence" className="exPanelTitle">
          Evidence view
        </h3>
        <div className="exEvidenceGrid">
          <div>
            <h4 className="exSub">Evidence available</h4>
            <ul className="exEvidence">
              {exEvidence.available.map((ev) => (
                <li key={ev.item}>
                  <span className="exGrade">{ev.grade}</span>
                  <span className="exEvItem">{ev.item}</span>
                  <span className="exRel">
                    {ev.relation} <span className="exRelTarget">{ev.target}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="exSub">Evidence missing</h4>
            <ul className="exMissing">
              {exEvidence.missing.map((m) => (
                <li key={m}>
                  <span className="exMissingMark" aria-hidden="true">
                    ?
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h4 className="exSub">Controls on the path</h4>
        <ul className="exAuthority">
          {exControls.map((c) => (
            <li key={c.control}>
              <span className="exClaim">{c.control}</span>
              <State s={c.state} />
              <span className="exBasis">{c.role}</span>
            </li>
          ))}
        </ul>
      </div>

      <div {...panel("decision")}>
        <h3 id="ex-h-decision" className="exPanelTitle">
          Decision view
        </h3>
        <h4 className="exSub">Potential consequence</h4>
        <p>{exConsequence}</p>
        <h4 className="exSub">Bounded conclusion</h4>
        <ul className="exConclusion">
          {exConclusion.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <h4 className="exSub">Remaining UNKNOWNs</h4>
        <ul className="exMissing">
          {exUnknowns.map((u) => (
            <li key={u}>
              <span className="exMissingMark" aria-hidden="true">
                ?
              </span>
              {u}
            </li>
          ))}
        </ul>
        <div className="exDecision">
          <p>{exDecision.finding}</p>
          <p>{exDecision.decision}</p>
          <p className="exDecisionNote">{exDecision.note}</p>
        </div>
      </div>
    </div>
  );
}
