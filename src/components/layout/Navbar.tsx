import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/i18n/LanguageContext";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ecomares-logo.png";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/team", label: t.nav.team },
    { to: "/research", label: t.nav.research },
    { to: "/projects", label: t.nav.projects },
    { to: "/expeditions", label: t.nav.expeditions },
    { to: "/publications", label: t.nav.publications },
    { to: "/outreach", label: t.nav.outreach },
    { to: "/collaborations", label: t.nav.collaborations },
    { to: "/opportunities", label: t.nav.opportunities },
    { to: "/contact", label: t.nav.contact },
  ];

  const toggleLang = () => setLanguage(language === "es" ? "en" : "es");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ECOMARES" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                  location.pathname === link.to
                    ? "text-ocean-surface"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="ml-4 px-3 py-1 border border-primary-foreground/30 rounded text-xs font-medium text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground/60 transition-colors uppercase tracking-wider"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-2 py-1 border border-primary-foreground/30 rounded text-xs font-medium text-primary-foreground/80 uppercase"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-ocean-deep/98 backdrop-blur-sm border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium uppercase tracking-wider transition-colors rounded ${
                  location.pathname === link.to
                    ? "text-ocean-surface bg-primary-foreground/5"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
