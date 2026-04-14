import antartidaport from "@/assets/antartidaport.jpg";
import articport from "@/assets/articport.jpg";
import beagle1 from "@/assets/beagle_1.jpg";
import bb1 from "@/assets/BB1.jpg";
import marargentino from "@/assets/marargentino.png";
import ant26port from "@/assets/Ant26port.jpeg";
import ant26_1 from "@/assets/antartida26 (1).jpeg";
import ant26_2 from "@/assets/antartida26 (2).jpeg";
import ant26_3 from "@/assets/antartida26 (3).jpeg";
import ant26_4 from "@/assets/antartida26 (4).jpeg";
import ant26_5 from "@/assets/antartida26 (5).jpeg";
import ant26_6 from "@/assets/antartida26 (6).jpeg";
import ant26_7 from "@/assets/antartida26 (7).jpeg";
import ant26_8 from "@/assets/antartida26 (8).jpeg";
import ant26_9 from "@/assets/antartida26 (9).jpeg";
import ant26_10 from "@/assets/antartida26 (10).jpeg";
import ant26_11 from "@/assets/antartida26 (11).jpeg";
import ant26_12 from "@/assets/antartida26 (12).jpeg";
import ant26_13 from "@/assets/antartida26 (13).jpeg";
import ant26_14 from "@/assets/antartida26 (14).jpeg";
import ant26_15 from "@/assets/antartida26 (15).jpeg";
import ant26_16 from "@/assets/antartida26 (16).jpeg";
import ant26_17 from "@/assets/antartida26 (17).jpeg";
import ant26_18 from "@/assets/antartida26 (18).jpeg";
import Ant24_3 from "@/assets/Ant24_3.jpg";
import Ant24_1 from "@/assets/Ant24_1.jpg";
import Ant24_2 from "@/assets/Ant24_2.jpg";
import Ant24_4 from "@/assets/Ant24_4.jpg";
import Ant24_5 from "@/assets/Ant24_5.jpg";
import Ant24_6 from "@/assets/Ant24_6.jpg";
import Ant24_7 from "@/assets/Ant24_7.jpg";
import Ant24_8 from "@/assets/Ant24_8.jpg";
import Beagle23_port from "@/assets/Beagle23 (1).jpg";
import Beagle23_2 from "/src/assets/Beagle23 (2).jpg";
import Beagle23_3 from "/src/assets/Beagle23 (3).jpg";
import Beagle23_4 from "/src/assets/Beagle23 (4).jpg";
import Beagle23_5 from "/src/assets/Beagle23 (5).jpg";
import Beagle23_6 from "/src/assets/Beagle23 (6).jpg";
import Beagle23_7 from "/src/assets/Beagle23 (7).jpg";
import Beagle23_8 from "/src/assets/Beagle23 (8).jpg";
import Beagle23_9 from "/src/assets/Beagle23 (9).jpg";
import Beagle23_10 from "/src/assets/Beagle23 (10).jpg";
import Beagle24_1 from "/src/assets/Beagle24_1.jpg";
import Beagle24_2 from "/src/assets/Beagle24_2.jpg";
import Core_baja from "/src/assets/core_bajando.mp4";

export interface Campaign {
  title: string;
  titleEn?: string;
  year: string;
  desc: string;
  descEn?: string;
  img: string;
  photos?: string[];
  video?:string[];
}

export interface ExpeditionZone {
  id: string;
  name: string;
  nameEn: string;
  img: string;
  campaigns: Campaign[];
}

