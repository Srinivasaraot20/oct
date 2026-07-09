import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development | OCTADECENT — iOS & Android Apps",
  description:
    "Create world-class iOS and Android mobile applications with OCTADECENT in Hyderabad, India. We build high-performance, user-centric native and cross-platform apps that drive engagement, retention, and revenue.",
  keywords: [
    "mobile app development India",
    "iOS app development Hyderabad",
    "Android app development India",
    "React Native development Hyderabad",
    "cross-platform app development India",
    "custom mobile app Hyderabad",
    "OCTADECENT mobile apps",
    "app development company Hyderabad Telangana",
    "Flutter app development India",
    "mobile UI/UX design Hyderabad",
    "enterprise mobile app development India",
    "app store optimization Hyderabad",
    "mobile app maintenance services India",
    "native app development Telangana",
    "on-demand app development Hyderabad India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "OCTADECENT" }],
  category: "Mobile Development",
  alternates: {
    canonical: "https://octadecent.com/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development | OCTADECENT — iOS & Android Apps",
    description:
      "High-performance, user-centric native and cross-platform iOS & Android apps that drive engagement, retention, and revenue by OCTADECENT, Hyderabad.",
    url: "https://octadecent.com/mobile-app-development",
    siteName: "OCTADECENT",
    images: [
      {
        url: "https://octadecent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "OCTADECENT Mobile App Development — Hyderabad, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | OCTADECENT",
    description:
      "High-performance iOS & Android apps built by OCTADECENT in Hyderabad to drive engagement and revenue.",
    images: ["https://octadecent.com/og-image.png"],
  },
};

export default function MobileAppDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
