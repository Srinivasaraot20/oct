import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | OCTADECENT — Explore Our Built Solutions",
  description:
    "Explore the projects built by OCTADECENT — from AI-powered platforms and enterprise web applications to mobile apps, e-commerce stores, and digital marketing campaigns delivered from Hyderabad, Telangana, India.",
  keywords: [
    "OCTADECENT projects",
    "software projects India",
    "AI projects",
    "web app projects",
    "mobile app portfolio",
    "built projects OCTADECENT",
    "completed software projects Hyderabad",
    "enterprise solutions Telangana",
    "AI-powered platform development India",
    "React Next.js project examples",
    "e-commerce store development projects",
    "digital transformation projects India",
    "SaaS product development Hyderabad",
    "custom web application case studies",
    "innovative tech projects Hyderabad India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Technology",
  alternates: {
    canonical: "https://octadecent.com/projects",
  },
  openGraph: {
    title: "Projects | OCTADECENT — Explore Our Built Solutions",
    description:
      "Explore AI platforms, enterprise web apps, mobile apps, and e-commerce stores built by OCTADECENT.",
    url: "https://octadecent.com/projects",
    siteName: "OCTADECENT",
    images: [{ url: "https://octadecent.com/og-image.png", width: 1200, height: 630, alt: "OCTADECENT Projects" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | OCTADECENT — Explore Our Built Solutions",
    description: "AI platforms, enterprise web apps, mobile apps, and e-commerce stores built by OCTADECENT.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
