import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import { researchTopics } from "@/data/research";
import biodiversity from "@/assets/_DSC4666.png";

const Research = () => {
  const { t, language } = useLanguage();
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchTopics.map((topic, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6" style={{borderTop: "3px solid #2986bd"}}>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {language === "en" && topic.keyEn ? topic.keyEn : topic.key}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "en" && topic.descEn ? topic.descEn : topic.desc}
                </p>
              </div>
))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;