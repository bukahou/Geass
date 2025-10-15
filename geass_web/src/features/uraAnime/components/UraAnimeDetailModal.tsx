// src/features/uraAnime/components/UraAnimeDetailModal.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { UraAnimeInfo } from "@/types/uraAnime";
import { Dialog } from "@headlessui/react";
import { buildImageUrl, buildVideoUrls } from "@/utils/mediaUrlBuilder";

interface Props {
  uraAnime: UraAnimeInfo | null;
  onClose: () => void;
}

export default function UraAnimeDetailModal({ uraAnime, onClose }: Props) {
  const router = useRouter();
  if (!uraAnime) return null;

  // ✅ 拼接资源路径
  const imageUrl = buildImageUrl(uraAnime.imageURL);
  const videoUrls = buildVideoUrls(uraAnime.videoURL, 1); // 单集作品

  /** ▶ 点击播放 */
  const handlePlay = () => {
    const initData = {
      id: uraAnime.uraAnimeID,
      title: uraAnime.title,
      description: uraAnime.remarks || "无", // ✅ 用 remarks 作为介绍
      folderURL: uraAnime.videoURL,
      totalEpisodes: 1,
    };

    const encoded = encodeURIComponent(JSON.stringify(initData));
    router.push(`/player?data=${encoded}`);
    onClose();
  };

  return (
    <Dialog
      open={!!uraAnime}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <Dialog.Panel className="bg-white rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden">
        {/* 封面 */}
        <div className="relative w-full aspect-video">
          <Image
            src={imageUrl}
            alt={uraAnime.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 内容 */}
        <div className="p-6 space-y-4">
          {/* 标题与发布日期 */}
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-gray-900">
              {uraAnime.title}
            </h2>
            <p className="text-sm text-gray-500">📅 {uraAnime.releaseDate}</p>
          </div>

          {/* 简介（remarks） */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 leading-relaxed">
            {uraAnime.remarks ? uraAnime.remarks : "暂无简介"}
          </div>

          {/* 统计信息 */}
          <div className="flex gap-6 text-sm text-gray-700">
            <span>❤️ 收藏：{uraAnime.favoriteCount}</span>
            <span>👁 浏览：{uraAnime.views}</span>
          </div>

          {/* 预览链接 */}
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold text-gray-900">资源链接（测试）</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {videoUrls.map((url, i) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    第 {i + 1} 集：{url}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 操作按钮 */}
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
