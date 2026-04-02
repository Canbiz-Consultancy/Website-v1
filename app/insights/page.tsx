import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { getInsights, getStrapiImageUrl } from "../lib/strapi";
import { insightsSection } from "../constants/content";
import type { Metadata } from "next";
import type { Insight } from "../types/insight";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Insights | Canbiz Consultancy",
  description: "Thought leadership, research, and perspectives from the Canbiz consulting team — helping leaders navigate complexity and unlock growth.",
};

export default async function InsightsPage() {
  let insights: Insight[] = [];
  
  try {
    const response = await getInsights(1, 12);
    insights = response.data;
  } catch {
    // Strapi not available
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-14 md:h-20" />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative isolate bg-brand-navy px-6 md:px-16 pt-32 md:pt-40 pb-16 overflow-hidden h-[600px] lg:h-[650px]">
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(var(--color-brand-gold)_1px,transparent_1px),linear-gradient(90deg,var(--color-brand-gold)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-[#07101d] to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/35" />

        <div className="max-w-[1200px] mx-auto relative z-10 w-full h-full flex flex-col justify-start">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 md:mb-12">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-[11px] tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="text-white/60 text-[11px] tracking-widest uppercase">Insights</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-12 lg:gap-20 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase font-bold mb-4 md:mb-6">
                {insightsSection.eyebrow}
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] max-w-[900px] mb-4 md:mb-6">
                {insightsSection.headingPlain}{" "}
                <span className="text-brand-gold">{insightsSection.headingGold}</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg lg:text-[22px] leading-[1.7] max-w-[680px] font-light">
                {insightsSection.subtext}
              </p>
            </div>
            <div className="hidden lg:block border-l border-white/15 pl-8 pb-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Perspective</p>
              <p className="text-white text-xl leading-tight font-light mb-8">Thought Leadership</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Intel</p>
              <p className="text-sm leading-7 text-gray-300">
                Actionable research built to help enterprise leadership navigate complexity and scale rapidly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights Grid ────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {insights.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No insights available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {insights.map((insight, index) => (
                <Link
                  key={insight.documentId}
                  href={`/insights/${insight.slug}`}
                  className="group bg-white flex flex-col hover:bg-brand-navy transition-colors duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getStrapiImageUrl(insight.featuredImage)}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] bg-brand-gold text-brand-navy px-2.5 py-1 font-semibold tracking-widest uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase block mb-3">
                      {insight.category}
                    </span>

                    <h2 className="text-brand-navy text-base font-semibold leading-snug mb-3 group-hover:text-white transition-colors duration-300">
                      {insight.title}
                    </h2>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1 group-hover:text-gray-400 transition-colors duration-300 line-clamp-3">
                      {insight.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-brand-navy-border">
                      <span className="text-[10px] text-gray-400 group-hover:text-gray-500">
                        {insight.author}
                      </span>
                      <span className="text-[10px] text-gray-400 group-hover:text-gray-500">
                        {new Date(insight.published).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-medium text-brand-gold group-hover:gap-3 transition-all duration-300 mt-4">
                      Read article <ArrowRightIcon size={13} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
