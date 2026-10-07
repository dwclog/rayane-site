import { useEffect, useState } from "react";
import { Play } from "lucide-react";

export default function VideoCard({
  id,
  title,
  label,
  type = "youtube",
  className = "",
}) {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  // Busca automaticamente a thumbnail do Vimeo
  useEffect(() => {
    if (type === "vimeo") {
      fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setThumbnail(data.thumbnail_url);
        })
        .catch((error) => {
          console.error("Erro ao carregar thumbnail do Vimeo:", error);
        });
    }
  }, [id, type]);

  return (
    <div className={className}>
      <div className="relative aspect-[9/16] overflow-hidden bg-ink">
        {!playing ? (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Assistir vídeo: ${title}`}
            className="group absolute inset-0 w-full h-full focus-visible:outline-offset-4"
          >
            {type === "vimeo" ? (
              thumbnail && (
                <img
                  src={thumbnail}
                  alt={`Miniatura do vídeo ${title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.05]"
                />
              )
            ) : (
              <img
                src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                alt={`Miniatura do vídeo ${title}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.05]"
              />
            )}

            {/* Escurecimento da imagem */}
            <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/35 transition-colors duration-500" />

            {/* Botão Play */}
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
        ) : type === "vimeo" ? (
          <iframe
            src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0&badge=0`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
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