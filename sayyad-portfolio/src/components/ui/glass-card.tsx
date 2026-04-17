import * as React from "react"

import { cn } from "@/lib/utils"

/* ============================================================================
   GLASSCARD COMPONENT
   Source: Design Spec Section 7 - Reusable Utilities & Hooks
   Reference: Card component pattern from src/components/ui/card.tsx
   
   Encapsulates glassmorphism styling with mobile fallback and animation support.
   Automatically disables blur effect on mobile and reduces opacity.
   ============================================================================ */

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  opacity?: 'high' | 'med' | 'low'
  borderGlow?: boolean
  hoverEffect?: 'scale' | 'lift' | 'glow' | 'none'
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      opacity = 'high',
      borderGlow = false,
      hoverEffect = 'none',
      ...props
    },
    ref
  ) => {
    const opacityClass = {
      high: 'glass-card',
      med: 'glass-card-med',
      low: 'glass-card-low',
    }[opacity]

    const glowClass = borderGlow ? 'glass-glow' : ''

    const hoverClass = {
      scale: 'hover:scale-105 transition-transform duration-300',
      lift: 'hover:-translate-y-1 transition-transform duration-300',
      glow: 'hover:glass-glow transition-shadow duration-300',
      none: '',
    }[hoverEffect]

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg',
          opacityClass,
          glowClass,
          hoverClass,
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = 'GlassCard'

const GlassCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
GlassCardHeader.displayName = 'GlassCardHeader'

const GlassCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
))
GlassCardTitle.displayName = 'GlassCardTitle'

const GlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
GlassCardDescription.displayName = 'GlassCardDescription'

const GlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
GlassCardContent.displayName = 'GlassCardContent'

const GlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
GlassCardFooter.displayName = 'GlassCardFooter'

export {
  GlassCard,
  GlassCardHeader,
  GlassCardFooter,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
}
