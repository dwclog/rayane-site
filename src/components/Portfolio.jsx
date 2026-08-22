import { useState } from "react";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";
import portraitImg from "../assets/images/rayane-seated-smile.jpg";
import fullLengthImg from "../assets/images/rayane-dynamic-camera.jpg";
import useReveal from "../hooks/useReveal";

// ─────────────────────────────────────────────────────────────
// Para adicionar novas fotos ao portfólio, basta importar a imagem
// no topo do arquivo e acrescentar um novo objeto neste array.
// "span" controla o tamanho relativo no grid desktop: "lg" | "md" | "sm"
// ─────────────────────────────────────────────────────────────
const PORTFOLIO_ITEMS = [
  {
    src: fullLengthImg,
    alt: "Rayane Falcão caminhando com uma câmera fotográfica na mão",
    category: "Retratos",
    span: "lg",
  },
  {
    src: portraitImg,
    alt: "Retrato de Rayane Falcão sorrindo em estúdio",
    category: "Retratos",
    span: "md",
  },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, visible] = useReveal();

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length);
  const next = () => setActiveIndex((i) => (i + 1) % PORTFOLIO_ITEMS.length);

  return (
    <section id="portfolio" className="bg-cream">
      <div className="container-page py-24 sm:py-32 md:py-40">
        <div
          ref={ref}
          className={`flex items-end justify-between flex-wrap gap-6 mb-14 sm:mb-20 transition-all duration-1000 ease-editorial ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="eyebrow mb-4">Portfólio</p>
            <h2 className="font-display text-espresso text-4xl sm:text-5xl md:text-6xl leading-none">
              Meu trabalho
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <button
              key={item.src}
              onClick={() => open(i)}
              className={`group relative overflow-hidden bg-ink/5 text-left focus-visible:outline-offset-4 ${
                item.span === "lg"
                  ? "md:col-span-7 aspect-[4/5]"
                  : item.span === "md"
                  ? "md:col-span-5 aspect-[3/4] md:mt-16"
                  : "md:col-span-4 aspect-square"
              }`}
              aria-label={`Abrir imagem em tela cheia: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-cream text-[11px] tracking-widest2 uppercase">
                  {String(i + 1).padStart(2, "0")} · {item.category}
                </span>
                <Expand size={18} strokeWidth={1.5} className="text-cream" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={PORTFOLIO_ITEMS}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
