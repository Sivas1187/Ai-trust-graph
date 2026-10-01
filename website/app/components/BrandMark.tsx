/**
 * Brand mark — "relationship with a breakpoint".
 *
 * Three graph nodes form a closed triangle of relationships; two hold and the
 * third is interrupted by a perpendicular control bar. It draws on the site's
 * own grammar (Act II's unresolved path, annotation b's control breakpoint):
 * connection is not authority, and a path can be interrupted. Monochrome
 * (currentColor, so it follows the text colour and forced colours), no text,
 * no gradient or filter, inline and server-rendered. Decorative: the brand
 * link carries the accessible name.
 */
export function BrandMark({ className = "brandMark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round">
        {/* Two relationships that hold; the third, interrupted on both sides of a gap. */}
        <path d="M11 51 L53 51 M11 51 L32 14 M32 14 L37.5 23.5 M47.5 41 L53 51" />
        {/* The control breakpoint, perpendicular to the interrupted relationship. */}
        <path d="M35.5 36.5 L49.5 28.5" />
      </g>
      <g fill="currentColor">
        <circle cx="11" cy="51" r="6.5" />
        <circle cx="53" cy="51" r="6.5" />
        <circle cx="32" cy="14" r="6.5" />
      </g>
    </svg>
  );
}
