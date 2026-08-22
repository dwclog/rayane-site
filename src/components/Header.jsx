import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../assets/images/logo.png";
import { whatsappLink } from "../config";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-espresso/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-[76px] sm:h-[84px]">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#inicio");
          }}
          className="flex items-center gap-2 shrink-0"
          aria-label="Rayane Falcão Audiovisual — início"
        >
          <img src={logo} alt="Rayane Falcão Audiovisual" className="h-9 sm:h-10 w-auto" />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className={`text-[13px] tracking-wide uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-espresso/80 hover:text-espresso"
                  : "text-cream/90 hover:text-cream [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border text-[13px] tracking-wide uppercase px-5 py-2.5 transition-colors duration-300 ${
              scrolled
                ? "border-espresso text-espresso hover:bg-espresso hover:text-cream"
                : "border-cream/70 text-cream hover:bg-cream hover:text-espresso"
            }`}
          >
            Falar comigo
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className={`flex items-center justify-center w-11 h-11 border rounded-full transition-colors duration-300 ${
              scrolled ? "border-espresso/30 text-espresso" : "border-cream/50 text-cream"
            }`}
          >
            <MessageCircle size={19} strokeWidth={1.6} />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={`flex items-center justify-center w-11 h-11 transition-colors duration-300 ${
              open ? "text-espresso" : scrolled ? "text-espresso" : "text-cream"
            }`}
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[76px] bottom-0 bg-cream transition-transform duration-500 ease-editorial ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-8 pt-10 gap-8">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="text-3xl font-display text-espresso"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-espresso text-cream text-sm tracking-wide uppercase px-6 py-4"
          >
            Falar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
