"use client";

import { useEffect, useState } from "react";

type Depth = "overview" | "detail" | "sources";

const options: { value: Depth; label: string; hint: string }[] = [
  { value: "overview", label: "Overview", hint: "Central ideas only" },
  { value: "detail", label: "Detail", hint: "Methodology detail" },
  { value: "sources", label: "Sources", hint: "Detail with every source note open" },
];

/**
 * Reading depth: a native radio group that sets data-depth on <html>.
 * Overview hides `.depthDetail` and `.depthSource`; Sources opens every
 * source note. Nothing is stored (no cookies or storage). Without JavaScript
 * the control is hidden and the page shows full detail.
 */
export function DepthControl() {
  const [depth, setDepth] = useState<Depth>("detail");

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.depth = depth;
    if (depth === "sources") document.querySelectorAll<HTMLDetailsElement>("details.srcNote").forEach((d) => (d.open = true));
    if (depth === "detail") document.querySelectorAll<HTMLDetailsElement>("details.srcNote").forEach((d) => (d.open = false));
  }, [depth]);

  return (
    <fieldset className="depthControl" data-enhanced="true">
      <legend>Reading depth</legend>
      <div className="depthOptions">
        {options.map((o) => (
          <label key={o.value} className="depthOption">
            <input
              type="radio"
              name="reading-depth"
              value={o.value}
              checked={depth === o.value}
              onChange={() => setDepth(o.value)}
            />
            <span>
              {o.label}
              <span className="visuallyHidden">: {o.hint}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
