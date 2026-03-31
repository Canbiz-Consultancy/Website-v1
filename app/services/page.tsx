

import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { services, servicesSection, serviceDetails } from "../constants/content";
import { ArrowRightIcon, ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Canbiz Consultancy Services",
  description:
    "Explore the full portfolio of Canbiz services — from management consulting and brand strategy to digital solutions, executive education, and government advisory.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-14" />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative isolate bg-brand-navy px-6 md:px-16 pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07101d] to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-[11px] tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="text-white/60 text-[11px] tracking-widest uppercase">Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-12 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase mb-6">
                {servicesSection.eyebrow}
              </p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-[-0.02em] max-w-3xl mb-6">
                {servicesSection.headingPlain}{" "}
                <span className="text-brand-gold">{servicesSection.headingGold}</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-7 max-w-2xl">
                {servicesSection.subtext}
              </p>
            </div>
            <div className="hidden lg:block border-l border-white/15 pl-8 pb-1">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Portfolio</p>
              <p className="text-white text-lg leading-7 font-light">
                A curated set of capabilities designed to move leadership from strategy to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-black/10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const detail = serviceDetails[service.slug];

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block border-b border-black/10 py-10 md:py-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[160px_minmax(0,1fr)_260px] gap-8 items-start">
                    <div className="flex flex-col gap-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <div className="w-10 h-10 border border-brand-navy/15 flex items-center justify-center">
                        <Icon size={20} className="text-brand-navy/70" weight="light" />
                      </div>
                    </div>

                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-light tracking-[-0.02em] mb-3 text-brand-navy group-hover:text-brand-gold transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-7">
                        {service.description}
                      </p>

                      {detail && detail.targetAudience && (
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                          {detail.targetAudience.slice(0, 2).map((aud: any) => (
                            <span
                              key={aud.title}
                              className="text-[10px] uppercase tracking-[0.24em] text-gray-400"
                            >
                              {aud.title}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-navy group-hover:text-brand-gold transition-colors">
                        Explore service <ArrowRightIcon size={13} />
                      </div>
                    </div>

                    {detail && (
                      <div className="hidden lg:block relative h-40 overflow-hidden bg-black/5">
                        <img
                          src={detail.hero}
                          alt={detail.heroAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-300" />
                        {service.isUpcoming && (
                          <div className="absolute top-4 right-4 text-[10px] bg-brand-navy text-brand-gold px-2 py-0.5 font-bold tracking-widest uppercase border border-brand-gold/30">
                            Upcoming
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Canbiz Strip ─────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
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
              {[
                { v: "10+", l: "Years of Excellence" },
                { v: "1,000+", l: "Clients Served" },
                { v: "30+", l: "Countries Reached" },
                { v: "6+", l: "Industry Sectors" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-brand-navy-mid p-8 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-brand-gold text-3xl font-light mb-2">
                    {s.v}
                  </span>
                  <span className="text-gray-400 text-xs">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
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
              {servicesSection.ctaSecondary} <ArrowRightIcon size={14} />
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
