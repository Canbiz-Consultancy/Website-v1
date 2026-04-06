import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.canbizconsultancy.com";
const siteName = "Canbiz Consultancy";
const siteLogo = `${siteUrl}/logo.png`;
const siteDescription =
  "A premier management consultancy and professional services firm dedicated to empowering organizations and leaders across the GCC and global markets.";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Canbiz Consultancy Services",
    template: "%s | Canbiz Consultancy",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Canbiz Consultancy Services",
    description: siteDescription,
    images: [
      {
        url: siteLogo,
        width: 1200,
        height: 630,
        alt: "Canbiz Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canbiz Consultancy Services",
    description: siteDescription,
    images: [siteLogo],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: siteLogo,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/insights?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased bg-background text-foreground font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
