# Plan de implementación — Videxa Studio

## Alcance

Construir un portafolio estático de edición de video, responsive y listo para Vercel, con HTML semántico, CSS moderno y JavaScript vanilla. No se añadirá backend, base de datos, autenticación ni dependencias de UI; la única dependencia de desarrollo será Vite para servir y previsualizar el proyecto de forma sencilla.

## Enfoque técnico

- `index.html` será la única página pública, con navegación por anclas a Inicio, Portafolio, Servicios, Sobre mí y Contacto.
- `css/styles.css` concentrará tokens de color, tipografía, layout responsive, estados de foco, animaciones y soporte de `prefers-reduced-motion`.
- `js/projects.js` será la fuente central de proyectos. La galería y los filtros se generarán automáticamente a partir de esa lista.
- `js/main.js` gestionará navegación móvil, filtros, modal accesible, carga del reproductor según `videoType`, animaciones de entrada, formulario `mailto:`, año del footer y estados vacíos.
- Los proyectos de demostración no fingirán trabajos reales: usarán composiciones visuales generadas por CSS/SVG inline como placeholders editables, claramente señaladas en el README.
- El reproductor no cargará MP4 al inicio. Los videos locales usarán `preload="none"` y se insertarán al abrir el modal; YouTube/Vimeo se convertirán a sus URLs de embed correspondientes únicamente al seleccionar un proyecto.
- `public/manus-routes.json`, `public/robots.txt`, `public/sitemap.xml` y favicon se incluirán desde el inicio.
- `package.json` tendrá scripts `dev`, `build` y `preview`; el build será estático y compatible con Vercel.

## Dirección visual

### Movimiento

Editorial cinematográfico / “post-production studio”: una interfaz oscura, precisa y silenciosa, donde el ritmo, la escala tipográfica y las líneas de tiempo abstractas sugieren edición sin copiar un software de montaje.

### Principios

1. El contenido audiovisual es el protagonista: mucho espacio negativo y marcos de proporción estable.
2. La confianza se construye con precisión: jerarquía tipográfica clara, bordes finos y microcopy directo.
3. El violeta eléctrico funciona como señal de edición: reserva para CTAs, estados activos, playheads y foco.
4. Cada interacción debe sentirse como una decisión de montaje: breve, suave y reversible.

### Color y composición

El fondo carbón casi negro sostiene la sensación de sala de edición; superficies gris grafito separan capas sin recurrir a tarjetas pesadas. El violeta `#a879ff` identifica acciones y puntos de atención, mientras un blanco cálido evita el contraste clínico. El layout combinará un hero asimétrico con una columna editorial y un visual protagonista, y después una galería amplia que prioriza los thumbnails.

### Elementos distintivos

- Wordmark `VIDEXA STUDIO` con una marca geométrica sencilla.
- “Playhead” violeta vertical y marcas de tiempo sutiles en hero, showreel y proceso.
- Thumbnails-placeholder con gradientes radiales y una etiqueta de formato (16:9 / 9:16), reemplazables por archivos reales sin cambiar la estructura.

### Interacción y animación

Los enlaces subrayan su estado activo con una línea violeta; los botones tienen desplazamiento mínimo y cambio de borde; las tarjetas elevan apenas su thumbnail y muestran un play contextual. Las secciones aparecen con `IntersectionObserver` una sola vez. Se desactivan desplazamientos y transiciones no esenciales con `prefers-reduced-motion: reduce`. El menú móvil se cierra al elegir una sección y el modal devuelve el foco al elemento que lo abrió.

### Tipografía y voz

Se usará `Space Grotesk` para titulares y wordmark, con fallback local, y `DM Sans` para navegación y cuerpo. Los titulares serán cortos, activos y específicos. La voz será segura, humana y directa, evitando promesas no verificables. Ejemplos: “Tu material ya tiene algo que decir.” y “Démosle ritmo a la idea.”

### Esencia de marca

Videxa Studio convierte material disperso en piezas con ritmo para creadores, marcas y proyectos digitales. Es un estudio personal dirigido por Jeff. Personalidad: precisa, curiosa y cinematográfica.

## Estructura de archivos

```text
videxa-studio/
├── index.html
├── package.json
├── README.md
├── plan.md
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── projects.js
├── public/
│   ├── favicon.svg
│   ├── manus-routes.json
│   ├── robots.txt
│   └── sitemap.xml
└── videos/
    ├── README.md
    └── miniaturas/
        └── README.md
```

## Flujo de build y entrega

1. Crear el inventario central de proyectos y el HTML semántico.
2. Implementar el sistema visual responsive y los placeholders reemplazables.
3. Conectar filtros, modal, reproductores y formulario `mailto:`.
4. Añadir documentación de mantenimiento, hosting de video y despliegue.
5. Ejecutar diagnósticos del proyecto, build de producción y servidor de Preview.
6. Verificar la ruta `/manus-routes.json`, enlaces estáticos y ausencia de errores de JavaScript.
7. Guardar la versión en el repositorio canónico del proyecto.

## Decisiones de almacenamiento audiovisual

Los archivos pequeños pueden vivir en `videos/` durante el desarrollo, pero para piezas pesadas se recomendará YouTube no listado, Vimeo o un servicio de almacenamiento de video/CDN. El catálogo admitirá ambas rutas mediante `videoType: "local" | "youtube" | "vimeo"`; así el sitio no depende de que Vercel sea un repositorio ilimitado de MP4.
