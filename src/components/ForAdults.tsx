import { Users, Coffee, Dice5, UserCheck, CheckCircle } from 'lucide-react';
import { ADULT_SERVICES } from '../data/vitolitoData';
import adentro06 from '../assets/images/ellugar_adentro_06.webp';
import festejo02 from '../assets/images/ellugar_festejo_02.webp';
import fondoOscuro from '../assets/images/backgrounds/fondo_vitolito.png';

const iconMap: Record<string, React.ElementType> = {
  'espacio-relax': Coffee,
  'servicio-adultos': Users,
  'juegos-mesa': Dice5,
  'equipo-presente': UserCheck,
};

export default function ForAdults() {
  return (
    <section
      id="para-adultos"
      className="py-20 lg:py-24 bg-[#023047] text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoOscuro})`,
        backgroundSize: '580px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#023047]/85 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#5ce1d2] text-xs sm:text-sm font-bold uppercase tracking-wide border border-white/15">
            <Coffee className="w-4 h-4 text-[#2C9C8E]" />
            <span>Comodidad Garantizada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Para los Grandes
          </h2>
          <p className="text-xl font-bold text-[#5ce1d2]">
            Mientras ellos juegan, vos también podés disfrutar y charlar tranquilo.
          </p>
          <p className="text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Vitolito cuenta con un área especialmente pensada para los padres y familiares: sillones cómodos, servicio de cafetería, vista directa al parque y al salón sin invadir el juego de los chicos.
          </p>
        </div>

        {/* Real photo showcase & adult service features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Photos (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-white/20 aspect-square group">
              <img
                src={adentro06}
                alt="Espacio living y adultos en Vitolito"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-white/20 aspect-square group">
              <img
                src={festejo02}
                alt="Mesas y ambientación en Vitolito"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 4 Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADULT_SERVICES.map((item) => {
              const Icon = iconMap[item.id] || Users;
              return (
                <div
                  key={item.id}
                  id={`adult-service-${item.id}`}
                  className="p-6 rounded-3xl bg-white text-slate-800 border border-slate-200 shadow-md hover:border-[#2C9C8E] hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#023047] text-[#2C9C8E] flex items-center justify-center mb-3 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-black text-[#023047] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
