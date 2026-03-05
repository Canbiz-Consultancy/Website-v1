"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MagnifyingGlassIcon, ListIcon, XIcon, CaretUp } from "@phosphor-icons/react";
import Link from "next/link";
import { CanbizLogo } from "./CanbizLogo";
import { navItems, services, industries } from "../constants/content";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);

    if (sectionId === "services") {
      router.push("/services");
      return;
    }
    if (sectionId === "industries") {
      router.push("/industries");
      return;
    }
    if (sectionId === "careers") {
      router.push("/careers");
      return;
    }
    if (sectionId === "about") {
      router.push("/about");
      return;
    }

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -56;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
      {/* Invisible overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}

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

          {/* Desktop nav items */}
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
                    ${
                      isActive
                        ? "text-white bg-brand-navy-light"
                        : "text-gray-300 hover:text-white hover:bg-brand-navy-light"
                    }
                  `}
                >
                  {item.label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setActiveDropdown(null);
                router.push("/contact");
              }}
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

        {/* ── Mega Dropdown Panel ── */}
        {activeDropdown && activeItem?.children && (
          <div className="w-full bg-brand-navy-mid border-t-2 border-brand-gold shadow-2xl animate-dropdown">
            <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-[320px_1fr] gap-20 min-h-[480px]">

              {/* Left column: section intro */}
              <div className="pr-12 border-r border-brand-navy-border flex flex-col justify-start">
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
                      : `Everything you need to know about ${activeItem.label.toLowerCase()} at Canbiz.`
                    }
                  </h3>
                </div>

                <button
                  onClick={() => {
                    setActiveDropdown(null);
                    handleNavClick(activeItem.section);
                  }}
                  className="inline-block border border-white/50 text-white text-xs px-6 py-3 hover:bg-white hover:text-brand-navy hover:border-white transition-all duration-300 w-fit"
                >
                  Explore {activeItem.label}
                </button>
              </div>

              {/* Right column: content area */}
              <div className="flex flex-col">
                {activeItem.label === "Insights" ? (
                  <div className="flex flex-col justify-center items-center h-full text-center max-w-[500px] mx-auto">
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
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-x-12 gap-y-2 divide-y divide-brand-navy-border/20">
                    {activeItem.children
                      .filter((child) => {
                        // Filter career items that don't have sections yet
                        if (activeItem.section === "careers") {
                          const existingCareers = ["Open Positions", "Life at Canbiz"];
                          return existingCareers.includes(child.label);
                        }
                        return true;
                      })
                      .map((child, idx) => {
                        const aboutAnchors: Record<string, string> = {
                          "Our Story": "/about#our-story",
                          "Mission & Vision": "/about#mission-values",
                          "Leadership Team": "/about#leadership",
                          "Our Journey": "/about#journey",
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
                          <Link
                            key={child.label}
                            href={href}
                            onClick={() => setActiveDropdown(null)}
                            className={`flex items-start justify-between py-4 group hover:pl-2 transition-all duration-200 border-none
                              ${idx < 2 ? "pt-0" : ""}
                            `}
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
                            <span className="text-gray-600 group-hover:text-brand-gold transition-colors text-lg mt-0.5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                              →
                            </span>
                          </Link>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Chevron Toggle Area */}
            <div className="flex justify-center pb-2">
              <button 
                onClick={() => setActiveDropdown(null)}
                className="group flex flex-col items-center gap-1 text-brand-gold/40 hover:text-brand-gold transition-all duration-300"
              >
                <CaretUp size={18} weight="bold" />
              </button>
            </div>
          </div>
        )}

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-brand-navy-mid border-t border-brand-navy-border">
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
                onClick={() => {
                  setMobileOpen(false);
                  router.push("/contact");
                }}
                className="ml-auto bg-brand-gold text-brand-navy text-xs font-semibold px-4 py-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Keyframe for dropdown animation — add to your global CSS instead if preferred */}
      <style jsx global>{`
        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown {
          animation: dropdownIn 0.18s ease-out forwards;
        }
      `}</style>
    </>
  );
}