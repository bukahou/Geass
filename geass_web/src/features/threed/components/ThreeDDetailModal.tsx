// src/features/threed/components/ThreeDDetailModal.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { ThreeDInfo } from "@/types/threed";
import { Dialog } from "@headlessui/react";
import { buildImageUrl, buildVideoUrls } from "@/utils/mediaUrlBuilder";

interface Props {
  threeD: ThreeDInfo | null;
  onClose: () => void;
}

export default function ThreeDDetailModal({ threeD, onClose }: Props) {
  const router = useRouter();
  if (!threeD) return null;

  // ✅ 拼接完整路径
  const imageUrl = buildImageUrl(threeD.imageURL);
  const videoUrls = buildVideoUrls(threeD.videoURL, 1); // 单集作品

  /** ▶ 点击播放 */
  const handlePlay = () => {
    const initData = {
      id: threeD.threeDID,
      title: threeD.cnTitle,
      description: threeD.remarks || "无", // ✅ 使用 remarks 作为剧情简介
      folderURL: threeD.videoURL, // ✅ 实际播放路径
      totalEpisodes: 1, // ✅ 单集
    };

    const encoded = encodeURIComponent(JSON.stringify(initData));
    router.push(`/player?data=${encoded}`);
    onClose();
  };

  return (
    <Dialog
      open={!!threeD}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <Dialog.Panel className="bg-white rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden">
        {/* 封面 */}
        <div className="relative w-full aspect-video">
          <Image
            src={imageUrl}
            alt={threeD.cnTitle}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 内容区域 */}
        <div className="p-6 space-y-4">
          {/* 标题与副标题 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {threeD.cnTitle}
            </h2>
            <p className="text-gray-600 text-sm italic">{threeD.jpTitle}</p>
          </div>

          {/* 简介（remarks） */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 leading-relaxed">
            {threeD.remarks ? threeD.remarks : "暂无简介"}
          </div>

          {/* 作品信息 */}
          <div className="flex gap-6 text-sm text-gray-700">
            <span>📅 {threeD.releaseDate}</span>
            <span>❤️ {threeD.favoriteCount}</span>
            <span>👁 {threeD.views}</span>
          </div>

          {/* 资源预览 */}
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold text-gray-900">资源预览（测试）</h3>
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
