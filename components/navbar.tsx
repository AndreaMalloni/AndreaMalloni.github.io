"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"

interface NavbarProps {
  activePage?: string
  isProjectPage?: boolean
}

export function Navbar({ activePage = "home", isProjectPage = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(activePage)
  const { t } = useLanguage()

  useEffect(() => {
    if (!isProjectPage) {
      const handleScroll = () => {
        const sections = ["home", "about", "work", "contact"]

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isProjectPage])

  const scrollToSection = (sectionId: string) => {
    if (isProjectPage) {
      // If on project page, navigate to main page with hash
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold blue-text">
          Andrea Malloni
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "home" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t("nav.home")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "about" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "work" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t("nav.work")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "contact" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t("nav.contact")}
          </button>
          <Button asChild size="sm">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b border-border py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection("home")} className="text-sm font-medium py-2 hover:text-primary">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium py-2 hover:text-primary">
            About
          </button>
          <button onClick={() => scrollToSection("work")} className="text-sm font-medium py-2 hover:text-primary">
            Work
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium py-2 hover:text-primary">
            Contact
          </button>
          <Button asChild size="sm" className="w-full">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}

