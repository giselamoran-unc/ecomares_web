import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { BookOpen, Users, FlaskConical, Ship, Megaphone, GraduationCap, FolderOpen, Handshake, Mail } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  const sections = [
    { to: "/about", label: t.nav.about, icon: BookOpen, desc: "Misión y enfoque científico" },
    { to: "/team", label: t.nav.team, icon: Users, desc: "Investigadores y colaboradores" },
    { to: "/research", label: t.nav.research, icon: FlaskConical, desc: "Líneas de investigación" },
    { to: "/projects", label: t.nav.projects, icon: FolderOpen, desc: "Proyectos en curso" },
    { to: "/expeditions", label: t.nav.expeditions, icon: Ship, desc: "Campañas científicas" },
    { to: "/publications", label: t.nav.publications, icon: BookOpen, desc: "Artículos científicos" },
    { to: "/outreach", label: t.nav.outreach, icon: Megaphone, desc: "Divulgación y educación" },
    { to: "/collaborations", label: t.nav.collaborations, icon: Handshake, desc: "Socios y redes" },
    { to: "/opportunities", label: t.nav.opportunities, icon: GraduationCap, desc: "Becas y convocatorias" },
    { to: "/contact", label: t.nav.contact, icon: Mail, desc: "Escribinos" },
  ];

  return (
    <PageLayout>
      <HeroSection />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeader title={t.home.introTitle} />
          <p className="text-lg leading-relaxed text-muted-foreground">{t.home.introText}</p>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col items-center text-center p-5 rounded-lg border border-border hover:border-ocean-mid hover:bg-ocean-foam transition-all"
              >
                <s.icon className="w-7 h-7 text-ocean-mid group-hover:text-ocean-light transition-colors mb-3" />
                <span className="text-sm font-semibold text-foreground group-hover:text-ocean-mid transition-colors">
                  {s.label}
                </span>
                <span className="text-xs text-muted-foreground mt-1 hidden sm:block">{s.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
