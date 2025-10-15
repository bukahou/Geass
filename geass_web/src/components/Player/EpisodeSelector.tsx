// src/components/Player/EpisodeSelector.tsx
"use client";
import { usePlayer } from "./PlayerContext";

export default function EpisodeSelector() {
  const { totalEpisodes, currentEpisode, setEpisode } = usePlayer();
  if (totalEpisodes <= 1) return null;

  return (
    <div className="mt-6 px-4">
      <h2 className="text-gray-300 text-sm mb-2">选集</h2>
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#3b82f6]/30 scrollbar-track-transparent">
        {Array.from({ length: totalEpisodes }, (_, i) => (
          <button
            key={i}
            onClick={() => setEpisode(i + 1)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition
              ${
                currentEpisode === i + 1
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-[#1a2233] text-gray-300 hover:bg-blue-500/30"
              }`}
          >
            第 {i + 1} 话
          </button>
        ))}
      </div>
    </div>
  );
}
