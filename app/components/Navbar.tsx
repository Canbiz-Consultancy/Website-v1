"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MagnifyingGlassIcon, ListIcon, XIcon, CaretUp, CaretDown } from "@phosphor-icons/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, services, industries, navbarDropdownContent } from "../constants/content";
import { getStrapiImageUrl } from "../lib/strapi";
import { Insight } from "../types/insight";
import { useEffect } from "react";

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
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const [insights, setInsights] = useState<Insight[]>([]);

  useEffect(() => {
    async function loadInsights() {
      try {
        const response = await fetch(`/api/insights/featured?limit=2`);
        const json = await response.json();
        if (json?.insights?.length > 0) {
          setInsights(json.insights);
        }
      } catch {
        // ignore client fetch errors
      }
    }
    loadInsights();
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);

    if (sectionId === "services")   { router.push("/services");   return; }
    if (sectionId === "industries") { router.push("/industries"); return; }
    if (sectionId === "careers")    { router.push("/careers");    return; }
    if (sectionId === "about")      { router.push("/about");      return; }
    if (sectionId === "insights")   { router.push("/insights");   return; }

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
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

  const toggleMobileItem = (itemLabel: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(itemLabel) 
        ? []
        : [itemLabel]
    );
  };

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

      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy-mid text-white border-b border-brand-navy-border">
        {/* Top bar */}
        <div className="px-6 md:px-16">
          <div className="w-full flex items-center justify-between">
            <Link
              href="/"
              className="relative shrink-0 h-20 flex items-center justify-start"
              onClick={() => setActiveDropdown(null)}
            >
              <Image
                src="/logo-nav.svg"
                alt="Canbiz Logo"
                width={180}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0 h-20">
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
                  className={`relative px-4 h-full text-xs tracking-wide transition-colors flex items-center gap-1
                    ${isActive
                      ? "text-white"
                      : "text-white/80 hover:text-brand-gold hover:underline hover:decoration-brand-gold hover:underline-offset-8"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold origin-left"
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
              className="lg:hidden text-white/80 hover:text-brand-gold"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
            </button>
          </div>
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
              className="w-full bg-brand-navy-mid shadow-2xl overflow-hidden relative origin-top border-b border-brand-navy-border"
            >
              {/* Animated gold top border */}
              <motion.div
                variants={borderVariants}
                className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold"
              />

              <div className="px-6 md:px-16">
                <div className="w-full py-10 grid grid-cols-[320px_1fr] gap-20 min-h-96">

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
                      <p className="text-xs uppercase tracking-widest text-brand-gold mb-4 font-semibold">
                        {activeItem.label}
                      </p>
                      <div className="mb-8">
                        <h3 className="text-xl text-white font-semibold leading-snug mb-3">
                          {activeItem.label === "Insights"
                            ? navbarDropdownContent.insights.description
                            : activeItem.label === "Services"
                            ? navbarDropdownContent.services.description
                            : activeItem.label === "Industries"
                            ? navbarDropdownContent.industries.description
                            : activeItem.label === "Careers"
                            ? navbarDropdownContent.careers.description
                            : activeItem.label === "About Us"
                            ? navbarDropdownContent.about.description
                            : `Everything you need to know about ${activeItem.label.toLowerCase()} at Canbiz.`}
                        </h3>
                      </div>

                      <button
                        onClick={() => { setActiveDropdown(null); handleNavClick(activeItem.section); }}
                        className="inline-block border border-brand-gold/50 text-brand-gold font-medium text-xs px-6 py-3 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy transition-all duration-300 w-fit"
                      >
                        {activeItem.label === "Insights"
                          ? navbarDropdownContent.insights.exploreLabel
                          : activeItem.label === "Services"
                          ? navbarDropdownContent.services.exploreLabel
                          : activeItem.label === "Industries"
                          ? navbarDropdownContent.industries.exploreLabel
                          : activeItem.label === "Careers"
                          ? navbarDropdownContent.careers.exploreLabel
                          : activeItem.label === "About Us"
                          ? navbarDropdownContent.about.exploreLabel
                          : "Explore"} {activeItem.label}
                      </button>
                    </motion.div>

                    {/* Right column */}
                    <div className="flex flex-col">
                      {activeItem.label === "Insights" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          {insights.length > 0 ? (
                            <>
                              {insights.map((insight) => (
                              <motion.div key={insight.id} variants={itemVariants}>
                                <Link
                                  href={`/insights/${insight.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group block"
                                >
                                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy-mid mb-4 border border-brand-navy-border">
                                    {getStrapiImageUrl(insight.featuredImage) ? (
                                      <Image
                                        src={getStrapiImageUrl(insight.featuredImage)}
                                        alt={insight.title}
                                        fill
                                        sizes="(min-width: 1024px) 400px, 100vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                      />
                                    ) : (
                                      <div className="absolute inset-0 bg-brand-navy/20" />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-2 block">
                                      {insight.category}
                                    </span>
                                    <h4 className="text-base text-white font-semibold group-hover:text-brand-gold transition-colors mb-2 line-clamp-2 leading-snug">
                                      {insight.title}
                                    </h4>
                                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                                      {insight.excerpt}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                              ))}
                              {insights.length < 2 && (
                                <motion.div variants={itemVariants}>
                                  <Link
                                    href="/insights"
                                    onClick={() => setActiveDropdown(null)}
                                    className="group block"
                                  >
                                    <div className="aspect-[16/10] overflow-hidden bg-brand-navy-mid text-white mb-4 border border-brand-navy-border flex items-center justify-center">
                                      <div className="text-center px-6">
                                        <p className="text-[10px] uppercase tracking-[0.24em] text-brand-gold mb-3 font-semibold">
                                          {navbarDropdownContent.insightsFallback.title}
                                        </p>
                                        <h4 className="text-lg font-semibold mb-2">{navbarDropdownContent.insightsFallback.heading}</h4>
                                        <p className="text-xs text-white/70 leading-relaxed">
                                          {navbarDropdownContent.insightsFallback.description}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-brand-gold group-hover:text-brand-gold transition-colors">
                                      {navbarDropdownContent.insightsFallback.browseLabel}
                                      <span aria-hidden="true">→</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              )}
                            </>
                          ) : (
                            <motion.div
                              variants={itemVariants}
                              className="col-span-2 flex flex-col justify-center items-center h-full text-center py-10"
                            >
                              <div className="w-12 h-12 border border-brand-gold/30 rounded-full flex items-center justify-center mb-6 bg-brand-gold/5">
                                <MagnifyingGlassIcon className="text-brand-gold" size={24} weight="light" />
                              </div>
                              <h4 className="text-white text-lg font-semibold mb-3">{navbarDropdownContent.emptyInsights.title}</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">
                                {navbarDropdownContent.emptyInsights.description}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-x-12 gap-y-2 divide-y divide-brand-navy-border/60">
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
                                "Employee Training": "/about#employee-training",
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
                                      <span className="text-sm text-white group-hover:text-brand-gold transition-colors font-medium block">
                                        {child.label}
                                        {child.upcoming && (
                                          <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-xs bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[7px] font-bold uppercase tracking-widest leading-none align-middle">
                                            Upcoming
                                          </span>
                                        )}
                                      </span>
                                      {child.sub && (
                                        <span className="text-xs text-white/60 mt-1 block">
                                          {child.sub}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-brand-gold/70 group-hover:text-brand-gold transition-all duration-200 text-lg mt-0.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
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
            </div>

            {/* Chevron */}
            <motion.div
              variants={chevronVariants}
              className="flex justify-center pb-2"
            >
              <button
                onClick={() => setActiveDropdown(null)}
                className="group flex flex-col items-center gap-1 text-white/60 hover:text-brand-gold transition-all duration-200"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="lg:hidden bg-brand-navy-mid border-t border-brand-navy-border overflow-y-auto max-h-[calc(100vh-80px)] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {navItems.map((item) => {
                  const isExpanded = expandedMobileItems.includes(item.label);
                  const hasChildren = item.children && item.children.length > 0;
                  
                  return (
                    <div key={item.label}>
                      <button
                        className="w-full text-left px-6 py-5 text-[13px] font-semibold text-white/90 hover:text-brand-gold transition-colors tracking-widest uppercase border-b border-brand-navy-border flex items-center justify-between bg-brand-navy-mid"
                        onClick={() => {
                          if (hasChildren) {
                            toggleMobileItem(item.label);
                          } else {
                            handleNavClick(item.section);
                          }
                        }}
                      >
                        <span>{item.label}</span>
                        {hasChildren && (
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-brand-navy p-1.5 rounded-full text-white/70"
                          >
                            <CaretDown size={14} weight="bold" />
                          </motion.div>
                        )}
                      </button>
                      
                      {/* Expandable sub-routes */}
                      <AnimatePresence>
                        {isExpanded && hasChildren && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE_OUT }}
                            className="overflow-hidden bg-brand-navy"
                          >
                            {item.children.map((child) => {
                              const aboutAnchors: Record<string, string> = {
                                "Our Story":        "/about#our-story",
                                "Mission & Vision": "/about#mission-values",
                                "Employee Training": "/about#employee-training",
                              };
                              const careersAnchors: Record<string, string> = {
                                "Open Positions": "/careers#open-positions",
                                "Life at Canbiz": "/careers#life",
                              };
                              
                              const href =
                                item.section === "services"
                                  ? getServiceHref(child.label)
                                  : item.section === "industries"
                                  ? getIndustryHref(child.label)
                                  : item.section === "careers"
                                  ? (careersAnchors[child.label] ?? "/careers")
                                  : item.section === "about"
                                  ? (aboutAnchors[child.label] ?? "/about")
                                  : `/#${item.section}`;

                              return (
                                <Link
                                  key={child.label}
                                  href={href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setExpandedMobileItems([]);
                                  }}
                                  className="block px-8 py-4 text-sm text-white/70 hover:text-brand-gold transition-colors border-b border-brand-navy-border/60"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <span className="block font-medium">
                                        {child.label}
                                        {child.upcoming && (
                                          <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-[2px] bg-brand-gold/10 text-brand-gold border border-brand-gold/30 text-[9px] font-bold uppercase tracking-widest leading-none align-middle">
                                            Upcoming
                                          </span>
                                        )}
                                      </span>
                                      {child.sub && (
                                        <span className="text-[11px] text-white/50 mt-1.5 block leading-relaxed max-w-[280px]">
                                          {child.sub}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-white/40">
                                      →
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                <div className="px-6 py-8 flex gap-4 flex-col bg-[#F9FAFB] mt-auto">
                  <button
                    onClick={() => { setMobileOpen(false); router.push("/contact"); }}
                    className="w-full bg-brand-navy text-white text-sm font-semibold px-4 py-4 hover:bg-brand-gold hover:text-brand-navy transition-all tracking-widest uppercase shadow-lg shadow-brand-navy/10"
                  >
                    {navbarDropdownContent.contactButton}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
