import { ActThree } from "./components/ActThree";
import { ActTwo } from "./components/ActTwo";
import { Cover } from "./components/Cover";
import { PrimaryNav, type NavItem } from "./components/PrimaryNav";
import {
  artifacts,
  assessmentPhases,
  assessmentTypes,
  changeReviewNote,
  companion,
  domains,
  domainsLede,
  evidenceGrades,
  exitCriteria,
  lifecycleIntro,
  limitation,
  links,
  manifestGatePrinciple,
  methodologyAuthor,
  nonNumericResultStates,
  notValidated,
  pendingGates,
  phaseIterationRule,
  release,
  reviewStatus,
  roadmapNote,
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
 *   Source    → the canonical-source act (currently #methodology).
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

        {/* ─────────────────────────── Domains ──────────────────────────── */}
        <section id="domains" className="section domains" aria-labelledby="domains-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Six domains</p>
              <h2 id="domains-title">Six coordinated lenses over one graph.</h2>
              <p className="sectionLede">{domainsLede.join(" ")}</p>
            </div>

            {/* Graph-centred lens model. The shared graph comes first in the DOM (and first on
                small screens); the list of six equal domains is the source of truth. On wide
                screens D1–D3 sit left and D4–D6 right of the shared graph, joined by identical
                border connectors. No domain is larger, coloured differently or placed first. */}
            <div className="lens">
              <p className="lensLabel">
                <span className="tag">Explanatory</span> Six equal lenses; position and colour imply
                no ranking, hierarchy or maturity.
              </p>
              <div className="lensBody">
                <div className="lensHub">
                  {/* Wide screens only: a decorative, unlabelled network suggesting one shared
                      graph. Eleven irregular nodes (no centre, not six), so no node stands for a
                      domain; accent colours are for texture only. */}
                  <svg
                    className="lensNetwork"
                    viewBox="16 10 172 286"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <g className="lnEdges">
                      <line x1="38" y1="40" x2="112" y2="22" />
                      <line x1="112" y1="22" x2="168" y2="62" />
                      <line x1="38" y1="40" x2="70" y2="96" />
                      <line x1="112" y1="22" x2="70" y2="96" />
                      <line x1="168" y1="62" x2="140" y2="120" />
                      <line x1="70" y1="96" x2="140" y2="120" />
                      <line x1="70" y1="96" x2="28" y2="150" />
                      <line x1="70" y1="96" x2="100" y2="170" />
                      <line x1="140" y1="120" x2="100" y2="170" />
                      <line x1="140" y1="120" x2="176" y2="176" />
                      <line x1="28" y1="150" x2="100" y2="170" />
                      <line x1="28" y1="150" x2="56" y2="236" />
                      <line x1="100" y1="170" x2="56" y2="236" />
                      <line x1="100" y1="170" x2="132" y2="236" />
                      <line x1="176" y1="176" x2="132" y2="236" />
                      <line x1="56" y1="236" x2="92" y2="284" />
                      <line x1="132" y1="236" x2="92" y2="284" />
                      <line x1="168" y1="62" x2="176" y2="176" />
                    </g>
                    <g className="lnNodes">
                      <circle className="lnC" cx="38" cy="40" r="6" />
                      <circle className="lnI" cx="112" cy="22" r="5" />
                      <circle className="lnG" cx="168" cy="62" r="7" />
                      <circle className="lnI" cx="70" cy="96" r="7" />
                      <circle className="lnA" cx="140" cy="120" r="5" />
                      <circle className="lnC" cx="28" cy="150" r="5" />
                      <circle className="lnI" cx="100" cy="170" r="8" />
                      <circle className="lnC" cx="176" cy="176" r="6" />
                      <circle className="lnG" cx="56" cy="236" r="6" />
                      <circle className="lnI" cx="132" cy="236" r="5" />
                      <circle className="lnC" cx="92" cy="284" r="6" />
                    </g>
                  </svg>
                  <svg className="lensEmblem" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M16 22 L32 14 L48 24 M16 22 L26 44 L48 24 M26 44 L46 48" />
                    </g>
                    <g fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="16" cy="22" r="5" />
                      <circle cx="32" cy="14" r="4" />
                      <circle cx="48" cy="24" r="5" />
                      <circle cx="26" cy="44" r="5" />
                      <circle cx="46" cy="48" r="4.5" />
                    </g>
                  </svg>
                  <p className="lensHubTitle">One graph</p>
                  <dl className="lensFacts">
                    <div>
                      <dt>Domains</dt>
                      <dd>{scale.domains}</dd>
                    </div>
                    <div>
                      <dt>Canonical controls</dt>
                      <dd>{scale.controls}</dd>
                    </div>
                    <div>
                      <dt>Maturity capabilities</dt>
                      <dd>{scale.capabilities}</dd>
                    </div>
                  </dl>
                </div>
                <ul className="lensDomains" aria-label="The six assessment domains">
                  {domains.map((d) => (
                    <li key={d.id} className="lensDomain">
                      <div className="domainTop">
                        <span className="domainId">{d.id}</span>
                        <span className="domainPrefix">{d.prefix}-001…012</span>
                      </div>
                      <h3 className="domainName">{d.name}</h3>
                      <p className="domainPurpose">{d.purpose}</p>
                      <p className="domainCounts">
                        <span>{scale.controlsPerDomain} controls</span>
                        <span aria-hidden="true"> · </span>
                        <span className="visuallyHidden">, </span>
                        <span>{scale.capabilitiesPerDomain} maturity capabilities</span>
                      </p>
                      <details className="dgDisclosure domainDetails">
                        <summary>
                          <span>
                            Maturity capabilities
                            <span className="visuallyHidden">
                              {" "}
                              for {d.id} {d.name}
                            </span>
                          </span>
                          <span className="summaryIcon" aria-hidden="true" />
                        </summary>
                        <ol>
                          {d.capabilities.map((c, i) => (
                            <li key={c}>
                              <span className="capId">
                                {d.id}.{i + 1}
                              </span>{" "}
                              {c}
                            </li>
                          ))}
                        </ol>
                      </details>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Source>
              lede and purposes from <Ext href={links.doc("02-core-conceptual-model.md")}>Artifact #2 §8.1</Ext>;
              capabilities from <Ext href={links.doc("03-maturity-model.md")}>Artifact #3 — Maturity Model</Ext>;
              control IDs and counts from <Ext href={links.doc("05-master-control-library.md")}>Artifact #5 — Master Control Library</Ext>.
            </Source>
          </div>
        </section>

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
        <section id="status" className="section status" aria-labelledby="status-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Release status</p>
              <h2 id="status-title">Release, review and limitations.</h2>
            </div>
            <div className="statusGrid">
              <dl className="statusFacts">
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
                  <dd>{release.snapshot}</dd>
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
                  <dt>Provenance</dt>
                  <dd>Methodology author: {methodologyAuthor}</dd>
                  <dd className="statusNote">{changeReviewNote}</dd>
                </div>
              </dl>
              <div className="statusGates">
                <h3 id="gates-title">External release gates</h3>
                <ul aria-labelledby="gates-title">
                  {pendingGates.map((g) => (
                    <li key={g}>
                      <span className="gateName">{g}</span>
                      <span className="gateState">Pending</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="statusPrinciple">
                  <p>{manifestGatePrinciple}</p>
                  <footer>
                    <Ext href={links.manifest}>METHODOLOGY_MANIFEST §6</Ext>
                  </footer>
                </blockquote>
                <p className="small">{roadmapNote}</p>
              </div>
            </div>
            <p className="statusLimits">
              <strong>Limitations.</strong> {limitation}
            </p>
            <Source>
              status, bundle, snapshot and gates from the <Ext href={links.manifest}>METHODOLOGY_MANIFEST</Ext>{" "}
              header and §6; review status from the <Ext href={links.readme}>README</Ext>; authorship from the
              artifact approval records and <Ext href={links.license}>LICENSE</Ext>; change review from{" "}
              <Ext href={links.contributing}>CONTRIBUTING</Ext>.
            </Source>
          </div>
        </section>

        {/* ───────────────────────── Methodology ────────────────────────── */}
        <section id="methodology" className="section methodology" aria-labelledby="methodology-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Canonical source</p>
              <h2 id="methodology-title">Read the methodology itself.</h2>
              <p className="sectionLede">
                This website explains; the artifacts on GitHub decide. Listed in the recommended
                reading order from the{" "}
                <Ext href={links.manifest}>Methodology Manifest</Ext>.
              </p>
            </div>
            <Ext href={links.manifest} className="artifactCard manifestCard">
              <span className="artifactMeta">
                <span>Bundle {release.bundle}</span>
                <span className="tag">Authority map</span>
              </span>
              <span className="artifactTitle">METHODOLOGY_MANIFEST</span>
              <span className="artifactRole">
                Single canonical authority/dependency map and exact artifact-content registry for this
                repository snapshot.
              </span>
            </Ext>
            <dl className="sourceFacts" aria-label="Where the model's structure is defined">
              <div>
                <dt>{scale.domains} domains · {scale.controls} canonical controls</dt>
                <dd>Artifact #5</dd>
              </div>
              <div>
                <dt>{scale.capabilities} maturity capabilities · {scale.maturityLevels}</dt>
                <dd>Artifact #3 · cumulative, evidence-gated, not an average of control scores</dd>
              </div>
              <div>
                <dt>Evidence grades {scale.evidenceGrades}</dt>
                <dd>Artifact #6</dd>
              </div>
            </dl>
            <ol className="artifactGrid">
              {artifacts.map((a) => (
                <li key={a.n}>
                  <Ext href={links.doc(a.file)} className="artifactCard">
                    <span className="artifactMeta">
                      <span>Artifact #{a.n}</span>
                      <span>v{a.version}</span>
                    </span>
                    <span className="artifactTitle">{a.title}</span>
                    <span className="artifactRole">{a.role}</span>
                  </Ext>
                </li>
              ))}
            </ol>
            <Ext href={links.doc(companion.file)} className="artifactCard companion">
              <span className="artifactMeta">
                <span>Artifact #{companion.n} · Phase 2 companion</span>
                <span className="tag">Non-normative</span>
              </span>
              <span className="artifactTitle">{companion.title}</span>
              <span className="artifactRole">
                {companion.role}. Informative only; carries no conformance weight.
              </span>
            </Ext>
          </div>
        </section>

        {/* ─────────────────────────── Review ───────────────────────────── */}
        <section id="review" className="dark review" aria-labelledby="review-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Public review</p>
              <h2 id="review-title">This methodology is meant to be challenged.</h2>
            </div>
            <ul className="entryGrid" aria-label="Ways to review and contribute">
              <li className="entry">
                <h3>Report a finding</h3>
                <p>A specific inconsistency, gap or error in the methodology text, in the format used in REVIEW_FINDINGS.</p>
                <Ext href={links.findingIssue} className="entryLink">
                  Open a methodology finding
                </Ext>
              </li>
              <li className="entry">
                <h3>Share feedback</h3>
                <p>A reaction, question or first impression. You do not need a precise defect.</p>
                <Ext href={links.feedbackIssue} className="entryLink">
                  Open general feedback
                </Ext>
                <p className="entrySecondary">
                  Or start a <Ext href={links.discussions}>GitHub Discussion</Ext>.
                </p>
              </li>
              <li className="entry">
                <h3>Propose a change</h3>
                <p>
                  Changes to canonical terms, controls, evidence grades, result states or scoring need a
                  formal change proposal (Artifact #11 §2.4) before any pull request.
                </p>
                <Ext href={links.contributing} className="entryLink">
                  Read CONTRIBUTING
                </Ext>
              </li>
              <li className="entry">
                <h3>Inspect the source</h3>
                <p>The pinned artifact set, and the open review findings that are a good place to start.</p>
                <Ext href={links.manifest} className="entryLink">
                  METHODOLOGY_MANIFEST
                </Ext>
                <Ext href={links.reviewFindings} className="entryLink">
                  REVIEW_FINDINGS
                </Ext>
              </li>
            </ul>
            <Source>
              routes from <Ext href={links.contributing}>CONTRIBUTING</Ext> (“Ways to give feedback”, “What kind of
              change are you proposing?”) and the repository’s issue templates.
            </Source>
          </div>
        </section>
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
