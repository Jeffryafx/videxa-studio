# Videos

Esta carpeta contiene los videos originales que se reproducen durante el desarrollo local con `npm run dev`. Vite no los incluye en el build de producción. Los MP4 menores de 2 GB se controlan en GitHub mediante Git LFS; `1003(1).mp4` se mantiene local porque supera el límite de archivo LFS de cuentas Free/Pro.

En una copia nueva, instala Git LFS y ejecuta `git lfs pull` para descargar los videos grandes. No copies los MP4 a `public/` ni intentes desplegarlos junto con el sitio. Para reproducirlos en producción, súbelos a YouTube, Vimeo o un CDN/almacenamiento de objetos y cambia `videoType` y `video` en `js/projects.js`. Publica únicamente material que tengas derecho a mostrar.
