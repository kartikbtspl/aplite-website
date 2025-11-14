"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Buttons";

interface HeroSecProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const HeroSec: React.FC<HeroSecProps> = ({
  title,
  subtitle,
  description,
  buttonLabel = "Get Started",
  onButtonClick,
}) => {
  return (
    <section className="relative  px-12 h-[80vh] flex flex-col justify-center text-white bg-transparent">
      {/* Text Container */}
      <div className="max-w-5xl">
        {/* Logo / Tagline */}
        {subtitle && (
          subtitle.toLowerCase() === "aplite" ? (
            <div className="mb-4">
              <Image 
                src="/brand/Aplite-logo.svg"
                alt="Aplite Logo" 
                width={120} 
                height={32}
                className="h-8 w-auto"
                priority
                unoptimized
              />
            </div>
          ) : (
            <p className="text-lg md:text-2xl font-semibold mb-4 text-white/80">
              {subtitle}
            </p>
          )
        )}

        {/* Main Title */}
        <h1 className="text-5xl md:text-8xl font-light leading-tight tracking-tight mb-6">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg md:text-2xl text-white max-w-3xl mb-10">
            {description}
          </p>
        )}

        {/* Button */}
        {buttonLabel && (
          <Button
            label={buttonLabel}
            onClick={onButtonClick}
            variant="primary"
            size="lg"
          />
        )}
      </div>
    </section>
  );
};

export default HeroSec;