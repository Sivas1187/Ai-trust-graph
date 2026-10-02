"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { links } from "../content";
import {
  entityDefinitions,
  examplePattern,
  graphViews,
  predicateDefinitions,
  relationshipInView,
  syntheticGraph,
  type GraphNode,
  type GraphRelationship,
  type GraphSnapshot,
  type GraphView,
  type LabelAt,
} from "../graph-data";
import { Ext } from "./site/Primitives";

type DataSource = "synthetic" | "neo4j";
type Selection = { kind: "node" | "rel"; id: string };
type Point = { x: number; y: number };

/** Node radius, label metrics and the canonical meaning of UNKNOWN (Artifact #12, D.1). */
const R = 18;
const CHAR_W = 6.9;
const PILL_H = 20;
const UNKNOWN_MEANING = "Evidence is absent, insufficient or materially conflicting.";

/** Ring colour follows the node's canonical family (Artifact #12, Appendix A). Violet is reserved for UNKNOWN. */
const familyTone: Record<string, string> = {
  "Actors, accountability and organizational roles": "d5",
  "Identity, access and authority": "d4",
  "AI behavior and decision influence": "d1",
  "Action surface and workflow execution": "d2",
  "Data, retrieval, memory and knowledge": "d6",
  "Assurance, governance and evidence": "info",
  "Graph, boundary, path and consequence": "neutral",
};
const toneOf = (type: string) => familyTone[entityDefinitions[type]?.family ?? ""] ?? "neutral";
const pillWidth = (text: string) => Math.round(text.length * CHAR_W + 18);

function isSnapshot(value: unknown): value is GraphSnapshot {
  if (!value || typeof value !== "object") return false;
  const v = value as GraphSnapshot;
  return Array.isArray(v.nodes) && Array.isArray(v.relationships);
}

/** Drawn positions; snapshots without coordinates fall back to a grid. */
function layout(nodes: GraphNode[]) {
  const pos = new Map<string, Point>();
  nodes.forEach((node, i) => {
    pos.set(node.id, {
      x: typeof node.x === "number" ? node.x : 120 + (i % 4) * 240,
      y: typeof node.y === "number" ? node.y : 110 + Math.floor(i / 4) * 170,
    });
  });
  const xs = [...pos.values()].map((p) => p.x);
  const ys = [...pos.values()].map((p) => p.y);
  return {
    pos,
    width: Math.max(960, Math.max(0, ...xs) + 240),
    height: Math.max(660, Math.max(0, ...ys) + 60),
  };
}

type EdgeGeometry = { rel: GraphRelationship; x1: number; y1: number; x2: number; y2: number; label: Point; unknownTag?: Point };

/**
 * Lines stop short of both circles so the arrowhead stays visible. Parallel
 * relationships between the same pair (a multigraph) are drawn side by side,
 * with their labels moved outward so neither label covers the other line.
 */
function edgeGeometry(relationships: GraphRelationship[], pos: Map<string, Point>): EdgeGeometry[] {
  const groups = new Map<string, string[]>();
  for (const rel of relationships) {
    const key = [rel.from, rel.to].sort().join("\u0000");
    groups.set(key, [...(groups.get(key) ?? []), rel.id]);
  }
  const out: EdgeGeometry[] = [];
  for (const rel of relationships) {
    const a = pos.get(rel.from);
    const b = pos.get(rel.to);
    if (!a || !b || rel.from === rel.to) continue;
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const u = { x: (b.x - a.x) / len, y: (b.y - a.y) / len };
    // Perpendicular taken from a fixed ordering of the pair, so both directions offset consistently.
    const flip = rel.from < rel.to ? 1 : -1;
    const perp = { x: -u.y * flip, y: u.x * flip };
    const group = groups.get([rel.from, rel.to].sort().join("\u0000")) ?? [rel.id];
    const offset = (group.indexOf(rel.id) - (group.length - 1) / 2) * 16;
    const x1 = a.x + u.x * (R + 4) + perp.x * offset;
    const y1 = a.y + u.y * (R + 4) + perp.y * offset;
    const x2 = b.x - u.x * (R + 5) + perp.x * offset;
    const y2 = b.y - u.y * (R + 5) + perp.y * offset;
    const mid = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
    let label = mid;
    if (group.length > 1 && offset !== 0) {
      const w = pillWidth(rel.type);
      const side = Math.sign(offset);
      const push = Math.abs(perp.x) * (w / 2) + Math.abs(perp.y) * (PILL_H / 2) + 10;
      label = { x: mid.x + perp.x * side * push, y: mid.y + perp.y * side * push };
    }
    const unknownTag = rel.state === "UNKNOWN" ? { x: label.x, y: label.y + PILL_H + 6 } : undefined;
    out.push({ rel, x1, y1, x2, y2, label, unknownTag });
  }
  return out;
}

