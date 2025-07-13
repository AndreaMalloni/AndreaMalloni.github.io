"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Navbar } from "@/components/navbar"
import { MotionContainer, MotionItem } from "@/components/motion-container"
import { motion } from "framer-motion"
import { AnimatedBackButton } from "@/components/animated-back-button"
import { AnimatedLayout } from "@/components/animated-layout"
import { HoverAnimation } from "@/components/hover-animation"
import { getProjectBySlug } from "@/lib/projects" 

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { t } = useLanguage()
  const { slug } = use(params)
  const projectData = getProjectBySlug(slug)

  if (!projectData) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="text-muted-foreground mt-4">Check the URL or go back to the projects page.</p>
        <Link href="/projects" className="mt-6 inline-block underline text-primary">
          ← {t("project.backToProjects")}
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar activePage="work" isProjectPage={true} />

      <AnimatedLayout>
        <main className="flex-1">
          <div className="container py-12 md:py-24">
            <MotionContainer>
              <AnimatedBackButton href="/projects" label={t("project.backToProjects")} className="mb-8" />
            </MotionContainer>

            <MotionContainer delay={0.1}>
              <motion.div
                className="relative aspect-[21/9] w-full overflow-hidden rounded-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/placeholder.svg?height=900&width=1900"
                  alt={projectData.title}
                  width={1900}
                  height={900}
                  className="object-cover"
                  priority
                />
              </motion.div>
            </MotionContainer>

            <div className="mx-auto max-w-3xl py-12">
              <MotionContainer delay={0.2}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{projectData.title}</h1>
                <p className="mt-4 text-xl text-muted-foreground">{projectData.description}</p>
              </MotionContainer>

              <MotionContainer delay={0.3}>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div>
                    <h3 className="font-medium">{t("project.client")}</h3>
                    <p className="text-muted-foreground">{projectData.client}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">{t("project.duration")}</h3>
                    <p className="text-muted-foreground">{projectData.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">{t("project.role")}</h3>
                    <p className="text-muted-foreground">{projectData.role}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {projectData.tags.map((tag, index) => (
                    <motion.div
                      key={index}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </MotionContainer>

              <MotionContainer delay={0.4}>
                <div className="mt-12">
                  <h2 className="text-2xl font-bold">{t("project.overview")}</h2>
                  <p className="mt-4 text-muted-foreground">{projectData.overview}</p>
                </div>
              </MotionContainer>

              <MotionContainer delay={0.5}>
                <div className="mt-12">
                  <h2 className="text-2xl font-bold">{t("project.challenge")}</h2>
                  <p className="mt-4 text-muted-foreground">{projectData.challenge}</p>
                </div>
              </MotionContainer>

              {projectData.process && projectData.process.length > 0 && (
                <div className="mt-12">
                  <MotionContainer delay={0.6}>
                    <h2 className="text-2xl font-bold">{t("project.process")}</h2>
                  </MotionContainer>
                  <div className="mt-6 grid gap-8">
                    {projectData.process.map((step, index) => (
                      <MotionItem key={index} delay={0.7 + index * 0.1}>
                        <div className="flex gap-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold">{step.title}</h3>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </MotionItem>
                    ))}
                  </div>
                </div>
              )}

              <MotionContainer delay={0.8}>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  <motion.div
                    className="overflow-hidden rounded-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Project wireframe"
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="overflow-hidden rounded-lg"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Project mockup"
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </MotionContainer>

              <MotionContainer delay={1.1}>
                <div className="mt-12">
                  <h2 className="text-2xl font-bold">{t("project.outcome")}</h2>
                  <p className="mt-4 text-muted-foreground">{projectData.outcome}</p>
                </div>
              </MotionContainer>

              <MotionContainer delay={1.2}>
                <div className="mt-12 flex justify-center">
                  <HoverAnimation>
                    <Button asChild>
                      <Link href="/#contact">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("project.contactMe")}
                      </Link>
                    </Button>
                  </HoverAnimation>
                </div>
              </MotionContainer>
            </div>
          </div>
        </main>
      </AnimatedLayout>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Andrea Malloni. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary radial-hover">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary radial-hover">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
