"use client";

import { useEffect, useMemo, useState } from "react";
import {
  graphViews,
  relationshipInView,
  syntheticGraph,
  type GraphNode,
  type GraphSnapshot,
  type GraphView,
} from "../graph-data";

type DataSource = "synthetic" | "neo4j";

const point = (node: GraphNode, index: number) => ({
  x: typeof node.x === "number" ? node.x : 90 + (index % 4) * 180,
  y: typeof node.y === "number" ? node.y : 100 + Math.floor(index / 4) * 170,
});

function isSnapshot(value: unknown): value is GraphSnapshot {
  if (!value || typeof value !== "object") return false;
  const v = value as GraphSnapshot;
  return Array.isArray(v.nodes) && Array.isArray(v.relationships);
}

export function GraphExplorer() {
  const [snapshot, setSnapshot] = useState<GraphSnapshot>(syntheticGraph);
  const [source, setSource] = useState<DataSource>("synthetic");
  const [view, setView] = useState<GraphView>("system");
  const [selectedId, setSelectedId] = useState(syntheticGraph.nodes[0].id);

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
        setSelectedId(data.nodes[0].id);
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

  const nodeById = useMemo(() => new Map(snapshot.nodes.map((node) => [node.id, node])), [snapshot.nodes]);
  const visibleRelationships = useMemo(
    () => snapshot.relationships.filter((rel) => relationshipInView(rel, view)),
    [snapshot.relationships, view],
  );
  const visibleNodeIds = useMemo(() => {
    if (view === "system") return new Set(snapshot.nodes.map((node) => node.id));
    const ids = new Set<string>();
    visibleRelationships.forEach((rel) => {
      ids.add(rel.from);
      ids.add(rel.to);
    });
    return ids;
  }, [snapshot.nodes, visibleRelationships, view]);
  const visibleNodes = snapshot.nodes.filter((node) => visibleNodeIds.has(node.id));
  const selected = nodeById.get(selectedId) ?? visibleNodes[0] ?? snapshot.nodes[0];
  const activeView = graphViews.find((item) => item.id === view) ?? graphViews[0];

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
            onClick={() => setView(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="graphViewDescription">{activeView.description}</p>

      <div className="graphWorkspace">
        <div className="graphCanvas graphCanvasDesktop">
          <svg viewBox="0 0 720 440" role="img" aria-labelledby="graph-svg-title graph-svg-desc">
            <title id="graph-svg-title">Synthetic AI Trust Graph system view</title>
            <desc id="graph-svg-desc">
              Nodes and directional relationships from a human actor through an AI agent and governed action surface,
              with control and evidence relationships. Dashed relationships indicate UNKNOWN in this synthetic example.
            </desc>
            <defs>
              <marker id="graphArrow" markerWidth="8" markerHeight="8" refX="6.5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 z" className="graphArrowHead" />
              </marker>
            </defs>
            <g className="graphEdges">
              {visibleRelationships.map((rel) => {
                const from = nodeById.get(rel.from);
                const to = nodeById.get(rel.to);
                if (!from || !to) return null;
                const a = point(from, snapshot.nodes.indexOf(from));
                const b = point(to, snapshot.nodes.indexOf(to));
                return (
                  <g key={rel.id}>
                    <line
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      className={rel.state === "UNKNOWN" ? "graphEdge graphEdgeUnknown" : "graphEdge"}
                      markerEnd="url(#graphArrow)"
                    />
                    <text x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 - 8} className="graphEdgeLabel">
                      {rel.type}
                    </text>
                  </g>
                );
              })}
            </g>
            <g className="graphNodes">
              {visibleNodes.map((node) => {
                const p = point(node, snapshot.nodes.indexOf(node));
                const isSelected = node.id === selected?.id;
                return (
                  <g
                    key={node.id}
                    transform={`translate(${p.x} ${p.y})`}
                    className={isSelected ? "graphNode graphNodeSelected" : "graphNode"}
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.type}: ${node.label}`}
                    onClick={() => setSelectedId(node.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedId(node.id);
                      }
                    }}
                  >
                    <circle r="26" />
                    <text y="4" textAnchor="middle" className="graphNodeType">
                      {node.type.length > 12 ? node.type.slice(0, 10) + "…" : node.type}
                    </text>
                    <text y="46" textAnchor="middle" className="graphNodeLabel">
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        <div className="graphMobile" aria-label="Relationship trail">
          {visibleRelationships.map((rel) => {
            const from = nodeById.get(rel.from);
            const to = nodeById.get(rel.to);
            if (!from || !to) return null;
            return (
              <button
                type="button"
                className="graphTrailRow"
                key={rel.id}
                onClick={() => setSelectedId(to.id)}
              >
                <span className="graphTrailNode">{from.label}</span>
                <span className={rel.state === "UNKNOWN" ? "graphTrailRel graphTrailRelUnknown" : "graphTrailRel"}>
                  {rel.type}{rel.state === "UNKNOWN" ? " · UNKNOWN" : ""}
                </span>
                <span className="graphTrailNode">{to.label}</span>
              </button>
            );
          })}
        </div>

        <aside className="graphInspector" aria-live="polite">
          <p className="graphInspectorType">{selected?.type}</p>
          <h2>{selected?.label}</h2>
          <p>{selected?.summary}</p>
          <dl>
            <div>
              <dt>Outgoing</dt>
              <dd>{snapshot.relationships.filter((rel) => rel.from === selected?.id).length}</dd>
            </div>
            <div>
              <dt>Incoming</dt>
              <dd>{snapshot.relationships.filter((rel) => rel.to === selected?.id).length}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <p className="graphMethodNote">
        Illustrative implementation only. The public methodology remains vendor-neutral; the graph database is a
        replaceable implementation layer, not a source of methodological authority.
      </p>
    </section>
  );
}
