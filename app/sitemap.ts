import type { MetadataRoute } from "next";
import { services, industries } from "./constants/content";
import { getInsights } from "./lib/strapi";

const siteUrl = "https://www.canbizconsultancy.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/insights",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/sitemap-page",
  ];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${siteUrl}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insightEntries: MetadataRoute.Sitemap = [];
  try {
    const first = await getInsights(1, 100);
    const pageCount = first.meta.pagination?.pageCount || 1;
    const allInsights = [...first.data];

    for (let page = 2; page <= pageCount; page += 1) {
      const nextPage = await getInsights(page, 100);
      allInsights.push(...nextPage.data);
    }

    for (const insight of allInsights) {
      if (!insight.slug) continue;
      insightEntries.push({
        url: `${siteUrl}/insights/${insight.slug}`,
        lastModified: insight.updatedAt ? new Date(insight.updatedAt) : now,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  } catch {
    // If Strapi is unavailable, return the rest of the sitemap.
  }

  return [...staticEntries, ...serviceEntries, ...industryEntries, ...insightEntries];
}
