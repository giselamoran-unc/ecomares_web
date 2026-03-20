export interface TeamMember {
  id: string;
  name: string;
  role: "pi" | "researcher" | "postdoc" | "phd" | "student" | "collaborator";
  roleLabel?: string
  desc?: string;
  affiliation: string;
  bio?: string;
  email?: string;
  researchLines?: string[];
  photo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ricardo-sahade",
    name: "Dr. Ricardo Sahade",
    role: "pi",
    roleLabel: "Investigador Principal",
    desc: "Investigador Principal. Antártida, ecosistemas costeros y carbono",
    affiliation: "IDEA (CONICET - UNC)",
    bio: "Investigador Principal de CONICET. Especialista en ecosistemas antárticos y costeros.",
    email: "rsahadeunc@gmail.com",
    researchLines: ["Antártida", "Ecosistemas costeros", "Carbono"],
    photo: "/src/assets/rs.jpg",
  },
  {
    id: "carla-de-aranzamendi",
    name: "Dra. Carla de Aranzamendi",
    role: "researcher",
    roleLabel: "Investigadora Adjunta",
    desc: "Investigadora Adjunta. Nacella concinna, Cambio Climático y Evolución Paralela.",
    affiliation: "IDEA (CONICET - UNC)",
    email: "dearanzcarla@gmail.com",
    researchLines: ["Nacella concinna", "Cambio climático", "Evolución paralela"],
    photo: "/src/assets/carlita.jpeg",
  },
  {
    id: "luciana-torre",
    name: "Dra. Luciana Torre",
    role: "researcher",
    roleLabel: "Investigadora Adjunta",
    affiliation: "IDEA (CONICET - UNC)",
    email: "torreluciana@gmail.com",
    researchLines: ["Humedal", "Secuestro de carbono", "Cambio climático"],
    photo: "/src/assets/jefa.jpg",
  },
  {
    id: "natalia-servetto",
    name: "Dra. Natalia Servetto",
    role: "researcher",
    roleLabel: "Investigadora Adjunta",
    affiliation: "IDEA (CONICET - UNC)",
    bio: "Mi trabajo se centra en el estudio del impacto de distintos estresores sobre el bentos antártico. En particular, investigó cómo el retroceso de los glaciares, la sedimentación derivada del deshielo y la acidificación de los océanos pueden afectar la composición, estructura y distribución de las comunidades bentónicas en Caleta Potter (Antártida). Específicamente realizó experimentos de laboratorio que simulan escenarios futuros de cambio climático, con el objetivo de evaluar la tolerancia de las especies bentónicas ante variaciones de pH, salinidad y aporte de sedimentos",
    email: "biol.nataliaservetto@gmail.com",
    researchLines: ["Acidificación", "Antártida", "Química de carbonatos"],
    photo: "/src/assets/naty.jpg",
  },
  {
    id: "cristian-lagger",
    name: "Dr. Cristian Lagger",
    role: "researcher",
    roleLabel: "Investigador Asistente",
    affiliation: "IDEA (CONICET - UNC)",
    bio: "Mi investigación se centra en comprender cómo el rápido calentamiento regional que experimenta la Península Antártica afecta las comunidades bentónicas marinas. Como biólogo y buzo científico, he participado en múltiples campañas antárticas estudiando el bentos, especialmente animales filtradores como ascidias y esponjas. Mi principal interés radica en los procesos de colonización y sucesión ecológica de la fauna bentónica en zonas recientemente libres de hielo, donde nuevos hábitats están emergiendo a medida que el hielo retrocede. En los últimos años, he expandido mi enfoque hacia los bosques de kelp de la Patagonia, ecosistemas que —al igual que el bentos antártico— están respondiendo rápidamente al cambio climático a escala global y representan laboratorios naturales únicos para estudiar resiliencia, conectividad y conservación marina.",
    email: "laggercristian@gmail.com ",
    researchLines: ["Ecología de comunidades", "Biodiversidad", "Bentos"],
    photo: "/src/assets/Cristian.jpg",
  },
  {
    id: "gisela-moran",
    name: "Dra. Gisela A. Morán",
    role: "researcher",
    roleLabel: "Investigadora Asistente",
    affiliation: "IDEA (CONICET - UNC)",
    bio: "El fondo del mar también está cambiando. El aumento de la temperatura, la disminución del oxígeno y la acidificación del océano están generando condiciones de estrés para muchas especies que habitan en estos ecosistemas profundos. Mi trabajo se centra en estudiar cómo estos cambios (vinculados al cambio climático) afectan al Mar Argentino y Antártida: identificar desde cuándo ocurren, cuáles son las zonas más vulnerables y proyectar qué podría pasar en el futuro. Comprender estos procesos es clave para proteger ecosistemas marinos únicos y diseñar estrategias de conservación más efectivas, especialmente en Áreas Marinas Protegidas.",
    email: "gisela.moran@unc.edu.ar ",
    researchLines: ["Biogeoquímica oceánica", "Estresores", "Areas Marinas Protegidas"],
    photo: "/src/assets/gi.jpg",
  },
];