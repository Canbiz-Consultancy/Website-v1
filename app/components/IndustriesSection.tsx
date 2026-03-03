"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const industries = [
  {
    id: 1,
    name: "Government & Public Sector",
    description:
      "Strategic advisory, financial management, and policy consulting for government ministries, authorities, and semi-government organizations seeking to optimize performance and public value delivery.",
    image: "https://images.unsplash.com/photo-1768399808130-abac2a8442e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcHVibGljJTIwc2VjdG9yJTIwcG9saWN5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcyMzM3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "20+",
    statLabel: "Government clients served",
    tags: ["Policy Planning", "Financial Advisory", "Strategic Management"],
  },
  {
    id: 2,
    name: "Entrepreneurship & SMEs",
    description:
      "Comprehensive growth strategies, mentorship, and capability-building services for startups and small-to-medium enterprises navigating market entry, scaling, and operational excellence.",
    image: "https://images.unsplash.com/photo-1629124096116-48743a0cea58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyMzM3MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "500+",
    statLabel: "Entrepreneurs empowered",
    tags: ["Business Growth", "Startup Advisory", "Operational Excellence"],
  },
  {
    id: 3,
    name: "Technology & Digital Innovation",
    description:
      "End-to-end digital transformation, software development, IT maintenance, and technology strategy for organizations adapting to the demands of a digitally-driven economy.",
    image: "https://images.unsplash.com/photo-1760346546767-95b89356a6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "150+",
    statLabel: "Digital projects delivered",
    tags: ["Software Development", "Digital Strategy", "IT Maintenance"],
  },
  {
    id: 4,
    name: "Financial Services",
    description:
      "Expert financial advisory, performance management, and consulting services for financial institutions, investment firms, and corporate finance teams across the region.",
    image: "https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "35+",
    statLabel: "Financial institutions advised",
    tags: ["Investment Advisory", "Risk Management", "Corporate Finance"],
  },
  {
    id: 5,
    name: "Education, Training & Leadership",
    description:
      "Transformational learning programs — from Executive MBAs and Junior CEO development to Women Leadership programs — building the next generation of capable leaders.",
    image: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNQkElMjBleGVjdXRpdmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzIzMzcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "1,200+",
    statLabel: "Leaders trained annually",
    tags: ["Executive MBA", "Junior CEO Program", "Women Leadership"],
  },
  {
    id: 6,
    name: "Global Business & International Markets",
    description:
      "Curated international business delegations, cross-border market entry strategies, and global networking programs facilitating partnerships across continents.",
    image: "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "30+",
    statLabel: "Countries visited on delegations",
    tags: ["Market Entry", "Business Delegations", "Global Partnerships"],
  },
];

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = industries[activeIndex];

  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Industries We Serve</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight">
              Sectors we{" "}
              <span className="text-brand-gold">transform</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[380px]">
            Our multi-sector expertise ensures tailored solutions that address the unique challenges and opportunities of each industry we serve.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-gray-100">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-2 border-r border-gray-100">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                className={`w-full text-left px-6 py-5 border-b border-gray-100 transition-all duration-200 group ${
                  activeIndex === index
                    ? "bg-brand-navy border-l-4 border-l-brand-gold"
                    : "hover:bg-gray-50 border-l-4 border-l-transparent"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className={`text-xs font-light tracking-widest block mb-0.5 ${
                        activeIndex === index ? "text-brand-gold/60" : "text-gray-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        activeIndex === index ? "text-white" : "text-brand-navy group-hover:text-brand-gold"
                      }`}
                    >
                      {industry.name}
                    </span>
                  </div>
                  <ArrowRightIcon
                    size={14}
                    className={`shrink-0 transition-all duration-200 ${
                      activeIndex === index ? "text-brand-gold opacity-100" : "text-gray-300 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Image */}
            <div className="relative h-56 lg:h-64 overflow-hidden">
              <ImageWithFallback
                key={active.id}
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover transition-transform duration-700 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              {/* Stat overlay */}
              <div className="absolute bottom-5 left-6">
                <span className="text-brand-gold text-2xl font-light">{active.stat}</span>
                <p className="text-white text-xs mt-0.5">{active.statLabel}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-brand-navy text-lg font-semibold mb-3">{active.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{active.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-brand-gold/40 text-brand-navy px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-brand-navy font-medium hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-0.5 self-start"
              >
                Explore this sector <ArrowRightIcon size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100">
          {[
            { value: "6+", label: "Industry Sectors" },
            { value: "10+", label: "Years of Expertise" },
            { value: "1,000+", label: "Clients Served" },
            { value: "30+", label: "Countries Reached" },
          ].map((stat, i) => (
            <div
              key={i}
              className="py-8 px-8 text-center border-r border-gray-100 last:border-r-0"
            >
              <p className="text-brand-navy text-3xl font-light mb-1">{stat.value}</p>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
