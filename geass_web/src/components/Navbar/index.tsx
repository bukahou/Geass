"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <aside
      className="fixed top-0 left-0 h-full w-[220px] z-50 flex flex-col
             bg-[#0e1319]/80 backdrop-blur-md select-none
             shadow-[0_0_15px_rgba(0,0,0,0.5)]
             border-r border-transparent
             after:content-[''] after:absolute after:top-0 after:right-0 after:w-4 after:h-full
             after:bg-gradient-to-r after:from-[#0e1319]/80 after:to-transparent after:z-50"
    >
      {/* ✅ 上部：Logo + 导航 */}
      <div className="flex flex-col flex-grow">
        {/* ✅ 使用 Logo 组件 */}
        <div className="h-24 flex items-center justify-start px-4">
          <Logo />
        </div>

        <nav className="mt-2 flex-grow">
          <NavLinks />
        </nav>
      </div>
    </aside>
  );
}
