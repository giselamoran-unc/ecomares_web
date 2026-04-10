export interface Collaborator {
  name: string;
  country: string;
  countryEn?: string;
  desc?: string;
  descEn?: string;
}

export const collaborators: Collaborator[] = [
  { name: "BAS - British Antarctic Survey", country: "Reino Unido", countryEn: "United Kingdom" },
  { name: "AWI - Alfred Wegener Institute", country: "Alemania", countryEn: "Germany" },
  { name: "Universidad de Barcelona", country: "España", countryEn: "Spain" },
  { name: "Universidad de Oviedo", country: "España", countryEn: "Spain" },
  { name: "IAA - Instituto Antártico Argentino", country: "Argentina", countryEn: "Argentina" },
  { name: "UNAP - Universidad de Magallanes", country: "Chile", countryEn: "Chile" },
  { name: "Universidad de Bremen", country: "Alemania", countryEn: "Germany" },
  { name: "Universidad de Ghent", country: "Bélgica", countryEn: "Belgium" },
  { name: "INIDEP - Instituto Nacional de Investigación y Desarrollo Pesquero", country: "Argentina", countryEn: "Argentina" },
  { name: "CADIC - Centro Austral de Investigaciones Científicas", country: "Argentina", countryEn: "Argentina" },
  { name: "CENPAT - Centro Nacional Patagónico", country: "Argentina", countryEn: "Argentina" },
  { name: "NIOZ - Royal Netherlands Institute for Sea Research", country: "Países Bajos", countryEn: "Netherlands" },
];
