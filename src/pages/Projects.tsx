import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

const Projects = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="section-ocean py-20 md:py-28">
        <div className="container mx-auto px-4 pt-8">
          <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} light />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs uppercase tracking-wider font-medium px-3 py-1 rounded-full ${
                  p.status === "current" ? "bg-turquoise/10 text-turquoise" : "bg-muted text-muted-foreground"
                }`}>
                  {p.status === "current" ? t.projects.current : t.projects.completed}
                </span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground mt-2">{p.desc}</p>
              <p className="text-xs text-muted-foreground/70 mt-3">Financiamiento: {p.funder}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
