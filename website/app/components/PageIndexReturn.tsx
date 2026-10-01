/**
 * "↑ On this page" — a quiet publication-style return link at the end of a
 * major reading block, back to the page index (#page-index). Website
 * navigation only: a plain fragment anchor, no script, no sticky or fixed
 * position, no active or progress state.
 */
export function PageIndexReturn() {
  return (
    <p className="pageReturn">
      <a href="#page-index">
        <span aria-hidden="true">↑ </span>On this page<span className="visuallyHidden"> — back to the page index</span>
      </a>
    </p>
  );
}
