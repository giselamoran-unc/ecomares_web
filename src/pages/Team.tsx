import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import { teamMembers } from "@/data/team";
import teamBg from "@/assets/estrella.jpg";

const Team = () => {
  const { t, language } = useLanguage();
  return (
    <PageLayout>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={teamBg} alt="Equipo" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">
            {t.team.title}
          </h1>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <Link
                key={i}
                to={`/team/${m.id}`}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow block"
              >
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl font-display font-bold text-muted-foreground/30">{m.name.charAt(0)}</span>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wider text-turquoise font-medium">
                    {(language === "en" && m.roleLabelEn) ? m.roleLabelEn : (m.roleLabel || t.team.roles[m.role as keyof typeof t.team.roles])}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">{m.name}</h3>
                  <p className="text-xs text-muted-foreground/70 mt-2">{m.affiliation}</p>
                  {((language === "en" && m.researchLinesEn) ? m.researchLinesEn : m.researchLines) && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {((language === "en" && m.researchLinesEn) ? m.researchLinesEn : m.researchLines)!.join(" · ")}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;