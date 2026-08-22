// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÕES RÁPIDAS — edite apenas aqui
// ─────────────────────────────────────────────────────────────

// Número de WhatsApp no formato internacional, sem símbolos.
// Exemplo real: "5567991234567" (55 = Brasil, 67 = DDD, depois o número)
export const WHATSAPP_NUMBER = "556796852120"; // TODO: substituir pelo número real da Rayane

// Mensagem que já vem preenchida quando o visitante abre o WhatsApp
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá Rayane! Vi seu site e gostaria de conversar sobre um projeto ✨";

export const whatsappLink = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Usuário do Instagram, sem o @
export const INSTAGRAM_USERNAME = "rayaneefalcao"; // TODO: confirmar usuário real
export const instagramLink = `https://instagram.com/${INSTAGRAM_USERNAME}`;
