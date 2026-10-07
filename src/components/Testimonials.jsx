import useReveal from "../hooks/useReveal";

// ─────────────────────────────────────────────────────────────
// DEPOIMENTOS — edite aqui para adicionar, remover ou trocar nomes.
// "featured: true" deixa o depoimento maior (coluna da esquerda).
// ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    featured: true,
    text: "A minha experiência foi incrível! Você conduziu tudo muito bem, nos deixou super à vontade! Além disso a filmagem ficou perfeita, captou todos os detalhes e junto com a edição conseguiu transmitir toda a experiência de relaxamento e de cuidado que queríamos. Com certeza quero fazer muito mais vídeos e vou indicar pra todo mundo! Muito obrigada Ray 🫶",
    author: "Cliente",
    context: "Vídeo de experiência",
  },
  {
    text: "Aaaah ficou muito lindo amei! De verdade, você tem muito talento pra isso, Ray 😍👏🏻",
    author: "Cliente",
    context: "Vídeo entregue",
  },
  {
    text: "Que vídeo mais lindoooo, meu Deus, o tanto que eu me emocionei, ficou perfeito 💙 Gratidão! Ficou muito lindo.",
    author: "Cliente",
    context: "Vídeo Quartinho do Davi",
  },
];

function Quote({ t, large = false }) {
  return (
    <figure className={`border-t hairline pt-6 ${large ? "md:pt-8" : ""}`}>
      <blockquote
        className={`font-display text-espresso leading-snug ${
          large ? "text-2xl sm:text-3xl md:text-[2rem]" : "text-xl sm:text-2xl"
        }`}
      >
        “{t.text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 text-[13px] tracking-wide uppercase text-stone">
        <span className="text-espresso">{t.author}</span>
        <span aria-hidden="true" className="w-6 h-px bg-espresso/30" />
        <span>{t.context}</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [ref, visible] = useReveal();
  const featured = TESTIMONIALS.find((t) => t.featured);
  const others = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section id="depoimentos" className="bg-cream">
      <div className="container-page py-24 sm:py-32 md:py-40">
        <p className="eyebrow mb-4 text-center">Depoimentos</p>
        <h2 className="font-display text-espresso text-4xl sm:text-5xl md:text-6xl leading-none text-center mb-16 sm:mb-20">
          Quem viveu a experiência
        </h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto transition-all duration-1000 ease-editorial ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {featured && <Quote t={featured} large />}
          <div className="space-y-12 md:space-y-14">
            {others.map((t, i) => (
              <Quote key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
