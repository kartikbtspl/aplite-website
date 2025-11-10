"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: LucideIcon;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
}) => {
  const baseStyles = "font-medium rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-sm flex items-center justify-center gap-2";
  
  const variantStyles = {
    primary: "bg-white text-black border border-gray-900 rounded-2xl shadow-sm",
    secondary: "bg-transparent border border-white text-white hover:bg-white/10"
  };

  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base", 
    lg: "px-12 py-4 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {label}
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;