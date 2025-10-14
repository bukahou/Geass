"use client";

import { useVideoData, VideoGrid } from "@/features/video";

export default function VideoPage() {
  const { videos, loading, page, totalPages, changePage } = useVideoData();

  return (
    <div className="min-h-screen bg-[#0e1319] text-gray-100">
      <div className="max-w-[1400px] mx-auto px-0 relative z-10">
        <h1 className="text-2xl font-bold text-blue-400 mt-10 mb-6">
          视频排行榜（按观看量排序）
        </h1>

        {loading ? (
          <p className="text-center text-gray-400 mt-10">加载中...</p>
        ) : (
          <VideoGrid videos={videos} />
        )}

        {/* ✅ 分页控制 */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => changePage(page - 1)}
            disabled={page <= 1}
            className={`px-4 py-2 rounded-lg border transition ${
              page <= 1
                ? "text-gray-500 border-gray-700 cursor-not-allowed"
                : "text-blue-400 border-blue-500 hover:bg-blue-500/10"
            }`}
          >
            上一页
          </button>

          <span className="text-gray-400 text-sm">
            第 {page} / {totalPages} 页
          </span>

          <button
            onClick={() => changePage(page + 1)}
            disabled={page >= totalPages}
            className={`px-4 py-2 rounded-lg border transition ${
              page >= totalPages
                ? "text-gray-500 border-gray-700 cursor-not-allowed"
                : "text-blue-400 border-blue-500 hover:bg-blue-500/10"
            }`}
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}
