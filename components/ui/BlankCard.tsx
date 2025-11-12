"use client";

import React, { forwardRef } from "react";

interface BlankCardProps {
  children: React.ReactNode;
  className?: string;
}

const BlankCard = forwardRef<HTMLDivElement, BlankCardProps>(
  ({ children, className = "" }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white mx-10 rounded-2xl shadow-sm h-auto overflow-visible w-auto ${className}`}
      >
        {children}
      </div>
    );
  }
);

BlankCard.displayName = "BlankCard";

export default BlankCard;



// "use client";

// import React from "react";

// interface BlankCardProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const BlankCard: React.FC<BlankCardProps> = ({ 
//   children, 
//   className = "" 
// }) => {
//   return (
//     <div className={`bg-white mx-10 rounded-2xl shadow-sm p-6 overflow-visible  ${className}`}>
//       {children}
//     </div>
//   );
// };

// export default BlankCard;