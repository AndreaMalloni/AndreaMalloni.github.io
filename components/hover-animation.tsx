"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverAnimationProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function HoverAnimation({ children, className = "", scale = 1.03 }: HoverAnimationProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: scale - 0.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

