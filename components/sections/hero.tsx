"use client";

import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SEARCH_EXAMPLES } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  const [placeholder, setPlaceholder] = useState(SEARCH_EXAMPLES[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SEARCH_EXAMPLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPlaceholder(SEARCH_EXAMPLES[index]);
  }, [index]);

  return (
    <section className="relative overflow-hidden sm:pt-10 md:pt-13 lg:pt-15 bg-[#EEF4FB]">
      {/* Decorative dollar icon left - hidden on mobile */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-20 top-16 sm:top-18 md:top-20 lg:top-24 z-10 hidden sm:block">
        <Image
          src="/dollar.png"
          alt="Dollar Left"
          width={100}
          height={100}
          className="animate-float sm:w-[85px] sm:h-[85px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px]"
          style={{ transform: 'rotate(-45deg)' }}
        />
      </div>
      {/* Decorative dollar icon right - hidden on mobile */}
      <div className="absolute right-0 sm:right-2 md:right-6 lg:right-20 top-20 sm:top-24 md:top-28 lg:top-36 z-10 hidden sm:block">
        <Image
          src="/dollar.png"
          alt="Dollar Right"
          width={200}
          height={200}
          className="animate-float sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px]"
        />
      </div>

      <div className="container relative px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 sm:mb-5 md:mb-6 text-[#0A1544] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Pay the right business, every time.
          </h1>
          <p className="mb-6 sm:mb-7 md:mb-8 text-[#475569] sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-2 md:px-0">
            Instant access to verified business banking information — protect against fraud and errors.
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-2xl relative z-20 px-4 sm:px-2 md:px-0">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={placeholder}
                className="h-12 sm:h-13 md:h-14 w-full rounded-xl border bg-background pl-10 sm:pl-11 md:pl-12 pr-4 text-sm sm:text-base shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button className="mt-3 sm:mt-4 w-full sm:w-auto md:w-auto" size="lg" asChild>
              <Link href="/get-started" className="flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Hero Mobile Image Instead of Preview */}
          <div className="relative ml-8 mt-4 sm:mt-4 md:mt-6 lg:mt-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl z-30">
            <Image
              src="/mobile-hand.png"
              alt="Mobile In Hand"
              width={450}
              height={400}
              priority
              sizes="(max-width: 640px) 350px, (max-width: 768px) 400px, (max-width: 1024px) 430px, 450px"
              className="ml-0 mr-auto w-[350px] h-[320px] sm:w-[400px] sm:h-[360px] md:w-[430px] md:h-[380px] lg:w-[450px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Decorative blurry rectangles behind mobile hand image */}
      <div 
        className="flex justify-between absolute bottom-8 left-0 w-full gap-4 z-1"
        style={{
          filter: 'blur(4px)',
          mask: 'linear-gradient(to top, transparent 0%, black 50%, black 100%)',
          WebkitMask: 'linear-gradient(to top, transparent 0%, black 50%, black 100%)'
        }}
      >
        <div className="w-[200px] h-[200px] bg-white opacity-85 rounded-lg"></div>
        <div className="w-[200px] h-[200px] bg-white opacity-85 rounded-lg"></div>
        <div className="w-[200px] h-[200px] bg-white opacity-85 rounded-lg"></div>
        <div className="w-[200px] h-[200px] bg-white opacity-85 rounded-lg"></div>
        <div className="w-[200px] h-[200px] bg-white opacity-85 rounded-lg"></div>
        <div className="w-[200px] h-[200px] bg-white opacity-85 rounded-lg"></div>
        <div className="w-[200px] h-[200px] bg-white opacity-85 rounded-lg"></div>
      </div>

      {/* Tailwind animation config - add to tailwind.config.js
        extend: {
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-12px)' },
            },
          },
          animation: {
            float: 'float 3s ease-in-out infinite',
          },
        }
      */}
    </section>
  );
}
