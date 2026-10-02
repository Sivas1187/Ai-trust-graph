/**
 * Whitepaper publication record.
 *
 * The site renders "Whitepaper in preparation" until `status` is "published"
 * AND every required field below is filled with a verified value. Do not put
 * placeholder DOIs, dates or URLs here: check-claims rejects a published
 * record with missing fields and rejects DOI-shaped text anywhere on the page
 * while the status is "in-preparation".
 *
 * To publish (after the Zenodo record and DOI exist):
 *   1. set status to "published";
 *   2. fill doi (e.g. "10.5281/zenodo.<record>"), zenodoUrl, pdfUrl,
 *      publishedDate (YYYY-MM-DD), licence and abstract from the Zenodo record;
 *   3. optionally fill pdfSha256 and add earlier versions to `versions`;
 *   4. run `npm run check`.
 * Citation formats (APA, IEEE, BibTeX) are generated from these fields.
 */

export type PublicationStatus = "in-preparation" | "published";

export type PublicationVersion = { version: string; date: string; doi: string; note?: string };

export type Publication = {
  status: PublicationStatus;
  title: string;
  version: string;
  author: string;
  /** EDITORIAL scope note shown while the paper is in preparation. */
  scope: string;
  abstract: string;
  publishedDate: string;
  doi: string;
  zenodoUrl: string;
  pdfUrl: string;
  licence: string;
  pdfSha256?: string;
  versions: PublicationVersion[];
};

export const publication: Publication = {
  status: "in-preparation",
  title: "AI Trust Graph Methodology",
  version: "1.0",
  author: "Siva Sethumadhavan",
  scope:
    "The whitepaper will present the methodology as a citable publication: the reasoning model, the six domains, the evidence and UNKNOWN discipline, the assessment lifecycle and its stated limitations. Until it is published, the GitHub artifacts are the reference.",
  abstract: "",
  publishedDate: "",
  doi: "",
  zenodoUrl: "",
  pdfUrl: "",
  licence: "",
  versions: [],
};

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
  return {
    apa: `${family}, ${initials} (${year}). ${p.title} (Version ${p.version}). Zenodo. ${doiUrl}`,
    ieee: `${initials} ${family}, "${p.title}," version ${p.version}, Zenodo, ${year}. doi: ${p.doi}.`,
    bibtex: [
      `@techreport{${key},`,
      `  author    = {${family}, ${given}},`,
      `  title     = {${p.title}},`,
      `  year      = {${year}},`,
      `  version   = {${p.version}},`,
      `  publisher = {Zenodo},`,
      `  doi       = {${p.doi}},`,
      `  url       = {${doiUrl}}`,
      `}`,
    ].join("\n"),
  };
}
