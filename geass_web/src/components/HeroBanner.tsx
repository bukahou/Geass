"use client";

import { useEffect, useState } from "react";

interface HeroBannerProps {
  images: string[];
  title: string;
  subtitle: string;
  interval?: number;
}

export default function HeroBanner({
  images,
  title,
  subtitle,
  interval = 4000,
}: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // ✅ 切换逻辑（不重建组件）
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      const next = (currentIndex + 1) % images.length;
      setPrevIndex(currentIndex);
      setCurrentIndex(next);
      setIsAnimating(true);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, currentIndex]);

  // ✅ 动画完成后清理状态
  useEffect(() => {
    if (!isAnimating) return;
    const timeout = setTimeout(() => setIsAnimating(false), 1200);
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  if (images.length === 0) {
    return (
      <div className="w-full h-[520px] flex items-center justify-center text-gray-400">
        没有找到图片
      </div>
    );
  }

  const currentImage = images[currentIndex];
  const previousImage =
    prevIndex !== null ? images[prevIndex % images.length] : null;

  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      {/* ✅ 底层上一张图片 */}
      {previousImage && (
        <img
          src={previousImage}
          alt="previous"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out ${
            isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          style={{ zIndex: 5 }}
        />
      )}

      {/* ✅ 上层当前图片（淡入） */}
      <img
        src={currentImage}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out ${
          isAnimating ? "opacity-100 scale-100" : "opacity-100 scale-100"
        }`}
        style={{ zIndex: 10 }}
      />

      {/* ✅ 内容层 */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-0 h-full flex flex-col justify-end pb-16">
        <h2 className="text-4xl font-bold text-white drop-shadow-md">
          {title}
        </h2>
        <p className="mt-2 text-gray-300 text-sm">{subtitle}</p>
      </div>

      {/* ✅ 底部渐变 */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0e1319] z-30" />

      {/* ✅ 圆点指示器 */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? "bg-blue-400 scale-125"
                  : "bg-gray-500/40 scale-100"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
