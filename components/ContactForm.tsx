"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const sanitizeInput = (input: string): string => {
    // Eliminar etiquetas HTML/XML
    let sanitized = input.replace(/<[^>]*>?/gm, '')
    // Eliminar caracteres potencialmente peligrosos
    sanitized = sanitized.replace(/[\\'";%()*+,-./:<=>?[\]^_`{|}~]/g, '')
    // Eliminar espacios en blanco múltiples
    sanitized = sanitized.replace(/\s+/g, ' ').trim()
    return sanitized
  }

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    // Sanitizar y validar inputs
    const name = sanitizeInput(formData.get('name') as string)
    const email = sanitizeInput(formData.get('email') as string)
    const message = sanitizeInput(formData.get('message') as string)

    // Validaciones adicionales
    if (!name || name.length < 2 || name.length > 50) {
      toast({
        title: "Error",
        description: "Por favor ingresa un nombre válido (2-50 caracteres).",
        variant: "destructive"
      })
      setIsSubmitting(false)
      return
    }

    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido.",
        variant: "destructive"
      })
      setIsSubmitting(false)
      return
    }

    if (!message || message.length < 10 || message.length > 1000) {
      toast({
        title: "Error",
        description: "El mensaje debe tener entre 10 y 1000 caracteres.",
        variant: "destructive"
      })
      setIsSubmitting(false)
      return
    }

    // Simular envío del formulario con datos sanitizados
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    })

    setIsSubmitting(false)
    form.reset()
  }

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              type="text"
              placeholder="Tu nombre"
              required
              minLength={2}
              maxLength={50}
              className="bg-white/10 border-white/20 focus:border-purple-400"
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Tu email"
              required
              className="bg-white/10 border-white/20 focus:border-purple-400"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Tu mensaje"
              rows={4}
              required
              minLength={10}
              maxLength={1000}
              className="bg-white/10 border-white/20 focus:border-purple-400 resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-button text-white py-3 rounded-lg text-lg"

          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}