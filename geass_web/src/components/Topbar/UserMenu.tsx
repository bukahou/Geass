"use client";

import { useState } from "react";
import LoginModal from "@/components/Auth/LoginModal";

export default function UserMenu() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex items-center gap-6 text-gray-300">
      <button
        onClick={() => setShowLogin(true)}
        className="
          px-4 py-1 rounded-full bg-white text-black
          font-medium text-sm hover:bg-gray-200 transition-colors
        "
      >
        登录
      </button>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}
