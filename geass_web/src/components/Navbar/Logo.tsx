"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
        flex items-center gap-3 pl-4 py-4 select-none
        hover:scale-105 transition-transform duration-300
      "
    >
      {/* ✅ 图片部分 */}
      <div
        className="
          relative flex items-center justify-center
          h-10 w-10 rounded-lg overflow-hidden
          shadow-[0_0_15px_rgba(255,0,0,0.5)]
        "
      >
        <Image
          src="/images/logo-geass.png" // ✅ 你的图片路径
          alt="Geass Logo"
          width={40}
          height={40}
          className="
            object-contain
            drop-shadow-[0_0_8px_rgba(255,0,0,0.7)]
            transition-transform duration-300
            hover:scale-110
          "
          priority
        />
      </div>

      {/* ✅ 文字部分 */}
      <span
        className="
          text-lg font-extrabold tracking-wider
          text-white
          drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]
          hover:text-red-400 transition-colors
        "
      >
        Geass
      </span>
    </Link>
  );
}
