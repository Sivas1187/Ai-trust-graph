/**
 * Graph field — the site's shared graph grammar, drawn as one static SVG.
 *
 * - Hollow nodes, hairline edges, no labels, no glow, no animation.
 * - One optional reading path (cyan). Its first `quietSegments` segments are
 *   drawn in neutral graphite so the path does not compete with nearby type.
 * - Accent nodes (indigo / green / amber) are sparse texture only: they never
 *   encode maturity, safety, severity, quality, ranking or pass/fail.
 *
 * Always decorative: the SVG is aria-hidden and not focusable, so the
 * meaning of a section lives in its text. Coordinates are curated data (see
 * app/graph/), never generated at build or run time, and rendering needs no
 * JavaScript. Forced-colours styling is in globals.css.
 */

export type GraphAccent = "indigo" | "green" | "amber";
export type GraphNode = readonly [x: number, y: number, r: number, accent?: GraphAccent];
export type GraphPoint = readonly [x: number, y: number];

export type GraphFieldData = {
  width: number;
  height: number;
  nodes: readonly GraphNode[];
  edges: readonly (readonly [from: number, to: number])[];
  path?: { points: readonly GraphPoint[]; quietSegments?: number };
};

const pts = (points: readonly GraphPoint[]) => points.map(([x, y]) => `${x},${y}`).join(" ");

export function GraphField({ data, className }: { data: GraphFieldData; className?: string }) {
  const { width, height, nodes, edges, path } = data;
  const quiet = path?.quietSegments ?? 0;
  return (
    <svg
      className={className ? `graphField ${className}` : "graphField"}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
      focusable="false"
    >
      <g className="gfEdges">
        {edges.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {path && (
        <g className="gfPath">
          {quiet > 0 && <polyline className="gfPathQuiet" points={pts(path.points.slice(0, quiet + 1))} />}
          <polyline className="gfPathLine" points={pts(path.points.slice(quiet))} />
        </g>
      )}
      <g className="gfNodes">
        {nodes.map(([x, y, r, accent], i) => (
          <circle key={i} cx={x} cy={y} r={r} className={accent ? `gfNode-${accent}` : undefined} />
        ))}
        {path?.points.map(([x, y], i) => (
          <circle key={`p${i}`} cx={x} cy={y} r={i < quiet ? 3.6 : 4} className={i < quiet ? "gfPathNodeQuiet" : "gfPathNode"} />
        ))}
      </g>
    </svg>
  );
}
