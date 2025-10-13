import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** ✅ 允许加载外部图片的域名 */
    domains: ["atlhyper.com", "www.atlhyper.com", "localhost", "127.0.0.1"],
  },

  async rewrites() {
    return [
      {
        source: "/public/:path*",
        destination: `${
          process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080"
        }/public/:path*`, // ✅ 注意这里用模板字符串拼接
      },
    ];
  },
};

export default nextConfig;
