const domains = [
  ["D1", "Discovery and AIBOM", "Inventory, ownership and blind spots across the AI estate."],
  ["D2", "Trust and Privilege Paths", "Trust relationships, identity and privilege paths, graph quality."],
  ["D3", "Authority Governance", "Delegated authority, approval, amplification and revocation."],
  ["D4", "AI Security Validation", "Threat hypotheses, control testing and independent retest."],
  ["D5", "AI Governance and Assurance", "Policy, appetite, use-case impact and provider assurance."],
  ["D6", "Operational Resilience", "Detection, containment, recovery and forensics."],
];

const reasoning = [
  "Assets",
  "Relationships",
  "Authority",
  "Paths",
  "Controls",
  "Evidence",
  "Decisions",
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="AI Trust Graph home">
          <span className="brandMark" aria-hidden="true">ATG</span>
          <span>AI Trust Graph</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#how">How it works</a>
          <a href="#domains">Domains</a>
          <a href="#evidence">Evidence</a>
          <a href="#review">Review</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="status">PUBLIC-RELEASE CANDIDATE · BUNDLE 1.0-rc.4</div>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">Graph-based · Evidence-driven · Vendor-neutral</p>
            <h1>Assurance for AI systems that are no longer isolated.</h1>
            <p className="lede">
              AI Trust Graph models connected AI environments as evidence-linked graphs of identities,
              agents, models, tools, data and providers — then reasons across relationships, authority,
              paths, controls and evidence to support defensible decisions.
            </p>
            <div className="actions">
              <a className="button primary" href="#how">Explore the methodology</a>
              <a className="button secondary" href="https://github.com/Sivas1187/Ai-trust-graph">View canonical source on GitHub</a>
            </div>
          </div>

          <div className="graphCard" aria-label="Illustrative AI Trust Graph">
            <div className="boundary boundaryOuter">
              <span>Connected AI ecosystem</span>
              <div className="graph">
                <span className="node n1">Human</span>
                <span className="node n2">Agent</span>
                <span className="node n3">Identity</span>
                <span className="node n4">Tool</span>
                <span className="node n5">API</span>
                <span className="node n6">Data</span>
                <span className="edge e1" />
                <span className="edge e2" />
                <span className="edge e3" />
                <span className="edge e4" />
                <span className="edge e5" />
              </div>
            </div>
            <p className="graphCaption">Illustrative only — topology does not prove authority or exploitability.</p>
          </div>
        </div>

        <div className="metrics" aria-label="Methodology scale">
          <div><strong>6</strong><span>domains</span></div>
          <div><strong>72</strong><span>canonical controls</span></div>
          <div><strong>36</strong><span>maturity capabilities</span></div>
          <div><strong>E0–E5</strong><span>evidence grades</span></div>
          <div><strong>M1–M5</strong><span>maturity</span></div>
        </div>
      </section>

      <section className="darkSection">
        <div className="shell statement">
          <p className="eyebrow light">The problem</p>
          <h2>AI systems are connected ecosystems.</h2>
          <p>
            Models connect to agents. Agents invoke tools. Tools operate under identities. Identities
            cross boundaries. Actions can reach consequential business systems.
          </p>
          <p className="accentStatement">Risk can emerge through the relationships between them.</p>
        </div>
      </section>

      <section id="how" className="shell section">
        <p className="eyebrow">AI assurance reasoning flow</p>
        <h2>From what exists to what can be defended.</h2>
        <div className="reasoning" role="list">
          {reasoning.map((item, i) => (
            <div className="reasonStep" role="listitem" key={item}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <p className="note">
          This is an explanatory reasoning flow, not a replacement for the canonical 13-phase
          Assessment Methodology.
        </p>
      </section>

      <section id="domains" className="shell section">
        <p className="eyebrow">Six domains</p>
        <h2>One assurance model, six complementary views.</h2>
        <div className="domainGrid">
          {domains.map(([id, title, copy]) => (
            <article className="domainCard" key={id}>
              <span>{id}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="authoritySection">
        <div className="shell authorityGrid">
          <div>
            <p className="eyebrow light">Authority</p>
            <h2>Access is not authority.</h2>
            <p>
              Connection, authentication, access, delegated authority, invocation and consequence
              are distinct assertions. AI Trust Graph does not silently infer one from another.
            </p>
          </div>
          <div className="authorityChain" aria-label="Illustrative authority progression">
            {["Can connect", "Can authenticate", "Can access", "Can invoke", "Can modify", "Can transact"].map((x) => (
              <div key={x}>{x}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="evidence" className="unknownSection">
        <div className="shell">
          <p className="eyebrow">Evidence-bounded assurance</p>
          <h2>UNKNOWN stays UNKNOWN.</h2>
          <p className="unknownLead">
            Insufficient reliable evidence is not silently converted into safe, failed, zero risk,
            not applicable, or a numeric score.
          </p>
          <div className="unknownGrid">
            <span>≠ Safe</span>
            <span>≠ Failed</span>
            <span>≠ Zero risk</span>
            <span>≠ N/A</span>
          </div>
        </div>
      </section>

      <section className="shell section">
        <p className="eyebrow">Control breakpoints</p>
        <h2>Where does a material path actually break?</h2>
        <div className="pathViz" aria-label="Synthetic path illustration">
          {["Human", "Agent", "Identity", "Tool", "API", "Sensitive action"].map((item, i) => (
            <div className="pathNode" key={item}>
              <span>{item}</span>
              {i < 5 && <i aria-hidden="true">→</i>}
              {i === 3 && <b>CONTROL</b>}
            </div>
          ))}
        </div>
        <p className="note">
          Synthetic illustration. Canonical path semantics, validation states, roles and PEI rules
          remain governed by the methodology artifacts.
        </p>
      </section>

      <section id="review" className="reviewSection">
        <div className="shell reviewGrid">
          <div>
            <p className="eyebrow light">Public review</p>
            <h2>This methodology is meant to be challenged.</h2>
            <p>
              Test the assumptions. Challenge the graph semantics. Question the evidence rules.
              Find inconsistencies. The repository remains the canonical source of truth.
            </p>
          </div>
          <div className="actions vertical">
            <a className="button inverse" href="https://github.com/Sivas1187/Ai-trust-graph">Review on GitHub</a>
            <a className="button ghost" href="https://github.com/Sivas1187/Ai-trust-graph/issues">Submit a finding</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <strong>AI Trust Graph</strong>
          <p>Public methodology · Public-release candidate</p>
        </div>
        <p>
          AI Trust Graph is a methodology, not a product, certification program, accreditation body,
          legal opinion, or guarantee of safety or compliance.
        </p>
      </footer>
    </main>
  );
}
