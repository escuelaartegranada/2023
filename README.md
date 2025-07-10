# Tema WordPress: Foro Paz Granada 2025

## 🕊️ Descripción

Tema de WordPress moderno y elegante diseñado específicamente para el **II Foro Internacional de Paz Granada 2025**. Completamente compatible con **Gutenberg** y optimizado para eventos académicos y conferencias internacionales.

## ✨ Características Principales

### 🎨 Diseño y Estilo
- **Paleta de colores** inspirada en la imagen oficial del foro (azules profundos, dorados, blancos cremosos)
- **Tipografía moderna** con Google Fonts (Inter + Playfair Display)
- **Diseño 100% responsive** optimizado para todos los dispositivos
- **Navegación fija** con efecto scroll y menú móvil hamburguesa
- **Animaciones suaves** con Intersection Observer

### 📝 Contenido Completo del Foro
- **Hero Section** con soporte para imagen de cabecera personalizable
- **Información del foro** con organizadores e instituciones colaboradoras
- **Programa completo** con timeline interactivo de actividades
- **Simposio virtual** con mesas temáticas y fechas importantes
- **Formulario de inscripción** avanzado con validación en tiempo real
- **Sección de contacto** con información completa

### � Funcionalidades de WordPress
- **Compatible con Gutenberg** 100%
- **Tipos de contenido personalizados**: Ponentes, Eventos, Patrocinadores, Inscripciones
- **Menús personalizados** configurables desde WordPress
- **Widgets en footer** y sidebar
- **Personalizador de WordPress** con opciones específicas del tema
- **Shortcodes personalizados** para formularios y contenido
- **AJAX integrado** para formularios sin recarga de página

### 📱 Optimización y Performance
- **SEO optimizado** con meta tags y estructura semántica
- **Carga rápida** con scripts optimizados
- **Lazy loading** de imágenes
- **Compresión de assets**
- **Compatible con caché** de WordPress

### 🌍 Multiidioma y Accesibilidad
- **Preparado para traducción** (archivo .pot incluido)
- **Accesible** siguiendo estándares WCAG 2.1
- **Navegación por teclado** completa
- **Contraste alto** opcional

## 📦 Instalación

### Requisitos Previos
- WordPress 5.0 o superior
- PHP 7.4 o superior
- MySQL 5.6 o superior

### Instalación del Tema

1. **Descarga el tema** como archivo ZIP
2. **Accede al admin de WordPress** → Apariencia → Temas
3. **Haz clic en "Añadir nuevo"** → "Subir tema"
4. **Selecciona el archivo ZIP** y haz clic en "Instalar ahora"
5. **Activa el tema** una vez instalado

### Configuración Inicial

#### 1. Subir la Imagen de Cabecera
1. Ve a **Apariencia → Personalizar → Sección Hero**
2. Sube tu imagen de cabecera del foro
3. Ajusta el título y subtítulo según necesites

#### 2. Configurar Menús
1. Ve a **Apariencia → Menús**
2. Crea un nuevo menú con estos enlaces:
   - Inicio → `#inicio`
   - Sobre el Foro → `#sobre-foro`
   - Programa → `#programa`
   - Simposio → `#simposio`
   - Inscripción → `#inscripcion`
   - Contacto → `#contacto`
3. Asigna el menú a la ubicación "Primary Menu"

#### 3. Configurar Información de Contacto
1. Ve a **Apariencia → Personalizar → Información de Contacto**
2. Añade el email y teléfono del foro

#### 4. Configurar la Página de Inicio
1. Ve a **Páginas → Añadir nueva**
2. Crea una página llamada "Inicio" (puede estar vacía)
3. Ve a **Ajustes → Lectura**
4. Selecciona "Una página estática" y elige "Inicio" como página de inicio

## 🎨 Personalización

### Colores del Tema
Ve a **Apariencia → Personalizar → Colores del Tema** para cambiar:
- Color primario (azul por defecto: `#173468`)
- Color de acento (dorado por defecto: `#b98743`)

### Configurar Secciones
Ve a **Apariencia → Personalizar → Diseño y Layout** para:
- Mostrar/ocultar el preloader
- Mostrar/ocultar indicador de scroll
- Activar/desactivar secciones específicas

### Gestión de Inscripciones
Ve a **Apariencia → Personalizar → Configuración de Inscripción** para:
- Habilitar/deshabilitar inscripciones
- Configurar fecha límite de inscripción
- Establecer email de notificaciones

