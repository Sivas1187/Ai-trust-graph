import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import { SITE_URL, release } from "./content";
import "./globals.css";

// next/font downloads these at build time and serves them from this site:
// no runtime request to a third-party font host, no cookies.
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
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
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
