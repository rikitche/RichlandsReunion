"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/breaking-bad.jpg",
    caption: "Series finale of Breaking Bad",
  },
  {
    src: "/xbox-one.jpg",
    caption: "Release of the Xbox One",
  },
  {
    src: "/thrift-shop.jpg",
    caption:
      "Best performing single of 2013: 'Thrift Shop' by Macklemore & Ryan Lewis",
  },
  {
    src: "/bruno-mars.jpg",
    caption:
      "Bruno Mars wins his 5th number one single on the Billboard 100 with 'When I Was Your Man'",
  },
  {
    src: "/frozen.jpg",
    caption: "Top grossing film of 2013: 'Frozen' from Disney",
  },
  {
    src: "/wallstreet.jpg",
    caption: "'The Wolf of Wall Street' hit theaters December 25th",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg leading-snug break-words">
      {/* Image */}
      <div className="relative h-[500px]">
        <Image
          src={images[current].src}
          alt={images[current].caption}
          fill
          className="object-cover object-center w-full h-full transition-transform duration-[5000ms] ease-out scale-105"
          style={{
            transform: "scale(1)",
            animation: "zoomOut 5s ease-out forwards",
          }}
        />
        {/* Overlay tint */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Caption */}
        <div className="absolute bottom-8 left-8 right-8 text-white text-2xl font-bebas drop-shadow-lg">
          {images[current].caption}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots (optional) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
