"use client";

import { useEffect, useId, useRef, useState } from "react";

export type NavItem = {
  href: string;
  label: string;
  /** Visually hidden suffix for screen readers (e.g. "(canonical source)"). */
  srSuffix?: string;
  external?: boolean;
};

/**
 * Primary navigation.
 *
 * Desktop (> 900px): a quiet row of text links; the toggle is hidden by CSS.
 * Mobile (<= 900px): a disclosure pattern — a plain-text "Menu" button with aria-expanded
 * and aria-controls shows/hides the link list. Escape closes the menu and
 * returns focus to the button; choosing a link or clicking outside closes it.
 * No animation. Without JavaScript the <noscript> style shows the list inline
 * so every destination stays reachable.
 */
export function PrimaryNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <nav ref={navRef} aria-label="Primary" className="primaryNav" data-open={open ? "true" : "false"}>
      <button
        ref={buttonRef}
        type="button"
        className="navToggle"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="navToggleIcon" aria-hidden="true" />
        <span>Menu</span>
      </button>
      <ul id={listId}>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={item.external ? "navGithub" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
              {item.srSuffix && <span className="visuallyHidden"> {item.srSuffix}</span>}
              {item.external && <span aria-hidden="true"> ↗</span>}
            </a>
          </li>
        ))}
      </ul>
      <noscript>
        <style>{`@media (max-width: 900px) {
  .primaryNav .navToggle { display: none !important; }
  .headerInner { flex-wrap: wrap; }
  .primaryNav ul { display: flex !important; position: static !important; flex-wrap: wrap; gap: 0 20px; border: 0 !important; padding: 0 0 8px !important; }
  .primaryNav li + li { border-top: 0 !important; }
}`}</style>
      </noscript>
    </nav>
  );
}
