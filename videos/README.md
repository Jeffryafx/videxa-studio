# Videos

Esta carpeta contiene los videos originales. Siete MP4 se guardan en GitHub mediante Git LFS y el sitio los reproduce desde el endpoint público de medios de GitHub. GitHub Free incluye 10 GiB de transferencia LFS al mes; al agotarlos, los clips podrían dejar de servirse durante el resto del ciclo. `1003(1).mp4` se mantiene local porque supera el límite de archivo LFS de cuentas Free/Pro.

En una copia nueva, instala Git LFS y ejecuta `git lfs pull` para descargar los videos grandes. No copies los MP4 a `public/` ni intentes desplegarlos junto con el sitio. Si el uso de transferencia crece, aloja los clips en YouTube, Vimeo o un CDN y actualiza los enlaces en `js/projects.js`. Publica únicamente material que tengas derecho a mostrar.
