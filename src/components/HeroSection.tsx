import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-ocean1.jpg";
import logo from "@/assets/logo-ecomares.png";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Ecosistema marino" className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <img src={logo} alt="ECOMARES" className="mx-auto mb-6 h-56 md:h-72 w-auto drop-shadow-lg" />
        <p className="text-base md:text-lg text-primary-foreground/65 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t.hero.description}
        </p>
        <Link
          to="/about"
          className="inline-block px-8 py-3 border-2 border-primary-foreground/40 text-primary-foreground text-sm uppercase tracking-widest font-medium hover:bg-primary-foreground/10 transition-all"
        >
          {t.hero.cta}
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;
