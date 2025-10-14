"use client";

import { useThreeDData, ThreeDGrid } from "@/features/threed";
import HeroBanner from "@/components/HeroBanner";

export default function ThreeDPage() {
  const { threeDs, loading, page, totalPages, changePage } = useThreeDData();

  // ✅ 使用 public/images/3D 下的图片作为横幅
  const threeDImages = [
    "/images/3D/1.png",
    "/images/3D/2.png",
    "/images/3D/3D-ni.png",
  ];

  return (
    <div className="min-h-screen bg-[#0e1319] text-gray-100">
      {/* ✅ 顶部横幅（绿色科技风） */}
      <HeroBanner
        images={threeDImages}
        title="3D 动画精选"
        subtitle="高质量 3D 动画与虚拟世界，沉浸体验新维度"
        interval={4500}
      />

      {/* ✅ 主体内容 */}
      <div className="max-w-[1400px] mx-auto px-0 relative z-10">
        <h1 className="text-2xl font-bold text-emerald-400 mt-10 mb-6">
          3D 视频专区（按观看量排序）
        </h1>

        {loading ? (
          <p className="text-center text-gray-400 mt-10">加载中...</p>
        ) : (
          <ThreeDGrid threeDs={threeDs} />
        )}

        {/* ✅ 分页控制 */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => changePage(page - 1)}
            disabled={page <= 1}
            className={`px-4 py-2 rounded-lg border transition ${
              page <= 1
                ? "text-gray-500 border-gray-700 cursor-not-allowed"
                : "text-emerald-400 border-emerald-500 hover:bg-emerald-500/10"
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
                : "text-emerald-400 border-emerald-500 hover:bg-emerald-500/10"
            }`}
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}
