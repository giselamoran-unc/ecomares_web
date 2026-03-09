import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <PageLayout>
      <section className="section-ocean py-20 md:py-28">
        <div className="container mx-auto px-4 pt-8">
          <SectionHeader title={t.contact.title} light />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-turquoise mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{t.contact.institution}</h3>
                <p className="text-muted-foreground mt-1">Centro Austral de Investigaciones Científicas (CADIC-CONICET)</p>
                <p className="text-muted-foreground">Bernardo Houssay 200, V9410 Ushuaia, Tierra del Fuego, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-turquoise mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{t.contact.email}</h3>
                <p className="text-muted-foreground mt-1">ecomares@cadic-conicet.gob.ar</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-turquoise mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{t.contact.phone}</h3>
                <p className="text-muted-foreground mt-1">+54 2901 422310</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
