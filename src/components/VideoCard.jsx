import { useState } from "react";
import { Play } from "lucide-react";

// Card de vídeo vertical (YouTube Shorts).
// Mostra a miniatura e só carrega o player quando a pessoa clica.
export default function VideoCard({ id, title, label, className = "" }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  );

  return (
    <div className={className}>
      <div className="relative aspect-[9/16] overflow-hidden bg-ink">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Assistir vídeo: ${title}`}
            className="group absolute inset-0 w-full h-full focus-visible:outline-offset-4"
          >
            <img
              src={thumb}
              alt={`Miniatura do vídeo ${title}`}
              loading="lazy"
              onError={() =>
                setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)
              }
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.05]"
            />

            <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/35 transition-colors duration-500" />

            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cream/80 text-cream bg-ink/30 backdrop-blur-sm group-hover:bg-cream group-hover:text-espresso transition-colors duration-300">
                <Play
                  size={26}
                  strokeWidth={1.5}
                  className="ml-1"
                  fill="currentColor"
                />
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3 text-[12px] tracking-widest2 uppercase">
        <span className="text-stone">{label}</span>
        <span
          aria-hidden="true"
          className="w-6 h-px bg-espresso/30"
        />
        <span className="text-espresso">{title}</span>
      </div>
    </div>
  );
}