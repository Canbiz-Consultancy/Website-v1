"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MagnifyingGlassIcon, ListIcon, XIcon, CaretUp } from "@phosphor-icons/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CanbizLogo } from "./CanbizLogo";
import { navItems, services, industries } from "../constants/content";

// ─── Animation variants ───────────────────────────────────────────────────────

const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];
const EASE_IN  = [0.64, 0, 0.78, 0] as [number, number, number, number];

// Panel only opens/closes — never re-mounts when switching tabs
const panelVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0.96,
    transformOrigin: "top center",
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transformOrigin: "top center",
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0.97,
    transformOrigin: "top center",
    transition: {
      duration: 0.2,
      ease: EASE_IN,
    },
  },
};

const borderVariants = {
  hidden: { scaleX: 0, originX: "0%" },
  visible: {
    scaleX: 1,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
  exit: {
    scaleX: 0,
    originX: "100%",
    transition: { duration: 0.2, ease: EASE_IN },
  },
};

// Content swap: fades out old tab content, fades in new — no panel re-mount
const contentVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: EASE_OUT,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.15,
      ease: EASE_IN,
    },
  },
};

const leftColVariants = {
  hidden: { x: -12, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: EASE_OUT },
  },
  exit: {
    x: -8,
    opacity: 0,
    transition: { duration: 0.15, ease: EASE_IN },
  },
};

const itemVariants = {
  hidden: { y: 8, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.22, ease: EASE_OUT },
  },
  exit: {
    y: -4,
    opacity: 0,
    transition: { duration: 0.12, ease: EASE_IN },
  },
};

