import antarcticaImg from "@/assets/cav25.jpg";
import arcticImg from "@/assets/expedition-arctic.jpg";
import beagleImg from "@/assets/beagleImg.jpg";

export interface Expedition {
  img: string;
  title: string;
  titleEn?: string;
  year: string;
  location: string;
  desc: string;
  descEn?: string;
  photos?: string[];
}

export const expeditions: Expedition[] = [
  { 
    img: antarcticaImg, 
    title: "Campaña Antártica de Verano", 
    titleEn: "Antarctic Summer Campaign",
    year: "2024-2025", 
    location: "Caleta Potter - Península Antártica", 
    desc: "Muestreo de comunidades bentónicas en la costa occidental de la Península Antártica. Estudios de biodiversidad, ecología trófica y carbono azul en fondos marinos polares.",
    descEn: "Sampling of benthic communities on the western coast of the Antarctic Peninsula. Studies on biodiversity, trophic ecology and blue carbon in polar marine bottoms.",
    photos: [],
  },
  { 
    img: arcticImg, 
    title: "Expedición Ártica", 
    titleEn: "Arctic Expedition",
    year: "2026", 
    location: "Svalbard, Noruega", 
    desc: "Estudio comparativo de ecosistemas bentónicos árticos y antárticos. Muestreo de sedimentos y fauna bentónica en fiordos del archipiélago de Svalbard.",
    descEn: "Comparative study of Arctic and Antarctic benthic ecosystems. Sampling of sediments and benthic fauna in fjords of the Svalbard archipelago.",
    photos: [],
  },
  { 
    img: beagleImg, 
    title: "Muestreo Canal Beagle", 
    titleEn: "Beagle Channel Sampling",
    year: "2024", 
    location: "Canal Beagle, Tierra del Fuego", 
    desc: "Campaña de muestreo estival en el Canal Beagle para el estudio de comunidades bentónicas, bosques de macroalgas y redes tróficas costeras.",
    descEn: "Summer sampling campaign in the Beagle Channel for the study of benthic communities, macroalgae forests and coastal trophic networks.",
    photos: [],
  },
];