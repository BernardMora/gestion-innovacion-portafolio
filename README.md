# Portafolio - Gestión de la Innovación

Este proyecto es un portafolio estático diseñado para la materia de **Gestión de la Innovación** en la carrera de Ingeniería en Software (UABC).

## Estructura del Proyecto

- `index.html`: Página principal del portafolio.
- `css/style.css`: Estilos personalizados con diseño moderno.
- `js/main.js`: Lógica simple para efectos visuales.
- `practicas/`: Carpeta para guardar tus archivos de prácticas (PDF, HTML, etc.).
- `docs/`: Carpeta para documentación adicional.

## Instrucciones para el Usuario

### 1. Agregar tus Prácticas
Para que tus prácticas aparezcan en el portafolio:
1. Sube tus archivos (por ejemplo, `mi-practica.pdf`) a la carpeta `practicas/`.
2. Abre `index.html` y busca la sección `<section id="practicas">`.
3. Edita o añade un bloque `<article class="card">` con la información de tu práctica y asegúrate de que el enlace `href` apunte al archivo correcto (ej. `practicas/mi-practica.pdf`).

### 2. Hosting en GitHub Pages
Para publicar esta página en internet de forma gratuita:
1. Crea un nuevo repositorio en GitHub.
2. Sube todos los archivos de esta carpeta a ese repositorio.
3. En GitHub, ve a **Settings** -> **Pages**.
4. En "Branch", selecciona `main` (o `master`) y la carpeta `/ (root)`.
5. Haz clic en **Save**. En unos minutos, tu portafolio estará disponible en `https://tu-usuario.github.io/tu-repositorio/`.

## Créditos
Desarrollado como parte del curso de Gestión de la Innovación.
