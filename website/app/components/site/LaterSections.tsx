import {
  closedGates,
  changeReviewNote,
  limitation,
  links,
  manifestGatePrinciple,
  methodologyAuthor,
  notValidated,
  pendingGates,
  release,
  reviewStatus,
} from "../../content";
import { citations, isPublished, publication } from "../../publication";
import { siteConfig } from "../../site.config";
import { author } from "../../site-content";
import { ArtifactLibrary } from "./ArtifactLibrary";
import { CopyButton } from "./CopyButton";
import { Ext, SectionHead, SourceNote } from "./Primitives";

/** Every canonical source the page cites, with its pinned link (structured source register). */
const sourceRegister: { label: string; file?: string; href?: string; sections: string }[] = [
  { label: "METHODOLOGY_MANIFEST", sections: "Header (bundle, status, snapshot); §2 reading order; §4 versions; §6 validation status and gates" },
  { label: "Artifact #1 · Manifesto", file: "01-manifesto.md", sections: "Core proposition; §2.2 thesis; §4 invariant; principle 10; §11 claims not made" },
  { label: "Artifact #2 · Core Conceptual Model", file: "02-core-conceptual-model.md", sections: "§0.10 reasoning chain and theory map; §1.8, §1.10; §3.2, §3.6, §3.8; §5.2; §6, §6.3, §6.6; §7.4; §8.1, §8.2" },
  { label: "Artifact #3 · Maturity Model", file: "03-maturity-model.md", sections: "§2.0 to §7.0 domain statements and capabilities" },
  { label: "Artifact #4 · Scoring Framework", file: "04-scoring-framework.md", sections: "§0.5 result states and numeric treatment; SC-INV-01" },
  { label: "Artifact #5 · Master Control Library", file: "05-master-control-library.md", sections: "Control ID prefixes per domain" },
  { label: "Artifact #6 · Evidence Model", file: "06-evidence-model.md", sections: "§0.3; §0.5 states; §0.9 evidence relations; §1.1 to §1.6 grades; §1.8 reading rules" },
  { label: "Artifact #7 · Assessment Methodology", file: "07-assessment-methodology.md", sections: "§0.11 phases and iteration rule; §0.12 exit gates; §1.1 to §1.10 assessment types" },
  { label: "Artifact #12 · Ontology Specification", file: "12-ontology-specification.md", sections: "Predicate catalogue and caveats; state enumerations" },
];

/** Section 6: where the detailed specifications are maintained. */
export function Artifacts() {
  return (
    <section id="artifacts" className="section sectionPaper" aria-labelledby="artifacts-title">
      <div className="container">
        <SectionHead
          id="artifacts-title"
          kicker="06 · The artifacts"
          title="Where the detailed specifications are maintained."
          lede={
            <p>
              The methodology is specified in versioned artifacts on GitHub, which is the canonical source. Each link
              opens the artifact pinned in bundle {release.bundle}, so what you read matches what this page describes.{" "}
              <Ext href={links.manifest}>Read the methodology manifest</Ext>.
            </p>
          }
        />
        <ArtifactLibrary />
        <details className="sourceRegister">
          <summary>Source register: every artifact and section cited on this page</summary>
          <ul>
            {sourceRegister.map((r) => (
              <li key={r.label}>
                <Ext href={r.file ? links.doc(r.file) : links.manifest}>{r.label}</Ext>
                <span className="srSections">{r.sections}</span>
              </li>
            ))}
          </ul>
        </details>
        <SourceNote>
          Titles, versions and roles: <Ext href={links.manifest}>METHODOLOGY_MANIFEST.md</Ext> and README. Grouping is
          website navigation. Dependencies are the artifact numbers named in each artifact&apos;s header; some headers
          cite earlier version numbers of their dependencies, so only numbers are shown here.
        </SourceNote>
      </div>
    </section>
  );
}

