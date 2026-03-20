export interface TeamMember {
  id: string;
  name: string;
  role: "pi" | "researcher" | "postdoc" | "phd" | "student" | "collaborator";
  desc: string;
  affiliation: string;
  bio?: string;
  email?: string;
  researchLines?: string[];
  photo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "maria-garcia",
    name: "Dra. María García",
    role: "pi",
    desc: "Investigadora Principal. Especialista en ecología bentónica y ecosistemas polares.",
    affiliation: "CONICET - CADIC",
    bio: "Doctora en Biología Marina con especialización en ecología bentónica y ecosistemas polares. Investigadora Independiente de CONICET.",
    email: "m.garcia@cadic.gob.ar",
    researchLines: ["Ecología bentónica", "Ecosistemas polares", "Carbono azul"],
  },
  {
    id: "juan-perez",
    name: "Dr. Juan Pérez",
    role: "researcher",
    desc: "Investigador Adjunto. Ecología trófica y carbono azul.",
    affiliation: "CONICET - CADIC",
    bio: "Doctor en Ciencias Biológicas. Investigador Adjunto de CONICET especializado en ecología trófica marina.",
    email: "j.perez@cadic.gob.ar",
    researchLines: ["Ecología trófica", "Carbono azul"],
  },
  {
    id: "laura-martinez",
    name: "Dra. Laura Martínez",
    role: "postdoc",
    desc: "Postdoctorado en biodiversidad marina y modelado ecológico.",
    affiliation: "CONICET - CADIC",
    bio: "Postdoctoranda CONICET. Trabaja en modelado ecológico y biodiversidad marina.",
    email: "l.martinez@cadic.gob.ar",
    researchLines: ["Biodiversidad marina", "Modelado ecológico"],
  },
  {
    id: "carlos-lopez",
    name: "Lic. Carlos López",
    role: "phd",
    desc: "Becario doctoral. Microplásticos en ecosistemas subantárticos.",
    affiliation: "UNTDF",
    bio: "Becario doctoral CONICET. Investiga la distribución y efectos de microplásticos en ecosistemas subantárticos.",
    email: "c.lopez@untdf.edu.ar",
    researchLines: ["Microplásticos", "Ecosistemas subantárticos"],
  },
  {
    id: "ana-rodriguez",
    name: "Ana Rodríguez",
    role: "student",
    desc: "Estudiante de grado. Ecología de invertebrados marinos.",
    affiliation: "UNTDF",
    bio: "Estudiante avanzada de Biología en la UNTDF. Realiza su tesis de grado sobre ecología de invertebrados marinos.",
    researchLines: ["Invertebrados marinos"],
  },
];
