"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Database, Server, Lock } from "lucide-react"

const backendProjects = [
  {
    title: "Balde Cheio API",
    description: "API RESTful para gerenciamento de produção leiteira, com autenticação JWT e arquitetura multi-tenant.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "JWT", "NestJS", "Docker", "Swagger", "Knex.js", "Objection.js", "Multi-tenancy"],
    icon: Server,
    github: "#",
    docs: "#",
  },
    {
    title: "Transcritor.ia API",
    description: "API Restful para transcrição de documentos antigos utilizando modelos de IA.",
    stack: ["Node.js", "TypeScript", "NestJS", "Redis", "Redis Streams", "Docker", "Cookie-based Auth"],
    icon: Server,
    github: "#",
    docs: "#",
  },
  {
    title: "Cripto Tracker API",
    description: "API para fornecimento de cotações de criptomoedas em tempo real, utilizando WebSocket e cache com Redis.",
    stack: ["Java", "Spring Boot", "RabbitMQ", "Docker", "Kubernetes"],
    icon: Server,
    github: "https://github.com/erisnilton/criptotrack",
    docs: "#",
  },
  {
    title: "Encurtador de Links API",
    description: "Serviço de autenticação com OAuth2, refresh tokens e integração com provedores externos.",
    stack: ["Node.js", "Express", "PostgreSQL", "OAuth2", "Passport.js"],
    icon: Server,
    github: "https://github.com/erisnilton/encurtador-de-link",
    docs: "#",
  },

  {
    title: "Monitor de Sistema API",
    description: "API GraphQL com DataLoader, subscriptions em tempo real e otimização de queries.",
    stack: ["Node.js", "GraphQL", "Apollo Server", "PostgreSQL", "Redis"],
    icon: Server,
    github: "https://github.com/erisnilton/monitor-do-sistema",
    docs: "#",
  },
  // {
  //   title: "Event-Driven System",
  //   description: "Sistema orientado a eventos com Kafka, processamento distribuído e event sourcing.",
  //   stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
  //   icon: Server,
  //   github: "#",
  //   docs: "#",
  // },
]

export function BackendProjectsSection() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-muted/20">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Projetos Backend</h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">APIs, Infraestrutura & Arquitetura</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backendProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-balance leading-tight">{project.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-md bg-muted text-foreground/50 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Repo
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.docs} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Docs
                    </a>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
