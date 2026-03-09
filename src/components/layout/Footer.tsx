import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/ecomares-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="section-ocean text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ECOMARES" className="h-12 w-auto" />
            <div>
              <p className="font-display text-xl font-bold tracking-wider">ECOMARES</p>
              <p className="text-sm text-primary-foreground/60">{t.footer.group}</p>
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
