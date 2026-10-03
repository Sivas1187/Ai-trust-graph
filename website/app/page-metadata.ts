import type { Metadata } from "next";
import { siteConfig } from "./site.config";

/**
 * Metadata for a page other than the home page. Next.js replaces (does not
 * merge) the layout's openGraph and twitter objects, so each page gets its
 * own title, description and URL here, with the shared preview image.
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const full = `${title} | AI Trust Graph`;
  const image = { url: siteConfig.social.image, width: 1200, height: 630, alt: siteConfig.social.imageAlt };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: "AI Trust Graph",
      title: full,
      description,
      locale: "en_GB",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
