"use client";

import "./moving-circles.css";

interface MovingCirclesProps {
  color?: string;
  count?: number;
}

export function MovingCircles({ 
  color = "rgba(0, 0, 0, 0.15)", 
  count = 8 
}: MovingCirclesProps) {
  // Helper to adjust opacity in color string
  const adjustOpacity = (colorStr: string, newOpacity: string) => {
    return colorStr.replace(/[\d.]+\)$/, `${newOpacity})`);
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`moving-circle moving-circle-${index + 1}`}
          style={{
            background: `radial-gradient(circle, ${color} 0%, ${adjustOpacity(color, '0.08')} 40%, transparent 70%)`,
          }}
        />
      ))}
    </>
  );
}
