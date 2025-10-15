// src/components/Player/PlayerContext.tsx
"use client";

import { createContext, useContext } from "react";
import type { PlayerContextValue } from "@/types/player";

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({
  value,
  children,
}: {
  value: PlayerContextValue; // ✅ 直接接收完整上下文值
  children: React.ReactNode;
}) {
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

export function usePlayer(): PlayerContextValue {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
