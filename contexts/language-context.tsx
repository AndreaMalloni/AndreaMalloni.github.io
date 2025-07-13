"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "it"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Projects",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero Section
    "hero.greeting": "Hi, I'm Andrea Malloni",
    "hero.title": ".NET Backend Developer",
    "hero.description":
      "I'm a junior backend developer specialized in .NET, passionate about building efficient, scalable, and maintainable solutions. In my free time, I dive into Python projects to explore automation, data, and personal tools.",
    "hero.learnMore": "Learn More About Me",
    "hero.getInTouch": "Get In Touch",

    // About Section
    "about.title": "About Me",
    "about.description":
      "I’m a .NET backend developer with a passion for clean architecture and scalable solutions. While .NET is my main stack professionally, I also love experimenting with Python in my free time — building tools, automations, and exploring data-related technologies.",
    "about.experience": "Experience",
    "about.skills": "Skills & Education",
    "about.designSkills": "Technical Skills",
    "about.specialties": "Technologies I Use",
    "about.education": "Education",
    "about.downloadResume": "Download Full Resume",

    // Work Section
    "work.title": "My Work",
    "work.description": "Here are some projects I’ve worked on, both professionally and in my personal time.",
    "work.viewPortfolio": "View My Portfolio",
    "work.portfolioDescription":
      "Explore backend projects built with .NET and Python — from scalable APIs to automated tools.",
    "work.visitBehance": "Visit My GitHub Profile",
    "work.uiDesign": "Backend Development",
    "work.uiDesignDesc": "Building robust APIs and services using .NET, C#, and modern backend practices.",
    "work.uxResearch": "Python Projects",
    "work.uxResearchDesc": "Developing scripts and small apps to automate tasks and explore new ideas.",
    "work.interactionDesign": "System Design",
    "work.interactionDesignDesc": "Designing clean and maintainable architecture for real-world applications.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.info": "Contact Information",
    "contact.connect": "Let's Connect",
    "contact.sendMessage": "Send Me a Message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",

    // Projects Page
    "projects.title": "All Projects",
    "projects.description": "A collection of my personal and professional projects, mostly focused on backend development.",
    "projects.backToHome": "Back to Home",

    // Project Detail
    "project.backToProjects": "Back to Projects",
    "project.client": "Client",
    "project.duration": "Duration",
    "project.role": "Role",
    "project.overview": "Overview",
    "project.challenge": "Challenge",
    "project.process": "Process",
    "project.outcome": "Outcome",
    "project.contactMe": "Contact Me for Similar Projects",


    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Theme
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",

    // Language
    "language.en": "English",
    "language.it": "Italian",
  },
  it: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "Chi Sono",
    "nav.work": "Progetti",
    "nav.contact": "Contatti",
    "nav.resume": "Curriculum",

    // Hero Section
    "hero.greeting": "Ciao, sono Andrea Malloni",
    "hero.title": "Sviluppatore Backend .NET",
    "hero.description":
      "Sono uno sviluppatore backend junior specializzato in .NET, appassionato nel creare soluzioni efficienti, scalabili e manutenibili. Nel tempo libero mi dedico a progetti in Python, la mia grande passione, esplorando automazione, dati e strumenti personali.",
    "hero.learnMore": "Scopri di Più su di Me",
    "hero.getInTouch": "Contattami",

    // About Section
    "about.title": "Chi Sono",
    "about.description":
      "Sono uno sviluppatore backend .NET con una forte passione per l'architettura pulita e le soluzioni scalabili. Utilizzo .NET nel mio lavoro quotidiano, ma nel tempo libero amo sperimentare con Python — costruendo tool, automazioni e progetti personali legati ai dati.",
    "about.experience": "Esperienza",
    "about.skills": "Competenze e Formazione",
    "about.designSkills": "Competenze Tecniche",
    "about.specialties": "Tecnologie che Utilizzo",
    "about.education": "Formazione",
    "about.downloadResume": "Scarica il Curriculum Completo",

    // Work Section
    "work.title": "I Miei Lavori",
    "work.description": "Qui trovi alcuni progetti a cui ho lavorato, sia professionalmente che per passione.",
    "work.viewPortfolio": "Visualizza il Mio Portfolio",
    "work.portfolioDescription":
      "Esplora progetti backend realizzati con .NET e Python — dalle API scalabili agli strumenti automatizzati.",
    "work.visitBehance": "Visita il Mio Profilo GitHub",
    "work.uiDesign": "Sviluppo Backend",
    "work.uiDesignDesc":
      "Creazione di API e servizi robusti utilizzando .NET, C# e buone pratiche di progettazione.",
    "work.uxResearch": "Progetti in Python",
    "work.uxResearchDesc":
      "Sviluppo di script e applicazioni per automatizzare compiti ed esplorare nuove idee.",
    "work.interactionDesign": "Progettazione di Sistemi",
    "work.interactionDesignDesc":
      "Progettazione di architetture pulite e facilmente manutenibili per applicazioni reali.",

    // Contact Section
    "contact.title": "Contattami",
    "contact.info": "Informazioni di Contatto",
    "contact.connect": "Connettiti con Me",
    "contact.sendMessage": "Inviami un Messaggio",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Messaggio",
    "contact.send": "Invia Messaggio",
    "contact.sending": "Invio in corso...",

    // Projects Page
    "projects.title": "Tutti i Progetti",
    "projects.description": "Una raccolta dei miei progetti personali e professionali, con focus sullo sviluppo backend.",
    "projects.backToHome": "Torna alla Home",

    // Project Detail
    "project.backToProjects": "Torna ai Progetti",
    "project.client": "Cliente",
    "project.duration": "Durata",
    "project.role": "Ruolo",
    "project.overview": "Panoramica",
    "project.challenge": "Sfida",
    "project.process": "Processo",
    "project.outcome": "Risultato",
    "project.contactMe": "Contattami per Progetti Simili",


    // Footer
    "footer.rights": "Tutti i diritti riservati.",
    "footer.privacy": "Informativa sulla Privacy",
    "footer.terms": "Termini di Servizio",

    // Theme
    "theme.light": "Modalità Chiara",
    "theme.dark": "Modalità Scura",

    // Language
    "language.en": "Inglese",
    "language.it": "Italiano",
  },
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "it")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
