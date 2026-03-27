import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import { outreachActivities } from "@/data/outreach";
import conifest from "@/assets/conifest.jpeg";
import mardelfuego from "@/assets/mardelfuego.png";

const imgs: Record<string, string> = {
  "/src/assets/conifest.jpeg": conifest,
  "/src/assets/mardelfuego.png": mardelfuego,
};

const Outreach = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<typeof outreachActivities[0] | null>(null);

  return (
    <PageLayout>
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={conifest} alt="Contar la ciencia" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">{t.outreach.title}</h1>
          <p className="text-primary-foreground/70 mt-4 text-lg">Hacemos comunicación pública de la ciencia más allá de los papers</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outreachActivities.map((act, i) => (
              <div key={i} onClick={() => setSelected(act)} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img src={imgs[act.photo] || conifest} alt={act.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-turquoise uppercase tracking-wider font-medium">{act.year}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-2">{act.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-card rounded-lg max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h2 className="font-display text-xl font-semibold">{selected.title}</h2>
              <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground text-2xl leading-none">&times;</button>
            </div>
            <div className="p-4">
              {selected.type === "video" && selected.link && (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/9mNVt5pP8O8"
                  className="w-full aspect-video rounded"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              {selected.type === "gallery" && (
                <p className="text-muted-foreground text-center py-8">Fotos próximamente.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Outreach;