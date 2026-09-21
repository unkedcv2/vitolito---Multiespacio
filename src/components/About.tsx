import { useState } from 'react';
import { Gamepad2, Smile, PartyPopper, Wand2, Users, ArrowRight } from 'lucide-react';
import fachadaImg from '../assets/images/ellugar_fachada.webp';
import festejo01Img from '../assets/images/ellugar_festejo_01.webp';
import adentro01Img from '../assets/images/ellugar_adentro_01.webp';
import adentro02Img from '../assets/images/ellugar_adentro_02.webp';
import adentro04Img from '../assets/images/ellugar_adentro_04.webp';
import adentro05Img from '../assets/images/ellugar_adentro_05.webp';
import fondoBlanco from '../assets/images/backgrounds/fondo_vitolito_blanco.jfif';

export default function About() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const pillars = [
    {
      id: 'juegos-escala',
      title: 'Juegos a Gran Escala',
      description: 'Inflables gigantes, circuito de obstáculos y desafíos continuos donde los chicos son protagonistas.',
      icon: Gamepad2,
      image: adentro01Img,
    },
    {
      id: 'diversion-interactiva',
      title: 'Diversión Interactiva',
      description: 'Música, proyector con Just Dance, torneos de pentatejo y risas de principio a fin.',
      icon: Smile,
      image: adentro05Img,
    },
    {
      id: 'momentos-magicos',
      title: 'Momentos Mágicos',
      description: 'Lluvia de globos y burbujas, luces rítmicas, show del Oso Tolito y cotillón para la foto grupal.',
      icon: PartyPopper,
      image: adentro02Img,
    },
    {
      id: 'animacion-coordinada',
      title: 'Animación Coordinada',
      description: 'Coordinadores dedicados que guían y acompañan las dinámicas según las edades de los chicos.',
      icon: Wand2,
      image: adentro04Img,
    },
  ];

  return (
    <section
      id="que-es-vitolito"
      className="py-20 lg:py-24 bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoBlanco})`,
        backgroundSize: '580px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* High-transparency overlay so background icons operate as a subtle, soft backdrop */}
      <div className="absolute inset-0 bg-white/94 backdrop-blur-[1px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid: Text + Real Photo Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#023047]/10 text-[#023047] text-xs sm:text-sm font-bold uppercase tracking-wide cursor-pointer hover:bg-[#2C9C8E]/15 hover:text-[#2C9C8E] transition-all">
              <span>Nuestra Propuesta en City Bell</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-logo-script font-normal text-[#023047] tracking-wide py-1 whitespace-nowrap">
              Mucho más que un salón
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Vitolito nace para transformar cada cumpleaños en una verdadera aventura. Los chicos saltan, bailan, compiten y exploran en un entorno seguro, mientras los adultos comparten un momento distendido y cómodo.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#reservas"
                className="inline-flex items-center gap-2 bg-[#023047] hover:bg-[#011f2e] text-white font-bold px-6 py-3.5 rounded-2xl shadow-md transition-all cursor-pointer"
              >
                <span>Consultar disponibilidad</span>
                <ArrowRight className="w-4 h-4 text-[#2C9C8E]" />
              </a>

              <a
                href="#juegos"
                className="inline-flex items-center gap-2 text-[#023047] hover:text-[#2C9C8E] font-bold px-4 py-3.5 rounded-2xl border border-slate-200 transition-colors cursor-pointer"
              >
                <span>Ver atracciones</span>
              </a>
            </div>
          </div>

          {/* Real Photo Montage */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/5] relative group cursor-pointer">
              <img
                src={fachadaImg}
                alt="Fachada Vitolito Eventos City Bell"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold">
                Multiespacio de Fiestas · City Bell
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/5] relative group mt-6 cursor-pointer">
              <img
                src={festejo01Img}
                alt="Festejo y Cumpleaños en Vitolito"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold">
                Cumpleaños & Momentos Mágicos
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars in Organic Rounded Cards with interactive pointer & hover image preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredPillar === item.id;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredPillar(item.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                className="relative p-6 sm:p-7 rounded-3xl bg-slate-50/90 border border-slate-200/90 hover:border-[#2C9C8E] hover:bg-white hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Background image preview on hover in the card's exact format */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className={`relative z-10 transition-all duration-300 flex flex-col h-full justify-between ${
                  isHovered ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
                }`}>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#2C9C8E]/15 text-[#2C9C8E] flex items-center justify-center mb-5 group-hover:bg-[#023047] group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#023047] mb-2 group-hover:text-[#2C9C8E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner for Parents */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#023047] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#2C9C8E] text-white shrink-0 mt-0.5 shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Pensado también para la total tranquilidad de los adultos
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl">
                Área de living cómoda, servicio de cafetería y visión directa hacia los juegos para que los grandes conversen y disfruten sin preocupaciones.
              </p>
            </div>
          </div>
          <a
            href="#para-adultos"
            className="shrink-0 text-xs sm:text-sm font-bold bg-white text-[#023047] hover:bg-slate-100 py-3 px-5 rounded-2xl shadow transition-all cursor-pointer"
          >
            Ver espacio para adultos →
          </a>
        </div>

      </div>
    </section>
  );
}
