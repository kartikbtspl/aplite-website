"use client";

import { useState, useEffect } from "react";
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
  const [screenWidth, setScreenWidth] = useState(1024);
  const isEven = cards.length % 2 === 0;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [cards.length]);

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center">
      {cards.map((card, index) => {
        const position = (index - activeIndex + cards.length) % cards.length;
        
        let transform = "";
        let zIndex = 0;
        let opacity = 0.4;
        let scale = 0.7;
        let isVisible = true;

        if (position === 0) {
          // Active card - front and center
          transform = "translateX(0px)";
          zIndex = 10;
          opacity = 1;
          scale = 1;
        } else if (isEven && position === cards.length - 1) {
          // For even cards, hide last card behind first card
          transform = "translateX(0px)";
          zIndex = 5;
          opacity = 0;
          scale = 1;
        } else {
          // Calculate position for other cards
          const visibleCards = isEven ? cards.length - 1 : cards.length;
          const adjustedPosition = position > cards.length - 1 ? position : position;
          const isRightSide = adjustedPosition <= Math.floor(visibleCards / 2);
          
          const isMobile = screenWidth < 768;
          
          if (isMobile) {
            // Vertical movement for mobile
            const verticalOffset = 100;
            const verticalSpacing = 80;
            
            if (isRightSide) {
              transform = `translateY(${verticalOffset + (adjustedPosition - 1) * verticalSpacing}px)`;
              zIndex = 10 - adjustedPosition;
              opacity = Math.max(0.3, 0.8 - adjustedPosition * 0.2);
              scale = Math.max(0.6, 0.9 - adjustedPosition * 0.1);
            } else {
              const leftPosition = visibleCards - adjustedPosition;
              transform = `translateY(-${verticalOffset + (leftPosition - 1) * verticalSpacing}px)`;
              zIndex = 10 - leftPosition;
              opacity = Math.max(0.3, 0.8 - leftPosition * 0.2);
              scale = Math.max(0.6, 0.9 - leftPosition * 0.1);
            }
          } else {
            // Horizontal movement for larger screens
            const baseOffset = screenWidth < 1024 ? 180 : 200;
            const spacing = screenWidth < 1024 ? 120 : 150;
            
            if (isRightSide) {
              transform = `translateX(${baseOffset + (adjustedPosition - 1) * spacing}px)`;
              zIndex = 10 - adjustedPosition;
              opacity = Math.max(0.3, 0.8 - adjustedPosition * 0.2);
              scale = Math.max(0.6, 0.9 - adjustedPosition * 0.1);
            } else {
              const leftPosition = visibleCards - adjustedPosition;
              transform = `translateX(-${baseOffset + (leftPosition - 1) * spacing}px)`;
              zIndex = 10 - leftPosition;
              opacity = Math.max(0.3, 0.8 - leftPosition * 0.2);
              scale = Math.max(0.6, 0.9 - leftPosition * 0.1);
            }
          }
        }

        return (
          <div
            key={index}
            className="absolute transition-all duration-700 ease-in-out"
            style={{
              transform: `${transform} scale(${scale})`,
              zIndex,
              opacity,
              width: screenWidth < 640 ? '280px' : screenWidth < 1024 ? '400px' : '500px',
              height: screenWidth < 640 ? '320px' : screenWidth < 1024 ? '360px' : '450px'
            }}
          >
            <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full pt-6 px-6 rounded-2xl overflow-hidden">
                {card.imageSrc ? (
                  <div className="relative w-full h-full flex justify-center items-center">
                    <Image
                      src={card.imageSrc}
                      alt={card.title || "Card image"}
                      width={700}
                      height={400}
                      className="w-full h-auto max-w-[600px] rounded-lg object-contain"
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
              <div className="p-6 text-[#1b2f6e]">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm">{card.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
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