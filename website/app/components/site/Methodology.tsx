import { links, topologyInvariant } from "../../content";
import { DepthControl } from "./DepthControl";
import { Ext, SectionHead, SourceNote } from "./Primitives";
import { SignatureGraph } from "./SignatureGraph";

/** Section 4: the signature visual, continuing the procurement scenario. */
export function Signature() {
  const ccm = links.doc("02-core-conceptual-model.md");
  const ontology = links.doc("12-ontology-specification.md");
  const manifesto = links.doc("01-manifesto.md");
  return (
    <section id="graph" className="section sectionInk" aria-labelledby="graph-title">
      <div className="container">
        <SectionHead
          id="graph-title"
          tone="dark"
          kicker="04 · The signature visual"
          title="The same request, drawn as a graph."
          lede={
            <p>
              Each arrow is a typed, directed assertion with its own state and its own evidence. Reaching the business
              system and being authorised to act in it are drawn as two different assertions, and where evidence is
              missing the drawing says UNKNOWN.
            </p>
          }
        />
        <p className="graphQualifier">
          Graph structure supports systematic reasoning. A connection drawn in the graph does not, on its own, prove
          reachability under current conditions, authority, invocation or exploitability.
        </p>
        <SignatureGraph />
        <p className="figureCaption figureCaptionDark">
          Synthetic illustration. Evidence grades are examples, and the potential consequence is a hypothesis, not a
          finding. {topologyInvariant[0]} {topologyInvariant[1]}
        </p>
        <p className="graphPageLink">
          <a href="/graph/">Open the interactive implementation view</a>, which reads a synthetic graph through system,
          authority, control and evidence views.
        </p>
        <SourceNote>
          Relationship names and caveats: <Ext href={ontology}>Artifact #12 · Ontology Specification</Ext> predicate
          catalogue (verbatim). Boundaries, paths and consequence: <Ext href={ccm}>Artifact #2</Ext> §3.2, §6, §6.6.
          States, grades and relations: Artifact #6 §0.5, §0.9, §1. Topology invariant:{" "}
          <Ext href={manifesto}>Artifact #1</Ext> §4 (verbatim). The qualifier above the figure is website explanation of
          the CONNECTS_TO caveat and the §4 invariant.
        </SourceNote>
      </div>
    </section>
  );
}

const subsections = [
  { href: "#flow", n: "5.1", label: "Reasoning chain" },
  { href: "#authority", n: "5.2", label: "Authority and influence" },
  { href: "#unknown", n: "5.3", label: "Evidence and UNKNOWN" },
  { href: "#domains", n: "5.4", label: "Six assurance domains" },
  { href: "#lifecycle", n: "5.5", label: "Assessment lifecycle" },
  { href: "#example", n: "5.6", label: "Worked example" },
];

/** Section 5 opening: what follows, and a reading-depth control for it. */
export function MethodologyIntro() {
  return (
    <section id="methodology" className="section sectionWhite methodIntro" aria-labelledby="methodology-title">
      <div className="container">
        <SectionHead
          id="methodology-title"
          kicker="05 · The methodology"
          title="How the reasoning and the assessment are performed."
          lede={
            <p>
              Six parts, from the conceptual reasoning chain to a worked example. Each opens with its central point; the
              detail and the source references sit underneath for practitioners who need them.
            </p>
          }
        />
        <nav id="page-index" className="methodIndex" aria-labelledby="method-index-title">
          <h3 id="method-index-title" className="visuallyHidden">
            In this section
          </h3>
          <ol className="methodIndexList">
            {subsections.map((s) => (
              <li key={s.href}>
                <a href={s.href}>
                  <span className="methodIndexNum" aria-hidden="true">
                    {s.n}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <DepthControl />
        </nav>
      </div>
    </section>
  );
}
