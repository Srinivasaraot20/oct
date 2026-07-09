import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

// ─── Fonts — display:swap prevents FOIT, subset reduces file size ───────────
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800"],   // Removed 600 — only 700 & 800 used in headings
  display: "swap",          // Show fallback font immediately, swap when loaded
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "OCTADECENT | AI, Web & Mobile App Development Company in India",
    template: "%s | OCTADECENT",
  },
  description: "OCTADECENT is a premier AI Development Company, Software Development Company, and Web Development Company based in Hyderabad, India. We offer custom software development services, mobile app development, e-commerce solutions, digital marketing, UI/UX design, and enterprise digital transformation solutions.",
  keywords: [
    "AI development company",
    "AI development company India",
    "AI development company Hyderabad",
    "software development company India",
    "web development company",
    "web development company Hyderabad",
    "mobile app development India",
    "custom software development",
    "digital transformation",
    "OCTADECENT",
    "ecommerce development India",
    "enterprise AI solutions",
    "best software company India",
    "IT company Hyderabad",
    "technology company Telangana",
    "full stack development India",
    "React Next.js development",
    "startup software partner India",
    "SaaS development India",
    "digital marketing company Hyderabad",
    "SEO services India",
    "UI UX design company",
    "quick commerce solutions",
    "business automation India",
    "machine learning development",
    "cloud solutions India",
  ],
  authors: [{ name: "OCTADECENT", url: "https://octadecent.com" }],
  creator: "OCTADECENT",
  publisher: "OCTADECENT Private Limited",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://octadecent.com",
  },
  openGraph: {
    title: "OCTADECENT | AI, Web & Mobile App Development Company in India",
    description: "18 Companies. One Vision. Infinite Commerce. Scalable, high-performance E-commerce, Quick Commerce, and Enterprise AI solutions. Custom software, mobile apps, digital marketing & more from Hyderabad, India.",
    url: "https://octadecent.com",
    siteName: "OCTADECENT",
    images: [
      {
        url: "https://octadecent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "OCTADECENT — AI, Web & Mobile App Development Company in India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OCTADECENT | AI, Web & Mobile App Development Company",
    description: "18 Companies. One Vision. Infinite Commerce. Custom software, AI, mobile apps, e-commerce & digital marketing from Hyderabad, India.",
    images: ["https://octadecent.com/og-image.png"],
    creator: "@octadecent",
  },
  metadataBase: new URL("https://octadecent.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OCTADECENT",
    "legalName": "OCTADECENT Private Limited",
    "alternateName": ["Octadecent AI", "Octadecent Software"],
    "url": "https://octadecent.com",
    "logo": "https://octadecent.com/favicon.ico",
    "description": "OCTADECENT is an elite AI Development Company and Software Development Company specializing in custom software, enterprise web solutions, mobile apps, and digital transformation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@octadecent.co",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/octadecent",
      "https://x.com/octadecent"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OCTADECENT",
    "url": "https://octadecent.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://octadecent.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "OCTADECENT"
    },
    "serviceType": [
      "AI Development",
      "Web Development",
      "Mobile App Development",
      "E-Commerce Development",
      "Digital Marketing",
      "Quick Commerce Solutions"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-inter bg-background-dark text-white select-none selection:bg-primary/30 selection:text-white">
        {/* Structured Data — Organization, WebSite, Service schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}

