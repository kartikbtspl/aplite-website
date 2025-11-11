
"use client";

import { ReactNode } from "react";

export default function CardsGrid({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-6 py-6 pb-16">
      <div
        className="
          grid
          grid-cols-1 sm:grid-cols-2
          gap-x-16 gap-y-12
          max-w-6xl
          mx-auto
        "
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className={`
                  transition-transform duration-500
                  ${
                    // small vertical offset for right-side cards (col 2)
                    index % 2 === 1
                      ? "sm:translate-y-[5rem] translate-y-0"
                      : "translate-y-0"
                  }
                `}
              >
                {child}
              </div>
            ))
          : children}
      </div>
    </div>
  );
}
