# 🚀 GAM Portfolio - Portfolio Profesional de Gonzalo A.M.

Portfolio web moderno y responsivo showcasing proyectos de automatización, IA generativa y desarrollo tecnológico. Construido con tecnologías web estándar y optimizado para rendimiento y experiencia de usuario.

## 📋 Tabla de Contenidos

- [🏗️ Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📁 Estructura de Directorios](#-estructura-de-directorios)
- [🚀 Configuración y Despliegue](#-configuración-y-despliegue)
- [📝 Gestión de Contenido](#-gestión-de-contenido)
- [🎨 Personalización y Estilos](#-personalización-y-estilos)
- [🔧 Mantenimiento y Actualizaciones](#-mantenimiento-y-actualizaciones)
- [📊 Métricas y Optimización](#-métricas-y-optimización)
- [📄 Licencia](#-licencia)

## 🏗️ Arquitectura del Proyecto

Este portfolio sigue una arquitectura modular y escalable:

- **Estructura SPA (Single Page Application)** con navegación suave
- **Carga dinámica de contenido** mediante JSON para la sección "Sobre Mí"
- **Sistema de filtrado** de proyectos por categorías múltiples
- **Animaciones scroll-based** con Intersection Observer
- **Formulario de contacto** con webhook externo para procesamiento
- **Diseño responsive** mobile-first con breakpoints optimizados

## 🛠️ Stack Tecnológico

### Frontend Core
- **HTML5**: Semántico, accesible y SEO-optimizado
- **CSS3**: Custom Properties, Flexbox, Grid, animaciones modernas
- **JavaScript ES6+**: Módulos, async/await, APIs modernas

### Estilos y Diseño
- **CSS Custom Properties** para tema consistente
- **Flexbox & Grid Layout** para diseños responsivos
- **CSS Animations & Transitions** para microinteracciones
- **Mobile-first responsive design**
- **Font Awesome 6.0** para iconografía

### Herramientas de Desarrollo
- **Git**: Control de versiones
- **Node.js**: Scripts de automatización (update-projects.js)
- **Live Server**: Desarrollo local

### Integraciones Externas
- **Google Fonts**: Inter y Poppins
- **Webhook Service**: Procesamiento de formularios (yugidexgam.duckdns.org)
- **Font Awesome CDN**: Iconos vectoriales

## 📁 Estructura de Directorios

```
gam-portfolio/
├── 📁 assets/                     # Recursos estáticos del proyecto
│   ├── 📁 docus/                  # Documentación técnica (PDFs)
│   │   ├── Documentacion-Yugidex-GAM.pdf
│   │   ├── Proyecto Final Make_Gonzalo A.M..pdf
│   │   └── Proyecto Final n8n_Gonzalo A.M..pdf
│   ├── 📁 icons/                  # Iconos y elementos gráficos
│   ├── 📁 img/                    # Imágenes del portfolio
│   │   ├── foto-perfil.png        # Foto de perfil principal
│   │   ├── profile-placeholder.jpg
│   │   ├── project-auto-1.jpg
│   │   └── 📁 projects/           # Imágenes específicas de proyectos
│   │       ├── yugidex/           # Assets del proyecto YugiDex
│   │       ├── yugidex_n8n/       # Assets de automatización YugiDex
│   │       ├── n8n_projects/      # Assets de proyectos n8n
│   │       ├── make/              # Assets de proyectos Make
│   │       ├── elreydeljamon/     # Assets de tienda online
│   │       ├── publi/             # Assets de spot publicitario
│   │       └── repair/            # Assets de reparaciones
│   └── 📁 videos/                 # Videos y contenido multimedia
│       └── 📁 projects/           # Videos de proyectos específicos
├── 📁 content/                    # Contenido dinámico y datos
│   ├── 📁 about/                  # Contenido de sección About
│   └── about.json                 # Datos biográficos estructurados
├── 📁 css/                        # Hojas de estilo
│   ├── reset.css                  # Reset CSS base
│   ├── project.css                # Estilos para páginas de proyectos
│   ├── projects-common.css        # Estilos compartidos de proyectos
│   └── scroll-effects.css         # Animaciones y efectos scroll
├── 📁 js/                         # Módulos JavaScript
│   ├── main.js                    # Lógica principal del portfolio
│   ├── project-animations.js      # Animaciones específicas de proyectos
│   └── scroll-animation.js        # Sistema de animaciones scroll-based
├── 📁 projects/                   # Páginas detalladas de proyectos
│   ├── project-documentacion.html  # Documentación técnica
│   ├── project-make-gestor-pedidos.html
│   ├── project-n8n-otros-proyectos.html
│   ├── project-n8n-yugidex.html
│   ├── project-repairs.html
│   ├── project-reydeljamon.html
│   ├── project-spot-publicitario.html
│   └── project-yugidex.html
├── index.html                     # Página principal del portfolio
├── update-projects.js            # Script de actualización masiva
└── README.md                      # Documentación del proyecto
```

## 🚀 Configuración y Despliegue

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional pero recomendado)

### Instalación y Ejecución Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/GAM-Sama/gam-portfolio.git
   cd gam-portfolio
   ```

2. **Opción A: Servidor local recomendado**:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server -p 8000
   
   # Con PHP
   php -S localhost:8000
   ```
   Acceder a: http://localhost:8000

3. **Opción B: Abrir directamente**:
   - Abrir `index.html` directamente en el navegador (limita algunas funcionalidades)

### Despliegue en Producción

**GitHub Pages** (Recomendado):
1. Subir a repositorio GitHub
2. Activar GitHub Pages en Settings
3. Seleccionar rama `main` y carpeta `/root`

**Netlify/Vercel**:
1. Conectar repositorio
2. Configurar build command: `echo "No build required"`
3. Set publish directory: `.`

**Hosting tradicional**:
1. Subir archivos vía FTP/Panel de control
2. Asegurar servidor web estático

## 📝 Gestión de Contenido

### Sistema Dinámico "Sobre Mí"

El contenido se gestiona mediante `content/about.json`:

```json
{
  "shortVersion": "Descripción breve para vista inicial",
  "professionalVersion": [
    "Array de strings para versión extendida",
    {
      "items": ["Array de puntos para listas"]
    }
  ]
}
```

**Actualización**:
1. Editar `content/about.json`
2. Recargar página (los cambios se aplican automáticamente)
3. El sistema incluye cache-busting con timestamp

### Gestión de Proyectos

**Añadir nuevo proyecto**:
1. Crear archivo HTML en `/projects/` siguiendo la plantilla
2. Añadir tarjeta de proyecto en `index.html`
3. Incluir assets en `/assets/img/projects/[nombre-proyecto]/`
4. Ejecutar `node update-projects.js` para actualización masiva

**Categorías disponibles**:
- `ia` - Inteligencia Artificial
- `desarrollo` - Desarrollo Web/App
- `automatizacion` - Automatizaciones
- `mantenimiento` - Mantenimiento y Soporte
- `retro` - Proyectos Retro/Hardware

### Sistema de Filtrado

Los proyectos se filtran mediante atributos `data-category`:
```html
<div class="project-card" data-category="ia desarrollo">
```

## 🎨 Personalización y Estilos

### Sistema de Diseño

**Variables CSS Principales**:
```css
:root {
  --primary-color: #4a6cf7;
  --primary-hover: #6b8cff;
  --bg-primary: #0a0a0f;
  --bg-secondary: #1a1a2e;
  --text-primary: #f8f9fa;
  --text-secondary: #a0a0a0;
  --border-color: #2a2a3e;
}
```

**Tipografía**:
- **Principal**: 'Inter', sans-serif (Google Fonts)
- **Títulos**: 'Poppins', sans-serif (Google Fonts)
- **Iconos**: Font Awesome 6.0

### Modificación de Colores

1. Editar variables CSS en archivos de estilos
2. Los cambios se aplican globalmente mediante Custom Properties
3. Considerar contraste y accesibilidad WCAG

### Animaciones y Efectos

**Sistema de animaciones scroll**:
- Clase `.reveal` para elementos animados
- Configuración en `js/scroll-animation.js`
- Personalizable umbral de visibilidad

**Microinteracciones**:
- Hover effects en botones y cards
- Transiciones suaves (0.3s standard)
- Loading states y feedback visual

## 🔧 Mantenimiento y Actualizaciones

### Script de Actualización Masiva

`update-projects.js` automatiza la actualización de páginas de proyectos:

```bash
node update-projects.js
```

**Funcionalidades**:
- Añade CSS común a todas las páginas
- Incluye scripts de animación
- Aplica clases para animaciones scroll
- Estandariza estructura HTML

### Buenas Prácticas

**Para nuevos proyectos**:
1. Seguir estructura HTML consistente
2. Usar clases CSS existentes
3. Optimizar imágenes (WebP preferido)
4. Incluir meta descripciones SEO

**Para mantenimiento**:
1. Revisar enlaces rotos periódicamente
2. Optimizar rendimiento (PageSpeed Insights)
3. Actualizar dependencias externas
4. Testear en múltiples dispositivos

## 📊 Métricas y Optimización

### Rendimiento Web

**Optimizaciones implementadas**:
- Lazy loading de imágenes
- CSS y JavaScript minificados
- Font loading optimizado
- Cache headers configurados

**Métricas objetivo**:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### SEO y Accesibilidad

**Meta tags optimizados**:
```html
<meta name="description" content="Portfolio de Gonzalo A.M. - Especialista en Automatización, IA Generativa y Desarrollo">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Accesibilidad**:
- Estructura semántica HTML5
- Navegación por teclado
- Contraste de colores WCAG AA
- Alt text en imágenes

### Analíticas (Opcional)

Para integrar Google Analytics u otras herramientas:
1. Añadir scripts antes de `</head>`
2. Configurar eventos personalizados
3. Monitorizar conversiones de contacto

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License**.

**Permisos**:
- ✅ Uso comercial
- ✅ Modificación
- ✅ Distribución
- ✅ Uso privado

**Condiciones**:
- Incluir licencia y copyright
- Mantener aviso de licencia

---

## 📞 Contacto y Redes Sociales

- **Email**: g.a.m.1992@hotmail.com
- **LinkedIn**: [linkedin.com/in/gonzalo-arribas-montenegro-a963378a/](https://www.linkedin.com/in/gonzalo-arribas-montenegro-a963378a/)
- **GitHub**: [github.com/GAM-Sama](https://github.com/GAM-Sama)
- **X (Twitter)**: [@GAM_Ai_Sama](https://x.com/GAM_Ai_Sama)

---

🚀 **Portfolio desarrollado con ❤️ por Gonzalo A.M.**  
*Especialista en Automatización, IA Generativa y Desarrollo Tecnológico*

*Última actualización: Diciembre 2025*
