# 🚀 Portafolio Web

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.3-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-2.0-8B5CF6?style=for-the-badge)](https://lucide.dev/)

> Portafolio personal moderno y responsive desarrollado con las últimas tecnologías web. Diseñado para mostrar proyectos, habilidades técnicas y experiencia profesional de manera elegante e interactiva.

---

## ✨ Características Destacadas

✔️ **Next.js 15** (App Router, Server Components, SEO avanzado)
✔️ **TypeScript** estricto para máxima robustez
✔️ **Tailwind CSS** y personalización total de estilos
✔️ **Framer Motion** para animaciones fluidas
✔️ **Lucide React** para iconografía moderna
✔️ **Diseño 100% Responsive**
✔️ **SEO y Performance** de alto nivel
✔️ **Componentes modulares y reutilizables**
✔️ **Fácil personalización y despliegue**

## 📁 Estructura del Proyecto

```bash
portfolio-web/
├── app/              # App Router y estilos globales
│   ├── globals.css   # Estilos globales y paleta
│   ├── layout.tsx    # Layout principal
│   └── page.tsx      # Página principal
├── components/       # Componentes React
│   ├── sections/     # Secciones del portafolio
│   ├── ui/           # Componentes UI reutilizables
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── lib/              # Utilidades y datos
│   ├── data.ts
│   ├── types.ts
│   └── utils.ts
└── public/           # Imágenes y assets
```

## ⚡ Instalación Rápida

```bash
git clone <tu-repositorio>
cd portfolio-web
npm install
npm run dev
# Abre http://localhost:3000
```

## 🎨 Personalización Total

### 1. Datos Personales

Edita `lib/data.ts` para modificar:

- Habilidades, proyectos, experiencia, contacto

### 2. Colores y Estilos

- Cambia la paleta en `app/globals.css` (usa gradientes, variables CSS y Tailwind)
- Personaliza `tailwind.config.js` para tu branding

### 3. Componentes

Cada sección es un componente independiente en `components/sections/` para fácil edición y escalabilidad.

## 🚀 Despliegue en 1 Click

### Vercel (Recomendado)

1. Conecta tu repo en [Vercel](https://vercel.com/)
2. Configura variables de entorno si es necesario
3. ¡Despliegue automático y gratis!

### Otros Proveedores

```bash
npm run build
npm start
```

## 📱 Responsive & Mobile First

- **Mobile First**: Experiencia optimizada desde el inicio
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Grid Adaptativo** y navegación móvil moderna

## ⚡ Optimizaciones Avanzadas

- **Optimización de imágenes** con Next.js
- **Code Splitting** automático
- **SEO**: Metadata, Open Graph y accesibilidad
- **Server Components** y performance superior
- **Animaciones fluidas** con Framer Motion

## 🎨 Cambia la Paleta de Colores

El portafolio usa gradientes modernos. Para personalizar:

1. Edita los gradientes y variables en `app/globals.css`
2. Ajusta la configuración en `tailwind.config.js`
3. Cambia referencias en los componentes según tu branding

## 📧 Formulario de Contacto Profesional

Incluye validación y es fácil de conectar con servicios como EmailJS, Formspree, Resend, etc.

1. Instala el servicio deseado
2. Modifica `components/ContactForm.tsx`
3. Agrega las variables de entorno necesarias

## Scripts Útiles

- `npm run dev` — Servidor de desarrollo
- `npm run build` — Build de producción
- `npm run start` — Servidor de producción
- `npm run lint` — Linter y formateo

---

## 📄 Licencia

MIT License - Siéntete libre de usar este código para tu propio portafolio.

⭐ **Si te gusta este proyecto, ¡déjame una estrella en GitHub!**
