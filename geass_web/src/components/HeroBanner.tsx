// src/components/HeroBanner.tsx
"use client";

interface HeroBannerProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export default function HeroBanner({
  imageSrc,
  title,
  subtitle,
}: HeroBannerProps) {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      {/* 背景图片 */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ 内容区域（与 AnimeGrid 对齐） */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-0 h-full flex flex-col justify-end pb-16">
        <h2 className="text-4xl font-bold text-white drop-shadow-md">
          {title}
        </h2>
        <p className="mt-2 text-gray-300 text-sm">{subtitle}</p>
      </div>

      {/* ✅ 底部渐变过渡（柔和过渡到页面背景） */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0e1319]" />
    </section>
  );
}
