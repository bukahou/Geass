"use client";

import Image from "next/image";
import type { VideoInfo } from "@/types/video";
import { buildImageUrl } from "@/utils/mediaUrlBuilder";

interface VideoCardProps {
  video: VideoInfo;
  onClick?: (id: number) => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  const imageUrl = buildImageUrl(video.imageURL);

  return (
    <div
      onClick={() => onClick?.(video.videoID)}
      className="
        group bg-white rounded-xl overflow-hidden
        shadow-md hover:shadow-xl hover:-translate-y-1
        transition-all duration-200 cursor-pointer
      "
    >
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={imageUrl}
          alt={video.videoName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:brightness-110"
        />
      </div>

      <div className="p-3">
        <h3 className="text-base font-semibold truncate text-gray-800">
          {video.videoName}
        </h3>
        <p className="text-xs text-gray-500 truncate">{video.leadingActors}</p>

        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span className="group-hover:text-gray-600 transition-colors">
            ❤️ {video.favoriteCount}
          </span>
          <span className="group-hover:text-gray-600 transition-colors">
            👁 {video.viewCount}
          </span>
        </div>
      </div>
    </div>
  );
}
