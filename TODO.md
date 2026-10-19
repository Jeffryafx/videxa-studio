# TODO — Videxa Studio

## 1. Base del proyecto y despliegue

- [x] El proyecto usa HTML5 semántico, CSS3 moderno y JavaScript vanilla, sin Next.js, base de datos, autenticación ni servidor propio.
- [x] La estructura de carpetas es clara y el código queda modular, legible y fácil de mantener.
- [x] `package.json` incluye scripts para desarrollo, build y preview; la salida estática contiene `index.html` y es compatible con Vercel.
- [x] El proyecto incluye `README.md` con instalación, ejecución local, GitHub, Vercel, administración de proyectos y hosting recomendado para videos pesados.
- [x] Existe `public/manus-routes.json` con la ruta pública `/` y los metadatos de ruta necesarios.

## 2. Identidad visual y navegación

- [x] La interfaz comunica creatividad, profesionalismo, calidad visual y dominio técnico mediante una estética premium, cinematográfica, moderna y minimalista.
- [x] La paleta parte de fondo negro carbón, superficies gris oscuro, texto blanco/gris y acentos violeta eléctrico usados con moderación.
- [x] La navegación incluye el wordmark VIDEXA STUDIO, Inicio, Portafolio, Servicios, Sobre mí y Contacto, además de un CTA para conversar.
- [x] La navegación fluye entre secciones, muestra estado activo cuando corresponde, permite teclado, tiene menú móvil funcional y cierra el menú después de seleccionar una sección.

## 3. Hero y showreel

- [x] El hero comunica qué hace Videxa Studio y tiene CTAs “Ver mi trabajo” y “Hablemos de tu proyecto”.
- [x] El hero incluye un elemento audiovisual protagonista reemplazable, sin inventar videos, clientes, premios, estadísticas ni experiencia.
- [x] Existe un indicador de desplazamiento y la primera pantalla funciona en escritorio y móvil.
- [x] El reel destacado abre el video vertical de aniversario y mantiene controles accesibles y relación de aspecto estable.
- [x] El video solo se reproduce después de que la persona activa el reel; los videos locales no se distribuyen con el build.

## 4. Portafolio dinámico y reproductor

- [x] La galería presenta proyectos en tres columnas cuando el espacio lo permite, dos en tabletas y una/compacta en móviles.
- [x] Cada proyecto muestra miniatura, título, categoría y, cuando exista, descripción, duración, orientación, formato y enlace/reproductor.
- [x] Los filtros funcionan con JavaScript sin recarga para Todos, YouTube, Shorts y Reels, Streaming y gaming, Publicidad, Aftermovies y Otros proyectos; se ocultan categorías sin proyectos asociados.
- [x] Los proyectos se generan exclusivamente desde `js/projects.js`, con campos `id`, `title`, `category`, `description`, `thumbnail`, `video`, `videoType`, `duration`, `featured` y `orientation`.
- [x] Un clic abre un modal amplio con reproductor adecuado para video local, YouTube o Vimeo.
- [x] El modal incluye controles, cierre visible, cierre con Escape, cierre fuera del contenido cuando corresponde, gestión de foco y scroll, y detiene la reproducción al cerrarse.
- [x] Los videos locales usan `preload="none"` y se cargan solo al reproducir; no se cargan todos los MP4 al entrar ni se reproducen varios a la vez.
- [x] Los placeholders no se presentan como trabajos reales y soportan estados sin imagen, sin video y sin resultados.

## 5. Servicios, presentación y proceso

- [x] Se muestran servicios editables para YouTube, Shorts/Reels/TikToks, gaming/streaming, aftermovies, piezas promocionales y reutilización de contenido largo en clips.
- [x] Los servicios no inventan precios ni hacen promesas comerciales exageradas y enlazan a consulta de presupuesto.
- [x] “Sobre mí” incluye texto provisional claramente identificado, enfoque de trabajo, estilo creativo e interés por contar historias sin inventar biografía, años, certificaciones, clientes o experiencia.
- [x] El proceso muestra Briefing, Edición, Revisión y Entrega sin prometer plazos ni revisiones ilimitadas.

## 6. Contacto y pie de página

- [x] Contacto incluye invitación a conversar, email placeholder, WhatsApp/redes solo si están proporcionados o marcados como reemplazables, y un formulario visual.
- [x] El formulario construye un enlace `mailto:` con los datos introducidos y explica su limitación; no simula un backend inexistente.
- [x] El footer incluye marca, enlaces principales, placeholders de redes y año actualizado automáticamente por JavaScript.

## 7. Rendimiento, accesibilidad y SEO

- [x] Se usan carga diferida, dimensiones estables, scripts eficientes, `preload="none"` para videos locales y respeto de `prefers-reduced-motion`.
- [x] El marcado es semántico, con contraste adecuado, focus visible, alt text y etiquetas accesibles en controles de navegación y reproducción.
- [x] Se incluyen título, descripción, Open Graph, favicon, `robots.txt` y `sitemap.xml` sin datos estructurados inventados.
- [x] Se documenta que Vercel no es almacenamiento ilimitado de video y se recomienda YouTube, Vimeo o almacenamiento/CDN para archivos pesados, manteniendo soporte para videos locales y externos.

## 8. Validación y entrega

- [x] Registrar los ocho videos locales en `js/projects.js` y generar sus miniaturas JPG automáticamente.
- [ ] Enviar los siete MP4 compatibles con Git LFS a GitHub; `1003(1).mp4` queda fuera por su tamaño de 3.26 GB.
- [ ] Alojar los videos externamente para habilitar la reproducción en el sitio publicado; los archivos locales son solo para desarrollo y suman aproximadamente 3.8 GB.
- [ ] Revisar los servicios y el texto de presentación de Jeff para confirmar que describen la oferta real de Videxa Studio.
- [ ] Confirmar el dominio y actualizar `og:url` y `public/sitemap.xml` cuando exista una URL pública.
- [ ] Ejecutar `npm run build` después de alojar los videos y comprobar la página en móvil y escritorio antes de publicar.
