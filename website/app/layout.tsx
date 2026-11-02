import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import { REPO_URL, SITE_URL, release } from "./content";
import { isPublished, publication } from "./publication";
import { author } from "./site-content";
import { siteConfig } from "./site.config";
import "./globals.css";

// next/font downloads these at build time and serves them from this site:
// no runtime request to a third-party font host, no cookies.
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Source Serif 4 (SIL OFL 1.1; see app/fonts/source-serif-4/) — the editorial
// display face of the visual reset. Committed to the repository and bundled by
// next/font/local: no network at build time and no third-party request at run
// time. Variable latin subset with optical-size (8–60) and weight (200–900)
// axes. The italic is a separate family that is not preloaded; the browser
// fetches it (same origin) only when a page renders italic serif text.
const sourceSerif = localFont({
  src: "./fonts/source-serif-4/SourceSerif4-Roman-latin-opsz-wght.woff2",
  variable: "--font-serif",
  weight: "200 900",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const sourceSerifItalic = localFont({
  src: "./fonts/source-serif-4/SourceSerif4-Italic-latin-opsz-wght.woff2",
  variable: "--font-serif-italic",
  weight: "200 900",
  style: "italic",
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
});

const title = siteConfig.social.title;
const description = siteConfig.social.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | AI Trust Graph" },
  description,
  applicationName: "AI Trust Graph",
  authors: [{ name: author.name, url: author.links.github }],
  creator: author.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "AI Trust Graph",
    title,
    description,
    locale: "en_GB",
    images: [
      {
        url: siteConfig.social.image,
        width: 1200,
        height: 630,
        alt: siteConfig.social.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: siteConfig.social.image, alt: siteConfig.social.imageAlt }],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0c1729",
  colorScheme: "light",
};

/**
 * Structured data. WebSite, Person and CreativeWork describe what exists now.
 * A ScholarlyArticle with its DOI is added only once the whitepaper record is
 * published (publication.ts); no identifier is emitted before then.
 */
const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#author`,
  name: author.name,
  jobTitle: author.role,
  url: `${SITE_URL}/#author`,
  sameAs: [author.links.github, author.links.linkedin, author.links.orcid, author.links.zenodo].filter(Boolean),
};
const graph: Record<string, unknown>[] = [
  { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: "AI Trust Graph", inLanguage: "en-GB", author: { "@id": `${SITE_URL}/#author` } },
  person,
  {
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/#methodology`,
    name: "AI Trust Graph methodology",
    description,
    version: release.bundle,
    creativeWorkStatus: release.status,
    author: { "@id": `${SITE_URL}/#author` },
    license: siteConfig.licence.url,
    dateModified: siteConfig.site.updated,
    url: REPO_URL,
    inLanguage: "en",
  },
];
if (isPublished()) {
  graph.push({
    "@type": "ScholarlyArticle",
    name: `${publication.title} v${publication.version}`,
    author: { "@id": `${SITE_URL}/#author` },
    datePublished: publication.publishedDate,
    identifier: `https://doi.org/${publication.doi}`,
    url: publication.zenodoUrl,
  });
}
const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable} ${sourceSerif.variable} ${sourceSerifItalic.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        <noscript>
          <style>{`.depthControl { display: none !important; }`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
