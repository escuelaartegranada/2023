# 🔧 Solución de Problemas - Tema Foro Paz Granada

## ❌ Problema: Faltan Secciones en la Página

### Síntomas:
- No aparece la sección de Simposio
- Falta el formulario de inscripción  
- No se ve la sección de contacto
- Ausente la llamada de acción "¿Y tú, qué haces por la paz?"
- Footer incompleto

### ✅ Soluciones:

#### 1. Verificar que sea la Página de Inicio
```
WordPress Admin → Ajustes → Lectura
- Seleccionar "Una página estática"
- Elegir tu página como "Página de inicio"
```

#### 2. Limpiar Caché
```
- Si usas plugins de caché: limpiar caché
- En navegador: Ctrl+F5 (forzar recarga)
```

#### 3. Verificar Archivos del Tema
Asegúrate de que estos archivos estén presentes:
```
- front-page.php ✅ (página de inicio)
- footer.php ✅ (pie de página)
- style.css ✅ (estilos)
- assets/js/theme.js ✅ (JavaScript)
```

#### 4. Activar Modo Debug (Temporal)
Añade en `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

## ❌ Problema: JavaScript No Funciona

### Síntomas:
- Formulario no envía
- Menú móvil no funciona
- No hay scroll suave

### ✅ Soluciones:

#### 1. Verificar jQuery
```
F12 → Consola → Escribir: jQuery
Si sale "undefined" = jQuery no está cargado
```

#### 2. Conflictos de Plugins
```
- Desactivar todos los plugins
- Probar si funciona
- Reactivar uno por uno para encontrar conflicto
```

#### 3. Verificar Ruta de JavaScript
```
Ver código fuente → Buscar "theme.js"
Debe aparecer: /wp-content/themes/tu-tema/assets/js/theme.js
```

## ❌ Problema: Estilos No Se Aplican

### Síntomas:
- Colores no coinciden
- Layout roto
- Fuentes incorrectas

### ✅ Soluciones:

#### 1. Verificar Carga de CSS
```
F12 → Red → Recargar página
Buscar "style.css" - debe cargar sin errores 404
```

#### 2. Limpiar Cache de WordPress
```
Si usas Autoptimize, W3 Total Cache, etc.
→ Limpiar todo el caché
```

#### 3. Verificar Orden de CSS
```
WordPress Admin → Apariencia → Editor de temas
- Verificar que style.css tenga el header correcto
```

## ❌ Problema: Formulario No Envía

### Síntomas:
- Botón "Enviar" no responde
- No aparecen mensajes de confirmación

### ✅ Soluciones:

#### 1. Verificar Shortcode
En la página debe aparecer:
```
[fpg_registration_form]
```

#### 2. Verificar Funciones PHP
```
WordPress Admin → Herramientas → Salud del sitio
- Revisar si hay errores PHP
```

#### 3. Probar Email
```
WordPress Admin → Herramientas → Salud del sitio → Info
- Verificar configuración de email
```

## ❌ Problema: Menú No Aparece

### Síntomas:
- Enlaces de navegación ausentes
- Menú móvil no funciona

### ✅ Soluciones:

#### 1. Crear y Asignar Menú
```
WordPress Admin → Apariencia → Menús
1. Crear nuevo menú
2. Añadir elementos:
   - Inicio → #inicio
   - Sobre el Foro → #sobre-foro
   - Programa → #programa  
   - Simposio → #simposio
   - Inscripción → #inscripcion
   - Contacto → #contacto
3. Asignar a "Primary Menu"
```

## ❌ Problema: Imagen de Cabecera No Aparece

### Síntomas:
- Hero section sin imagen de fondo
- Solo gradiente azul

### ✅ Soluciones:

#### 1. Subir Imagen Correctamente
```
WordPress Admin → Apariencia → Personalizar → Sección Hero
- Subir imagen (máx 2MB)
- Formatos: JPG, PNG
- Tamaño recomendado: 1920x1080px
```

#### 2. Verificar Permisos de Archivos
```
Carpeta wp-content/uploads/ debe tener permisos 755
```

## 🛠️ Verificación Rápida - Lista de Chequeo

### ✅ Configuración Básica:
- [ ] Tema activado
- [ ] Página de inicio configurada como estática
- [ ] Menú principal creado y asignado
- [ ] Imagen de cabecera subida
- [ ] Email de contacto configurado

### ✅ Archivos del Tema:
- [ ] front-page.php existe
- [ ] footer.php existe  
- [ ] style.css existe
- [ ] functions.php existe
- [ ] assets/js/theme.js existe

### ✅ Funcionalidades:
- [ ] Navegación suave funciona
- [ ] Formulario de inscripción aparece
- [ ] Sección "¿Y tú, qué haces por la paz?" visible
- [ ] Footer completo con información
- [ ] Botón "volver arriba" funciona

## 🆘 Si Nada Funciona

### Reinstalación Limpia:
1. **Hacer backup** de la base de datos
2. **Descargar** una copia fresca del tema
3. **Desactivar** el tema actual
4. **Eliminar** carpeta del tema
5. **Subir** nueva versión
6. **Activar** y configurar de nuevo

### Contacto de Soporte:
📧 **Email**: soporte@foropazgranada.com  
🔧 **Incluir**: 
- URL del sitio
- Descripción del problema
- Capturas de pantalla
- Errores de consola (F12)

---

💡 **Consejo**: La mayoría de problemas se resuelven con:
1. Verificar que sea la página de inicio
2. Limpiar caché
3. Configurar el menú principal

🕊️ **¡La paz también se construye con paciencia en la tecnología!**