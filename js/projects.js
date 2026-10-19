// Videos locales para vista previa en desarrollo. Para publicarlos, usa URLs de video alojadas externamente.
const localVideo = (filename) => `/videos/${encodeURIComponent(filename)}`;
const githubVideo = (filename) =>
  `https://media.githubusercontent.com/media/Jeffryafx/videxa-studio/main/videos/${encodeURIComponent(filename)}`;

export const projects = [
  {
    id: "project-01",
    title: "Reel de aniversario — Carretas",
    category: "Shorts y Reels",
    description: "Reel vertical de aniversario.",
    thumbnail: "/videos/miniaturas/project-01.jpg",
    video: githubVideo("🟢 1 · Aniversario 1 año Carretas — Reel IG.mp4"),
    videoType: "direct",
    duration: "00:30",
    featured: true,
    orientation: "portrait"
  },
  {
    id: "project-02",
    title: "Proyecto vertical 02",
    category: "Otros proyectos",
    description: "Pieza vertical de portafolio.",
    thumbnail: "/videos/miniaturas/project-02.jpg",
    video: githubVideo("0927 (1)(1).mp4"),
    videoType: "direct",
    duration: "00:38",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-03",
    title: "Proyecto horizontal 03",
    category: "Otros proyectos",
    description: "Pieza horizontal de portafolio.",
    thumbnail: "/videos/miniaturas/project-03.jpg",
    video: localVideo("1003(1).mp4"),
    videoType: "local",
    duration: "11:32",
    featured: false,
    orientation: "landscape"
  },
  {
    id: "project-04",
    title: "Proyecto vertical 04",
    category: "Otros proyectos",
    description: "Pieza vertical de portafolio.",
    thumbnail: "/videos/miniaturas/project-04.jpg",
    video: githubVideo("1018.mp4"),
    videoType: "direct",
    duration: "00:23",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-05",
    title: "Proyecto vertical 05",
    category: "Otros proyectos",
    description: "Pieza vertical de portafolio.",
    thumbnail: "/videos/miniaturas/project-05.jpg",
    video: githubVideo("125.mp4"),
    videoType: "direct",
    duration: "00:13",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-06",
    title: "Proyecto vertical 06",
    category: "Otros proyectos",
    description: "Pieza vertical de portafolio.",
    thumbnail: "/videos/miniaturas/project-06.jpg",
    video: githubVideo("2-10-26 VIDEO 4 EDITAR.mp4"),
    videoType: "direct",
    duration: "00:36",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-07",
    title: "Aftermovie vertical",
    category: "Aftermovies",
    description: "Resumen vertical de un evento.",
    thumbnail: "/videos/miniaturas/project-07.jpg",
    video: githubVideo("after vert v1.mp4"),
    videoType: "direct",
    duration: "01:01",
    featured: false,
    orientation: "portrait"
  },
  {
    id: "project-08",
    title: "Proyecto vertical 08",
    category: "Otros proyectos",
    description: "Pieza vertical de portafolio.",
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
