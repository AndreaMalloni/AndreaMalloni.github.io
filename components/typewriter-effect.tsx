"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  greeting: string
  name: string
  speed?: number
  delayAfterGreeting?: number
}

export function TypewriterEffect({ greeting, name, speed = 100, delayAfterGreeting = 500 }: TypewriterEffectProps) {
  const [displayedGreeting, setDisplayedGreeting] = useState("")
  const [displayedName, setDisplayedName] = useState("")
  const [isTypingGreeting, setIsTypingGreeting] = useState(true)
  const [isTypingName, setIsTypingName] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Reset animation when greeting or name changes (e.g., language change)
    setDisplayedGreeting("")
    setDisplayedName("")
    setIsTypingGreeting(true)
    setIsTypingName(false)
    setIsComplete(false)
  }, [greeting, name])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Type greeting
    if (isTypingGreeting && displayedGreeting.length < greeting.length) {
      timeout = setTimeout(() => {
        setDisplayedGreeting(greeting.substring(0, displayedGreeting.length + 1))
      }, speed)
    } else if (isTypingGreeting && displayedGreeting.length === greeting.length) {
      setIsTypingGreeting(false)
      timeout = setTimeout(() => {
        setIsTypingName(true)
      }, delayAfterGreeting)
    }

    // Type name
    if (isTypingName && displayedName.length < name.length) {
      timeout = setTimeout(() => {
        setDisplayedName(name.substring(0, displayedName.length + 1))
      }, speed)
    } else if (isTypingName && displayedName.length === name.length) {
      setIsTypingName(false)
      setIsComplete(true)
    }

    return () => clearTimeout(timeout)
  }, [displayedGreeting, displayedName, greeting, name, isTypingGreeting, isTypingName, speed, delayAfterGreeting])

  return (
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      {displayedGreeting}{" "}
      <span
        className={`gradient-text ${isComplete ? "" : "after:inline-block after:w-0.5 after:h-8 after:bg-primary after:animate-blink"}`}
      >
        {displayedName}
      </span>
    </h1>
  )
}

