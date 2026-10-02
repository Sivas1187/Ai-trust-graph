import { authorityClasses, breakpointEffects, distinctAssertions, links, pathRoles, pathValidationStates } from "../../content";
import { breakpointEffectDetail, breakpointQuestions } from "../../site-content";
import { Detail, Ext, SectionHead, SourceNote } from "./Primitives";

/**
 * "Access is not authority." Six distinct assertions, drawn as separate
 * tiles in an unordered list (not a ladder, sequence or state machine), each
 * with its own evidence slot. Canonical sentences: Artifact #2 §3.6 separation
 * rule, §5.2 authority classes, §1.8 / §6.6 breakpoint definition, §6.3 path
 * states and roles (all verbatim).
 */
const assertionHint: Record<string, string> = {
  "Can connect": "A network or service route exists.",
  "Can authenticate": "A credential or identity is accepted.",
  "Can access": "A resource is readable or reachable under that identity.",
  "Can invoke": "A function, tool or API may be called.",
  "Can modify": "State, data or configuration may be changed.",
  "Can transact": "A business commitment may be made.",
};

export function AuthorityDistinction() {
  const ccm = links.doc("02-core-conceptual-model.md");
  return (
    <section id="authority" className="section sectionInk" aria-labelledby="authority-title">
      <div className="container">
        <SectionHead
          id="authority-title"
          tone="dark"
          kicker="5.2 · Authority and influence"
          level={3}
          title="Access is not authority."
          lede={
            <>
              <p>
                Six different claims are often collapsed into one word: access. The methodology keeps them apart. Each is
                its own assertion and needs its own evidence.
              </p>
              <p className="canonQuote">
                The capability definition, its network reachability, granted authority and actual invocation are
                different concepts and require different relationships.
              </p>
            </>
          }
        />

        <ul className="assertions" aria-label="Six distinct assertions, each requiring its own evidence">
          {distinctAssertions.map((a) => (
            <li key={a} className="assertion">
              <p className="assertionName">{a}</p>
              <p className="assertionHint">{assertionHint[a]}</p>
              <p className="assertionEvidence">
                <span className="evSlot" aria-hidden="true" />
                Own evidence required
              </p>
            </li>
          ))}
        </ul>
        <p className="notLadder">
          <strong>Not a ladder.</strong> These are not a maturity sequence, a progression or a state machine. Proving
          one does not prove another, in either direction.
        </p>

        <div className="authorityGrid">
          <div className="authorityClasses">
            <h4 className="subTitle">Authority classes</h4>
            <ul className="chipList" aria-label="Authority classes, Artifact #2 §5.2">
              {authorityClasses.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
            <p className="canonQuote canonQuoteSmall">
              Authority classes describe the kind of consequence an entity can cause. They are not maturity levels and
              should not be ranked without considering target, scope, conditions and criticality.
            </p>
          </div>

          <div id="breakpoints" className="breakpoints">
            <h4 className="subTitle">Control breakpoints</h4>
            <p className="canonQuote canonQuoteSmall">
              A control breakpoint is a node, relationship or boundary where an effective control can materially stop,
              constrain, detect or contain a path.
            </p>
            <ul className="effectList" aria-label="Breakpoint effects">
              {breakpointEffects.map((e) => {
                const d = breakpointEffectDetail[e as keyof typeof breakpointEffectDetail];
                return (
                  <li key={e} className={`effect effect-${e.toLowerCase()}`}>
                    <details className="effectDetails">
                      <summary>
                        <span className="effectName">{e}</span>
                        <span className="effectGloss">{d.gloss}</span>
                      </summary>
                      <div className="effectBody">
                        {d.canonical && (
                          <p className="effectCanon">
                            <span className="miniLabel">{d.canonical.source}</span>
                            {d.canonical.text}
                          </p>
                        )}
                        <p className="effectExample">
                          <span className="miniLabel">Synthetic example</span>
                          {d.example}
                        </p>
                      </div>
                    </details>
                  </li>
                );
              })}
            </ul>
            <p className="effectNote">
              The artifacts define the four effects together, not one by one. The one-line explanations are website
              explanation. For every effect the Artifact #12 caveat applies:{" "}
              <q>Effectiveness must be validated before claiming the path is controlled.</q>
            </p>
            <div className="bpQuestions">
              <p className="miniLabel">Where to look for breakpoints</p>
              <dl>
                {breakpointQuestions.map((q) => (
                  <div key={q.question}>
                    <dt>{q.question}</dt>
                    <dd>{q.purpose}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Detail className="pathStates">
              <p className="miniLabel">Path states</p>
              <ul className="chipList chipListQuiet" aria-label="Path validation states, Artifact #2 §6.3">
                {pathValidationStates.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="miniLabel">Path roles</p>
              <ul className="chipList chipListQuiet" aria-label="Path roles, Artifact #2 §6.3">
                {pathRoles.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </Detail>
          </div>
        </div>

        <SourceNote>
          <Ext href={ccm}>Artifact #2 · Core Conceptual Model</Ext> §3.6 separation rule, §5.2 authority classes, §1.8 and
          §6.6 breakpoint definition and breakpoint questions, §5.13 containment, §6.3 path states and roles (quoted text verbatim); the BREAKS_PATH caveat from Artifact #12. The six assertions and their
          one-line descriptions are a website illustration of the §3.6 rule, not a canonical list.
        </SourceNote>
      </div>
    </section>
  );
}
