"use client"

import { motion, AnimatePresence } from "framer-motion"
import { type ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface AnimatedLayoutProps {
  children: ReactNode
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)
  const [renderKey, setRenderKey] = useState(pathname)

  useEffect(() => {
    // Update the key when the pathname changes
    setRenderKey(pathname)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={renderKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

