import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { getInsightBySlug, getStrapiImageUrl } from "../../lib/strapi";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { formatDate } from "../../lib/utils";
import type { StrapiBlock } from "../../types/insight";
import type { ReactNode } from "react";

interface InsightPostPageProps {
  params: Promise<{ slug: string }>;
}

function renderBlock(block: StrapiBlock, index: number): ReactNode {
  const children = block.children?.map((child, i) => {
    let text = child.text || "";
    if (child.bold) return <strong key={i}>{text}</strong>;
    if (child.italic) return <em key={i}>{text}</em>;
    if (child.underline) return <u key={i}>{text}</u>;
    if (child.strikethrough) return <del key={i}>{text}</del>;
    if (child.code) return <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm">{text}</code>;
    return <span key={i}>{text}</span>;
  }) || [];

  switch (block.type) {
    case "paragraph":
      return <p key={index} className="text-gray-600 leading-relaxed mb-4">{children}</p>;
    case "heading":
      const headingLevel = block.level || 2;
      const headingClass = headingLevel === 1 
        ? "text-3xl font-bold text-brand-navy mb-6" 
        : headingLevel === 2 
        ? "text-2xl font-semibold text-brand-navy mb-4 mt-8" 
        : "text-xl font-semibold text-brand-navy mb-3 mt-6";
      return (
        <div key={index} className={headingClass} role="heading" aria-level={headingLevel}>
          {children}
        </div>
      );
    case "list":
      const ListTag = block.listType === "ordered" ? "ol" : "ul";
      return (
        <ListTag key={index} className={`mb-4 ${block.listType === "ordered" ? "list-decimal" : "list-disc"} pl-6 space-y-2`}>
          {children}
        </ListTag>
      );
    case "listItem":
      return (
        <li key={index} className="text-gray-600 leading-relaxed">
          {children}
        </li>
      );
    case "quote":
      return (
        <blockquote key={index} className="border-l-4 border-brand-gold pl-4 italic text-gray-600 my-6">
          {children}
        </blockquote>
      );
    case "code":
      return (
        <pre key={index} className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
          <code>{children}</code>
        </pre>
      );
    default:
      return <p key={index} className="text-gray-600 leading-relaxed mb-4">{children}</p>;
  }
}

export async function generateMetadata({ params }: InsightPostPageProps) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  
  if (!insight) {
    return {
      title: "Not Found | Canbiz Consultancy",
    };
  }

  return {
    title: `${insight.title} | Canbiz Insights`,
    description: insight.excerpt,
  };
}

export default async function InsightPostPage({ params }: InsightPostPageProps) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <article>
        <div className="bg-brand-navy py-16 px-6 md:px-16">
          <div className="max-w-[800px] mx-auto">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors text-sm mb-6"
            >
              <ArrowLeftIcon size={16} />
              Back to Insights
            </Link>
            <span className="inline-block text-[10px] bg-brand-gold text-brand-navy px-2 py-0.5 font-semibold tracking-wider uppercase mb-4">
              {insight.category || 'Insight'}
            </span>
            <h1 className="text-3xl md:text-4xl font-light text-white leading-tight mb-6">
              {insight.title}
            </h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>{insight.author || 'Canbiz Team'}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>{formatDate(insight.published)}</span>
            </div>
          </div>
        </div>

        {insight.featuredImage && (
          <div className="max-w-[1000px] mx-auto -mt-8 px-6 md:px-16">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src={getStrapiImageUrl(insight.featuredImage)}
                alt={insight.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="max-w-[800px] mx-auto px-6 md:px-16 py-16">
          <div className="prose prose-lg max-w-none">
            {insight.content && insight.content.length > 0 ? (
              insight.content.map((block, index) => renderBlock(block, index))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Content is not available for this insight.</p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-gold transition-colors font-medium"
              >
                <ArrowLeftIcon size={16} />
                View all insights
              </Link>
              <div className="flex gap-4">
                <span className="text-xs text-gray-500">
                  Published: {formatDate(insight.published)}
                </span>
                {insight.updatedAt && insight.updatedAt !== insight.publishedAt && (
                  <span className="text-xs text-gray-500">
                    Updated: {formatDate(insight.updatedAt)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
