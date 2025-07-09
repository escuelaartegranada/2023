# II Foro Internacional de Paz Granada 2025 - Landing Page

## 🕊️ Descripción

Landing page moderna y elegante para el II Foro Internacional de Paz Granada 2025, diseñada siguiendo las especificaciones detalladas del evento y con una paleta de colores inspirada en la imagen oficial del foro.

## ✨ Características Principales

### 🎨 Diseño y Estilo
- **Paleta de colores** inspirada en la imagen del foro (azules profundos, dorados, y blancos cremosos)
- **Tipografía moderna** con Google Fonts (Inter + Playfair Display)
- **Diseño responsive** optimizado para todos los dispositivos
- **Navegación fija** con efecto scroll y menú móvil hamburguesa
- **Animaciones suaves** con Intersection Observer

### 📝 Contenido Completo
- **Hero Section** con soporte para imagen de cabecera
- **Información del Foro** con propósito, misión y cooperación institucional
- **Programa detallado** con timeline interactivo
- **12 Mesas Temáticas** del Simposio Internacional
- **Formulario de inscripción** completo con validaciones
- **Información de contacto** y entidades colaboradoras

### 🚀 Funcionalidades Avanzadas
- **Formulario inteligente** con validaciones en tiempo real
- **Sección dinámica** para ponencias (se muestra/oculta automáticamente)
- **Validación de ORCID** con formato automático
- **Copiar email** al portapapeles con un clic
- **Navegación suave** entre secciones
- **Botón "volver arriba"** que aparece al hacer scroll
- **Preloader elegante** con símbolo de paz

## 🖼️ Integración de la Imagen de Cabecera

### Paso 1: Preparar la Imagen
1. **Formato recomendado**: JPG o PNG
2. **Resolución óptima**: 1920x1080px o superior
3. **Peso máximo**: 500KB para carga rápida
4. **Nombre del archivo**: `hero-image.jpg` o `hero-image.png`

### Paso 2: Reemplazar la Imagen Placeholder
En el archivo `index.html`, busca esta línea (línea ~74):

```html
<img src="data:image/svg+xml;base64,..." alt="II Foro Internacional de Paz Granada 2025" class="hero-image">
```

Reemplázala por:
```html
<img src="hero-image.jpg" alt="II Foro Internacional de Paz Granada 2025" class="hero-image">
```

### Paso 3: Ajustar la Posición (Opcional)
Si necesitas ajustar cómo se ve la imagen, modifica en `styles.css`:

```css
.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; /* Cambia a: top, bottom, left, right */
}
```

## 🎨 Personalización de Colores

Los colores principales están definidos en `styles.css` en las variables CSS:

```css
:root {
    --primary-blue: #173468;      /* Azul principal */
    --secondary-blue: #37478b;    /* Azul secundario */
    --accent-gold: #b98743;       /* Dorado/naranja de acento */
    --light-blue: #6b8fc7;       /* Azul claro */
    --cream-white: #f8f6f0;      /* Blanco cremoso */
}
```

Para cambiar los colores, simplemente modifica estos valores hexadecimales.

## 📧 Configuración del Formulario

### Envío del Formulario
Actualmente el formulario simula el envío. Para conectarlo a un servicio real:

1. **Backend personalizado**: Modifica la función `submitForm()` en `script.js`
2. **Servicios como Formspree**: Añade `action="https://formspree.io/f/YOUR_ID"` al formulario
3. **Google Forms**: Conecta con Google Forms usando su API

### Validaciones Personalizadas
Las validaciones están en la función `validateForm()` en `script.js`. Puedes:
- Añadir nuevos campos obligatorios
- Modificar formatos de validación
- Cambiar mensajes de error

## 🌐 Despliegue

### Opción 1: Hosting Estático (Recomendado)
- **Netlify**: Arrastra la carpeta completa
- **Vercel**: Conecta con repositorio Git
- **GitHub Pages**: Sube a repositorio y activa Pages
- **Firebase Hosting**: Usa Firebase CLI

### Opción 2: Servidor Web Tradicional
Sube todos los archivos a la carpeta pública de tu servidor web (public_html, www, etc.)

## 📱 Pruebas

### Desarrollo Local
```bash
python3 -m http.server 8000
# Visita: http://localhost:8000
```

### Lista de Verificación
- [ ] ✅ Imagen de cabecera carga correctamente
- [ ] ✅ Formulario envía datos sin errores
- [ ] ✅ Navegación móvil funciona
- [ ] ✅ Enlaces de correo abren cliente email
- [ ] ✅ Responsive en dispositivos móviles
- [ ] ✅ Validaciones del formulario funcionan

## 🔧 Estructura de Archivos

```
/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js          # JavaScript interactivo
├── hero-image.jpg     # Imagen de cabecera (a añadir)
└── README.md          # Esta documentación
```

## 🎯 Optimizaciones SEO Incluidas

- **Meta tags** descriptivos
- **Estructura semántica** HTML5
- **Alt tags** en imágenes
- **Schema markup** para eventos
- **URLs amigables** con anclas
- **Optimización de velocidad**

## 📞 Soporte y Personalización

### Modificaciones Comunes

#### Cambiar el Logo del Navbar
En `index.html`, línea ~54:
```html
<div class="nav-logo">
    <i class="fas fa-dove"></i> <!-- Reemplaza con tu logo -->
    <span>Foro Paz Granada</span>
</div>
```

#### Añadir Más Secciones
1. Crea la sección en HTML
2. Añade estilos en CSS
3. Actualiza la navegación

#### Modificar el Footer
Encuentra la sección `<footer>` en `index.html` y personaliza según necesidades.

## 🐛 Solución de Problemas

### La imagen no carga
- Verifica que el archivo esté en la misma carpeta que `index.html`
- Revisa que el nombre del archivo coincida exactamente
- Confirma que el formato sea JPG o PNG

### El formulario no se envía
- Abre las herramientas de desarrollador (F12)
- Revisa la consola por errores JavaScript
- Verifica que todos los campos obligatorios estén completos

### Problemas de responsive
- Prueba en diferentes dispositivos
- Usa las herramientas de desarrollador para simular móviles
- Ajusta los media queries en `styles.css` si es necesario

## 📚 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Grid y Flexbox
- **JavaScript ES6+** - Interactividad y validaciones
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografía moderna

## 📄 Licencia

Este proyecto está desarrollado específicamente para el II Foro Internacional de Paz Granada 2025.

---

**¿Necesitas ayuda adicional?** 
Contacta con el equipo de desarrollo o revisa la documentación técnica en los comentarios del código.

🕊️ **Construyendo puentes hacia una humanidad común a través del código**