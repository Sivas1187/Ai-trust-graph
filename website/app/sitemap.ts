import type { MetadataRoute } from "next";
import { SITE_URL, release } from "./content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: release.snapshot, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/graph/`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/accessibility/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
