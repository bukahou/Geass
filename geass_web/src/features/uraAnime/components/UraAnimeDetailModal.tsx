"use client";

import Image from "next/image";
import type { UraAnimeInfo } from "@/types/uraAnime";
import { Dialog } from "@headlessui/react";
import { buildImageUrl, buildVideoUrls } from "@/utils/mediaUrlBuilder";

interface Props {
  uraAnime: UraAnimeInfo | null;
  onClose: () => void;
}

export default function UraAnimeDetailModal({ uraAnime, onClose }: Props) {
  if (!uraAnime) return null;

  const imageUrl = buildImageUrl(uraAnime.imageURL);
  const videoUrls = buildVideoUrls(uraAnime.videoURL, 5); // 仅展示前5个

  return (
    <Dialog
      open={!!uraAnime}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <Dialog.Panel className="bg-white rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden">
        <div className="relative w-full aspect-video">
          <Image
            src={imageUrl}
            alt={uraAnime.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{uraAnime.title}</h2>
          <p className="text-sm text-gray-600">📅 {uraAnime.releaseDate}</p>

          <div className="flex gap-6 text-sm text-gray-700">
            <span>🎬 类型：{uraAnime.remarks}</span>
            <span>❤️ {uraAnime.favoriteCount}</span>
            <span>👁 {uraAnime.views}</span>
          </div>

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

          <div className="flex justify-end">
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
