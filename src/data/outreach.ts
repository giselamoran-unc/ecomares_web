export interface OutreachActivity {
  title: string;
  year: string;
  desc: string;
  photo: string;
  type: "video" | "gallery";
  link?: string;
  photos?: string[];
}

export const outreachActivities: OutreachActivity[] = [
{ title: "CONIFest", year: "2025", desc: "Descripción próximamente.", photo: "/src/assets/conifest.jpeg", type: "gallery", photos: [] },
{ title: "Documental Mar del Fuego", year: "2018", desc: "Descripción próximamente.", photo: "/src/assets/mardelfuego.png", type: "video", link: "https://www.youtube-nocookie.com/embed/9mNVt5pP8O8" },
{ title: "Expocarreras UNC 2025", year: "2025", desc: "Descripción próximamente.", photo: "/src/assets/conifest.jpeg", type: "gallery", photos: [] },
{ title: "Feria de Ciencias de la Provincia de Córdoba", year: "2025", desc: "Descripción próximamente.", photo: "/src/assets/conifest.jpeg", type: "gallery", photos: [] },
];