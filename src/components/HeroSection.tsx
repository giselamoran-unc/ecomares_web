import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-ocean1.jpg";
import logoIsotipo from "@/assets/logo_solo.png";
import logoTexto from "@/assets/logo-texto.png";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Ecosistema marino" className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <div className="flex items-center justify-center gap-2 mb-6">
  <img src={logoIsotipo} alt="ECOMARES" className="h-56 md:h-72 w-auto" style={{filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3)) drop-shadow(0 0 30px rgba(255,255,255,0.2))"}} />
  <img src={logoTexto} alt="Ecosistemas Marinos y Polares" className="h-56 md:h-72 w-auto" style={{filter: "drop-shadow(0 0 2px rgba(255,255,255,0.7)) drop-shadow(0 0 35px rgba(255,255,255,1)) drop-shadow(0 0 45px rgba(255,255,255,0.9))"}} />
</div>
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
