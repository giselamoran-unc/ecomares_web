import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="section-ocean text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-display text-2xl font-bold tracking-wider">ECOMARES</p>
            <p className="text-sm text-primary-foreground/60 mt-1">{t.footer.group}</p>
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
