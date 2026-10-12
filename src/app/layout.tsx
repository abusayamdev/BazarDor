
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";

import "./globals.css";

// Google Font
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind-siliguri",
});

// Website Metadata
export const metadata: Metadata = {
  title: {
    default: "বাজার দর | BazarDor",
    template: "%s | বাজার দর",
  },

  description:
    "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর, দামের পরিবর্তন এবং বাজারভিত্তিক মূল্য জানুন।",

  icons: {
    icon: "/images/logo-icon.png",
  },
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      data-theme="bazardor"
      className={hindSiliguri.variable}
    >
      <body
        className="
          min-h-screen bg-base-100
          font-sans text-base-content
          antialiased
        "
      >
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-[calc(100vh-68px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
