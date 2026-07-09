import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | OCTADECENT — Insights on AI, Web & Tech Trends",
  description:
    "Explore the OCTADECENT blog for expert insights, industry analysis, and practical guides on artificial intelligence, web development, mobile apps, digital marketing, and modern software engineering from Hyderabad, India.",
  keywords: [
    "OCTADECENT blog",
    "AI blog India",
    "web development articles",
    "tech insights Hyderabad",
    "software development blog India",
    "digital marketing tips and guides",
    "mobile app development blog",
    "artificial intelligence tutorials India",
    "machine learning blog Hyderabad",
    "technology news Telangana",
    "OCTADECENT tech articles",
    "software engineering best practices",
    "startup tech blog India",
    "cloud computing insights Hyderabad",
    "IT industry trends India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Blog",
  alternates: {
    canonical: "https://octadecent.com/blog",
  },
  openGraph: {
    title: "Blog | OCTADECENT — Insights on AI, Web & Tech Trends",
    description:
      "Expert insights, industry analysis, and practical guides on AI, web development, mobile apps, and modern software engineering from OCTADECENT, Hyderabad.",
    url: "https://octadecent.com/blog",
    siteName: "OCTADECENT",
    images: [
      {
        url: "https://octadecent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "OCTADECENT Blog — Tech Insights from Hyderabad, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | OCTADECENT — Insights on AI, Web & Tech Trends",
    description:
      "Expert insights on AI, web development, mobile apps, and modern software engineering from the OCTADECENT team in Hyderabad, India.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
