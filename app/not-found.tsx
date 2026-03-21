"use client";

import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";
import { ArrowRightIcon, HouseIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-white selection:bg-brand-gold/30">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg w-full"
        >
          {/* Eyebrow */}
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-6 font-medium">
            Error 404
          </p>

          {/* Divider */}
          <div className="w-10 h-px bg-brand-gold/40 mb-8" />

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.08em] uppercase text-white mb-5 leading-snug">
            Page Not Found
          </h1>

          {/* Body */}
          <p className="text-sm text-white/40 font-light leading-relaxed mb-10 max-w-sm">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Please return to the homepage or contact us for assistance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white text-brand-navy text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold"
            >
              <HouseIcon size={13} weight="bold" />
              Return Home
              <ArrowRightIcon size={12} weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-3.5 border border-white/15 text-white/50 text-[10px] font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:border-white/30 hover:text-white/80"
            >
              <EnvelopeSimpleIcon size={13} />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}