import { MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import useReveal from "../hooks/useReveal";
import { whatsappLink, instagramLink, INSTAGRAM_USERNAME } from "../config";

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contato" className="bg-cream">
      <div
        ref={ref}
        className={`container-page py-24 sm:py-32 md:py-40 text-center transition-all duration-1000 ease-editorial ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="eyebrow mb-5">Contato</p>
        <h2 className="font-display text-espresso text-4xl sm:text-5xl md:text-6xl leading-none mb-6">
          Vamos criar juntos?
        </h2>
        <p className="text-ink/70 text-base sm:text-lg max-w-md mx-auto mb-12 leading-relaxed">
          Se você tem uma ideia, um momento para registrar ou simplesmente
          quer conversar sobre um projeto, entre em contato.
        </p>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-espresso text-cream text-sm sm:text-base tracking-wide uppercase px-9 py-5 min-h-[56px] hover:bg-espresso-deep transition-colors duration-300"
        >
          <MessageCircle size={20} strokeWidth={1.6} />
          Falar pelo WhatsApp
        </a>

        <div className="mt-10">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-espresso/80 hover:text-espresso text-[15px] transition-colors duration-300"
          >
            <InstagramIcon size={18} strokeWidth={1.6} />
            @{INSTAGRAM_USERNAME}
          </a>
        </div>
      </div>
    </section>
  );
}
