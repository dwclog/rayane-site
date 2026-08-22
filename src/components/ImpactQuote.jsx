import useReveal from "../hooks/useReveal";

export default function ImpactQuote() {
  const [ref, visible] = useReveal();

  return (
    <section id="frase" className="bg-cream">
      <div
        ref={ref}
        className={`container-page py-28 sm:py-36 md:py-48 text-center transition-all duration-[1200ms] ease-editorial ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-display text-espresso text-[9vw] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] max-w-4xl mx-auto">
          Cada imagem carrega
          <br className="hidden sm:block" /> uma história.
        </p>
        <p className="mt-8 text-stone text-base sm:text-lg max-w-md mx-auto">
          Meu trabalho é encontrar aquilo que merece ser lembrado.
        </p>
      </div>
    </section>
  );
}
