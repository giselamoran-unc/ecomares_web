export interface Publication {
  year: number;
  authors: string;
  title: string;
  journal: string;
  vol: string;
  doi?: string;
}

export const publications: Publication[] = [
  { year: 2024, authors: "García M., Pérez J., Martínez L.", title: "Benthic community structure in the Beagle Channel: patterns and drivers.", journal: "Marine Ecology Progress Series", vol: "712: 45–62" },
  { year: 2023, authors: "López C., García M.", title: "Microplastic contamination in sub-Antarctic marine sediments.", journal: "Environmental Pollution", vol: "340: 122845" },
  { year: 2023, authors: "Martínez L., García M., Pérez J.", title: "Blue carbon stocks in sub-Antarctic kelp forests.", journal: "Global Change Biology", vol: "29(8): 2105–2118" },
  { year: 2022, authors: "Pérez J., García M.", title: "Trophic ecology of Antarctic benthic invertebrates using stable isotopes.", journal: "Polar Biology", vol: "45: 1023–1035" },
  { year: 2021, authors: "García M., Rodríguez A.", title: "Biodiversity patterns on the Burdwood Bank, South Atlantic.", journal: "Deep-Sea Research Part II", vol: "198: 105072" },
];
