import type { LucideIcon } from "lucide-react"

export interface Skill {
  name: string
  level: number
  icon: LucideIcon
  color: string
  logo?: string // logo SVG remoto opcional
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  icon: LucideIcon
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
}
