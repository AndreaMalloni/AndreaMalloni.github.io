export interface ProjectData {
  slug: string
  title: string
  description: string
  tags: string[]
  images?: string[]
  client?: string
  duration?: string
  role?: string
  overview?: string
  challenge?: string
  process?: {
    title: string
    description: string
  }[]
  outcome?: string
}

export const projects: ProjectData[] = [
  {
    slug: "apu",
    title: "APU",
    description: "A custom game development framework based on the PyGame module.",
    tags: ["Python", "PyGame", "Framework"],
  },
  {
    slug: "fraud-detector",
    title: "Fraud detector model",
    description:
      "A configurable tool aimed at training a classificator model to spot frauds, based on transactions data.",
    tags: ["Python", "PySpark", "Machine learning"],
  },
  {
    slug: "pathfinder",
    title: "Pathfinder",
    description: "A desktop tool to keep track and organize files in your system.",
    tags: ["Python", "PyQt", "File management"],
    images: ["/pathfinder-banner.png", "/pathfinder-screenshot-1.png", "/pathfinder-screenshot-2.png"],
  },
  {
    slug: "cnc-monitor",
    title: "CNC machine monitor",
    description:
      "A web panel for real-time monitoring the status and execution logs of multiple remote CNC machines.",
    tags: ["Elasticsearch", "Web app", "Big data"],
  },
  {
    slug: "finance-redesign",
    title: "Finance App Redesign",
    description: "Reimagining a personal finance application with improved usability and visual design.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    client: "FinTech Solutions Inc.",
    duration: "3 months",
    role: "Lead UI/UX Designer",
    overview:
      "The client approached me to redesign their existing finance application which was suffering from poor user engagement and high drop-off rates. The goal was to create a more intuitive, visually appealing interface that would help users better manage their finances.",
    challenge:
      "The existing application had a complex information architecture and outdated visual design. Users found it difficult to navigate and complete basic tasks like checking their balance or making transactions.",
    process: [
      {
        title: "Research",
        description:
          "I conducted user interviews, competitive analysis, and heuristic evaluation to understand pain points and opportunities.",
      },
      {
        title: "Information Architecture",
        description: "I reorganized the app structure to create a more logical flow and reduce cognitive load.",
      },
      {
        title: "Wireframing",
        description: "I created low-fidelity wireframes to test different layouts and navigation patterns.",
      },
      {
        title: "Visual Design",
        description:
          "I developed a modern visual language with a clean, accessible interface that aligned with the brand.",
      },
      {
        title: "Prototyping & Testing",
        description: "I built interactive prototypes and conducted usability testing to validate design decisions.",
      },
    ],
    outcome:
      "The redesigned application saw a 45% increase in daily active users and a 60% reduction in support tickets related to usability issues. The client reported a 30% increase in transaction volume within the first month after launch.",
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug)
}
