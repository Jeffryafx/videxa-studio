// Catálogo del portafolio. Toda la galería se genera desde este archivo.
// Para añadir una pieza, copia un objeto y cambia id, título, categoría, descripción,
// miniatura, video, duración y orientación. Los títulos y descripciones actuales
// describen lo que se ve en cada clip: cámbialos por el nombre real de cada proyecto.
//
// Los videos publicados viven en GitHub (Git LFS) y se sirven con este helper.
// Para probar un archivo local durante `npm run dev`, usa:
//   video: "/videos/mi-video.mp4", videoType: "local"
// Ese archivo no se sube al build de producción.
const githubVideo = (filename) =>
  `https://media.githubusercontent.com/media/Jeffryafx/videxa-studio/main/videos/${encodeURIComponent(filename)}`;

export const projects = [
  {
    id: "project-01",
    title: "Reel de aniversario — Carretas",
    category: "Shorts y Reels",
    description: "Reel vertical de aniversario: montaje al ritmo de la música, color cálido y texto en pantalla.",
    thumbnail: "/videos/miniaturas/project-01.jpg",
    video: githubVideo("🟢 1 · Aniversario 1 año Carretas — Reel IG.mp4"),
    videoType: "direct",
    duration: "00:30",
    featured: true,
    orientation: "portrait"
  },
  {
    id: "project-02",
    title: "Video promocional — NEXTIER",
    category: "Publicidad",
    description: "Pieza promocional con talking head, subtítulos quemados y branding del cliente.",
    thumbnail: "/videos/miniaturas/project-02.jpg",
    video: githubVideo("0927 (1)(1).mp4"),
    videoType: "direct",
    duration: "00:38",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-04",
    title: "Pieza gráfica — Con tus clientes",
    category: "Shorts y Reels",
    description: "Tipografía animada a pantalla completa con transiciones gráficas y color sólido.",
    thumbnail: "/videos/miniaturas/project-04.jpg",
    video: githubVideo("1018.mp4"),
    videoType: "direct",
    duration: "00:23",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-05",
    title: "Detalle de producto — Mobiliario",
    category: "Publicidad",
    description: "Plano macro de producto: luz suave, foco en la textura y ritmo pausado.",
    thumbnail: "/videos/miniaturas/project-05.jpg",
    video: githubVideo("125.mp4"),
    videoType: "direct",
    duration: "00:13",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-06",
    title: "Campaña — Tus hábitos del 1 al 10",
    category: "Publicidad",
    description: "Campaña vertical con texto en pantalla, color saturado y cortes al beat.",
    thumbnail: "/videos/miniaturas/project-06.jpg",
    video: githubVideo("2-10-26 VIDEO 4 EDITAR.mp4"),
    videoType: "direct",
    duration: "00:36",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-07",
    title: "Aftermovie vertical — Ciudad",
    category: "Aftermovies",
    description: "Aftermovie en vertical: cámara en mano, color de calle y montaje con intención.",
    thumbnail: "/videos/miniaturas/project-07.jpg",
    video: githubVideo("after vert v1.mp4"),
    videoType: "direct",
    duration: "01:01",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-08",
    title: "Pieza vertical — Campeón",
    category: "Shorts y Reels",
    description: "Talking head vertical con subtítulos, cortes rápidos y foco en el mensaje.",
    thumbnail: "/videos/miniaturas/project-08.jpg",
    video: githubVideo("Mariop perez mayo(1).mp4"),
    videoType: "direct",
    duration: "01:25",
    featured: false,
    orientation: "portrait"
  }
];

export const categories = [
  "Todos",
  "YouTube",
  "Shorts y Reels",
  "Streaming y gaming",
  "Publicidad",
  "Aftermovies",
  "Otros proyectos"
];
