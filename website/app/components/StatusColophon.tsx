import {
  changeReviewNote,
  limitation,
  links,
  manifestGatePrinciple,
  methodologyAuthor,
  notValidated,
  pendingGates,
  release,
  reviewStatus,
  roadmapNote,
} from "../content";
import { MarginReference } from "./Marginalia";

/**
 * Release, review and limitations — a publication colophon.
 *
 * Factual status only, each fact traced in content.ts: METHODOLOGY_MANIFEST
 * header (status, bundle, snapshot) and §6 (the five external gates and the
 * gate principle); README (review state); artifact approval records and
 * LICENSE (authorship); CONTRIBUTING (change review). No badges, seals,
 * traffic lights or percentages: "Pending" is plain text. Authorship is one
 * factual line, subordinate to the methodology. Limitations are set apart.
 */

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function StatusColophon() {
  return (
    <section id="status" className="colophonAct" aria-labelledby="status-title">
      <div className="actFrame">
        <div className="actIntro">
          <MarginReference className="marginRefSide">
            <A href={links.manifest}>Manifest</A>
            <br />
            header · §6
            <br />
            <A href={links.readme}>README</A>
            <br />
            <A href={links.license}>LICENSE</A>
            <br />
            <A href={links.contributing}>CONTRIBUTING</A>
          </MarginReference>
          <h2 id="status-title" className="actTitle">
            Release, review and limitations.
          </h2>
        </div>

        <div className="colophonBody">
          <dl className="colophonFacts">
            <div>
              <dt>Status</dt>
              <dd>{release.status}</dd>
            </div>
            <div>
              <dt>Bundle</dt>
              <dd>{release.bundle}</dd>
            </div>
            <div>
              <dt>Snapshot</dt>
              <dd>
                <time dateTime={release.snapshot}>{release.snapshot}</time>
              </dd>
            </div>
            <div>
              <dt>Review</dt>
              {reviewStatus.map((r) => (
                <dd key={r}>{r}</dd>
              ))}
            </div>
            <div>
              <dt>Validation</dt>
              <dd>{notValidated}</dd>
            </div>
            <div>
              <dt>Authorship</dt>
              <dd>Methodology author: {methodologyAuthor}</dd>
            </div>
            <div>
              <dt>Change review</dt>
              <dd>{changeReviewNote}</dd>
            </div>
          </dl>

          <div className="colophonGates">
            <h3 id="gates-title" className="colophonHeading">
              External release gates
            </h3>
            <ul className="gateList" aria-labelledby="gates-title">
              {pendingGates.map((g) => (
                <li key={g}>
                  <span className="gateName">{g}</span> <span className="gateState">Pending</span>
                </li>
              ))}
            </ul>
            <blockquote className="colophonQuote" cite={links.manifest}>
              <p>
                <span className="noteRuleLabel">
                  <A href={links.manifest}>METHODOLOGY_MANIFEST §6</A>
                </span>
                {manifestGatePrinciple}
              </p>
            </blockquote>
            <p className="noteSmall">{roadmapNote}</p>
          </div>
        </div>

        <p className="colophonLimits">
          <span className="noteLabel">Limitations</span> {limitation}
        </p>

        <MarginReference className="marginRefEnd actRefEnd">
          <A href={links.manifest}>METHODOLOGY_MANIFEST</A> header · §6 · <A href={links.readme}>README</A> ·{" "}
          <A href={links.license}>LICENSE</A> · <A href={links.contributing}>CONTRIBUTING</A>
        </MarginReference>
      </div>
    </section>
  );
}
