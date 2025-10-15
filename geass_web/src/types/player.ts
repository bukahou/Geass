// src/types/player.ts
export interface PlayerInitData {
  id: number; // animeID
  title: string; // cnName
  description: string; // description
  folderURL: string; // 用于 buildVideoUrls
  totalEpisodes: number; // episodes
  initialEpisode?: number; // 可选：默认第几集，不传则为 1
}

export interface PlayerContextValue {
  id: number;
  title: string;
  description: string;
  totalEpisodes: number;

  currentEpisode: number; // 当前第几集（1-based）
  videoURLs: string[]; // 全部可播直链（由 folderURL + totalEpisodes 生成）
  src: string; // 当前播放地址（由 videoURLs 派生）

  setEpisode: (ep: number) => void;
  next: () => void;
  prev: () => void;
}
