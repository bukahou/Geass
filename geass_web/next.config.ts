import type { NextConfig } from "next";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

const nextConfig: NextConfig = {
  // ✅ 跳过构建时 ESLint 检查
  eslint: {
    ignoreDuringBuilds: true,
  },

  output: "standalone",

  images: {
    /** ✅ 允许加载外部图片的域名 */
    domains: ["atlhyper.com", "www.atlhyper.com", "localhost", "127.0.0.1"],
  },

  async rewrites() {
    return [
      {
        // ✅ 匹配除 _next、静态资源外的所有路径并代理到后端
        source: "/:path((?!_next|static|images|favicon\\.ico|videos|assets).*)",
        destination: `${API_BASE}/:path*`,
      },
    ];
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "https://atlhyper.com";

// const nextConfig: NextConfig = {
//   // ✅ 跳过构建时 ESLint 检查
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   output: "standalone",

//   images: {
//     /** ✅ 允许加载外部图片的域名 */
//     domains: ["atlhyper.com", "www.atlhyper.com", "localhost", "127.0.0.1"],
//   },

//   async rewrites() {
//     return [
//       {
//         // ✅ 匹配除 _next、静态资源外的所有路径并代理到后端
//         source: "/:path((?!_next|static|images|favicon\\.ico|videos|assets).*)",
//         destination: `${API_BASE}/:path*`,
//       },
//     ];
//   },
// };

// export default nextConfig;
