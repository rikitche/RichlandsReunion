// components/PolaroidGallery.tsx
"use client";
import Image from "next/image";
import { Picture } from "@/hooks/types";

export default function PolaroidGallery({ images }: { images: Picture[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-10">
      {images.map((pic, i) => {
        const rotate = (Math.random() - 0.5) * 10; // random tilt
        return (
          <div
            key={i}
            className="bg-white/50 p-3 shadow-xl rounded-sm transition-transform hover:scale-105"
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <Image
              src={pic.src}
              width={300}
              height={300}
              alt="photo"
              className="rounded-sm"
            />
            <p className="text-center text-black mt-2 font-bold text-sm">
              {pic.caption}
            </p>
          </div>
        );
      })}
    </div>
  );
}
