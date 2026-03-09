import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import expeditionAntarctica from "@/assets/expedition-antarctica.jpg";
import expeditionArctic from "@/assets/expedition-arctic.jpg";
import expeditionBeagle from "@/assets/expedition-beagle.jpg";
import researchDiving from "@/assets/research-diving.jpg";
import biodiversity from "@/assets/biodiversity.jpg";

const Index = () => {
  const { t } = useLanguage();

  const expeditions = [
    { img: expeditionAntarctica, title: "Antártida", year: "2023", desc: "Campaña Antártica de Verano" },
    { img: expeditionArctic, title: "Ártico", year: "2022", desc: "Expedición a Svalbard" },
    { img: expeditionBeagle, title: "Canal Beagle", year: "2024", desc: "Muestreo bentónico estival" },
  ];

  return (
    <PageLayout>
      <HeroSection />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeader title={t.home.introTitle} />
          <p className="text-lg leading-relaxed text-muted-foreground">{t.home.introText}</p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-ocean py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader title={t.home.researchTitle} light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.home.researchAreas.map((area, i) => (
              <div key={i} className="p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">{area.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/research" className="inline-block px-6 py-2.5 border border-primary-foreground/30 text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-all">
              {t.nav.research}
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width research image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={researchDiving} alt="Investigación submarina" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </section>

      {/* Expeditions */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader title={t.home.expeditionsTitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {expeditions.map((exp, i) => (
              <Link to="/expeditions" key={i} className="group relative overflow-hidden rounded-lg aspect-[3/4]">
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-ocean-surface uppercase tracking-widest">{exp.year}</span>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mt-1">{exp.title}</h3>
                  <p className="text-sm text-primary-foreground/70 mt-1">{exp.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Biodiversity image */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={biodiversity} alt="Biodiversidad marina" className="w-full h-full object-cover" />
      </section>

      {/* Team preview */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeader title={t.home.teamTitle} />
          <p className="text-lg text-muted-foreground mb-8">{t.home.teamText}</p>
          <Link to="/team" className="inline-block px-6 py-2.5 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
            {t.home.viewTeam}
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-ocean-light py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeader title={t.home.contactTitle} light />
          <p className="text-lg text-primary-foreground/70 mb-8">{t.home.contactText}</p>
          <Link to="/contact" className="inline-block px-8 py-3 border-2 border-primary-foreground/40 text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-all">
            {t.home.contactButton}
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
