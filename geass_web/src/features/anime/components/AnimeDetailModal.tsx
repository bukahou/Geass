// src/features/anime/components/AnimeDetailModal.tsx
"use client";

import Image from "next/image";
import type { AnimeInfo } from "@/types/anime";
import { Dialog } from "@headlessui/react";
import { buildImageUrl, buildVideoUrls } from "@/utils/mediaUrlBuilder";

interface AnimeDetailModalProps {
  anime: AnimeInfo | null; // 选中的动漫
  onClose: () => void; // 关闭回调
}

export default function AnimeDetailModal({
  anime,
  onClose,
}: AnimeDetailModalProps) {
  if (!anime) return null;

  // ✅ 测试环境：现场拼接完整资源 URL
  const fullImageURL = buildImageUrl(anime.imageURL);
  const videoURLs = buildVideoUrls(anime.folderURL, anime.episodes);

  return (
    <Dialog
      open={!!anime}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <Dialog.Panel
        className="
          bg-white rounded-xl shadow-2xl w-[90%] max-w-3xl
          overflow-hidden
        "
      >
        {/* 封面 */}
        <div className="relative w-full aspect-video">
          <Image
            src={fullImageURL} // ✅ 使用拼接后的完整图片 URL
            alt={anime.cnName}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        {/* 信息 */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{anime.cnName}</h2>
          <p className="text-gray-600 text-sm italic">{anime.jpName}</p>

          <div className="text-gray-700 text-sm leading-relaxed max-h-48 overflow-y-auto">
            {anime.description || "暂无简介"}
          </div>

          <div className="flex flex-wrap gap-6 text-gray-700 text-sm">
            <span>🎬 类型：{anime.animeType}</span>
            <span>📅 上映：{anime.releaseDate}</span>
            <span>📺 共 {anime.episodes} 话</span>
            <span>❤️ {anime.favoriteCount}</span>
            <span>👁‍🗨 {anime.viewCount}</span>
          </div>

          {/* ✅ 资源链接（测试用） */}
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold text-gray-900">资源链接（测试）</h3>

            {/* 图片直链 */}
            <div className="text-sm">
              <div className="text-gray-500">封面图：</div>
              <a
                className="text-blue-600 break-all hover:underline"
                href={fullImageURL}
                target="_blank"
                rel="noreferrer"
              >
                {fullImageURL}
              </a>
            </div>

            {/* 视频直链（展示前 5 个，太多会撑爆弹窗） */}
            <div className="text-sm">
              <div className="text-gray-500">视频（前 5 集）：</div>
              <ul className="list-disc pl-5 space-y-1 max-h-40 overflow-auto">
                {videoURLs.slice(0, 5).map((u, idx) => (
                  <li key={u}>
                    <a
                      className="text-blue-600 break-all hover:underline"
                      href={u}
                      target="_blank"
                      rel="noreferrer"
                    >
                      第 {idx + 1} 集：{u}
                    </a>
                  </li>
                ))}
              </ul>
              {videoURLs.length > 5 && (
                <div className="text-xs text-gray-500 mt-1">
                  … 共 {videoURLs.length} 集，仅展示前 5 个
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              关闭
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
