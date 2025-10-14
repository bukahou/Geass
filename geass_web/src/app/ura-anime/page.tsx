"use client";

import { useUraAnimeData, UraAnimeGrid } from "@/features/uraAnime";
import HeroBanner from "@/components/HeroBanner";

export default function UraAnimePage() {
  const { uraAnimes, loading, page, totalPages, changePage } =
    useUraAnimeData();

  // ✅ 使用 lifan 文件夹的图片
  const lifanImages = [
    "/images/lifan/1.png",
    "/images/lifan/2.png",
    "/images/lifan/3.png",
    "/images/lifan/4.png",
  ];

  return (
    <div className="min-h-screen bg-[#0e1319] text-gray-100">
      {/* ✅ 顶部横幅（粉色风格） */}
      <HeroBanner
        images={lifanImages}
        title="里番推荐"
        subtitle="每日更新精选 3D・里番作品，发现隐藏的宝藏动画！"
        interval={4000}
      />

      {/* ✅ 主体内容 */}
      <div className="max-w-[1400px] mx-auto px-0 relative z-10">
        <h1 className="text-2xl font-bold text-pink-400 mt-10 mb-6">
          里番推荐（按发布日期排序）
        </h1>

        {loading ? (
          <p className="text-center text-gray-400 mt-10">加载中...</p>
        ) : (
          <UraAnimeGrid uraAnimes={uraAnimes} />
        )}

        {/* ✅ 分页控制 */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => changePage(page - 1)}
            disabled={page <= 1}
            className={`px-4 py-2 rounded-lg border transition ${
              page <= 1
                ? "text-gray-500 border-gray-700 cursor-not-allowed"
                : "text-pink-400 border-pink-500 hover:bg-pink-500/10"
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
                : "text-pink-400 border-pink-500 hover:bg-pink-500/10"
            }`}
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}
