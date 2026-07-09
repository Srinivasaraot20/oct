import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | OCTADECENT — Full-Stack Digital Solutions",
  description:
    "Discover the full range of services offered by OCTADECENT — from AI development and web engineering to mobile apps, e-commerce, SEO, and UI/UX design. One partner for all your digital needs in Hyderabad, Telangana, India.",
  keywords: [
    "OCTADECENT services",
    "AI development services",
    "web development India",
    "mobile app services",
    "ecommerce development services",
    "digital marketing services",
    "UI UX design services",
    "software company services",
    "IT services Hyderabad",
    "full-stack digital solutions Telangana",
    "custom software development services India",
    "cloud computing services Hyderabad",
    "business automation solutions India",
    "end-to-end IT solutions provider Hyderabad",
    "best digital services company Hyderabad India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Technology",
  alternates: {
    canonical: "https://octadecent.com/services",
  },
  openGraph: {
    title: "Our Services | OCTADECENT — Full-Stack Digital Solutions",
    description:
      "AI, web, mobile, e-commerce, SEO, and UI/UX services — one partner for all your digital needs.",
    url: "https://octadecent.com/services",
    siteName: "OCTADECENT",
    images: [{ url: "https://octadecent.com/og-image.png", width: 1200, height: 630, alt: "OCTADECENT Services" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | OCTADECENT — Full-Stack Digital Solutions",
    description: "AI, web, mobile, e-commerce, SEO, and UI/UX services — one partner for all your digital needs.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
