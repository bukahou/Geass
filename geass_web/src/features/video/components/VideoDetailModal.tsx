// src/features/video/components/VideoDetailModal.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { VideoInfo } from "@/types/video";
import { Dialog } from "@headlessui/react";
import { buildImageUrl, buildVideoUrls } from "@/utils/mediaUrlBuilder";

interface VideoDetailModalProps {
  video: VideoInfo | null;
  onClose: () => void;
}

export default function VideoDetailModal({
  video,
  onClose,
}: VideoDetailModalProps) {
  const router = useRouter();
  if (!video) return null;

  // ✅ 拼接完整图片与视频URL（默认展示前5个）
  const imageUrl = buildImageUrl(video.imageURL);
  const videoUrls = buildVideoUrls(video.folderURL, 1); // 固定为单集

  /** ▶ 点击播放 */
  const handlePlay = () => {
    const initData = {
      id: video.videoID,
      title: video.videoName,
      description: "无", // 无剧情介绍
      folderURL: video.folderURL,
      totalEpisodes: 1, // 单集
    };

    const encoded = encodeURIComponent(JSON.stringify(initData));
    router.push(`/player?data=${encoded}`);
    onClose();
  };

  return (
    <Dialog
      open={!!video}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <Dialog.Panel className="bg-white rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden">
        {/* 封面 */}
        <div className="relative w-full aspect-video">
          <Image
            src={imageUrl}
            alt={video.videoName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 信息 */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {video.videoName}
          </h2>
          <p className="text-gray-600 text-sm italic">{video.leadingActors}</p>

          <div className="flex gap-6 text-sm text-gray-700">
            <span>🎬 类型：{video.videoType}</span>
            <span>❤️ {video.favoriteCount}</span>
            <span>👁 {video.viewCount}</span>
          </div>

          {/* ✅ 测试资源预览 */}
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold text-gray-900">资源预览</h3>
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
