"use client";

import { useState } from "react";
import type { UraAnimeInfo } from "@/types/uraAnime";
import UraAnimeCard from "./UraAnimeCard";
import UraAnimeDetailModal from "./UraAnimeDetailModal";

interface UraAnimeGridProps {
  uraAnimes: UraAnimeInfo[];
}

export default function UraAnimeGrid({ uraAnimes }: UraAnimeGridProps) {
  const [selectedUraAnime, setSelectedUraAnime] = useState<UraAnimeInfo | null>(
    null
  );

  return (
    <>
      <div
        className="
          w-full grid gap-6
          grid-cols-2 md:grid-cols-4 xl:grid-cols-5
        "
      >
        {uraAnimes.map((item) => (
          <UraAnimeCard
            key={item.uraAnimeID}
            uraAnime={item}
            onClick={() => setSelectedUraAnime(item)}
          />
        ))}
      </div>

      {selectedUraAnime && (
        <UraAnimeDetailModal
          uraAnime={selectedUraAnime}
          onClose={() => setSelectedUraAnime(null)}
        />
      )}
    </>
  );
}
