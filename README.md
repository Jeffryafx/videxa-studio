# Videxa Studio — Portafolio de edición de video

Portafolio estático de una sola página para un editor de video freelance. Está construido con HTML semántico, CSS y JavaScript vanilla, servido por Vite para desarrollo y compilado como archivos estáticos para Vercel.

## Ejecutar localmente

Necesitas Node.js 18 o superior. Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre la URL que indique Vite. Para comprobar el build de producción:

```bash
npm run build
npm run preview
```

## Agregar, editar o eliminar un proyecto

Toda la galería vive en `js/projects.js`. No necesitas tocar `index.html` ni los componentes visuales. Las ocho entradas actuales corresponden a los videos que agregaste; puedes cambiar los títulos genéricos por nombres de proyecto que estés autorizado a publicar.

1. Copia el archivo de video a `videos/` desde el Explorador de archivos de Windows. Los archivos allí se usan solo para desarrollo local; no se incluyen en el build de producción.
2. La galería usa fotogramas JPG generados desde tus videos en `public/videos/miniaturas/`. Si cambias un video, vuelve a generar su miniatura o reemplázala por una imagen propia.
3. Añade un objeto al arreglo `projects` en `js/projects.js`. Para reproducir un archivo local en desarrollo, usa `videoType: "local"` y la ruta `/videos/nombre.mp4`. Para un sitio publicado, aloja el clip externamente (por ejemplo YouTube o Vimeo), pega el enlace completo y usa el `videoType` correspondiente.
4. Cambia título, categoría, descripción, duración y orientación para que correspondan al video real. Elimina los objetos de demostración que no vayas a usar.
5. Ejecuta `npm run build` y revisa el resultado antes de publicar.

Ejemplo de proyecto local:

```js
{
  id: "cliente-01",
  title: "Nombre del proyecto",
  category: "YouTube",
  description: "Descripción breve y verificable.",
  thumbnail: "/videos/miniaturas/cliente-01.jpg",
  video: "/videos/cliente-01.mp4",
  videoType: "local",
  duration: "03:20",
  featured: false,
  orientation: "landscape"
}
```

Ejemplo de YouTube:

```js
{
  id: "reel-02",
  title: "Mi reel publicado",
  category: "Shorts y Reels",
  description: "Una pieza vertical.",
  thumbnail: "https://tu-cdn.com/reel-02.webp",
  video: "https://www.youtube.com/watch?v=TU_ID",
  videoType: "youtube",
  duration: "00:28",
  featured: true,
  orientation: "portrait"
}
```

Para editar, cambia los valores del objeto. Para eliminar, borra el objeto completo. Las categorías disponibles y sus botones se calculan a partir de los proyectos existentes.

## Contacto

El correo publicado es `jeffry.editor06@gmail.com`. El formulario lo usa para abrir la aplicación de correo del visitante con el mensaje preparado; no envía datos a un servidor porque el proyecto no tiene backend. Para recibir formularios directamente en el sitio, conecta un servicio externo como Formspree, Basin o una función propia y actualiza la documentación y el código.

Videxa Studio se presenta como el estudio personal de Jeff. Antes de publicar, revisa el texto de presentación, confirma que la lista de servicios coincide con lo que ofreces y agrega solo enlaces de redes que controles.

## Videos agregados y publicación

Los ocho videos actuales suman aproximadamente 3.8 GB; `1003(1).mp4` pesa cerca de 3.26 GB y se mantiene fuera de GitHub porque supera el límite por archivo de Git LFS en cuentas Free/Pro. Los otros siete se guardan en GitHub con Git LFS; necesitan la extensión Git LFS al clonar. Git LFS es control de versiones, no alojamiento de video para la página: los MP4 no se copian al build de Vite y no se reproducirán en el sitio publicado hasta alojarlos en YouTube/Vimeo o un servicio de almacenamiento/CDN. Durante `npm run dev`, los archivos locales se reproducen desde `videos/`. Las miniaturas JPG se publican desde `public/videos/miniaturas/`.

## Videos y rendimiento

No subas todos los videos a Git. Los archivos MP4 pequeños pueden vivir en `videos/`, pero los videos grandes conviene servirlos desde YouTube, Vimeo, Vercel Blob o un CDN. La galería no carga los reproductores al entrar. Los MP4 locales usan `preload="none"`, y YouTube/Vimeo solo se embeben al abrir el modal.

Vercel limita la carga de archivos fuente del despliegue a 100 MB en Hobby y 1 GB en Pro. Para objetos grandes, Vercel Blob ofrece almacenamiento público con archivos individuales de hasta 5 TB; sin embargo, los blobs mayores de 512 MB no se almacenan en la caché CDN, por lo que cada acceso puede volver al origen y generar transferencia. Consulta `docs/VIDEO-HOSTING.md` para las fuentes y la recomendación completa. Para un portafolio personal, YouTube no listado o Vimeo suele ser más simple y evita que el repositorio y el despliegue transporten media pesada.

## GitHub y Vercel

```bash
git init
git add .
git commit -m "Crear portafolio Videxa Studio"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

Después importa el repositorio en Vercel. Vercel detectará Vite; si solicita configuración, usa `npm run build` como Build Command y `dist` como Output Directory. No son necesarias variables de entorno para el funcionamiento básico.

## Estructura

- `index.html`: contenido semántico, SEO y secciones.
- `css/styles.css`: identidad visual, responsive, accesibilidad y motion.
- `js/projects.js`: catálogo editable de proyectos.
- `js/main.js`: filtros, modal, menú, formulario y microinteracciones.
- `public/`: favicon, sitemap, robots y manifiesto de rutas.
