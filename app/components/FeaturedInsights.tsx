"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const insights = [
  {
    id: 1,
    category: "CEO Imperative",
    image: "https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRU8lMjBsZWFkZXJzaGlwJTIwZnV0dXJlJTIwc3RyYXRlZ3klMjB2aXNpb258ZW58MXx8fHwxNzcyMzM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Five priorities for GCC CEOs navigating transformation in 2026",
    description: "Our latest CEO survey reveals the key strategic imperatives facing business leaders across the Gulf — from talent and digital to sustainability and geopolitics.",
  },
  {
    id: 2,
    category: "Entrepreneurship",
    image: "https://images.unsplash.com/photo-1758873272739-701756d8c7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXJzaGlwJTIwaW5ub3ZhdGlvbiUyMHN0YXJ0dXAlMjBncm93dGh8ZW58MXx8fHwxNzcyMzM3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "How SMEs can scale faster by unlocking strategic advisory partnerships",
    description: "Retainer-based consultancy models are transforming how small and medium enterprises access senior-level strategic thinking and operational support.",
  },
  {
    id: 3,
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5JTIwQUklMjBmdXR1cmV8ZW58MXx8fHwxNzcyMzM3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "The future of business is digital: building resilient IT ecosystems",
    description: "Organizations that invest in custom software and proactive IT maintenance outperform competitors by 3x in operational agility and client satisfaction.",
  },
  {
    id: 4,
    category: "Women Leadership",
    image: "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "She leads: how women CEO programs are reshaping regional business",
    description: "Specialized capacity-building programs for women entrepreneurs are generating measurable economic impact and breaking glass ceilings across the GCC.",
  },
  {
    id: 5,
    category: "Global Markets",
    image: "https://images.unsplash.com/photo-1696764485466-793f465ac074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHQ0MlMjBNaWRkbGUlMjBFYXN0JTIwYnVzaW5lc3MlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NzIzMzczNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "International business delegations: unlocking new market opportunities",
    description: "Our curated global business exposure programs have connected over 200 entrepreneurs with international partners across Europe, Asia, and the Americas.",
  },
  {
    id: 6,
    category: "ESG & Sustainability",
    image: "https://images.unsplash.com/photo-1743082063778-bb0c2b04d2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMEVTRyUyMGdyZWVuJTIwYnVzaW5lc3MlMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzIzMzczNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Embedding ESG into government strategy: lessons from the GCC",
    description: "As sustainability rises on the global agenda, Canbiz's government advisory practice is helping public institutions embed ESG principles into core policy frameworks.",
  },
];

export function FeaturedInsights() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Knowledge & Perspectives</p>
            <h2 className="text-3xl md:text-4xl font-light">
              <span className="text-brand-navy">Featured </span>
              <span className="text-brand-gold">insights</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[380px]">
            Thought leadership, research, and perspectives from the Canbiz consulting team — helping leaders navigate complexity and unlock growth.
          </p>
        </div>

        {/* Primary + Secondary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Large Card */}
          <div className="lg:col-span-2 group cursor-pointer overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="border-t-4 border-brand-gold" />
            <div className="relative overflow-hidden h-72">
              <ImageWithFallback
                src={insights[0].image}
                alt={insights[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] bg-brand-gold text-brand-navy px-2 py-0.5 font-semibold tracking-wider uppercase">
                {insights[0].category}
              </span>
            </div>
            <div className="p-8">
              <h3 className="text-brand-navy text-lg leading-snug mb-3 group-hover:text-brand-gold transition-colors font-semibold">
                {insights[0].title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{insights[0].description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-brand-navy hover:text-brand-gold transition-colors">
                Read more <ArrowRightIcon size={13} />
              </a>
            </div>
          </div>

          {/* Side Column - 2 cards */}
          <div className="flex flex-col gap-6">
            {insights.slice(1, 3).map((item) => (
              <div key={item.id} className="group cursor-pointer bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex-1">
                <div className="border-t-4 border-brand-gold" />
                <div className="overflow-hidden h-36">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] text-brand-gold font-semibold tracking-wider uppercase block mb-2">{item.category}</span>
                  <h3 className="text-brand-navy text-sm leading-snug mb-2 group-hover:text-brand-gold transition-colors font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - 3 more cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {insights.slice(3, 6).map((item) => (
            <div key={item.id} className="group cursor-pointer bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="border-t-4 border-brand-gold" />
              <div className="overflow-hidden h-44">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] text-brand-gold font-semibold tracking-wider uppercase block mb-2">{item.category}</span>
                <h3 className="text-brand-navy text-base leading-snug mb-2 group-hover:text-brand-gold transition-colors font-medium">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{item.description}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-navy hover:text-brand-gold transition-colors mt-4">
                  Read more <ArrowRightIcon size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <a href="#" className="text-sm text-brand-navy hover:text-brand-gold transition-colors flex items-center justify-end gap-2 font-medium">
            See all insights <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
