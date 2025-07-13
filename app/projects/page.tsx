"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Navbar } from "@/components/navbar"
import { MotionContainer } from "@/components/motion-container"
import { motion } from "framer-motion"
import { AnimatedBackButton } from "@/components/animated-back-button"
import { AnimatedLayout } from "@/components/animated-layout"

export default function ProjectsPage() {
  const { t } = useLanguage()

  // Animation variants for staggered list items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar activePage="work" isProjectPage={true} />

      <AnimatedLayout>
        <main className="flex-1">
          <section className="container py-12 md:py-24">
            <MotionContainer>
              <div className="flex flex-col gap-4">
                <AnimatedBackButton href="/" label={t("projects.backToHome")} />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("projects.title")}</h1>
                <p className="max-w-[85%] text-muted-foreground sm:text-lg">{t("projects.description")}</p>
              </div>
            </MotionContainer>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {/* Project 1 */}
              <ProjectCard
                title="APU"
                description="A custom game development framework based on the PyGame module."
                slug="apu"
                tags={["Python", "PyGame", "Framework"]}
              />

              {/* Project 2 */}
              <ProjectCard
                title="Fraud detector model"
                description="A configurable tool aimed at training a classificator model to spot frauds, based on transactions data."
                slug="fraud-detector"
                tags={["Python", "PySpark", "Machine learning"]}
              />

              {/* Project 3 */}
              <ProjectCard
                title="Pathfinder"
                description="A desktop tool to keep track and organize files in your system."
                slug="pathfinder"
                tags={["Python", "PyQt", "File management"]}
              />

              {/* Project 4 */}
              <ProjectCard
                title="CNC machine monitor"
                description="A web panel for real-time monitoring the status and execution logs of multiple remote CNC machines."
                slug="cnc-monitor"
                tags={["Elasticsearch", "Web app", "Big data"]}
              />
            </motion.div>
          </section>
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

interface ProjectCardProps {
  title: string
  description: string
  slug: string
  tags: string[]
}

function ProjectCard({ title, description, slug, tags }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div className="group relative overflow-hidden rounded-lg border" variants={itemVariants}>
      <Link href={`/projects/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View Project</span>
      </Link>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={`/placeholder.svg?height=450&width=720`}
          alt={title}
          width={720}
          height={450}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

