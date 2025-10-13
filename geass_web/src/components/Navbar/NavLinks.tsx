"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "首页" },
  { href: "/anime", label: "番剧" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-3">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            "text-sm transition-colors",
            pathname === href
              ? "font-bold text-blue-400"
              : "text-gray-300 hover:text-blue-400"
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
