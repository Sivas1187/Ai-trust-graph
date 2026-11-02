/**
 * Whitepaper publication helpers. The record itself is `publication` in
 * site.config.ts; see the steps there. Citations (APA, IEEE, BibTeX) are
 * generated from verified fields unless an override is supplied.
 */

import { siteConfig } from "./site.config";

export type Publication = typeof siteConfig.publication;
export type PublicationStatus = Publication["status"];
export type PublicationVersion = Publication["versions"][number];

/** The whitepaper record (edited in site.config.ts). */
export const publication: Publication = siteConfig.publication;

/** True only when the record is published and every required field is present. */
export function isPublished(p: Publication = publication): boolean {
  return (
    p.status === "published" &&
    [p.abstract, p.publishedDate, p.doi, p.zenodoUrl, p.pdfUrl, p.licence].every((v) => v.trim().length > 0) &&
    /^10\.\d{4,9}\/\S+$/.test(p.doi) &&
    /^\d{4}-\d{2}-\d{2}$/.test(p.publishedDate)
  );
}

function authorParts(name: string) {
  const parts = name.trim().split(/\s+/);
  const family = parts.pop() ?? name;
  return { family, given: parts.join(" ") };
}

/** Citation strings, generated only from verified fields. */
export function citations(p: Publication = publication) {
  const { family, given } = authorParts(p.author);
  const initials = given
    .split(/\s+/)
    .filter(Boolean)
    .map((g) => `${g[0]}.`)
    .join(" ");
  const year = p.publishedDate.slice(0, 4);
  const doiUrl = `https://doi.org/${p.doi}`;
  const key = `${family.toLowerCase().replace(/[^a-z]/g, "")}${year}aitrustgraph`;
  const o = p.citationOverrides;
  const generated = {
    apa: `${family}, ${initials} (${year}). ${p.title} (Version ${p.version}). Zenodo. ${doiUrl}`,
    ieee: `${initials} ${family}, "${p.title}," version ${p.version}, Zenodo, ${year}. doi: ${p.doi}.`,
    bibtex: [
      `@misc{${key},`,
      `  author       = {${family}, ${given}},`,
      `  title        = {${p.title}},`,
      `  year         = {${year}},`,
      `  version      = {${p.version}},`,
      `  howpublished = {Zenodo},`,
      `  doi          = {${p.doi}},`,
      `  url          = {${doiUrl}}`,
      `}`,
    ].join("\n"),
  };
  return { apa: o.apa || generated.apa, ieee: o.ieee || generated.ieee, bibtex: o.bibtex || generated.bibtex };
}
