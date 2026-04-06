import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { industries, industryDetails, industriesSection, industriesBottomStats } from "../constants/content";
import { ArrowRightIcon, ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Industries | Canbiz Consultancy Services",
  description:
    "Explore the industries we serve — from government & public sector and entrepreneurship to financial services and digital innovation.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-14 md:h-20" />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative isolate bg-brand-navy px-6 md:px-16 pt-32 md:pt-40 pb-16 overflow-hidden h-[600px] lg:h-[650px]">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07101d] to-transparent" />

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
            <span className="text-white/60 text-[11px] tracking-widest uppercase">Industries</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-12 lg:gap-20 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase font-bold mb-4 md:mb-6">
                {industriesSection.eyebrow}
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] max-w-[900px] mb-4 md:mb-6">
                {industriesSection.headingPlain}{" "}
                <span className="text-brand-gold">{industriesSection.headingGold}</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg lg:text-[22px] leading-[1.7] max-w-[680px] font-light">
                {industriesSection.subtext}
              </p>
            </div>
            <div className="hidden lg:block border-l border-white/15 pl-8 pb-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Sectors</p>
              <p className="text-white text-xl leading-tight font-light mb-8">Targeted Expertise</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Positioning</p>
              <p className="text-sm leading-7 text-gray-300">
                Targeted expertise across priority industries where execution discipline matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries Grid ──────────────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const detail = industryDetails[industry.slug];

              return (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="group bg-white flex flex-col hover:bg-brand-navy transition-colors duration-300"
                >
                  {/* Hero image */}
                  {detail && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={detail.hero}
                        alt={detail.heroAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/20 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] bg-brand-gold text-brand-navy px-2.5 py-1 font-semibold tracking-widest uppercase">
                          {String(industry.id).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-10 h-10 border border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                        <Icon
                          size={20}
                          className="text-brand-gold"
                          weight="light"
                        />
                      </div>
                    </div>

                    <h2 className="text-brand-navy text-base font-semibold leading-snug mb-6 group-hover:text-white transition-colors duration-300">
                      {industry.name}
                    </h2>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1 group-hover:text-gray-400 transition-colors duration-300">
                      {industry.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-gold group-hover:gap-3 transition-all duration-300">
                      Explore industry <ArrowRightIcon size={12} className="translate-y-[1px]" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Canbiz Strip ─────────────────────────────────────────────────── */}
      <section className="bg-brand-navy px-6 md:px-16 py-24 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-14 items-start">
          <div>
            <p className="text-brand-gold text-[10px] tracking-[0.28em] uppercase mb-6">
              Why Canbiz
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-6">
              A single trusted partner for{" "}
              <span className="text-brand-gold">every dimension</span> of
              your growth.
            </h2>
            <p className="text-gray-400 text-sm leading-7 max-w-xl mb-10">
              From strategy to execution, brand to technology, leadership to
              government — Canbiz provides integrated advisory that eliminates
              silos and ensures every service we deliver is connected to your
              overarching business ambition.
            </p>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 border border-white/70 text-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-brand-navy transition-all duration-300"
            >
              About Canbiz <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className="border-l border-white/15 pl-8 space-y-6">
            {industriesBottomStats.map((s, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <div className="text-brand-gold text-3xl font-light mb-2">{s.value}</div>
                <div className="text-white/70 text-xs uppercase tracking-[0.22em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <div className="max-w-[600px] flex flex-col items-center">
            <p className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">Get Started</p>
            <h2 className="text-black text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Not sure where to begin?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[400px] mb-10">
              Our team will help you identify the right services for your goals.
              Book a complimentary discovery call and let's explore how Canbiz
              can make a measurable difference for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 text-xs font-bold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 uppercase tracking-widest"
              >
                Request a Consultation <ArrowRightIcon size={14} />
              </a>
              <Link
                href="/"
                className="text-gray-500 text-xs font-bold uppercase tracking-widest hover:text-brand-navy transition-colors flex items-center gap-1.5 mt-4 sm:mt-0"
              >
                <ArrowLeftIcon size={13} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

