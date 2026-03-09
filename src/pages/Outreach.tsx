import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";

const activities = [
  { title: "Noche de los Museos", year: "2024", desc: "Taller interactivo sobre biodiversidad marina para público general en el Museo del Fin del Mundo." },
  { title: "Semana de la Ciencia", year: "2023", desc: "Charlas y actividades educativas en escuelas de Ushuaia sobre ecosistemas polares y cambio climático." },
  { title: "Festival de Ciencia y Arte", year: "2023", desc: "Instalación artístico-científica sobre la vida submarina del Canal Beagle." },
  { title: "Capacitación docente", year: "2022", desc: "Taller para docentes de nivel secundario sobre ecología marina y conservación." },
];

const Outreach = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="section-ocean py-20 md:py-28">
        <div className="container mx-auto px-4 pt-8">
          <SectionHeader title={t.outreach.title} subtitle={t.outreach.subtitle} light />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((act, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <span className="text-xs text-turquoise uppercase tracking-wider font-medium">{act.year}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2">{act.title}</h3>
                <p className="text-sm text-muted-foreground mt-3">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Outreach;
