"use client";

import Image from "next/image";
import type { UraAnimeInfo } from "@/types/uraAnime";
import { buildImageUrl } from "@/utils/mediaUrlBuilder";

interface UraAnimeCardProps {
  uraAnime: UraAnimeInfo;
  onClick?: (id: number) => void;
}

export default function UraAnimeCard({ uraAnime, onClick }: UraAnimeCardProps) {
  const imageUrl = buildImageUrl(uraAnime.imageURL);

  return (
    <div
      onClick={() => onClick?.(uraAnime.uraAnimeID)}
      className="
        group bg-white rounded-xl overflow-hidden
        shadow-md hover:shadow-xl hover:-translate-y-1
        transition-all duration-200 cursor-pointer
      "
    >
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={imageUrl}
          alt={uraAnime.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:brightness-110"
        />
      </div>

      <div className="p-3">
        <h3 className="text-base font-semibold truncate text-gray-800">
          {uraAnime.title}
        </h3>
        <p className="text-xs text-gray-500 truncate">{uraAnime.remarks}</p>

        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span className="group-hover:text-gray-600 transition-colors">
            ❤️ {uraAnime.favoriteCount}
          </span>
          <span className="group-hover:text-gray-600 transition-colors">
            👁 {uraAnime.views}
          </span>
        </div>
      </div>
    </div>
  );
}
