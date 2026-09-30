/**
 * Citation and marginal-note primitives for the research-monograph layout.
 *
 * - MarginReference: the canonical-source citation for an act. On wide
 *   layouts it sits in the left margin column beside the act's heading; on
 *   narrow layouts it moves to the end of the act (CSS only, one element).
 *   Replaces the old "Source: …" lines as acts are redesigned.
 * - FigureNote: a quiet italic caption for an illustrative figure (e.g.
 *   "Illustrative topology"). Plain text — never a pill, tag or badge.
 *
 * Introduced with the visual-reset system; used by the acts redesigned in
 * later visual-reset PRs. The Cover itself carries no citation.
 */

export function MarginReference({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={className ? `marginRef ${className}` : "marginRef"}>{children}</p>;
}

export function FigureNote({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={className ? `figureNote ${className}` : "figureNote"}>{children}</p>;
}
