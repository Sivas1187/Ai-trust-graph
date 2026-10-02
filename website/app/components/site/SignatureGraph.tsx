"use client";

import { useEffect, useState } from "react";
import { sigEdges, sigNodes, sigOrder, stateLabel, type SigEdge, type SigNode } from "./signatureData";

/**
 * Signature figure: the procurement path drawn with the methodology's own
 * vocabulary.
 *
 * - Desktop: a wide drawing (1040 × 600). Selecting an element in the
 *   drawing (pointer) or in the list (pointer or keyboard) highlights it and
 *   shows its detail in a side panel.
 * - Mobile: a separately composed vertical drawing (360 × 1160), so labels
 *   stay readable without zooming, followed by the same list with inline
 *   detail.
 * - Without JavaScript every detail is shown under its list item.
 * The list is the structured text alternative for both drawings.
 */

const nodeByKey = Object.fromEntries(sigNodes.map((n) => [n.key, n]));
const edgeByKey = Object.fromEntries(sigEdges.map((e) => [e.key, e]));
const R = 16;

type Mode = "d" | "m";
const pos = (n: SigNode, m: Mode) => (m === "d" ? { x: n.x, y: n.y } : { x: n.mx, y: n.my });

function edgeGeometry(e: SigEdge, m: Mode) {
  const a = pos(nodeByKey[e.from], m);
  const b = pos(nodeByKey[e.to], m);
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  const ux = (b.x - a.x) / len;
  const uy = (b.y - a.y) / len;
  const x1 = a.x + ux * (R + 4);
  const y1 = a.y + uy * (R + 4);
  const x2 = b.x - ux * (R + 8);
  const y2 = b.y - uy * (R + 8);
  const bend = (m === "d" ? e.bend : e.mbend) ?? 0;
  const cx = (x1 + x2) / 2 - uy * bend;
  const cy = (y1 + y2) / 2 + ux * bend;
  // The visual midpoint of a quadratic curve is halfway between the control point and the chord midpoint.
  const vx = ((x1 + x2) / 2 + cx) / 2;
  const vy = ((y1 + y2) / 2 + cy) / 2;
  return { d: `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`, vx, vy };
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
        {e.controlClaim && (
          <div>
            <dt>Control claim</dt>
            <dd>
              {e.controlClaim.claim} <span className="relWord">{e.controlClaim.relation}</span>: {e.controlClaim.by}
            </dd>
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

function Drawing({ m, active, onPick }: { m: Mode; active: string; onPick: (k: string) => void }) {
  const wide = m === "d";
  const id = (s: string) => `sig-${s}-${m}`;
  return (
    <svg
      viewBox={wide ? "0 0 1040 600" : "0 0 360 1160"}
      className={wide ? "sigSvg sigSvgDesktop" : "sigSvg sigSvgMobile"}
      role="img"
      aria-labelledby={`${id("title")} ${id("desc")}`}
    >
      <title id={id("title")}>Signature graph: the procurement path from an employee to a business system</title>
      <desc id={id("desc")}>
        An employee instructs an AI procurement agent. The agent invokes a model, which is hosted on a provider; retrieves
        supplier data (inferred, not yet evidenced, and conditional on the employee's context being passed); and invokes a
        procurement tool through a human approval step whose claimed scope is disputed by the evidence. The tool
        authenticates as a service identity. The identity connects to the business system across a trust boundary; whether
        it is authorised to act there is UNKNOWN. If every condition held, the business system would trigger a potential
        consequence. The list that follows the figure describes every element.
      </desc>
      <defs>
        {(["observed", "candidate", "unknown"] as const).map((s) => (
          <marker key={s} id={id(`arrow-${s}`)} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className={`sigArrow sigArrow-${s}`} />
          </marker>
        ))}
        <pattern id={id("hatch")} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" className="sigHatch" />
        </pattern>
      </defs>

      <g className="sigBoundary">
        {wide ? (
          <>
            <rect x="790" y="40" width="240" height="530" rx="14" />
            <text x="1018" y="64" textAnchor="end">
              trust boundary
            </text>
          </>
        ) : (
          <>
            <rect x="14" y="780" width="332" height="370" rx="14" />
            <text x="28" y="1138">
              trust boundary
            </text>
          </>
        )}
      </g>

      {sigEdges.map((e) => {
        const g = edgeGeometry(e, m);
        const isActive = active === e.key;
        const left = !wide && e.side === "left";
        // Wide drawing: labels above the line, tags below. Mobile: labels beside the (mostly vertical) line.
        const lab = wide
          ? { x: g.vx, y: g.vy - 10, anchor: "middle" as const }
          : { x: left ? g.vx - 12 : g.vx + 12, y: g.vy - 4, anchor: left ? ("end" as const) : ("start" as const) };
        const tagX = wide ? g.vx : left ? g.vx - 12 : g.vx + 12;
        const tagY = wide ? g.vy + 16 : g.vy + 14;
        const tagAlign = wide ? "middle" : left ? "end" : "start";
        const evW = 32;
        const unW = 80;
        const tagRectX = (w: number) => (tagAlign === "middle" ? -w / 2 : tagAlign === "end" ? -w : 0);
        const condY = wide ? g.vy + 44 : g.vy + 42;
        const condLeft = wide ? e.conditionLeft : left;
        const condText = wide ? e.condition : e.conditionShort ?? e.condition;
        return (
          <g
            key={e.key}
            className={`sigEdge sigEdge-${e.state}${isActive ? " isActive" : ""}`}
            onClick={() => onPick(e.key)}
          >
            <path d={g.d} markerEnd={`url(#${id(`arrow-${e.state}`)})`} />
            <path d={g.d} className="sigHit" />
            <text x={lab.x} y={lab.y} textAnchor={lab.anchor} className="sigPredicate">
              {e.predicate}
            </text>
            {e.evidence && (
              <g className="sigEvidence" transform={`translate(${tagX} ${tagY})`}>
                <rect x={tagRectX(evW)} y="-10" width={evW} height="20" rx="4" />
                <text x={tagRectX(evW) + evW / 2} y="4" textAnchor="middle">
                  {e.evidence}
                </text>
              </g>
            )}
            {e.state === "unknown" && (
              <g className="sigUnknownTag" transform={`translate(${tagX} ${tagY})`}>
                <rect x={tagRectX(unW)} y="-11" width={unW} height="22" rx="4" fill={`url(#${id("hatch")})`} />
                <rect x={tagRectX(unW)} y="-11" width={unW} height="22" rx="4" className="sigUnknownBorder" />
                <text x={tagRectX(unW) + unW / 2} y="4" textAnchor="middle">
                  UNKNOWN
                </text>
              </g>
            )}
            {condText && (
              <g className="sigCondition" transform={`translate(${tagX} ${condY})`}>
                <path d={`M${tagRectX(16) + 8} -8 l8 8 -8 8 -8 -8 Z`} />
                <text x={condLeft ? tagRectX(16) - 4 : tagRectX(16) + 22} y="4" textAnchor={condLeft ? "end" : "start"}>
                  {condText}
                </text>
              </g>
            )}
            {e.breakpoint && (
              <g className={`sigBreakpoint${e.controlClaim ? " sigBreakpointDisputed" : ""}`} transform={wide ? `translate(${g.vx + 28} ${g.vy})` : `translate(${g.vx} ${g.vy + 44})`}>
                {wide ? <line x1="0" y1="-16" x2="0" y2="16" /> : <line x1="-16" y1="0" x2="16" y2="0" />}
                <text x={wide ? 8 : 24} y={wide ? -22 : 5} textAnchor="start">
                  {e.breakpointLabel ?? e.breakpoint}
                </text>
                {e.controlClaim && (
                  <g className="sigDisputeTag" transform={wide ? "translate(8 -38)" : "translate(24 26)"}>
                    <text x="0" y="0" textAnchor="start">
                      ✕ scope disputed
                    </text>
                  </g>
                )}
              </g>
            )}
          </g>
        );
      })}

      {sigNodes.map((n) => {
        const p = pos(n, m);
        return (
          <g
            key={n.key}
            className={`sigNode sigTone-${n.tone}${n.key === "consequence" ? " sigNodeConsequence" : ""}${active === n.key ? " isActive" : ""}`}
            transform={`translate(${p.x} ${p.y})`}
            onClick={() => onPick(n.key)}
          >
            {n.key === "consequence" ? <path d="M0 -18 L18 14 L-18 14 Z" /> : <circle r={R} />}
            {wide ? (
              <text y={R + 24} textAnchor="middle" className="sigLabel">
                {n.label}
              </text>
            ) : (
              // Mobile: labels beside the node, so vertical edges never cross them.
              <text
                x={n.key === "consequence" ? 0 : n.mx === 180 ? -(R + 8) : R + 8}
                y={n.key === "consequence" ? R + 24 : 5}
                textAnchor={n.key === "consequence" ? "middle" : n.mx === 180 ? "end" : "start"}
                className="sigLabel"
              >
                {n.label}
              </text>
            )}
            <text y={R + 41} textAnchor="middle" className="sigKind">
              {n.kind}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function SignatureGraph() {
  const [active, setActive] = useState<string>("e-authz");
  const [enhanced, setEnhanced] = useState(false);
  useEffect(() => setEnhanced(true), []);

  return (
    <div className="sig" data-enhanced={enhanced ? "true" : "false"} data-active={active}>
      <div className="sigCanvas">
        <Drawing m="d" active={active} onPick={setActive} />
        <Drawing m="m" active={active} onPick={setActive} />

        <div className="sigLegend">
          <p className="legendTitle" id="sig-legend-title">
            Legend
          </p>
          <ul aria-labelledby="sig-legend-title">
            <li>
              <span className="lgLine lgObserved" aria-hidden="true" /> {stateLabel.observed}
            </li>
            <li>
              <span className="lgLine lgCandidate" aria-hidden="true" /> {stateLabel.candidate}
            </li>
            <li>
              <span className="lgLine lgUnknown" aria-hidden="true" /> {stateLabel.unknown}
            </li>
            <li>
              <span className="lgDiamond" aria-hidden="true" /> Conditional: what must be true
            </li>
            <li>
              <span className="lgBar" aria-hidden="true" /> Control breakpoint
            </li>
            <li>
              <span className="lgDispute" aria-hidden="true">
                ✕
              </span>{" "}
              Unsupported claim: the evidence disputes it
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
          Select any element, in the drawing or in this list, to inspect it. The list follows the path from the employee to
          the potential consequence.
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
                      {edge?.state === "candidate" && <span className="candidatePill">inferred</span>}
                      {edge?.controlClaim && <span className="disputePill">claim disputed</span>}
                      {edge?.condition && <span className="conditionPill">conditional</span>}
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
