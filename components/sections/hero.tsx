"use client";

import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Buttons"
import { SEARCH_EXAMPLES } from "@/lib/constants";

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
    <section className="min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-transparent mx-4 sm:mx-8 lg:mx-12 mt-8 sm:mt-16 lg:mt-6 px-4 sm:px-6 mb-20">
        <div className="flex flex-col w-full items-center justify-center max-w-6xl">
          {/* Content Section */}
          <div className="flex flex-col text-center items-center">
            <div className="flex flex-col gap-4 sm:gap-6 items-center mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light leading-tight tracking-tight mb-4 sm:mb-6 text-white">
                Pay the right business, every time.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-6 sm:mb-8 lg:mb-10">
                Instant access to verified business banking information — protect against fraud and errors.
              </p>
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
                <Search className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={placeholder}
                  className="h-10 sm:h-12 md:h-14 w-full rounded-xl border bg-background pl-9 sm:pl-10 md:pl-12 pr-4 text-sm sm:text-base shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button variant="primary" size="md" label="Get Started" className="w-auto px-6 sm:px-8">
              </Button>
            </div>
          </div>

          {/* Laptop Image - Right Side */}
          {/* <div className="flex-1 flex justify-center h-[90vh] lg:justify-end -z-10">
            <div className="w-[150%] rounded-l-3xl overflow-hidden">
              <Image
                src="/laptop-dashboard.png"
                alt="Laptop Dashboard"
                width={1800}
                height={1200}
                priority
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div> */}
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
