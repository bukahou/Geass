import { AnimeGrid, AnimeFilters } from "@/features/anime";

export default function AnimePage() {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {/* 左边：图片展示 */}
      <div className="col-span-3">
        <AnimeGrid />
      </div>

      {/* 右边：筛选 */}
      <div className="col-span-1">
        <AnimeFilters />
      </div>
    </div>
  );
}
