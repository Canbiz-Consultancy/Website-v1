"use client";

import { FacebookLogoIcon, TwitterLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { CanbizLogoDark } from "./CanbizLogo";

const footerLinks = [
  { label: "Connect with us", href: "#" },
  { label: "Site map", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center">
            <CanbizLogoDark className="h-14 w-auto" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-gray-600 hover:text-brand-navy transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">
              <FacebookLogoIcon size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">
              <TwitterLogoIcon size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">
              <LinkedinLogoIcon size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">
              <YoutubeLogoIcon size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 leading-relaxed max-w-[800px]">
            Canbiz Consultancy Services is a global professional services firm providing consulting, assurance, tax, and advisory services. We help clients across industries navigate complexity, unlock growth opportunities, and build sustainable value for their stakeholders.
          </p>
          <p className="text-xs text-gray-400 mt-4">© 2026 Canbiz Consultancy Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}