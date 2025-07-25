import { Code, Palette, Database, Globe, Briefcase, GraduationCap } from "lucide-react"

export const skillsData = [
  { name: "React", level: 95, icon: Code, color: "bg-blue-500", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", level: 90, icon: Code, color: "bg-blue-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", level: 88, icon: Globe, color: "bg-black", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", level: 85, icon: Database, color: "bg-green-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", level: 80, icon: Code, color: "bg-yellow-500", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "UI/UX Design - Figma", level: 75, icon: Palette, color: "bg-purple-500",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
]

export const projectsData = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con React, Node.js y PostgreSQL",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidades avanzadas y colaboración en tiempo real",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard de análisis de datos con visualizaciones interactivas y reportes en tiempo real",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    github: "#",
    demo: "#",
  },
]

export const experienceData = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Presente",
    description:
      "Desarrollo de aplicaciones web escalables usando React, Node.js y AWS. Liderazgo de equipo de 5 desarrolladores.",
    icon: Briefcase,
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Creación de interfaces de usuario modernas y responsivas. Implementación de mejores prácticas de UX/UI.",
    icon: Code,
  },
  {
    title: "Computer Science Degree",
    company: "Universidad Tecnológica",
    period: "2016 - 2020",
    description: "Licenciatura en Ciencias de la Computación con especialización en Desarrollo Web.",
    icon: GraduationCap,
  },
]
