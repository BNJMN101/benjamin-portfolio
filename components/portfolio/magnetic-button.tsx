'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
}: {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * 0.3)
    y.set(relY * 0.3)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  const base = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors',
    variant === 'primary'
      ? 'bg-primary text-primary-foreground hover:bg-accent purple-glow'
      : 'glass text-foreground hover:bg-white/[0.07]',
    className,
  )

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={base}>
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={base}>
          {children}
        </button>
      )}
    </motion.div>
  )

  return inner
}
