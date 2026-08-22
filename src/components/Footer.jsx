import { MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import logo from "../assets/images/logo.png";
import { whatsappLink, instagramLink } from "../config";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="container-page py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
        <img src={logo} alt="Rayane Falcão Audiovisual" className="h-8 w-auto brightness-0 invert opacity-90" />

        <nav className="flex items-center gap-8">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cream/75 hover:text-cream text-sm transition-colors duration-300"
          >
            <InstagramIcon size={16} strokeWidth={1.6} />
            Instagram
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cream/75 hover:text-cream text-sm transition-colors duration-300"
          >
            <MessageCircle size={16} strokeWidth={1.6} />
            WhatsApp
          </a>
        </nav>

        <p className="text-cream/50 text-xs">© 2026 Rayane Falcão Audiovisual</p>
      </div>
    </footer>
  );
}
