import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import researchDiving from "@/assets/research-diving.jpg";

const About = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={researchDiving} alt="Investigación" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <h1 className="relative z-10 font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">
          {t.about.title}
        </h1>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t.about.mission}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{t.about.missionText}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t.about.focus}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{t.about.focusText}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
