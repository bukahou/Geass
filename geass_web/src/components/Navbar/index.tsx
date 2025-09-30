// src/components/Navbar/index.tsx
"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-3 flex items-center bg-white dark:bg-black shadow-md">
      {/* 左侧：Logo + 导航 */}
      <div className="flex items-center space-x-6">
        <Logo />
        <NavLinks />
      </div>

      {/* 中间：搜索栏 */}
      <div className="flex-1 flex justify-center px-6">
        <input
          type="text"
          placeholder="搜索番剧..."
          className="w-full max-w-md px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 右侧：收藏 + 历史 + 用户菜单 */}
      <div className="flex items-center space-x-4">
        <Link href="/favorites" className="text-sm hover:underline">
          收藏
        </Link>
        <Link href="/history" className="text-sm hover:underline">
          历史
        </Link>
        <UserMenu />
      </div>
    </header>
  );
}
