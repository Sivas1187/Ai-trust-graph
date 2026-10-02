import { domains, domainsLede, links, scale } from "../../content";
import { domainDetail, type DomainKey } from "../../site-content";
import { Detail, Ext, SectionHead, SourceNote } from "./Primitives";

/**
 * Six domains as coordinated lenses over one graph. Each domain has its own
 * accent, an icon glyph and a different emphasis (question first, then
 * purpose, outputs and integration), so the cards are not identical boxes.
 * A shared "one graph" band under the cards shows they read the same model.
 */
const glyph: Record<DomainKey, string> = {
  d1: "M4 6h16M4 12h16M4 18h10",
  d2: "M5 18 L12 6 L19 18 M8 13h8",
  d3: "M12 3v18M6 9l6-6 6 6",
  d4: "M4 12h4l2-5 4 10 2-5h4",
  d5: "M5 5h14v14H5z M9 9h6v6H9z",
  d6: "M12 4a8 8 0 1 0 8 8M20 4v6h-6",
};

export function Domains() {
  const maturity = links.doc("03-maturity-model.md");
  const mcl = links.doc("05-master-control-library.md");
  const ccm = links.doc("02-core-conceptual-model.md");
  return (
    <section id="domains" className="section sectionWhite" aria-labelledby="domains-title">
      <div className="container">
        <SectionHead
          id="domains-title"
          kicker="07 · Domains"
          title="Six lenses over one graph."
          lede={
            <>
              <p className="canonQuote">
                {domainsLede[0]} {domainsLede[1]}
              </p>
              <p>
                Each domain has {scale.capabilitiesPerDomain} maturity capabilities and {scale.controlsPerDomain}{" "}
                canonical controls: {scale.capabilities} capabilities and {scale.controls} controls in all.
              </p>
            </>
          }
        />

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
                  <h3 className="domainName">{d.name}</h3>
                </div>
                <p className="domainQuestion">{det.question}</p>
                <dl className="domainFacts">
                  <div>
                    <dt>Purpose</dt>
                    <dd>{d.purpose}</dd>
                  </div>
                  <div>
                    <dt>Key outputs</dt>
                    <dd>{det.outputs}</dd>
                  </div>
                  <Detail>
                    <dt>Feeds the graph</dt>
                    <dd>{det.feeds}</dd>
                  </Detail>
                </dl>
                <Detail className="domainCaps">
                  <details>
                    <summary>Six capabilities</summary>
                    <ul>
                      {d.capabilities.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </details>
                </Detail>
                <p className="domainLinks">
                  <Ext href={maturity}>Maturity Model {det.maturitySection}</Ext>
                  <span aria-hidden="true"> · </span>
                  <Ext href={mcl}>Controls {d.prefix}</Ext>
                </p>
              </li>
            );
          })}
        </ol>
        <div className="oneGraph" aria-hidden="true">
          <span>D1</span>
          <span>D2</span>
          <span>D3</span>
          <span>D4</span>
          <span>D5</span>
          <span>D6</span>
          <strong>one graph, one evidence model, one set of definitions</strong>
        </div>

        <SourceNote>
          Domain names: README. Purpose and key outputs: <Ext href={ccm}>Artifact #2</Ext> §8.1; integration:
          §8.2 (verbatim). Capabilities: <Ext href={maturity}>Artifact #3 · Maturity Model</Ext> §2.0 to §7.0.
          Control prefixes: <Ext href={mcl}>Artifact #5 · Master Control Library</Ext>. The practical question on each
          domain is website explanation written from the Artifact #3 domain statements.
        </SourceNote>
      </div>
    </section>
  );
}
