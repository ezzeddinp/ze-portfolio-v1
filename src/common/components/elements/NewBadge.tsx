"use client"

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface NewBadgeProps {
  label?: string
  className?: string
}

export default function NewBadge({ label = 'New', className }: NewBadgeProps) {
  return (
    <motion.span
      role="status"
      aria-label={`${label} indicator`}
      className={clsx(
        'relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-red-400 shadow-[0_0_8px_rgba(244,63,94,0.45)]',
        'before:absolute before:-inset-1 before:rounded-full before:bg-red-500/20 before:blur-md before:content-[""]',
        className
      )}
      initial={{ scale: 0.95, opacity: 0.9 }}
      animate={{
        scale: [0.95, 1.15, 0.95],
        opacity: [0.9, 1, 0.9],
        boxShadow: [
          '0 0 6px rgba(244,63,94,0.35)',
          '0 0 14px rgba(244,63,94,0.6)',
          '0 0 6px rgba(244,63,94,0.35)'
        ]
      }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="sr-only">{label}</span>
    </motion.span>
  )
}
