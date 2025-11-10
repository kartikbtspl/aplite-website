import React from "react";
import { LucideIcon } from "lucide-react";

type IconSize = "sm" | "md" | "lg" | "xl" | number;

type ReusableReactIconProps = {
  sizeprop?: IconSize;
  squareBgColor?: string;
  icon: LucideIcon;
  iconBgColor?: string;
};

export default function ReusableReactIcon({
  sizeprop = "md",
  squareBgColor = "#003cff",
  icon: Icon,
  iconBgColor = "#93c5fd",
}: ReusableReactIconProps) {
  function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Predefined size map
  const sizeMap: Record<
    Exclude<IconSize, number>,
    { square: string; icon: string; iconInner: string; iconSize: number }
  > = {
    sm: {
      square: "w-6 h-6",
      icon: "w-8 h-8",
      iconInner: "w-3 h-3",
      iconSize: 16,
    },
    md: {
      square: "w-8 h-8",
      icon: "w-10 h-10",
      iconInner: "w-4 h-4",
      iconSize: 20,
    },
    lg: {
      square: "w-10 h-10",
      icon: "w-12 h-12",
      iconInner: "w-5 h-5",
      iconSize: 24,
    },
    xl: {
      square: "w-12 h-12",
      icon: "w-14 h-14",
      iconInner: "w-6 h-6",
      iconSize: 28,
    },
  };

  const currentSize =
    typeof sizeprop === "string" ? sizeMap[sizeprop] : sizeMap.md;

  // For numeric custom sizes
  const numeric = typeof sizeprop === "number";
  const squareStyle = numeric
    ? { width: `${sizeprop * 0.8}px`, height: `${sizeprop * 0.8}px` }
    : undefined;
  const iconStyle = numeric
    ? { width: `${sizeprop}px`, height: `${sizeprop}px` }
    : undefined;

  // Calculate icon size for Lucide Icon component
  const iconSize = numeric ? sizeprop * 0.6 : currentSize.iconSize;

  // Padding logic
  const paddingClass = sizeprop === "sm" ? "p-1" : "p-2";
  const offset = sizeprop === "sm" || sizeprop === "md"  ? "-translate-x-3 " : "-translate-x-5";
  return (
    <div className="relative flex justify-center items-center p-5">
      {/* Background square */}
      <div
        className={`${
          numeric ? "" : currentSize.square
        } rounded absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-70`}
        style={{
          ...(squareStyle || {}),
          backgroundColor: squareBgColor,
        }}
      />

      {/* Foreground icon container */}
      <div
        className={`${
          numeric ? "" : currentSize.icon
        } ${paddingClass} mt-2 rounded relative z-10 ${offset} flex items-center justify-center`}
        style={{
          ...(iconStyle || {}),
          backgroundColor: hexToRgba(iconBgColor, 0.5),
        }}
      >
        {/* The actual Lucide icon scales properly now */}
        <Icon size={iconSize} className="text-white font-extrabold" />
      </div>
    </div>
  );
}

// import React from "react";
// import { LucideIcon } from "lucide-react";

// type ReusableReactIconProps = {
//   squareWidth?: string;
//   squareHeight?: string;
//   squareBgColor?: string;
//   icon: LucideIcon;
//   iconBgColor?: string;
//   iconWidth?: string;
//   iconHeight?: string;
//   offset?: string;
// };

// export default function ReusableReactIcon({
//   squareWidth = "w-8",
//   squareHeight = "h-8",
//   squareBgColor = "#003cff",
//   icon: Icon,
//   iconBgColor = "#93c5fd",
//   iconWidth = "w-10",
//   iconHeight = "h-10",
//   offset = "-translate-x-5",
// }: ReusableReactIconProps) {

//   function hexToRgba(hex: string, alpha: number): string {
//     const r = parseInt(hex.slice(1, 3), 16);
//     const g = parseInt(hex.slice(3, 5), 16);
//     const b = parseInt(hex.slice(5, 7), 16);
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
//   }

//   return (
//     <div className="relative flex justify-center items-center p-5">
//       <div
//         className={`${squareWidth} ${squareHeight} rounded absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-70`}
//         style={{ backgroundColor: squareBgColor }}
//       />

//       <div
//         className={`${iconWidth} ${iconHeight} mt-2 p-2 rounded relative z-10 ${offset}`}
//         style={{ backgroundColor: hexToRgba(iconBgColor, 0.5) }}
//       >
//         <Icon className="text-white font-extrabold" />
//       </div>
//     </div>
//   );
// }
