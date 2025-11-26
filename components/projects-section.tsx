"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Brinca Aula (Em desenvolvimento)",
    context:
      "Contexto: Professoras da educação infantil enfrentam dificuldade para montar atividades e encontrar materiais adequados para suas aulas",
    solution:
      "Solução: Plataforma que usa IA generativa para sugerir planos de aula, atividades e recursos personalizados.",
    result:
      "Progresso: Primeiros protótipos e testes de geração de conteúdo em desenvolvimento.",
    description:
      "Brinca Aula é um projeto pessoal que visa criar uma plataforma educacional interativa para crianças, utilizando IA generativa para personalizar o conteúdo de aprendizagem.",
    technologies: [
      "Vue.JS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "NestJS",
      "Docker",
      "Cookie",
      "IA Generativa",
    ],
    image: "/brinca-aula.png",
    // github: "#",
    // demo: "#",
    is_private: true,
  },
  {
    title: "App Balde Cheio",
    context:
      "Contexto: Pequenos produtores rurais têm dificuldade para acompanhar a produção diária e manter registros consistentes.",
    solution:
      "Solução: Desenvolvi um aplicativo móvel para registrar produção, visualizar histórico e acessar métricas essenciais de forma rápida e intuitiva.",
    result:
      "Resultado: Aumento no controle da produção, decisão mais rápida e redução de anotações manuais imprecisas.",
    description:
      "Aplicativo móvel para ajudar o pequeno produtor rural a gerenciar sua produção de leite de forma eficiente.",
    technologies: [
      "Capacitor",
      "Vue.JS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "NestJS",
      "Docker",
      "JWT",
      "Multi-tenancy",
    ],
    image: "/app-balde-cheio.png",
    github: "#",
    demo: "#",
    is_private: true,
  },
  {
    title: "Transcritor.ai",
    context:
      "Contexto: Documentos antigos costumam estar desgastados, ilegíveis ou apenas em imagem, dificultando leitura e edição.",
    solution:
      "Atuação: Contribuí no desenvolvimento de uma plataforma que usa IA para converter esses documentos em texto claro e editável.",
    result:
      "Resultado: A ferramenta torna o conteúdo desses materiais mais acessível, reduzindo o esforço manual e facilitando sua preservação digital.",

    description:
      "Plataforma web que utiliza inteligência artificial transcrever documentos antigos em texto editável.",
    technologies: [
      "Vue.JS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "NestJS",
      "Docker",
      "Cookie",
    ],
    // image: "/transcritor-ai.png",
    github: "#",
    demo: "#",
    is_private: true,
  },
  {
    title: "Cripto Tracker",
    context:
      "Contexto: Quis aprofundar meus conhecimentos em consumo de APIs e atualização de dados em tempo real.",
    solution:
      "Solução: Desenvolvi uma aplicação web que utiliza a API pública da CoinGecko para exibir cotações de criptomoedas de forma dinâmica.",
    result:
      "Resultado: O projeto serviu como exercício prático para reforçar integração com APIs, tratamento de dados e construção de interfaces reativas.",
    description:
      "Cripto Track é um projeto pessoal desenvolvido para acompanhar cotações de criptomoedas em tempo real. A aplicação consome dados atualizados da API pública da CoinGecko.",
    technologies: [
      "WebSocket",
      "Redis",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.JS",
    ],
    image:
      "https://github.com/erisnilton/criptotrack/blob/main/public/demo.gif?raw=true",
    github: "https://github.com/erisnilton/criptotrack",
    demo: "#",
  },
  {
    title: "Monitor de Sistema",
    context:
      "Contexto: Buscava aprofundar meu conhecimento em comunicação em tempo real e coleta de métricas do sistema.",
    solution:
      "Solução: Criei uma aplicação full stack que captura informações de CPU, memória e disco via Node.js e envia tudo ao frontend por WebSockets..",
    result:
      "Resultado: O projeto entrega métricas atualizadas instantaneamente, servindo como prática sólida de tempo real, integração backend–frontend e visualização dinâmica de dados.",
    description:
      "Projeto pessoal voltado para o monitoramento em tempo real do sistema operacional, com exibição dinâmica de métricas como uso de CPU, memória e disco. A aplicação utiliza comunicação via WebSocket entre o backend e o frontend, garantindo atualizações instantâneas e uma experiência interativa e responsiva.",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Knex.js",
      "Docker Compose",
      "HTML",
      "CSS",
    ],
    image:
      "https://github.com/erisnilton/monitor-do-sistema/blob/main/frontend/public/screenshot.png?raw=true",
    github: "https://github.com/erisnilton/monitor-do-sistema",
    demo: "#",
  },
  {
    title: "Encurtador de Links",
    context:
      "Contexto: Buscava praticar desenvolvimento full stack e consolidar meus conhecimentos em conteinerização.",
    solution:
      "Solução: Construí um encurtador de URLs usando Node.js, Express e PostgreSQL, totalmente conteinerizado com Docker para simplificar setup e deploy.",
    result:
      "Resultado: O projeto reforçou minha experiência em backend, persistência de dados e Docker, além de gerar uma ferramenta funcional e fácil de escalar.",

    description:
      "Um simples encurtador de URLs criado com Node.js, utilizando Express, PostgreSQL, Knex e conteinerizado com Docker e Docker Compose.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Google Maps API"],
    image: "/encurtador-de-links.png",
    github: "https://github.com/erisnilton/encurtador-de-link",
    demo: "#",
  },
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
          Projetos em Destaque
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Frontend & Full Stack
        </p>

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
                <h3 className="text-2xl font-semibold mb-3 text-balance">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.context}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.solution}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.result}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md bg-muted text-foreground/70 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex ">
                  <Button
                    size="lg"
                     className="flex-1 text-base"
                    asChild
                    disabled={project.is_private}
                  >
                    {project.is_private ? (
                      <span>🔒 Privado</span>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        GitHub
                      </a>
                    )}
                  </Button>
                  {/* <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
