"use client";

import { useEffect, useState } from "react";
import { sigEdges, sigNodes, sigOrder, stateLabel, type SigEdge, type SigNode } from "./signatureData";

/**
 * Signature figure. Desktop: an SVG graph plus an inspector; selecting an
 * element (button, keyboard or touch) highlights it in the drawing and shows
 * its detail. Narrow screens: the same elements as a vertical path, each with
 * its detail. Before hydration (or without JavaScript) every detail is shown,
 * so nothing depends on script.
 */

const nodeByKey = Object.fromEntries(sigNodes.map((n) => [n.key, n]));
const edgeByKey = Object.fromEntries(sigEdges.map((e) => [e.key, e]));
const R = 16;

function edgeGeometry(e: SigEdge) {
  const a = nodeByKey[e.from];
  const b = nodeByKey[e.to];
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  const ux = (b.x - a.x) / len;
  const uy = (b.y - a.y) / len;
  const x1 = a.x + ux * (R + 4);
  const y1 = a.y + uy * (R + 4);
  const x2 = b.x - ux * (R + 8);
  const y2 = b.y - uy * (R + 8);
  const bend = e.bend ?? 0;
  const mx = (x1 + x2) / 2 - uy * bend;
  const my = (y1 + y2) / 2 + ux * bend;
  // Quadratic curve; the visual midpoint of the curve is halfway between control point and chord midpoint.
  const vx = ((x1 + x2) / 2 + mx) / 2;
  const vy = ((y1 + y2) / 2 + my) / 2;
  return { d: `M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`, vx, vy, ux, uy };
}

function Detail({ k }: { k: string }) {
  const node: SigNode | undefined = nodeByKey[k];
  const edge: SigEdge | undefined = edgeByKey[k];
  if (node)
    return (
      <div className="sigDetail">
        <p className="sigDetailKind">{node.kind}</p>
        <p className="sigDetailTitle">{node.label}</p>
        <p>{node.note}</p>
      </div>
    );
  const e = edge!;
  return (
    <div className="sigDetail">
      <p className="sigDetailKind">
        Relationship · {nodeByKey[e.from].label} → {nodeByKey[e.to].label}
      </p>
      <p className="sigDetailTitle">
        <code>{e.predicate}</code>
      </p>
      <dl className="sigFacts">
        <div>
          <dt>State</dt>
          <dd className={`stateText state-${e.state}`}>
            <span className="stateGlyph" aria-hidden="true">
              {e.state === "observed" ? "━" : e.state === "candidate" ? "┅" : "?"}
            </span>{" "}
            {stateLabel[e.state]}
          </dd>
        </div>
        <div>
          <dt>Evidence</dt>
          <dd>{e.evidence ? `${e.evidence} linked (illustrative)` : "None linked"}</dd>
        </div>
        {e.condition && (
          <div>
            <dt>Condition</dt>
            <dd>{e.condition.replace("?", "")} (not yet evidenced)</dd>
          </div>
        )}
        {e.breakpoint && (
          <div>
            <dt>Control breakpoint</dt>
            <dd>{e.breakpoint}</dd>
          </div>
        )}
        {e.crossesBoundary && (
          <div>
            <dt>Boundary</dt>
            <dd>Crosses the trust boundary</dd>
          </div>
        )}
      </dl>
      <p>{e.note}</p>
      <p className="sigCaveat">
        <span className="sigCaveatLabel">Ontology caveat</span> {e.caveat}
      </p>
    </div>
  );
}

