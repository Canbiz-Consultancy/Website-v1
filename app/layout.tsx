import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Why Business Systems Are Critical for Startups and Growing Companies | Canbiz Consultancy Services",
  description: "Discover why strong business systems, corporate training, and structured processes are essential for startup success and sustainable business growth.",
  keywords: "Business systems for startups, corporate training for companies, business process management, company policies and procedures, startup consulting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
