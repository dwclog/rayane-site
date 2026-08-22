import { ArrowDown } from "lucide-react";
import heroImage from "../assets/images/rayane-dynamic-camera.jpg";
import { whatsappLink } from "../config";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-ink md:min-h-[100svh] md:flex md:items-center overflow-hidden">
      {/* Mobile: imagem primeiro, ocupando a maior parte da primeira tela */}
      <div className="relative h-[62svh] min-h-[420px] md:hidden">
        <img
          src={heroImage}
          alt="Rayane Falcão caminhando com uma câmera fotográfica na mão"
          className="absolute inset-0 w-full h-full object-cover object-[38%_18%]"
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <p className="absolute top-[94px] left-6 eyebrow text-cream/80">Fotografia &amp; Audiovisual</p>
      </div>

      {/* Mobile: texto logo abaixo, em fundo sólido */}
      <div className="md:hidden bg-ink px-6 pt-9 pb-14">
        <div className="animate-fadeUp">
          <h1 className="font-display text-cream text-[13vw] leading-[0.95] tracking-tight">
            Rayane
            <br />
            Falcão
          </h1>
          <p className="mt-6 text-cream/90 font-display italic text-xl leading-snug">
            Fotografia que transforma momentos em memória.
          </p>
          <p className="mt-4 text-cream/65 text-[15px] leading-relaxed max-w-sm">
            Fotografia e audiovisual com olhar sensível, identidade e intenção.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-cream text-espresso text-[13px] tracking-wide uppercase px-7 py-4 min-h-[52px]"
            >
              Falar com a Rayane
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center border border-cream/40 text-cream text-[13px] tracking-wide uppercase px-7 py-4 min-h-[52px]"
            >
              Ver portfólio
            </a>
          </div>
        </div>
      </div>

      {/* Desktop / tablet: foto imersiva com texto sobreposto */}
      <img
        src={heroImage}
        alt="Rayane Falcão caminhando com uma câmera fotográfica na mão"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-[68%_center]"
        fetchpriority="high"
        loading="eager"
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />

      <div className="hidden md:block relative z-10 container-page w-full">
        <div className="max-w-xl animate-fadeUp">
          <p className="eyebrow text-cream/70 mb-5">Fotografia &amp; Audiovisual</p>
          <h1 className="font-display text-cream text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Rayane
            <br />
            Falcão
          </h1>
          <p className="mt-6 text-cream/90 font-display italic text-2xl lg:text-3xl leading-snug">
            Fotografia que transforma momentos em memória.
          </p>
          <p className="mt-5 text-cream/70 text-base max-w-sm leading-relaxed">
            Fotografia e audiovisual com olhar sensível, identidade e intenção.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-cream text-espresso text-[13px] tracking-wide uppercase px-7 py-4 min-h-[52px] hover:bg-cream/90 transition-colors duration-300"
            >
              Falar com a Rayane
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center border border-cream/40 text-cream text-[13px] tracking-wide uppercase px-7 py-4 min-h-[52px] hover:border-cream transition-colors duration-300"
            >
              Ver portfólio
            </a>
          </div>
        </div>
      </div>

      <a
        href="#frase"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#frase")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden md:flex absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors duration-300"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] tracking-widest2 uppercase">Rolar</span>
        <ArrowDown size={16} strokeWidth={1.4} className="animate-bounce" />
      </a>
    </section>
  );
}
