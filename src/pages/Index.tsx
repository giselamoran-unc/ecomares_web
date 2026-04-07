import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { BookOpen, Users, FlaskConical, Ship, Megaphone, GraduationCap, Handshake, Mail } from "lucide-react";
const Index = () => {
  const { t } = useLanguage();

 const sections = [
  { to: "/about", label: t.nav.about, icon: BookOpen, desc: t.home.sectionDescs.about },
  { to: "/team", label: t.nav.team, icon: Users, desc: t.home.sectionDescs.team },
  { to: "/research", label: t.nav.research, icon: FlaskConical, desc: t.home.sectionDescs.research },
  { to: "/expeditions", label: t.nav.expeditions, icon: Ship, desc: t.home.sectionDescs.expeditions },
  { to: "/publications", label: t.nav.publications, icon: BookOpen, desc: t.home.sectionDescs.publications },
  { to: "/outreach", label: t.nav.outreach, icon: Megaphone, desc: t.home.sectionDescs.outreach },
  { to: "/collaborations", label: t.nav.collaborations, icon: Handshake, desc: t.home.sectionDescs.collaborations },
  { to: "/opportunities", label: t.nav.opportunities, icon: GraduationCap, desc: t.home.sectionDescs.opportunities },
  { to: "/contact", label: t.nav.contact, icon: Mail, desc: t.home.sectionDescs.contact },
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
       {/* Frase */}
      <section className="py-20 bg-ocean-deep">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground tracking-widest">
            CIENCIA ES SOBERANÍA
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
