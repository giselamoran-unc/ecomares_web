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
      {
        title: "Shallow Hard-Bottom Benthic Assemblages of South Bay (Antarctic Peninsula): An Update 40 Years Later",
        authors: "Morales S., Cárdenas C.A., Bravo-Gómez D., Lagger C.",
        journal: "Diversity",
        doi: "10.3390/d16030162",
      },
      {
        title: "Blue carbon storage in a sub-Antarctic marine protected area",
        authors: "Bergagna L., Lovrich G., Riccialdelli L. et al.",
        journal: "Scientific Reports",
        doi: "10.1038/s41598-024-71319-0",
      },
    ],
  },
  {
    year: 2023,
    publications: [
      {
        title: "Molecular responses of calcifying and non-calcifying Antarctic benthic species to Ocean Acidification",
        authors: "Servetto N., Ruiz M.B., Martínez M., Harms L., de Aranzamendi C., Alurralde G., Giménez D., Abele D., Held C., Sahade R.",
        journal: "Science of the Total Environment",
        doi: "10.1016/j.scitotenv.2023.166577",
      },
      {
        title: "A long and winding but exciting road: Biodiversity, phylogenetic, and biogeographic relationships of ascidians in the Southwest Atlantic",
        authors: "de Aranzamendi M.C.",
        journal: "Developmental Dynamics",
        doi: "10.1002/dvg.23551",
      },
      {
        title: "The role of drilling predation in isolated, nutrient-poor ecosystems: first insights from Rapa Nui, Polynesia",
        authors: "Martinelli J.C., Gordillo S., de Aranzamendi M.C., Rivadeneira M.M.",
        journal: "Palaios",
        doi: "10.2110/palo.2022.044",
      },
      {
        title: "Genetic footprints of Quaternary glacial cycles over the patterns of population diversity and structure in three Nacella species across the Magellan province",
        authors: "González-Wevar C.A., de Aranzamendi M.C., Segovia N.I., Rosenfeld S., Maturana C.S., Molina C.R. et al.",
        journal: "Frontiers in Marine Science",
        doi: "10.3389/fmars.2023.1154755",
      },
      {
        title: "Multi-omics for studying and understanding polar life",
        authors: "Clark M.S., Hoffman J.I., Peck L.S., Bargelloni L., Gande D., Havermans C. et al.",
        journal: "Nature Communications",
        doi: "10.1038/s41467-023-43209-y",
      },
    ],
  },
  {
    year: 2022,
    publications: [
      {
        title: "Identifying environmental drivers of shell shape and size variation in a widely distributed marine bivalve along the Atlantic Patagonian coast",
        authors: "Morán G.A., Martínez J.J., Reyna P.B., Martín J., Malits A., Gordillo S.",
        journal: "Zoologischer Anzeiger",
        doi: "10.1016/j.jcz.2022.05.003",
      },
      {
        title: "Molecular responses of a key Antarctic species to sedimentation due to rapid climate change",
        authors: "Ruiz M.B., Servetto N., Alurralde G., Abele D., Harms L., Sahade R., Held C.",
        journal: "Marine Environmental Research",
        doi: "10.1016/j.marenvres.2022.105720",
      },
      {
        title: "Parallel shape divergence between ecotypes of the limpet Nacella concinna along the Antarctic Peninsula: a new model species for parallel evolution?",
        authors: "de Aranzamendi M.C., Martínez J.J., Held C., Sahade R.",
        journal: "Zoology",
        doi: "10.1016/j.zool.2021.125983",
      },
      {
        title: "Abyssal ascidians (Chordata, Tunicata) from the Weddell Sea, Antarctica, including a new Styela species and stomach content identifications",
        authors: "Maggioni T., Rimondino C., Taverna A., Reyna P., Lagger C., Alurralde G., Calcagno E., Tatián M.",
        journal: "Zootaxa",
        doi: "10.11646/zootaxa.5093.3.2",
      },
      {
        title: "Octopuses and drilling snails as the main suspects of predation traces on shelled molluscs in West Antarctica",
        authors: "Gordillo S., Morán G.A., Malvé M.E.",
        journal: "Polar Biology",
        doi: "10.1007/s00300-021-02979-5",
      },
    ],
  },
  {
    year: 2021,
    publications: [
      {
        title: "Tidewater glacier retreat in Antarctica: The table is set for fast-growing opportunistic species, is it?",
        authors: "Lagger C., Neder C., Merlo P., Servetto N., Jerosch K., Sahade R.",
        journal: "Estuarine, Coastal and Shelf Science",
        doi: "10.1016/j.ecss.2021.107447",
      },
      {
        title: "Molecular mechanisms underlying responses of the Antarctic coral Malacobelemnon daytoni to ocean acidification",
        authors: "Servetto N., de Aranzamendi C., Bettencourt R., Held C., Abele D., Movilla J., González G., Bustos D., Sahade R.",
        journal: "Marine Environmental Research",
        doi: "10.1016/j.marenvres.2021.105430",
      },
      {
        title: "Ocean acidification effects on the stress response in a calcifying Antarctic coastal organism: The case of Nacella concinna ecotypes",
        authors: "de Aranzamendi M.C., Servetto N., Movilla J., Bettencourt R., Sahade R.",
        journal: "Marine Pollution Bulletin",
        doi: "10.1016/j.marpolbul.2021.112218",
      },
      {
        title: "Morphology, genetics, and historical records support the synonymy of two ascidian species and suggest their spread throughout areas of the Southern Hemisphere",
        authors: "Taverna A., de Aranzamendi M.C., Maggioni T., Alurralde G., Turon X., Tatián M.",
        journal: "Invertebrate Systematics",
        doi: "10.1071/IS20060",
      },
      {
        title: "A new record of Ascidiella scabra (Müller, 1776) (Ascidiacea, Phlebobranchia) in the southwestern Atlantic",
        authors: "Giménez D.R., Taverna A., Meloni M., Correa N., Sylvester F., Tatián M.",
        journal: "Check List",
        doi: "10.15560/17.3.723",
      },
      {
        title: "Ocean warming and freshening effects on lipid metabolism in coastal Antarctic phytoplankton assemblages dominated by sub-Antarctic species",
        authors: "Antacli J.C., Hernando M.P., De Troch M., Malanga G., Mendiolar M., Hernández D.R., Varela D.E., Antoni J., Sahade R.J., Schloss I.R.",
        journal: "Science of the Total Environment",
        doi: "10.1016/j.scitotenv.2021.147879",
      },
      {
        title: "Rocky reef biodiversity survey: Punta Pardelas, Argentina",
        authors: "Bravo G., Livore J.P., Battini N., Gastaldi M., Lauretta D., Brogger M., Raffo M.P., Lagger C., Bigatti G.",
        journal: "Biodiversity Data Journal",
        doi: "10.3897/BDJ.9.e69413",
      },
      {
        title: "Antarctic ascidians under increasing sedimentation: Physiological thresholds and ecosystem hysteresis",
        authors: "Torre L., Alurralde G., Lagger C., Abele D., Schloss I.R., Sahade R.",
        journal: "Marine Environmental Research",
        doi: "10.1016/j.marenvres.2021.105284",
      },
      {
        title: "Late Holocene Ameghinomya antiqua shells from the Beagle Channel: A multi-proxy approach to palaeoenvironmental and palaeoclimatic reconstruction",
        authors: "Morán G.A., Bayer S., Beierlein L., Martinez J.J., Benitez-Vieyra S., Mackensen A. et al.",
        journal: "Palaeogeography, Palaeoclimatology, Palaeoecology",
        doi: "10.1016/j.palaeo.2021.110574",
      },
    ],
  },
  {
    year: 2020,
    publications: [
      {
        title: "Hidden diversity in Antarctica: Molecular and morphological evidence of two different species within one of the most conspicuous ascidian species",
        authors: "Ruiz M., Taverna A., Servetto N., Sahade R., Held C.",
        journal: "Ecology and Evolution",
        doi: "10.1002/ece3.6504",
      },
      {
        title: "Shorter but thicker: analysis of internal growth bands in shells of intertidal vs. subtidal Antarctic limpets, Nacella concinna, reflects their environmental adaptation",
        authors: "Lomovasky B.J., de Aranzamendi M.C., Abele D.",
        journal: "Polar Biology",
        doi: "10.1007/s00300-019-02615-z",
      },
      {
        title: "Spatial patterns of continental shelf faunal community structure along the Western Antarctic Peninsula",
        authors: "Friedlander A.M., Goodell W., Salinas-de-León P., Ballesteros E., Berkenpas E., Capurro A.P., Cárdenas C.A., Hüne M., Lagger C. et al.",
        journal: "PLoS ONE",
        doi: "10.1371/journal.pone.0239895",
      },
      {
        title: "Late Quaternary climatic variability in northern Patagonia, Argentina, based on δ18O of modern and fossil shells of Amiantis purpurata",
        authors: "Bayer S., Beierlein L., Morán G.A., Doldán M.S., Morsan E.M., Brey T. et al.",
        journal: "Palaeogeography, Palaeoclimatology, Palaeoecology",
        doi: "10.1016/j.palaeo.2020.110012",
      },
      {
        title: "Naticid drilling predation from tidal flats in northern Patagonia, SW Atlantic",
        authors: "Gordillo S., Malvé M.E., Morán G.A., Boretto G.M.",
        journal: "Journal of the Marine Biological Association of the United Kingdom",
        doi: "10.1017/S0025315420000752",
      },
    ],
  },
];