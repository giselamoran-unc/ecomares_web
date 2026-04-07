import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { teamMembers } from "@/data/team";
import { useLanguage } from "@/i18n/LanguageContext";

const TeamMember = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-32 text-center">
          <p className="text-muted-foreground">Persona no encontrada.</p>
          <Link to="/team" className="text-turquoise mt-4 inline-block">← Volver al equipo</Link>
        </div>
      </PageLayout>
    );
  }

  const bio = language === "en" && member.bioEn ? member.bioEn : member.bio;
  const roleLabel = language === "en" && member.roleLabelEn ? member.roleLabelEn : member.roleLabel;
  const researchLines = language === "en" && member.researchLinesEn ? member.researchLinesEn : member.researchLines;

  return (
    <PageLayout>
      <section className="section-ocean py-12 mt-0">
        <div className="container mx-auto px-4 pt-8 max-w-3xl">
          <div className="flex gap-6 items-start">
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="w-44 h-44 rounded-full object-cover flex-shrink-0" />
            ) : (
              <div className="w-44 h-44 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0">
                <span className="text-6xl font-display font-bold text-turquoise">{member.name.charAt(0)}</span>
              </div>
            )}
            <div>
              <span className="text-xs uppercase tracking-wider text-turquoise font-medium">{roleLabel}</span>
              <h1 className="font-display text-3xl font-bold text-primary-foreground mt-1">{member.name}</h1>
              <p className="text-primary-foreground/70 mt-1">{member.affiliation}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {bio && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                    {language === "en" ? "Biography" : "Biografía"}
                  </h2>
                  <p className="text-foreground leading-relaxed text-justify">{bio}</p>
                </div>
              )}
            </div>
            <div className="space-y-6">
              {researchLines && researchLines.length > 0 && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                    {language === "en" ? "Research lines" : "Líneas de investigación"}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {researchLines.map((line, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">{line}</span>
                    ))}
                  </div>
                </div>
              )}
              {member.email && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                    {language === "en" ? "Contact" : "Contacto"}
                  </h2>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${member.email}`} className="text-sm text-turquoise break-all">{member.email}</a>
                  <p className="text-sm text-muted-foreground mt-3">{language === "en" ? "Institution" : "Institución"}</p>
                  <p className="text-sm text-foreground">{member.affiliation}</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-10">
            <Link to="/team" className="text-sm text-turquoise hover:underline">
              {language === "en" ? "← Back to team" : "← Volver al equipo"}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamMember;