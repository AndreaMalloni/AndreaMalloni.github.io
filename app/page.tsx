"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Download, Send, Linkedin, ExternalLink, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { AnimatedLayout } from "@/components/animated-layout"
import { HoverAnimation } from "@/components/hover-animation"
import { projects } from "@/lib/projects"

export default function Home() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollProjects = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -container.clientWidth / 2 : container.clientWidth / 2

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      <AnimatedLayout>
        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="flex-1 space-y-6">
                  <TypewriterEffect
                    greeting={t("hero.greeting")}
                    name="Andrea Malloni"
                    speed={80}
                    delayAfterGreeting={300}
                  />
                  <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">{t("hero.title")}</h2>
                  <p className="text-lg text-muted-foreground max-w-xl">{t("hero.description")}</p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <HoverAnimation>
                      <Button onClick={() => scrollToSection("about")}>{t("hero.learnMore")}</Button>
                    </HoverAnimation>
                    <HoverAnimation>
                      <Button variant="outline" onClick={() => scrollToSection("contact")}>
                        {t("hero.getInTouch")}
                      </Button>
                    </HoverAnimation>
                  </div>
                </div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/profile-pic.png"
                    alt="Andrea Malloni"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">{t("about.title")}</h2>

                <div className="space-y-6">
                  <p className="text-lg">{t("about.description")}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="blue-border p-6 bg-card">
                      <h3 className="text-xl font-semibold mb-4">{t("about.experience")}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Backend .NET developer</h4>
                          <p className="text-sm text-muted-foreground">BLT Informatica | 02/2025 - Present</p>
                          <ul className="list-disc list-inside text-sm mt-2 text-muted-foreground">
                            <li>Designed user-centric interfaces for 10+ mobile and web applications</li>
                            <li>Conducted UX research and usability testing</li>
                            <li>Built and maintained scalable design systems</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Full-stack developer</h4>
                          <p className="text-sm text-muted-foreground">New Assistent (Stage) | 03/2024 - 05/2024</p>
                          <ul className="list-disc list-inside text-sm mt-2 text-muted-foreground">
                            <li>Completed over 100+ projects with 100% Job Success Score</li>
                            <li>Delivered customized designs tailored to clients' needs</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="blue-border p-6 bg-card">
                      <h3 className="text-xl font-semibold mb-4">{t("about.skills")}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">{t("about.designSkills")}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Visual Studio, Docker, Git, .NET, Spark, Elasticsearch 
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">{t("about.specialties")}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                          Visual Studio, Docker, Git, .NET, Spark, Elasticsearch, UV, Ruff, MyPy
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">{t("about.education")}</h4>
                          <p className="text-sm text-muted-foreground">Bachelor degree in Informatica (ICD)</p>
                          <p className="text-xs text-muted-foreground">
                            University of Camerino | 2021 - 2024
                          </p>
                          
                          <p className="text-sm text-muted-foreground">Master degree in Computer Science</p>
                          <p className="text-xs text-muted-foreground">
                          University of Camerino | 2024 - Present
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-6">
                    <HoverAnimation>
                      <Button asChild>
                        <a href="/resume.pdf" download>
                          <Download className="mr-2 h-4 w-4" />
                          {t("about.downloadResume")}
                        </a>
                      </Button>
                    </HoverAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Section - Horizontal Scrolling Projects */}
          <section id="work" className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">{t("work.title")}</h2>
                  <p className="text-lg text-muted-foreground">{t("work.description")}</p>
                </div>

                <div className="relative">
                  {/* Navigation Buttons */}
                  <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-background/80 backdrop-blur-sm"
                      onClick={() => scrollProjects("left")}
                    >
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <ChevronLeft className="h-5 w-5" />
                      </motion.div>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-background/80 backdrop-blur-sm"
                      onClick={() => scrollProjects("right")}
                    >
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <ChevronRight className="h-5 w-5" />
                      </motion.div>
                    </Button>
                  </div>

                  {/* Scrollable Project Container */}
                  <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto py-4 px-1 space-x-4 scrollbar-hide scroll-smooth snap-x"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {projects.map((project) => (
                      <div key={project.slug} className="flex-none w-[280px] md:w-[320px] snap-center">
                        <div className="h-full rounded-lg border overflow-hidden bg-card flex flex-col">
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                              src={project.images?.[0] || "/placeholder.svg"}
                              alt={project.title}
                              width={720}
                              height={450}
                              className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <div className="p-4 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold">{project.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground flex-1">{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-1">
                              {project.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 2 && (
                                <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                                  +{project.tags.length - 2}
                                </span>
                              )}
                            </div>
                            <HoverAnimation className="mt-4">
                              <Button asChild variant="outline" size="sm" className="w-full">
                                <Link href={`/projects/${project.slug}`}>View Project</Link>
                              </Button>
                            </HoverAnimation>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In the "View All Projects" button section, update it to: */}
                <div className="mt-8 text-center">
                  <HoverAnimation>
                    <Button asChild size="lg">
                      <Link href="/projects" className="flex items-center">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View All Projects
                      </Link>
                    </Button>
                  </HoverAnimation>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">{t("contact.title")}</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-6">{t("contact.info")}</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-primary" />
                        <a
                          href="mailto:malloni.andrea02@gmail.com"
                          className="text-muted-foreground hover:text-primary radial-hover"
                        >
                          malloni.andrea02@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-primary" />
                        <a href="tel:+393667009283" className="text-muted-foreground hover:text-primary radial-hover">
                          +39 366 7009 283
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-primary" />
                        <span className="text-muted-foreground">Fermo, Italy</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mt-8 mb-6">{t("contact.connect")}</h3>
                    <div className="flex space-x-4">
                      <HoverAnimation scale={1.1}>
                        <Button asChild variant="outline" size="icon">
                          <a
                            href="https://www.linkedin.com/in/andrea-malloni-b319311a1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </Button>
                      </HoverAnimation>
                      <HoverAnimation scale={1.1}>
                        <Button asChild variant="outline" size="icon">
                          <a
                            href="https://github.com/AndreaMalloni"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github Profile"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 9h6v3H3z" />
                              <path d="M14 9h7" />
                              <path d="M14 15h7" />
                              <path d="M3 15h6v3H3z" />
                              <path d="M3 6h6" />
                              <path d="M14 12h7" />
                            </svg>
                          </a>
                        </Button>
                      </HoverAnimation>
                      <HoverAnimation scale={1.1}>
                        <Button asChild variant="outline" size="icon">
                          <a href="mailto:malloni.andrea02@gmail.com" aria-label="Email">
                            <Mail className="h-5 w-5" />
                          </a>
                        </Button>
                      </HoverAnimation>
                    </div>
                  </div>

                  <div className="blue-border p-6 bg-card">
                    <h3 className="text-xl font-semibold mb-6">{t("contact.sendMessage")}</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          {t("contact.name")}
                        </label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          {t("contact.email")}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          {t("contact.message")}
                        </label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Your message"
                          rows={4}
                          required
                        />
                      </div>
                      <HoverAnimation>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              {t("contact.sending")}
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Send className="mr-2 h-4 w-4" />
                              {t("contact.send")}
                            </span>
                          )}
                        </Button>
                      </HoverAnimation>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </AnimatedLayout>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Andrea Malloni. {t("footer.rights")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/andrea-malloni-b319311a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary radial-hover"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AndreaMalloni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary radial-hover"
              >
                Github
              </a>
              <a
                href="mailto:malloni.andrea02@gmail.com"
                className="text-muted-foreground hover:text-primary radial-hover"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

