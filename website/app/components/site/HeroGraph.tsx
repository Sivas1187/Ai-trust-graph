/**
 * Hero motif: a quiet, decorative drawing of a connected AI environment
 * (people, agents, models, tools, identities, data, providers and a business
 * system across a trust boundary). It carries no relationship semantics and
 * is hidden from assistive technology; the signature visual in section 4 is
 * the meaningful, labelled graph. Hidden on small screens to keep the hero
 * compact.
 */

type N = { id: string; label: string[]; type: string; x: number; y: number; tone: string };
type E = { from: string; to: string; label: string; unknown?: boolean };
type Layout = { w: number; h: number; nodes: N[]; boundary: { x1: number; y1: number; x2: number; y2: number; lx: number; ly: number; anchor: "start" | "end" | "middle" } };

const edges: E[] = [
  { from: "human", to: "agent", label: "asks" },
  { from: "agent", to: "model", label: "prompts" },
  { from: "agent", to: "tool", label: "invokes" },
  { from: "agent", to: "data", label: "retrieves" },
  { from: "tool", to: "identity", label: "acts as" },
  { from: "model", to: "provider", label: "hosted by" },
  { from: "identity", to: "business", label: "" },
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

function Graph({ layout, idSuffix, className }: { layout: Layout; idSuffix: string; className: string }) {
  const at = (id: string) => layout.nodes.find((n) => n.id === id)!;
  const r = 11;
  return (
    <svg
      className={`heroGraph ${className}`}
      viewBox={`0 0 ${layout.w} ${layout.h}`}
      aria-hidden="true"
      focusable="false"
    >
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
          return (
            <g key={`${e.from}-${e.to}`} className={e.unknown ? "hgEdge hgEdgeUnknown" : "hgEdge"}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} markerEnd={`url(#${e.unknown ? "hg-arrow-u" : "hg-arrow"}-${idSuffix})`} />

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
    <div className="heroFigure" aria-hidden="true">
      <Graph layout={desktop} idSuffix="d" className="heroGraphDesktop" />
    </div>
  );
}
