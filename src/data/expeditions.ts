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

export interface Campaign {
  title: string;
  titleEn?: string;
  year: string;
  desc: string;
  descEn?: string;
  img: string;
  photos?: string[];
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
        title: "Campaña Antártica - Isla 25 de Mayo",
        titleEn: "Antarctic Expedition - King George Island",
        year: "2025-2026",
        desc: "Estudio de biodiversidad mediante fototransectas (10-30m) en Caleta Potter. Incluyó análisis de agua y calibración de sensores oceanográficos para monitoreo ambiental. Participantes: S. Becerra, S. Risso y A. Bonifacio.",
        descEn: "Biodiversity study via photographic transects (10-30m) in Potter Cove. Includes water analysis and oceanographic sensor calibration for environmental monitoring. Participants: S. Becerra, S. Risso, and A. Bonifacio.",
        img: ant26port,
        photos: [ant26_1, ant26_2, ant26_3, ant26_4, ant26_5, ant26_6, ant26_7, ant26_8, ant26_9, ant26_10, ant26_11, ant26_12, ant26_13, ant26_14, ant26_15, ant26_16, ant26_17, ant26_18],
      },
    ],
  },
  {
    id: "artico",
    name: "Ártico",
    nameEn: "Arctic",
    img: articport,
    campaigns: [
      {
        title: "Expedición Ártica",
        titleEn: "Arctic Expedition",
        year: "2022",
        desc: "Estudio comparativo de ecosistemas bentónicos árticos y antárticos en fiordos de Svalbard.",
        descEn: "Comparative study of Arctic and Antarctic benthic ecosystems in Svalbard fjords.",
        img: articport,
        photos: [],
      },
    ],
  },
  {
    id: "beagle",
    name: "Canal Beagle",
    nameEn: "Beagle Channel",
    img: beagle1,
    campaigns: [
      {
        title: "Muestreo Canal Beagle",
        titleEn: "Beagle Channel Sampling",
        year: "2024",
        desc: "Campaña de muestreo estival en el Canal Beagle para el estudio de comunidades bentónicas.",
        descEn: "Summer sampling campaign in the Beagle Channel for the study of benthic communities.",
        img: beagle1,
        photos: [],
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