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
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-14" />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy pt-20 pb-0 px-6 md:px-16 overflow-hidden relative">
        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#E1B857 1px, transparent 1px), linear-gradient(90deg, #E1B857 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-brand-gold/60 hover:text-brand-gold text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-brand-gold/30 text-xs">/</span>
            <span className="text-brand-gold/50 text-xs tracking-widest uppercase">Insights</span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
            {insightsSection.eyebrow}
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-[800px] mb-6">
            {insightsSection.headingPlain}{" "}
            <span className="text-brand-gold">{insightsSection.headingGold}</span>
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mb-8" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-[580px] mb-16">
            {insightsSection.subtext}
          </p>
        </div>
      </section>

      {/* ── Insights Grid ────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
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