function nodeText(at: LabelAt, p: Point) {
  if (at === "above") return { anchor: "middle" as const, name: { x: p.x, y: p.y - R - 26 }, type: { x: p.x, y: p.y - R - 10 } };
  if (at === "right") return { anchor: "start" as const, name: { x: p.x + R + 12, y: p.y - 3 }, type: { x: p.x + R + 12, y: p.y + 14 } };
  return { anchor: "middle" as const, name: { x: p.x, y: p.y + R + 22 }, type: { x: p.x, y: p.y + R + 38 } };
}

const activate = (fn: () => void) => (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    fn();
  }
};

export function GraphExplorer() {
  const [snapshot, setSnapshot] = useState<GraphSnapshot>(syntheticGraph);
  const [source, setSource] = useState<DataSource>("synthetic");
  const [view, setView] = useState<GraphView>("system");
  const [selection, setSelection] = useState<Selection>({ kind: "node", id: syntheticGraph.nodes[0].id });
  const inspectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 3500);

    fetch("/graph-api/snapshot", {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller.signal,
      credentials: "same-origin",
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("graph API unavailable");
        const data: unknown = await response.json();
        if (!isSnapshot(data) || data.nodes.length === 0) throw new Error("invalid graph snapshot");
        setSnapshot(data);
        setSource("neo4j");
        setSelection({ kind: "node", id: data.nodes[0].id });
      })
      .catch(() => {
        // The public site remains usable without a database. This is deliberate:
        // the synthetic example is bundled and clearly labelled as such.
      })
      .finally(() => window.clearTimeout(timer));

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, []);

  const { pos, width, height } = useMemo(() => layout(snapshot.nodes), [snapshot.nodes]);
  const nodeById = useMemo(() => new Map(snapshot.nodes.map((node) => [node.id, node])), [snapshot.nodes]);
  const edges = useMemo(() => edgeGeometry(snapshot.relationships, pos), [snapshot.relationships, pos]);
  const inView = useMemo(
    () => new Set(snapshot.relationships.filter((rel) => relationshipInView(rel, view)).map((rel) => rel.id)),
    [snapshot.relationships, view],
  );
  const nodesInView = useMemo(() => {
    if (view === "system") return new Set(snapshot.nodes.map((node) => node.id));
    const ids = new Set<string>();
    snapshot.relationships.forEach((rel) => {
      if (inView.has(rel.id)) {
        ids.add(rel.from);
        ids.add(rel.to);
      }
    });
    return ids;
  }, [snapshot, inView, view]);
  const viewRelationships = snapshot.relationships.filter((rel) => inView.has(rel.id));
  const families = Object.keys(familyTone).filter((family) =>
    snapshot.nodes.some((node) => entityDefinitions[node.type]?.family === family),
  );
  const activeView = graphViews.find((item) => item.id === view) ?? graphViews[0];

  const selectedNode = selection.kind === "node" ? nodeById.get(selection.id) : undefined;
  const selectedRel = selection.kind === "rel" ? snapshot.relationships.find((rel) => rel.id === selection.id) : undefined;
  const linkedRels = new Set(
    selectedNode
      ? snapshot.relationships.filter((rel) => rel.from === selectedNode.id || rel.to === selectedNode.id).map((rel) => rel.id)
      : [],
  );
  const linkedNodes = new Set(selectedRel ? [selectedRel.from, selectedRel.to] : []);

  const changeView = (next: GraphView) => {
    setView(next);
    // Keep the inspector on something the new view shows.
    const shows =
      next === "system" ||
      (selection.kind === "rel"
        ? relationshipInView(snapshot.relationships.find((rel) => rel.id === selection.id) ?? { id: "", from: "", to: "", type: "" }, next)
        : snapshot.relationships.some((rel) => relationshipInView(rel, next) && (rel.from === selection.id || rel.to === selection.id)));
    if (!shows) {
      const first = snapshot.relationships.find((rel) => relationshipInView(rel, next));
      if (first) setSelection({ kind: "rel", id: first.id });
    }
  };

  const select = (next: Selection, fromList = false) => {
    setSelection(next);
    // On narrow screens the inspector sits above the list: bring it into view.
    if (fromList && inspectorRef.current && window.matchMedia("(max-width: 1023px)").matches) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      inspectorRef.current.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  };

  const nodeName = (id: string) => nodeById.get(id)?.label ?? id;
  const ontology = links.doc("12-ontology-specification.md");

  return (
    <section className="graphExplorer" aria-labelledby="graph-explorer-title">
      <div className="graphExplorerHead">
        <div>
          <p className="graphKicker">Interactive implementation view</p>
          <h1 id="graph-explorer-title">Explore the connected system.</h1>
          <p className="graphLede">
            Inspect the same synthetic system through system, authority, control and evidence views. A connection is
            never treated as proof of authorization, successful invocation or exploitability.
          </p>
        </div>
        <p className="graphSource" aria-live="polite">
          <span className="graphSourceDot" aria-hidden="true" />
          {source === "neo4j" ? "Neo4j-backed snapshot" : "Bundled synthetic example"}
        </p>
      </div>

      <div className="graphViewSwitch" role="group" aria-label="Graph view">
        {graphViews.map((item) => (
          <button
            key={item.id}
            type="button"
            className={view === item.id ? "graphViewButton graphViewButtonActive" : "graphViewButton"}
            aria-pressed={view === item.id}
            onClick={() => changeView(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="graphViewDescription">
        {activeView.description}{" "}
        <span className="graphViewCount">
          {viewRelationships.length} of {snapshot.relationships.length} relationships shown.
        </span>
      </p>

      <div className="graphWorkspace">
        <div className="graphCanvas">
          <p className="graphScrollHint">Scroll sideways to see the whole graph.</p>
          <div className="graphScroll">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              role="group"
              aria-labelledby="graph-svg-title graph-svg-desc"
              data-view={view}
            >
              <title id="graph-svg-title">Synthetic AI Trust Graph, {activeView.label.toLowerCase()} view</title>
              <desc id="graph-svg-desc">
                Objects drawn as circles and relationships drawn as arrows from source to target. Each object and each
                relationship label can be selected to inspect it. A dotted relationship is UNKNOWN. Relationships
                outside the current view are faded. The same relationships are listed as text below the graph.
              </desc>
              <defs>
                <pattern id="graphDots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" className="gxDot" />
                </pattern>
                {(["default", "unknown", "active"] as const).map((kind) => (
                  <marker
                    key={kind}
                    id={`gxArrow-${kind}`}
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="9"
                    markerHeight="9"
                    markerUnits="userSpaceOnUse"
                    orient="auto"
                  >
                    <path d="M0 0 L10 5 L0 10 z" className={`gxArrow gxArrow-${kind}`} />
                  </marker>
                ))}
              </defs>
              <rect width={width} height={height} fill="url(#graphDots)" pointerEvents="none" />

              <g className="gxEdges">
                {edges.map(({ rel, x1, y1, x2, y2 }) => {
                  const active = selectedRel?.id === rel.id;
                  const marker = active ? "active" : rel.state === "UNKNOWN" ? "unknown" : "default";
                  const cls = [
                    "gxEdge",
                    rel.state === "UNKNOWN" && "gxEdgeUnknown",
                    active && "isActive",
                    linkedRels.has(rel.id) && "isLinked",
                    !inView.has(rel.id) && "isDim",
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <g key={rel.id} className={cls} onClick={() => inView.has(rel.id) && select({ kind: "rel", id: rel.id })}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} markerEnd={`url(#gxArrow-${marker})`} />
                      <line x1={x1} y1={y1} x2={x2} y2={y2} className="gxHit" />
                    </g>
                  );
                })}
              </g>

              <g className="gxNodes">
                {snapshot.nodes.map((node) => {
                  const p = pos.get(node.id) as Point;
                  const t = nodeText(node.labelAt ?? "below", p);
                  const shown = nodesInView.has(node.id);
                  const cls = [
                    "gxNode",
                    `gxTone-${toneOf(node.type)}`,
                    selectedNode?.id === node.id && "isActive",
                    linkedNodes.has(node.id) && "isLinked",
                    !shown && "isDim",
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <g
                      key={node.id}
                      className={cls}
                      role="button"
                      tabIndex={shown ? 0 : -1}
                      aria-pressed={selectedNode?.id === node.id}
                      aria-label={`${node.label}, ${node.type}`}
                      onClick={() => shown && select({ kind: "node", id: node.id })}
                      onKeyDown={activate(() => shown && select({ kind: "node", id: node.id }))}
                    >
                      <circle cx={p.x} cy={p.y} r={R + 7} className="gxFocus" />
                      <circle cx={p.x} cy={p.y} r={R} className="gxRing" />
                      <text x={t.name.x} y={t.name.y} textAnchor={t.anchor} className="gxName">
                        {node.label}
                      </text>
                      <text x={t.type.x} y={t.type.y} textAnchor={t.anchor} className="gxType">
                        {node.type}
                      </text>
                    </g>
                  );
                })}
              </g>

              <g className="gxLabels">
                {edges.map(({ rel, label, unknownTag }) => {
                  const w = pillWidth(rel.type);
                  const shown = inView.has(rel.id);
                  const cls = [
                    "gxPill",
                    rel.state === "UNKNOWN" && "gxPillUnknown",
                    selectedRel?.id === rel.id && "isActive",
                    linkedRels.has(rel.id) && "isLinked",
                    !shown && "isDim",
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <g
                      key={rel.id}
                      className={cls}
                      role="button"
                      tabIndex={shown ? 0 : -1}
                      aria-pressed={selectedRel?.id === rel.id}
                      aria-label={`${rel.type} from ${nodeName(rel.from)} to ${nodeName(rel.to)}${rel.state === "UNKNOWN" ? ", UNKNOWN" : ""}`}
                      onClick={() => shown && select({ kind: "rel", id: rel.id })}
                      onKeyDown={activate(() => shown && select({ kind: "rel", id: rel.id }))}
                    >
                      <rect x={label.x - w / 2} y={label.y - PILL_H / 2} width={w} height={PILL_H} rx="5" />
                      <text x={label.x} y={label.y + 4} textAnchor="middle">
                        {rel.type}
                      </text>
                      {unknownTag && (
                        <g className="gxUnknownTag">
                          <rect x={unknownTag.x - 38} y={unknownTag.y - 10} width="76" height="20" rx="5" />
                          <text x={unknownTag.x} y={unknownTag.y + 4} textAnchor="middle">
                            UNKNOWN
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          <ul className="graphLegend" aria-label="Legend">
            <li>
              <span className="lgArrow" aria-hidden="true" /> Relationship, drawn from source to target
            </li>
            <li>
              <span className="lgArrow lgArrowUnknown" aria-hidden="true" /> UNKNOWN: {UNKNOWN_MEANING.toLowerCase()}
            </li>
            <li>
              <span className="lgArrow lgArrowActive" aria-hidden="true" /> Selected
            </li>
          </ul>
          <ul className="graphLegend graphLegendFamilies" aria-labelledby="graph-families-title">
            <li className="graphLegendTitle" id="graph-families-title">
              Ring colour: ontology family (Artifact #12, Appendix A)
            </li>
            {families.map((family) => (
              <li key={family}>
                <span className={`lgRing gxTone-${familyTone[family] ?? "neutral"}`} aria-hidden="true" /> {family}
              </li>
            ))}
          </ul>
        </div>

        <div className="graphInspector" ref={inspectorRef} aria-live="polite">
          {selectedRel ? (
            <RelationshipDetail rel={selectedRel} nodeName={nodeName} onSelect={select} ontology={ontology} />
          ) : selectedNode ? (
            <NodeDetail
              node={selectedNode}
              relationships={snapshot.relationships}
              nodeName={nodeName}
              onSelect={select}
              ontology={ontology}
            />
          ) : null}
        </div>
      </div>

      <div className="graphListHead">
        <h2>Relationships in this view</h2>
        <p>Select a row, an object or a relationship label to inspect it.</p>
      </div>
      <ol className="graphList">
        {viewRelationships.map((rel) => (
          <li key={rel.id}>
            <button
              type="button"
              className={selectedRel?.id === rel.id ? "graphRow isActive" : "graphRow"}
              aria-pressed={selectedRel?.id === rel.id}
              onClick={() => select({ kind: "rel", id: rel.id }, true)}
            >
              <span className="graphRowPath">
                <span className="graphRowNode">{nodeName(rel.from)}</span>
                <span className="graphRowArrow" aria-hidden="true">
                  →
                </span>
                <code className="graphRowRel">{rel.type}</code>
                <span className="graphRowArrow" aria-hidden="true">
                  →
                </span>
                <span className="graphRowNode">{nodeName(rel.to)}</span>
                {rel.state === "UNKNOWN" && <span className="graphUnknownPill">UNKNOWN</span>}
              </span>
              {rel.conditions && <span className="graphRowNote">{rel.conditions}</span>}
            </button>
          </li>
        ))}
      </ol>

      <p className="graphMethodNote">
        Illustrative implementation only. The bundled example is modelled on the ontology&rsquo;s synthetic pattern{" "}
        {examplePattern} (<Ext href={ontology}>Artifact #12</Ext>, Appendix E), with the approval, limit and evidence
        relationships that pattern says may constrain the path; its names, conditions and values are invented. Type and relationship definitions are quoted verbatim from Artifact #12. The public methodology
        remains vendor-neutral; the graph database is a replaceable implementation layer, not a source of
        methodological authority.
      </p>
    </section>
  );
}

function NodeDetail({
  node,
  relationships,
  nodeName,
  onSelect,
  ontology,
}: {
  node: GraphNode;
  relationships: GraphRelationship[];
  nodeName: (id: string) => string;
  onSelect: (s: Selection) => void;
  ontology: string;
}) {
  const def = entityDefinitions[node.type];
  const outgoing = relationships.filter((rel) => rel.from === node.id);
  const incoming = relationships.filter((rel) => rel.to === node.id);
  return (
    <>
      <p className="graphInspectorType">
        <span className={`gxSwatch gxTone-${toneOf(node.type)}`} aria-hidden="true" />
        Object · {node.type}
      </p>
      <h2>{node.label}</h2>
      <p className="graphInspectorSummary">{node.summary}</p>
      {def ? (
        <div className="graphCanon">
          <p className="graphCanonLabel">Ontology definition</p>
          <p className="graphCanonText">{def.definition}</p>
          <p className="graphCanonSource">
            Family: {def.family}. <Ext href={ontology}>Artifact #12</Ext>, Appendix A, verbatim.
          </p>
        </div>
      ) : (
        <p className="graphCanonSource">No ontology definition is bundled for this type.</p>
      )}
      <RelList title="Outgoing" rels={outgoing} other={(rel) => rel.to} dir="→" nodeName={nodeName} onSelect={onSelect} />
      <RelList title="Incoming" rels={incoming} other={(rel) => rel.from} dir="←" nodeName={nodeName} onSelect={onSelect} />
    </>
  );
}

function RelList({
  title,
  rels,
  other,
  dir,
  nodeName,
  onSelect,
}: {
  title: string;
  rels: GraphRelationship[];
  other: (rel: GraphRelationship) => string;
  dir: string;
  nodeName: (id: string) => string;
  onSelect: (s: Selection) => void;
}) {
  return (
    <div className="graphRelList">
      <p className="graphCanonLabel">
        {title} ({rels.length})
      </p>
      {rels.length === 0 ? (
        <p className="graphRelNone">None in this graph.</p>
      ) : (
        <ul>
          {rels.map((rel) => (
            <li key={rel.id}>
              <button type="button" onClick={() => onSelect({ kind: "rel", id: rel.id })}>
                <span aria-hidden="true">{dir}</span> <code>{rel.type}</code> {nodeName(other(rel))}
                {rel.state === "UNKNOWN" && <span className="graphUnknownPill">UNKNOWN</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function RelationshipDetail({
  rel,
  nodeName,
  onSelect,
  ontology,
}: {
  rel: GraphRelationship;
  nodeName: (id: string) => string;
  onSelect: (s: Selection) => void;
  ontology: string;
}) {
  const def = predicateDefinitions[rel.type];
  return (
    <>
      <p className="graphInspectorType">Relationship</p>
      <h2 className="graphInspectorRel">{rel.type}</h2>
      <p className="graphEnds">
        <button type="button" onClick={() => onSelect({ kind: "node", id: rel.from })}>
          {nodeName(rel.from)}
        </button>
        <span aria-hidden="true">→</span>
        <span className="visuallyHidden">to</span>
        <button type="button" onClick={() => onSelect({ kind: "node", id: rel.to })}>
          {nodeName(rel.to)}
        </button>
      </p>
      {rel.state === "UNKNOWN" && (
        <p className="graphState">
          <span className="graphUnknownPill">UNKNOWN</span> {UNKNOWN_MEANING}
        </p>
      )}
      {rel.conditions && (
        <div className="graphExample">
          <p className="graphCanonLabel">In this example</p>
          <p>{rel.conditions}</p>
        </div>
      )}
      {def ? (
        <div className="graphCanon">
          <p className="graphCanonLabel">Ontology meaning</p>
          <p className="graphCanonText">{def.meaning}</p>
          <p className="graphCanonLabel">Ontology constraint</p>
          <p className="graphCanonText">{def.constraint}</p>
          <p className="graphCanonSource">
            <Ext href={ontology}>Artifact #12</Ext>, Appendix C, verbatim.
          </p>
        </div>
      ) : (
        <p className="graphCanonSource">No ontology definition is bundled for this relationship.</p>
      )}
    </>
  );
}
