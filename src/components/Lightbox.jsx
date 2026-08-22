import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/97 backdrop-blur-sm flex flex-col animate-fadeUp"
      role="dialog"
      aria-modal="true"
      aria-label={`Imagem ampliada: ${item.alt}`}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 py-5 text-cream/80">
        <span className="text-[12px] tracking-widest2 uppercase">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          {item.category ? ` · ${item.category}` : ""}
        </span>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="flex items-center justify-center w-11 h-11 hover:text-cream transition-colors"
        >
          <X size={26} strokeWidth={1.4} />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 pb-6">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-full max-w-full object-contain select-none"
        />

        {items.length > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label="Imagem anterior"
              className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 text-cream/70 hover:text-cream transition-colors"
            >
              <ChevronLeft size={30} strokeWidth={1.3} />
            </button>
            <button
              onClick={onNext}
              aria-label="Próxima imagem"
              className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 text-cream/70 hover:text-cream transition-colors"
            >
              <ChevronRight size={30} strokeWidth={1.3} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
