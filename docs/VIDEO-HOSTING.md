# Hosting de video para Videxa Studio

## Recomendación

Mantén en el repositorio solo videos locales pequeños y usa YouTube no listado, Vimeo, Vercel Blob o un CDN para piezas pesadas. El catálogo del sitio ya admite `videoType: "local"`, `"youtube"` y `"vimeo"`, así que cambiar de proveedor no exige modificar la galería.

## Límites comprobados

La documentación oficial de Vercel indica que el tamaño máximo de los archivos fuente que se pueden cargar en un despliegue es de **100 MB en Hobby** y **1 GB en Pro**. Si el conjunto de archivos fuente supera ese límite, el despliegue falla. Esto hace poco conveniente guardar una colección de MP4 grandes dentro del repositorio de un portafolio estático.

Vercel Blob está pensado para imágenes, videos y otros archivos públicos. Su documentación indica un tamaño máximo de **5 TB por archivo**. También indica que los blobs de más de **512 MB** no se guardan en la caché CDN y que cada acceso se sirve desde el origen, con posibles cargos de transferencia. Es almacenamiento separado del despliegue estático, no una razón para subir MP4 pesados a Git.

Para un portafolio freelance, YouTube no listado o Vimeo suele ser la opción más sencilla: ofrecen reproductor, entrega adaptativa y no hacen crecer el repositorio. Vercel Blob o un CDN son alternativas válidas cuando se necesita controlar directamente los archivos y las URLs.

## Fuentes

- [Vercel — Limits](https://vercel.com/docs/limits)
- [Vercel — Public Storage](https://vercel.com/docs/vercel-blob/public-storage)
- [Vercel — Blob Pricing and Limits](https://vercel.com/docs/vercel-blob/usage-and-pricing)
