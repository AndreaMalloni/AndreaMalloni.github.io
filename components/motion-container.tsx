"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MotionContainerProps {
  children: ReactNode
  delay?: number
}

export function MotionContainer({ children, delay = 0 }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export function MotionItem({ children, delay = 0 }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}

