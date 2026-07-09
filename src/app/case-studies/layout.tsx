import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | OCTADECENT — Real Results for Real Clients",
  description:
    "Explore OCTADECENT's case studies showcasing how we've helped businesses achieve measurable results through AI, custom software, web development, and digital transformation strategies from Hyderabad, India.",
  keywords: [
    "OCTADECENT case studies",
    "software development success stories India",
    "AI project results Hyderabad",
    "web development portfolio India",
    "digital transformation case study",
    "tech project outcomes India",
    "OCTADECENT client success stories",
    "enterprise software case study Hyderabad",
    "mobile app development portfolio India",
    "ecommerce project results Telangana",
    "machine learning case study India",
    "custom software project portfolio",
    "business automation success stories Hyderabad",
    "OCTADECENT project showcase",
    "IT solutions case studies Telangana India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Portfolio",
  alternates: {
    canonical: "https://octadecent.com/case-studies",
  },
  openGraph: {
    title: "Case Studies | OCTADECENT — Real Results for Real Clients",
    description:
      "Explore how OCTADECENT has helped businesses achieve measurable results through AI, custom software, and digital transformation from Hyderabad, India.",
    url: "https://octadecent.com/case-studies",
    siteName: "OCTADECENT",
    images: [
      {
        url: "https://octadecent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "OCTADECENT Case Studies — Client Success Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | OCTADECENT — Real Results for Real Clients",
    description:
      "Explore how OCTADECENT has delivered measurable results through AI, custom software, and digital transformation from Hyderabad, India.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
