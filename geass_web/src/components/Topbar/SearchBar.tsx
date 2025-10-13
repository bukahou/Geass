"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
        relative w-[360px] max-w-[480px]
        flex items-center
      "
    >
      <input
        type="text"
        placeholder="搜索动漫、剧集..."
        className="
          w-full h-10 pl-4 pr-10 rounded-full
          bg-white/10 text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-400/70
          transition-all duration-200
        "
      />
      <Search
        className="
          absolute right-3 text-gray-300
          hover:text-white transition-colors
        "
        size={18}
      />
    </div>
  );
}
