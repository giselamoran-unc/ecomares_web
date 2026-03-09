import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";

const collaborators = [
  { name: "British Antarctic Survey", country: "Reino Unido", desc: "Colaboración en estudios de ecología bentónica antártica." },
  { name: "Alfred Wegener Institute", country: "Alemania", desc: "Investigación conjunta en ecosistemas polares y cambio climático." },
  { name: "Universidad de Barcelona", country: "España", desc: "Estudios de biodiversidad marina y modelado ecológico." },
  { name: "Instituto Antártico Argentino", country: "Argentina", desc: "Logística y apoyo para campañas antárticas." },
  { name: "University Centre in Svalbard", country: "Noruega", desc: "Investigación comparativa de ecosistemas árticos y antárticos." },
  { name: "Universidad de Magallanes", country: "Chile", desc: "Estudios de ecosistemas marinos subantárticos compartidos." },
];

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
