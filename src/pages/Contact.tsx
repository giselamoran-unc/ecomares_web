import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, MapPin, Instagram } from "lucide-react";
import contactBg from "@/assets/estrella-roja.jpg";

const Contact = () => {
  const { t, language } = useLanguage();
  return (
    <PageLayout>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={contactBg} alt="Contacto" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">
            {t.contact.title}
          </h1>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-turquoise mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{t.contact.institution}</h3>
                <p className="text-muted-foreground mt-1">Instituto de Diversidad y Ecología Animal (IDEA, CONICET/UNC)</p>
                <p className="text-muted-foreground">Av. Vélez Sarsfield 299, Córdoba, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-turquoise mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{t.contact.email}</h3>
                <a href="mailto:ecomares.idea.unc@gmail.com" className="text-muted-foreground mt-1 hover:text-turquoise transition-colors">
                  ecomares.idea.unc@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Instagram className="w-6 h-6 text-turquoise mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {language === "en" ? "Social media" : "Redes sociales"}
                </h3>
                <a href="https://instagram.com/ecomares.ar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground mt-1 hover:text-turquoise transition-colors">
                  @ecomares.ar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;