"use client";

export default function AnimeGrid() {
  const mockData = [
    { id: 1, title: "进击的巨人", img: "/mock/aot.jpg" },
    { id: 2, title: "鬼灭之刃", img: "/mock/demon_slayer.jpg" },
    { id: 3, title: "海贼王", img: "/mock/one_piece.jpg" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {mockData.map((anime) => (
        <div
          key={anime.id}
          className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
          <img
            src={anime.img}
            alt={anime.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-2 text-center text-sm font-medium">
            {anime.title}
          </div>
        </div>
      ))}
    </div>
  );
}
