import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SITE_URL, release } from "./content";
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

const title = "AI Trust Graph — Graph-based, evidence-driven AI assurance";
const description =
  "AI Trust Graph is an open, public-release-candidate methodology for graph-based, evidence-driven assurance of connected AI systems: six domains, 72 canonical controls, E0–E5 evidence grades and no single overall trust score.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s — AI Trust Graph" },
  description,
  applicationName: "AI Trust Graph",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "AI Trust Graph",
    title,
    description,
    locale: "en",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `AI Trust Graph — graph-based, evidence-driven assurance for connected AI systems. ${release.status}, bundle ${release.bundle}.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#f6f6f1",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable} ${sourceSerif.variable} ${sourceSerifItalic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
