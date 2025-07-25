"use client"

import { motion } from "framer-motion"
import { User, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import GradientText from "./ui/gradientext"

export default function AboutSection() {
  return (

    <section id="sobre-mi" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText>
              <span>Sobre Mí</span>
            </GradientText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <User className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-semibold">Mi Historia</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Soy un desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Con más de
                  5 años de experiencia en el desarrollo web, me especializo en tecnologías modernas como React, Node.js
                  y TypeScript.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mi enfoque se centra en escribir código limpio, escalable y mantener las mejores prácticas de
                  desarrollo. Disfruto trabajando en equipo y siempre estoy buscando nuevos desafíos que me permitan
                  crecer profesionalmente.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold">Logros Destacados</h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Liderazgo de equipo de 5+ desarrolladores</li>
                  <li>• 20+ proyectos completados exitosamente</li>
                  <li>• Certificación en AWS y Google Cloud</li>
                  <li>• Speaker en conferencias de tecnología</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold">Idiomas</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Español</span>
                    <span className="text-purple-400">Nativo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inglés</span>
                    <span className="text-purple-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Portugués</span>
                    <span className="text-purple-400">Intermedio</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
