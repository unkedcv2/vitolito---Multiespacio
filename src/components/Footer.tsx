import { MapPin, Phone, Instagram, ArrowUp, Calendar, MessageCircle } from 'lucide-react';
import { VITOLITO_INFO } from '../data/vitolitoData';
import logoTranspa from '../assets/images/vitolito_logo_fondotranspa.png';
import fondoOscuro from '../assets/images/backgrounds/fondo_vitolito.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappHref = `https://wa.me/${VITOLITO_INFO.whatsappNumber}?text=${encodeURIComponent(
    '¡Hola Vitolito! Me gustaría consultar disponibilidad e información para un cumpleaños.'
  )}`;

  return (
    <footer
      id="main-footer"
      className="bg-[#023047] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoOscuro})`,
        backgroundSize: '580px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#023047]/85 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoTranspa}
                alt="Vitolito Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <div>
                <span className="block text-xl font-black tracking-tight text-white leading-none">
                  VITOLITO EVENTOS
                </span>
                <span className="text-xs font-bold text-[#2C9C8E] uppercase tracking-widest leading-none">
                  Multiespacio · City Bell
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Salón de fiestas y parque de entretenimiento infantil en City Bell. Inflable gigante 8x4m, parque exterior arbolado, animación guiada y espacio para adultos.
            </p>

            <p className="text-xs text-[#2C9C8E] font-bold italic">
              "Hacé de tu fiesta un parque de diversiones."
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3 pt-4 md:pt-0">
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-[#2C9C8E] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#juegos" className="hover:text-[#2C9C8E] transition-colors">
                  Juegos e Inflables
                </a>
              </li>
              <li>
                <a href="#espacio" className="hover:text-[#2C9C8E] transition-colors">
                  Parque al Aire Libre
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#2C9C8E] transition-colors">
                  Galería de Fotos
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#2C9C8E] transition-colors">
                  Opiniones en Google
                </a>
              </li>
              <li>
                <a href="#reservas" className="text-[#2C9C8E] font-bold hover:underline flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Calendario & Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Contacto Directo
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2C9C8E] shrink-0 mt-0.5" />
                <span>City Bell, Buenos Aires</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2C9C8E] shrink-0" />
                <a href={`tel:${VITOLITO_INFO.phone.replace(/\s|-/g, '')}`} className="hover:text-[#2C9C8E]">
                  {VITOLITO_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#2C9C8E] shrink-0" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2C9C8E]"
                >
                  WhatsApp: +54 9 221 459-1756
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={VITOLITO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400"
                >
                  {VITOLITO_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vitolito Eventos · Salón de Fiestas y Parque Infantil en City Bell. Todos los derechos reservados.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#2C9C8E] transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
