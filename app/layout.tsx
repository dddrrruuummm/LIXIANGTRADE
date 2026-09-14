import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LIXIANG Trade | Global Product Programs",
    template: "%s | LIXIANG Trade"
  },
  description: "LIXIANG TRADE CO., LTD. connects product programs, sourcing conversations, and cross-border commercial partnerships.",
  keywords: ["international trade Canada", "Ontario sourcing company", "product programs", "B2B sourcing", "cross-border trade", "LIXIANG Trade"],
  openGraph: {
    title: "LIXIANG Trade | Global Product Programs",
    description: "A clear starting point for product programs, sourcing coordination, and commercial partnerships.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/lixiang-hero.png", width: 2048, height: 786, alt: "LIXIANG Trade global product and supply coordination" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LIXIANG Trade | Global Product Programs",
    description: "A clear starting point for product programs, sourcing coordination, and commercial partnerships.",
    images: ["/images/lixiang-hero.png"]
  },
  alternates: {
    canonical: site.url
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: "Ontario corporation positioned for international trade, product programs, sourcing coordination, and commercial partnerships.",
    areaServed: "Canada"
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
