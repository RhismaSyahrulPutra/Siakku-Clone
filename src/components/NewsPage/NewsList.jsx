import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function NewsList({ berita, scrollRef, onScroll }) {
  return (
    <div className="relative">
      {/* Tombol Scroll Kiri */}
      <button
        onClick={() => onScroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      {/* List Berita */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {berita.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-72 bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-700">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Scroll Kanan */}
      <button
        onClick={() => onScroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}

export default NewsList;
