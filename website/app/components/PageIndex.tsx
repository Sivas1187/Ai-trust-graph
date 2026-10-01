import { pageIndex } from "../content";

/**
 * "On this page" — a quiet typographic index of the long-form homepage,
 * directly below the Cover. Website navigation only: plain fragment links in
 * page order, with no numbering, progress, active state or client script, and
 * no implied methodology hierarchy or sequence. `#page-index` is the target of
 * the "↑ On this page" return links at the end of the major reading blocks.
 */
export function PageIndex() {
  return (
    <nav id="page-index" className="pageIndex" aria-labelledby="page-index-label">
      <div className="pageIndexFrame">
        <p id="page-index-label" className="pageIndexLabel">
          On this page
        </p>
        <ul className="pageIndexList">
          {pageIndex.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
