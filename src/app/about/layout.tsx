import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | OCTADECENT — Our Story, Mission & Vision",
  description:
    "Learn about OCTADECENT — our founding story, core mission, company values, and the passionate team driving AI, web, and mobile innovation from Hyderabad, Telangana across India and beyond.",
  keywords: [
    "about OCTADECENT",
    "OCTADECENT company profile",
    "software company India",
    "AI company Hyderabad",
    "web development company about",
    "OCTADECENT mission and vision",
    "tech company India",
    "IT company Hyderabad Telangana",
    "software development firm Hyderabad",
    "OCTADECENT team",
    "technology startup India",
    "digital innovation company Hyderabad",
    "best software company Telangana",
    "OCTADECENT founding story",
    "custom software development company India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Company",
  alternates: {
    canonical: "https://octadecent.com/about",
  },
  openGraph: {
    title: "About Us | OCTADECENT — Our Story, Mission & Vision",
    description:
      "Learn about OCTADECENT — our founding story, core mission, company values, and the passionate team driving AI, web, and mobile innovation from Hyderabad, India.",
    url: "https://octadecent.com/about",
    siteName: "OCTADECENT",
    images: [
      {
        url: "https://octadecent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About OCTADECENT — Software Company in Hyderabad, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | OCTADECENT — Our Story, Mission & Vision",
    description:
      "Learn about OCTADECENT — our founding story, core mission, and the team driving AI, web, and mobile innovation from Hyderabad, India.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