export const expeditionZones: ExpeditionZone[] = [
  {
    id: "antartida",
    name: "Antártida",
    nameEn: "Antarctica",
    img: antartidaport,
    campaigns: [
      {
        title: "Campaña Antártica 2025/2026 - Base Carlini, Isla 25 de Mayo",
        titleEn: "Antarctic Expedition 2025/2026 - Carlini Station, King George Island",
        year: "2025-2026",
        desc: "Estudio de biodiversidad mediante fototransectas (10-30m) en Caleta Potter. Incluyó análisis de agua y calibración de sensores oceanográficos para monitoreo ambiental. Participaron: Sofía Becerra, Sofía Risso y Alejo Bonifacio.",
        descEn: "Biodiversity study via photographic transects (10-30m) in Potter Cove. Includes water analysis and oceanographic sensor calibration for environmental monitoring. Participants: Sofía Becerra, Sofía Risso, and Alejo Bonifacio.",
        img: ant26port,
        photos: [ant26_1, ant26_2, ant26_3, ant26_4, ant26_5, ant26_6, ant26_7, ant26_8, ant26_9, ant26_10, ant26_11, ant26_12, ant26_13, ant26_14, ant26_15, ant26_16, ant26_17, ant26_18],
      },
      {
        title: "Campaña Antártica 2023/2024- Base Carlini, Isla 25 de Mayo",
        titleEn: "Antarctic Expedition 2025/2026 - Carlini Station, King George Island",
        year: "2023-2024",
        desc: "Toma de muestras de sedimento dentro y fuera de parches de ensambles bentónicos de caleta Potter. Participaron Sofía Risso, Lucía Bergagna, María Piotto y Luciana Ferrero",
        descEn: "Sediment sampling inside and outside benthic assemblage patches at Potter Cove. Participants: Sofía Risso, Lucía Bergagna, María Piotto, and Luciana Ferrero.",
        img: Ant24_1,
        photos: [Ant24_2, Ant24_3, Ant24_4, Ant24_5, Ant24_6, Ant24_7, Ant24_8],
      },
    ],
  },
  {
    id: "artico",
    name: "Ártico",
    nameEn: "Arctic",
    img: articport,
    campaigns: [
    ],
  },
  {
    id: "beagle",
    name: "Canal Beagle",
    nameEn: "Beagle Channel",
    img: beagle1,
    campaigns: [
      {
        title: "Muestreo Canal Beagle 2023",
        titleEn: "Beagle Channel Sampling 2023",
        year: "2023",
        desc: "Campaña de muestreo de imágenes/videos a bordo del Buque de Investigación Científica Shenu (CADIC) utilizando el ROV en 7 sitios dentro del canal y colecta de ejemplares para análisis de carbono. Identificación y  procesamiento (toma de medidas dependiente para cada especie, peso húmedo, volumen desplazado, peso húmedo, materia orgánica e inorgánica) de ejemplares de diferentes tallas de especies presentes en las imágenes tomadas por el ROV. Participaron Martin Castro, Gustavo Lovrich, Lucia Bergagna, Juan Miller, Julieta Kaminsky, María Bagur, Ricardo Sahade, Sofia Risso",
        descEn: "Sampling campaign of images/videos aboard the Scientific Research Vessel Shenu (CADIC) using the ROV at 7 sites within the channel, and collection of specimens for carbon analysis. Identification and processing (species-specific measurements, wet weight, displaced volume, organic and inorganic matter) of specimens of different sizes from ROV images. Participants: Martín Castro, Gustavo Lovrich, Lucía Bergagna, Juan Miller, Julieta Kaminsky, María Bagur, Ricardo Sahade, Sofía Risso.",
        img: Beagle23_port,
        photos: [Beagle23_10, Beagle23_2, Beagle23_3, Beagle23_4, Beagle23_5, Beagle23_5, Beagle23_6, Beagle23_7, Beagle23_8, Beagle23_9],
      },
      {
        title: "Muestreo Canal Beagle Febrero y Octubre 2024",
        titleEn: "Beagle Channel Sampling 2024 October and February",
        year: "2024",
        desc: "Participación en las salidas mensuales ROMA a bordo del Shenu para colectar muestras de sedimentos en diferentes puntos a lo largo del canal para determinación de ácidos grasos y contenido de carbono, utilizando un corer de gravedad. Procesamiento de individuos para carbono. Integrantes: Lucía Bergagna, Sofia Risso.\n\n08/2024: Campaña de muestreo de imágenes/videos a bordo del Shenu (CADIC) utilizando el ROV en 10 sitios dentro del canal y colecta de ejemplares para análisis de carbono. Integrantes: Ricardo Sahade, María Bagur, Martín Castro, Juan Miller, Julieta Kaminsky, Gustavo Lovrich, Mariano Rodriguez",
        descEn: "Participation in monthly ROMA outings aboard the Shenu to collect sediment samples at different points along the channel for fatty acid and carbon content analysis using a gravity corer. Specimen processing for carbon analysis. Members: Lucía Bergagna, Sofia Risso.\n\n08/2024: Image/video sampling campaign aboard the Shenu (CADIC) using the ROV at 10 sites within the channel and specimen collection for carbon analysis. Members: Ricardo Sahade, María Bagur, Martín Castro, Juan Miller, Julieta Kaminsky, Gustavo Lovrich, Mariano Rodriguez.",
        img: Beagle24_1,
        photos: [Beagle24_2],
        video: [Core_baja],
      },
    ],
  },
  {
    id: "amp",
    name: "Areas Marinas Protegidas",
    nameEn: "Marine Protected Areas",
    img: bb1,
    campaigns: [],
  },
  {
    id: "mar-argentino",
    name: "Mar Argentino",
    nameEn: "Argentine Sea",
    img: marargentino,
    campaigns: [],
  },
];