"use client";

export default function AnimeFilters() {
  return (
    <aside className="space-y-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <h2 className="font-semibold text-lg">筛选</h2>

      <div>
        <label className="block text-sm font-medium mb-1">类型</label>
        <select className="w-full p-2 border rounded">
          <option>全部</option>
          <option>动作</option>
          <option>恋爱</option>
          <option>科幻</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">年份</label>
        <input
          type="number"
          placeholder="2025"
          className="w-full p-2 border rounded"
        />
      </div>

      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        应用筛选
      </button>
    </aside>
  );
}
