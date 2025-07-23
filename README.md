# II Foro Internacional de Paz Granada 2025
## Fundación Unamos Culturas

Este repositorio contiene el sitio web oficial del II Foro Internacional de Paz Granada 2025, organizado por la Fundación Unamos Culturas. El sitio presenta una plataforma moderna e interactiva para promover el evento, destacar la misión de la organización y facilitar la participación de usuarios de todo el mundo.

## 🎨 Diseño e Identidad Visual

El sitio web refleja la nueva identidad visual de la Fundación Unamos Culturas, basada en cuatro pilares fundamentales:

- **🔴 Rojo (#e53e3e)**: Ciencia - Motor de conocimiento, investigación y diálogo académico
- **🔵 Azul (#3182ce)**: Arte - Lenguaje universal de expresión, memoria viva y transformación social
- **🟢 Verde (#38a169)**: Cultura - Articula saberes, prácticas comunitarias y tradiciones
- **🟣 Púrpura (#9f7aea)**: Memoria - Dignidad de los pueblos originarios latinoamericanos

## 🚀 Características Principales

### ✨ Experiencia de Usuario
- **Diseño responsivo** que se adapta a móviles, tabletas y escritorios
- **Navegación fija** con efecto blur para mejor usabilidad
- **Animaciones sutiles** usando AOS.js para entrada de elementos
- **Smooth scrolling** para transiciones fluidas entre secciones

### 🎯 Funcionalidades Interactivas
- **Modales informativos** para el programa detallado del foro (6 días de actividades)
- **Carrusel de galería** con Swiper.js para imágenes y videos
- **Formularios dinámicos** para colaboración, contacto y suscripción
- **Sistema de notificaciones** para feedback de usuario
- **Tooltips interactivos** en círculos de identidad

### 📅 Contenido del Evento
- **Programa completo** del II Foro (20-25 octubre 2025)
- **II Simposio Internacional** de Investigación para la Paz (28-30 octubre 2025)
- **Información de ponentes** destacados (Francisco de Roux, Jenny Pearce, Ashok Swain)
- **Exposiciones y actividades** culturales (Abya Yala, Día de Confucio)

## 🏗️ Estructura del Proyecto

```
proyecto/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos principales
├── js/
│   └── main.js            # JavaScript principal
├── assets/
│   ├── images/            # Imágenes del sitio
│   ├── documents/         # PDFs y documentos
│   ├── logo.png           # Logo de la fundación
│   └── favicon.ico        # Favicon del sitio
├── README.md              # Documentación del proyecto
└── .gitkeep               # Mantener estructura de carpetas
```

## 🎯 Secciones del Sitio Web

### 1. 🏠 Inicio (Hero)
- Banner de pantalla completa con gradiente animado
- Información principal del evento (fechas, ubicación)
- Call-to-action prominentes
- Lema de la fundación: "¿Y tú, qué haces por la paz?"

### 2. 📰 Últimas Noticias
- Grid responsivo con 3 noticias destacadas
- Iconografía por categoría (ciencia, arte, cultura, memoria)
- Enlaces a sección de noticias completa

### 3. 📧 Newsletter
- Formulario de suscripción con gradiente de fondo
- Integración futura con sistema de email marketing

### 4. 👥 Quiénes Somos
- Círculos interactivos de identidad con tooltips
- Grid de información institucional (Historia, Misión, Valores, Equipo)
- Animaciones al hover en tarjetas

### 5. 🎯 Programas y Proyectos
- Tres ejes principales con iconografía
- Estadísticas de impacto
- Llamada a la acción para colaboración

### 6. 🕊️ Foros Internacionales de Paz
- Timeline de foros (pasado, presente, futuro)
- **Programa detallado** con modales por día
- **Ponentes destacados** con fotografías
- **II Simposio Internacional** con 12 mesas temáticas
- Calendario de convocatorias y fechas importantes

### 7. 🖼️ Galería y Memoria Histórica
- Carrusel interactivo con Swiper.js
- Modales de galería para diferentes eventos
- Testimonios de participantes

### 8. 📰 Noticias y Publicaciones
- Layout de blog con sidebar
- Categorización por temas
- Sección de publicaciones descargables
- Licencia Creative Commons BY-NC-SA 4.0

### 9. 🤝 Colabora
- Tres modalidades: Voluntariado, Patrocinio, Convenios
- Formularios modales específicos por tipo
- Formulario general de propuestas de cooperación

### 10. 📞 Contacto
- Información de contacto con iconografía
- Formulario de consultas
- Enlaces a redes sociales estilizados

### 11. 🦶 Footer
- Links organizados por categorías
- Información de copyright y licencias
- Redes sociales y recursos adicionales

## 🛠️ Tecnologías Utilizadas

### Frontend Base
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript (ES6+)** - Interactividad y funcionalidades

### Bibliotecas Externas
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Tipografía principal
- **[Font Awesome 6.5.1](https://fontawesome.com/)** - Iconografía
- **[Swiper.js 11](https://swiperjs.com/)** - Carrusel de galería
- **[AOS 2.3.1](https://michalsnik.github.io/aos/)** - Animaciones al scroll

### Características CSS
- **CSS Grid & Flexbox** - Layouts responsivos
- **CSS Variables** - Sistema de design tokens
- **CSS Animations** - Animaciones personalizadas
- **Media Queries** - Responsive design
- **Backdrop Filter** - Efectos modernos

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Servidor local opcional (Live Server extension)

### Configuración Local

1. **Clonar el repositorio**
```bash
git clone [repository-url]
cd ii-foro-paz-granada-2025
```

2. **Abrir con Live Server (Recomendado)**
- Instalar la extensión "Live Server" en VS Code
- Clic derecho en `index.html` → "Open with Live Server"
- El sitio se abrirá en `http://localhost:5500`

3. **O abrir directamente**
- Abrir `index.html` en cualquier navegador moderno
- Todas las funcionalidades trabajarán localmente

### Estructura de Desarrollo

```css
/* Variables CSS principales */
:root {
    --color-science: #e53e3e;    /* Rojo - Ciencia */
    --color-art: #3182ce;        /* Azul - Arte */  
    --color-culture: #38a169;    /* Verde - Cultura */
    --color-memory: #9f7aea;     /* Púrpura - Memoria */
}
```

## 🎨 Guía de Estilo

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| Ciencia | `#e53e3e` | Botones primarios, enlaces, elementos de ciencia |
| Arte | `#3182ce` | Botones secundarios, elementos de arte |
| Cultura | `#38a169` | Elementos de cultura, éxito/confirmación |
| Memoria | `#9f7aea` | Elementos de memoria, testimonios |
| Grises | `#f7fafc` - `#171923` | Textos, fondos, bordes |

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Pesos**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Tamaños**: Escala modular de 0.75rem a 3.75rem

### Espaciado
Sistema basado en múltiplos de `0.25rem`:
- `--space-1`: 0.25rem
- `--space-4`: 1rem
- `--space-8`: 2rem
- `--space-16`: 4rem

### Componentes

#### Botones
```css
.btn-primary   /* Rojo - Acciones principales */
.btn-secondary /* Azul - Acciones secundarias */
.btn-outline   /* Transparente - Acciones terciarias */
```

#### Tarjetas
```css
.news-card     /* Noticias con bordes temáticos */
.about-card    /* Información institucional */
.program-card  /* Programas con iconografía */
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1023px`
- **Desktop**: `≥ 1024px`
- **Large Desktop**: `≥ 1280px`

### Características Móviles
- Menú hamburguesa animado
- Navegación vertical en móviles
- Carrusel de una columna
- Formularios apilados
- Botones de pantalla completa

## ⚡ Optimización y Performance

### Imágenes
- Formato WebP recomendado
- Lazy loading implementado (`loading="lazy"`)
- Compresión optimizada
- Responsive images con `srcset`

### JavaScript
- Carga diferida de bibliotecas externas
- Event delegation para mejor performance
- Debouncing en scroll events
- Módulos organizados por funcionalidad

### CSS
- CSS Variables para consistency
- Minimización de reflows
- Animaciones optimizadas con `transform`
- Media queries mobile-first

## 🔧 Personalización

### Cambiar Colores
Editar las variables CSS en `:root`:
```css
:root {
    --color-science: #nueva-color;
    /* Aplicará en todo el sitio automáticamente */
}
```

### Agregar Nuevas Secciones
1. Agregar HTML semántico
2. Incluir `data-aos` para animaciones
3. Añadir estilos siguiendo la guía
4. Actualizar navegación en JS

### Formularios Backend
Modificar las funciones en `js/main.js`:
```javascript
function handleFormSubmission(form, formType, formData) {
    // Reemplazar con llamada a API real
    fetch('/api/forms', {
        method: 'POST',
        body: formData
    });
}
```

## 🌐 SEO y Accesibilidad

### SEO Implementado
- Meta tags optimizados
- Open Graph tags
- Estructura semántica HTML5
- URLs amigables con anclas
- Schema markup ready

### Accesibilidad
- Etiquetas ARIA apropiadas
- Contraste de colores WCAG AA
- Navegación por teclado
- Lectores de pantalla compatibles
- Focus indicators visibles

### Performance
- Lazy loading en imágenes
- Minificación CSS/JS recomendada
- CDN para bibliotecas externas
- Optimización de Core Web Vitals

## 📄 Licencia y Derechos

El contenido del sitio web está bajo **Creative Commons BY-NC-SA 4.0**:
- ✅ **Compartir** - Copiar y redistribuir
- ✅ **Adaptar** - Remezclar y transformar
- ❌ **No Comercial** - No para uso comercial
- 🔄 **Compartir Igual** - Misma licencia

### Atribución
```
© 2025 Fundación Unamos Culturas
Contenido bajo licencia Creative Commons BY-NC-SA 4.0
```

## 🤝 Contribución

### Proceso de Desarrollo
1. **Fork** del repositorio
2. **Branch** para feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** con mensajes descriptivos
4. **Push** al branch: `git push origin feature/nueva-funcionalidad`
5. **Pull Request** con descripción detallada

### Estándares de Código
- **HTML**: Semántico, accesible, validado
- **CSS**: BEM methodology, mobile-first
- **JavaScript**: ES6+, comentarios JSDoc
- **Commits**: Conventional Commits format

## 📞 Contacto y Soporte

### Fundación Unamos Culturas
- **Email**: unamosculturas@gmail.com
- **Teléfono**: +48 515 209 172
- **Ubicación**: Granada, España

### Redes Sociales
- **Facebook**: [Enlace por definir]
- **Twitter**: [Enlace por definir]
- **Instagram**: [Enlace por definir]
- **LinkedIn**: [Enlace por definir]

### Soporte Técnico
Para reportar bugs o solicitar funcionalidades:
1. **Issues** en GitHub con template apropiado
2. **Email** con detalles técnicos específicos
3. **Screenshots** para problemas visuales

## 🗓️ Cronograma del Proyecto

### Fases de Desarrollo
- **✅ Fase 1**: Diseño y estructura (Enero 2025)
- **🔄 Fase 2**: Desarrollo frontend (Febrero 2025)
- **⏳ Fase 3**: Integración backend (Marzo 2025)
- **⏳ Fase 4**: Testing y optimización (Abril 2025)
- **⏳ Fase 5**: Deployment y lanzamiento (Mayo 2025)

### Eventos Importantes
- **Julio 2025**: Publicación convocatoria simposio
- **15 Agosto 2025**: Cierre envío ponencias
- **20-25 Octubre 2025**: II Foro Internacional de Paz
- **28-30 Octubre 2025**: II Simposio Internacional

---

**🕊️ Construyendo paz a través de la ciencia, el arte, la cultura y la memoria**

*¿Y tú, qué haces por la paz?*