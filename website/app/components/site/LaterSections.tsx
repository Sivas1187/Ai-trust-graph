import { links, methodologyAuthor, pendingGates, release, reviewStatus, roadmapNote, notValidated, limitation, manifestGatePrinciple, changeReviewNote } from "../../content";
import { citations, isPublished, publication } from "../../publication";
import { author, frameworks } from "../../site-content";
import { ArtifactLibrary } from "./ArtifactLibrary";
import { CopyButton } from "./CopyButton";
import { Ext, SectionHead, SourceNote } from "./Primitives";

export function Frameworks() {
  return (
    <section id="frameworks" className="section sectionPaper" aria-labelledby="frameworks-title">
      <div className="container">
        <SectionHead id="frameworks-title" kicker="10 · Frameworks" title="Alongside existing standards, not instead of them." />
        <div className="fwGrid">
          <div className="fwCard fwExisting">
            <p className="miniLabel">What standards and frameworks provide</p>
            <p>{frameworks.existing}</p>
          </div>
          <div className="fwJoin" aria-hidden="true">
            +
          </div>
          <div className="fwCard fwContributes">
            <p className="miniLabel">What AI Trust Graph adds</p>
            <p>{frameworks.contributes}</p>
          </div>
        </div>
        <p className="fwBoundary">
          <span className="fwBoundaryMark" aria-hidden="true">
            !
          </span>
          {frameworks.boundary}
        </p>
        <SourceNote>
          <Ext href={links.doc("01-manifesto.md")}>Artifact #1 · Manifesto</Ext> principle 10 and §11 &quot;Claims we will
          not make&quot;. Wording here is website explanation; no named standard is characterised or reproduced.
        </SourceNote>
      </div>
    </section>
  );
}

export function Artifacts() {
  return (
    <section id="artifacts" className="section sectionWhite" aria-labelledby="artifacts-title">
      <div className="container">
        <SectionHead
          id="artifacts-title"
          kicker="11 · Artifacts"
          title="The canonical artifacts."
          lede={
            <p>
              GitHub is the canonical source. Every link below opens the artifact pinned in bundle {release.bundle}{" "}
              (snapshot {release.snapshot}), so what you read matches what this site describes.{" "}
              <Ext href={links.manifest}>Read the methodology manifest</Ext>.
            </p>
          }
        />
        <ArtifactLibrary />
        <SourceNote>
          Titles, versions and roles: <Ext href={links.manifest}>METHODOLOGY_MANIFEST.md</Ext> and README. Grouping is
          website navigation. Dependencies are the artifact numbers named in each artifact&apos;s header; some headers
          cite earlier version numbers of their dependencies, so only numbers are shown here.
        </SourceNote>
      </div>
    </section>
  );
}

export function Publications() {
  const published = isPublished();
  const c = published ? citations() : null;
  return (
    <section id="publications" className="section sectionInk" aria-labelledby="publications-title">
      <div className="container">
        <SectionHead id="publications-title" tone="dark" kicker="12 · Publications" title="Publications." />
        <article className="pubCard">
          <p className="pubStatus">
            <span className={published ? "pubDot pubDotLive" : "pubDot"} aria-hidden="true" />
            {published ? `Published ${publication.publishedDate}` : "Whitepaper in preparation"}
          </p>
          <h3 className="pubTitle">
            {publication.title} v{publication.version}
          </h3>
          <p className="pubAuthor">{publication.author}</p>
          <p>{published ? publication.abstract : publication.scope}</p>
          {published && c ? (
            <>
              <p className="pubActions">
                <a className="btn btnPrimary" href={publication.pdfUrl} rel="noopener noreferrer">
                  Download PDF
                </a>
                <a className="btn btnSecondary" href={publication.zenodoUrl} rel="noopener noreferrer">
                  Zenodo record
                </a>
                <CopyButton text={publication.doi} label="Copy DOI" />
              </p>
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
                  <summary>Version history</summary>
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
            <p className="pubPending">
              No PDF, record or citation identifier exists yet, so none is shown. Until publication, cite the GitHub
              repository and the bundle version ({release.bundle}).
            </p>
          )}
        </article>
      </div>
    </section>
  );
}

export function AboutAuthor() {
  const extra = (
    [
      ["LinkedIn", author.links.linkedin],
      ["ORCID", author.links.orcid],
      ["Zenodo", author.links.zenodo],
    ] as const
  ).filter(([, href]) => href);
  return (
    <section id="author" className="section sectionPaper" aria-labelledby="author-title">
      <div className="container containerNarrow">
        <SectionHead id="author-title" kicker="13 · About the author" title={author.name} />
        <p className="authorRole">{author.role}</p>
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
    </section>
  );
}

export function StatusReview() {
  return (
    <section id="status" className="section sectionWhite" aria-labelledby="status-title">
      <div className="container">
        <SectionHead id="status-title" kicker="14 · Status and review" title="Where the methodology stands." />
        <div className="statusGrid">
          <div className="statusCard">
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
            <p className="canonQuote canonQuoteSmall">{manifestGatePrinciple}</p>
            <p className="smallNote">{roadmapNote}</p>
          </div>
        </div>

        <div id="review" className="reviewBlock">
          <h3 className="subTitle">Critique is welcome.</h3>
          <p>
            The methodology is published so that it can be examined. Reports of errors, ambiguities, contradictions or
            weak reasoning are the most useful contribution. {changeReviewNote}
          </p>
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
              <Ext className="btn btnTertiary" href={links.contributing}>
                How to contribute
              </Ext>
            </li>
            <li>
              <Ext className="btn btnTertiary" href={links.reviewFindings}>
                Review findings so far
              </Ext>
            </li>
          </ul>
        </div>
        <SourceNote>
          <Ext href={links.manifest}>METHODOLOGY_MANIFEST.md</Ext> header and §6; README status paragraph;
          CONTRIBUTING.md.
        </SourceNote>
      </div>
    </section>
  );
}
