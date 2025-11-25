"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", url: "https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg"},
      { name: "Vue.js"},
      { name: "TypeScript"},
      { name: "Next.js"},
      { name: "Unocss CSS"},
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NestJS"},
      { name: "Node.js"},
      { name: "Express"},
      { name: "JWT"},
      { name: "Java"},
      { name: "Spring Boot"},

      
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "ArangoDB"  },
      { name: "Redis" },
      { name: "Redis Stream" },
      { name: "Docker" },
      { name: "GCP" },
    ],
  },
  {
    title: "Arquitetura & Práticas",
    skills: [
      { name: "MVC" },
      { name: "Clean Architecture" },
      { name: "REST APIs" },
      { name: "Microservices" },
      { name: "TDD" },
      { name: "DDD" },
      {
        name: 'Multi-tenancy'
      }
    ],
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} className="py-24 px-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Habilidades & Ferramentas</h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">Tecnologias que domino</p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-8 border-border/50">
              <h3 className="text-2xl font-semibold mb-8 text-primary">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-3">
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
