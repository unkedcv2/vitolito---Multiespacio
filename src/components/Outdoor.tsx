import { useState } from 'react';
import { Trees, Sun, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import afueraJuegos00 from '../assets/images/ellugar_afuera_juegos.webp';
import afueraJuegos01 from '../assets/images/ellugar_afuera_juegos_01.webp';
import afueraJuegos02 from '../assets/images/ellugar_afuera_juegos_02.webp';
import fondoBlanco from '../assets/images/backgrounds/fondo_vitolito_blanco.jfif';

export default function Outdoor() {
  const [activePhoto, setActivePhoto] = useState(0);

  const outdoorPhotos = [
    {
      src: afueraJuegos00,
      title: 'Parque Verde Principal con Mangrullo',
      subtitle: 'Espacio al aire libre con estructura de trepada y parque arbolado'
    },
    {
      src: afueraJuegos01,
      title: 'Sector de Juegos y Dinámicas Grupales',
      subtitle: 'Césped natural seguro y coordinado para correr y jugar'
    },
    {
      src: afueraJuegos02,
      title: 'Espacio Exterior Totalmente Integrado',
      subtitle: 'Conexión fluida entre el salón cubierto y el jardín'
    },
  ];

  const outdoorHighlights = [
    {
      title: 'Amplio Parque Verde',
      description: 'Espacio exterior para correr, organizar competencias y disfrutar del aire libre en City Bell.',
      icon: Trees,
    },
    {
      title: 'Mangrullo Recreativo',
      description: 'Estructura de madera para trepar, deslizarse y explorar en un entorno seguro.',
      icon: Sun,
    },
    {
      title: 'Actividades al Sol',
      description: 'Dinámicas guiadas aprovechando todo el parque cuando el clima acompaña.',
      icon: Compass,
    },
    {
      title: 'Espacio Seguro y Cercado',
      description: 'Supervisión constante y acompañamiento por parte de los coordinadores en cada momento.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="espacio"
      className="py-20 lg:py-28 bg-white text-slate-800 relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoBlanco})`,
        backgroundSize: '580px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/94 backdrop-blur-[1px] pointer-events-none" />
      
      {/* Decorative ambient aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2C9C8E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#023047]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#023047]/10 text-[#023047] text-xs sm:text-sm font-bold uppercase tracking-wider border border-[#023047]/10 cursor-pointer hover:bg-[#2C9C8E]/15 hover:text-[#2C9C8E] transition-all">
            <Trees className="w-4 h-4 text-[#2C9C8E]" />
            <span>Naturaleza & Aire Libre en City Bell</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-logo-script font-normal tracking-wide text-[#023047] py-1 whitespace-nowrap">
            Diversión en el Parque al Sol
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Vitolito no es solo un salón cerrado: combina un espacio climatizado con un gran parque verde para alternar juegos bajo techo y al aire libre.
          </p>
        </div>

        {/* Interactive Outdoor Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Photo Gallery Switcher (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-slate-800 border border-white/15 shadow-2xl group">
              <img
                src={outdoorPhotos[activePhoto].src}
                alt={outdoorPhotos[activePhoto].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023047] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[11px] font-bold text-[#2C9C8E] uppercase tracking-wider">
                  Foto {activePhoto + 1} de {outdoorPhotos.length}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {outdoorPhotos[activePhoto].title}
                </h3>
                <p className="text-xs text-slate-300">
                  {outdoorPhotos[activePhoto].subtitle}
                </p>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-3 gap-3">
              {outdoorPhotos.map((photo, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  className={`relative rounded-2xl overflow-hidden aspect-[16/10] border-2 transition-all ${
                    activePhoto === index
                      ? 'border-[#2C9C8E] ring-2 ring-[#2C9C8E]/50 scale-102'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Feature Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {outdoorHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  onClick={() => setActivePhoto(index % outdoorPhotos.length)}
                  className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#2C9C8E] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-pointer active:scale-98 select-none group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#2C9C8E]/15 text-[#2C9C8E] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#2C9C8E] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#023047] mb-1 group-hover:text-[#2C9C8E] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <a
                href="#reservas"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2C9C8E] hover:bg-[#207a6f] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all"
              >
                <span>Consultar fecha para fiesta con parque</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
