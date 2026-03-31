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
        "These Terms shall be governed by and defined following the laws of the United Arab Emirates. Canbiz Consultancy Services and yourself irrevocably consent that the courts of the United Arab Emirates shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.",
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
      <div className="h-14" />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy pt-20 pb-0 px-6 md:px-16 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(var(--color-brand-gold)_1px,transparent_1px),linear-gradient(90deg,var(--color-brand-gold)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-6xl mx-auto relative z-10">
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
            <span className="text-brand-gold/50 text-xs tracking-widest uppercase">
              Terms of Service
            </span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
            Legal & Compliance
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl mb-6">
            Terms of <span className="text-brand-gold">Service</span>
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mb-16" />
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

          <div className="mt-20 p-8 bg-brand-surface border border-brand-gold/10">
            <p className="text-brand-navy text-sm font-semibold mb-2">
              Have questions regarding these terms?
            </p>
            <p className="text-gray-500 text-xs mb-4">
              Our legal team can clarify our service conditions.
            </p>
            <a
              href="mailto:info@canbizconsultancy.com"
              className="text-brand-gold text-sm font-medium hover:underline underline-offset-4"
            >
              legal@canbizconsultancy.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
