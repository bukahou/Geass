// src/components/Player/PlayerHeader.tsx
"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Heart } from "lucide-react";
import { usePlayer } from "./PlayerContext";

export default function PlayerHeader() {
  const router = useRouter();
  const { title } = usePlayer();

  return (
    <header className="sticky top-0 z-40 w-full flex items-center justify-between px-6 py-4 bg-[#0e1319]/80 backdrop-blur-md border-b border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
      >
        <ArrowLeft size={22} />
        <span className="text-sm font-semibold">返回</span>
      </button>
      <h1 className="text-lg font-bold text-gray-100 truncate max-w-[60%] text-center">
        {title}
      </h1>
      <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition">
        <Heart size={20} />
        <span className="text-sm">收藏</span>
      </button>
    </header>
  );
}
