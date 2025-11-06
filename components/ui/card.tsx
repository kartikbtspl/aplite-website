"use client";

import React, { ReactElement } from "react";
import { cn } from "@/lib/utils";

type Section = {
  number: string;
  icon: ReactElement<any>;
  title: string;
  description: string;
};

type Props = {
  sections: Section[];
  columns?: number;
  className?: string;
  iconSize?: number;
  iconOffsetY?: number;
  showOuterPadding?: boolean;
};

export default function MultiSectionCard({
  sections,
  columns = 3,
  className,
  iconSize = 28,
  iconOffsetY = 0,
  showOuterPadding = true,
}: Props): ReactElement {
  return (
     <div
      className={cn(
        // Outer container with single border around entire component
        "rounded-2xl p-4 bg-gradient-to-b from-[#FFFFFF] to-[#FAFCFE] border  border-[#CCE2FB] text-slate-900 overflow-hidden",
        // Responsive grid - automatically adjusts based on columns prop
        "grid grid-cols-1",
        columns >= 2 && "sm:grid-cols-2",
        columns >= 3 && "lg:grid-cols-3", 
        columns >= 4 && "xl:grid-cols-4",
        // Remove gaps since we use borders for separation
        "gap-0",
        className
      )}
    >
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={cn(
            // Internal padding for content breathing room
            showOuterPadding ? "p-6 sm:p-8" : "p-0",
            // Gradient background
            "relative bg-gradient-to-b from-[#FFFFFF] to-[#FAFCFE]",
            // Only vertical borders with blur effect inside the grid
            "relative",
            // Add vertical border on the right for all except last column
            (idx + 1) % columns !== 0 && 
              "after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3/4 after:w-px after:bg-gradient-to-b after:from-transparent after:via-[#CCE2FB] after:to-transparent after:blur-[0.5px]"
          )}
        >
          {/* Background number - positioned properly */}
          <p
            aria-hidden
            className={cn(
              "absolute font-bold text-[72px] leading-none text-slate-900/5 select-none pointer-events-none",
              showOuterPadding ? "top-4 left-4" : "top-3 left-3"
            )}
          >
            {section.number}
          </p>

          {/* Content container */}
          <div className="relative flex flex-col items-start h-full">
            {/* Icon with proper spacing */}
            <div
              className="flex items-center justify-start mt-6 mb-4"
              style={{
                width: iconSize,
                height: iconSize,
              }}
            >
              {React.isValidElement(section.icon)
                ? React.cloneElement(section.icon as ReactElement<any>, {
                    ...(section.icon.props || {}),
                    width: iconSize,
                    height: iconSize,
                    strokeWidth: 1,
                    className: cn(
                      (section.icon.props as Record<string, unknown>)?.className ?? "",
                      "text-slate-700"
                    ),
                  })
                : section.icon}
            </div>

            {/* Title with consistent spacing */}
            <h3 className="text-xl text-[#0A1544] font-semibold mb-3 leading-tight">
              {section.title}
            </h3>
            
            {/* Description with proper line height */}
            <p className="text-lg text-[#64748B] leading-relaxed flex-grow">
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}