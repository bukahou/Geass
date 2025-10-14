// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     /** ✅ 允许加载外部图片的域名 */
//     domains: ["atlhyper.com", "www.atlhyper.com", "localhost", "127.0.0.1"],
//   },

//   async rewrites() {
//     return [
//       {
//         source: "/public/:path*",
//         destination: `${
//           process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080"
//         }/public/:path*`, // ✅ 注意这里用模板字符串拼接
//       },
//     ];
//   },
// };

// export default nextConfig;

// next.config.ts
import type { NextConfig } from "next";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

const nextConfig: NextConfig = {
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
