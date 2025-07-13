"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Italian" : "English"}`}
      className="flex items-center gap-1 px-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "en" ? "EN" : "IT"}</span>
    </Button>
  )
}

