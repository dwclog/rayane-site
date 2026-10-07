// Vídeo vertical do YouTube (Shorts) incorporado direto no site via iframe.
export default function VideoCard({ id, title, label, className = "" }) {
  return (
    <div className={className}>
      <div className="relative aspect-[9/16] overflow-hidden bg-ink">
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&playsinline=1&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
      <div className="mt-4 flex items-center gap-3 text-[12px] tracking-widest2 uppercase">
        <span className="text-stone">{label}</span>
        <span aria-hidden="true" className="w-6 h-px bg-espresso/30" />
        <span className="text-espresso">{title}</span>
      </div>
    </div>
  );
}
