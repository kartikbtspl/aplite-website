"use client";

import React, { ReactElement } from "react";
import { cn } from "@/lib/utils";

type Section = {
  number: string; // background number like "01"
  icon: ReactElement<any>;
  title: string;
  description: string;
};

type Props = {
  sections: Section[];
  columns?: number; // kept for backward compatibility (informational)
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
  iconOffsetY = 10,
  showOuterPadding = true,
}: Props): ReactElement {
  // columns prop left for API compatibility, but responsive layout is CSS-driven
  return (
    <div
      className={cn(
        // outer container: responsive grid + outer padding so the layout breathes on mobile
        "rounded-2xl bg-white text-slate-900 overflow-hidden",
        "p-4 sm:p-6 lg:p-8",
        // responsive columns: 1 on mobile, 2 on small, 3 on large
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        // keep small gaps so separators appear similar to previous look
        "gap-0 sm:gap-0 lg:gap-0",
        className
      )}
    >
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={cn(
            // internal padding preserved (keeps the UI identical)
            showOuterPadding ? "p-6 sm:p-8" : "p-0",
            // gradient background and rounded inner cards to match original look
            "relative bg-gradient-to-b from-[#FFFFFF] to-[#FAFCFE]",
            
            // using a tiny shadow that looks like a divider
            "shadow-[inset_0_-1px_0_rgba(100,116,139,0.06),inset_1px_0_0_rgba(100,116,139,0.04)]"
          )}
        >
          {/* faint background number */}
          <p
            aria-hidden
            className={cn(
              "absolute font-bold text-[72px] leading-none text-slate-900/5 select-none pointer-events-none",
              showOuterPadding ? "top-4 left-4" : "top-3 left-3"
            )}
          >
            {section.number}
          </p>

          {/* content */}
          <div className="relative flex flex-col items-start">
            {/* icon */}
            <div
              className="flex items-center mt-6 justify-start mb-3"
              style={{
                width: iconSize,
                height: iconSize,
                transform: `translateY(${iconOffsetY}px)`,
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

            {/* title + description */}
            <h3 className="text-base text-[#0A1544] font-semibold mb-3">
              {section.title}
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
