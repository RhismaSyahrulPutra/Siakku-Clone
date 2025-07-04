import React, { useRef } from "react";
import { Newspaper } from "lucide-react";
import { beritaUtama, beritaLainnya } from "../data/NewsData";
import MainNews from "../components/NewsPage/MainNews";
import NewsList from "../components/NewsPage/NewsList";

function NewsPage() {
  const scrollRef = useRef(null);

  const handleScroll = direction => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-gray-50 p-6 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <Newspaper className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          Berita
        </h1>
      </div>

      {/* Berita Utama */}
      <MainNews berita={beritaUtama} />

      {/* Berita Lainnya */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Berita Lainnya
      </h3>
      <NewsList
        berita={beritaLainnya}
        scrollRef={scrollRef}
        onScroll={handleScroll}
      />
    </div>
  );
}

export default NewsPage;
