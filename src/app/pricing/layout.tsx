import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | OCTADECENT — Transparent Plans & Packages",
  description:
    "View OCTADECENT's transparent pricing plans for AI development, web development, mobile apps, SEO, and digital marketing services. Flexible packages designed for startups to enterprises in Hyderabad, Telangana, India and globally.",
  keywords: [
    "OCTADECENT pricing",
    "software development cost India",
    "web development packages",
    "AI development pricing",
    "mobile app cost India",
    "digital marketing packages",
    "affordable software development",
    "pricing plans Hyderabad",
    "IT services cost Telangana",
    "cheap web development packages India",
    "startup software development pricing",
    "enterprise software cost Hyderabad",
    "SEO service packages India",
    "custom software development rates",
    "best value IT services Hyderabad India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Business",
  alternates: {
    canonical: "https://octadecent.com/pricing",
  },
  openGraph: {
    title: "Pricing | OCTADECENT — Transparent Plans & Packages",
    description:
      "Transparent pricing for AI, web, mobile, and digital marketing services. Flexible packages for startups to enterprises.",
    url: "https://octadecent.com/pricing",
    siteName: "OCTADECENT",
    images: [{ url: "https://octadecent.com/og-image.png", width: 1200, height: 630, alt: "OCTADECENT Pricing" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | OCTADECENT — Transparent Plans & Packages",
    description: "Transparent pricing for AI, web, mobile, and digital marketing services by OCTADECENT.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
