import { links } from "../content";
import { MarginReference } from "./Marginalia";

/**
 * Public review — an invitation to examine and challenge the methodology.
 *
 * The four routes from CONTRIBUTING ("Ways to give feedback", "What kind of
 * change are you proposing?") and the repository's issue templates, in their
 * canonical order, as plain typographic entries with text links (no buttons,
 * cards or growth mechanics). Changes to canonical semantics go through a
 * formal change proposal (Artifact #11 §2.4) before any pull request.
 */

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" className="reviewLink">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

export function ReviewInvitation() {
  return (
    <section id="review" className="reviewAct" aria-labelledby="review-title">
      <div className="actFrame">
        <div className="actIntro">
          <MarginReference className="marginRefSide">
            <a href={links.contributing} rel="noopener noreferrer">
              CONTRIBUTING
            </a>
            <br />
            issue templates
          </MarginReference>
          <h2 id="review-title" className="actTitle">
            This methodology is meant to be challenged.
          </h2>
        </div>

        <ul className="reviewList" aria-label="Ways to review and contribute">
          <li className="reviewItem">
            <h3>Report a finding</h3>
            <p>A specific inconsistency, gap or error in the methodology text, in the format used in REVIEW_FINDINGS.</p>
            <p className="reviewLinks">
              <A href={links.findingIssue}>Open a methodology finding</A>
            </p>
          </li>
          <li className="reviewItem">
            <h3>Share feedback</h3>
            <p>A reaction, question or first impression. You do not need a precise defect.</p>
            <p className="reviewLinks">
              <A href={links.feedbackIssue}>Open general feedback</A>
              <span className="reviewAlt">
                Or start a{" "}
                <a href={links.discussions} rel="noopener noreferrer">
                  GitHub Discussion
                </a>
                .
              </span>
            </p>
          </li>
          <li className="reviewItem">
            <h3>Propose a change</h3>
            <p>
              Changes to canonical terms, controls, evidence grades, result states or scoring need a formal change
              proposal (Artifact #11 §2.4) before any pull request.
            </p>
            <p className="reviewLinks">
              <A href={links.contributing}>Read CONTRIBUTING</A>
            </p>
          </li>
          <li className="reviewItem">
            <h3>Inspect the source</h3>
            <p>The pinned artifact set, and the open review findings that are a good place to start.</p>
            <p className="reviewLinks">
              <A href={links.manifest}>METHODOLOGY_MANIFEST</A>
              <A href={links.reviewFindings}>REVIEW_FINDINGS</A>
            </p>
          </li>
        </ul>

        <MarginReference className="marginRefEnd actRefEnd">
          Routes from{" "}
          <a href={links.contributing} rel="noopener noreferrer">
            CONTRIBUTING
          </a>{" "}
          and the repository’s issue templates
        </MarginReference>
      </div>
    </section>
  );
}
