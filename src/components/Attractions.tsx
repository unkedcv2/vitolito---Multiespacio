import { useState } from 'react';
import { Target, Zap, Trophy, Music, ShieldAlert, Trees, Gamepad2, ArrowRight, Check } from 'lucide-react';
import adentro01 from '../assets/images/ellugar_adentro_01.webp';
import adentro02 from '../assets/images/ellugar_adentro_02.webp';
import adentro03 from '../assets/images/ellugar_adentro_03.webp';
import afueraJuegos from '../assets/images/ellugar_afuera_juegos.webp';
import adentro05 from '../assets/images/ellugar_adentro_05.webp';
import fondoOscuro from '../assets/images/backgrounds/fondo_vitolito.png';

interface AttractionCard {
  id: string;
  name: string;
  badge: string;
  description: string;
  specs: string;
  image: string;
  icon: React.ElementType;
  highlights: string[];
}

export default function Attractions() {
  const [activeAttraction, setActiveAttraction] = useState<string>('carrera-obstaculos');

  const attractionsList: AttractionCard[] = [
    {
      id: 'carrera-obstaculos',
      name: 'Carrera de Obstáculos Gigante',
      badge: 'Inflable Principal 8x4m',
      description: 'Nuestro inflable estrella: un circuito continuo con paredes de trepada, cilindros de salto y tobogán de salida para jugar en grupos o competencias individuales.',
      specs: 'Medidas: 8 x 4 metros · Capacidad simultánea',
      image: adentro01,
      icon: ShieldAlert,
      highlights: [
        'Superficie de salto y trepada gigante',
        'Circuito de obstáculos continuo',
        'Material reforzado y supervisión permanente'
      ]
    },
    {
      id: 'pentatejo',
      name: 'Pentatejo de Aire para 5',
      badge: 'Juego Exclusivo Vitolito',
      description: 'Competencia dinámica de velocidad, reflejos y destreza sobre colchón de aire donde 5 jugadores compiten al mismo tiempo por atrapar la victoria.',
      specs: '5 Jugadores en Simultáneo',
      image: adentro03,
      icon: Target,
      highlights: [
        'Partidas rápidas y torneos entre amigos',
        'Alta interacción y adrenalina',
        'Apto para diversas edades'
      ]
    },
    {
      id: 'just-dance',
      name: 'Pista Just Dance & Proyector',
      badge: 'Música, Baile & Pantalla Gigante',
      description: 'Pista con proyector de alta definición, coreografías interactivas, máquina de humo y efectos de luces rítmicas para bailar en equipo.',
      specs: 'Pantalla Proyectada + Sistema de Audio',
      image: adentro02,
      icon: Music,
      highlights: [
        'Coreografías de las canciones más pedidas',
        'Luces rítmicas y ambientación disco',
        'Máquina de humo para el momento cumbre'
      ]
    },
    {
      id: 'mangrullo',
      name: 'Mangrullo Recreativo Exterior',
      badge: 'Parque al Aire Libre',
      description: 'Estructura en nuestro parque verde de City Bell para trepar, deslizarse y disfrutar del aire libre y el sol durante la celebración.',
      specs: 'Parque Verde Cercado & Seguro',
      image: afueraJuegos,
      icon: Trees,
      highlights: [
        'Aire puro y naturaleza en City Bell',
        'Juegos de destreza motriz y exploración',
        'Integración con las dinámicas de los coordinadores'
      ]
    },
    {
      id: 'laberinto-laser',
      name: 'Laberinto Láser Interactivo',
      badge: 'Detector de Movimiento',
      description: 'Circuito estilo misión secreta donde los chicos deben cruzar el trayecto esquivando los haces de luz láser sin activar la alarma.',
      specs: 'Sensores de Detección de Movimiento',
      image: adentro05,
      icon: Zap,
      highlights: [
        'Desafío de agilidad y sigilo',
        'Efectos visuales y sonoros',
        'Muy pedido por chicos de 6 a 12 años'
      ]
    },
  ];

  const currentSelected = attractionsList.find((a) => a.id === activeAttraction) || attractionsList[0];

  return (
    <section
      id="juegos"
      className="py-20 lg:py-28 bg-[#023047] text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoOscuro})`,
        backgroundSize: '580px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#023047]/40 pointer-events-none" />
      
      {/* Background soft gradients */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#2C9C8E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#5ce1d2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#5ce1d2] text-xs sm:text-sm font-bold uppercase tracking-wide border border-white/15 cursor-pointer hover:bg-white/15 transition-all">
            <Gamepad2 className="w-4 h-4 text-[#2C9C8E]" />
            <span>Diversión Activa & Gran Escala</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-logo-script font-normal text-[#5ce1d2] tracking-wide py-1 whitespace-nowrap">
            Juegos y Desafíos Mágicos
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Nada de pantallas aburridas: en Vitolito los chicos saltan, trepan, compiten y se mueven de verdad. Tocá cada atracción para verla en acción y conocer sus detalles.
          </p>
        </div>

        {/* Interactive Attraction Navigator (Tabs on top in a single row) */}
        <div className="flex flex-row md:justify-center items-center overflow-x-auto whitespace-nowrap scrollbar-none gap-2.5 mb-10 w-full max-w-full pb-3 px-2">
          {attractionsList.map((item) => {
            const Icon = item.icon;
            const isSelected = activeAttraction === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveAttraction(item.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[#2C9C8E] text-white shadow-lg shadow-[#2C9C8E]/40 scale-105 ring-2 ring-white/50'
                    : 'bg-[#023047]/90 text-white/90 hover:bg-white/15 border border-white/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#5ce1d2]'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Card with Real Photo & Specs */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-16">
          
          {/* Photo Side (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-slate-900 overflow-hidden group">
            <img
              src={currentSelected.image}
              alt={currentSelected.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/90 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full bg-[#023047]/90 text-[#2C9C8E] text-xs font-black backdrop-blur-md border border-white/20">
                {currentSelected.badge}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
              <h3 className="text-xl font-black">{currentSelected.name}</h3>
            </div>
          </div>

          {/* Details Side (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C9C8E]/15 text-[#2C9C8E] text-xs font-bold">
                <span>{currentSelected.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#023047] tracking-tight leading-tight">
                {currentSelected.name}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentSelected.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-[#023047]/5 border border-[#023047]/10 text-xs font-bold text-[#023047]">
                ⚡ {currentSelected.specs}
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Qué incluye esta atracción:
                </p>
                {currentSelected.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-[#2C9C8E]/20 text-[#2C9C8E] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#2C9C8E]" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Link for this feature */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                100% coordinado por nuestro equipo
              </span>
              <a
                href="#reservas"
                className="inline-flex items-center gap-1.5 text-sm font-black text-[#2C9C8E] hover:text-[#207a6f] group"
              >
                <span>Reservar turno</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
