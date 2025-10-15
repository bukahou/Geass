// src/features/anime/components/AnimeDetailModal.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { AnimeInfo } from "@/types/anime";
import { Dialog } from "@headlessui/react";
import { buildImageUrl, buildVideoUrls } from "@/utils/mediaUrlBuilder";

interface AnimeDetailModalProps {
  anime: AnimeInfo | null;
  onClose: () => void;
}

export default function AnimeDetailModal({
  anime,
  onClose,
}: AnimeDetailModalProps) {
  const router = useRouter();

  if (!anime) return null;

  // ✅ 拼接完整资源 URL
  const fullImageURL = buildImageUrl(anime.imageURL);
  const videoURLs = buildVideoUrls(anime.folderURL, anime.episodes);

  /**
   * 🎬 点击播放按钮
   * 方案：携带必要播放数据，通过 URL state 跳转给 PlayerRoot 使用
   */
  const handlePlay = () => {
    const initData = {
      id: anime.animeID,
      title: anime.cnName,
      description: anime.description,
      folderURL: anime.folderURL,
      totalEpisodes: anime.episodes,
    };

    // 使用 router.push 携带序列化参数
    const encoded = encodeURIComponent(JSON.stringify(initData));
    router.push(`/player?data=${encoded}`);
    onClose();
  };

  return (
    <Dialog
      open={!!anime}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <Dialog.Panel className="bg-white rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden">
        {/* 封面 */}
        <div className="relative w-full aspect-video">
          <Image
            src={fullImageURL}
            alt={anime.cnName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 内容 */}
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

          {/* ✅ 视频预览 */}
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold text-gray-900">资源预览（前 5 集）</h3>
            <ul className="list-disc pl-5 space-y-1 max-h-40 overflow-auto text-sm">
              {videoURLs.slice(0, 5).map((u, idx) => (
                <li key={u} className="text-blue-600 break-all">
                  第 {idx + 1} 集：{u}
                </li>
              ))}
            </ul>
            {videoURLs.length > 5 && (
              <div className="text-xs text-gray-500 mt-1">
                … 共 {videoURLs.length} 集，仅展示前 5 个
              </div>
            )}
          </div>

          {/* ✅ 操作按钮 */}
          <div className="flex justify-end pt-4 gap-3">
            <button
              onClick={handlePlay}
              className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              ▶ 立即播放
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
              关闭
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
