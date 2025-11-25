"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Sparkles, Layers } from "lucide-react"

export function AboutSection() {
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
        className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance">Sobre Mim</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border/50">
            <Code2 className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-3">Experiência Sólida</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mais de 5 anos desenvolvendo soluções full stack com as tecnologias mais modernas do mercado.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border/50">
            <Sparkles className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-xl font-semibold mb-3">Paixão por Desenvolvimento</h3>
            <p className="text-muted-foreground leading-relaxed">
              Apaixonado por criar aplicações web inovadoras e eficientes, sempre buscando as melhores práticas de
              desenvolvimento.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border/50">
            <Layers className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-3">Clean Architecture</h3>
            <p className="text-muted-foreground leading-relaxed">
              Especialista em arquitetura limpa e desenvolvimento de sistemas escaláveis e sustentáveis.
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Desenvolvedor Full Stack formado em Ciência da Computação, com expertise em criar aplicações web modernas e
            robustas. Especializado em ReactJS, VueJS, NodeJS, TypeScript, PostgreSQL, Java e Spring Boot.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Apaixonado por tecnologia, arquitetura de software e desenvolvimento de backends escaláveis. Sempre em busca
            de novos desafios e oportunidades para criar soluções inovadoras.
          </p>
        </div>
      </div>
    </section>
  )
}
