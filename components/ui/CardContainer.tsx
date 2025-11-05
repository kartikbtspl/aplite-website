"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function CardContainer({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 shadow-sm border border-[#CCE2FB]",
        "bg-gradient-to-b from-[#FFFFFF] to-[#FAFCFE]",
        className
      )}
    >
      {children}
    </div>
  );
}
