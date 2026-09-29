import { breakpointEffects } from "../content";

/**
 * Synthetic control-breakpoint illustration. CSS-only interaction: a native
 * radio group selects which canonical breakpoint effect (Artifact #2 §1.8,
 * §6.6: "stop, constrain, detect or contain") is illustrated. Works with
 * keyboard (arrow keys within the group) and without JavaScript.
 *
 * The one-line glosses are plain-language illustrations, not canonical
 * definitions.
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
    <div className="bp">
      <fieldset className="bpControls">
        <legend>Illustrate an effective control that can…</legend>
        {breakpointEffects.map((effect, i) => (
          <label key={effect} className="bpOption">
            <input
              type="radio"
              name="breakpoint-effect"
              value={effect.toLowerCase()}
              defaultChecked={i === 0}
              className={`bpRadio bpRadio-${effect.toLowerCase()}`}
            />
            <span>{effect}</span>
          </label>
        ))}
      </fieldset>

      <figure className="bpFigure">
        <ol className="bpPath" aria-label="Synthetic path from a human to a sensitive action">
          {path.map((step, i) => (
            <li
              key={step}
              className={[
                "bpNode",
                i > BREAK_AFTER ? "bpDownstream" : "",
                i === path.length - 1 ? "bpTarget" : "",
              ].join(" ")}
            >
              <span className="bpLabel">{step}</span>
              {i === BREAK_AFTER && (
                // The visual marker below is aria-hidden; this states its position once.
                <span className="visuallyHidden">
                  {" "}
                  (control breakpoint between {path[BREAK_AFTER]} and {path[BREAK_AFTER + 1]})
                </span>
              )}
              {i < path.length - 1 && (
                <span className={i === BREAK_AFTER ? "bpEdge bpEdgeBreak" : "bpEdge"} aria-hidden="true">
                  {i === BREAK_AFTER && (
                    <span className="bpMarker">
                      <span className="bpMarkerLabel">Control breakpoint</span>
                    </span>
                  )}
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="bpGlosses">
          {breakpointEffects.map((effect) => (
            <p key={effect} className={`bpGloss bpGloss-${effect.toLowerCase()}`}>
              <strong>{effect}.</strong> {gloss[effect]}
            </p>
          ))}
        </div>

        <figcaption>
          <span className="tag">Synthetic</span> Plain-language illustration of where an effective
          control can stop, constrain, detect or contain progression. It is not a real system, and it
          does not show that any step is authorized, invoked, reachable or exploitable.
        </figcaption>
      </figure>
    </div>
  );
}
