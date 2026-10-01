import { ActThree } from "./components/ActThree";
import { AssessmentLifecycle } from "./components/AssessmentLifecycle";
import { ActTwo } from "./components/ActTwo";
import { CanonicalSource } from "./components/CanonicalSource";
import { Cover } from "./components/Cover";
import { DomainsLens } from "./components/DomainsLens";
import { EvidenceSequence } from "./components/EvidenceSequence";
import { PrimaryNav, type NavItem } from "./components/PrimaryNav";
import { ReviewInvitation } from "./components/ReviewInvitation";
import { SiteFooter } from "./components/SiteFooter";
import { StatusColophon } from "./components/StatusColophon";
import { UnknownAssurance } from "./components/UnknownAssurance";
import { links } from "./content";

/**
 * Visual-reset navigation (final): Method · Domains · Assurance · Source · GitHub.
 *   Method    → #flow        the reasoning act (Act III);
 *   Domains   → #domains     the six-domain lens;
 *   Assurance → #unknown     the first section of the UNKNOWN → Evidence →
 *                            Lifecycle sequence (website navigation only, not a
 *                            methodology construct; #evidence keeps its id for
 *                            Act III annotation c);
 *   Source    → #methodology the canonical-source section.
 * check-links fails the build on any unresolved fragment; check-claims pins
 * the targets and their order.
 */
const navItems: NavItem[] = [
  { href: "#flow", label: "Method" },
  { href: "#domains", label: "Domains" },
  { href: "#unknown", label: "Assurance" },
  { href: "#methodology", label: "Source" },
  { href: links.repo, label: "GitHub", srSuffix: "(canonical source)", external: true },
];

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="siteHeader">
        <div className="headerInner">
          <a className="brand" href="#top" aria-label="AI Trust Graph — back to top">
            {/* PROVISIONAL brand mark: placeholder pending a separate visual-brand review.
                Hollow nodes, matching the graph grammar. */}
            <svg className="brandMark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
              <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none">
                <path d="M16 22 L32 14 L48 24 M16 22 L26 44 L48 24 M26 44 L46 48" />
              </g>
              <g className="brandMarkNodes" stroke="currentColor" strokeWidth="3.5">
                <circle cx="16" cy="22" r="5" />
                <circle cx="32" cy="14" r="4.5" />
                <circle cx="48" cy="24" r="5" />
                <circle cx="26" cy="44" r="5" />
              </g>
              <circle cx="46" cy="48" r="5" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="3 2.5" />
            </svg>
            <span>AI Trust Graph</span>
          </a>
          <PrimaryNav items={navItems} />
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {/* ─────────────────────────── Act I · Cover ──────────────────────── */}
        <Cover />

        {/* ──────────────────── Act II · Why graph reasoning ─────────────────── */}
        <ActTwo />

        {/* ──────────────────── Act III · How the method thinks ───────────────── */}
        {/* Authority (annotation a) and control breakpoints (annotation b) live inside Act III. */}
        <ActThree />

        {/* ──────────────────── Domains · six lenses over one graph ─────────────────── */}
        <DomainsLens />

        {/* ─────────────── UNKNOWN · Evidence · Lifecycle (assurance sequence) ─────────────── */}
        <UnknownAssurance />

        <EvidenceSequence />

        <AssessmentLifecycle />

        {/* ───────────────────── Release, review, limitations ───────────────────── */}
        <StatusColophon />

        {/* ───────────────────────── Canonical source ────────────────────────── */}
        <CanonicalSource />

        {/* ─────────────────────────── Public review ─────────────────────────── */}
        <ReviewInvitation />
      </main>

      <SiteFooter />
    </>
  );
}
