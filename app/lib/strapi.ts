import type { Insight, StrapiResponse, StrapiSingleResponse } from "../types/insight";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchStrapi<T>(endpoint: string): Promise<T | null> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  console.log(`=== Strapi API Call ===`);
  console.log(`URL: ${url}`);
  console.log(`STRAPI_URL: ${STRAPI_URL}`);
  console.log(`API Token: ${STRAPI_API_TOKEN ? 'SET' : 'NOT SET'}`);
  
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (STRAPI_API_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
  }

  console.log(`Headers:`, headers);

  try {
    const response = await fetch(url, {
      headers,
      next: { revalidate: 60 },
      // Add CORS mode for debugging
      mode: 'cors',
    });

    console.log(`Response Status: ${response.status} ${response.statusText}`);
    console.log(`Response Headers:`, Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error Response Body: ${errorText}`);
      console.warn(`Strapi API warning: ${response.status} ${response.statusText} - ${url}`);
      return null;
    }

    const data = await response.json();
    console.log(`Response Data:`, data);
    return data;
  } catch (error) {
    console.error(`Strapi fetch failed: ${error}`);
    console.error(`Error details:`, error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")     // Replace spaces with -
    .replace(/[^\w-]+/g, "")    // Remove all non-word chars
    .replace(/--+/g, "-")       // Replace multiple - with single -
    .replace(/^-+/, "")         // Trim - from start of text
    .replace(/-+$/, "");        // Trim - from end of text
}

function processInsight(insight: any): Insight {
  return {
    ...insight,
    // Always generate slug from title as requested
    slug: slugify(insight.title || ""),
  };
}

export async function getInsights(
  page: number = 1,
  pageSize: number = 10
): Promise<StrapiResponse<Insight>> {
  const params = new URLSearchParams({
    "pagination[page]": page.toString(),
    "pagination[pageSize]": pageSize.toString(),
    "sort[0]": "published:desc",
    "populate": "featuredImage",
    // Temporarily remove published filter for debugging
  });

  console.log(`Fetching insights with params: ${params.toString()}`);
  
  const response = await fetchStrapi<StrapiResponse<Insight>>(`/insights?${params.toString()}`);
  
  if (response && response.data) {
    console.log(`Found ${response.data.length} insights`);
    response.data = response.data.map(processInsight);
  } else {
    console.log('No response from Strapi or empty data');
  }
  
  return response || { data: [], meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } } };
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  if (!slug || slug.trim() === '' || slug === 'undefined') {
    console.warn('Invalid slug provided to getInsightBySlug');
    return null;
  }

  console.log(`Searching for insight with generated slug matching: ${slug}`);
  
  // Since we are generating the slug from the title, we need to find the insight
  // whose title, when slugified, matches the requested slug.
  // For better performance, we'll fetch a larger number of insights and filter.
  // Note: For a very large number of insights, this should be handled differently 
  // (e.g. by storing the generated slug back in Strapi).
  const response = await getInsights(1, 100);
  
  if (!response || response.data.length === 0) {
    console.warn(`No insights found to search from for slug: ${slug}`);
    return null;
  }

  const insight = response.data.find(i => i.slug === slug);

  if (!insight) {
    console.warn(`No insight found with generated slug: ${slug}`);
    return null;
  }

  console.log(`Found insight: ${insight.title}`);
  return insight;
}

export async function getFeaturedInsights(limit: number = 6): Promise<Insight[]> {
  const params = new URLSearchParams({
    "pagination[pageSize]": limit.toString(),
    "sort[0]": "published:desc",
    "populate": "featuredImage",
    // Temporarily remove published filter for debugging
  });

  console.log(`Fetching featured insights with params: ${params.toString()}`);

  const response = await fetchStrapi<StrapiResponse<Insight>>(`/insights?${params.toString()}`);
  
  const insights = (response?.data || []).map(processInsight);
  console.log(`Found ${insights.length} featured insights`);
  
  return insights;
}

export async function getInsightsByCategory(
  category: string,
  page: number = 1,
  pageSize: number = 10
): Promise<StrapiResponse<Insight>> {
  const params = new URLSearchParams({
    "filters[category][$eq]": category,
    "pagination[page]": page.toString(),
    "pagination[pageSize]": pageSize.toString(),
    "sort[0]": "published:desc",
    "populate": "featuredImage",
    "filters[published][$ne]": "false", // Only get published insights
  });

  const response = await fetchStrapi<StrapiResponse<Insight>>(`/insights?${params.toString()}`);
  
  if (response && response.data) {
    response.data = response.data.map(processInsight);
  }
  
  return response || { data: [], meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } } };
}

export function getStrapiImageUrl(image: { url: string } | null): string {
  if (!image || !image.url) return "";
  
  if (image.url.startsWith("http")) {
    return image.url;
  }
  
  return `${STRAPI_URL}${image.url}`;
}
