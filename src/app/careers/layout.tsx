import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | OCTADECENT — Join Our Team of Innovators",
  description:
    "Explore exciting career opportunities at OCTADECENT in Hyderabad, Telangana. Join a team of passionate engineers, designers, and strategists building the future of AI, web, and mobile technology in India.",
  keywords: [
    "OCTADECENT careers",
    "jobs at OCTADECENT Hyderabad",
    "software engineer jobs India",
    "AI developer jobs Hyderabad",
    "web developer jobs Hyderabad Telangana",
    "tech jobs India",
    "work at OCTADECENT",
    "IT career opportunities Hyderabad",
    "machine learning engineer jobs India",
    "frontend developer jobs Telangana",
    "backend developer careers Hyderabad",
    "digital marketing jobs India",
    "OCTADECENT hiring",
    "startup jobs Hyderabad India",
    "full stack developer jobs Hyderabad",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Careers",
  alternates: {
    canonical: "https://octadecent.com/careers",
  },
  openGraph: {
    title: "Careers | OCTADECENT — Join Our Team of Innovators",
    description:
      "Explore exciting career opportunities at OCTADECENT in Hyderabad and join a team of passionate engineers building the future of AI and technology in India.",
    url: "https://octadecent.com/careers",
    siteName: "OCTADECENT",
    images: [
      {
        url: "https://octadecent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at OCTADECENT — Hyderabad, Telangana, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | OCTADECENT — Join Our Team",
    description:
      "Join a team of passionate engineers, designers, and strategists building the future of AI, web, and mobile technology at OCTADECENT, Hyderabad.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
