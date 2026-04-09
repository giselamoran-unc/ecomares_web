export interface Publication {
  title: string;
  authors: string;
  journal: string;
  doi?: string;
  url?: string;
}

export interface PublicationYear {
  year: number;
  publications: Publication[];
}

export const publicationsByYear: PublicationYear[] = [
  {
    year: 2026,
    publications: [
      {
        title: "Deeper waters, more calcifiers: Spatial variation in benthic assemblages highlight conservation challenges in sub-Antarctic Marine Protected areas",
        authors: "Lucía Bergagna, Luciana Riccialdelli, Gustavo Lovrich, Gisela A. Morán, Laura Schejter, Gabriela Palomo, Ricardo Sahade",
        journal: "Marine Environmental Research",
        doi: "doi.org/10.1016/j.marenvres.2026.107889.",
      },
    ],
  },
  {
    year: 2025,
    publications: [
      {
        title: "Standardising research on marine biological carbon pathways required to estimate sequestration at Polar and sub-Polar latitudes",
        authors: "Simon A. Morley, David K.A. Barnes, Camila Neder, Ricardo Sahade, Chester J. Sands, Carla M. de Aranzamendi, Kaja Balazy, Piotr Balazy, Facundo Barrera, Narissa Bax, Sofia Becerra, Lucia Bergagna, Katarzyna Błachowiak-Samołyk, Ulrike Braeckman, Gabriela L. Campana, Dolores Deregibus, Marleen De Troch, Andrea Devis-Morales, Patricio A. Díaz, Santiago R. Doyle, Katarzyna Dragańska-Deja, Luciana Ferrero, Ricardo Giesecke, Diego R. Gimenez, Humberto E. González, Juan Höfer, Kerstin Jerosch, Silke Laakmann, Gustavo Lovrich, Tomás I. Marina, Jacobo Martín, Carolina V. Matula, Mireia Mestre, Jens Meyerjürgens, Maria Piotto, Gisela A. Moran, Maria Liliana Quartino, Agustín D. Rimondino, Sofia A. Risso, Iara D. Rodriguez, Natalia Servetto, Daniela Storch, Clara N. Rodríguez-Flórez, Leonardo Saravia, Irene R. Schloss, Matthew J. Slater, Marcos Tatián, Luciana Torre, Dick Van Oevelen, Jochen Wollschläger, Oliver Zielinski",
        journal: "Earth-Science Reviews ",
        doi: "doi.org/10.1016/j.earscirev.2025.105372",
      },
      {
        title: "Fatty acid response of calcifying benthic Antarctic species to ocean acidification and warming",
        authors: "Servetto Natalia, Marleen De Troch, Frédéric Gazeau, Carla de Aranzamendi, Gastón Alurralde, Germán González, Ricardo Sahade",
        journal: "Marine Pollution Bulletin",
        doi: "doi.org/10.1016/j.marpolbul.2025.118111",
      },
      {
        title: "Stage-dependent life-history, physiological, and behavioral responses to low pH in an estuarine crab",
        authors: "García, M. P., Luppi, T. A., Nuñez, J. D., Servetto, N., Ocampo, E. H.",
        journal: "Marine Pollution Bulletin",
        doi: "doi.org/10.1016/j.marpolbul.2025.118408.",
      },
      {
        title: "Effects of Ocean Acidification on Fatty Acid Composition in the Antarctic Snail Neobuccinum eatoni",
        authors: "Servetto, N, De Troch, M, Alurralde G, Ferrero, L, De Aranzamendi MC, Sahade, R",
        journal: "Frontiers in Marine Science ",
        doi: "",
      },
      {
        title: "Botryllus (Ascidiacea, Styelidae) on the Argentine coast.",
        authors: "Taverna, A., de Aranzamendi, M. C., Lagger, C., Giménez, D. R., & Tatián, M.",
        journal: "New Zealand Journal of Marine and Freshwater Research",
        doi: "doi.org/10.1080/00288330.2025.2517057",
      },
      {
        title: "Hidden biodiversity in the Southwestern Atlantic Ocean: ophiuroids from the Mar del Plata Submarine Canyon, Argentina",
        authors: "Huenten, D., Alarcon Saavedra, A. B., de Aranzamendi, M. C., & Brogger, M. I. ",
        journal: "Revista del Museo Argentino de Ciencias Naturales, nueva serie ",
        doi: "",
      },
      {
        title: "Stability of parallel evolution in shell traits between the littoral and sublittoral ecotypes of the Antarctic limpet Nacella concinna along a 17-year time series",
        authors: "Marek Ortiz, C., Martínez, J. J., Sahade, R., & de Aranzamendi, M. C.",
        journal: "Biological Journal of the Linnean Society",
        doi: "oi.org/10.1093/biolinnean/blae049",
      },
      {
        title: "Assessing anthropogenic microfiber pollution in the southwestern Atlantic Ocean: A large-scale study on spatial distribution, concentration, and physical characterization",
        authors: "Di Mauro, R., Alves, N. M., Rodrí­guez, J., Sobrero, L., Chiesa, I. L., Hozbor, C., Allega, L., Antacli, J., Vera Díaz, M., & Schiariti, A.",
        journal: "Environmental Science and Pollution Research",
        doi: "doi.org/10.1007/s11356-025-36964-6",
      },
      {
        title: "Global floating kelp forests have limited protection despite intensifying marine heatwave threats",
        authors: "Arafeh-Dalmau, N., Villaseñor-Derbez, J. C., Schoeman, D. S., Mora-Soto, A., Bell, T. W., Butler, C. L., Costa, M., Dunga, L., Houskeeper, H., Lagger, C., ... & Cavanaugh, K. C.",
        journal: "Nature Communications",
        doi: "",
      },
      
    ],
  },
  {
    year: 2024,
    publications: [
      {
        title: "Microplastic pollution in marine sediments of the Antarctic coastal environment of Potter Cove and nearby areas (25 de Mayo/King George Island, South Shetlands)",
        authors: "Antacli J, Rimondino GN, Di Mauro R, Alurralde G, Servetto N, Garcia MD, González GA, Morales S; Sahade R, Vodopivez C, Schloss I. ",
        journal: "Marine Pollution Bulletin",
        doi: "doi.org/10.1016/j.marpolbul.2024.117236",
      },
      {
        title: "What if there is no further south to go: Assessing the vulnerability of Nacella species to climate change",
        authors: "Reyna, P. B., Castillo, S., & de Aranzamendi, M. C.",
        journal: "Estuarine, Coastal and Shelf Science",
        doi: "doi.org/10.1016/j.ecss.2024.108735",
      },
      {
        title: "The secret meal of Antarctic mesopelagic fish (Myctophidae: Electrona): a diet dominated by crustaceans along with gelatinous prey, revealed by multi-marker metabarcoding",
        authors: "Ruiz M.B., Saunders R.A., Tarling G.A., Murray A., Leese F., Havermans C.",
        journal: "Frontiers in Marine Science",
        doi: "doi.org/10.3389/fmars.2024.1474424",
      },
      {
        title: "Detecting the invisible through DNA metabarcoding: the role of gelatinous taxa in the diet of two demersal Antarctic key stone fish species (Notothenioidei). ",
        authors: "Ruiz M.B., Moreira E., Novillo M., Neuhaus S., Leese F., Havermans C.",
        journal: "Environmental DNA",
        doi: "doi.org/10.1002/EDN3.561",
      },
      {
        title: "Protect kelp forests",
        authors: "Arafeh-Dalmau, N., Olguín-Jacobson, C., Earle, S., Bello, M., Lagger, C., Mora-Soto, A., ... & Micheli, F.",
        journal: "Science",
        doi: "",
      },
      {
        title: "Microplastic pollution in marine sediments of the Antarctic coastal environment of Potter Cove and nearby areas (25 de Mayo/King George Island, South Shetlands)",
        authors: "Antacli, J., Rimondino, G., Di Mauro, R., Alurralde, G., Servetto, N., Garcia, M.D, González, G., Morales, S., Sahade, R., Vodopivez, C. & Schloss, I.",
        journal: "Marine Pollution Bulletin",
        doi: "doi.org/10.1016/j.marpolbul.2024.117236",
      },
      {
        title: "Microplastic pollution in waters of the Antarctic coastal environment of Potter Cove (25 de Mayo Island/King George Island, South Shetlands)",
        authors: "Antacli, J., Di Mauro, R., Rimondino, G., Alurralde, G., Schloss, I., González, G., Morales, S., Ottero, A., & Vodopivez, C. ",
        journal: "Science of The Total Environment ",
        doi: "doi.org/10.1016/j.scitotenv.2024.170155",
      },
    ],
  },
];