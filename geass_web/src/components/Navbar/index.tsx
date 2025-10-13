"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <aside
      className="fixed top-0 left-0 h-full w-60 z-50 flex flex-col justify-between 
                     bg-transparent backdrop-blur-md shadow-md p-4"
    >
      {/* 上部：Logo + 导航 */}
      <div>
        <Logo />
        <nav className="mt-6 space-y-4">
          <NavLinks />
        </nav>
      </div>

      {/* 中部：搜索栏 */}
      <div className="my-6">
        <input
          type="text"
          placeholder="搜索番剧..."
          className="w-full px-3 py-2 text-sm rounded-md border border-gray-600 
                     bg-[#2a3545]/60 text-gray-200 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 下部：收藏、历史、用户菜单 */}
      <div className="flex flex-col space-y-3 text-gray-200">
        <Link href="/favorites" className="text-sm hover:text-blue-400">
          收藏
        </Link>
        <Link href="/history" className="text-sm hover:text-blue-400">
          历史
        </Link>
        <UserMenu />
      </div>
    </aside>
  );
}
