/**
 * Hero composition: one connected AI environment drawn as a graph.
 *
 * Eight object types (human, agent, model, tool, identity, data, provider,
 * business system), one trust boundary, and one authority assertion that is
 * unresolved and labelled UNKNOWN. Edges are typed and directed, but none of
 * them is presented as a proven or exploitable path; the caption says so.
 * Desktop and mobile use separately composed coordinates so labels stay
 * legible. The visible caption and the SVG title/desc carry the meaning.
 */

type N = { id: string; label: string[]; type: string; x: number; y: number; tone: string };
type E = { from: string; to: string; label: string; unknown?: boolean; lx?: number; ly?: number };
type Layout = { w: number; h: number; nodes: N[]; boundary: { x1: number; y1: number; x2: number; y2: number; lx: number; ly: number; anchor: "start" | "end" | "middle" } };

const edges: E[] = [
  { from: "human", to: "agent", label: "asks" },
  { from: "agent", to: "model", label: "prompts" },
  { from: "agent", to: "tool", label: "invokes" },
  { from: "agent", to: "data", label: "retrieves" },
  { from: "tool", to: "identity", label: "acts as" },
  { from: "model", to: "provider", label: "hosted by" },
  { from: "identity", to: "business", label: "authority?", unknown: true },
];

const desktop: Layout = {
  w: 680,
  h: 500,
  nodes: [
    { id: "human", label: ["Human"], type: "actor", x: 56, y: 250, tone: "d5" },
    { id: "agent", label: ["Agent"], type: "agent", x: 190, y: 250, tone: "d1" },
    { id: "model", label: ["Model"], type: "model", x: 330, y: 105, tone: "d3" },
    { id: "tool", label: ["Tool"], type: "tool", x: 330, y: 250, tone: "d2" },
    { id: "data", label: ["Data"], type: "data", x: 330, y: 395, tone: "d6" },
    { id: "identity", label: ["Identity"], type: "identity", x: 455, y: 250, tone: "d4" },
    { id: "provider", label: ["Provider"], type: "provider", x: 610, y: 105, tone: "d3" },
    { id: "business", label: ["Business", "system"], type: "system", x: 610, y: 330, tone: "d5" },
  ],
  boundary: { x1: 535, y1: 40, x2: 535, y2: 470, lx: 545, ly: 470, anchor: "start" },
};

const mobile: Layout = {
  w: 360,
  h: 560,
  nodes: [
    { id: "human", label: ["Human"], type: "actor", x: 60, y: 46, tone: "d5" },
    { id: "agent", label: ["Agent"], type: "agent", x: 60, y: 176, tone: "d1" },
    { id: "model", label: ["Model"], type: "model", x: 210, y: 96, tone: "d3" },
    { id: "tool", label: ["Tool"], type: "tool", x: 210, y: 210, tone: "d2" },
    { id: "data", label: ["Data"], type: "data", x: 60, y: 316, tone: "d6" },
    { id: "identity", label: ["Identity"], type: "identity", x: 210, y: 330, tone: "d4" },
    { id: "provider", label: ["Provider"], type: "provider", x: 310, y: 470, tone: "d3" },
    { id: "business", label: ["Business", "system"], type: "system", x: 150, y: 480, tone: "d5" },
  ],
  boundary: { x1: 12, y1: 408, x2: 348, y2: 408, lx: 14, ly: 400, anchor: "start" },
};

function Graph({ layout, idSuffix, className }: { layout: Layout; idSuffix: string; className: string }) {
  const at = (id: string) => layout.nodes.find((n) => n.id === id)!;
  const r = 11;
  return (
    <svg
      className={`heroGraph ${className}`}
      viewBox={`0 0 ${layout.w} ${layout.h}`}
      role="img"
      aria-labelledby={`hg-title-${idSuffix} hg-desc-${idSuffix}`}
    >
      <title id={`hg-title-${idSuffix}`}>An AI environment drawn as a graph</title>
      <desc id={`hg-desc-${idSuffix}`}>
        A human asks an agent. The agent prompts a model, invokes a tool and retrieves data. The tool acts as an identity.
        The model is hosted by a provider across a trust boundary. Whether the identity has authority in the business
        system on the other side of the boundary is unresolved and marked UNKNOWN.
      </desc>
      <defs>
        <marker id={`hg-arrow-${idSuffix}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="hgArrow" />
        </marker>
        <marker id={`hg-arrow-u-${idSuffix}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="hgArrowUnknown" />
        </marker>
      </defs>
      <g className="hgBoundary">
        <line x1={layout.boundary.x1} y1={layout.boundary.y1} x2={layout.boundary.x2} y2={layout.boundary.y2} />
        <text x={layout.boundary.lx} y={layout.boundary.ly} textAnchor={layout.boundary.anchor}>
          trust boundary
        </text>
      </g>
      <g className="hgEdges">
        {edges.map((e) => {
          const a = at(e.from);
          const b = at(e.to);
          const len = Math.hypot(b.x - a.x, b.y - a.y);
          const ux = (b.x - a.x) / len;
          const uy = (b.y - a.y) / len;
          const x1 = a.x + ux * (r + 4);
          const y1 = a.y + uy * (r + 4);
          const x2 = b.x - ux * (r + 6);
          const y2 = b.y - uy * (r + 6);
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;
          // On the wide layout the UNKNOWN edge crosses the vertical boundary at its midpoint:
          // its label goes right of the line and its tag left of it, so neither sits on the boundary.
          const wide = idSuffix === "d" && e.unknown;
          const label = wide ? { x: mx + 14, y: my - 10, anchor: "start" as const } : { x: mx, y: my - 7, anchor: "middle" as const };
          const tag = wide ? { x: mx - 48, y: my + 18 } : { x: mx, y: my + 16 };
          return (
            <g key={`${e.from}-${e.to}`} className={e.unknown ? "hgEdge hgEdgeUnknown" : "hgEdge"}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} markerEnd={`url(#${e.unknown ? "hg-arrow-u" : "hg-arrow"}-${idSuffix})`} />
              <text x={label.x} y={label.y} textAnchor={label.anchor} className="hgEdgeLabel">
                {e.label}
              </text>
              {e.unknown && (
                <g className="hgUnknownTag" transform={`translate(${tag.x} ${tag.y})`}>
                  <rect x={-38} y={-11} width={76} height={22} rx={4} />
                  <text y={4} textAnchor="middle">
                    UNKNOWN
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </g>
      <g className="hgNodes">
        {layout.nodes.map((n) => (
          <g key={n.id} className={`hgNode hgTone-${n.tone}`} transform={`translate(${n.x} ${n.y})`}>
            <circle r={r} />
            {n.label.map((line, i) => (
              <text key={line} y={r + 20 + i * 17} textAnchor="middle" className="hgLabel">
                {line}
              </text>
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}

export function HeroGraph() {
  return (
    <figure className="heroFigure">
      <Graph layout={desktop} idSuffix="d" className="heroGraphDesktop" />
      <Graph layout={mobile} idSuffix="m" className="heroGraphMobile" />
      <figcaption className="heroCaption">
        Illustrative. A relationship drawn here is not, by itself, evidence that a path exists or can be exploited.
      </figcaption>
    </figure>
  );
}
