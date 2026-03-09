import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import { expeditions } from "@/data/expeditions";

const Expeditions = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={expeditions[0]?.img} alt="Expedición" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">{t.expeditions.title}</h1>
          <p className="text-primary-foreground/70 mt-4 text-lg">{t.expeditions.subtitle}</p>
        </div>
      </section>

      {/* Expedition cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">
          {expeditions.map((exp, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
              <div className="w-full md:w-3/5 overflow-hidden rounded-lg">
                <img src={exp.img} alt={exp.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-2/5">
                <span className="text-xs uppercase tracking-widest text-turquoise font-medium">{exp.location} · {exp.year}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">{exp.title}</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Expeditions;
