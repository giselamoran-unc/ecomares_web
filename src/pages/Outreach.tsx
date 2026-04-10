import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import { outreachActivities } from "@/data/outreach";
import conifest from "@/assets/conifest.jpeg";
import mardelfuego from "@/assets/mardelfuego.png";
import imgA from "@/assets/a.jpg";
import imgB from "@/assets/b.jpg";
import imgC from "@/assets/c.jpg";
import imgD from "@/assets/d.jpg";
import imgF from "@/assets/f.jpg";
import imgG from "@/assets/g.jpg";
import imgH from "@/assets/h.jpg";
import imgI from "@/assets/i.jpg";
import imgJ from "@/assets/j.jpg";
import imgK from "@/assets/k.jpg";
import imgM from "@/assets/m.jpg";
import imgN from "@/assets/n.jpg";
import imgO from "@/assets/o.jpg";
import imgP from "@/assets/p.jpg";
import imgPortadaExpo from "@/assets/portada-expocarreras.jpg";
import imgPortadaCONIFEST from "@/assets/CONIFEST.png";
import imgPortadaProv from "@/assets/FeriaCba1.jpeg";
import imgPortNota1 from "@/assets/lossofdivers.jpg";
import imgPortNota2 from "@/assets/pottermapa.png";
import imgPortNota3 from "@/assets/nota3.png";
import imgPortNota4 from "@/assets/nota4.jpg";
import imgPortNota5 from "@/assets/nota5.jpg";
import imgPortUniv from  "@/assets/universotv.png";
import imgPortPers from "@/assets/personalidad.png";
import imgPortKids from "@/assets/cumbrekids.png"; 
import imgPortC from "@/assets/carbono.png";

const imgs: Record<string, string> = {
  "/src/assets/conifest.jpeg": conifest,
  "/src/assets/mardelfuego.png": mardelfuego,
  "/src/assets/a.jpg": imgA,
  "/src/assets/b.jpg": imgB,
  "/src/assets/c.jpg": imgC,
  "/src/assets/d.jpg": imgD,
  "/src/assets/f.jpg": imgF,
  "/src/assets/g.jpg": imgG,
  "/src/assets/h.jpg": imgH,
  "/src/assets/i.jpg": imgI,
  "/src/assets/j.jpg": imgJ,
  "/src/assets/k.jpg": imgK,
  "/src/assets/m.jpg": imgM,
  "/src/assets/n.jpg": imgN,
  "/src/assets/o.jpg": imgO,
  "/src/assets/p.jpg": imgP,
  "/src/assets/portada-expocarreras.jpg": imgPortadaExpo,
  "/src/assets/CONIFEST.png": imgPortadaCONIFEST,
  "/src/assets/FeriaCba1.jpeg": imgPortadaProv,
  "/src/assets/lossofdivers.jpg": imgPortNota1,
  "/src/assets/pottermapa.png": imgPortNota2,
  "/src/assets/nota3.png": imgPortNota3,
  "/src/assets/nota4.jpg": imgPortNota4,
  "/src/assets/nota5.jpg": imgPortNota5,
  "/src/assets/universotv.png":imgPortUniv,
  "/src/assets/personalidad.png": imgPortPers,
  "/src/assets/cumbrekids.png": imgPortKids,
  "/src/assets/carbono.png": imgPortC,
};

const Gallery = ({ photos }: { photos: string[] }) => {
  const [current, setCurrent] = useState(0);
  const resolvedPhotos = photos.map(p => imgs[p] || p);
  return (
    <div>
      <div className="relative aspect-video bg-black rounded overflow-hidden">
        <img src={resolvedPhotos[current]} alt="" className="w-full h-full object-contain" />
        {resolvedPhotos.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((current - 1 + resolvedPhotos.length) % resolvedPhotos.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
            >‹</button>
            <button
              onClick={() => setCurrent((current + 1) % resolvedPhotos.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
            >›</button>
          </>
        )}
      </div>
      <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
        {resolvedPhotos.map((p, i) => (
          <img
            key={i}
            src={p}
            alt=""
            onClick={() => setCurrent(i)}
            className={`h-16 w-24 object-cover rounded cursor-pointer flex-shrink-0 ${current === i ? "ring-2 ring-turquoise" : "opacity-60 hover:opacity-100"}`}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">{current + 1} / {resolvedPhotos.length}</p>
    </div>
  );
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
          <p className="text-primary-foreground/70 mt-4 text-lg">{t.outreach.subtitle}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outreachActivities.map((act, i) => (
              <div 
                key={i} 
                onClick={() => {
                  if (act.type === "article" && act.link) {
                    window.open(act.link, "_blank");
                  } else {
                    setSelected(act);
                  }
                }} 
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={imgs[act.photo] || conifest} 
                    alt={act.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                  {act.type === "article" && (
                    <div className="absolute top-2 right-2 bg-turquoise text-white text-[10px] font-bold px-2 py-1 rounded shadow-md uppercase">
                      Nota ↗
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <span className="text-xs text-turquoise uppercase tracking-wider font-medium">{act.year}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-2">
                    {t.nav.outreach === "Outreach" ? (act.titleEn || act.title) : act.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 text-justify whitespace-pre-line">
                    {t.nav.outreach === "Outreach" ? (act.descEn || act.desc) : act.desc}
                  </p>
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
              <h2 className="font-display text-xl font-semibold">
                {t.nav.outreach === "Outreach" ? (selected.titleEn || selected.title) : selected.title}
              </h2>
              <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground text-2xl leading-none">&times;</button>
            </div>
            <div className="p-4">
              {selected.type === "video" && selected.link && (
                <iframe
                  src={selected.link}
                  className="w-full aspect-video rounded"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              {selected.type === "gallery" && (
                <div>
                  {selected.photos && selected.photos.length > 0 ? (
                    <Gallery photos={selected.photos} />
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      {t.nav.outreach === "Outreach" ? "Photos coming soon." : "Fotos próximamente."}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Outreach;