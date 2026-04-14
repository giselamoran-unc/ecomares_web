import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import { expeditionZones, Campaign } from "@/data/expeditions";
import portada from "@/assets/beagleport.png";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = ({ photos, video, onClose }: { photos: string[]; video?: string[]; onClose: () => void }) => {
  const allMedia = [...(video || []), ...(photos || [])];
  const [current, setCurrent] = useState(0);
  const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
        <X size={32} />
      </button>
      <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        {isVideo(allMedia[current]) ? (
          <video src={allMedia[current]} controls className="w-full max-h-[70vh] rounded" />
        ) : (
          <img src={allMedia[current]} alt="" className="w-full max-h-[70vh] object-contain rounded" />
        )}
        {allMedia.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((current - 1 + allMedia.length) % allMedia.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrent((current + 1) % allMedia.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 justify-center">
          {allMedia.map((p, i) => (
            isVideo(p) ? (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-16 w-24 rounded cursor-pointer flex-shrink-0 bg-black flex items-center justify-center ${current === i ? "ring-2 ring-turquoise" : "opacity-50 hover:opacity-100"}`}
              >
                <span className="text-white text-xs">▶ video</span>
              </div>
            ) : (
              <img
                key={i}
                src={p}
                alt=""
                onClick={() => setCurrent(i)}
                className={`h-16 w-24 object-cover rounded cursor-pointer flex-shrink-0 ${current === i ? "ring-2 ring-turquoise" : "opacity-50 hover:opacity-100"}`}
              />
            )
          ))}
        </div>
        <p className="text-white text-xs text-center mt-2">{current + 1} / {allMedia.length}</p>
      </div>
    </div>
  );
};

const Expeditions = () => {
  const { t, language } = useLanguage();
  const [activeZone, setActiveZone] = useState(expeditionZones[0]);
  const [gallery, setGallery] = useState<{ photos: string[]; video?: string[] } | null>(null);

  return (
    <PageLayout>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={portada} alt="Expedición" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">
            {t.expeditions.title}
          </h1>
          <p className="text-primary-foreground/70 mt-4 text-lg">{t.expeditions.subtitle}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {expeditionZones.map((zone) => (
              <div
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${activeZone.id === zone.id ? "border-turquoise" : "border-transparent"}`}
              >
                <div className="h-48 bg-secondary flex items-center justify-center overflow-hidden">
                  {zone.img ? (
                    <img src={zone.img} alt={zone.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-display font-bold text-muted-foreground/20">
                      {zone.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="p-4 bg-card border border-border border-t-0">
                  <p className="text-sm font-medium text-foreground text-center">
                    {language === "en" ? zone.nameEn : zone.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            {language === "en" ? activeZone.nameEn : activeZone.name}
          </h2>

          {activeZone.campaigns.length === 0 ? (
            <p className="text-muted-foreground">{language === "en" ? "Coming soon." : "Próximamente."}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeZone.campaigns.map((camp, i) => (
                <div
                  key={i}
                  onClick={() => (camp.photos?.length || camp.video?.length) && setGallery({ photos: camp.photos || [], video: camp.video })}
                  className={`bg-card border border-border rounded-lg overflow-hidden ${(camp.photos?.length || camp.video?.length) ? "cursor-pointer hover:shadow-lg transition-shadow" : ""}`}
                >
                  <div className="h-48 bg-secondary flex items-center justify-center overflow-hidden relative group">
                    {camp.img ? (
                      <img src={camp.img} alt={camp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <span className="text-4xl font-display font-bold text-muted-foreground/20">{camp.year}</span>
                    )}
                    {camp.photos && camp.photos.length > 0 && (
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-sm font-medium uppercase tracking-wider">
                          {language === "en" ? "View photos" : "Ver fotos"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-xs uppercase tracking-wider text-turquoise font-medium">{camp.year}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                      {language === "en" && camp.titleEn ? camp.titleEn : camp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 text-justify">
                      {language === "en" && camp.descEn ? camp.descEn : camp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {gallery && <Gallery photos={gallery.photos} video={gallery.video} onClose={() => setGallery(null)} />}
    </PageLayout>
  );
};

export default Expeditions;