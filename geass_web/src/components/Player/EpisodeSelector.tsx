"use client";

interface EpisodeSelectorProps {
  total: number;
  current: number;
  onSelect: (ep: number) => void;
}

export default function EpisodeSelector({
  total,
  current,
  onSelect,
}: EpisodeSelectorProps) {
  return (
    <div className="mt-6 px-4">
      <h2 className="text-gray-300 text-sm mb-2">选集</h2>
      <div
        className="
          flex gap-2 overflow-x-auto pb-3
          scrollbar-thin scrollbar-thumb-[#3b82f6]/30 scrollbar-track-transparent
        "
      >
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i + 1)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition
              ${
                current === i + 1
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
