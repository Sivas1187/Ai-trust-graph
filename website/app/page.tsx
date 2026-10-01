import { ActThree } from "./components/ActThree";
import { ActTwo } from "./components/ActTwo";
import { CanonicalSource } from "./components/CanonicalSource";
import { Cover } from "./components/Cover";
import { DomainsLens } from "./components/DomainsLens";
import { PrimaryNav, type NavItem } from "./components/PrimaryNav";
import { ReviewInvitation } from "./components/ReviewInvitation";
import { StatusColophon } from "./components/StatusColophon";
import {
  artifacts,
  assessmentPhases,
  assessmentTypes,
  domains,
  evidenceGrades,
  exitCriteria,
  lifecycleIntro,
  links,
  methodologyAuthor,
  nonNumericResultStates,
  phaseIterationRule,
  release,
  scale,
  unknownVsNotTested,
} from "./content";

/**
 * Visual-reset navigation: Method · Domains · Assurance · Source · GitHub.
 * Each item targets a section that exists today; check-links fails the build
 * on any unresolved fragment.
 * TODO(visual-reset): retarget when the redesigned acts land —
 *   Method    → the reasoning act (currently #flow, the reasoning chain);
 *   Assurance → the assurance act (currently #evidence, where evidence,
 *               UNKNOWN, breakpoints and lifecycle begin);
 *   Source    → the canonical-source act (#methodology; redesigned in PR C,
 *               id kept so existing links keep working).
 */
const navItems: NavItem[] = [
  { href: "#flow", label: "Method" },
  { href: "#domains", label: "Domains" },
  { href: "#evidence", label: "Assurance" },
  { href: "#methodology", label: "Source" },
  { href: links.repo, label: "GitHub", srSuffix: "(canonical source)", external: true },
];

