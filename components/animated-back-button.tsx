"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface AnimatedBackButtonProps {
  href: string
  label: string
  className?: string
}

export function AnimatedBackButton({ href, label, className = "" }: AnimatedBackButtonProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Trigger exit animation
    document.documentElement.classList.add("page-exit")

    // Navigate after a short delay to allow exit animation to play
    setTimeout(() => {
      router.push(href)
      document.documentElement.classList.remove("page-exit")
    }, 200)
  }

  return (
    <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      <Button variant="ghost" size="sm" className={`w-fit ${className}`} asChild>
        <Link href={href} onClick={handleClick}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {label}
        </Link>
      </Button>
    </motion.div>
  )
}

