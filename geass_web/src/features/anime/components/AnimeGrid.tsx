"use client";

import { useState } from "react";
import type { AnimeInfo } from "@/types/anime";
import AnimeCard from "./AnimeCard";
import AnimeDetailModal from "./AnimeDetailModal";
// import Image from "next/image";
// import { buildImageUrl } from "@/utils/mediaUrlBuilder";

interface AnimeGridProps {
  animes: AnimeInfo[];
}

export default function AnimeGrid({ animes }: AnimeGridProps) {
  const [selectedAnime, setSelectedAnime] = useState<AnimeInfo | null>(null);

  return (
    <>
      {/* ✅ 直接使用 w-full grid，不再包裹 flex + max-w */}
      <div
        className="
          w-full
          grid
          gap-6
          grid-cols-2
          md:grid-cols-4
          xl:grid-cols-5
        "
      >
        {animes.map((anime) => (
          <AnimeCard
            key={anime.animeID}
            anime={anime}
            onClick={() => setSelectedAnime(anime)}
          />
        ))}
      </div>

      {/* ✅ 弹窗详情 */}
      {selectedAnime && (
        <AnimeDetailModal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </>
  );
}
