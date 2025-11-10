"use client";

import React from "react";

interface BlankCardProps {
  children: React.ReactNode;
  className?: string;
}

const BlankCard: React.FC<BlankCardProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`bg-white mx-10 rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default BlankCard;