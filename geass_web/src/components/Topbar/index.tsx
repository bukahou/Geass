"use client";

import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

export default function Topbar() {
  return (
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

      {/* ✅ 右侧：用户操作区 */}
      <UserMenu />
    </header>
  );
}
