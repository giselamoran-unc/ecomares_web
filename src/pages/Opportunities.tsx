import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";

const Opportunities = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="section-ocean py-20 md:py-28">
        <div className="container mx-auto px-4 pt-8">
          <SectionHeader title={t.opportunities.title} subtitle={t.opportunities.subtitle} light />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t.opportunities.joinUs}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.opportunities.joinText}</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
            {t.home.contactButton}
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Opportunities;
