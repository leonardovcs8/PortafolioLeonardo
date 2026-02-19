# 🚀 Portafolio Personal

Un portafolio moderno y responsive creado con React, Vite y Tailwind CSS.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Navegación Fluida**: Scroll suave entre secciones
- **Formulario de Contacto**: Sistema de contacto funcional
- **SEO Optimizado**: Meta tags y estructura optimizada para motores de búsqueda

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **JavaScript ES6+** - Lenguaje de programación moderno

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navegación principal
│   │   └── Footer.jsx      # Pie de página
│   ├── sections/
│   │   ├── Hero.jsx        # Sección de presentación
│   │   ├── About.jsx       # Información personal
│   │   ├── Skills.jsx      # Habilidades técnicas
│   │   ├── Projects.jsx    # Portafolio de proyectos
│   │   └── Contact.jsx     # Formulario de contacto
│   ├── assets/             # Recursos estáticos
│   ├── utils/              # Utilidades y helpers
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── index.html              # HTML principal
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
└── package.json            # Dependencias del proyecto
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Comandos Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter (si está configurado)

## 🎨 Personalización

### Cambiar Información Personal

1. **Nombre y título**: Edita los archivos en `src/sections/`
2. **Información de contacto**: Actualiza `src/sections/Contact.jsx` y `src/components/Footer.jsx`
3. **Proyectos**: Modifica el array `projects` en `src/sections/Projects.jsx`
4. **Habilidades**: Actualiza el objeto `skillCategories` en `src/sections/Skills.jsx`

### Cambiar Colores

Edita el archivo `tailwind.config.js` para personalizar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      }
    }
  }
}
```

### Agregar Imágenes

1. Coloca tus imágenes en la carpeta `public/`
2. Actualiza las referencias en los componentes correspondientes

## 📱 Secciones del Portafolio

### 🏠 Hero
- Presentación principal con animación de texto
- Enlaces a redes sociales
- Botones de llamada a la acción

### 👨‍💻 Sobre Mí
- Historia personal y profesional
- Estadísticas destacadas
- Logros y certificaciones

### 🛠️ Habilidades
- Categorías de habilidades (Frontend, Backend, Herramientas)
- Barras de progreso animadas
- Certificaciones

### 💼 Proyectos
- Proyectos destacados
- Filtros por categoría
- Enlaces a demos y código fuente

### 📞 Contacto
- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`
4. Despliega automáticamente

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `dist`
4. Despliega automáticamente

### GitHub Pages

1. Instala `gh-pages`: `npm install --save-dev gh-pages`
2. Agrega el script al `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta: `npm run build && npm run deploy`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

- **Email**: tu@email.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tuperfil)
- **GitHub**: [Tu Usuario](https://github.com/tuusuario)

---

⭐ ¡No olvides darle una estrella al proyecto si te gusta!