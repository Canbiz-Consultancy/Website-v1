import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ArrowLeftIcon, ArrowRightIcon, CalendarBlank, User } from "@phosphor-icons/react/dist/ssr";
import { getInsightBySlug, getStrapiImageUrl, getInsights } from "../../lib/strapi";
import { formatDate } from "../../lib/utils";
import type { StrapiBlock, Insight } from "../../types/insight";
import type { ReactNode } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

function renderBlock(block: StrapiBlock, index: number): ReactNode {
  const children = block.children?.map((child, i) => {
    let text = child.text || "";
    if (child.bold) return <strong key={i} className="font-semibold text-brand-navy">{text}</strong>;
    if (child.italic) return <em key={i}>{text}</em>;
    if (child.underline) return <u key={i}>{text}</u>;
    if (child.strikethrough) return <del key={i}>{text}</del>;
    if (child.code) return <code key={i} className="bg-brand-surface px-1.5 py-0.5 rounded text-sm font-mono text-brand-navy">{text}</code>;
    return <span key={i}>{text}</span>;
  }) || [];

  switch (block.type) {
    case "paragraph":
      return <p key={index} className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">{children}</p>;
    case "heading":
      const headingLevel = block.level || 2;
      const headingClass = headingLevel === 1 
        ? "text-3xl md:text-4xl font-semibold text-brand-navy mb-8 mt-12" 
        : headingLevel === 2 
        ? "text-2xl md:text-3xl font-semibold text-brand-navy mb-6 mt-10" 
        : "text-xl font-medium text-brand-navy mb-4 mt-8";
      return (
        <div key={index} className={headingClass} role="heading" aria-level={headingLevel}>
          {children}
        </div>
      );
    case "list":
      const ListTag = block.listType === "ordered" ? "ol" : "ul";
      return (
        <ListTag key={index} className={`mb-8 ${block.listType === "ordered" ? "list-decimal" : "list-disc"} pl-6 space-y-3`}>
          {children}
        </ListTag>
      );
    case "listItem":
      return (
        <li key={index} className="text-gray-600 text-base md:text-lg leading-relaxed">
          {children}
        </li>
      );
    case "quote":
      return (
        <blockquote key={index} className="border-l-4 border-gray-400 pl-8 py-2 italic text-brand-navy text-xl md:text-2xl font-semibold my-10 bg-brand-surface/50 pr-6">
          {children}
        </blockquote>
      );
    case "code":
      return (
        <pre key={index} className="bg-brand-navy text-gray-300 p-6 rounded-lg overflow-x-auto mb-8 font-mono text-sm leading-relaxed border border-brand-navy-border shadow-inner">
          <code>{children}</code>
        </pre>
      );
    default:
      return <p key={index} className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">{children}</p>;
  }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  
  if (!insight) return { title: "Not Found | Canbiz Consultancy" };

  return {
    title: `${insight.title} | Canbiz Insights`,
    description: insight.excerpt,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) notFound();

  // Get navigation context
  const allInsightsResponse = await getInsights(1, 100);
  const allInsights = allInsightsResponse.data;
  const currentIndex = allInsights.findIndex(i => i.id === insight.id);
  const prevInsight = currentIndex > 0 ? allInsights[currentIndex - 1] : null;
  const nextInsight = currentIndex < allInsights.length - 1 ? allInsights[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-14" />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[32rem] flex items-end overflow-hidden px-6 md:px-16">
        {insight.featuredImage && (
          <img
            src={getStrapiImageUrl(insight.featuredImage)}
            alt={insight.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/20" />

        <div className="relative z-10 max-w-6xl mx-auto pb-16 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/insights"
              className="text-brand-gold/80 hover:text-brand-gold text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={12} />
              Insights Hub
            </Link>
            <span className="text-brand-gold/30 text-xs">/</span>
            <span className="text-brand-gold/60 text-xs tracking-widest uppercase truncate max-w-xs">
              {insight.title}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs bg-brand-gold text-brand-navy px-3 py-1 font-bold tracking-[0.15em] uppercase rounded-sm">
              {insight.category || 'Expert Perspective'}
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-8">
            {insight.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <User size={18} className="text-brand-gold" />
              <span>{insight.author || 'Canbiz Global Advisory'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarBlank size={18} className="text-brand-gold" />
              <span>{formatDate(insight.published)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Content ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          
          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            {insight.content && insight.content.length > 0 ? (
              insight.content.map((block, index) => renderBlock(block, index))
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-xl">
                <p className="text-gray-400">The detailed content for this insight is currently being prepared by our editorial team.</p>
              </div>
            )}
            
            {/* Category footer */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">{insight.category}</span>
               </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-20 px-6 md:px-16 border-y border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Insight into Action
          </p>
          <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-8">
            Ready to apply these <span className="text-brand-gold">perspectives</span> to your business?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-brand-navy text-white px-10 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center gap-2"
            >
              Consult an Expert <ArrowRightIcon size={14} />
            </Link>
            <Link
              href="/services"
              className="border border-brand-navy text-brand-navy px-10 py-3.5 text-sm font-medium hover:bg-brand-navy hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Previous / Next Navigation ───────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-b border-gray-100">
          <div className="py-12 pr-0 md:pr-12">
            {prevInsight ? (
              <Link
                href={`/insights/${prevInsight.slug}`}
                className="group flex items-start gap-4"
              >
                <div className="w-12 h-12 border border-gray-100 flex items-center justify-center group-hover:border-gray-400 transition-colors shrink-0">
                  <ArrowLeftIcon size={18} className="text-gray-300 group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1 tracking-widest uppercase font-semibold">Previous Article</p>
                  <p className="text-brand-navy text-base font-light group-hover:text-brand-gold transition-colors line-clamp-1">
                    {prevInsight.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div className="py-12 pl-0 md:pl-12 flex justify-end">
            {nextInsight ? (
              <Link
                href={`/insights/${nextInsight.slug}`}
                className="group flex items-start gap-4 text-right"
              >
                <div>
                  <p className="text-gray-400 text-xs mb-1 tracking-widest uppercase font-semibold">Next Article</p>
                  <p className="text-brand-navy text-base font-light group-hover:text-brand-gold transition-colors line-clamp-1">
                    {nextInsight.title}
                  </p>
                </div>
                <div className="w-12 h-12 border border-gray-100 flex items-center justify-center group-hover:border-gray-400 transition-colors shrink-0">
                  <ArrowRightIcon size={18} className="text-gray-300 group-hover:text-brand-gold transition-colors" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
