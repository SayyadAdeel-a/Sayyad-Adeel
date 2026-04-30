"use client";
import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * MagneticWrapper Component
 * Implements Section 4 of the High-Agency Frontend Skill (Magnetic Micro-physics).
 * Uses useMotionValue and useTransform outside the React render cycle for performance.
 */
export const MagneticWrapper = ({ 
  children, 
  strength = 0.5, 
  className = "" 
}: MagneticWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for X and Y position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply spring physics for smooth "pulling" feel
  const springConfig = { damping: 20, stiffness: 100, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center coordinates
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from cursor to center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Apply strength to the displacement
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
