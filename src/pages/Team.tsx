import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import { teamMembers } from "@/data/team";

const Team = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="section-ocean py-20 md:py-28 mt-0">
        <div className="container mx-auto px-4 pt-8">
          <SectionHeader title={t.team.title} subtitle={t.team.subtitle} light />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  <span className="text-5xl font-display font-bold text-muted-foreground/30">{m.name.charAt(0)}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wider text-turquoise font-medium">
                    {t.team.roles[m.role as keyof typeof t.team.roles]}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
                  <p className="text-xs text-muted-foreground/70 mt-2">{m.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
