"use client";

import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, WarningIcon } from "@phosphor-icons/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-white selection:bg-brand-gold/30">
      <Navbar />
      
      {/* Subtract navbar height */}
      <div className="h-14" />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(225,184,87,0.03)_0%,transparent_70%)]">
        {/* Animated accent lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent absolute top-[30%] -rotate-6 scale-150 transform-gpu animate-pulse" />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent absolute bottom-[40%] rotate-12 scale-150 transform-gpu animate-pulse [animation-delay:1s]" />
        </div>

        <div className="max-w-4xl w-full px-6 text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-brand-gold/40" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-extrabold text-brand-gold">
                Error 404
              </span>
              <span className="w-12 h-px bg-brand-gold/40" />
            </div>

            <h1 className="text-[120px] md:text-[220px] leading-tight font-light text-white italic tracking-tighter mix-blend-overlay absolute inset-x-0 -top-12 md:-top-24 select-none opacity-20 pointer-events-none">
              Lost
            </h1>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight leading-tight">
                This page is beyond <br />
                <span className="text-brand-gold font-light">the horizon.</span>
              </h2>

              <p className="text-sm md:text-base text-gray-400 mb-12 max-w-lg mx-auto leading-[1.8] font-medium tracking-wide uppercase">
                The content you are searching for does not inhabit this coordinate. Let us guide you back to the mainland.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link
                  href="/"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-navy text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:tracking-[0.4em] rounded-sm hover:-translate-y-1"
                >
                  Return Home
                  <ArrowRightIcon size={16} weight="bold" className="text-brand-gold group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-5 py-4 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-white"
                >
                  <span className="h-px w-6 bg-brand-gold group-hover:w-10 group-hover:bg-white transition-all duration-300" />
                  Consult with Support
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Minimalist footer indicator */}
          <footer className="mt-24 flex flex-col items-center gap-4">
            <div className="w-px h-16 bg-gradient-to-b from-brand-gold/60 to-transparent" />
            <span className="text-[9px] uppercase tracking-[0.8em] text-gray-500 font-bold ml-[0.8em]">
              Precision · Vision · Excellence
            </span>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
