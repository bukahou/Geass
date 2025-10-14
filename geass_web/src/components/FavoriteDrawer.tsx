"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface FavoriteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoriteDrawer({
  isOpen,
  onClose,
}: FavoriteDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-[3px] animate-fadeIn">
        {/* ✅ 抽屉主体 */}
        <div className="w-[400px] h-full bg-gradient-to-b from-[#1a1f2b]/95 to-[#0f141b]/95 border-l border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.5)] animate-slideIn overflow-y-auto relative rounded-tl-2xl rounded-bl-2xl custom-scrollbar">
          {/* ✅ 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* ✅ 标题区 */}
          <div className="px-6 pt-8 pb-4 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white text-center">
              我的收藏
            </h2>
          </div>

          {/* ✅ 收藏内容列表 */}
          <div className="space-y-4 px-5 pt-6 pb-10">
            {[1, 2, 3, 4, 5].map((id) => (
              <div
                key={id}
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-all duration-300 p-3 rounded-xl shadow-sm hover:shadow-md cursor-pointer"
              >
                <Image
                  src={`/images/sample-${id}.jpg`}
                  alt={`Favorite ${id}`}
                  width={90}
                  height={55}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-100 line-clamp-2">
                    收藏视频标题 {id}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">点击播放</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ 自定义滚动条 */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.35);
        }
        .custom-scrollbar {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
