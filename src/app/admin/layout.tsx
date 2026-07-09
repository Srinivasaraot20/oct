import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | OCTADECENT",
  description:
    "OCTADECENT internal administration dashboard. Manage content, projects, team, and site settings.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://octadecent.com/admin",
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
