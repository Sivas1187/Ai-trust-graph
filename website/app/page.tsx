import { BreakpointExplorer } from "./components/BreakpointExplorer";
import { HeroGraph } from "./components/HeroGraph";
import { PrimaryNav, type NavItem } from "./components/PrimaryNav";
import {
  artifacts,
  assessmentPhases,
  companion,
  domains,
  evidenceGrades,
  links,
  nonNumericResultStates,
  pathRoles,
  pathValidationStates,
  pendingGates,
  reasoningChain,
  release,
  unknownVsNotTested,
} from "./content";

const navItems: NavItem[] = [
  { href: "#flow", label: "Reasoning" },
  { href: "#domains", label: "Domains" },
  { href: "#authority", label: "Authority" },
  { href: "#evidence", label: "Evidence" },
  { href: "#methodology", label: "Methodology" },
  { href: "#review", label: "Review" },
  { href: links.repo, label: "GitHub", srSuffix: "(canonical source)", external: true },
];

const problemChain = [
  ["Models", "connect to agents."],
  ["Agents", "invoke tools."],
  ["Tools", "operate through identities."],
  ["Identities", "cross boundaries."],
  ["Actions", "may reach consequential systems."],
] as const;

/** Reasoning-chain groups with the canonical 1-based number of their first stage. */
const chainGroups = reasoningChain.map((g, gi) => ({
  ...g,
  start: 1 + reasoningChain.slice(0, gi).reduce((sum, x) => sum + x.stages.length, 0),
}));

const assertions = ["Can connect", "Can authenticate", "Can access", "Can invoke", "Can modify", "Can transact"];

