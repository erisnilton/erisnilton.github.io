"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Download } from "lucide-react"

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-24 px-4">
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Vamos Trabalhar Juntos?</h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Estou sempre aberto a novos desafios e oportunidades
        </p>

        <Card className="p-8 md:p-12 border-border/50">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Interessado em trabalhar comigo? Envie um e-mail ou conecte-se comigo nas redes sociais. Estou sempre
                disponível para discutir novos projetos e oportunidades.
              </p>

              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="mailto:contato@erisnilton">
                    <Mail className="mr-2 h-4 w-4" />
                    contato@erisnilton.dev
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://linkedin.com/in/erisnilton" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    linkedin.com/in/erisnilton
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://github.com/erisnilton" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    github.com/erisnilton
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-muted/30 rounded-lg p-8">
              <div className="text-center mb-8">
                <h4 className="text-xl font-semibold mb-3">Baixe meu Currículo</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Confira minha experiência completa e qualificações
                </p>
              </div>

              <Button size="lg" className="w-full max-w-xs">
                <Download className="mr-2 h-5 w-5" />
                Baixar CV (PDF)
              </Button>

              <div className="mt-8 pt-8 border-t border-border w-full">
                <p className="text-center text-sm text-muted-foreground">
                  Disponível para trabalho remoto e presencial
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
