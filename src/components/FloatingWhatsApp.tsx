import { MessageCircle } from 'lucide-react';
import { VITOLITO_INFO } from '../data/vitolitoData';

export default function FloatingWhatsApp() {
  const whatsappHref = `https://wa.me/${VITOLITO_INFO.whatsappNumber}?text=${encodeURIComponent(
    '¡Hola Vitolito! Me gustaría consultar disponibilidad e información para un cumpleaños.'
  )}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        id="floating-whatsapp-btn"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp a Vitolito Eventos"
        className="w-14 h-14 rounded-full bg-[#2C9C8E] hover:bg-[#207a6f] text-white flex items-center justify-center shadow-2xl shadow-[#2C9C8E]/40 transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
