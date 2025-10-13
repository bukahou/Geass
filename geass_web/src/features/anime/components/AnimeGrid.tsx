"use client";

import { useState } from "react";
import Image from "next/image";
import type { AnimeInfo } from "@/types/anime";
import AnimeDetailModal from "./AnimeDetailModal";
import { buildImageUrl } from "@/utils/mediaUrlBuilder"; // ✅ 新增导入

interface AnimeGridProps {
  animes: AnimeInfo[];
}

export default function AnimeGrid({ animes }: AnimeGridProps) {
  const [selectedAnime, setSelectedAnime] = useState<AnimeInfo | null>(null);

  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div
          className="
            w-full
            max-w-[1400px]
            grid
            gap-6
            px-4
            sm:px-6
            md:px-8
            grid-cols-2
            md:grid-cols-4
            xl:grid-cols-5
          "
        >
          {animes.map((anime) => {
            const fullImageURL = buildImageUrl(anime.imageURL); // ✅ 拼接完整 URL

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
                    src={fullImageURL} // ✅ 使用拼接后的完整路径
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
      </div>

      {/* 弹窗详情 */}
      {selectedAnime && (
        <AnimeDetailModal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </>
  );
}
