import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | OCTADECENT — Meet the Minds Behind the Innovation",
  description:
    "Get to know the talented team at OCTADECENT — the engineers, designers, strategists, and visionaries working together in Hyderabad, Telangana, India to build cutting-edge AI and digital solutions for businesses worldwide.",
  keywords: [
    "OCTADECENT team",
    "software engineers India",
    "AI team Hyderabad",
    "tech company team",
    "OCTADECENT founders",
    "developers India",
    "Hyderabad software developers",
    "Telangana tech talent",
    "UI UX designers Hyderabad",
    "digital strategists India",
    "full-stack engineers Hyderabad India",
    "machine learning engineers Telangana",
    "experienced tech team India",
    "OCTADECENT leadership and management",
    "top software development team Hyderabad",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Business",
  alternates: {
    canonical: "https://octadecent.com/team",
  },
  openGraph: {
    title: "Our Team | OCTADECENT — Meet the Minds Behind the Innovation",
    description:
      "Meet the engineers, designers, and strategists at OCTADECENT building cutting-edge AI and digital solutions.",
    url: "https://octadecent.com/team",
    siteName: "OCTADECENT",
    images: [{ url: "https://octadecent.com/og-image.png", width: 1200, height: 630, alt: "OCTADECENT Team" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | OCTADECENT — Meet the Minds Behind the Innovation",
    description: "Meet the engineers, designers, and strategists at OCTADECENT building cutting-edge digital solutions.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
