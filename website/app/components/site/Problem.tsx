import { links } from "../../content";
import { distinctions, problemScenario } from "../../site-content";
import { Ext, SectionHead, SourceNote } from "./Primitives";

/**
 * Section 2: the problem, through one synthetic scenario (continued by the
 * signature visual and the worked example). The scenario is a numbered path
 * on paper; the distinctions panel pairs each concept with "is not" in text,
 * not only with the ≠ symbol.
 */
const stepGlyph: Record<string, string> = {
  human: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  agent: "M5 7h14v10H5z M9 11h.01 M15 11h.01 M9 15h6",
  data: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Zm0 0v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6",
  tool: "M14 4l6 6-9 9H5v-6z",
  identity: "M4 6h16v12H4z M8 10h4 M8 14h8",
  boundary: "M12 3v18",
  system: "M4 5h16v14H4z M4 10h16 M10 10v9",
};

export function Problem() {
  const ccm = links.doc("02-core-conceptual-model.md");
  const manifesto = links.doc("01-manifesto.md");
  return (
    <section id="problem" className="section sectionWhite" aria-labelledby="problem-title">
      <div className="container">
        <SectionHead
          id="problem-title"
          kicker="02 · The problem"
          title="One request, many relationships."
          lede={<p>{problemScenario.intro} A small, ordinary task. Follow what it touches.</p>}
        />

        <ol className="scenario" aria-label="Synthetic scenario: the path of one purchase request">
          {problemScenario.steps.map((s, i) => (
            <li key={s.key} className={`scenarioStep scenario-${s.key}`}>
              <svg className="scenarioGlyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={stepGlyph[s.key]} />
              </svg>
              <span className="scenarioNum" aria-hidden="true">
                {i + 1}
              </span>
              <span className="scenarioWho">{s.who}</span>
              <span className="scenarioWhat">{s.what}</span>
            </li>
          ))}
        </ol>
        <p className="syntheticNote">Synthetic scenario. No real organisation, system or configuration is described.</p>

        <div className="problemGrid">
          <div className="unanswered">
            <h3 className="subTitle">What the components alone do not establish</h3>
            <ul className="unansweredList">
              {problemScenario.unanswered.map((u) => (
                <li key={u}>{u.charAt(0).toUpperCase() + u.slice(1)}.</li>
              ))}
            </ul>
          </div>
          <div className="distinctions">
            <h3 className="subTitle">Five distinctions the method keeps</h3>
            <ul className="distinctionList">
              {distinctions.map((d) => (
                <li key={d.left} className={`distinction${d.left === "Unknown" ? " distinctionUnknown" : ""}`}>
                  <p className="distinctionPair">
                    <span className="dLeft">{d.left}</span>
                    <span className="dNeq" aria-hidden="true">
                      ≠
                    </span>
                    <span className="visuallyHidden"> is not </span>
                    <span className="dRight">{d.right}</span>
                  </p>
                  <p className="distinctionNote">{d.note}</p>
                </li>
              ))}
            </ul>
            <p className="distinctionsCaveat">
              These are conceptual distinctions, not a universal linear sequence. Each one is assessed as its own
              assertion.
            </p>
          </div>
        </div>

        <p className="problemClose">{problemScenario.close}</p>
        <SourceNote>
          Website explanation of <Ext href={ccm}>Artifact #2</Ext> §3.6 (capability definition, network reachability,
          granted authority and actual invocation are different concepts), <Ext href={manifesto}>Artifact #1</Ext> §4 (a
          topological connection is not automatically an exploitable path) and invariant SC-INV-01 (UNKNOWN is not safe).
        </SourceNote>
      </div>
    </section>
  );
}