const chevronVariants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.2, ease: EASE_OUT },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);

    if (sectionId === "services")   { router.push("/services");   return; }
    if (sectionId === "industries") { router.push("/industries"); return; }
    if (sectionId === "careers")    { router.push("/careers");    return; }
    if (sectionId === "about")      { router.push("/about");      return; }

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 56;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const getServiceHref = (childLabel: string) => {
    const match = services.find(
      (s) =>
        s.shortTitle.toLowerCase() === childLabel.toLowerCase() ||
        s.title.toLowerCase().includes(childLabel.toLowerCase())
    );
    return match ? `/services/${match.slug}` : "/services";
  };

  const getIndustryHref = (childLabel: string) => {
    const match = industries.find(
      (i) =>
        i.shortTitle?.toLowerCase() === childLabel.toLowerCase() ||
        i.name.toLowerCase().includes(childLabel.toLowerCase())
    );
    return match ? `/industries/${match.slug}` : "/industries";
  };

  const activeItem = navItems.find((item) => item.label === activeDropdown);

  return (
    <>
      {/* Click-outside overlay */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy text-white">
        {/* Top bar */}
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
            onClick={() => setActiveDropdown(null)}
          >
            <CanbizLogo className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0 h-14">
            {navItems.map((item) => {
              const isActive = activeDropdown === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.children) {
                      setActiveDropdown(isActive ? null : item.label);
                    } else {
                      setActiveDropdown(null);
                      handleNavClick(item.section);
                    }
                  }}
                  className={`relative px-4 h-full text-xs tracking-wide uppercase transition-colors flex items-center gap-1
                    ${isActive
                      ? "text-white bg-brand-navy-light"
                      : "text-gray-300 hover:text-white hover:bg-brand-navy-light"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                      transition={{ duration: 0.25, ease: EASE_OUT }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => { setActiveDropdown(null); router.push("/contact"); }}
              className="hidden md:block bg-brand-gold text-brand-navy text-xs font-semibold px-5 py-2 hover:bg-brand-gold-hover transition-colors"
            >
              Contact Us
            </button>
            <button
              className="lg:hidden text-gray-200 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mega Dropdown Panel ──
          NO key prop here — the panel is a single persistent element.
          It only mounts/unmounts based on whether any dropdown is active.
          Tab switching only swaps the INNER content via AnimatePresence below.
        */}
        <AnimatePresence>
          {activeDropdown && activeItem?.children && (
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full bg-brand-navy-mid shadow-2xl overflow-hidden relative"
              style={{ transformOrigin: "top center" }}
            >
              {/* Animated gold top border */}
              <motion.div
                variants={borderVariants}
                className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gold"
                style={{ transformOrigin: "0% 50%" }}
              />

              <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-[320px_1fr] gap-20 min-h-[480px]">

                {/* Inner content: keyed by activeDropdown so it crossfades on tab switch */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDropdown}
                    className="contents"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {/* Left column */}
                    <motion.div
                      variants={leftColVariants}
                      className="pr-12 border-r border-brand-navy-border flex flex-col justify-start"
                    >
                      <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-4 font-semibold">
                        {activeItem.label}
                      </p>
                      <div className="mb-8">
                        <h3 className="text-xl text-white font-light leading-snug mb-3">
                          {activeItem.label === "Insights"
                            ? "Strategic perspectives shaping the future of regional business."
                            : activeItem.label === "Services"
                            ? "Expert advisory tailored to transform your organization's performance."
                            : activeItem.label === "Industries"
                            ? "Sectors we empower through deep expertise and innovative solutions."
                            : `Everything you need to know about ${activeItem.label.toLowerCase()} at Canbiz.`}
                        </h3>
                      </div>

                      <button
                        onClick={() => { setActiveDropdown(null); handleNavClick(activeItem.section); }}
                        className="inline-block border border-white/50 text-white text-xs px-6 py-3 hover:bg-white hover:text-brand-navy hover:border-white transition-all duration-300 w-fit"
                      >
                        Explore {activeItem.label}
                      </button>
                    </motion.div>

                    {/* Right column */}
                    <div className="flex flex-col">
                      {activeItem.label === "Insights" ? (
                        <motion.div
                          variants={itemVariants}
                          className="flex flex-col justify-center items-center h-full text-center max-w-[500px] mx-auto"
                        >
                          <div className="w-12 h-12 border border-brand-gold/30 rounded-full flex items-center justify-center mb-6">
                            <MagnifyingGlassIcon className="text-brand-gold" size={24} weight="light" />
                          </div>
                          <h4 className="text-white text-lg font-light mb-3">Knowledge platform coming soon</h4>
                          <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            We're curating our latest research, white papers, and thought leadership
                            perspectives from our team of experts across the GCC.
                          </p>
                          <div className="flex gap-4">
                            {["CEO Perspectives", "GCC Market Entry", "Digital Transformation"].map((tag) => (
                              <span key={tag} className="text-[10px] uppercase tracking-widest text-brand-gold/50 bg-brand-gold/5 px-3 py-1.5 rounded-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <div className="grid grid-cols-2 gap-x-12 gap-y-2 divide-y divide-brand-navy-border/20">
                          {activeItem.children
                            .filter((child) => {
                              if (activeItem.section === "careers") {
                                return ["Open Positions", "Life at Canbiz"].includes(child.label);
                              }
                              return true;
                            })
                            .map((child, idx) => {
                              const aboutAnchors: Record<string, string> = {
                                "Our Story":        "/about#our-story",
                                "Mission & Vision": "/about#mission-values",
                                "Leadership Team":  "/about#leadership",
                                "Our Journey":      "/about#journey",
                              };
                              const careersAnchors: Record<string, string> = {
                                "Open Positions": "/careers#open-positions",
                                "Life at Canbiz": "/careers#life",
                              };
                              const href =
                                activeItem.section === "services"
                                  ? getServiceHref(child.label)
                                  : activeItem.section === "industries"
                                  ? getIndustryHref(child.label)
                                  : activeItem.section === "careers"
                                  ? (careersAnchors[child.label] ?? "/careers")
                                  : activeItem.section === "about"
                                  ? (aboutAnchors[child.label] ?? "/about")
                                  : `/#${activeItem.section}`;

                              return (
                                <motion.div key={child.label} variants={itemVariants}>
                                  <Link
                                    href={href}
                                    onClick={() => setActiveDropdown(null)}
                                    className={`flex items-start justify-between py-4 group hover:pl-2 transition-all duration-200 border-none
                                      ${idx < 2 ? "pt-0" : ""}`}
                                  >
                                    <div className="flex-1">
                                      <span className="text-sm text-gray-200 group-hover:text-brand-gold transition-colors font-medium block">
                                        {child.label}
                                      </span>
                                      {child.sub && (
                                        <span className="text-[11px] text-gray-500 mt-1 block">
                                          {child.sub}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-gray-600 group-hover:text-brand-gold transition-all duration-200 text-lg mt-0.5 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0">
                                      →
                                    </span>
                                  </Link>
                                </motion.div>
                              );
                            })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Chevron */}
              <motion.div
                variants={chevronVariants}
                className="flex justify-center pb-2"
              >
                <button
                  onClick={() => setActiveDropdown(null)}
                  className="group flex flex-col items-center gap-1 text-brand-gold/40 hover:text-brand-gold transition-all duration-200"
                >
                  <CaretUp size={18} weight="bold" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="lg:hidden bg-brand-navy-mid border-t border-brand-navy-border overflow-hidden"
            >
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full text-left px-6 py-4 text-xs text-gray-200 hover:text-brand-gold hover:bg-brand-navy-light transition-colors uppercase tracking-widest border-b border-brand-navy-border"
                    onClick={() => handleNavClick(item.section)}
                  >
                    {item.label}
                  </button>
                </div>
              ))}
              <div className="px-6 py-4 flex gap-4 border-t border-brand-navy-border">
                <button className="flex items-center gap-1.5 text-xs text-gray-300">
                  <MagnifyingGlassIcon size={13} /> Search
                </button>
                <button
                  onClick={() => { setMobileOpen(false); router.push("/contact"); }}
                  className="ml-auto bg-brand-gold text-brand-navy text-xs font-semibold px-4 py-2"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}