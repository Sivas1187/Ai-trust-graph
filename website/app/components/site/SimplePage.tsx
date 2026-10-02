import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Layout for short sub-pages (privacy, accessibility, not found). */
export function SimplePage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <SiteHeader home="/" prefix="/" />
      <main id="main" className="simplePage" tabIndex={-1}>
        <div className="container containerNarrow">
          <h1 className="simpleTitle">{title}</h1>
          {children}
        </div>
      </main>
      <SiteFooter prefix="/" />
    </>
  );
}
