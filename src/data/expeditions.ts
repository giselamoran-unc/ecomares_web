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
    img: "/src/assets/antartidaport.jpg",
    campaigns: [
      {
        title: "Campaña Antártica - Isla 25 de Mayo", 
        titleEn: "Antarctic Expedition - King George Island",
        year: "2025-2026", 
        desc: "Estudio de biodiversidad mediante fototransectas (10-30m) en Caleta Potter. Incluyó análisis de agua y calibración de sensores oceanográficos para monitoreo ambiental. Participantes: S. Becerra, S. Risso y A. Bonifacio.",
        descEn: "Biodiversity study via photographic transects (10-30m) in Potter Cove. Includes water analysis and oceanographic sensor calibration for environmental monitoring. Participants: S. Becerra, S. Risso, and A. Bonifacio.",
        img:"/src/assets/Ant26port.jpeg",
        photos: [
        "/src/assets/antartida26 (1).jpeg",
        "/src/assets/antartida26 (2).jpeg",
        "/src/assets/antartida26 (3).jpeg",
        "/src/assets/antartida26 (4).jpeg",
        "/src/assets/antartida26 (5).jpeg",
        "/src/assets/antartida26 (6).jpeg",
        "/src/assets/antartida26 (7).jpeg",
        "/src/assets/antartida26 (8).jpeg",
        "/src/assets/antartida26 (9).jpeg",
        "/src/assets/antartida26 (10).jpeg",
        "/src/assets/antartida26 (11).jpeg",
        "/src/assets/antartida26 (12).jpeg",
        "/src/assets/antartida26 (13).jpeg",
        "/src/assets/antartida26 (14).jpeg",
        "/src/assets/antartida26 (15).jpeg",
        "/src/assets/antartida26 (16).jpeg",
        "/src/assets/antartida26 (17).jpeg",
        "/src/assets/antartida26 (18).jpeg",
    ],
      },
    ],
  },
  {
    id: "artico",
    name: "Ártico",
    nameEn: "Arctic",
    img: "/src/assets/articport.jpg",
    campaigns: [
      {
        title: "Expedición Ártica",
        titleEn: "Arctic Expedition",
        year: "2022",
        desc: "Estudio comparativo de ecosistemas bentónicos árticos y antárticos en fiordos de Svalbard.",
        descEn: "Comparative study of Arctic and Antarctic benthic ecosystems in Svalbard fjords.",
        img: "",
        photos: [],
      },
    ],
  },
  {
    id: "beagle",
    name: "Canal Beagle",
    nameEn: "Beagle Channel",
    img: "/src/assets/Beagle_1.jpg",
    campaigns: [
      {
        title: "Muestreo Canal Beagle",
        titleEn: "Beagle Channel Sampling",
        year: "2024",
        desc: "Campaña de muestreo estival en el Canal Beagle para el estudio de comunidades bentónicas.",
        descEn: "Summer sampling campaign in the Beagle Channel for the study of benthic communities.",
        img: "",
        photos: [],
      },
    ],
  },
  {
    id: "amp",
    name: "Areas Marinas Protegidas",
    nameEn: "Marine Protected Areas",
    img: "/src/assets/BB1.jpg",
    campaigns: [],
  },
  {
    id: "mar-argentino",
    name: "Mar Argentino",
    nameEn: "Argentine Sea",
    img: "/src/assets/marargentino.png",
    campaigns: [],
  },
];