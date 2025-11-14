"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type CardData = {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
};

type CardFlowAnimationProps = {
  cards: CardData[];
};

export default function CardFlowAnimation({ cards }: CardFlowAnimationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Set initial mobile/tablet state - vertical layout for medium and below
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cards.length, isPaused]);



  return (
    <div 
      className="relative w-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-visible py-4 sm:py-6 md:py-8"
    >
      {cards.map((card, index) => {
        const position = (index - activeIndex + cards.length) % cards.length;
        
        let transform = "";
        let zIndex = 0;
        let opacity = 0.3;
        let scale = 0.7;

        if (position === 0) {
          // Front card - center
          transform = "translateX(0px) translateY(0px)";
          zIndex = 30;
          opacity = 1;
          scale = 1;
        } else if (position === 1) {
          // Next card - mobile: below, desktop: right
          transform = isMobile ? "translateX(0px) translateY(140px)" : "translateX(360px) translateY(30px)";
          zIndex = 20;
          opacity = 0.5;
          scale = 0.85;
        } else if (position === cards.length - 1) {
          // Previous card - mobile: above, desktop: left
          transform = isMobile ? "translateX(0px) translateY(-140px)" : "translateX(-360px) translateY(30px)";
          zIndex = 20;
          opacity = 0.5;
          scale = 0.85;
        } else {
          // Hidden cards behind
          transform = isMobile ? "translateX(0px) translateY(40px)" : "translateX(0px) translateY(40px)";
          zIndex = 10 - position;
          opacity = Math.max(0.1, 0.3 - position * 0.1);
          scale = Math.max(0.6, 0.8 - position * 0.05);
        }

        return (
          <div
            key={index}
            className="absolute transition-all duration-700 ease-spring cursor-pointer w-[85vw] max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[450px]"
            style={{
              transform: `${transform} scale(${scale})`,
              zIndex,
              opacity
            }}
            onMouseEnter={() => {
              if (!hasBeenHovered) {
                setActiveIndex(index);
                setHasBeenHovered(true);
              }
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
              setHasBeenHovered(false);
            }}
          >
            <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
              <div className="relative w-full pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4 md:px-6 rounded-2xl overflow-hidden">
                {card.imageSrc ? (
                  <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 flex justify-center items-center">
                    <Image
                      src={card.imageSrc}
                      alt={card.title || "Card image"}
                      width={700}
                      height={400}
                      className="w-full h-full rounded-lg object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="w-full h-full flex items-center rounded-xl justify-center"
                    style={{
                      background: "linear-gradient(135deg, #120d61 0%, #4914FF 100%)",
                    }}
                  />
                )}
              </div>
              <div className="p-3 sm:p-4 md:p-6 text-[#1b2f6e]">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold line-clamp-2">{card.title}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm line-clamp-3">{card.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}