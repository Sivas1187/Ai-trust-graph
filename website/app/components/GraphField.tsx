/**
 * Graph field — the site's shared graph grammar, drawn as one static SVG.
 *
 * - Hollow nodes, hairline edges, no labels, no glow, no animation.
 * - One optional reading path (cyan). Its first `quietSegments` segments are
 *   drawn in neutral graphite so the path does not compete with nearby type.
 * - Optional `unresolved` ending: a dashed hand-off from the last path node to
 *   an open, dashed ring, then a fainter dashed tail — the path is left
 *   explicitly unresolved rather than shown as complete.
 * - Accent nodes (indigo / green / amber) are sparse texture only: they never
 *   encode maturity, safety, severity, quality, ranking or pass/fail.
 * - `tone="dark"` draws the same grammar for graphite grounds.
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
  path?: {
    points: readonly GraphPoint[];
    quietSegments?: number;
    unresolved?: { at: GraphPoint; tail: readonly GraphPoint[] };
  };
};

const pts = (points: readonly GraphPoint[]) => points.map(([x, y]) => `${x},${y}`).join(" ");

export function GraphField({
  data,
  className,
  tone = "light",
}: {
  data: GraphFieldData;
  className?: string;
  tone?: "light" | "dark";
}) {
  const { width, height, nodes, edges, path } = data;
  const quiet = path?.quietSegments ?? 0;
  const unresolved = path?.unresolved;
  const last = path?.points[path.points.length - 1];
  const classes = ["graphField", tone === "dark" ? "graphFieldDark" : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <svg
      className={classes}
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
      {unresolved && last && (
        <g className="gfUnresolved">
          <line x1={last[0]} y1={last[1]} x2={unresolved.at[0]} y2={unresolved.at[1]} />
          {unresolved.tail.map(([x, y], i) => {
            const [px, py] = i === 0 ? unresolved.at : unresolved.tail[i - 1];
            return <line key={i} className="gfUnresolvedTail" x1={px} y1={py} x2={x} y2={y} />;
          })}
          <circle cx={unresolved.at[0]} cy={unresolved.at[1]} r={9} />
        </g>
      )}
    </svg>
  );
}
