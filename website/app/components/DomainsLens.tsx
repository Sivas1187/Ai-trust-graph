import { domains, domainsLede, links, scale } from "../content";
import { FigureNote, MarginReference } from "./Marginalia";
import { PageIndexReturn } from "./PageIndexReturn";

/**
 * Domains — six coordinated lenses over one graph.
 *
 * One connected graph band (decorative, aria-hidden) with six identical
 * anchor nodes on its lower edge; the six canonical domains hang from those
 * anchors as equal columns (wide screens), each reading the same graph. The
 * list of six is the source of truth; the figure note states the relationship
 * in text. Order is the canonical order (README); position, line and colour
 * imply no ranking, hierarchy, sequence or maturity — every anchor and leader
 * is drawn identically (anchors and leaders share the one structural cyan),
 * and no domain has its own colour.
 *
 * Narrow screens: the band sits above a two- or one-column list.
 *
 * Detail (control IDs, the six maturity capabilities) sits in one native
 * disclosure per domain.
 */

type P = readonly [x: number, y: number];

// Coordinates in percent of the band (x: width, y: height). Anchors a0–a5 sit
// on the lower edge at each column's left rule (0, 1/6 … 5/6 of the width).
const anchors: P[] = [0, 1, 2, 3, 4, 5].map((i) => [(i * 100) / 6, 100] as const);
// No secondary accents: every inner node is neutral, so no colour sits beside
// (or could be read as belonging to) any one domain.
const inner: (readonly [x: number, y: number])[] = [
  [6, 34],
  [14, 70],
  [24, 22],
  [31, 58],
  [41, 30],
  [49, 66],
  [57, 18],
  [64, 50],
  [73, 26],
  [81, 64],
  [89, 34],
  [97, 58],
];
// Edges: [kind, index] pairs; "a" = anchor, "n" = inner node. One connected component.
const edges: (readonly [string, string])[] = [
  ["a0", "n0"], ["n0", "n1"], ["n0", "n2"], ["n1", "a1"], ["n1", "n3"], ["n2", "n3"],
  ["n2", "n4"], ["n3", "a2"], ["n3", "n5"], ["n4", "n5"], ["n4", "n6"], ["n5", "a3"],
  ["n6", "n7"], ["n5", "n7"], ["n7", "n8"], ["n7", "a4"], ["n8", "n9"], ["n8", "n10"],
  ["n9", "a5"], ["n9", "n11"], ["n10", "n11"], ["n6", "n8"],
];
const pt = (id: string): P => {
  const [x, y] = id[0] === "a" ? anchors[+id.slice(1)] : inner[+id.slice(1)];
  return [x, y];
};
const pc = (v: number) => `${v}%`;

export function DomainsLens() {
  const ccm = links.doc("02-core-conceptual-model.md");
  const mm = links.doc("03-maturity-model.md");
  const mcl = links.doc("05-master-control-library.md");
  return (
    <section id="domains" className="domainsAct" aria-labelledby="domains-title">
      <div className="actFrame">
        <div className="actIntro">
          <MarginReference className="marginRefSide">
            <a href={ccm} rel="noopener noreferrer">
              Artifact #2
            </a>{" "}
            §8.1
            <br />
            <a href={mm} rel="noopener noreferrer">
              Artifact #3
            </a>
            <br />
            <a href={mcl} rel="noopener noreferrer">
              Artifact #5
            </a>
          </MarginReference>
          <h2 id="domains-title" className="actTitle">
            Six coordinated lenses over one graph.
          </h2>
          <p className="actLede">{domainsLede.join(" ")}</p>
        </div>

        <figure className="lensFigure">
          <svg className="graphField lensBand" aria-hidden="true" focusable="false">
            <g className="gfEdges">
              {edges.map(([a, b]) => {
                const [x1, y1] = pt(a);
                const [x2, y2] = pt(b);
                // Edges into an anchor are drawn only where the anchors are (wide layouts).
                const toAnchor = a[0] === "a" || b[0] === "a";
                return (
                  <line
                    key={`${a}-${b}`}
                    className={toAnchor ? "lensAnchorEdge" : undefined}
                    x1={pc(x1)}
                    y1={pc(y1)}
                    x2={pc(x2)}
                    y2={pc(y2)}
                  />
                );
              })}
            </g>
            <g className="gfNodes">
              {inner.map(([x, y], i) => (
                <circle key={`n${i}`} cx={pc(x)} cy={pc(y)} r={3.6} />
              ))}
              {anchors.map(([x, y], i) => (
                <circle key={`a${i}`} cx={pc(x)} cy={pc(y)} r={5} className="lensAnchor" />
              ))}
            </g>
          </svg>
          <ul className="lensList" aria-label="The six assessment domains">
            {domains.map((d) => (
              <li key={d.id} className="lensItem">
                <h3 className="lensName">{d.name}</h3>
                <p className="lensPurpose">{d.purpose}</p>
                <details className="lensDetails">
                  <summary>
                    <span className="lensCount">{scale.controlsPerDomain} controls</span>
                    <span className="visuallyHidden">, </span>
                    <span className="lensCount lensCountLast">{scale.capabilitiesPerDomain} capabilities</span>
                    <span className="visuallyHidden"> — {d.name}</span>
                  </summary>
                  <p className="lensControls">
                    <span className="noteLabel">Controls</span> {d.prefix}-001 … {d.prefix}-0{scale.controlsPerDomain}
                  </p>
                  <p className="noteLabel lensCapsLabel">
                    {scale.capabilitiesPerDomain} maturity capabilities
                  </p>
                  <ul className="lensCaps">
                    {d.capabilities.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
          <FigureNote className="lensNote">
            Explanatory figure: six equal lenses reading one connected graph. Position, line and order imply no
            ranking, hierarchy, sequence or maturity.
          </FigureNote>
        </figure>

        <MarginReference className="marginRefEnd actRefEnd">
          <a href={ccm} rel="noopener noreferrer">
            Artifact #2
          </a>{" "}
          §8.1 ·{" "}
          <a href={mm} rel="noopener noreferrer">
            Artifact #3
          </a>{" "}
          ·{" "}
          <a href={mcl} rel="noopener noreferrer">
            Artifact #5
          </a>
        </MarginReference>
        <PageIndexReturn />
      </div>
    </section>
  );
}
