import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services | OCTADECENT — Rank Higher, Grow Faster",
  description:
    "Dominate search rankings with OCTADECENT's expert SEO services. We offer technical SEO audits, on-page optimization, link building, local SEO, and content strategy to drive organic traffic and business growth from Hyderabad, Telangana, India.",
  keywords: [
    "SEO services India",
    "search engine optimization",
    "technical SEO",
    "on-page SEO",
    "link building India",
    "local SEO",
    "SEO company Hyderabad",
    "OCTADECENT SEO",
    "organic traffic growth",
    "SEO agency Telangana",
    "Google ranking optimization India",
    "keyword research services Hyderabad",
    "best SEO company in Hyderabad India",
    "off-page SEO link building services",
    "content strategy and SEO audits India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Marketing",
  alternates: {
    canonical: "https://octadecent.com/seo-services",
  },
  openGraph: {
    title: "SEO Services | OCTADECENT — Rank Higher, Grow Faster",
    description:
      "Technical SEO, on-page optimization, link building, and content strategy to dominate search rankings and drive organic growth.",
    url: "https://octadecent.com/seo-services",
    siteName: "OCTADECENT",
    images: [{ url: "https://octadecent.com/og-image.png", width: 1200, height: 630, alt: "OCTADECENT SEO Services" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | OCTADECENT — Rank Higher, Grow Faster",
    description: "Technical SEO, link building, and content strategy to dominate search rankings by OCTADECENT.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function SeoServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
