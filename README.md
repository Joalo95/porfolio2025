# Former Force - Portfolio Personal

Un portfolio web moderno y elegante construido con **Astro**, que presenta un diseño futurista con efectos de vidrio esmerilado y animaciones suaves.

## 🚀 Descripción

Este proyecto es un portfolio personal interactivo que incluye:

- **Sección About Me**: Información personal y profesional
- **Proyectos**: Carrusel interactivo mostrando proyectos destacados con enlaces a GitHub y sitios web
- **Experiencia**: Timeline de experiencia profesional
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Efectos Visuales**: Glassmorphism, animaciones CSS y transiciones suaves

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework web moderno
- **TypeScript** - Tipado estático
- **SCSS/CSS** - Estilos avanzados con preprocesador
- **PostCSS** - Procesamiento de CSS
- **Ionicons** - Iconografía moderna

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd former-force
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 🎯 Características Principales

### Carrusel Interactivo
- Navegación con botones anterior/siguiente
- Transiciones suaves entre elementos
- Contenido dinámico sincronizado
- Soporte para proyectos y experiencias

### Diseño Glassmorphism
- Efectos de vidrio esmerilado
- Bordes sutiles y transparencias
- Gradientes modernos
- Tipografía futurista (Orbitron, Space Mono)

### Componentes Reutilizables
- `Card.astro` - Tarjetas con efecto glass
- `Carousel.astro` - Carrusel interactivo
- `Button.astro` - Botones con variantes
- `Home.astro` - Página principal

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Card.astro          # Componente de tarjeta
│   ├── Carousel.astro      # Carrusel interactivo
│   ├── Carousel.css        # Estilos del carrusel
│   ├── Button.astro        # Componente de botón
│   ├── Home.astro          # Página principal
│   └── Home.scss           # Estilos principales
├── lib/
│   └── data.ts             # Datos de proyectos y experiencias
└── pages/
    └── index.astro         # Página de entrada
```

## 🎨 Personalización

### Agregar Nuevos Proyectos
Edita el archivo `src/lib/data.ts` y agrega nuevos elementos al array `projects`:

```typescript
{
  id: 'nuevo-proyecto',
  title: 'Mi Nuevo Proyecto',
  description: 'Descripción del proyecto...',
  image: 'url-de-la-imagen',
  github: 'https://github.com/usuario/proyecto',
  website: 'https://proyecto.com'
}
```

### Modificar Estilos
Los estilos principales están en:
- `src/components/Home.scss` - Estilos generales
- `src/components/Carousel.css` - Estilos del carrusel

## 📱 Responsive Design

El portfolio está optimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**Desarrollado con ❤️ usando Astro**