function Source({ children }: { children: React.ReactNode }) {
  return <p className="source">Source: {children}</p>;
}

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className} rel="noopener noreferrer">
      {children}
    </a>
  );
}

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

        {/* ─────────────────────────── UNKNOWN ──────────────────────────── */}
        <section id="unknown" className="unknown" aria-labelledby="unknown-title">
          <div className="shell">
            <p className="eyebrow">Evidence-bounded conclusions</p>
            <h2 id="unknown-title" className="unknownTitle">
              <span>UNKNOWN</span> <span className="unknownStays">stays</span> <span>UNKNOWN.</span>
            </h2>
            <p className="unknownLead">
              Insufficient evidence does not silently become a favourable — or an adverse — conclusion.
              UNKNOWN remains visible until sufficient evidence and accountable review resolve the
              material assertion.
            </p>
            <ul className="unknownGrid" aria-label="UNKNOWN is never silently converted into">
              {["Safe", "Failed", "Zero risk", "N/A"].map((x) => (
                <li key={x}>
                  <span className="unknownFrom">UNKNOWN</span>
                  <span className="unknownNeq">is not</span>
                  <span className="unknownTo">{x}</span>
                </li>
              ))}
            </ul>

            <div className="stateCompare">
              <h3 className="stateCompareTitle">UNKNOWN is not Not Tested.</h3>
              <p className="stateCompareLede">
                They are distinct non-numeric result states with different meanings.
              </p>
              <dl className="stateCards">
                {unknownVsNotTested.map((st) => (
                  <div key={st.state} className="stateCard">
                    <dt>{st.state}</dt>
                    <dd>
                      <p className="stateMeaning">{st.meaning}</p>
                      <div className="stateTreatment">
                        <p>
                          <span className="stateLabel">Numeric treatment</span> {st.numeric}
                        </p>
                        <p>
                          <span className="stateLabel">Reporting treatment</span> {st.reporting}
                        </p>
                      </div>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="stateRule">
                <strong>Neither may be silently converted into a fabricated effectiveness result.</strong>{" "}
                Evidence grade E0 (no evidence) can support either, according to context:{" "}
                <q>The only defensible conclusion is UNKNOWN or Not Tested.</q>
              </p>
              <Source>
                meanings from <Ext href={links.doc("06-evidence-model.md")}>Artifact #6 — Evidence Model §0.5, §1.1</Ext>;
                numeric and reporting treatment from <Ext href={links.doc("04-scoring-framework.md")}>Artifact #4 — Scoring Framework §0.5</Ext>.
              </Source>
            </div>

            <div className="unknownCanon">
              <blockquote>
                <p>UNKNOWN is not zero, weak, safe or effective.</p>
                <footer>
                  Invariant SC-INV-01 —{" "}
                  <Ext href={links.doc("04-scoring-framework.md")}>Artifact #4 — Scoring Framework</Ext>
                </footer>
              </blockquote>
              <div>
                <h3>Distinct non-numeric result states</h3>
                <ul className="chips">
                  {nonNumericResultStates.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="small">
                  Each state has its own numeric and reporting treatment. They must never be silently
                  collapsed into one another, into a score, or into a pass/fail. AI Trust
                  Graph deliberately produces <strong>no single overall trust score</strong>.
                </p>
                <Source>
                  <Ext href={links.doc("04-scoring-framework.md")}>Artifact #4 §0.5</Ext>
                </Source>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Evidence ─────────────────────────── */}
        <section id="evidence" className="section evidence" aria-labelledby="evidence-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Evidence model</p>
              <h2 id="evidence-title">Six grades of evidentiary support.</h2>
              <p className="sectionLede">
                Grade measures evidentiary support, not desirability, safety or compliance.
              </p>
            </div>

            {/* Evidence scale: the ordered list is the source of truth; the line, nodes and
                arrow are drawn with CSS borders so they survive forced-colours mode. */}
            <div className="evScale">
              <p className="evAxis" aria-hidden="true">
                Evidentiary support
              </p>
              <ol className="evSteps" aria-label="Evidence grades E0 to E5, in order of increasing evidentiary support">
                {evidenceGrades.map((g) => (
                  <li key={g.grade} className="evStep">
                    <span className="evNode" aria-hidden="true" />
                    <details className="dgDisclosure evDetails">
                      <summary>
                        <span className="evId">{g.grade}</span>
                        <span className="visuallyHidden"> — </span>
                        <span className="evName">{g.name}</span>
                        <span className="summaryIcon" aria-hidden="true" />
                      </summary>
                      <dl className="evMeta">
                        <dt>Meaning</dt>
                        <dd>{g.meaning}</dd>
                        <dt>What it can support</dt>
                        <dd>{g.supports}</dd>
                      </dl>
                    </details>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="evidenceRules" aria-label="How to read evidence grades">
              <li>
                <strong>Grade is not sufficiency.</strong> Meeting the grade minimum is necessary but
                not sufficient; relevance, scope, currentness, representativeness, conflict status and
                an approved reviewer decision still govern.
              </li>
              <li>
                <strong>A high grade can confirm an adverse state.</strong> A low grade can weakly
                suggest a favorable state.
              </li>
              <li>
                <strong>Grade is its own quantity.</strong> Never add evidence grade to control
                effectiveness, severity, maturity or risk as if they were the same quantity.
              </li>
            </ul>
            <Source>
              grade names, meanings and supported claims quoted from{" "}
              <Ext href={links.doc("06-evidence-model.md")}>Artifact #6 — Evidence Model §1.1–§1.8</Ext>;
              the full sufficiency rules are deliberately not summarized here.
            </Source>
          </div>
        </section>

        {/* ───────────────────── Assessment lifecycle ───────────────────── */}
        <section id="lifecycle" className="section lifecycle" aria-labelledby="lifecycle-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Assessment lifecycle</p>
              <h2 id="lifecycle-title">Thirteen controlled phases.</h2>
              <p className="sectionLede">
                Separate from the reasoning chain: Artifact #7 governs the controlled fieldwork
                lifecycle and gates without redefining upstream semantics.
              </p>
            </div>

            <p className="lcRule">
              {lifecycleIntro} <strong>{phaseIterationRule}</strong>
            </p>

            {/* Two-row timeline (1–7, 8–13) joined by one return connector; vertical on small
                screens. Square markers, all identical: no completion or progress state. */}
            <ol className="lcPhases" aria-label="Assessment Methodology phases, Artifact #7 §0.11">
              {assessmentPhases.map((p) => (
                <li key={p.n} className="lcPhase">
                  <span className="lcMarker" aria-hidden="true" />
                  <span className="lcNum">
                    <span className="visuallyHidden">Phase </span>
                    {p.n}
                  </span>{" "}
                  <span className="lcName">{p.name}</span>
                </li>
              ))}
            </ol>

            <details className="dgDisclosure dgPanel">
              <summary>
                <span>Phase outcomes and gates</span>
                <span className="summaryIcon" aria-hidden="true" />
              </summary>
              <table className="dgTable">
                <caption className="dgCaption">Primary outcome of each phase (§0.11)</caption>
                <thead>
                  <tr>
                    <th scope="col">Phase</th>
                    <th scope="col">Primary outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {assessmentPhases.map((p) => (
                    <tr key={p.n}>
                      <td>
                        {p.n} {p.name}
                      </td>
                      <td>{p.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="dgNote">{exitCriteria.intro.join(" ")}</p>
              <table className="dgTable">
                <caption className="dgCaption">Gate tests (§0.12)</caption>
                <thead>
                  <tr>
                    <th scope="col">Gate test</th>
                    <th scope="col">Rule</th>
                  </tr>
                </thead>
                <tbody>
                  {exitCriteria.gates.map((g) => (
                    <tr key={g.test}>
                      <td>{g.test}</td>
                      <td>{g.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>

            <div className="lcTypes">
              <h3 id="assessment-types-title">Assessment types</h3>
              <p className="small">Listed in Artifact #7 order; the order implies no priority.</p>
              <ul className="chips lcTypeList" aria-labelledby="assessment-types-title">
                {assessmentTypes.map((t) => (
                  <li key={t.name}>{t.name}</li>
                ))}
              </ul>
              <details className="dgDisclosure dgPanel">
                <summary>
                  <span>Assessment type definitions</span>
                  <span className="summaryIcon" aria-hidden="true" />
                </summary>
                <dl className="lcTypeDefs">
                  {assessmentTypes.map((t) => (
                    <div key={t.name}>
                      <dt>{t.name}</dt>
                      <dd>{t.definition}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </div>

            <Source>
              phases, outcomes and iteration rule from{" "}
              <Ext href={links.doc("07-assessment-methodology.md")}>Artifact #7 — Assessment Methodology §0.11</Ext>;
              gate tests from §0.12; assessment types from §1.1–§1.10; the role of Artifact #7 from{" "}
              <Ext href={links.manifest}>METHODOLOGY_MANIFEST §1</Ext>.
            </Source>
          </div>
        </section>

        {/* ───────────────────── Release, review, limitations ───────────────────── */}
        <StatusColophon />

        {/* ───────────────────────── Canonical source ────────────────────────── */}
        <CanonicalSource />

        {/* ─────────────────────────── Public review ─────────────────────────── */}
        <ReviewInvitation />
      </main>

      <footer className="siteFooter">
        <div className="shell footerGrid">
          <div>
            <p className="footerBrand">AI Trust Graph</p>
            <p>
              {release.status} · Bundle {release.bundle} · Snapshot {release.snapshot}
            </p>
          </div>
          <div>
            <p>
              AI Trust Graph is a methodology, not a product. This website is explanatory. The{" "}
              <Ext href={links.repo}>GitHub methodology artifacts</Ext> are canonical and win on any
              conflict.
            </p>
            <p>
              Copyright © 2026 {methodologyAuthor}. Methodology text licensed{" "}
              <Ext href={links.license}>CC BY 4.0</Ext>; the name is reserved separately — see{" "}
              <Ext href={links.trademarks}>TRADEMARKS</Ext>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
