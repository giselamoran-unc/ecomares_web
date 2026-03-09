export interface TeamMember {
  name: string;
  role: "pi" | "researcher" | "postdoc" | "phd" | "student" | "collaborator";
  desc: string;
  affiliation: string;
  orcid?: string;
  scholar?: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Dra. María García", role: "pi", desc: "Investigadora Principal. Especialista en ecología bentónica y ecosistemas polares.", affiliation: "CONICET - CADIC" },
  { name: "Dr. Juan Pérez", role: "researcher", desc: "Investigador Adjunto. Ecología trófica y carbono azul.", affiliation: "CONICET - CADIC" },
  { name: "Dra. Laura Martínez", role: "postdoc", desc: "Postdoctorado en biodiversidad marina y modelado ecológico.", affiliation: "CONICET - CADIC" },
  { name: "Lic. Carlos López", role: "phd", desc: "Becario doctoral. Microplásticos en ecosistemas subantárticos.", affiliation: "UNTDF" },
  { name: "Ana Rodríguez", role: "student", desc: "Estudiante de grado. Ecología de invertebrados marinos.", affiliation: "UNTDF" },
];
