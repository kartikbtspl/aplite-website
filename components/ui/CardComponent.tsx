"use client";
import Image from "next/image";
import { useState } from "react";

type CardComponentProps = {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
};

export default function CardComponent({
  imageSrc,
  title = "White labeling",
  subtitle = "Put your brand at the forefront of all applications, products and statements.",
}: CardComponentProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative group">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.4) 100%)",
          backgroundSize: "200% 200%",
          animation: "shine 2s infinite",
        }}
      />
      {/* Top Section */}
      <div className="relative w-full px-4 pt-6 pb-4 flex-1 rounded-3xl overflow-hidden">
        {/* Conditional Image or Gradient */}
        {!imageSrc || imageError ? (
          <div
            className="w-full h-full flex items-center rounded-xl justify-center"
            style={{
              background: "linear-gradient(135deg, #120d61 0%, #4914FF 100%)",
            }}
          >
            {/* <p className="text-white/80 text-sm italic">Image unavailable</p> */}
          </div>
        ) : (
          <div className="relative w-full h-full flex justify-center items-center z-10">
            <Image
              src={imageSrc}
              alt={title}
              width={700}
              height={400}
              className="w-full h-auto rounded-xl object-contain"
              onError={() => setImageError(true)} // Fallback if the image fails to load
            />
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="px-6 pb-6 pt-3">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}