/** Section 7: where the consolidated, citable research will be made available. Config-driven (site.config.ts). */
export function Publications() {
  const published = isPublished();
  const c = published ? citations() : null;
  const pending = [
    "Whitepaper PDF",
    "Zenodo record",
    "DOI and copy action",
    "Citation formats (APA, IEEE, BibTeX)",
    "Version history",
  ];
  return (
    <section id="publications" className="section sectionInk" aria-labelledby="publications-title">
      <div className="container">
        <SectionHead
          id="publications-title"
          tone="dark"
          kicker="07 · Publications"
          title="Where the citable research will be published."
        />
        <article className="pubCard" aria-labelledby="pub-title">
          <p className="pubStatus">
            <span className={published ? "pubDot pubDotLive" : "pubDot"} aria-hidden="true" />
            {published ? `Published ${publication.publishedDate}` : "Whitepaper in preparation"}
          </p>
          <h3 id="pub-title" className="pubTitle">
            {publication.title} v{publication.version}
          </h3>
          {publication.subtitle && <p className="pubSubtitle">{publication.subtitle}</p>}
          <p className="pubAuthor">{publication.author}</p>
          <p>{published ? publication.abstract : publication.scope}</p>
          {published && c ? (
            <>
              <p className="pubActions">
                <a className="btn btnPrimary" href={publication.pdfUrl} rel="noopener noreferrer">
                  Download the whitepaper (PDF{publication.fileSize ? `, ${publication.fileSize}` : ""})
                </a>
                <a className="btn btnSecondary" href={publication.zenodoUrl} rel="noopener noreferrer">
                  View on Zenodo
                </a>
                <CopyButton text={publication.doi} label="Copy DOI" />
              </p>
              <dl className="pubFacts">
                <div>
                  <dt>DOI</dt>
                  <dd>{publication.doi}</dd>
                </div>
                {publication.licence && (
                  <div>
                    <dt>Licence</dt>
                    <dd>{publication.licence}</dd>
                  </div>
                )}
                {publication.pdfSha256 && (
                  <div>
                    <dt>SHA-256</dt>
                    <dd>
                      <code>{publication.pdfSha256}</code>
                    </dd>
                  </div>
                )}
              </dl>
              <h4 className="pubSub">Cite this work</h4>
              <dl className="citeList">
                {(
                  [
                    ["APA", c.apa],
                    ["IEEE", c.ieee],
                    ["BibTeX", c.bibtex],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k}>
                    <dt>
                      {k} <CopyButton text={v} label={`Copy ${k}`} />
                    </dt>
                    <dd>
                      <pre>{v}</pre>
                    </dd>
                  </div>
                ))}
              </dl>
              {publication.versions.length > 0 && (
                <details>
                  <summary>View version history</summary>
                  <ul>
                    {publication.versions.map((v) => (
                      <li key={v.version}>
                        {v.version} · {v.date} · {v.doi}
                        {v.note ? ` · ${v.note}` : ""}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </>
          ) : (
            <>
              <dl className="pubFacts">
                <div>
                  <dt>Status</dt>
                  <dd>In preparation; not yet published or peer reviewed</dd>
                </div>
                <div>
                  <dt>Relationship to the artifacts</dt>
                  <dd>Consolidates the versioned artifacts; it will not replace them as the technical source</dd>
                </div>
                {publication.licence && (
                  <div>
                    <dt>Licence on publication</dt>
                    <dd>
                      <a href={siteConfig.licence.url} rel="license noopener noreferrer">
                        {publication.licence}
                      </a>
                      , the same licence as the methodology
                      text. The name is reserved separately; see <Ext href={links.trademarks}>TRADEMARKS</Ext>.
                    </dd>
                  </div>
                )}
                <div>
                  <dt>Methodology source now</dt>
                  <dd>
                    <Ext href={links.repo}>GitHub repository, bundle {release.bundle}</Ext>
                  </dd>
                </div>
              </dl>
              <div className="pubPending">
                <p className="miniLabel">Available after publication</p>
                <ul className="pubPendingList">
                  {pending.map((p) => (
                    <li key={p}>
                      <span>{p}</span>
                      <span className="pubNotYet">Not yet available</span>
                    </li>
                  ))}
                </ul>
                <p className="pubPendingNote">
                  No citation identifier exists yet, so none is shown. Until publication, cite the GitHub repository and
                  the bundle version.
                </p>
              </div>
            </>
          )}
        </article>
      </div>
    </section>
  );
}

/** Section 8: who created and maintains the methodology. */
export function AboutAuthor() {
  const extra = (
    [
      ["LinkedIn", author.links.linkedin],
      ["ORCID", author.links.orcid],
      ["Zenodo", author.links.zenodo],
    ] as const
  ).filter(([, href]) => href);
  return (
    <section id="author" className="section sectionWhite" aria-labelledby="author-title">
      <div className="container authorLayout">
        <div className="authorHead">
          <p className="kicker">08 · About the author</p>
          <h2 id="author-title" className="sectionTitle">
            {author.name}
          </h2>
          <p className="authorRole">{author.role}</p>
        </div>
        <div className="authorBody">
          {author.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="authorLinks">
            <li>
              <a href={author.links.github} rel="noopener noreferrer">
                GitHub profile<span className="visuallyHidden"> (opens GitHub)</span>
              </a>
            </li>
            {extra.map(([label, href]) => (
              <li key={label}>
                <a href={href} rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="independence">{author.independence}</p>
        </div>
      </div>
    </section>
  );
}

/** Closing: release status and the invitation to review and contribute. */
export function StatusReview() {
  return (
    <section id="status" className="section sectionPaper" aria-labelledby="status-title">
      <div className="container">
        <SectionHead
          id="status-title"
          kicker="Review and contribution"
          title="Open for critique."
          lede={
            <p>
              The methodology is published so that it can be examined. Reports of errors, ambiguities, contradictions or
              weak reasoning are the most useful contribution. {changeReviewNote}
            </p>
          }
        />
        <div id="review" className="reviewActionsWrap">
          <ul className="reviewActions">
            <li>
              <Ext className="btn btnPrimary" href={links.findingIssue}>
                Report a finding
              </Ext>
            </li>
            <li>
              <Ext className="btn btnSecondary" href={links.feedbackIssue}>
                Give feedback
              </Ext>
            </li>
            <li>
              <Ext className="btn btnTertiary" href={links.discussions}>
                Technical discussion
              </Ext>
            </li>
            <li>
              <Ext className="btn btnTertiary" href={links.contributing}>
                How to contribute
              </Ext>
            </li>
          </ul>
          <p className="smallNote">
            Responsible reporting: methodology gaps belong in public findings, but a genuine vulnerability disclosure
            concern should not be opened as a public issue. See{" "}
            <Ext href={`${links.contributing}#reporting-a-security-issue`}>Reporting a security issue</Ext> in
            CONTRIBUTING, and <Ext href={links.reviewFindings}>the review findings so far</Ext>.
          </p>
        </div>

        <div className="statusGrid">
          <div className="statusCard">
            <h3 className="subTitle">Release status</h3>
            <dl className="statusFacts">
              <div>
                <dt>Bundle</dt>
                <dd>{release.bundle}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{release.status}</dd>
              </div>
              <div>
                <dt>Snapshot</dt>
                <dd>{release.snapshot}</dd>
              </div>
              <div>
                <dt>Author</dt>
                <dd>{methodologyAuthor}</dd>
              </div>
            </dl>
            <ul className="reviewList">
              {reviewStatus.map((r, i) => (
                <li key={r} className={i === 0 ? "reviewDone" : "reviewPending"}>
                  <span aria-hidden="true">{i === 0 ? "✓ " : "○ "}</span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="statusStrong">{notValidated}</p>
            <p>{limitation}</p>
          </div>
          <div className="gatesCard">
            <h3 className="subTitle">Pending release gates</h3>
            <ul className="gates">
              {pendingGates.map((g) => (
                <li key={g}>
                  <span aria-hidden="true">○ </span>
                  {g}
                </li>
              ))}
            </ul>
            <h4 className="gatesSub">Closed through governance</h4>
            <ul className="gates gatesClosed">
              {closedGates.map((g) => (
                <li key={g.gate}>
                  <span aria-hidden="true">✓ </span>
                  <strong>{g.gate}</strong>: {g.summary}, {g.recorded}.
                </li>
              ))}
            </ul>
            <p className="canonQuote canonQuoteSmall">{manifestGatePrinciple}</p>
          </div>
        </div>
        <SourceNote>
          <Ext href={links.manifest}>METHODOLOGY_MANIFEST.md</Ext> header and §6; README status paragraph;
          CONTRIBUTING.md.
        </SourceNote>
      </div>
    </section>
  );
}
