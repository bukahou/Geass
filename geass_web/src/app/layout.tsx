import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AtlHyper",
  description: "Anime Platform - Powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="bg-[#0e1319]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0e1319] text-gray-100`}
      >
        <Navbar />
        <main className="ml-60 min-h-screen p-6 bg-[#0e1319]">{children}</main>
      </body>
    </html>
  );
}
