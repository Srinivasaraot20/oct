import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | OCTADECENT — Our Work & Projects",
  description:
    "Browse OCTADECENT's portfolio of completed projects spanning AI applications, enterprise web platforms, mobile apps, e-commerce stores, and digital marketing campaigns delivered for clients across industries in Hyderabad, India and worldwide.",
  keywords: [
    "OCTADECENT portfolio",
    "software projects India",
    "web development projects",
    "AI project portfolio",
    "mobile app projects",
    "ecommerce portfolio",
    "OCTADECENT work",
    "portfolio Hyderabad",
    "best software projects Telangana",
    "enterprise web platform case studies",
    "digital marketing campaign results India",
    "AI application showcase Hyderabad",
    "custom software portfolio India",
    "client project gallery OCTADECENT",
    "top IT company portfolio Hyderabad India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Technology",
  alternates: {
    canonical: "https://octadecent.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | OCTADECENT — Our Work & Projects",
    description:
      "Browse OCTADECENT's portfolio of AI, web, mobile, and e-commerce projects delivered for clients across industries.",
    url: "https://octadecent.com/portfolio",
    siteName: "OCTADECENT",
    images: [{ url: "https://octadecent.com/og-image.png", width: 1200, height: 630, alt: "OCTADECENT Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | OCTADECENT — Our Work & Projects",
    description: "AI, web, mobile, and e-commerce projects delivered for clients across industries by OCTADECENT.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
