export interface Project {
  title: string;
  status: "current" | "completed";
  period: string;
  funder: string;
  desc: string;
}

export const projects: Project[] = [
  { title: "Ecología bentónica del Canal Beagle", status: "current", period: "2022–2025", funder: "CONICET", desc: "Estudio de las comunidades bentónicas del Canal Beagle y su respuesta al cambio ambiental." },
  { title: "Carbono azul en ecosistemas subantárticos", status: "current", period: "2023–2026", funder: "ANPCyT", desc: "Cuantificación del secuestro de carbono en bosques de macroalgas subantárticas." },
  { title: "Biodiversidad del Banco Burdwood", status: "completed", period: "2019–2022", funder: "CONICET", desc: "Relevamiento de la biodiversidad bentónica del Banco Burdwood, Atlántico Sur." },
];
