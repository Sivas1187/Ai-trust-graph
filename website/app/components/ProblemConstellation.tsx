import { problemTerms } from "../content";

/**
 * Illustrative constellation for the problem section. The list of terms is the
 * accessible source of truth; the thin links are an aria-hidden drawing that
 * shows the terms are interconnected. Links are undirected and unlabelled on
 * purpose: they are not ontology predicates, a sequence, an architecture or a
 * path (Artifact #1 invariant, stated in the caption).
 *
 * Node positions are percentages of the figure box, one set for wide layouts
 * and one for narrow ones, so the SVG links (percentage coordinates) always
 * meet the HTML nodes without a fixed aspect ratio.
 */

type Pos = readonly [x: number, y: number];

const wide: Record<string, Pos> = {
  Identities: [22, 18],
  Agents: [62, 12],
  Tools: [86, 42],
  Data: [14, 56],
  Models: [48, 44],
  Providers: [32, 86],
  "Business actions": [74, 80],
};

const narrow: Record<string, Pos> = {
  Identities: [27, 8],
  Agents: [73, 20],
  Tools: [74, 50],
  Data: [24, 40],
  Models: [44, 66],
  Providers: [26, 94],
  "Business actions": [66, 80],
};

const links: readonly (readonly [string, string])[] = [
  ["Identities", "Agents"],
  ["Identities", "Tools"],
  ["Identities", "Data"],
  ["Agents", "Tools"],
  ["Agents", "Models"],
  ["Data", "Models"],
  ["Data", "Providers"],
  ["Models", "Providers"],
  ["Models", "Business actions"],
  ["Tools", "Business actions"],
];

function Links({ pos, className }: { pos: Record<string, Pos>; className: string }) {
  return (
    <svg className={`cstLinks ${className}`} aria-hidden="true" focusable="false">
      {links.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={`${pos[a][0]}%`}
          y1={`${pos[a][1]}%`}
          x2={`${pos[b][0]}%`}
          y2={`${pos[b][1]}%`}
        />
      ))}
    </svg>
  );
}

export function ProblemConstellation() {
  return (
    <div className="cst">
      <p className="cstTag">
        <span className="tag">Illustrative</span>
      </p>
      <div className="cstField">
        <Links pos={wide} className="cstLinksWide" />
        <Links pos={narrow} className="cstLinksNarrow" />
        <ul className="cstNodes" aria-label="Interconnected parts of an AI system (illustrative, unordered)">
          {problemTerms.map((t) => (
            <li
              key={t}
              className="cstNode"
              style={{
                ["--x" as string]: `${wide[t][0]}%`,
                ["--y" as string]: `${wide[t][1]}%`,
                ["--nx" as string]: `${narrow[t][0]}%`,
                ["--ny" as string]: `${narrow[t][1]}%`,
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
