"use client";

import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeftIcon } from "@phosphor-icons/react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 5, 2026";

  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to Canbiz Consultancy Services. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.",
    },
    {
      title: "4. Sharing Your Information",
      content:
        "We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share data based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, and Legal Obligations.",
    },
    {
      title: "5. Data Security",
      content:
        "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.",
    },
    {
      title: "6. Your Privacy Rights",
      content:
        "In some regions (like the EEA), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.",
    },
    {
      title: "7. Contact Us",
      content:
        "If you have questions or comments about this policy, you may email us at info@canbizconsultancy.com or by post to: Canbiz Consultancy Services, Office 402, Canbiz Tower, Business Bay, Dubai, UAE.",
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
              Privacy Policy
            </span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
            Legal & Compliance
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl mb-6">
            Privacy <span className="text-brand-gold">Policy</span>
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
              Need assistance regarding your data?
            </p>
            <p className="text-gray-500 text-xs mb-4">
              Our compliance team is here to help with any privacy-related
              inquiries.
            </p>
            <a
              href="mailto:info@canbizconsultancy.com"
              className="text-brand-gold text-sm font-medium hover:underline underline-offset-4"
            >
              contact-compliance@canbizconsultancy.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
