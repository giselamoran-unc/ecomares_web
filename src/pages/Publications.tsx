import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import { publications } from "@/data/publications";

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
