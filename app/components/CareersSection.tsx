"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    title: "Purpose-Driven Work",
    description: "Every engagement we undertake is aimed at creating real, lasting impact for clients, communities, and the broader economy.",
  },
  {
    title: "Continuous Learning",
    description: "We invest in your growth — through world-class training programs, mentorship, and exposure to diverse, complex challenges.",
  },
  {
    title: "Inclusive Culture",
    description: "A diverse, respectful, and collaborative environment where every voice matters and fresh perspectives are celebrated.",
  },
  {
    title: "Global Exposure",
    description: "International business delegations, cross-border projects, and a growing global client base ensure your career reaches beyond borders.",
  },
];

const stats = [
  { value: "100+", label: "Professionals on our team" },
  { value: "12+", label: "Industries we serve" },
  { value: "15+", label: "Countries reached" },
  { value: "95%", label: "Employee satisfaction rate" },
];

export function CareersSection() {
  return (
    <section className="bg-brand-surface py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Join Our Team</p>
          <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight mb-4">
            Build your career with{" "}
            <span className="text-brand-gold">Canbiz</span>
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-[560px]">
            We're always looking for driven, curious, and talented individuals who want to make a real difference. Join a team that values expertise, innovation, and meaningful impact across the region and beyond.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-20 border border-gray-200 bg-white">
          {values.map((v, i) => (
            <div key={i} className="p-8 border-r border-gray-100 last:border-r-0 group hover:bg-brand-navy transition-colors duration-300">
              <div className="w-8 h-0.5 bg-brand-gold mb-5 group-hover:w-12 transition-all duration-300" />
              <h3 className="text-brand-navy text-sm font-semibold mb-3 group-hover:text-white transition-colors">{v.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Split: Hero Image + Why Canbiz */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 overflow-hidden">
          <div className="relative h-[380px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758520144417-e1c432042dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBqb2IlMjBvcHBvcnR1bml0eSUyMGhpcmluZyUyMHRhbGVudHxlbnwxfHx8fDE3NzIzMzcxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Careers at Canbiz"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/30" />
          </div>
          <div className="bg-brand-navy p-10 flex flex-col justify-center">
            <h3 className="text-white text-xl font-light mb-4">
              Why choose <span className="text-brand-gold">Canbiz?</span>
            </h3>
            <ul className="space-y-4">
              {[
                "Work on high-impact projects across government, private, and global sectors",
                "Access to world-class executive education and training programs",
                "International exposure through business delegations and global partnerships",
                "Structured mentorship from seasoned industry leaders",
                "Competitive compensation and growth-oriented career paths",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  <span className="text-gray-300 text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 bg-white mb-12">
          {stats.map((s, i) => (
            <div key={i} className="p-8 border-r border-gray-100 last:border-r-0 text-center">
              <p className="text-brand-gold text-3xl font-light mb-2">{s.value}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">
            Ready to take the next step? Explore our open roles and find your fit.
          </p>
          <button className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-10 py-4 text-sm font-semibold hover:bg-brand-gold-hover transition-all duration-300">
            View Open Positions <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
