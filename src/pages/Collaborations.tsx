import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import { collaborators } from "@/data/collaborations";

const Collaborations = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="section-ocean py-20 md:py-28">
        <div className="container mx-auto px-4 pt-8">
          <SectionHeader title={t.collaborations.title} subtitle={t.collaborations.subtitle} light />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-display text-lg font-semibold text-foreground">{c.name}</h3>
                <span className="text-xs text-turquoise uppercase tracking-wider">{c.country}</span>
                <p className="text-sm text-muted-foreground mt-3">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Collaborations;
