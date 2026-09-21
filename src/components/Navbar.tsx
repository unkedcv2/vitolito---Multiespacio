import { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, ChevronDown, Calendar, Gamepad2, PartyPopper, Trees, Users, Image as ImageIcon } from 'lucide-react';
import { VITOLITO_INFO } from '../data/vitolitoData';
import logoVerde from '../assets/logos/vitolito_logo_verde_fondotranspa.png';

interface NavbarProps {
  onWhatsAppClick?: () => void;
}

export default function Navbar({ onWhatsAppClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [salonDropdownOpen, setSalonDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSalonDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setSalonDropdownOpen(false);
  };

  const whatsappHref = `https://wa.me/${VITOLITO_INFO.whatsappNumber}?text=${encodeURIComponent(
    '¡Hola Vitolito! Me gustaría consultar disponibilidad e información para un cumpleaños.'
  )}`;

  const salonSublinks = [
    { label: 'Juegos & Inflables', href: '#juegos', desc: 'Inflable gigante 8x4m, Pentatejo y Láser', icon: Gamepad2 },
    { label: 'El Parque & Espacio', href: '#espacio', desc: 'Espacio verde al aire libre y mangrullo', icon: Trees },
    { label: 'Opiniones de Clientes', href: '#experiencia', desc: 'Opiniones reales de familias en Google', icon: Users },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/50 py-1.5 md:py-2'
          : 'bg-white/95 backdrop-blur-sm py-4 md:py-5 border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand identity: Green logo prominent, with reduced header margins */}
        <a
          id="brand-logo-link"
          href="#inicio"
          className="flex items-center group py-0"
          aria-label="Vitolito Eventos - Inicio"
        >
          <img
            src={logoVerde}
            alt="Vitolito Eventos"
            className={`w-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-105 ${
              isScrolled
                ? 'h-11 sm:h-13 md:h-15'
                : 'h-16 sm:h-20 md:h-22'
            }`}
          />
        </a>

        {/* Clean, Grouped Desktop Navigation without cluttering buttons */}
        <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          <a
            id="nav-link-inicio"
            href="#inicio"
            className="px-3.5 py-1.5 text-base font-bold text-[#023047] hover:text-[#2C9C8E] hover:bg-[#2C9C8E]/10 rounded-xl transition-colors"
          >
            Inicio
          </a>

          {/* Grouped Dropdown for Venue & Activities */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              id="nav-dropdown-salon-btn"
              onClick={() => setSalonDropdownOpen(!salonDropdownOpen)}
              onMouseEnter={() => setSalonDropdownOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-base font-bold text-[#023047] hover:text-[#2C9C8E] hover:bg-[#2C9C8E]/10 rounded-xl transition-colors"
              aria-expanded={salonDropdownOpen}
            >
              <span>El Salón & Juegos</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${salonDropdownOpen ? 'rotate-180 text-[#2C9C8E]' : ''}`} />
            </button>

            {salonDropdownOpen && (
              <div
                onMouseLeave={() => setSalonDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                {salonSublinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#2C9C8E]/10 text-slate-800 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2C9C8E]/15 text-[#2C9C8E] flex items-center justify-center shrink-0 group-hover:bg-[#2C9C8E] group-hover:text-white transition-colors mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#023047] group-hover:text-[#2C9C8E]">
                          {item.label}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <a
            id="nav-link-galeria"
            href="#galeria"
            className="px-4 py-2.5 text-base font-bold text-[#023047] hover:text-[#2C9C8E] hover:bg-[#2C9C8E]/10 rounded-xl transition-colors"
          >
            Galería
          </a>

          {/* Clean link to calendar */}
          <a
            id="nav-link-reservas"
            href="#reservas"
            className="flex items-center gap-2 px-3.5 py-1.5 text-base font-bold text-[#2C9C8E] bg-[#2C9C8E]/10 hover:bg-[#2C9C8E]/20 rounded-xl transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#2C9C8E]" />
            <span>Reservar Fecha</span>
          </a>

          <a
            id="nav-link-contacto"
            href="#reservas"
            className="px-3.5 py-1.5 text-base font-bold text-[#023047] hover:text-[#2C9C8E] hover:bg-[#2C9C8E]/10 rounded-xl transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile menu trigger - clean and minimal */}
        <div className="flex items-center lg:hidden">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#023047] hover:bg-slate-100 rounded-2xl transition-colors"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer: grouped cleanly */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1">
            <a
              href="#inicio"
              onClick={handleLinkClick}
              className="block px-3.5 py-2.5 text-base font-bold text-[#023047] hover:bg-[#2C9C8E]/10 rounded-xl"
            >
              Inicio
            </a>

            {/* Grouped section */}
            <div className="py-2 px-3.5 bg-slate-50 rounded-2xl space-y-1 my-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                El Salón & Actividades
              </p>
              {salonSublinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-2 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#2C9C8E]"
                >
                  • {item.label}
                </a>
              ))}
            </div>

            <a
              href="#galeria"
              onClick={handleLinkClick}
              className="block px-3.5 py-2.5 text-base font-bold text-[#023047] hover:bg-[#2C9C8E]/10 rounded-xl"
            >
              Galería de Fotos
            </a>

            <a
              href="#reservas"
              onClick={handleLinkClick}
              className="flex items-center gap-2 px-3.5 py-2.5 text-base font-black text-[#2C9C8E] bg-[#2C9C8E]/10 rounded-xl"
            >
              <Calendar className="w-5 h-5 text-[#2C9C8E]" />
              <span>Calendario de Reservas</span>
            </a>

            <a
              href="#reservas"
              onClick={handleLinkClick}
              className="block px-3.5 py-2.5 text-base font-bold text-[#023047] hover:bg-[#2C9C8E]/10 rounded-xl"
            >
              Ubicación & Contacto
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#reservas"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 bg-[#023047] text-white font-bold py-3 rounded-xl shadow"
            >
              <Calendar className="w-4 h-4 text-[#2C9C8E]" />
              <span>Consultar Fecha en Calendario</span>
            </a>

            <a
              id="mobile-drawer-whatsapp-btn"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 bg-[#2C9C8E] hover:bg-[#207a6f] text-white font-bold py-3 rounded-xl shadow"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
