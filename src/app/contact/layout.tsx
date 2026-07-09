import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | OCTADECENT — Get in Touch With Our Team",
  description:
    "Have a project in mind? Contact OCTADECENT in Hyderabad, Telangana today. Reach out via email, phone, or our contact form to discuss your AI, web development, mobile app, or digital strategy needs.",
  keywords: [
    "contact OCTADECENT",
    "OCTADECENT email address",
    "hire software company India",
    "get in touch OCTADECENT Hyderabad",
    "software company contact India",
    "AI company contact Hyderabad",
    "OCTADECENT phone number",
    "IT company contact Telangana",
    "software development inquiry India",
    "web development quote Hyderabad",
    "mobile app development contact India",
    "OCTADECENT office Hyderabad Telangana",
    "hire developers Hyderabad India",
    "digital marketing inquiry India",
    "technology partner contact Hyderabad",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Contact",
  alternates: {
    canonical: "https://octadecent.com/contact",
  },
  openGraph: {
    title: "Contact Us | OCTADECENT — Get in Touch With Our Team",
    description:
      "Reach out to OCTADECENT in Hyderabad to discuss your AI, web, mobile app, or digital strategy project. We're ready to help.",
    url: "https://octadecent.com/contact",
    siteName: "OCTADECENT",
    images: [
      {
        url: "https://octadecent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact OCTADECENT — Hyderabad, Telangana, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | OCTADECENT — Hyderabad, India",
    description:
      "Reach out to OCTADECENT in Hyderabad to discuss your AI, web, or mobile app project. We're ready to help.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
