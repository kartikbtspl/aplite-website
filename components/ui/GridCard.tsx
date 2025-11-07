"use client";

import { ReactNode } from "react";

export default function CardsGrid({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-20 py-12">
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 
          gap-x-10 gap-y-16
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
                      ? "sm:translate-y-[10rem] translate-y-0"
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