/** Artifact #2 §5.2 authority classes, verbatim names. */
const authorityClasses = [
  "Observe",
  "Read",
  "Retrieve",
  "Infer",
  "Recommend",
  "Approve",
  "Execute",
  "Modify",
  "Delete",
  "Disclose",
  "Transact",
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
        <div className="shell headerInner">
          <a className="brand" href="#top" aria-label="AI Trust Graph — back to top">
            {/* PROVISIONAL brand mark: placeholder pending a separate visual-brand review. */}
            <svg className="brandMark" viewBox="0 0 64 64" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none">
                <path d="M16 22 L32 14 L48 24 M16 22 L26 44 L48 24 M26 44 L46 48" />
              </g>
              <g fill="currentColor">
                <circle cx="16" cy="22" r="5.5" />
                <circle cx="32" cy="14" r="4.5" />
                <circle cx="48" cy="24" r="5.5" />
                <circle cx="26" cy="44" r="5.5" />
              </g>
              <circle cx="46" cy="48" r="5" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="3 2.5" />
            </svg>
            <span>AI Trust Graph</span>
          </a>
          <PrimaryNav items={navItems} />
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {/* ───────────────────────────── Hero ───────────────────────────── */}
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="shell heroGrid">
            <div className="heroCopy">
              <p className="statusPill">
                <span className="statusDot" aria-hidden="true" />
                <span className="statusText">
                  <strong>{release.status}</strong>
                  <span className="statusSep" aria-hidden="true">·</span>
                  <span className="visuallyHidden">, </span>
                  <span className="nowrap">Bundle {release.bundle}</span>
                  <span className="statusSep" aria-hidden="true">·</span>
                  <span className="visuallyHidden">, </span>
                  <span className="nowrap">Independent review pending</span>
                </span>
              </p>
              <p className="kicker">AI Trust Graph</p>
              <h1 id="hero-title">Graph-based, evidence-driven assurance for connected AI systems.</h1>
              <p className="lede">
                AI Trust Graph is an open methodology that models connected AI environments as
                evidence-linked graphs of identities, agents, models, tools, data, infrastructure and
                providers — and the relationships between them — so that assurance conclusions stay
                bounded by what the evidence can actually support.
              </p>
              <div className="actions">
                <a className="button buttonPrimary" href="#flow">
                  Explore the methodology
                </a>
                <Ext className="button buttonSecondary" href={links.repo}>
                  View canonical source on GitHub
                </Ext>
              </div>
            </div>
            <HeroGraph />
          </div>
        </section>

        {/* ──────────────────────────── Problem ─────────────────────────── */}
        <section className="dark problem" aria-labelledby="problem-title">
          <div className="shell problemGrid">
            <div>
              <p className="eyebrow">The problem</p>
              <h2 id="problem-title">AI systems are no longer isolated models.</h2>
            </div>
            <div>
              <ol className="chain">
                {problemChain.map(([subject, rest]) => (
                  <li key={subject}>
                    <span className="chainNode" aria-hidden="true" />
                    <span>
                      <strong>{subject}</strong> {rest}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="problemPunch">Risk can emerge through the relationships between them.</p>
              <p className="problemCaveat">
                Relationships describe what may be possible; on their own they do not establish exploitation.{" "}
                <q>A topological connection is not automatically an exploitable path.</q>
              </p>
              <Source>
                <Ext href={links.doc("01-manifesto.md")}>Artifact #1 — Manifesto</Ext>
              </Source>
            </div>
          </div>
        </section>

        {/* ─────────────────── Canonical reasoning chain ─────────────────── */}
        <section id="flow" className="section flow" aria-labelledby="flow-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">The reasoning chain</p>
              <h2 id="flow-title">From what exists to what can be defended.</h2>
              <p className="sectionLede">
                Objects create a system description. Relationships establish how the objects
                interact. Paths combine relationships under conditions. Authority and influence
                explain how consequences can be caused. Evidence and controls determine what can be
                concluded.
              </p>
              <p className="flowSpine">
                The Core Conceptual Model calls this chain{" "}
                <q>the intellectual spine of the methodology</q>.
              </p>
            </div>

            <ol className="flowRail" aria-label="Canonical reasoning chain, Artifact #2 §0.10">
              {chainGroups.map((g, gi) => (
                <li
                  key={g.stages.join("+")}
                  className={g.stages.length > 1 ? "flowGroup flowGroupShared" : "flowGroup"}
                  style={{ ["--i" as string]: gi }}
                >
                  <ol className="flowStages" start={g.start}>
                    {g.stages.map((stage, si) => (
                      <li key={stage} className="flowStep">
                        <span className="flowIndex" aria-hidden="true">
                          {String(g.start + si).padStart(2, "0")}
                        </span>
                        <span className="flowDot" aria-hidden="true" />
                        <h3 className="flowStage">{stage}</h3>
                      </li>
                    ))}
                  </ol>
                  <p className="flowQuestion">{g.question}</p>
                  <p className="flowConcept">{g.concept}</p>
                </li>
              ))}
            </ol>
            <Source>
              stage names and order from the reasoning chain in{" "}
              <Ext href={links.doc("02-core-conceptual-model.md")}>Artifact #2 — Core Conceptual Model §0.10</Ext>;
              questions and concepts from the same section’s theory map, whose final row covers both
              Evidence and Decision.
            </Source>

            <div className="flowLifecycle">
              <div>
                <h3>A separate lifecycle: the 13-phase Assessment Methodology</h3>
                <p>
                  The reasoning chain belongs to the Core Conceptual Model. Assessment fieldwork is
                  governed separately by Artifact #7, which defines the controlled fieldwork lifecycle
                  and gates without redefining upstream semantics.
                </p>
                <Source>
                  <Ext href={links.doc("07-assessment-methodology.md")}>Artifact #7 — Assessment Methodology</Ext>;{" "}
                  <Ext href={links.manifest}>METHODOLOGY_MANIFEST §1</Ext>
                </Source>
              </div>
              <ol className="phaseList" aria-label="Assessment Methodology phases">
                {assessmentPhases.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Domains ──────────────────────────── */}
        <section id="domains" className="section domains" aria-labelledby="domains-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Six domains</p>
              <h2 id="domains-title">Six coordinated lenses over one graph.</h2>
              <p className="sectionLede">
                The domains are coordinated assessment lenses over one graph. They are not separate
                products and should not maintain incompatible definitions, evidence grades or scoring
                assumptions. Each has twelve canonical controls and six
                maturity capabilities.
              </p>
            </div>
            <ul className="domainGrid">
              {domains.map((d) => (
                <li key={d.id} className="domainCard">
                  <div className="domainTop">
                    <span className="domainId">{d.id}</span>
                    <span className="domainPrefix">{d.prefix}-001…012</span>
                  </div>
                  <h3>{d.name}</h3>
                  <p className="domainPurpose">{d.purpose}</p>
                  <details className="domainDetails">
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
            <Source>
              purposes from <Ext href={links.doc("02-core-conceptual-model.md")}>Artifact #2 §8.1</Ext>;
              capabilities from <Ext href={links.doc("03-maturity-model.md")}>Artifact #3 — Maturity Model</Ext>;
              control IDs from <Ext href={links.doc("05-master-control-library.md")}>Artifact #5 — Master Control Library</Ext>.
            </Source>
          </div>
        </section>

        {/* ────────────────────────── Authority ─────────────────────────── */}
        <section id="authority" className="dark authority" aria-labelledby="authority-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Authority</p>
              <h2 id="authority-title">Access is not authority.</h2>
              <p className="sectionLede">
                Each of these is a separate claim. Each needs its own evidence, and none is silently
                inferred from another.
              </p>
            </div>
            <ul className="assertions" aria-label="Distinct assertions">
              {assertions.map((a, i) => (
                <li key={a}>
                  {i > 0 && (
                    <span className="neq" aria-hidden="true">
                      ≠
                    </span>
                  )}
                  <span className="assertion">{a}</span>
                </li>
              ))}
            </ul>
            <p className="assertionNote">
              Illustration of distinct assertions only — not a canonical sequence, ladder or state
              machine.
            </p>

            <div className="authorityCanon">
              <blockquote>
                <p>
                  The capability definition, its network reachability, granted authority and actual
                  invocation are different concepts and require different relationships.
                </p>
                <footer>
                  Separation rule —{" "}
                  <Ext href={links.doc("02-core-conceptual-model.md")}>Artifact #2 §3.6</Ext>
                </footer>
              </blockquote>
              <div>
                <h3>Canonical authority classes</h3>
                <ul className="chips chipsDark">
                  {authorityClasses.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <p className="small">
                  Authority classes describe the kind of consequence an entity can cause. They are not
                  maturity levels and should not be ranked without considering target, scope, conditions and
                  criticality.
                </p>
                <Source>
                  <Ext href={links.doc("02-core-conceptual-model.md")}>Artifact #2 §5.2</Ext>
                </Source>
              </div>
            </div>
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

        {/* ──────────────────────── Breakpoints ─────────────────────────── */}
        <section id="breakpoints" className="section breakpoints" aria-labelledby="bp-title">
          <div className="shell">
            <div className="sectionHead">
              <p className="eyebrow">Control breakpoints</p>
              <h2 id="bp-title">Where can a material path be interrupted?</h2>
              <p className="sectionLede">
                A control breakpoint is a node, relationship or boundary where an effective control can
                materially stop, constrain, detect or contain a path. Alternate and residual paths must
                still be checked.
              </p>
            </div>
            <BreakpointExplorer />
            <div className="pathDims">
              <div>
                <h3>Path validation state</h3>
                <ul className="chips">
                  {pathValidationStates.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Path role</h3>
                <ul className="chips">
                  {pathRoles.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <p className="small pathDimsNote">
                Validation state and role are orthogonal dimensions and are not collapsed into one
                state machine.
              </p>
            </div>
            <Source>
              <Ext href={links.doc("02-core-conceptual-model.md")}>Artifact #2 §1.8, §6.3, §6.6</Ext>
            </Source>
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

        {/* ──────────────────────────── Scale ───────────────────────────── */}
        <section className="scale" aria-labelledby="scale-title">
          <div className="shell">
            <h2 id="scale-title" className="scaleTitle">
              The structure that carries the model
            </h2>
            <dl className="scaleGrid">
              <div>
                <dt>Domains</dt>
                <dd>6</dd>
              </div>
              <div>
                <dt>Canonical controls</dt>
                <dd>72</dd>
              </div>
              <div>
                <dt>Maturity capabilities</dt>
                <dd>36</dd>
              </div>
              <div>
                <dt>Maturity levels</dt>
                <dd>M1–M5</dd>
              </div>
              <div>
                <dt>Evidence grades</dt>
                <dd>E0–E5</dd>
              </div>
            </dl>
            <p className="small scaleNote">
              Maturity is cumulative, evidence-gated and not an average of control scores.
            </p>
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
          <div className="shell reviewGrid">
            <div>
              <p className="eyebrow">Public review</p>
              <h2 id="review-title">This methodology is meant to be challenged.</h2>
              <ul className="reviewAsks">
                <li>Challenge the assumptions.</li>
                <li>Examine the graph semantics.</li>
                <li>Inspect the evidence rules.</li>
                <li>Report inconsistencies.</li>
                <li>Contribute through GitHub.</li>
              </ul>
              <div className="actions">
                <Ext className="button buttonInverse" href={links.newIssue}>
                  Submit a finding
                </Ext>
                <Ext className="button buttonGhost" href={links.repo}>
                  Repository
                </Ext>
              </div>
              <ul className="reviewLinks">
                <li>
                  <Ext href={links.issues}>Issues</Ext>
                </li>
                <li>
                  <Ext href={links.contributing}>CONTRIBUTING</Ext>
                </li>
                <li>
                  <Ext href={links.reviewFindings}>REVIEW_FINDINGS</Ext>
                </li>
                <li>
                  <Ext href={links.manifest}>METHODOLOGY_MANIFEST</Ext>
                </li>
              </ul>
            </div>
            <aside className="gates" aria-labelledby="gates-title">
              <h3 id="gates-title">Release gates still pending</h3>
              <ul>
                {pendingGates.map((g) => (
                  <li key={g}>
                    <span className="gateState">Pending</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
              <p className="small">
                AI Trust Graph is not independently validated. These gates stay open until evidence of
                completion is published or recorded through governance.
              </p>
              <Source>
                <Ext href={links.manifest}>METHODOLOGY_MANIFEST §6</Ext>
              </Source>
            </aside>
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
              AI Trust Graph is a methodology, not a product. It is not a certification program, an
              accreditation body, a legal opinion, or a guarantee of AI security, safety or
              compliance.
            </p>
            <p>
              This website is explanatory. The{" "}
              <Ext href={links.repo}>GitHub methodology artifacts</Ext> are canonical and win on any
              conflict. Methodology text is licensed{" "}
              <Ext href={links.license}>CC BY 4.0</Ext>; the name is reserved separately — see{" "}
              <Ext href={links.trademarks}>TRADEMARKS</Ext>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
