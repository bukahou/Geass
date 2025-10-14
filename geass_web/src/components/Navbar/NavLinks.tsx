"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useUserStore } from "@/store/userStore";
import { Home, Film, Tv, Video, Disc, Clapperboard, Music } from "lucide-react";

/**
 * ============================================
 * 📋 导航配置表
 * --------------------------------------------
 * - 可控显示顺序
 * - 支持权限字段 protected: true 表示 role >= 2 才可见
 * ============================================
 */
const links = [
  { href: "/", label: "首页", icon: Home },
  { href: "/anime", label: "动漫", icon: Clapperboard },
  { href: "/video", label: "视频", icon: Video, protected: true },
  { href: "/ura-anime", label: "里番", icon: Film, protected: true },
  { href: "/threed", label: "3D", icon: Disc, protected: true },
  { href: "#", label: "电视剧", icon: Tv },
  { href: "#", label: "音乐", icon: Music },
];

export default function NavLinks() {
  const pathname = usePathname();
  const user = useUserStore((state) => state.user);
  const role = user?.role ?? 1; // 未登录默认为1

  return (
    <ul className="flex flex-col space-y-2 px-3 mt-2">
      {links.map(({ href, label, icon: Icon, protected: isProtected }) => {
        // 🚫 权限判断
        if (isProtected && role < 2) return null;

        const isActive = pathname === href;

        return (
          <li key={`${href}-${label}`}>
            <Link
              href={href}
              className={clsx(
                "flex items-center gap-3 rounded-md px-4 py-3 text-[15px] font-semibold tracking-wide transition-all duration-200",
                isActive
                  ? "bg-blue-500/15 text-blue-400 shadow-[inset_2px_0_0_#3b82f6]"
                  : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="leading-none">{label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
