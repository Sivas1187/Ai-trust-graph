import { links, methodologyAuthor, release, reviewStatus } from "../../content";
import { isPublished } from "../../publication";
import { author } from "../../site-content";

/**
 * Footer: release facts, canonical source, publication state, licence,
 * notices and the independence statement. `prefix` is "" on the home page and
 * "/" on other pages, so in-page anchors resolve to the home page.
 */
export function SiteFooter({ prefix = "" }: { prefix?: string }) {
  const ext = (href: string, label: string) => (
    <a href={href} rel="noopener noreferrer">
      {label}
      <span className="visuallyHidden"> (opens GitHub)</span>
    </a>
  );
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div className="footerId">
          <p className="footerBrand">AI Trust Graph</p>
          <p className="footerMeta">
            Bundle {release.bundle} · {release.status} · Snapshot {release.snapshot}
          </p>
          <p className="footerMeta">{reviewStatus[1]}</p>
          <p className="footerMeta">Independent research by {methodologyAuthor}</p>
        </div>
        <nav className="footerNav" aria-label="Footer">
          <ul>
            <li>{ext(links.repo, "GitHub repository (canonical source)")}</li>
            <li>
              <a href={`${prefix}#publications`}>{isPublished() ? "Publications and citation" : "Publications (whitepaper in preparation)"}</a>
            </li>
            <li>
              <a href={`${prefix}#publications`}>How to cite</a>
            </li>
            <li>{ext(links.changelog, "Changelog")}</li>
            <li>{ext(links.license, "Licence (CC BY 4.0)")}</li>
            <li>{ext(links.trademarks, "Trademarks notice")}</li>
            <li>
              <a href="/privacy/">Privacy notice</a>
            </li>
            <li>
              <a href="/accessibility/">Accessibility statement</a>
            </li>
          </ul>
        </nav>
        <div className="footerText">
          <p>
            AI Trust Graph is a methodology, not a product, and not a certification. This website is explanatory; the
            GitHub artifacts are canonical and take precedence on any conflict.
          </p>
          <p>{author.independence}</p>
          <p>
            Copyright © 2026 {methodologyAuthor}. Methodology text licensed CC BY 4.0. The name is reserved separately; see
            the trademarks notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
