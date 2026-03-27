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
  
  if (response) {
    console.log(`Found ${response.data.length} insights`);
  } else {
    console.log('No response from Strapi');
  }
  
  return response || { data: [], meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } } };
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  if (!slug || slug.trim() === '') {
    console.warn('Invalid slug provided to getInsightBySlug');
    return null;
  }

  const params = new URLSearchParams({
    "filters[slug][$eq]": slug.trim(),
    "populate": "featuredImage",
    // Temporarily remove published filter for debugging
  });

  console.log(`Fetching insight by slug: ${slug} with params: ${params.toString()}`);

  const response = await fetchStrapi<StrapiResponse<Insight>>(`/insights?${params.toString()}`);
  
  if (!response || response.data.length === 0) {
    console.warn(`No insight found for slug: ${slug}`);
    return null;
  }

  console.log(`Found insight: ${response.data[0].title}`);
  return response.data[0];
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
  
  const insights = response?.data || [];
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
  return response || { data: [], meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } } };
}

export function getStrapiImageUrl(image: { url: string } | null): string {
  if (!image || !image.url) return "";
  
  if (image.url.startsWith("http")) {
    return image.url;
  }
  
  return `${STRAPI_URL}${image.url}`;
}
