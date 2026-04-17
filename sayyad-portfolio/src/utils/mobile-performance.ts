/* ============================================================================
   Mobile Performance Utilities
   Source: Design Spec Section 5 - Mobile Performance Optimization
   Reference: Performance targets and mobile-first breakpoints (768px threshold)
   
   Helper functions for detecting mobile devices, debouncing scroll events,
   checking motion preferences, and adjusting animation durations.
   ============================================================================ */

/**
 * Detects if the current device is mobile (width < 768px)
 * Source: Design Spec Section 5 - Mobile-First Breakpoints
 */
export function isMobileDevice(): boolean {
  return typeof window !== 'undefined' && window.innerWidth < 768
}

/**
 * Debounces scroll events to maintain 60fps performance
 * Source: Design Spec Section 5 - will-change Strategy & Performance Targets
 * @param callback Function to debounce
 * @param delay Time in milliseconds (default: 16ms for 60fps)
 * @returns Debounced function
 */
export function debounceScroll(
  callback: (...args: unknown[]) => void,
  delay = 16
): (...args: unknown[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: unknown[]) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
      timeout = null
    }, delay)
  }
}

/**
 * Checks if user prefers reduced motion
 * Source: Design Spec Section 5 - Accessibility & Performance
 * Respects @media (prefers-reduced-motion: reduce)
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Adjusts animation duration for mobile devices
 * Source: Design Spec Section 5 - Animation duration table
 * Returns 70% of desktop duration on mobile, 100% on desktop
 * @param desktopMs Duration in milliseconds for desktop
 * @returns Adjusted duration based on device type
 */
export function getAnimationDuration(desktopMs: number): number {
  if (isMobileDevice()) {
    return Math.round(desktopMs * 0.7)
  }
  return desktopMs
}
