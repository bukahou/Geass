"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Home, Film, Tv, Video, Disc, Clapperboard, Music } from "lucide-react";

const links = [
  { href: "/", label: "首页", icon: Home },
  { href: "/anime", label: "动漫", icon: Clapperboard },
  { href: "#", label: "电视剧", icon: Tv },
  { href: "#", label: "Video", icon: Video },
  { href: "#", label: "里番", icon: Film },
  { href: "#", label: "3D", icon: Disc },
  { href: "#", label: "音乐", icon: Music },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col space-y-2 px-3 mt-2">
      {links.map(({ href, label, icon: Icon }) => (
        <li key={`${href}-${label}`}>
          <Link
            href={href}
            className={clsx(
              // ✅ 居中布局 + 字体增大
              "flex items-center gap-3 rounded-md px-4 py-3 text-[15px] font-semibold tracking-wide transition-all duration-200",
              pathname === href
                ? "bg-blue-500/15 text-blue-400 shadow-[inset_2px_0_0_#3b82f6]"
                : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
            )}
          >
            <Icon className="h-5 w-5 shrink-0" /> {/* ✅ 图标稍大、固定宽度 */}
            <span className="leading-none">{label}</span>{" "}
            {/* ✅ 字体垂直居中 */}
          </Link>
        </li>
      ))}
    </ul>
  );
}
