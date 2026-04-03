"use client";

import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeftIcon } from "@phosphor-icons/react";

export default function TermsOfServicePage() {
  const lastUpdated = "March 5, 2026";

  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree, you may not use or access our website. These terms govern your use of the Canbiz Consultancy website and all its contents, services, and products.",
    },
    {
      title: "2. Intellectual Property Rights",
      content:
        "Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.",
    },
    {
      title: "3. User Representations",
      content:
        "By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.",
    },
    {
      title: "4. Prohibited Activities",
      content:
        "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activities include but are not limited to systematic retrieval of data, making unauthorized use of the Site, and engaging in unauthorized framing or linking to the Site.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.",
    },
    {
      title: "6. Governing Law",
      content:
        "These Terms shall be governed by and defined following the laws of Qatar. Canbiz Consultancy Services and yourself irrevocably consent that the courts of Qatar shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.",
    },
    {
      title: "7. Modifications",
      content:
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-14 md:h-20" />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
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
            <span className="text-white/60 text-[11px] tracking-widest uppercase">
              Terms of Service
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-12 lg:gap-20 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase font-bold mb-4 md:mb-6">
                Legal & Compliance
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] max-w-[900px] mb-4 md:mb-6">
                Terms of <span className="text-brand-gold">Service</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg lg:text-[22px] leading-[1.7] max-w-[680px] font-light">
                The framework governing our engagement, professional standards, and the operational boundaries of our advisory platform.
              </p>
            </div>
            <div className="hidden lg:block border-l border-white/15 pl-8 pb-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Type</p>
              <p className="text-white text-xl leading-tight font-light mb-8">Service Framework</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Firm</p>
              <p className="text-sm leading-7 text-gray-300">
                A disciplined advisory platform built for long-term institutional impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-sm mb-12 italic">
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <div key={i} className="group">
                <h2 className="text-brand-navy text-xl font-semibold mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-brand-surface border border-gray-300">
            <p className="text-brand-navy text-sm font-semibold mb-2">
              Have questions regarding these terms?
            </p>
            <p className="text-gray-500 text-xs mb-4">
              Our team can clarify our service conditions.
            </p>
            <a
              href="mailto:info@canbizconsultancy.com"
              className="text-brand-gold text-sm font-medium hover:underline underline-offset-4"
            >
              info@canbizconsultancy.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
