"use client";

import { ArrowRight, Target, Eye, Medal, Users } from "@phosphor-icons/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower businesses, entrepreneurs, and leaders with transformative advisory, education, and digital solutions that unlock sustainable growth and long-term value.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted and impactful consultancy firm across the GCC and beyond, shaping a new generation of capable, confident, and globally competitive leaders.",
  },
  {
    icon: Medal,
    title: "Our Values",
    text: "Excellence, integrity, innovation, and inclusivity drive everything we do — from our client engagements to our internal culture and community contributions.",
  },
  {
    icon: Users,
    title: "Our People",
    text: "A diverse team of seasoned consultants, educators, technologists, and strategists united by a passion for creating real, measurable impact for every client we serve.",
  },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "1,000+", label: "Clients Served" },
  { value: "30+", label: "Countries Reached" },
  { value: "6+", label: "Industry Sectors" },
];

export function AboutSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Who We Are</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight">
              About <span className="text-brand-gold">Canbiz</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[400px]">
            A premier management consultancy and professional services firm dedicated to empowering organizations and leaders across the GCC and global markets.
          </p>
        </div>

        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 border border-gray-100 overflow-hidden">
          <div className="relative min-h-[380px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wYW55JTIwdGVhbSUyMGRpdmVyc2UlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjMzNzE2OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="About Canbiz"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/50 to-transparent" />
          </div>
          <div className="bg-brand-navy p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-white text-xl font-light mb-5 leading-tight">
              A decade of{" "}
              <span className="text-brand-gold">transformative impact</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Founded in Dubai, Canbiz Consultancy Services has grown from a boutique advisory firm into a multi-sector powerhouse serving government institutions, corporations, SMEs, and individual leaders across the GCC and internationally.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Our core services — spanning management consulting, brand strategy, digital solutions, executive education, and government advisory — reflect our unwavering commitment to comprehensive, high-impact client service.
            </p>
            <button className="self-start inline-flex items-center gap-2 text-brand-gold text-sm font-medium hover:gap-3 transition-all duration-300">
              Discover our full story <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="p-8 border-r border-gray-100 last:border-r-0 text-center">
              <p className="text-brand-gold text-3xl font-light mb-2">{s.value}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission / Vision / Values / People */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 mb-14">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-8 border-r border-gray-100 last:border-r-0 group hover:bg-brand-navy transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center border border-brand-gold/30 mb-5 group-hover:bg-brand-gold/10 transition-colors">
                  <Icon size={16} className="text-brand-gold" weight="light" />
                </div>
                <h3 className="text-brand-navy text-sm font-semibold mb-3 group-hover:text-white transition-colors">{pillar.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">{pillar.text}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">
            Want to know more about our story, leadership, and journey?
          </p>
          <button className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-4 text-sm font-semibold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
            Learn More About Us <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}