### Redes Sociales
Ve a **Apariencia → Personalizar → Redes Sociales** para añadir enlaces a:
- Facebook
- Twitter
- Instagram
- LinkedIn
- YouTube

## 📝 Tipos de Contenido Personalizados

### Ponentes
Crea y gestiona ponentes del foro con:
- Información básica (nombre, cargo, institución)
- Biografía
- Enlaces a redes sociales (LinkedIn, Twitter)
- Foto del ponente

### Eventos
Gestiona eventos y actividades con:
- Fecha y hora
- Ubicación
- Tipo de evento (conferencia, taller, panel, cultural)
- Descripción detallada

### Patrocinadores
Administra patrocinadores con:
- Logo de la organización
- Sitio web
- Nivel de patrocinio (oro, plata, bronce, colaborador)

### Inscripciones
Revisa inscripciones del formulario con:
- Datos personales y profesionales
- Tipo de participación
- Información de ponencias (si aplica)
- Motivación y necesidades especiales

## � Shortcodes Disponibles

### Formulario de Inscripción
```
[fpg_registration_form]
```

Para mostrar solo el formulario sin información adicional:
```
[fpg_registration_form show_info="false"]
```

## 📱 Responsive Design

El tema es completamente responsive con breakpoints en:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🛠️ Personalización Avanzada

### Añadir CSS Personalizado
1. Ve a **Apariencia → Personalizar → CSS Adicional**
2. Añade tu CSS personalizado

### Modificar Templates
Los templates se encuentran en:
- `index.php` - Template principal
- `front-page.php` - Página de inicio
- `header.php` - Cabecera
- `footer.php` - Pie de página
- `functions.php` - Funciones del tema

### Variables CSS Principales
```css
:root {
    --primary-blue: #173468;
    --secondary-blue: #37478b;
    --accent-gold: #b98743;
    --light-blue: #6b8fc7;
    --cream-white: #f8f6f0;
    --text-dark: #2c3e50;
    --text-light: #7f8c8d;
}
```

## 📧 Configuración de Email

### Formularios de Contacto
Los emails se envían automáticamente cuando:
- Alguien se inscribe al foro
- Se envía un mensaje de contacto

### Configurar SMTP (Recomendado)
Instala un plugin como **WP Mail SMTP** para mejorar la entrega de emails.

## � Seguridad y Performance

### Características de Seguridad
- Sanitización de datos de formularios
- Nonces de WordPress para formularios AJAX
- Validación server-side
- Escape de salida de datos

### Optimización de Performance
- Scripts y estilos minificados
- Lazy loading de imágenes
- Optimización de consultas a base de datos
- Caché-friendly

## 🆘 Solución de Problemas

### Problemas Comunes

**La imagen de cabecera no se muestra:**
1. Verifica que la imagen esté subida correctamente
2. Asegúrate de que el archivo no sea muy grande (max 2MB recomendado)
3. Ve a **Apariencia → Personalizar → Sección Hero**

**El formulario de inscripción no funciona:**
1. Verifica que jQuery esté cargado
2. Revisa la consola del navegador para errores JavaScript
3. Asegúrate de que los permalinks estén configurados

**El menú móvil no funciona:**
1. Verifica que el menú esté asignado a "Primary Menu"
2. Revisa que JavaScript esté habilitado
3. Comprueba la consola para errores

### Logs de Error
Revisa los logs de WordPress en:
- `wp-content/debug.log` (si WP_DEBUG está activado)
- Panel de hosting → Logs de error

## 📞 Soporte

Para soporte técnico o consultas sobre el tema:
- **Email**: soporte@foropazgranada.com
- **Documentación**: Consulta este README
- **WordPress Codex**: https://wordpress.org/documentation/

## � Licencia

Este tema está licenciado bajo GPL v2 o posterior, siguiendo las pautas de WordPress.

## 🔄 Actualizaciones

### Versión 1.0.0 - Inicial
- Lanzamiento inicial del tema
- Todas las funcionalidades básicas implementadas
- Compatible con WordPress 6.4+

### Próximas Versiones
- Integración con plugins de eventos
- Más opciones de personalización
- Templates adicionales
- Mejoras de performance

## 🏆 Créditos

**Desarrollado para:** II Foro Internacional de Paz Granada 2025  
**Entidad Responsable:** Fundación Unamos Culturas  
**Tecnologías:** WordPress, PHP, JavaScript, CSS3, HTML5  
**Fonts:** Google Fonts (Inter, Playfair Display)  
**Iconos:** Font Awesome 6  

---

¡Gracias por usar el tema del Foro Paz Granada 2025! 🕊️✨