# Portfolio Web Moderno

Un portafolio web profesional construido con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- **Next.js 15** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Lucide React** para iconos
- **Responsive Design** para todos los dispositivos
- **SEO Optimizado** con metadata
- **Componentes modulares** y reutilizables

## 📁 Estructura del Proyecto

\`\`\`
portfolio-nextjs/
├── app/ # App Router de Next.js
│ ├── globals.css # Estilos globales
│ ├── layout.tsx # Layout principal
│ └── page.tsx # Página principal
├── components/ # Componentes React
│ ├── sections/ # Secciones del portafolio
│ ├── ui/ # Componentes UI base
│ ├── ContactForm.tsx # Formulario de contacto
│ ├── Footer.tsx # Footer
│ └── Navigation.tsx # Navegación
├── lib/ # Utilidades y datos
│ ├── data.ts # Datos del portafolio
│ ├── types.ts # Tipos TypeScript
│ └── utils.ts # Utilidades
└── public/ # Assets estáticos
\`\`\`

## 🛠️ Instalación

1. Clona el repositorio:
   \`\`\`bash
   git clone <tu-repositorio>
   cd portfolio-nextjs
   \`\`\`

2. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`

3. Ejecuta el servidor de desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Personalización

### Datos Personales

Edita el archivo `lib/data.ts` para personalizar:

- Habilidades y niveles
- Proyectos y tecnologías
- Experiencia laboral
- Información de contacto

### Estilos

- Modifica `app/globals.css` para cambiar colores y estilos globales
- Personaliza `tailwind.config.js` para ajustar la configuración de Tailwind

### Componentes

Cada sección está en un componente separado en `components/sections/` para fácil mantenimiento.

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Otros Proveedores

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Características Responsive

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Grid Adaptativo**: Se ajusta automáticamente
- **Navegación Móvil**: Menú hamburguesa

## ⚡ Optimizaciones

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automático con App Router
- **SEO**: Metadata y Open Graph
- **Performance**: Server Components por defecto
- **Animations**: Optimizadas con Framer Motion

## 🎨 Personalización de Colores

El portafolio usa un esquema de colores púrpura/rosa. Para cambiarlo:

1. Modifica las clases de gradiente en `globals.css`
2. Actualiza los colores en `tailwind.config.js`
3. Cambia las referencias de color en los componentes

## 📧 Formulario de Contacto

El formulario incluye validación básica. Para conectarlo con un servicio:

1. Instala un servicio como EmailJS o Formspree
2. Modifica `components/ContactForm.tsx`
3. Agrega las variables de entorno necesarias

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter ESLint

## 📄 Licencia

MIT License - Siéntete libre de usar este código para tu propio portafolio.
