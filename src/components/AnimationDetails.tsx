import { Palette, PartyPopper, Smile, Music, Flame, Camera, Wand2 } from 'lucide-react';
import fondoBlanco from '../assets/images/backgrounds/fondo_vitolito_blanco.jfif';

export default function AnimationDetails() {
  const details = [
    {
      title: 'Show del Oso Tolito',
      description: 'El personaje insignia de Vitolito que comparte abrazos, fotos y momentos mágicos con todos los chicos.',
      icon: Smile,
      badge: 'Momento Especial',
    },
    {
      title: 'Lluvia de Globos & Burbujas',
      description: 'Explosión de globos y efecto de burbujas en el centro de la pista con música de fiesta.',
      icon: PartyPopper,
      badge: 'Interactivo',
    },
    {
      title: 'Maquillaje Artístico',
      description: 'Detalles faciales, brillos y diseños para que los chicos lleven arte y color durante su festejo.',
      icon: Palette,
      badge: 'Creatividad',
    },
    {
      title: 'Pista Proyectada Just Dance',
      description: 'Pantalla gigante para seguir coreografías y divertirse bailando grandes y chicos.',
      icon: Music,
      badge: 'Baile & Ritmo',
    },
    {
      title: 'Luces Rítmicas & Humo',
      description: 'Efectos que ambientan el salón y crean una atmósfera de verdadera pista de fiesta.',
      icon: Flame,
      badge: 'Ambientación',
    },
    {
      title: 'Cotillón para la Foto Grupal',
      description: 'Accesorios divertidos de fantasía preparados para registrar el gran recuerdo grupal con los amigos.',
      icon: Camera,
      badge: 'Recuerdo',
    },
  ];

  return (
    <section
      id="actividades"
      className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoBlanco})`,
        backgroundSize: '240px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-50/92 backdrop-blur-[1px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C9C8E]/15 text-[#2C9C8E] text-xs sm:text-sm font-bold uppercase tracking-wide">
            <Wand2 className="w-4 h-4" />
            <span>Recursos que Marcan la Diferencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#023047] tracking-tight">
            Animación y Momentos Sorpresa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Cada detalle está coordinado para que la fiesta tenga emoción, ritmo y momentos inolvidables para los chicos.
          </p>
        </div>

        {/* Feature Grid with rounded cards & badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white hover:border-[#2C9C8E] hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#023047] text-[#2C9C8E] group-hover:bg-[#2C9C8E] group-hover:text-white flex items-center justify-center shrink-0 shadow-sm transition-colors mt-0.5">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#2C9C8E]/15 text-[#2C9C8E] text-[11px] font-bold">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-black text-[#023047] leading-tight">
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

        {/* Reassurance pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold shadow-sm">
            <Wand2 className="w-4 h-4 text-[#2C9C8E]" />
            <span>Todas las propuestas se adaptan dinámicamente según la edad del cumpleañero/a.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
