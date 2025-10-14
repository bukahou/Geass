"use client";

import { useState } from "react";
import type { VideoInfo } from "@/types/video";
import VideoCard from "./VideoCard";
import VideoDetailModal from "./VideoDetailModal";

interface VideoGridProps {
  videos: VideoInfo[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoInfo | null>(null);

  return (
    <>
      <div
        className="
          w-full grid gap-6
          grid-cols-2 md:grid-cols-4 xl:grid-cols-5
        "
      >
        {videos.map((video) => (
          <VideoCard
            key={video.videoID}
            video={video}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>

      {selectedVideo && (
        <VideoDetailModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
