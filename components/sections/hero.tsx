"use client";

import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      <div className="absolute right-10 top-40 h-40 w-40 rounded-full bg-blue-200 opacity-50 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Pay the right business, every time.
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Instant access to verified business banking information — protect against fraud and errors.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={placeholder}
                className="h-14 w-full rounded-full border bg-background pl-12 pr-4 text-base shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button className="mt-4" size="lg" asChild>
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-2xl border bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                      <span className="text-3xl font-bold text-primary-foreground">A</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Aplite Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
