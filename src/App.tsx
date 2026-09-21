import { useState, useEffect } from 'react';
import { Home, Gamepad2, Calendar, Image as ImageIcon, Star } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Attractions from './components/Attractions';
import Outdoor from './components/Outdoor';
import BookingCalendar from './components/BookingCalendar';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import WaveDividerWithStar from './components/WaveDividerWithStar';

import logoTranspa from './assets/images/vitolito_logo_fondotranspa.png';
import logoVerde from './assets/images/vitolito_logo_verde_fondotranspa.png';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<'inicio' | 'juegos' | 'reservar' | 'fotos' | 'opiniones'>('inicio');

  // Detect mobile view on load and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intercept anchor links on mobile to switch tabs elegantly instead of jumpy scrolling
  useEffect(() => {
    if (!isMobile) return;
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetSection = href.slice(1);
          if (targetSection === 'inicio' || targetSection === 'hero') {
            setActiveTab('inicio');
          } else if (targetSection === 'juegos') {
            setActiveTab('juegos');
          } else if (targetSection === 'galeria' || targetSection === 'fotos') {
            setActiveTab('fotos');
          } else if (targetSection === 'experiencia' || targetSection === 'opiniones') {
            setActiveTab('opiniones');
          } else if (targetSection === 'reservas') {
            setActiveTab('reservar');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isMobile]);

  if (isMobile) {
    return (
      <div
        id="vitolito-app-root"
        className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2C9C8E]/30 selection:text-[#023047] pb-10"
      >
        {/* Mobile Top App Header: Large logo, no hamburger menu */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-center z-50 shadow-sm">
          <img
            src={logoVerde}
            alt="Vitolito Eventos"
            className="h-14 w-auto object-contain cursor-pointer active:scale-95 transition-transform"
            onClick={() => {
              setActiveTab('inicio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </header>

        {/* Mobile App Viewport Content */}
        <main className="pt-16 pb-[72px] animate-in fade-in duration-300">
          {activeTab === 'inicio' && (
            <>
              <Hero />
              <About />
              <Outdoor />
            </>
          )}
          {activeTab === 'juegos' && <Attractions />}
          {activeTab === 'reservar' && <BookingCalendar />}
          {activeTab === 'fotos' && <Gallery />}
          {activeTab === 'opiniones' && <Experience />}

          {/* Footer at the end of every active mobile tab view */}
          <Footer />
        </main>

        {/* Mobile Bottom Tab Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 h-[72px] bg-white border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] flex items-center justify-around z-50 px-2 pb-safe select-none">
          {/* Inicio */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('inicio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
              activeTab === 'inicio' ? 'text-[#2C9C8E]' : 'text-slate-400 active:text-[#2C9C8E]'
            }`}
          >
            <Home className="w-5.5 h-5.5" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">Inicio</span>
          </button>

          {/* Juegos */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('juegos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
              activeTab === 'juegos' ? 'text-[#2C9C8E]' : 'text-slate-400 active:text-[#2C9C8E]'
            }`}
          >
            <Gamepad2 className="w-5.5 h-5.5" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">Juegos</span>
          </button>

          {/* RESERVAR - Center Giant Highlighted Button */}
          <div className="relative w-20 flex justify-center -mt-8 z-50">
            <button
              type="button"
              onClick={() => {
                setActiveTab('reservar');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-16 h-16 rounded-full flex flex-col items-center justify-center text-white transition-all shadow-2xl active:scale-95 select-none cursor-pointer border-4 border-white ${
                activeTab === 'reservar'
                  ? 'bg-gradient-to-br from-[#2C9C8E] to-[#1d7066] ring-4 ring-[#2C9C8E]/30 scale-110'
                  : 'bg-[#023047] hover:bg-[#2C9C8E] shadow-[#023047]/30'
              }`}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-[8px] font-black uppercase tracking-tight mt-0.5">Reservar</span>
            </button>
          </div>

          {/* Fotos */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('fotos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
              activeTab === 'fotos' ? 'text-[#2C9C8E]' : 'text-slate-400 active:text-[#2C9C8E]'
            }`}
          >
            <ImageIcon className="w-5.5 h-5.5" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">Fotos</span>
          </button>

          {/* Opiniones */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('opiniones');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
              activeTab === 'opiniones' ? 'text-[#2C9C8E]' : 'text-slate-400 active:text-[#2C9C8E]'
            }`}
          >
            <Star className="w-5.5 h-5.5" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">Opiniones</span>
          </button>
        </nav>

        {/* Floating WhatsApp CTA remains present and useful */}
        <FloatingWhatsApp />
      </div>
    );
  }

  // Full Desktop Version (Standard layout with continuous organic transitions)
  return (
    <div
      id="vitolito-app-root"
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2C9C8E]/30 selection:text-[#023047]"
    >
      {/* Header with grouped navigation */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main id="main-content">
        <Hero />
        
        <About />
        
        {/* Transition from white About to dark Attractions (#023047) */}
        <div className="relative z-10 -mt-10 overflow-hidden leading-none">
          <WaveDividerWithStar fillColor="#023047" starColor="#ffffff" />
        </div>
        
        <Attractions />
        
        {/* Transition from dark Attractions to white Outdoor (#ffffff) */}
        <div className="relative z-10 -mt-10 rotate-180 overflow-hidden leading-none">
          <WaveDividerWithStar fillColor="#023047" starColor="#ffffff" />
        </div>
        
        <Outdoor />
        
        {/* Transition from white Outdoor to dark BookingCalendar (#023047) */}
        <div className="relative z-10 -mt-10 overflow-hidden leading-none">
          <WaveDividerWithStar fillColor="#023047" starColor="#ffffff" />
        </div>
        
        <BookingCalendar />
        
        {/* Transition from dark BookingCalendar to white Experience (#ffffff) */}
        <div className="relative z-10 -mt-10 rotate-180 overflow-hidden leading-none">
          <WaveDividerWithStar fillColor="#023047" starColor="#ffffff" />
        </div>
        
        <Experience />
        
        {/* Transition from white Experience to light Gallery (#ffffff) */}
        <div className="relative z-10 -mt-10 overflow-hidden leading-none">
          <WaveDividerWithStar fillColor="#ffffff" starColor="#ffffff" />
        </div>
        
        <Gallery />
      </main>

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
