import { breakpointEffects } from "../content";

/**
 * Synthetic control-breakpoint illustration (Act III, annotation b).
 *
 * CSS-only interaction: a native radio group, set as a quiet text toggle
 * (Stop · Constrain · Detect · Contain), selects which canonical breakpoint
 * effect (Artifact #2 §1.8, §6.6: "stop, constrain, detect or contain") is
 * illustrated. Keyboard: Tab into the group, arrow keys to change. Works
 * without JavaScript. The selected option is exposed by the checked radio;
 * each effect also changes the drawing's shape (dashed, dotted, ring,
 * enclosure) and shows a text gloss, so nothing depends on colour.
 *
 * The path is drawn in the shared graph grammar (hollow nodes, hairline
 * edges); its labels are real text in an ordered list. The one-line glosses
 * are plain-language illustrations, not canonical definitions.
 */

const path = ["Human", "Agent", "Identity", "Tool", "API", "Sensitive action"];
const BREAK_AFTER = 3; // breakpoint sits between "Tool" and "API"

const gloss: Record<string, string> = {
  Stop: "Progression past the breakpoint is blocked.",
  Constrain: "Progression continues only within narrower scope or conditions.",
  Detect: "Progression is observed and raises a signal for response.",
  Contain: "Downstream effect is isolated or limited.",
};

export function BreakpointExplorer() {
  return (
    <div className="bpx">
      <fieldset className="bpxControls">
        <legend>Illustrate an effective control that can</legend>
        <span className="bpxOptions">
          {breakpointEffects.map((effect, i) => (
            <span key={effect} className="bpxOptionWrap">
              {i > 0 && (
                <span className="bpxSep" aria-hidden="true">
                  ·
                </span>
              )}
              <label className="bpxOption">
                <input
                  type="radio"
                  name="breakpoint-effect"
                  value={effect.toLowerCase()}
                  defaultChecked={i === 0}
                  className={`bpxRadio bpxRadio-${effect.toLowerCase()}`}
                />
                <span>{effect}</span>
              </label>
            </span>
          ))}
        </span>
      </fieldset>

      <figure className="bpxFigure">
        <ol className="bpxPath" aria-label="Synthetic path from a human to a sensitive action">
          {path.map((step, i) => (
            <li
              key={step}
              className={["bpxNode", i > BREAK_AFTER ? "bpxDownstream" : "", i === path.length - 1 ? "bpxTarget" : ""]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="bpxLabel">{step}</span>
              {i === BREAK_AFTER && (
                // The drawn marker is aria-hidden; this states its position once.
                <span className="visuallyHidden">
                  {" "}
                  (control breakpoint between {path[BREAK_AFTER]} and {path[BREAK_AFTER + 1]})
                </span>
              )}
              {i < path.length - 1 && (
                <span className={i === BREAK_AFTER ? "bpxEdge bpxEdgeBreak" : "bpxEdge"} aria-hidden="true">
                  {i === BREAK_AFTER && (
                    <span className="bpxMark">
                      <span className="bpxMarkLabel">breakpoint</span>
                    </span>
                  )}
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="bpxGlosses">
          {breakpointEffects.map((effect) => (
            <p key={effect} className={`bpxGloss bpxGloss-${effect.toLowerCase()}`}>
              <strong>{effect}.</strong> {gloss[effect]}
            </p>
          ))}
        </div>

        <figcaption className="figureNote">
          Synthetic path. A plain-language illustration of where an effective control can stop, constrain, detect
          or contain progression; it does not show that any step is authorized, invoked, reachable or exploitable.
        </figcaption>
      </figure>
    </div>
  );
}
