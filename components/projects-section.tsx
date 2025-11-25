"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Brinca Aula (Em desenvolvimento)",
    description: "Brinca Aula é um projeto pessoal que visa criar uma plataforma educacional interativa para crianças, utilizando IA generativa para personalizar o conteúdo de aprendizagem.",
    technologies: ["Vue.JS", "TypeScript", "Node.js", "PostgreSQL", "NestJS", "Docker", "Cookie", "IA Generativa"],
    image: "/brinca-aula.png",
    // github: "#",
    // demo: "#",
  },
  {
    title: "App Balde Cheio",
    description: "Aplicativo móvel para ajudar o pequeno produtor rural a gerenciar sua produção de leite de forma eficiente.",
    technologies: ["Capacitor", "Vue.JS", "TypeScript", "Node.js", "PostgreSQL", "NestJS", "Docker", "JWT", "Multi-tenancy"],
    image: "/app-balde-cheio.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Transcritor.ai",
    description: "Plataforma web que utiliza inteligência artificial transcrever documentos antigos em texto editável.",
    technologies: ["Vue.JS", "TypeScript", "Node.js", "PostgreSQL", "NestJS", "Docker", "Cookie"],
    // image: "/transcritor-ai.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Cripto Tracker ",
    description: "Cripto Track é um projeto pessoal desenvolvido para acompanhar cotações de criptomoedas em tempo real. A aplicação consome dados atualizados da API pública da CoinGecko.",
    technologies: ["WebSocket", "Redis", "Express", "HTML", "CSS", "JavaScript", "Vue.JS"],
    image: "https://github.com/erisnilton/criptotrack/blob/main/public/demo.gif?raw=true",
    github: "https://github.com/erisnilton/criptotrack",
    demo: "#",
  },
  {
    title: "Monitor de Sistema",
    description: "Projeto pessoal voltado para o monitoramento em tempo real do sistema operacional, com exibição dinâmica de métricas como uso de CPU, memória e disco. A aplicação utiliza comunicação via WebSocket entre o backend e o frontend, garantindo atualizações instantâneas e uma experiência interativa e responsiva.",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Docker", "Knex.js", "Docker Compose", "HTML", "CSS",],
    image: "https://github.com/erisnilton/monitor-do-sistema/blob/main/frontend/public/screenshot.png?raw=true",
    github: "https://github.com/erisnilton/monitor-do-sistema",
    demo: "#",
  },
  {
    title: "Encurtador de Links",
    description: "Um simples encurtador de URLs criado com Node.js, utilizando Express, PostgreSQL, Knex e conteinerizado com Docker e Docker Compose.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Google Maps API"],
    image: "/encurtador-de-links.png",
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Projetos em Destaque</h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">Frontend & Full Stack</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50"
            >
              <div className="relative overflow-hidden aspect-video bg-muted/30">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-balance">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-muted text-foreground/70 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Repositório
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
