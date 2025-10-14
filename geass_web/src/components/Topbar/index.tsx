"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import FavoriteDrawer from "../FavoriteDrawer";

export default function Topbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 h-16 z-40
          flex items-center justify-between
          px-6 bg-[#0e1319]/5 backdrop-blur-md
          border-b border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.4)]
        "
      >
        {/* ✅ 中间：搜索框 */}
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>

        {/* ✅ 右侧：收藏文字按钮 + 用户菜单 */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setDrawerOpen(true)}
            className="
              text-gray-300 hover:text-blue-400 text-base font-semibold
              transition-colors
            "
          >
            收藏
          </button>

          <UserMenu />
        </div>
      </header>

      {/* ✅ 收藏抽屉（放在页面级别） */}
      <FavoriteDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
