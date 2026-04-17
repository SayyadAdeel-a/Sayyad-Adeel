import * as React from 'react'
import { useGlassEffect } from './useGlassEffect'

/* ============================================================================
   use3DTransform HOOK
   Source: Design Spec Section 4 - Motion & 3D Transforms
   Reference: Interactive 3D Effects pattern (max 5-8 degrees rotation)
   
   Tracks mouse position to calculate 3D rotation for perspective cards.
   Automatically disables on mobile for performance.
   Provides rotateX and rotateY values in degrees.
   ============================================================================ */

interface Rotation {
  x: number
  y: number
}

export function use3DTransform(ref: React.RefObject<HTMLElement | null>) {
  const [rotation, setRotation] = React.useState<Rotation>({ x: 0, y: 0 })
  const { isMobile } = useGlassEffect()

  React.useEffect(() => {
    if (isMobile || !ref.current) return

    const element = ref.current
    const maxRotation = 8

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY

      const percentX = distanceX / (rect.width / 2)
      const percentY = distanceY / (rect.height / 2)

      const rotateX = -(percentY * maxRotation)
      const rotateY = percentX * maxRotation

      setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, isMobile])

  return { rotation }
}
