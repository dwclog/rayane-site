import useReveal from "../hooks/useReveal";

const SERVICES = [
  {
    number: "01",
    title: "Conteúdo para marcas",
    description: "vídeos para redes sociais, produtos, serviços e campanhas.",
  },
  {
    number: "02",
    title: "Histórias e experiências",
    description: "vídeos documentais, bastidores, eventos e registros de momentos que merecem ser contados.",
  },
  {
    number: "03",
    title: "Audiovisual",
    description: "Produção de conteúdo visual com estética e narrativa.",
  },
];

export default function Services() {
  const [ref, visible] = useReveal();

  return (
    <section className="bg-cream-deep">
      <div className="container-page py-24 sm:py-32 md:py-40">
        <p className="eyebrow mb-4 text-center">Serviços</p>
        <h2 className="font-display text-espresso text-4xl sm:text-5xl md:text-6xl leading-none text-center mb-16 sm:mb-20">
          O que posso criar com você
        </h2>

        <div
          ref={ref}
          className={`grid sm:grid-cols-3 gap-10 sm:gap-8 max-w-5xl mx-auto transition-all duration-1000 ease-editorial ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {SERVICES.map((s) => (
            <div key={s.number} className="border-t hairline pt-6">
              <span className="text-stone text-sm">{s.number}</span>
              <h3 className="font-display text-espresso text-2xl sm:text-3xl mt-3 mb-3">
                {s.title}
              </h3>
              <p className="text-ink/70 text-[15px] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
