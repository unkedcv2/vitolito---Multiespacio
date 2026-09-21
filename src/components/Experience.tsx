import { Star, MessageSquare } from 'lucide-react';
import fondoBlanco from '../assets/images/backgrounds/fondo_vitolito_blanco.jfif';

interface Review {
  id: number;
  author: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

const GOOGLE_REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Mariana G.',
    role: 'Mamá de Benja',
    text: 'El mejor salón de City Bell. Súper amplio, limpio y con juegos que no se ven en otros lados. Los coordinadores son unos genios totales con los chicos.',
    rating: 5,
    date: 'Hace 2 semanas',
  },
  {
    id: 2,
    author: 'Juan Pablo M.',
    role: 'Papá de Luli',
    text: 'Excelente atención desde el primer momento. La pista de baile y el laberinto láser volvieron locos a los chicos. ¡Súper recomendable todo el equipo!',
    rating: 5,
    date: 'Hace 1 mes',
  },
  {
    id: 3,
    author: 'Valeria S.',
    role: 'Mamá de Felipe',
    text: 'Festejamos el cumple de 7 de mi hijo y fue increíble. El parque gigante al aire libre es hermoso y súper seguro. Muy bien predispuestos todos los animadores.',
    rating: 5,
    date: 'Hace 3 semanas',
  },
  {
    id: 4,
    author: 'Diego R.',
    role: 'Papá de Sofía',
    text: 'Un lugar mágico en City Bell. El salón impecable, la animación súper activa y los papás disfrutamos un montón en el espacio de living con café.',
    rating: 5,
    date: 'Hace 2 meses',
  },
  {
    id: 5,
    author: 'Carolina T.',
    role: 'Mamá de Juana',
    text: 'Súper conformes con el servicio. El lugar es precioso, la atención de primera y la lluvia de globos al final fue espectacular. ¡Volveremos sin duda!',
    rating: 5,
    date: 'Hace 1 mes',
  },
  {
    id: 6,
    author: 'Esteban F.',
    role: 'Papá de Mateo',
    text: 'Increíble propuesta. Los juegos son interactivos y muy dinámicos, nada de pantallas aburridas. La organización es impecable de principio a fin.',
    rating: 5,
    date: 'Hace 1 mes',
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoBlanco})`,
        backgroundSize: '240px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/94 backdrop-blur-[1px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C9C8E]/10 text-[#2C9C8E] text-xs sm:text-sm font-bold uppercase tracking-wide">
            <MessageSquare className="w-4 h-4" />
            <span>Opiniones Reales en Google</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-logo-script font-normal text-[#023047] tracking-wide py-1 whitespace-nowrap">
            Lo que Dicen las Familias
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            La confianza y felicidad de quienes celebran con nosotros es nuestro mayor orgullo. Calificación promedio 4.9★ basada en opiniones reales.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#2C9C8E]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars and Google G Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-current" />
                    ))}
                  </div>
                  {/* Google SVG G-Icon */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold bg-white px-2.5 py-1 rounded-full border border-slate-100 shadow-sm">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>Google</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm italic leading-relaxed mb-4">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-2">
                <div>
                  <h4 className="font-bold text-[#023047] text-sm">
                    {review.author}
                  </h4>
                  <span className="text-slate-400 text-xs">
                    {review.role}
                  </span>
                </div>
                <span className="text-slate-400 text-[11px]">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
