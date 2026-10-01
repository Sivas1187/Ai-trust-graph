import { links, methodologyAuthor, release } from "../content";

/**
 * Footer — the closing colophon of the page. Facts only: the methodology
 * name, its release metadata, the methodology-not-product statement, the
 * canonical-source relationship, copyright, licence and the trademark notice.
 * No social links, biography, contact or sales prompts.
 */
export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerFrame">
        <div className="footerId">
          <p className="footerBrand">AI Trust Graph</p>
          <p className="footerMeta">
            <span>{release.status}</span> · <span>Bundle {release.bundle}</span> ·{" "}
            <span>Snapshot {release.snapshot}</span>
          </p>
        </div>
        <div className="footerText">
          <p>
            AI Trust Graph is a methodology, not a product. This website is explanatory. The{" "}
            <a href={links.repo} rel="noopener noreferrer">
              GitHub methodology artifacts
            </a>{" "}
            are canonical and win on any conflict.
          </p>
          <p>
            Copyright © 2026 {methodologyAuthor}. Methodology text licensed{" "}
            <a href={links.license} rel="noopener noreferrer">
              CC BY 4.0
            </a>
            ; the name is reserved separately — see{" "}
            <a href={links.trademarks} rel="noopener noreferrer">
              TRADEMARKS
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
