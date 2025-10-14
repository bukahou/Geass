"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Heart } from "lucide-react";

interface PlayerHeaderProps {
  title: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function PlayerHeader({
  title,
  isFavorite = false,
  onToggleFavorite,
}: PlayerHeaderProps) {
  const router = useRouter();

  return (
    <header
      className="
        sticky top-0 z-40 w-full
        flex items-center justify-between
        px-6 py-4
        bg-[#0e1319]/80 backdrop-blur-md
        border-b border-white/10
        shadow-[0_2px_10px_rgba(0,0,0,0.5)]
      "
    >
      {/* 返回按钮 */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
      >
        <ArrowLeft size={22} />
        <span className="text-sm font-semibold">返回</span>
      </button>

      {/* 标题 */}
      <h1 className="text-lg font-bold text-gray-100 truncate max-w-[60%] text-center">
        {title}
      </h1>

      {/* 收藏按钮 */}
      <button
        onClick={onToggleFavorite}
        className={`flex items-center gap-1 transition ${
          isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-400"
        }`}
      >
        <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
        <span className="text-sm">{isFavorite ? "已收藏" : "收藏"}</span>
      </button>
    </header>
  );
}
