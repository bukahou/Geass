// src/components/Navbar/NavLinks.tsx
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
    <nav className="space-x-4">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            "text-sm hover:underline",
            pathname === href ? "font-bold text-blue-500" : "text-gray-700"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
