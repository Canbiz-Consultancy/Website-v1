import type { StrapiBlock } from "./insight";

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  description: string | StrapiBlock[];
  requirements: string[];
}

export interface StrapiJobResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      department: string;
      location: string;
      type: string;
      level: string;
      description: string;
      requirements: string; // Storing as a string for simplicity, or we can use separate fields
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}
