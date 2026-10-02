/**
 * Central site configuration.
 *
 * Every value a maintainer is expected to change between releases lives here:
 * methodology version and status, review status, repository, author, licence,
 * social metadata and the whitepaper record. Components read these values
 * through `content.ts`, `site-content.ts` and `publication.ts`; they never
 * hard-code them.
 *
 * Rules
 * - Release facts must match METHODOLOGY_MANIFEST.md (check-claims reads the
 *   manifest and fails on any difference).
 * - Only verified values. Leave a field empty rather than guess: empty author
 *   links are not rendered, and an incomplete publication record keeps the
 *   site in "Whitepaper in preparation" mode.
 * - Publishing the whitepaper is a data change in `publication` below (see
 *   the steps there). No component needs to change; Cloudflare Pages rebuilds
 *   the static site automatically when the change reaches `main`.
 */

export const siteConfig = {
  methodology: {
    title: "AI Trust Graph",
    /** Bundle identifier, METHODOLOGY_MANIFEST header. */
    version: "1.0-rc.4",
    /** Status, METHODOLOGY_MANIFEST header. */
    status: "Public-release candidate",
    /** Snapshot date, METHODOLOGY_MANIFEST header (ISO and written out). */
    snapshot: "2026-09-26",
    snapshotLabel: "26 September 2026",
    /** README status paragraph. The second entry is the external review state. */
    reviewStatus: ["Author’s internal review complete", "Independent review pending"] as const,
  },
  site: {
    url: "https://aitrustgraph.org",
    /** Date of the last substantive website content change (ISO). */
    updated: "2026-10-02",
  },
  repository: {
    url: "https://github.com/Sivas1187/Ai-trust-graph",
    /**
     * Immutable ref for normative artifact links (the 1.0-rc.4 bundle source
     * commit; replace with the release tag once one exists).
     */
    bundleRef: "ec9b4571d96afdf1c423713349871459e1cf9b9b",
    /**
     * Commit at which METHODOLOGY_MANIFEST.md is linked: the commit that last
     * changed the manifest's gate records. Update it whenever §6 changes.
     */
    manifestRef: "093b0a09c5fc364d15378702fe1a8b066d3e9753",
  },
  licence: {
    name: "CC BY 4.0",
    url: "https://creativecommons.org/licenses/by/4.0/",
  },
  author: {
    name: "Siva Sethumadhavan",
    role: "Independent researcher and author of AI Trust Graph",
    /** Verified links only. Empty values are not rendered. */
    links: {
      github: "https://github.com/Sivas1187",
      linkedin: "",
      orcid: "",
      zenodo: "",
    },
  },
  social: {
    title: "AI Trust Graph | Graph-Based AI Assurance Methodology",
    description:
      "AI Trust Graph is an independent, graph-based methodology for assessing trust, authority, exposure, controls and evidence across connected AI systems. Public-release candidate by Siva Sethumadhavan; not independently validated.",
    image: "/og.png",
    imageAlt:
      "AI Trust Graph: a graph-based, evidence-driven methodology for connected AI systems. Public-release candidate, bundle 1.0-rc.4.",
  },
  /**
   * Whitepaper record. While `status` is "in-preparation" the site shows
   * "Whitepaper in preparation" and lists the publication-only actions as not
   * yet available. To publish (only after the Zenodo record and DOI exist):
   *   1. set status to "published";
   *   2. fill doi ("10.5281/zenodo.<record>"), zenodoUrl, pdfUrl,
   *      publishedDate (YYYY-MM-DD), licence and abstract from the record;
   *   3. optionally fill subtitle, fileSize, pdfSha256, citation overrides and
   *      earlier versions;
   *   4. run `npm run check`.
   * APA, IEEE and BibTeX are generated from these fields unless an override
   * is supplied. check-claims rejects DOI text, PDF links, download wording
   * and scholarly metadata while the status is "in-preparation".
   */
  publication: {
    status: "in-preparation" as "in-preparation" | "published",
    title: "AI Trust Graph Methodology",
    subtitle: "",
    version: "1.0",
    author: "Siva Sethumadhavan",
    scope:
      "The whitepaper will consolidate the methodology into one citable document: why it exists, the reasoning model, the authority and evidence discipline, the six assurance domains, the assessment lifecycle and the stated limitations. Until it is published, the versioned artifacts on GitHub are the reference.",
    abstract: "",
    publishedDate: "",
    doi: "",
    zenodoUrl: "",
    pdfUrl: "",
    fileSize: "",
    licence: "",
    pdfSha256: "",
    citationOverrides: { apa: "", ieee: "", bibtex: "" },
    versions: [] as { version: string; date: string; doi: string; note?: string }[],
  },
};
