export interface OutreachActivity {
  title: string;
  titleEn?: string;
  year: string;
  desc: string;
  descEn?: string;
  photo: string;
  type: "video" | "gallery"| "article";
  link?: string;
  photos?: string[];
}

export const outreachActivities: OutreachActivity[] = [
    { 
    title: "Ascidias: el filtro vivo del mar (Cumbre Kids)", 
    titleEn: "Ascidians: the living filter of the sea (Cumbre Kids)",
    year: "2026", 
    desc: "Episodio del podcast educativo Cumbre Kids donde Carla de Aranzamendi explica a los más chicos qué son las ascidias. La nota describe cómo estos animales filtran el agua, su evolución y los descubrimientos realizados en el Cañón Submarino Mar del Plata.", 
    descEn: "Episode of the educational podcast Cumbre Kids where Carla de Aranzamendi explains to children what ascidians are. The piece describes how these animals filter water, their evolution, and the discoveries made in the Mar del Plata Submarine Canyon.",
    photo: "/src/assets/cumbrekids.png", // Puedes usar una foto de una ascidia si tienes una
    type: "video", 
    link: "https://www.youtube-nocookie.com/embed/aOGvRGK4OiM" 
    },
  { 
  title: "Carla de Aranzamendi: Nominada a Personalidad Cordobesa 2025", 
  titleEn: "Carla de Aranzamendi: Nominated for Córdoba Person of the Year 2025",
  year: "2026", 
  desc: "Entrevista en La Voz tras la nominación de Carla como Personalidad Cordobesa del Año. La nota destaca el impacto del streaming científico que alcanzó audiencias masivas y profundiza en la importancia de la ciencia pública y la conservación de los ecosistemas nativos.", 
  descEn: "Interview in La Voz following Carla's nomination as Córdoba's Person of the Year. The piece highlights the impact of scientific streaming that reached massive audiences and delves into the importance of public science and the conservation of native ecosystems.",
  photo: "/src/assets/personalidad.png", 
  type: "video", 
  link: "https://www.youtube-nocookie.com/embed/eVz3RwMQAnM" 
},
  { 
    title: "CONIFest", 
    year: "2025", 
    desc: "ECOMARES participó de este festival de ciencia y música organizado por la Asamblea de CONICET Córdoba para visibilizar el desfinanciamiento y la crisis del sector científico.\n\nNuestra propuesta contó con más de 30 stands interactivos donde compartimos:\n• Muestras biológicas de animales marinos.\n• Videos del fondo del mar y observación con lupas.\n• Juegos y actividades culturales para toda la comunidad.", 
    descEn: "ECOMARES took part in this science and music festival organized by the CONICET Córdoba Assembly to raise awareness about the underfunding and crisis in the scientific sector.\n\nOur exhibition featured over 30 interactive stands where we shared:\n• Biological samples of marine animals.\n• Seabed footage and magnifying glass observations.\n• Games and cultural activities for the entire community.",
    photo: "/src/assets/CONIFEST.png", 
    type: "gallery", 
    photos: [] 
  },
  { 
    title: "Expocarreras UNC 2025", 
    year: "2025", 
    desc: "La Expocarreras es una feria que se realiza todos los años, donde se presenta la información de las carreras que ofrece la Universidad Nacional de Córdoba. En esta ocasión, el grupo ECOMARES participó como representante de la Asamblea CONICET Córdoba. Diseñamos actividades interactivas para involucrar a futuros estudiantes universitarios en la ciencia marina. Explicamos cómo está estructurada la carrera, discutimos posibles salidas laborales y compartimos nuestro propio trabajo en el campo de la biología marina. También abordamos los desafíos actuales del sistema de investigación en Argentina.", 
    descEn: "Expocarreras is an annual fair where the Universidad Nacional de Córdoba presents its academic programs. On this occasion, the ECOMARES group participated as a representative of CONICET Córdoba. We designed interactive activities to engage future university students in marine science, explained career paths, discussed job opportunities, and shared our own work in marine biology. We also addressed the current challenges facing the research system in Argentina.",
    photo: "/src/assets/portada-expocarreras.jpg", 
    type: "gallery", 
    photos: [
      "/src/assets/a.jpg",
      "/src/assets/b.jpg",
      "/src/assets/c.jpg",
      "/src/assets/d.jpg",
      "/src/assets/f.jpg",
      "/src/assets/g.jpg",
      "/src/assets/h.jpg",
      "/src/assets/i.jpg",
      "/src/assets/j.jpg",
      "/src/assets/k.jpg",
      "/src/assets/m.jpg",
      "/src/assets/n.jpg",
      "/src/assets/o.jpg",
      "/src/assets/p.jpg",
    ]
  },
  { 
    title: "Feria de Ciencias de la Provincia de Córdoba", 
    titleEn: "Córdoba Province Science Fair",
    year: "2025", 
    desc: "ECOMARES participó en la 57° Feria Provincial de Ciencias, Tecnologías, Artes, Movimiento e Innovación “Alberto Maiztegui”. Este encuentro reunió a estudiantes, docentes e investigadores de diversos niveles educativos en un espacio de intercambio y aprendizaje.\n\n Nuestra exhibición incluyó:\n• Muestras biológicas de fauna marina.\n• Videos exclusivos del fondo marino.\n• Material fotográfico y actividades interactivas para despertar vocaciones científicas.", 
    descEn: "ECOMARES participated in the 57th Provincial Fair of Sciences, Technologies, Arts, Movement, and Innovation “Alberto Maiztegui.” This event brought together students, teachers, and researchers from various educational levels in a space for exchange and learning.\n\n🔬 Our exhibition featured:\n• Biological samples of marine fauna.\n• Exclusive seabed footage.\n• Photographic material and interactive activities designed to inspire future scientific vocations.",
    photo: "/src/assets/FeriaCba1.jpeg", 
    type: "gallery", 
    photos: [] 
  },
  { 
    title: "Exploración submarina en el Mar Argentino", 
    titleEn: "Underwater exploration in the Argentine Sea",
    year: "2025", 
    desc: "Entrevista a Carla de Aranzamendi en Universo TV sobre la expedición a bordo del buque Falcor (too). Se exploran los hallazgos de arrecifes de coral en aguas profundas y la importancia de la ciencia pública para la soberanía y el conocimiento de nuestra biodiversidad marina.", 
    descEn: "Interview with Carla de Aranzamendi on Universo TV about the expedition aboard the RV Falcor (too). The piece explores the findings of deep-sea coral reefs and the importance of public science for sovereignty and the knowledge of our marine biodiversity.",
    photo: "/src/assets/universotv.png", // O la foto que prefieras para esta entrevista
    type: "video", 
    link: "https://www.youtube-nocookie.com/embed/qllZGqLC4hw" 
  },
  { 
  title: "Áreas Marinas Protegidas: escudos contra el cambio climático", 
  titleEn: "Marine Protected Areas: shields against climate change",
  year: "2024", 
  desc: "Nota publicada por el CADIC-CONICET donde especialistas destacan el rol de las AMPs en Argentina. El artículo subraya cómo la conservación de los ecosistemas bentónicos y los bosques de macroalgas es fundamental para la captura de carbono y la resiliencia oceánica.", 
  descEn: "Article published by CADIC-CONICET where specialists highlight the role of MPAs in Argentina. The piece underscores how the conservation of benthic ecosystems and kelp forests is key for carbon sequestration and oceanic resilience.",
  photo: "/src/assets/carbono.png", // Queda muy bien con una foto de buceo o del Canal Beagle
  type: "article", 
  link: "https://cadic.conicet.gov.ar/especialistas-del-conicet-destacan-la-importancia-de-las-areas-marinas-protegidas-amps-de-argentina-para-contribuir-a-combatir-el-cambio-climatico/" 
},
  { 
    title: "Documental Mar del Fuego", 
    titleEn: "Documentary Mar del Fuego",
    year: "2018", 
    desc: "Este corto documental explora las consecuencias del cambio climático en los mares del hemisferio sur, siguiendo al investigador Ricardo Sahade (Universidad Nacional de Córdoba y buzo antártico), quien estudia las profundidades del océano en la Antártida.\n\nProducción: Área de Divulgación Científica y Documentales - Prosecretaría de Comunicación Institucional - UNC (2018).", 
    descEn: "This short documentary explores the consequences of climate change in the seas of the Southern Hemisphere, following researcher Ricardo Sahade (National University of Córdoba and Antarctic diver), who studies the depths of the ocean in Antarctica.\n\n Produced by: Science Communication and Documentary Area – Office of Institutional Communication – UNC (2018).",
    photo: "/src/assets/mardelfuego.png", 
    type: "video", 
    link: "https://www.youtube-nocookie.com/embed/9mNVt5pP8O8" 
  },
  { 
  title: "El bentos antártico y el cambio climático", 
  titleEn: "Antarctic benthos affected by climate change",
  year: "2016", 
  desc: "Nota de divulgación publicada en la revista Investigación y Ciencia. El artículo explica cómo el retroceso de los glaciares y el aumento de la sedimentación están transformando drásticamente las comunidades del fondo marino en la Antártida.", 
  descEn: "Outreach article published in Investigación y Ciencia magazine. The piece explains how glacier retreat and increased sedimentation are drastically transforming seabed communities in Antarctica.",
  photo: "/src/assets/pottermapa.png", 
  type: "article", 
  link: "/pdf/InvyCiencia2015.pdf" 
  },
  { 
  title: "Pérdida de diversidad por el retroceso de glaciares", 
  titleEn: "Loss of diversity due to retreating coastal glaciers",
  year: "2015", 
  desc: "Nota de divulgación publicada en Phys.org basada en nuestras investigaciones en la Antártida. El estudio revela cómo el derretimiento de los glaciares costeros genera sedimentos que impactan negativamente en la biodiversidad del fondo marino.", 
  descEn: "Outreach article published in Phys.org based on our research in Antarctica. The study reveals how retreating coastal glaciers generate sediment that negatively impacts seabed biodiversity.",
  photo: "/src/assets/lossofdivers.jpg", // Puedes usar esta o subir una específica de glaciares
  type: "article", 
  link: "https://phys.org/news/2015-11-loss-diversity-coastal-glaciers.html" 
},
{ 
  title: "El derretimiento de los glaciares y la vida marina antártica", 
  titleEn: "Melting glaciers are messing up Antarctic ocean life",
  year: "2015", 
  desc: "Nota de divulgación publicada en el diario estadounidense The Washington Post. El artículo analiza cómo el cambio climático acelerado en la Península Antártica está transformando los ecosistemas del fondo marino debido al retroceso glaciar.", 
  descEn: "Outreach article published in the American newspaper The Washington Post. The piece analyzes how accelerated climate change in the Antarctic Peninsula is transforming seabed ecosystems due to glacier retreat.",
  photo: "/src/assets/nota3.png", // Sugerencia: usa una foto de glaciar o de la base
  type: "article", 
  link: "https://www.washingtonpost.com/news/energy-environment/wp/2015/11/13/scientists-say-melting-glaciers-are-now-messing-up-antarctic-ocean-life/" 
},
{ 
  title: "Sedimentos y cambios en los fondos marinos antárticos", 
  titleEn: "Sediment from melting glaciers changes Antarctic sea floor communities",
  year: "2015", 
  desc: "Nota de divulgación publicada por la AAAS (American Association for the Advancement of Science). El artículo analiza cómo el aporte de sedimentos por el derretimiento glaciar está reconfigurando la estructura de las comunidades biológicas en la Península Antártica.", 
  descEn: "Outreach article published by the AAAS (American Association for the Advancement of Science). The piece explores how sediment input from melting glaciers is reshaping the structure of biological communities in the Antarctic Peninsula.",
  photo: "/src/assets/nota4.jpg", 
  type: "article", 
  link: "https://www.aaas.org/news/sediment-melting-glaciers-changes-antarctic-sea-floor-communities" 
},
{ 
  title: "Calentamiento en el margen occidental de la Antártida", 
  titleEn: "Warming on Antarctica's western fringes",
  year: "2010", 
  desc: "Entrevista publicada en International Innovation a los líderes del proyecto clicOPEN/IMCOAST. El artículo explora el impacto del calentamiento global en la Península Antártica y cómo la cooperación internacional es clave para entender los cambios en los ecosistemas costeros.", 
  descEn: "Interview published in International Innovation featuring clicOPEN/IMCOAST project leaders. The piece explores the impact of global warming on the Antarctic Peninsula and how international cooperation is key to understanding changes in coastal ecosystems.",
  photo: "/src/assets/nota5.jpg", // Ahora que ya la renombraste
  type: "article", 
  link: "/pdf/Warming-on-Antarcticas-western-fringes.pdf" 
},
];