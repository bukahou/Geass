// src/components/Navbar/UserMenu.tsx
"use client";

import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-gray-200 w-8 h-8"
      />
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow border rounded p-2">
          <p className="text-sm">登录</p>
          <p className="text-sm mt-2">设置</p>
        </div>
      )}
    </div>
  );
}
