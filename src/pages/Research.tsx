import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import biodiversity from "@/assets/biodiversity.jpg";

const researchTopics = [
  { key: "Ecología Bentónica", desc: "Estudiamos las comunidades del fondo marino, su estructura, dinámica y respuesta a perturbaciones naturales y antrópicas." },
  { key: "Cambio Climático", desc: "Evaluamos los efectos del cambio climático sobre la distribución, abundancia y funcionamiento de los organismos marinos." },
  { key: "Carbono Azul", desc: "Investigamos la capacidad de los ecosistemas marinos para capturar y almacenar carbono orgánico a largo plazo." },
  { key: "Ecología Trófica", desc: "Analizamos las relaciones tróficas en ecosistemas marinos usando isótopos estables y análisis de contenidos estomacales." },
  { key: "Modelado Ecológico", desc: "Desarrollamos modelos para predecir la distribución de especies y el funcionamiento de ecosistemas." },
  { key: "Microplásticos", desc: "Estudiamos la presencia, distribución e impacto de microplásticos en los ecosistemas marinos." },
  { key: "Biodiversidad Marina", desc: "Documentamos y analizamos la diversidad biológica de los ecosistemas marinos a distintas escalas." },
  { key: "Ecosistemas Polares y Subantárticos", desc: "Investigamos la ecología de los ecosistemas marinos de la Antártida, el Ártico y la región subantártica." },
];

const Research = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={biodiversity} alt="Biodiversidad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">{t.research.title}</h1>
          <p className="text-primary-foreground/70 mt-4 text-lg">{t.research.subtitle}</p>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8">
            {researchTopics.map((topic, i) => (
              <div key={i} className="border-l-4 border-turquoise pl-6 py-2">
                <h3 className="font-display text-xl font-semibold text-foreground">{topic.key}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
