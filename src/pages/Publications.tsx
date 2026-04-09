import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import { publicationsByYear } from "@/data/publications";
import { ChevronDown } from "lucide-react";

const Publications = () => {
  const { t, language } = useLanguage();
  const [openYear, setOpenYear] = useState<number | null>(
    publicationsByYear.length > 0 ? publicationsByYear[0].year : null
  );

  const toggle = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <PageLayout>
      <section className="section-ocean py-20 md:py-28 mt-0">
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">
              {t.publications.title}
            </h1>
            <p className="text-primary-foreground/70 mt-4 text-lg">{t.publications.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-3">
            {publicationsByYear.map((yearBlock) => (
              <div key={yearBlock.year} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggle(yearBlock.year)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-card hover:bg-secondary transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl font-semibold text-foreground">{yearBlock.year}</span>
                    <span className="text-sm text-muted-foreground">
                      {yearBlock.publications.length} {yearBlock.publications.length === 1 ? (language === "en" ? "publication" : "publicación") : (language === "en" ? "publications" : "publicaciones")}                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${openYear === yearBlock.year ? "rotate-180" : ""}`}
                  />
                </button>
                {openYear === yearBlock.year && (
                  <div className="border-t border-border">
                    {yearBlock.publications.map((pub, i) => (
                      <div key={i} className="px-6 py-4 border-b border-border last:border-b-0">
                        <p className="text-sm font-medium text-foreground leading-relaxed mb-1">{pub.title}</p>
                        <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-xs text-turquoise">{pub.journal}</span>
                          {pub.doi && (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-ocean-mid hover:underline"
                            >
                              DOI: {pub.doi}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;