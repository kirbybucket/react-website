<div align="center">
  <img src="https://placehold.co/1200x300/0d3b67/f2f2f2?text=Ingenier%C3%ADa+de+Sistemas+UTO+-+FNI" alt="Banner UTO React" style="width: 100%; max-width: 1200px; border-radius: 8px;">
  <div style="margin-top: 30px;">
    <img src="https://www.uto.edu.bo/assets/images/logo-light.png" alt="Escudo Universidad Técnica de Oruro" style="height: 80px; margin-right: 30px;">
    <img src="https://portal.sistemas.edu.bo/images/INGE_SIS.png" alt="Escudo Ingeniería de Sistemas" style="height: 80px;">
  </div>
</div>


<h1 align="center">React Website 🚀</h1>
<h3 align="center">Página Web Personal</h3>

---

## 🌟 Características Principales

- **Arquitectura Base:** Configuración oficial con Create React App
- **Diseño Responsivo:** Adaptación automática a diferentes dispositivos
- **Componentes Estructurados:** Organización modular siguiendo buenas prácticas
- **Optimización de Build:** Configuración de producción lista para despliegue
- **Formulario de Contacto:** Integración con EmailJS para envío de correos
- **Carrusel Interactivo:** Implementado con Swiper para presentación de proyectos

---

## 🛠 Stack Tecnológico

<div align="center" style="display: flex; justify-content: center; gap: 15px; margin: 20px 0;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="40" height="40">
  <img src="https://create-react-app.dev/img/logo.svg" alt="Create React App" width="40" height="40">
  <img src="https://swiperjs.com/images/swiper-logo.svg" alt="Swiper" width="40" height="36">
  <img src="https://ph-files.imgix.net/f364c84a-aead-49cc-b931-1e564c306941.png?auto=format" alt="EmailJS" width="40" height="40">
</div>

- **Core:** React 19 + Create React App
- **Bundler:** Webpack 5 (configuración preestablecida)
- **Gestión de Dependencias:** npm
- **Linter:** ESLint configurado para React
- **Componentes UI:** Swiper v11 para carruseles interactivos
- **Servicios Externos:** EmailJS para gestión de formularios

---

## ⚙️ Requisitos del Sistema

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) ≥16.14
- npm ≥8.x
- Navegador moderno (Chrome 90+, Firefox 88+)

Verifica las instalaciones:
```bash
git -v

node -v

npm -v
```

---

## 🚀 Iniciar el Proyecto

1. **Clonar repositorio**
   ```bash
   git clone https://github.com/kirbybucket/react-website.git

   cd react-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   ```
   La aplicación se abrirá en: http://localhost:3000

---

## 📦 Scripts Disponibles

| Comando          | Descripción                           |
|------------------|---------------------------------------|
| `npm start`      | Inicia servidor de desarrollo         |
| `npm run build`  | Genera build de producción            |
| `npm test`       | Ejecuta pruebas unitarias             |
| `npm run eject`  | Expone configuración completa (avanzado) |

---

## 🏗️ Estructura del Proyecto

```
react-website/
├── public/          # Archivos estáticos
├── src/             # Código fuente principal
│   ├── components/  # Componentes reutilizables
│   ├── App.js       # Componente raíz
│   └── index.js     # Punto de entrada
├── package.json     # Dependencias y configuraciones
└── README.md        # Documentación del proyecto
```

---

## 🌍 Despliegue en Producción

1. Generar versión optimizada:
   ```bash
   npm run build
   ```

2. Implementar en GitHub Pages:
   ```bash
   # Instalar gh-pages (si aún no está instalado)
   npm install gh-pages --save-dev

   # Ejecutar despliegue
   npm run deploy
   ```

3. Configurar en GitHub:
   - Ir a Settings > Pages
   - Branch: `gh-pages`
   - Carpeta: `/(root)`
   - Guardar cambios

**Configuración requerida en package.json:**
```json
"homepage": "https://tusuario.github.io/react-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

**Notas importantes:**
✅ El sitio quedará disponible en:  
`https://tusuario.github.io/react-website`  
✅ Actualiza `tusuario` por tu nombre de usuario real  
✅ Los cambios pueden tardar 2-5 minutos en verse reflejados

---

## 🔄 Flujo de Trabajo

1. Desarrollo local (`npm start`)
2. Commit de cambios
3. Despliegue automático:
   ```bash
   npm run deploy
   ```
4. Verificación en GitHub Pages

---

## 📩 Contacto y Soporte

**Estudiante:** Harold Jhossue Moncada Soria  
**Carrera:** Ingeniería de Sistemas - UTO  
**Correo Institucional:** harold.moncada@sistemas.edu.bo  
**Asignatura:** Actualización Tecnológica SIS-2420 B

---

🏛 _Proyecto desarrollado como parte del plan académico de la **Universidad Técnica de Oruro**, Facultad Nacional de Ingeniería_
