"use client";

import { useState } from "react";
import type { ThreeDInfo } from "@/types/threed";
import ThreeDCard from "./ThreeDCard";
import ThreeDDetailModal from "./ThreeDDetailModal";

interface ThreeDGridProps {
  threeDs: ThreeDInfo[];
}

export default function ThreeDGrid({ threeDs }: ThreeDGridProps) {
  const [selected, setSelected] = useState<ThreeDInfo | null>(null);

  return (
    <>
      <div
        className="
          w-full grid gap-6
          grid-cols-2 md:grid-cols-4 xl:grid-cols-5
        "
      >
        {threeDs.map((item) => (
          <ThreeDCard
            key={item.threeDID}
            threeD={item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {selected && (
        <ThreeDDetailModal
          threeD={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
