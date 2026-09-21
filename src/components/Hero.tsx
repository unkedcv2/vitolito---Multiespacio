import { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import videoHero from '../assets/videos/video_fondo_hero.mp4';
import fondoOscuro from '../assets/images/backgrounds/fondo_vitolito.png';
import WaveDividerWithStar from './WaveDividerWithStar';

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Short, punchy, festive phrases with handwritten signature matching Vitolito's logo
  const festivePhrases = [
    {
      badge: 'City Bell · Multiespacio',
      topText: 'Tu cumple en un',
      scriptText: 'parque de diversiones!',
      sub: 'Inflables gigantes, parque verde y animación que no para.',
    },
    {
      badge: 'Festejos Inolvidables',
      topText: 'Risas y juegos que',
      scriptText: 'quedan para siempre!',
      sub: 'Espacio exclusivo para que los chicos salten y los grandes disfruten.',
    },
    {
      badge: 'Magia & Alegría',
      topText: 'La mejor fiesta es',
      scriptText: 'festejar en Vitolito!',
      sub: 'Shows, lluvia de globos, tirolesa y aventura al aire libre.',
    },
  ];

  // Rotate between festive phrases smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % festivePhrases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [festivePhrases.length]);

  const currentPhrase = festivePhrases[phraseIndex];

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden min-h-[90vh] flex items-center bg-[#023047]"
      style={{
        backgroundImage: `url(${fondoOscuro})`,
        backgroundSize: '580px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Background Video with maximum clarity and visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-100 opacity-100"
        >
          <source src={videoHero} type="video/mp4" />
        </video>

        {/* Minimal, crystal-clear tint allowing full video appreciation with legible white text */}
        <div className="absolute inset-0 bg-[#023047]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/90 via-transparent to-[#023047]/30" />
      </div>

      {/* Main Content: Festive, gestural, with animated rotating phrases */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center py-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={phraseIndex}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-4 w-full flex flex-col items-center"
            >
              {/* Badge */}
              <span className="inline-block text-xs sm:text-sm font-extrabold tracking-widest text-[#5ce1d2] uppercase px-4 py-1.5 rounded-full bg-[#023047]/85 border border-[#2C9C8E]/50 backdrop-blur-md shadow-md">
                {currentPhrase.badge}
              </span>
              
              {/* Main Headline with handwritten script mimicking the logo */}
              <h1
                id="hero-main-title"
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)] flex flex-col items-center gap-1 sm:gap-2"
              >
                <span className="font-extrabold tracking-tight">{currentPhrase.topText}</span>
                <span className="font-logo-script text-4xl sm:text-6xl lg:text-7xl text-[#5ce1d2] tracking-normal drop-shadow-[0_2px_12px_rgba(44,156,142,0.8)] transform -rotate-1 py-1">
                  {currentPhrase.scriptText}
                </span>
              </h1>

              {/* Subtitle */}
              <p
                id="hero-subtitle"
                className="text-base sm:text-xl md:text-2xl text-white font-semibold leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
              >
                {currentPhrase.sub}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Phrase Indicators */}
          <div className="flex items-center justify-center gap-2 pt-4 pb-2">
            {festivePhrases.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPhraseIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === phraseIndex
                    ? 'w-8 bg-[#2C9C8E]'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ver frase ${idx + 1}`}
              />
            ))}
          </div>

          {/* Direct CTA Action: Booking Calendar & Availability */}
          <div className="pt-4 hidden md:flex items-center justify-center">
            <a
              id="hero-cta-calendar"
              href="#reservas"
              className="inline-flex items-center justify-center gap-3 bg-[#2C9C8E] hover:bg-[#207a6f] text-white text-lg font-black px-8 py-4 sm:px-10 sm:py-5 rounded-2xl shadow-xl shadow-[#023047]/60 hover:shadow-2xl transition-all active:scale-95 group"
            >
              <Calendar className="w-6 h-6 text-white" />
              <span>Consultar Fecha en Calendario</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* Vitolito Brand Wave Divider terminating with the signature 5-point star */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-10">
        <WaveDividerWithStar
          fillColor="#ffffff"
          starColor="#2C9C8E"
          className="w-full"
        />
      </div>
    </section>
  );
}
