'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const x = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.4 })
  const y = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    // Skip the glow on touch / coarse pointers
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250)
      mouseY.set(e.clientY - 250)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[500px] w-[500px] rounded-full opacity-60 mix-blend-screen"
      style={{
        x,
        y,
        background:
          'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0) 60%)',
      }}
    />
  )
}