export function SignatureGraph() {
  const [active, setActive] = useState<string>("e-authz");
  const [enhanced, setEnhanced] = useState(false);
  useEffect(() => setEnhanced(true), []);

  return (
    <div className="sig" data-enhanced={enhanced ? "true" : "false"} data-active={active}>
      <div className="sigCanvas" role="region" aria-label="Signature graph drawing" tabIndex={0}>
        <p className="sigScrollHint">The drawing scrolls sideways. The list below describes every element.</p>
        <svg viewBox="0 0 1040 600" className="sigSvg" role="img" aria-labelledby="sig-title sig-desc">
          <title id="sig-title">Signature AI Trust Graph: a synthetic path from an employee to a business system</title>
          <desc id="sig-desc">
            An employee instructs an agent. The agent invokes a model, retrieves from a data source (inferred, not yet
            evidenced) and invokes a tool through a human approval step. The tool authenticates as a service identity. The
            identity connects to a business system across a trust boundary; whether it is authorised to act there is
            UNKNOWN. If every condition held, the business system would trigger a potential consequence. The list that
            follows the figure describes every element.
          </desc>
          <defs>
            {(["observed", "candidate", "unknown"] as const).map((s) => (
              <marker key={s} id={`sig-arrow-${s}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" className={`sigArrow sigArrow-${s}`} />
              </marker>
            ))}
            <pattern id="sig-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" className="sigHatch" />
            </pattern>
          </defs>

          <g className="sigBoundary">
            <rect x="790" y="40" width="240" height="530" rx="14" />
            <text x="1018" y="64" textAnchor="end">
              trust boundary
            </text>
          </g>

          {sigEdges.map((e) => {
            const g = edgeGeometry(e);
            const isActive = active === e.key;
            return (
              <g key={e.key} className={`sigEdge sigEdge-${e.state}${isActive ? " isActive" : ""}`}>
                <path d={g.d} markerEnd={`url(#sig-arrow-${e.state})`} />
                <text x={g.vx} y={g.vy - 10} textAnchor="middle" className="sigPredicate">
                  {e.predicate}
                </text>
                {e.evidence && (
                  <g className="sigEvidence" transform={`translate(${g.vx} ${g.vy + 16})`}>
                    <rect x="-16" y="-10" width="32" height="20" rx="4" />
                    <text y="4" textAnchor="middle">
                      {e.evidence}
                    </text>
                  </g>
                )}
                {e.state === "unknown" && (
                  <g className="sigUnknownTag" transform={`translate(${g.vx} ${g.vy + 16})`}>
                    <rect x="-40" y="-11" width="80" height="22" rx="4" fill="url(#sig-hatch)" />
                    <rect x="-40" y="-11" width="80" height="22" rx="4" className="sigUnknownBorder" />
                    <text y="4" textAnchor="middle">
                      UNKNOWN
                    </text>
                  </g>
                )}
                {e.condition && (
                  <g className="sigCondition" transform={`translate(${g.vx} ${g.vy + (e.state === "unknown" ? 44 : 44)})`}>
                    <path d="M0 -8 L8 0 L0 8 L-8 0 Z" />
                    <text x={e.conditionLeft ? -13 : 13} y="4" textAnchor={e.conditionLeft ? "end" : "start"}>
                      {e.condition}
                    </text>
                  </g>
                )}
                {e.breakpoint && (
                  <g className="sigBreakpoint" transform={`translate(${g.vx + 28} ${g.vy})`}>
                    <line x1="0" y1="-16" x2="0" y2="16" />
                    <text x="0" y="38" textAnchor="middle">
                      {e.breakpointLabel ?? e.breakpoint}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {sigNodes.map((n) => (
            <g
              key={n.key}
              className={`sigNode sigTone-${n.tone}${n.key === "consequence" ? " sigNodeConsequence" : ""}${active === n.key ? " isActive" : ""}`}
              transform={`translate(${n.x} ${n.y})`}
            >
              {n.key === "consequence" ? <path d="M0 -18 L18 14 L-18 14 Z" /> : <circle r={R} />}
              <text y={R + 24} textAnchor="middle" className="sigLabel">
                {n.label}
              </text>
              <text y={R + 41} textAnchor="middle" className="sigKind">
                {n.kind}
              </text>
            </g>
          ))}
        </svg>

        <div className="sigLegend" aria-label="Legend">
          <p className="legendTitle">Legend</p>
          <ul>
            <li>
              <span className="lgLine lgObserved" aria-hidden="true" /> Observed, approved assertion
            </li>
            <li>
              <span className="lgLine lgCandidate" aria-hidden="true" /> Proposed or inferred (candidate)
            </li>
            <li>
              <span className="lgLine lgUnknown" aria-hidden="true" /> UNKNOWN: no sufficient evidence
            </li>
            <li>
              <span className="lgDiamond" aria-hidden="true" /> Condition that must hold
            </li>
            <li>
              <span className="lgBar" aria-hidden="true" /> Control breakpoint
            </li>
            <li>
              <span className="lgEvidence" aria-hidden="true">
                E4
              </span>{" "}
              Evidence grade linked to the assertion
            </li>
            <li>
              <span className="lgTriangle" aria-hidden="true" /> Potential consequence
            </li>
            <li>
              <span className="lgBoundary" aria-hidden="true" /> Trust boundary
            </li>
          </ul>
        </div>
      </div>

      <div className="sigInspector">
        <p className="sigInspectorHint" id="sig-hint">
          Select any element to inspect it. The path reads from top to bottom.
        </p>
        <div className="sigInspectorBody">
        <ol className="sigPath" aria-describedby="sig-hint">
          {sigOrder.map((k) => {
            const node = nodeByKey[k];
            const edge = edgeByKey[k];
            const isActive = active === k;
            const title = node ? node.label : `${edge.predicate}`;
            const sub = node ? node.kind : `${nodeByKey[edge.from].label} → ${nodeByKey[edge.to].label}`;
            return (
              <li key={k} className={`sigStep ${node ? "sigStepNode" : `sigStepEdge sigStepEdge-${edge.state}`} ${isActive ? "isActive" : ""}`}>
                <button type="button" aria-pressed={isActive} onClick={() => setActive(k)} className="sigStepBtn">
                  <span className="sigStepTitle">{node ? title : <code>{title}</code>}</span>
                  <span className="sigStepSub">
                    {sub}
                    {edge?.state === "unknown" && <span className="unknownPill">UNKNOWN</span>}
                    {edge?.state === "candidate" && <span className="candidatePill">candidate</span>}
                  </span>
                </button>
                <div className="sigStepDetail">
                  <Detail k={k} />
                </div>
              </li>
            );
          })}
        </ol>
        {enhanced && (
          <div className="sigPanel" aria-live="polite">
            <Detail k={active} />
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
