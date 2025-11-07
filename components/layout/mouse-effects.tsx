"use client";

import { useEffect, useState } from "react";

export function MouseEffects() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Create subtle ripples on mouse move
    const handleMouseMoveWithRipples = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Add new ripple occasionally (less frequent for subtlety)
      if (Math.random() > 0.8) {
        const newRipple = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY
        };
        setRipples(prev => [...prev.slice(-2), newRipple]);
        
        // Remove ripple after animation
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 1500);
      }
    };

    document.addEventListener('mousemove', handleMouseMoveWithRipples);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveWithRipples);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Water distortion effect */}
      <div
        className="water-distortion"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 0.6 : 0,
          width: isVisible ? '150px' : '0px',
          height: isVisible ? '150px' : '0px',
        }}
      />
      
      {/* Color wave effect */}
      <div
        className="color-wave"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 0.4 : 0,
          width: isVisible ? '120px' : '0px',
          height: isVisible ? '120px' : '0px',
        }}
      />
      
      {/* Subtle mouse ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="mouse-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '100px',
            height: '100px',
          }}
        />
      ))}
    </>
  );
}