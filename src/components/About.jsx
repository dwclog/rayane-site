import aboutImage from "../assets/images/rayane-camera.jpg";
import useReveal from "../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="sobre" className="bg-cream-deep">
      <div className="container-page py-24 sm:py-32 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div
            ref={ref}
            className={`md:col-span-5 lg:col-span-5 transition-all duration-[1000ms] ease-editorial ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={aboutImage}
                alt="Retrato de Rayane Falcão sorrindo, sentada em um banquinho de estúdio"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-editorial hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="md:col-span-7 lg:col-start-7 lg:col-span-6">
            <p className="eyebrow mb-5">Sobre mim</p>
            <p className="font-display text-espresso text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
              Sou Rayane Falcão, videomaker e profissional audiovisual.
            </p>
            <div className="space-y-5 text-ink/80 text-[16px] sm:text-lg leading-relaxed max-w-lg">
              <p>
                Acredito que cada projeto tem uma essência própria, e que é através do olhar que encontramos a melhor forma de traduzi-la
              </p>
              <p>
                meu trabalho nasce de um olhar atento aos detalhes e da busca por criar vídeos que revelem verdade, personalidade e intenção.
              </p>
            </div>

            <p className="font-display italic text-espresso text-xl sm:text-2xl mt-10">
              Vamos criar algo que tenha a sua identidade?
            </p>

            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 mt-7 text-espresso text-[13px] tracking-wide uppercase border-b border-espresso pb-1 hover:gap-4 transition-all duration-300"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
