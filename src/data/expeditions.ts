import antarcticaImg from "@/assets/expedition-antarctica.jpg";
import arcticImg from "@/assets/expedition-arctic.jpg";
import beagleImg from "@/assets/expedition-beagle.jpg";

export interface Expedition {
  img: string;
  title: string;
  year: string;
  location: string;
  desc: string;
}

export const expeditions: Expedition[] = [
  { img: antarcticaImg, title: "Campaña Antártica de Verano", year: "2023", location: "Península Antártica", desc: "Muestreo de comunidades bentónicas en la costa occidental de la Península Antártica. Estudios de biodiversidad, ecología trófica y carbono azul en fondos marinos polares." },
  { img: arcticImg, title: "Expedición Ártica", year: "2022", location: "Svalbard, Noruega", desc: "Estudio comparativo de ecosistemas bentónicos árticos y antárticos. Muestreo de sedimentos y fauna bentónica en fiordos del archipiélago de Svalbard." },
  { img: beagleImg, title: "Muestreo Canal Beagle", year: "2024", location: "Canal Beagle, Tierra del Fuego", desc: "Campaña de muestreo estival en el Canal Beagle para el estudio de comunidades bentónicas, bosques de macroalgas y redes tróficas costeras." },
];
