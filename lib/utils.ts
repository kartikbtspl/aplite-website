import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// Fade in upward
export const fadeInUp = (delay = 0, duration = 0.8, yOffset = 30) => ({
  initial: { opacity: 0, y: yOffset },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration, delay },
  viewport: { once: true, amount: 0.2 },
});

// Fade in from left
export const fadeInLeft = (delay = 0, duration = 0.8, xOffset = -30) => ({
  initial: { opacity: 0, x: xOffset },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration, delay },
  viewport: { once: true, amount: 0.2 },
});

// Fade in from right
export const fadeInRight = (delay = 0, duration = 0.8, xOffset = 30) => ({
  initial: { opacity: 0, x: xOffset },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration, delay },
  viewport: { once: true, amount: 0.2 },
});
