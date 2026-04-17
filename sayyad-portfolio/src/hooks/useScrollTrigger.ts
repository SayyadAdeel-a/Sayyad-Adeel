import * as React from 'react'

/* ============================================================================
   useScrollTrigger HOOK
   Source: Design Spec Section 4 - Motion & 3D Transforms, Section 5 - Mobile Performance
   Reference: Intersection Observer API integration for scroll-triggered animations
   
   Detects when an element enters the viewport and triggers animations.
   Uses threshold of 0.1 to start animations slightly before fully visible.
   Lazy-loads animation triggers for performance optimization.
   ============================================================================ */

interface UseScrollTriggerReturn {
  ref: React.RefObject<HTMLElement | null>
  isInView: boolean
}

export function useScrollTrigger(
  threshold = 0.1
): UseScrollTriggerReturn {
  const ref = React.useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold,
      }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold])

  return { ref, isInView }
}
