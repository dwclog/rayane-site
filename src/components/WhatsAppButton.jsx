import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../config";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={`md:hidden fixed z-40 bottom-6 right-5 flex items-center justify-center w-14 h-14 rounded-full bg-espresso text-cream shadow-[0_8px_24px_rgba(27,23,18,0.25)] transition-all duration-500 ease-editorial ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      <MessageCircle size={24} strokeWidth={1.7} />
    </a>
  );
}
