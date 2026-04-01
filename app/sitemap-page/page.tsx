"use client";

import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { navItems, services, industries } from "../constants/content";

export default function SitemapPage() {
  const sitemapData = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Industries", href: "/industries" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Our Services",
      links: services.map((s) => ({
        label: s.title,
        href: `/services/${s.slug}`,
      })),
    },
    {
      title: "Industries We Serve",
      links: industries.map((i) => ({
        label: i.name,
        href: `/industries/${i.slug}`,
      })),
    },
    {
      title: "Legal & Information",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Sitemap", href: "/sitemap-page" },
      ],
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
              Sitemap
            </span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
            Website Navigation
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl mb-6">
            Site <span className="text-brand-gold">Map</span>
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mb-16" />
        </div>
      </section>

      {/* ── Site Navigation Map ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {sitemapData.map((category, idx) => (
              <div key={idx} className="flex flex-col">
                <h2 className="text-brand-navy text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-300 pb-4 flex items-center justify-between">
                  {category.title}
                  <div className="w-2 h-2 bg-brand-gold rotate-45" />
                </h2>
                <ul className="space-y-4">
                  {category.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-500 hover:text-brand-navy transition-colors duration-300 transform hover:translate-x-1"
                      >
                        <ArrowRightIcon size={12} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-all" />
                        <span className="text-sm font-medium">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
