import * as React from 'react'

/* ============================================================================
   useGlassEffect HOOK
   Source: Design Spec Section 4 - Motion & 3D Transforms, Section 5 - Mobile Performance
   Reference: Pattern from src/components/ui/navigation-menu.tsx
   
   Detects mobile devices and manages GPU acceleration with will-change.
   Provides utilities for applying/removing will-change on animated elements.
   ============================================================================ */

export function useGlassEffect() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const applyWillChange = (element: HTMLElement | null) => {
    if (element) {
      element.style.willChange = 'transform'
    }
  }

  const removeWillChange = (element: HTMLElement | null) => {
    if (element) {
      element.style.willChange = 'auto'
    }
  }

  return { isMobile, applyWillChange, removeWillChange }
}
