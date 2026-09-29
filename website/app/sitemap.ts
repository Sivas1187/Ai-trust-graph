import type { MetadataRoute } from "next";
import { SITE_URL, release } from "./content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, lastModified: release.snapshot, changeFrequency: "monthly", priority: 1 }];
}
