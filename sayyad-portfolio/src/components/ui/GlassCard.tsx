import * as React from 'react';
import { motion } from 'framer-motion';
import { useGlassEffect } from '@/hooks/useGlassEffect';
import { use3DTransform } from '@/hooks/use3DTransform';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  opacity?: 'low' | 'med' | 'high';
  blur?: 'sm' | 'md' | 'lg';
  with3D?: boolean;
  accent?: boolean;
  interactive?: boolean;
}

/**
 * GlassCard Component
 * Implements Section 7 of the Portfolio Design Elevation Spec.
 * Features:
 * - Layered glassmorphism with variable opacity and blur.
 * - 3D Perspective rotation on mouse hover (Desktop only).
 * - Performance-optimized with will-change and mobile fallbacks.
 * - Nothing-inspired technical aesthetic.
 */
export const GlassCard = ({ 
  children, 
  className = '', 
  opacity = 'med', 
  blur = 'md',
  with3D = false,
  accent = false,
  interactive = true
}: GlassCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const { isMobile, applyWillChange, removeWillChange } = useGlassEffect();
  const { rotation } = use3DTransform(cardRef);

  const getGlassBaseClass = () => {
    if (isMobile) {
      // Mobile fallback: higher opacity, no blur for performance
      return accent 
        ? 'bg-accent/10 border-accent/30' 
        : 'bg-surface/90 border-border-visible';
    }
    
    const base = 'glass-card';
    const opacityClass = `glass-opacity-${opacity}`;
    const blurClass = `glass-blur-${blur}`;
    const accentClass = accent ? 'glass-accent' : '';
    
    return `${base} ${opacityClass} ${blurClass} ${accentClass} border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`;
  };

  return (
    <motion.div
      ref={cardRef}
      onHoverStart={() => with3D && !isMobile && applyWillChange(cardRef.current)}
      onHoverEnd={() => with3D && !isMobile && removeWillChange(cardRef.current)}
      animate={with3D && !isMobile ? {
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: interactive ? 1.02 : 1,
      } : {}}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 20,
        mass: 1 
      }}
      className={`
        relative overflow-hidden transition-all duration-500
        ${getGlassBaseClass()}
        ${interactive ? 'hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Light Reflex (Spec Section 4.2) */}
      {!isMobile && interactive && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Noise Texture (Spec Section 3.2) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay dot-grid-subtle" />
    </motion.div>
  );
};
