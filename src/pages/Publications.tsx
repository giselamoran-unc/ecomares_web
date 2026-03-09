import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";

const publications = [
  { year: 2024, authors: "García M., Pérez J., Martínez L.", title: "Benthic community structure in the Beagle Channel: patterns and drivers.", journal: "Marine Ecology Progress Series", vol: "712: 45–62" },
  { year: 2023, authors: "López C., García M.", title: "Microplastic contamination in sub-Antarctic marine sediments.", journal: "Environmental Pollution", vol: "340: 122845" },
  { year: 2023, authors: "Martínez L., García M., Pérez J.", title: "Blue carbon stocks in sub-Antarctic kelp forests.", journal: "Global Change Biology", vol: "29(8): 2105–2118" },
  { year: 2022, authors: "Pérez J., García M.", title: "Trophic ecology of Antarctic benthic invertebrates using stable isotopes.", journal: "Polar Biology", vol: "45: 1023–1035" },
  { year: 2021, authors: "García M., Rodríguez A.", title: "Biodiversity patterns on the Burdwood Bank, South Atlantic.", journal: "Deep-Sea Research Part II", vol: "198: 105072" },
];

const Publications = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="section-ocean py-20 md:py-28">
        <div className="container mx-auto px-4 pt-8">
          <SectionHeader title={t.publications.title} subtitle={t.publications.subtitle} light />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {publications.map((pub, i) => (
              <div key={i} className="border-l-4 border-ocean-mid pl-6 py-3">
                <span className="text-sm font-medium text-turquoise">{pub.year}</span>
                <p className="text-foreground mt-1">
                  <span className="text-muted-foreground">{pub.authors}</span>{" "}
                  <span className="font-medium">{pub.title}</span>{" "}
                  <em className="text-muted-foreground">{pub.journal}</em>{" "}
                  <span className="text-muted-foreground">{pub.vol}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
