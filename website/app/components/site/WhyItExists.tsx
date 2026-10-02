import { links, problemThesis, topologyInvariant } from "../../content";
import { SectionHead, SourceNote, Ext } from "./Primitives";

/**
 * Why AI Trust Graph exists. EDITORIAL narrative; the thesis and the topology
 * invariant are quoted from Artifact #1 Manifesto (§2.2, §4).
 * The comparison figure is conceptual, not empirical, and says so.
 */

type Part = { id: string; label: string[]; x: number; y: number };
const W = 88;
const H = 38;

/** Component view: the six parts as a plain grid. */
const gridParts: Part[] = [
  { id: "agent", label: ["Agent"], x: 40, y: 22 },
  { id: "model", label: ["Model"], x: 232, y: 22 },
  { id: "tool", label: ["Tool"], x: 40, y: 131 },
  { id: "identity", label: ["Identity"], x: 232, y: 131 },
  { id: "data", label: ["Data"], x: 40, y: 240 },
  { id: "system", label: ["Business", "system"], x: 232, y: 240 },
];

/** Connected view: the same parts, laid out along the relationships. */
const graphParts: Part[] = [
  { id: "agent", label: ["Agent"], x: 4, y: 131 },
  { id: "model", label: ["Model"], x: 140, y: 22 },
  { id: "tool", label: ["Tool"], x: 140, y: 131 },
  { id: "data", label: ["Data"], x: 140, y: 240 },
  { id: "identity", label: ["Identity"], x: 268, y: 131 },
  { id: "system", label: ["Business", "system"], x: 268, y: 240 },
];

function Box({ p, className }: { p: Part; className: string }) {
  return (
    <g className={className}>
      <rect x={p.x} y={p.y} width={W} height={H} rx={6} />
      {p.label.map((l, i) => (
        <text key={l} x={p.x + W / 2} y={p.y + H / 2 + 4 + (i - (p.label.length - 1) / 2) * 13} textAnchor="middle">
          {l}
        </text>
      ))}
    </g>
  );
}

function ComponentView() {
  return (
    <svg className="cmpSvg" viewBox="0 0 360 300" role="img" aria-labelledby="cmp-a-t cmp-a-d">
      <title id="cmp-a-t">Component view</title>
      <desc id="cmp-a-d">Six components drawn as separate boxes, each reviewed on its own, with no relationships between them.</desc>
      {gridParts.map((p) => (
        <Box key={p.id} p={p} className="cmpBox" />
      ))}
    </svg>
  );
}

function ConnectedView() {
  // Relationship lines run between box edges; labels are placed by hand so none overlaps a box or another label.
  const rels = [
    { d: "M52 131 L150 60", label: "prompts", x: 92, y: 88, anchor: "end" },
    { d: "M92 150 L136 150", label: "invokes", x: 116, y: 143, anchor: "middle" },
    { d: "M52 169 L150 240", label: "retrieves", x: 92, y: 220, anchor: "end" },
    { d: "M228 150 L264 150", label: "acts as", x: 248, y: 124, anchor: "middle" },
    { d: "M312 169 L312 236", label: "authority?", x: 304, y: 196, anchor: "end", unknown: true },
  ] as const;
  return (
    <svg className="cmpSvg" viewBox="0 0 360 300" role="img" aria-labelledby="cmp-b-t cmp-b-d">
      <title id="cmp-b-t">Connected-system view</title>
      <desc id="cmp-b-d">
        The same six components joined by typed relationships: the agent prompts the model, invokes the tool and retrieves
        data; the tool acts as an identity. A trust boundary separates the business system. Whether the identity has
        authority in the business system is unresolved and marked UNKNOWN.
      </desc>
      <defs>
        <marker id="cmp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="cmpArrow" />
        </marker>
      </defs>
      <rect className="cmpBoundary" x={258} y={222} width={98} height={72} rx={8} />
      <text className="cmpBoundaryLabel" x={254} y={290} textAnchor="end">
        trust boundary
      </text>
      {rels.map((r) => (
        <g key={r.label} className={"unknown" in r ? "cmpRel cmpRelUnknown" : "cmpRel"}>
          <path d={r.d} markerEnd="url(#cmp-arrow)" />
          <text x={r.x} y={r.y} textAnchor={r.anchor}>
            {r.label}
          </text>
        </g>
      ))}
      {graphParts.map((p) => (
        <Box key={p.id} p={p} className="cmpBox cmpBoxConnected" />
      ))}
      <g className="cmpUnknownTag">
        <rect x={238} y={202} width={66} height={16} rx={3} />
        <text x={271} y={214} textAnchor="middle">
          UNKNOWN
        </text>
      </g>
    </svg>
  );
}

export function WhyItExists() {
  const manifesto = links.doc("01-manifesto.md");
  return (
    <section id="why" className="section sectionPaper" aria-labelledby="why-title">
      <span id="problem" className="legacyAnchor" aria-hidden="true" />
      <div className="container">
        <SectionHead
          id="why-title"
          kicker="01 · Why it exists"
          title="AI systems are no longer isolated models."
          lede={
            <>
              <p>
                Models connect to agents. Agents invoke tools. Tools act through identities. Identities cross trust
                boundaries, and data and decisions move between platforms and providers.
              </p>
              <p>
                Component reviews remain valuable. On their own, they can miss how trust, authority and consequence
                travel across the connected environment. AI Trust Graph gives that connected view a structure, while
                keeping evidence limits and uncertainty in plain sight.
              </p>
            </>
          }
        />

        <figure className="compare">
          <div className="compareGrid">
            <div className="comparePanel">
              <p className="compareLabel">Component view</p>
              <ComponentView />
              <p className="compareNote">Each part reviewed separately.</p>
            </div>
            <div className="compareArrow" aria-hidden="true">
              →
            </div>
            <div className="comparePanel comparePanelConnected">
              <p className="compareLabel">Connected-system view</p>
              <ConnectedView />
              <p className="compareNote">Typed relationships, a trust boundary, and an authority question left open.</p>
            </div>
          </div>
          <figcaption className="figureCaption">Conceptual comparison for explanation only. It is not empirical evidence.</figcaption>
        </figure>

        <div className="whyQuotes">
          <blockquote className="pullQuote">
            <p>{problemThesis}</p>
            <footer className="pullQuoteSource">
              Manifesto, the core risk thesis
              <SourceNote>
                <Ext href={manifesto}>Artifact #1 · Manifesto</Ext> §2.2, first sentence (verbatim).
              </SourceNote>
            </footer>
          </blockquote>
          <blockquote className="pullQuote pullQuoteInvariant">
            <p>{topologyInvariant[0]}</p>
            <p className="pullQuoteSecond">{topologyInvariant[1]}</p>
            <footer className="pullQuoteSource">
              Manifesto invariant
              <SourceNote>
                <Ext href={manifesto}>Artifact #1 · Manifesto</Ext> §4 INVARIANT (verbatim).
              </SourceNote>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
