export interface Collaborator {
  name: string;
  country: string;
  desc: string;
}

export const collaborators: Collaborator[] = [
  { name: "British Antarctic Survey", country: "Reino Unido", desc: "Colaboración en estudios de ecología bentónica antártica." },
  { name: "Alfred Wegener Institute", country: "Alemania", desc: "Investigación conjunta en ecosistemas polares y cambio climático." },
  { name: "Universidad de Barcelona", country: "España", desc: "Estudios de biodiversidad marina y modelado ecológico." },
  { name: "Instituto Antártico Argentino", country: "Argentina", desc: "Logística y apoyo para campañas antárticas." },
  { name: "University Centre in Svalbard", country: "Noruega", desc: "Investigación comparativa de ecosistemas árticos y antárticos." },
  { name: "Universidad de Magallanes", country: "Chile", desc: "Estudios de ecosistemas marinos subantárticos compartidos." },
];
