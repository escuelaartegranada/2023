# 🕊️ II Foro Internacional de Paz Granada 2025 - Sitio Web

## Descripción

Sitio web oficial del **II Foro Internacional de Paz Granada 2025** de la Fundación Unamos Culturas. Una plataforma web moderna, visualmente impactante e interactiva que promueve el evento, destaca la misión de la organización y facilita la participación del usuario.

## 🎨 Características Principales

### Diseño Visual y Experiencia de Usuario

- **Paleta de colores oficial**: 
  - 🔴 Rojo (#e53e3e) - Ciencia
  - 🔵 Azul (#3182ce) - Arte  
  - 🟢 Verde (#38a169) - Cultura
  - 🟣 Púrpura (#9f7aea) - Memoria de pueblos originarios

- **Tipografía moderna**: Inter (Google Fonts) con jerarquías claras
- **Iconografía**: Font Awesome 6.5.1 para representación visual
- **Diseño 100% responsivo**: Optimizado para móviles, tabletas y escritorio
- **Animaciones suaves**: AOS (Animate On Scroll) para efectos visuales

### Funcionalidades Interactivas

- **Navegación fija** con efecto translúcido (backdrop-filter)
- **Smooth scrolling** entre secciones
- **Modales interactivos** para programa detallado, ponentes y reglamento
- **Carrusel de galería** con Swiper.js
- **Formularios estáticos** con validación visual
- **Tabs de galería** con contenido dinámico

### Estructura del Sitio

#### 1. **Página de Inicio (Hero)**
- Banner de pantalla completa con fondo degradado
- Título principal del II Foro con detalles del evento
- Botones destacados con animación pulse
- Llamada a la acción: "¿Y tú, qué haces por la paz?"

#### 2. **Sección de Noticias Destacadas**
- 3 tarjetas de noticias recientes
- Formulario de suscripción al boletín integrado

#### 3. **Quiénes Somos**
- Mensaje institucional de la Fundación
- Nueva identidad gráfica con círculos de colores interactivos
- Historia, misión, visión y valores
- Equipo y red de aliados (IPAZ, CAPAZ, UNESCO, Instituto Confucio)

#### 4. **Programas y Proyectos**
- Tres ejes principales: Ciencia, Arte, Cultura
- Tarjetas interactivas con estadísticas de impacto
- Llamada a la acción para colaboración

#### 5. **Foros Internacionales de Paz**
- **II Foro Granada 2025** (evento principal):
  - Programa detallado (20-25 octubre 2025)
  - Ponentes destacados con modales informativos
  - Detalles de ubicación (Universidad de Granada, Alhambra)
  
- **II Simposio Internacional** (28-30 octubre 2025):
  - 12 mesas temáticas
  - Cronograma completo
  - Información de costos ($40 USD para ponentes)
  - Modalidad 100% virtual

- **I Foro Łódź 2024** (referencias anteriores)
- **III Foro** (próxima edición por anunciar)

#### 6. **Galería y Memoria Histórica**
- Carrusel interactivo con Swiper.js
- Tabs para diferentes categorías (Exposiciones, Talleres, Foros, Testimonios)
- Testimonios de participantes con formato de tarjetas

#### 7. **Noticias y Publicaciones**
- Grid responsive con artículo destacado
- Sección integrada de suscripción al boletín
- Enlaces a memorias y publicaciones académicas

#### 8. **Colabora**
- Tres modalidades: Voluntariado, Patrocinio, Convenios
- Formulario completo de propuesta de cooperación
- Información detallada de cada tipo de colaboración

#### 9. **Contacto**
- Información completa de contacto con iconos
- Formulario de consulta
- Enlaces a redes sociales
- Datos específicos: unamosculturas@gmail.com, +48 515 209 172

#### 10. **Footer**
- Logo con círculos de identidad
- Enlaces organizados por categorías
- Información de contacto
- Licencia Creative Commons BY-NC-SA 4.0

### Modales Implementados

1. **Programa Modal**: Agenda detallada día por día
2. **Ponentes Modal**: Perfiles de conferenciantes destacados
3. **Reglamento Modal**: Normativa del simposio
4. **Galería Łódź Modal**: Imágenes del primer foro
5. **Newsletter Modal**: Suscripción a futuras ediciones

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome 6.5.1**: Iconografía
- **Inter Font**: Tipografía principal

### Bibliotecas Externas
- **AOS (Animate On Scroll)**: Animaciones de entrada
- **Swiper.js**: Carrusel de galería
- **Google Fonts**: Tipografía Inter

### Características Técnicas
- **SEO optimizado**: Meta tags, estructura semántica, Open Graph
- **Accesibilidad**: ARIA labels, navegación por teclado, contraste alto
- **Performance**: Lazy loading, CSS optimizado, compresión de imágenes

## 📁 Estructura de Archivos

```
proyecto/
├── index.html              # Página principal
├── styles.css              # Estilos principales
├── script.js               # JavaScript principal
├── README-SITIO-FORO.md    # Este archivo
├── assets/                 # Recursos multimedia
│   ├── css/                # Estilos adicionales
│   └── js/                 # Scripts adicionales
└── [otros archivos PHP]    # Archivos del tema WordPress
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- Navegador web moderno (Chrome 80+, Firefox 75+, Safari 13+)
- Servidor web local (opcional: Live Server, XAMPP, WAMP)

### Instalación Rápida

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd foro-paz-granada-2025
   ```

2. **Servir archivos localmente**
   
   **Opción A: Live Server (VS Code)**
   - Instalar extensión "Live Server"
   - Clic derecho en `index.html` → "Open with Live Server"
   
   **Opción B: Python**
   ```bash
   python -m http.server 8000
   # Visitar: http://localhost:8000
   ```
   
   **Opción C: Node.js**
   ```bash
   npx serve .
   ```

3. **Abrir en navegador**
   - Visitar la URL proporcionada por el servidor
   - El sitio debería cargar completamente

### Configuración de Contenido

#### Personalizar Imágenes
- Reemplazar marcadores de posición en el carrusel de galería
- Agregar imágenes reales del evento cuando estén disponibles
- Optimizar imágenes en formato WebP para mejor rendimiento

#### Configurar Formularios
- Los formularios son estáticos (frontend only)
- Para funcionalidad completa, implementar backend:
  ```javascript
  // Ejemplo de integración
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });
  });
  ```

#### Actualizar Información
- Fechas y horarios del evento
- Información de ponentes
- Costos y modalidades de participación

## 🎯 Funcionalidades Específicas

### Sistema de Modales
- Apertura: `openModal('modal-id')`
- Cierre: Click fuera, botón X, tecla ESC
- Contenido dinámico según tipo de modal

### Navegación Inteligente
- Resaltado automático de sección activa
- Smooth scrolling con offset para header fijo
- Menú responsive con hamburguesa en móvil

### Animaciones
- AOS para elementos al hacer scroll
- Hover effects en tarjetas y botones
- Pulse animation en botón principal del hero
- Transiciones suaves en todos los elementos

### Responsive Design
- **Móvil** (320px-767px): Layout de una columna
- **Tablet** (768px-1023px): Layout de dos columnas
- **Desktop** (1024px+): Layout completo de múltiples columnas

## 🔧 Personalización Avanzada

### Modificar Colores
```css
:root {
  --color-science: #e53e3e;   /* Rojo - Ciencia */
  --color-art: #3182ce;       /* Azul - Arte */
  --color-culture: #38a169;   /* Verde - Cultura */
  --color-memory: #9f7aea;    /* Púrpura - Memoria */
}
```

### Agregar Nuevas Secciones
1. Crear HTML estructura
2. Agregar estilos CSS correspondientes
3. Implementar JavaScript si requiere interactividad
4. Actualizar navegación

### Configurar Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 SEO y Metadatos

### Configuración Actual
- **Título**: "II Foro Internacional de Paz Granada 2025 | Fundación Unamos Culturas"
- **Descripción**: "Únete al II Foro Internacional de Paz en Granada, 20-25 de octubre de 2025"
- **Keywords**: paz, noviolencia, Granada, Foro 2025, Fundación Unamos Culturas, simposio
- **Open Graph**: Configurado para redes sociales

### Optimizaciones Adicionales
- Implementar schema markup
- Configurar robots.txt
- Agregar sitemap.xml
- Optimizar imágenes con atributos alt

## 🔒 Accesibilidad

### Implementaciones Actuales
- Navegación por teclado completa
- Etiquetas ARIA donde corresponde
- Contraste de colores WCAG AA
- Texto alternativo en íconos importantes

### Mejoras Recomendadas
- Screen reader testing
- Focus management en modales
- Color blind testing
- Keyboard trap en elementos interactivos

## 📱 Pruebas y Compatibilidad

### Navegadores Soportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Dispositivos Probados
- ✅ iPhone (375px-414px)
- ✅ Android (360px-412px)
- ✅ iPad (768px-1024px)
- ✅ Desktop (1280px-1920px)

### Herramientas de Prueba
```bash
# Lighthouse audit
npx lighthouse http://localhost:8000 --view

# Pa11y accessibility testing
npx pa11y http://localhost:8000
```

## 🚢 Despliegue

### Hosting Estático
**Netlify/Vercel/GitHub Pages**
1. Conectar repositorio
2. Configurar build settings (si aplica)
3. Deploy automático

**Hosting Tradicional**
1. Subir archivos via FTP/SFTP
2. Configurar dominio
3. Verificar funcionalidad

### Consideraciones
- Configurar HTTPS
- Implementar CDN para mejor rendimiento
- Monitoreo de uptime
- Backup regular

## 👥 Audiencia Objetivo

- **Académicos**: Investigadores en estudios de paz
- **Estudiantes**: Posgrado y doctorado
- **Activistas**: Líderes sociales y comunitarios
- **Instituciones**: UNESCO, universidades, ONGs
- **Artistas**: Creadores comprometidos con la paz
- **Voluntarios**: Colaboradores potenciales
- **Patrocinadores**: Organizaciones que apoyan la causa

## 📞 Información de Contacto

**Fundación Unamos Culturas**
- 📧 **Email**: unamosculturas@gmail.com
- 📱 **Teléfono**: +48 515 209 172
- 🌍 **Ubicación**: Granada, España
- 🌐 **Web**: [URL del sitio]

**Simposio Internacional**
- 📧 **Email**: simposiopazfuc@inaesvirtual.edu.py

## 📄 Licencia

Este proyecto y su contenido están licenciados bajo **Creative Commons BY-NC-SA 4.0**.

### Términos de Uso
- ✅ Compartir y adaptar el material
- ✅ Dar crédito apropiado
- ❌ Uso comercial sin autorización
- 🔄 Compartir bajo la misma licencia

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork del repositorio
2. Crear rama para la feature
3. Implementar cambios
4. Crear Pull Request con descripción detallada

## 🔮 Roadmap Futuro

### Próximas Implementaciones
- [ ] Backend para formularios
- [ ] Sistema de registro en línea
- [ ] Chat en vivo durante el evento
- [ ] Streaming integrado
- [ ] App móvil complementaria
- [ ] Traducción multi-idioma
- [ ] Dashboard de administración

### Integraciones Planeadas
- [ ] Zoom API para simposio virtual
- [ ] PayPal/Stripe para pagos
- [ ] Mailchimp para newsletter
- [ ] Google Analytics 4
- [ ] Redes sociales API

---

**Desarrollado con 💙 para la construcción de un mundo más justo y pacífico**

*Fundación Unamos Culturas - Construyendo puentes hacia la paz desde 2006*