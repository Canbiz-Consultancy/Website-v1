export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface StrapiBlock {
  type: string;
  children: Array<{
    type: string;
    text?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
  }>;
  level?: number;
  listType?: "ordered" | "unordered";
}

export interface Insight {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: StrapiBlock[];
  featuredImage: StrapiImage | null;
  published: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}
