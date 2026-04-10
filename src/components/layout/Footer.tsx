import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo_solo.png";

const Footer = () => {
  const { t, language } = useLanguage();
  return (
    <footer className="section-ocean text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ECOMARES" className="h-14 w-auto" />
            <div>
              <p className="text-sm text-primary-foreground/60">
                {language === "en" ? "Marine and Polar Ecosystems" : "Ecosistemas Marinos y Polares"}
              </p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} ECOMARES. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
