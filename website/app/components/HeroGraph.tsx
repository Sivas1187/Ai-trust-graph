/**
 * Illustrative, synthetic graph for the hero. It depicts the kinds of objects
 * AI Trust Graph models; the edge labels are plain-language illustrations, not
 * canonical ontology predicates (see Artifact #12 for those).
 */

type Node = { id: string; label: string; x: number; y: number; kind?: "target" };
type Edge = { from: string; to: string; label: string; unknown?: boolean };

const nodes: Node[] = [
  { id: "human", label: "Human", x: 70, y: 70 },
  { id: "agent", label: "Agent", x: 250, y: 70 },
  { id: "tool", label: "Tool", x: 440, y: 70 },
  { id: "data", label: "Data", x: 70, y: 220 },
  { id: "model", label: "Model", x: 250, y: 220 },
  { id: "identity", label: "Identity", x: 440, y: 220 },
  { id: "provider", label: "Provider", x: 250, y: 370 },
  { id: "system", label: "Business system", x: 470, y: 380, kind: "target" },
];

const edges: Edge[] = [
  { from: "human", to: "agent", label: "instructs" },
  { from: "agent", to: "tool", label: "invokes" },
  { from: "agent", to: "model", label: "uses" },
  { from: "agent", to: "data", label: "retrieves" },
  { from: "model", to: "provider", label: "hosted by" },
  { from: "tool", to: "identity", label: "acts as" },
  { from: "identity", to: "system", label: "authority: UNKNOWN", unknown: true },
];

const W = (label: string) => label.length * 8.2 + 30;
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

/** Shorten a line segment so arrowheads stop at the node pill edge. */
function segment(a: Node, b: Node) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  // distance from centre to pill boundary along the direction (approximate)
  const pad = (n: Node) => {
    const hw = W(n.label) / 2 + 6;
    const hh = 19 + 6;
    return Math.min(Math.abs(ux) > 1e-6 ? hw / Math.abs(ux) : Infinity, Math.abs(uy) > 1e-6 ? hh / Math.abs(uy) : Infinity);
  };
  const pa = pad(a);
  const pb = pad(b);
  return { x1: a.x + ux * pa, y1: a.y + uy * pa, x2: b.x - ux * pb, y2: b.y - uy * pb };
}

export function HeroGraph() {
  return (
    <figure className="heroGraph">
      <svg
        viewBox="0 0 580 450"
        role="img"
        aria-labelledby="hero-graph-title hero-graph-desc"
        className="heroGraphSvg"
      >
        <title id="hero-graph-title">Illustrative connected AI system graph</title>
        <desc id="hero-graph-desc">
          A synthetic example. A human instructs an agent. The agent uses a model, retrieves data and
          invokes a tool. The model is hosted by a provider. The tool acts as an identity. That
          identity reaches a business system across a trust boundary, but whether it holds authority
          there is marked UNKNOWN.
        </desc>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" className="arrowHead" />
          </marker>
          <marker id="arrowUnknown" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" className="arrowHeadUnknown" />
          </marker>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0 H0 V24" className="gridLine" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="580" height="450" fill="url(#grid)" />

        <g className="boundary">
          <rect x="360" y="300" width="210" height="136" rx="16" />
          <text x="376" y="424">TRUST BOUNDARY</text>
        </g>

        {edges.map((e, i) => {
          const s = segment(byId[e.from], byId[e.to]);
          const mx = (s.x1 + s.x2) / 2;
          const my = (s.y1 + s.y2) / 2;
          return (
            <g key={`${e.from}-${e.to}`} className={e.unknown ? "edge edgeUnknown" : "edge"} style={{ ["--i" as string]: i }}>
              <line {...s} markerEnd={e.unknown ? "url(#arrowUnknown)" : "url(#arrow)"} pathLength={e.unknown ? undefined : 1} />
              <text x={mx} y={my - 8} textAnchor="middle" className="edgeLabel">
                {e.label}
              </text>
            </g>
          );
        })}

        {nodes.map((n, i) => {
          const w = W(n.label);
          return (
            <g key={n.id} className={n.kind === "target" ? "node nodeTarget" : "node"} style={{ ["--i" as string]: i }}>
              <rect x={n.x - w / 2} y={n.y - 19} width={w} height={38} rx={19} />
              <text x={n.x} y={n.y + 5} textAnchor="middle">
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption>
        <span className="tag">Synthetic</span> Illustrative only. Graph topology alone does not prove
        authority, invocation, reachability or exploitability.
      </figcaption>
    </figure>
  );
}
