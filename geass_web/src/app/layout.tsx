import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="bg-[#0e1319]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0e1319] text-gray-100`}
      >
        {/* 左侧竖栏：固定，顶端开始 */}
        <Navbar />
        <Topbar />
        <main className="min-h-screen bg-[#0e1319] ml-[220px] pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
