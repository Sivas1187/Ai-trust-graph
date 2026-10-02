import { domains, domainsLede, links } from "../../content";
import { domainDetail, type DomainKey } from "../../site-content";
import { Ext, SectionHead, SourceNote } from "./Primitives";

/**
 * 5.4 Six assurance domains as coordinated lenses over one graph. Desktop:
 * a central graph with six lenses around it (staggered in two columns), so
 * the shared model is the visual centre and no domain reads as a product
 * tile. Mobile: the graph, then the six lenses as an editorial list. Each
 * domain shows only its purpose, one practical question, the expected
 * output and its artifact links.
 */
const glyph: Record<DomainKey, string> = {
  d1: "M4 6h16M4 12h16M4 18h10",
  d2: "M5 18 L12 6 L19 18 M8 13h8",
  d3: "M12 3v18M6 9l6-6 6 6",
  d4: "M4 12h4l2-5 4 10 2-5h4",
  d5: "M5 5h14v14H5z M9 9h6v6H9z",
  d6: "M12 4a8 8 0 1 0 8 8M20 4v6h-6",
};

/** Hub drawing: one graph, six lenses positioned around it. Decorative; the list is the content. */
function Hub() {
  const nodes = [
    [120, 60], [200, 95], [215, 175], [140, 210], [70, 160], [80, 95], [145, 135],
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [6, 0], [6, 2], [6, 4], [1, 6], [3, 6]];
  const lenses: [number, number, DomainKey][] = [
    [140, 22, "d1"], [252, 82, "d2"], [252, 200, "d3"], [140, 258, "d4"], [28, 200, "d5"], [28, 82, "d6"],
  ];
  return (
    <svg className="domainHub" viewBox="0 0 280 280" aria-hidden="true" focusable="false">
      <circle cx="140" cy="140" r="112" className="hubRing" />
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className="hubEdge" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" className="hubNode" />
      ))}
      {lenses.map(([x, y, k]) => (
        <g key={k} className={`hubLens tone-${k}`} transform={`translate(${x} ${y})`}>
          <circle r="17" />
          <text y="4" textAnchor="middle">
            {k.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Domains() {
  const maturity = links.doc("03-maturity-model.md");
  const mcl = links.doc("05-master-control-library.md");
  const ccm = links.doc("02-core-conceptual-model.md");
  return (
    <section id="domains" className="section sectionWhite" aria-labelledby="domains-title">
      <div className="container">
        <SectionHead
          id="domains-title"
          kicker="5.4 · Six assurance domains"
          level={3}
          title="Six lenses over one graph."
          lede={
            <p className="canonQuote">
              {domainsLede[0]} {domainsLede[1]}
            </p>
          }
        />

        <div className="constellation">
          <div className="constellationHub">
            <Hub />
            <p className="hubCaption">One graph, one evidence model, one set of definitions, read through six lenses.</p>
          </div>
          <ol className="domainList" aria-label="The six domains, D1 to D6">
            {domains.map((d) => {
              const key = d.id.toLowerCase() as DomainKey;
              const det = domainDetail[key];
              return (
                <li key={d.id} className={`domain tone-${key}`}>
                  <div className="domainHead">
                    <svg className="domainGlyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d={glyph[key]} />
                    </svg>
                    <p className="domainId">{d.id}</p>
                    <h4 className="domainName">{d.name}</h4>
                  </div>
                  <p className="domainPurpose">{d.purpose}</p>
                  <p className="domainQuestion">{det.question}</p>
                  <p className="domainOutput">
                    <span className="miniLabel">Expected output</span>
                    {det.outputs}
                  </p>
                  <p className="domainLinks">
                    <Ext href={maturity}>Maturity Model {det.maturitySection}</Ext>
                    <span aria-hidden="true"> · </span>
                    <Ext href={mcl}>Controls {d.prefix}</Ext>
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <SourceNote>
          Domain names: README. Lede, purposes and outputs: <Ext href={ccm}>Artifact #2</Ext> §8.1 (verbatim). Domain
          statements: <Ext href={maturity}>Artifact #3 · Maturity Model</Ext> §2.0 to §7.0. Control prefixes:{" "}
          <Ext href={mcl}>Artifact #5 · Master Control Library</Ext>. The practical question on each domain is website
          explanation written from the Artifact #3 domain statements.
        </SourceNote>
      </div>
    </section>
  );
}
