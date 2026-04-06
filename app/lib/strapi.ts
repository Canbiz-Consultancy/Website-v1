import type { Insight, StrapiResponse, StrapiSingleResponse } from "../types/insight";
import type { Job } from "../types/job";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.STRAPI_URL ||
  "";

async function fetchStrapi<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  if (!STRAPI_URL) {
    console.error("Strapi URL is not configured. Set STRAPI_URL (server) or NEXT_PUBLIC_STRAPI_URL (client).");
    return null;
  }
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) || {}),
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      next: options.method === 'POST' ? { revalidate: 0 } : { revalidate: 60 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Strapi API error: ${response.status} ${response.statusText}`, errorText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Strapi fetch failed:`, error);
    return null;
  }
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function processInsight(insight: any): Insight {
  return {
    ...insight,
    slug: slugify(insight.title || ""),
  };
}

function processJob(job: any): Job {
  return {
    id: job.id,
    ...job,
    requirements: typeof job.requirements === 'string' ? job.requirements.split('\n').filter((r: string) => r.trim() !== '') : [],
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
  });

  const response = await fetchStrapi<StrapiResponse<Insight>>(`/insights?${params.toString()}`);
  
  if (response && response.data) {
    response.data = response.data.map(processInsight);
  }
  
  return response || { data: [], meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } } };
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  if (!slug || slug.trim() === '' || slug === 'undefined') {
    return null;
  }

  const response = await getInsights(1, 100);
  
  if (!response || response.data.length === 0) {
    return null;
  }

  return response.data.find(i => i.slug === slug) || null;
}

export async function getFeaturedInsights(limit: number = 6): Promise<Insight[]> {
  const params = new URLSearchParams({
    "pagination[pageSize]": limit.toString(),
    "sort[0]": "published:desc",
    "populate": "featuredImage",
  });

  const response = await fetchStrapi<StrapiResponse<Insight>>(`/insights?${params.toString()}`);
  return (response?.data || []).map(processInsight);
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
    "filters[published][$ne]": "false",
  });

  const response = await fetchStrapi<StrapiResponse<Insight>>(`/insights?${params.toString()}`);
  
  if (response && response.data) {
    response.data = response.data.map(processInsight);
  }
  
  return response || { data: [], meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } } };
}

export async function getCareers(
  page: number = 1,
  pageSize: number = 10
): Promise<StrapiResponse<Job>> {
  const params = new URLSearchParams({
    "pagination[page]": page.toString(),
    "pagination[pageSize]": pageSize.toString(),
    "sort[0]": "publishedAt:desc",
  });

  const response = await fetchStrapi<StrapiResponse<Job>>(`/careers?${params.toString()}`);
  
  if (response && response.data) {
    response.data = response.data.map(processJob);
  }
  
  return response || { data: [], meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } } };
}

export function getStrapiImageUrl(image: { url: string } | null): string {
  if (!image || !image.url) return "/placeholder.svg";
  if (image.url.startsWith("http")) return image.url;
  return `${STRAPI_URL}${image.url}`;
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phoneNumber: string;
  company?: string;
  message: string;
}) {
  return await fetchStrapi("/contacts", {
    method: "POST",
    body: JSON.stringify({ data }),
  });
}


