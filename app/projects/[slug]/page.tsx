import { projects, getProjectBySlug } from "@/lib/projects"
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
import ProjectClientView from "@/components/project-client-view"

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projectData = getProjectBySlug(slug)

  if (!projectData) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="text-muted-foreground mt-4">Check the URL or go back to the projects page.</p>
        <Link href="/projects" className="mt-6 inline-block underline text-primary">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return <ProjectClientView projectData={projectData} />
}
