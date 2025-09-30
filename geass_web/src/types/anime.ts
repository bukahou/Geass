// 单个动漫条目
export interface AnimeItem {
  animeID: number;
  animeType: string;
  cnName: string;
  jpName: string;
  description: string;
  folderURL: string;
  imageURL: string;
  episodes: number;
  favoriteCount: number;
  viewCount: number;
  releaseDate: string;
}

// 分页结果
export interface AnimePage {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  data: AnimeItem[];
}

// 分页请求
export interface PageParams {
  page: number;
  pageSize: number;
}
