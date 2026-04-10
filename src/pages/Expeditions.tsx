import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import { expeditions, Expedition } from "@/data/expeditions";
import portada from "@/assets/beagleport.png";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = ({ photos, onClose }: { photos: string[]; onClose: () => void }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
        <X size={32} />
      </button>
      <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        <img src={photos[current]} alt="" className="w-full max-h-[70vh] object-contain rounded" />
        {photos.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((current - 1 + photos.length) % photos.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrent((current + 1) % photos.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 justify-center" onClick={e => e.stopPropagation()}>
          {photos.map((p, i) => (
            <img
              key={i}
              src={p}
              alt=""
              onClick={() => setCurrent(i)}
              className={`h-16 w-24 object-cover rounded cursor-pointer flex-shrink-0 ${current === i ? "ring-2 ring-turquoise" : "opacity-50 hover:opacity-100"}`}
            />
          ))}
        </div>
        <p className="text-white text-xs text-center mt-2">{current + 1} / {photos.length}</p>
      </div>
    </div>
  );
};

const Expeditions = () => {
  const { t, language } = useLanguage();
  const [gallery, setGallery] = useState<string[] | null>(null);

  return (
    <PageLayout>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={portada} alt="Expedición" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">{t.expeditions.title}</h1>
          <p className="text-primary-foreground/70 mt-4 text-lg">{t.expeditions.subtitle}</p>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">
          {expeditions.map((exp, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
              <div
                className="w-full md:w-3/5 overflow-hidden rounded-lg cursor-pointer relative group"
                onClick={() => exp.photos && exp.photos.length > 0 && setGallery(exp.photos)}
              >
                <img src={exp.img} alt={exp.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                {exp.photos && exp.photos.length > 0 && (
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium uppercase tracking-wider">Ver fotos</span>
                  </div>
                )}
              </div>
              <div className="w-full md:w-2/5">
                <span className="text-xs uppercase tracking-widest text-turquoise font-medium">{exp.location} · {exp.year}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
                  {language === "en" && exp.titleEn ? exp.titleEn : exp.title}
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed text-justify">
                  {language === "en" && exp.descEn ? exp.descEn : exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {gallery && <Gallery photos={gallery} onClose={() => setGallery(null)} />}
    </PageLayout>
  );
};

export default Expeditions;