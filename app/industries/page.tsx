import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { industries, industryDetails, industriesSection, industriesBottomStats } from "../content";
import { ArrowRightIcon, ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Industries | Canbiz Consultancy Services",
  description:
    "Explore the industries we serve — from government & public sector and entrepreneurship to financial services and digital innovation.",
};

export default function IndustriesPage() {
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
            <span className="text-brand-gold/50 text-xs tracking-widest uppercase">Industries</span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
            {industriesSection.eyebrow}
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-[800px] mb-6">
            {industriesSection.headingPlain}{" "}
            <span className="text-brand-gold">{industriesSection.headingGold}</span>
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mb-8" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-[580px] mb-16">
            {industriesSection.subtext}
          </p>
        </div>
      </section>

      {/* ── Industries Grid ──────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
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
                      <img
                        src={detail.hero}
                        alt={detail.heroAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                      <div className="w-10 h-10 border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold/50 transition-colors">
                        <Icon
                          size={20}
                          className="text-brand-gold"
                          weight="light"
                        />
                      </div>
                    </div>

                    <h2 className="text-brand-navy text-base font-semibold leading-snug mb-3 group-hover:text-white transition-colors duration-300">
                      {industry.name}
                    </h2>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1 group-hover:text-gray-400 transition-colors duration-300">
                      {industry.description}
                    </p>

                    {detail && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {detail.tags.slice(0, 3).map((tag: string) => (
                          <span
                            key={tag}
                            className="text-[10px] border border-brand-gold/30 text-brand-navy/60 group-hover:text-brand-gold/60 group-hover:border-brand-gold/40 px-2.5 py-1 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 text-xs font-medium text-brand-gold group-hover:gap-3 transition-all duration-300">
                      Explore industry <ArrowRightIcon size={13} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Canbiz Strip ─────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
                Why Canbiz
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light leading-tight mb-6">
                A single trusted partner for{" "}
                <span className="text-brand-gold">every dimension</span> of
                your growth.
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold mb-8" />
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                From strategy to execution, brand to technology, leadership to
                government — Canbiz provides integrated advisory that eliminates
                silos and ensures every service we deliver is connected to your
                overarching business ambition.
              </p>
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-brand-navy transition-all duration-300"
              >
                About Canbiz <ArrowRightIcon size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-px bg-brand-navy-border">
              {industriesBottomStats.map((s, i) => (
                <div
                  key={i}
                  className="bg-brand-navy-mid p-8 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-brand-gold text-3xl font-light mb-2">
                    {s.value}
                  </span>
                  <span className="text-gray-400 text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-20 px-6 md:px-16">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight mb-5">
            Not sure where to begin?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Our team will help you identify the right services for your goals.
            Book a complimentary discovery call and let's explore how Canbiz
            can make a measurable difference for your organisation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-brand-navy text-white px-10 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center gap-2"
            >
              Request a Consultation <ArrowRightIcon size={14} />
            </a>
            <Link
              href="/"
              className="text-gray-500 text-sm hover:text-brand-navy transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={13} /> Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
