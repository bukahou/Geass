// src/components/Player/AnimeDescription.tsx
"use client";
import { usePlayer } from "./PlayerContext";

export default function AnimeDescription() {
  const { description } = usePlayer();
  return (
    <div className="mt-8 px-4 py-4 bg-[#111827]/60 rounded-xl border border-white/10">
      <h2 className="text-blue-400 text-lg font-semibold mb-2">剧情简介</h2>
      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
        {description || "暂无简介"}
      </p>
    </div>
  );
}
