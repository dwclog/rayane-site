import editorialImage from "../assets/images/rayane-seated-smile.jpg";

export default function Editorial() {
  return (
    <section className="relative h-[78vh] sm:h-[85vh] bg-ink overflow-hidden">
      <img
        src={editorialImage}
        alt="Retrato de Rayane Falcão sorrindo em estúdio"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/40" />

      <div className="relative z-10 h-full container-page flex flex-col items-center justify-end text-center pb-16 sm:pb-20">
        <p className="font-display text-cream text-[9vw] sm:text-5xl md:text-6xl leading-tight max-w-3xl">
          Sua ideia. Meu olhar.
          <br /> Sua história.
        </p>
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-8 inline-flex items-center gap-3 text-cream text-[13px] tracking-widest2 uppercase border-b border-cream/50 pb-1 hover:border-cream transition-colors duration-300"
        >
          Vamos conversar
        </a>
      </div>
    </section>
  );
}
