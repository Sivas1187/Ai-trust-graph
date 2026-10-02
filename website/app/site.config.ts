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
    manifestRef: "d0879902881b5f5ebf65df19a4ad76474859c4df",
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
   *      publishedDate (YYYY-MM-DD) and abstract from the record, and confirm
   *      the record's licence matches `licence`;
   *   3. optionally fill subtitle, fileSize, pdfSha256, citation overrides and
   *      earlier versions;
   *   4. run `npm run check`.
   * APA, IEEE and BibTeX are generated from these fields unless an override
   * is supplied. check-claims rejects DOI text, PDF links, download wording
   * and scholarly metadata while the status is "in-preparation".
   */
  publication: {
    status: "published" as "in-preparation" | "published",
    /** Title, subtitle and version exactly as on the Zenodo record and the PDF cover. */
    title: "AI Trust Graph: A Graph-Driven, Evidence-Based Methodology for AI Assurance",
    subtitle: "Reasoning about trust, authority, paths, controls, evidence, and accountable decisions across connected AI systems",
    version: "1.0",
    author: "Siva Sethumadhavan",
    scope:
      "The whitepaper will consolidate the methodology into one citable document: why it exists, the reasoning model, the authority and evidence discipline, the six assurance domains, the assessment lifecycle and the stated limitations. Until it is published, the versioned artifacts on GitHub are the reference.",
    /** The paper's own Abstract (whitepaper/AI-Trust-Graph-Whitepaper-v1.0.md); paragraphs separated by a blank line. */
    abstract:
      "AI systems increasingly operate as connected systems of identities, models, agents, tools, data, providers, workflows and human decision points. In such environments, consequential exposure can emerge from composition rather than from one component in isolation. AI Trust Graph (ATG) is an open, vendor-neutral and product-independent methodology for representing and assessing those connected relationships as a directed, labelled multigraph.\n\nATG follows a single canonical reasoning chain: Objects → Relationships → Conditions → Paths → Authority and Influence → Consequence → Controls → Evidence → Decision. It organizes assessment across six domains and seventy-two canonical controls, while keeping evidence strength, control effectiveness, maturity, path exposure and uncertainty distinct. UNKNOWN is preserved when evidence is absent, insufficient or materially conflicting; it is not converted into zero, pass, fail, effectiveness, Not Applicable or Not Tested.\n\nThe methodology does not produce a universal trust score. Its Path Exposure Index (PEI) may be used for triage only, and a final point PEI is published only for determinate eligible active paths; it does not prove exploitability, probability or loss. Maturity is cumulative, evidence-gated and non-compensating rather than averaged.\n\nThis whitepaper is a non-normative narrative synthesis of methodology bundle 1.0-rc.4. It explains the graph model, trust, authority and influence, path states and roles, control breakpoints, evidence discipline, assessment lifecycle, scoring boundaries, reporting, governance and current limitations. Historical reference cases are identified as such; current scoring mechanics are illustrated only with calibration vectors explicitly evaluated under rc.4.",
    publishedDate: "2026-10-02",
    doi: "10.5281/zenodo.23104503",
    zenodoUrl: "https://zenodo.org/records/23104503",
    /** File name as uploaded; MD5 6e8c075c3489cbf50169f8fe8fcce66c matches the reviewed PDF on main. */
    pdfUrl: "https://zenodo.org/records/23104503/files/AI-Trust-Graph-Whitepaper-v1.0.pdf?download=1",
    fileSize: "679 KB",
    /**
     * Author's licence decision for the whitepaper (2026-10-02): CC BY 4.0, the
     * same licence as the methodology text and the licence of the Zenodo record.
     * This is the author's choice, not the legal approval of the licence /
     * trademark position, which stays a pending gate in METHODOLOGY_MANIFEST §6.
     */
    licence: "CC BY 4.0",
    pdfSha256: "896feab2419c8412ca5a83835b02f185df56c88eef64879ccb9221183cf26156",
    citationOverrides: { apa: "", ieee: "", bibtex: "" },
    versions: [] as { version: string; date: string; doi: string; note?: string }[],
  },
};
