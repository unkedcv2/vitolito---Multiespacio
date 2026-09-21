import { useState, useEffect, useRef } from 'react';
import { Camera, Instagram, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { VITOLITO_INFO } from '../data/vitolitoData';

// Real assets provided by the user
import fachadaImg from '../assets/images/ellugar_fachada.webp';
import festejo01Img from '../assets/images/ellugar_festejo_01.webp';
import festejo02Img from '../assets/images/ellugar_festejo_02.webp';
import afueraJuegosImg from '../assets/images/ellugar_afuera_juegos.webp';
import afueraJuegos01Img from '../assets/images/ellugar_afuera_juegos_01.webp';
import afueraJuegos02Img from '../assets/images/ellugar_afuera_juegos_02.webp';
import adentro01Img from '../assets/images/ellugar_adentro_01.webp';
import adentro02Img from '../assets/images/ellugar_adentro_02.webp';
import adentro03Img from '../assets/images/ellugar_adentro_03.webp';
import adentro04Img from '../assets/images/ellugar_adentro_04.webp';
import adentro05Img from '../assets/images/ellugar_adentro_05.webp';
import adentro06Img from '../assets/images/ellugar_adentro_06.webp';
import adentro07Img from '../assets/images/ellugar_adentro_07.webp';
import fondoBlanco from '../assets/images/backgrounds/fondo_vitolito_blanco.jfif';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  tag: string;
  caption: string;
}

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'foto-fachada',
      image: fachadaImg,
      title: 'Fachada & Entrada de Vitolito',
      tag: 'City Bell',
      caption: 'Fachada y entorno en City Bell.',
    },
    {
      id: 'foto-adentro-inflable',
      image: adentro01Img,
      title: 'Inflable Gigante 8x4m & Salón',
      tag: 'Atracción Principal',
      caption: 'Recorrido inflable de obstáculos, saltos y desafíos continuos.',
    },
    {
      id: 'foto-afuera-parque',
      image: afueraJuegosImg,
      title: 'Parque Verde & Mangrullo',
      tag: 'Al Aire Libre',
      caption: 'Gran parque arbolado para correr y jugar al sol.',
    },
    {
      id: 'foto-festejo-01',
      image: festejo01Img,
      title: 'Momento de Festejo & Torta',
      tag: 'Cumpleaños',
      caption: 'Espacio acondicionado para soplar las velitas y cantar con todos los amigos.',
    },
    {
      id: 'foto-adentro-pista',
      image: adentro02Img,
      title: 'Pista de Luces & Just Dance',
      tag: 'Música & Baile',
      caption: 'Efectos de luces y proyector para coreografías y dinámicas interactivas.',
    },
    {
      id: 'foto-afuera-juegos-01',
      image: afueraJuegos01Img,
      title: 'Juegos en el Parque',
      tag: 'Diversión al Aire Libre',
      caption: 'Espacio exterior cercado y seguro para dinámicas grupales.',
    },
    {
      id: 'foto-festejo-02',
      image: festejo02Img,
      title: 'Decoración & Mesas de Celebración',
      tag: 'Ambientación',
      caption: 'Mesas y living cómodos para los chicos y sus familias.',
    },
    {
      id: 'foto-adentro-pentatejo',
      image: adentro03Img,
      title: 'Pentatejo de Aire para 5 Jugadores',
      tag: 'Competencia',
      caption: 'Juego de competencia activa y reflejos sobre colchón de aire.',
    },
    {
      id: 'foto-afuera-juegos-02',
      image: afueraJuegos02Img,
      title: 'Sector Recreativo Exterior',
      tag: 'Parque City Bell',
      caption: 'Verde y naturaleza integrados al festejo.',
    },
    {
      id: 'foto-adentro-salon-04',
      image: adentro04Img,
      title: 'Salón Amplio & Climatizado',
      tag: 'Instalaciones',
      caption: 'Comodidad en cualquier época del año para chicos y grandes.',
    },
    {
      id: 'foto-adentro-juegos-05',
      image: adentro05Img,
      title: 'Desafíos & Dinámicas Guiadas',
      tag: 'Animación',
      caption: 'Coordinadores dedicados a acompañar a los chicos en cada juego.',
    },
    {
      id: 'foto-adentro-adultos-06',
      image: adentro06Img,
      title: 'Living & Comodidad para Padres',
      tag: 'Para Adultos',
      caption: 'Sillones y área de cafetería con vista directa a los chicos.',
    },
    {
      id: 'foto-adentro-salon-07',
      image: adentro07Img,
      title: 'Instalaciones Infantiles Especiales',
      tag: 'Detalles mágicos',
      caption: 'Rincones acondicionados para la diversión de todas las edades.',
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  // Keep a ref of next function for auto-slide
  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    if (isPaused) return;
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 4000); // Pass slowly every 4 seconds
    return () => clearInterval(interval);
  }, [isPaused]);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextLightboxPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % galleryItems.length);
    }
  };

  const prevLightboxPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  // Visible items inside the carousel based on dynamic offset
  const getVisibleItems = () => {
    const visible: { item: GalleryItem; index: number }[] = [];
    for (let i = 0; i < 5; i++) {
      const idx = (currentIndex + i) % galleryItems.length;
      visible.push({ item: galleryItems[idx], index: idx });
    }
    return visible;
  };

  return (
    <section
      id="galeria"
      className="py-16 sm:py-20 bg-slate-50/40 relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoBlanco})`,
        backgroundSize: '480px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee 70s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Set the background to be very transparent, clear and light */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-[1.5px] pointer-events-none" />
      
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#2C9C8E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C9C8E]/10 text-[#2C9C8E] text-xs sm:text-sm font-bold uppercase tracking-wide">
            <Camera className="w-4 h-4" />
            <span>Fotos Reales</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-logo-script font-normal text-[#023047] tracking-wide py-1 whitespace-nowrap">
            Conocé Vitolito
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Paseá por nuestras instalaciones a través de esta galería continua. Pasá el cursor por encima para detener el movimiento o tocá una foto para ampliarla.
          </p>
        </div>

        {/* Continuous Auto-Sliding Marquee */}
        <div className="relative overflow-hidden py-4 select-none">
          {/* Subtle gradient overlays on sides for desktop */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/95 via-white/40 to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/95 via-white/40 to-transparent z-10 pointer-events-none hidden md:block" />
          
          <div className="animate-marquee-slow gap-6 flex">
            {/* Render 3 copies of gallery items to ensure smooth continuous scrolling */}
            {[...galleryItems, ...galleryItems, ...galleryItems].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => openLightbox(idx % galleryItems.length)}
                className="w-[280px] sm:w-[350px] aspect-[4/3] relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-md hover:shadow-xl hover:border-[#2C9C8E]/40 transition-all duration-300 cursor-pointer flex-shrink-0 group transform hover:-translate-y-1"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/90 via-[#023047]/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#023047] text-[10px] font-black shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Zoom Badge */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#2C9C8E] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 z-10 p-5 text-white space-y-1">
                  <h3 className="text-xs sm:text-sm font-black tracking-tight text-white leading-tight group-hover:text-[#5ce1d2] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-slate-300 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Instagram className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white">
                Seguinos en Instagram para ver festejos en vivo
              </h4>
              <p className="text-xs text-slate-300">
                Subimos reels, historias y fotos de cada evento en {VITOLITO_INFO.instagramHandle}
              </p>
            </div>
          </div>

          <a
            href={VITOLITO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#2C9C8E] hover:bg-[#207a6f] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <Instagram className="w-4 h-4" />
            <span>Ver Instagram de Vitolito</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white hover:text-[#5ce1d2] bg-white/10 p-2.5 rounded-full backdrop-blur-sm cursor-pointer transition-colors"
            aria-label="Cerrar vista"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
            {/* Nav Arrows */}
            <button
              type="button"
              onClick={prevLightboxPhoto}
              className="absolute left-2 sm:-left-16 text-white hover:text-[#5ce1d2] bg-white/5 hover:bg-white/10 p-3 rounded-full transition cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <img
              src={galleryItems[selectedPhotoIndex].image}
              alt={galleryItems[selectedPhotoIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/15 shadow-2xl animate-in zoom-in-95 duration-200"
            />

            <button
              type="button"
              onClick={nextLightboxPhoto}
              className="absolute right-2 sm:-right-16 text-white hover:text-[#5ce1d2] bg-white/5 hover:bg-white/10 p-3 rounded-full transition cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Caption Overlay at bottom */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center max-w-xl px-4 text-white">
            <h4 className="font-black text-base sm:text-lg text-[#5ce1d2]">
              {galleryItems[selectedPhotoIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {galleryItems[selectedPhotoIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
