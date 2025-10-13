"use client";

import { useState } from "react";
import Image from "next/image";
import type { AnimeInfo } from "@/types/anime";
import AnimeDetailModal from "./AnimeDetailModal";
import { buildImageUrl } from "@/utils/mediaUrlBuilder";

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
        {animes.map((anime) => {
          const fullImageURL = buildImageUrl(anime.imageURL);

          return (
            <div
              key={anime.animeID}
              onClick={() => setSelectedAnime(anime)}
              className="
                bg-white 
                rounded-lg 
                overflow-hidden 
                shadow-sm 
                hover:shadow-lg 
                cursor-pointer 
                transition 
                transform 
                hover:-translate-y-1 
                duration-200
              "
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={fullImageURL}
                  alt={anime.cnName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3">
                <h3
                  className="text-sm font-semibold text-gray-800 truncate"
                  title={anime.cnName}
                >
                  {anime.cnName}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  ❤ {anime.favoriteCount} · 👁‍🗨 {anime.viewCount} · 共{" "}
                  {anime.episodes} 话
                </p>
              </div>
            </div>
          );
        })}
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
