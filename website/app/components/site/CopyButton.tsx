"use client";

import { useEffect, useState } from "react";

/** Copies text to the clipboard. Rendered only after hydration, so no dead button without JavaScript. */
export function CopyButton({ text, label }: { text: string; label: string }) {
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => setReady(Boolean(navigator.clipboard)), []);
  if (!ready) return null;
  return (
    <button
      type="button"
      className="btn btnSmall"
      onClick={() =>
        navigator.clipboard.writeText(text).then(
          () => setDone(true),
          () => setDone(false),
        )
      }
    >
      {label}
      <span aria-live="polite" className="copyDone">
        {done ? " · copied" : ""}
      </span>
    </button>
  );
}
