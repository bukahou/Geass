"use client";

import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-[#2a3545] w-8 h-8 border border-gray-600"
      />
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#2a3545] text-gray-200 shadow border border-gray-600 rounded p-2">
          <p className="text-sm hover:text-blue-400 cursor-pointer">登录</p>
          <p className="text-sm mt-2 hover:text-blue-400 cursor-pointer">
            设置
          </p>
        </div>
      )}
    </div>
  );
}
