import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation | OCTADECENT — Talk to Our Experts",
  description:
    "Schedule a free strategy consultation with OCTADECENT experts in Hyderabad, India. Discuss your AI, web development, mobile app, or digital transformation project and get a tailored solution roadmap.",
  keywords: [
    "book consultation OCTADECENT",
    "free tech consultation India",
    "software project consultation Hyderabad",
    "AI consultation services",
    "web development consultation India",
    "schedule meeting OCTADECENT",
    "digital transformation consultation Hyderabad",
    "free strategy session software company",
    "mobile app consultation India",
    "IT project planning Hyderabad Telangana",
    "OCTADECENT expert consultation",
    "hire software developers India",
    "technology consultation Telangana",
    "custom software consultation Hyderabad",
    "business automation consultation India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Services",
  alternates: {
    canonical: "https://octadecent.com/book-consultation",
  },
  openGraph: {
    title: "Book a Free Consultation | OCTADECENT — Talk to Our Experts",
    description:
      "Schedule a free strategy consultation with OCTADECENT experts in Hyderabad. Get a tailored roadmap for your AI, web, or mobile project.",
    url: "https://octadecent.com/book-consultation",
    siteName: "OCTADECENT",
    images: [
      {
        url: "https://octadecent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Book a Free Consultation with OCTADECENT — Hyderabad, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation | OCTADECENT",
    description:
      "Schedule a free strategy consultation with OCTADECENT experts in Hyderabad and get a tailored solution roadmap.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function BookConsultationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
