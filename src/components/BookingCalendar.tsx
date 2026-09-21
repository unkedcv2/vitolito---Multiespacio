import { useState, useMemo, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { VITOLITO_INFO } from '../data/vitolitoData';
import fondoOscuro from '../assets/images/backgrounds/fondo_vitolito.png';

interface Shift {
  id: string;
  name: string;
  hours: string;
  tag: string;
  desc: string;
}

const SHIFTS: Shift[] = [
  {
    id: 'mediodia',
    name: 'Turno Mediodía',
    hours: '12:00 a 15:00 hs',
    tag: 'Familiar',
    desc: 'Ideal para almuerzos y festejos familiares al sol'
  },
  {
    id: 'tarde',
    name: 'Turno Tarde',
    hours: '16:00 a 19:00 hs',
    tag: 'El más elegido',
    desc: 'El horario favorito para merendar y divertirse a pleno'
  },
  {
    id: 'noche',
    name: 'Turno Noche',
    hours: '20:00 a 23:00 hs',
    tag: 'Egresaditos & Teen',
    desc: 'Especial para egresados, adolescentes y jóvenes'
  },
];

export default function BookingCalendar() {
  const today = useMemo(() => new Date(), []);
  const [currentMonthDate, setCurrentMonthDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [selectedShift, setSelectedShift] = useState<string>('tarde');
  const [selectedEventType, setSelectedEventType] = useState<string>('Cumpleaños Infantil');
  const [guestsRange, setGuestsRange] = useState<string>('15 a 30 chicos');

  // Callback form state
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');

  // Shift availability check helper
  const isShiftOccupied = (shiftId: string, d: Date | null) => {
    if (!d) return false;
    const day = d.getDate();
    // Dynamic rule: turn afternoon occupied on multiples of 3, morning on multiples of 4
    if (day % 3 === 0 && shiftId === 'tarde') return true;
    if (day % 4 === 0 && shiftId === 'mediodia') return true;
    return false;
  };

  // Auto-select first available shift when date changes
  useEffect(() => {
    if (!selectedDate) return;
    const day = selectedDate.getDate();
    if (day % 3 === 0) {
      setSelectedShift('mediodia'); // tarde is occupied, fallback to mediodia
    } else if (day % 4 === 0) {
      setSelectedShift('tarde'); // mediodia is occupied, fallback to tarde
    } else {
      setSelectedShift('tarde'); // default
    }
  }, [selectedDate]);

  // Month navigation
  const nextMonth = () => {
    setCurrentMonthDate((prev) => {
      const next = new Date(prev);
      next.setMonth(next.getMonth() + 1);
      return next;
    });
  };

  const prevMonth = () => {
    if (
      currentMonthDate.getFullYear() === today.getFullYear() &&
      currentMonthDate.getMonth() <= today.getMonth()
    ) {
      return;
    }
    setCurrentMonthDate((prev) => {
      const p = new Date(prev);
      p.setMonth(p.getMonth() - 1);
      return p;
    });
  };

  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const monthName = currentMonthDate.toLocaleString('es-AR', { month: 'long' });
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0

  const isDateReserved = (d: Date) => {
    const dateNum = d.getDate();
    const dayOfWeek = d.getDay(); // 0 is Sunday, 6 is Saturday
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    if (isWeekend) {
      // Reserve specific weekends
      return [3, 4, 10, 11, 12, 18, 19, 25, 26, 27].includes(dateNum);
    }
    return false;
  };

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString('es-AR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const activeShiftObj = SHIFTS.find((s) => s.id === selectedShift) || SHIFTS[1];

  const handleWhatsAppBooking = () => {
    if (!selectedDate) return;
    const msg = `¡Hola Vitolito! Me gustaría consultar disponibilidad para celebrar:
📅 Fecha: ${formattedSelectedDate}
⏰ Turno: ${activeShiftObj.name} (${activeShiftObj.hours})
🎉 Tipo de festejo: ${selectedEventType}
👥 Cantidad estimada: ${guestsRange}
¡Espero su confirmación por acá!`;

    const url = `https://wa.me/${VITOLITO_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone) return;

    const msg = `¡Hola! Me gustaría que me llamen para coordinar disponibilidad en Vitolito.
👤 Mi nombre: ${callbackName || 'Interesado/a'}
📱 Teléfono de contacto: ${callbackPhone}`;

    const url = `https://wa.me/${VITOLITO_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setCallbackName('');
    setCallbackPhone('');
  };

  return (
    <section
      id="reservas"
      className="py-16 sm:py-20 bg-[#023047] text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoOscuro})`,
        backgroundSize: '580px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#023047]/90 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <h2 id="booking-title" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-logo-script font-normal tracking-wide text-[#5ce1d2] py-2 whitespace-nowrap">
            ¡Listos para Festejar!
          </h2>
          <p className="text-sm sm:text-base text-slate-200">
            Simplificá tu consulta. Elegí un día en el calendario para comenzar.
          </p>
        </div>

        {/* Dynamic Interactive Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Date Selector - Compacted and centered on mobile */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10 shadow-xl max-w-sm mx-auto lg:max-w-none w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-[#2C9C8E]" />
                <h3 className="text-base font-black text-white">
                  {capitalizedMonth} <span className="text-white/60 font-medium">{year}</span>
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevMonth}
                  disabled={currentMonthDate.getFullYear() === today.getFullYear() && currentMonthDate.getMonth() <= today.getMonth()}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition disabled:opacity-30 disabled:pointer-events-none text-white cursor-pointer"
                  aria-label="Mes anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition text-white cursor-pointer"
                  aria-label="Siguiente mes"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 text-center text-[10px] font-bold text-[#5ce1d2] mb-2 uppercase tracking-wider">
              <span>Lun</span>
              <span>Mar</span>
              <span>Mié</span>
              <span>Jue</span>
              <span>Vie</span>
              <span>Sáb</span>
              <span>Dom</span>
            </div>

            {/* Monthly Calendar Grid - tight gap and aspect square */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty placeholder spaces */}
              {Array.from({ length: firstDayIndex }).map((_, idx) => (
                <div key={`empty-${idx}`} />
              ))}

              {/* Days numbers - larger font, compact layout */}
              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const dayNum = idx + 1;
                const cellDate = new Date(year, month, dayNum);
                const isPast = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                const isSelected = selectedDate !== null &&
                  selectedDate.getDate() === dayNum &&
                  selectedDate.getMonth() === month &&
                  selectedDate.getFullYear() === year;
                const isReserved = isDateReserved(cellDate);

                return (
                  <button
                    key={`day-${dayNum}`}
                    type="button"
                    disabled={isPast || isReserved}
                    onClick={() => setSelectedDate(cellDate)}
                    className={`aspect-square flex flex-col items-center justify-center rounded-xl text-sm sm:text-base md:text-lg font-black transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-[#2C9C8E] text-white shadow-lg ring-2 ring-white/30 scale-105'
                        : isReserved
                        ? 'bg-rose-950/20 text-rose-300/30 border border-rose-900/10 cursor-not-allowed opacity-50'
                        : isPast
                        ? 'text-white/20 line-through pointer-events-none'
                        : 'text-white hover:bg-white/15'
                    }`}
                  >
                    <span className={isReserved ? 'line-through opacity-40' : ''}>{dayNum}</span>
                    {isReserved && (
                      <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-rose-500" title="Día Ocupado / Reservado" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 p-2.5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2C9C8E] animate-ping" />
              <span>
                {selectedDate ? (
                  <>Elegido: <strong className="text-[#5ce1d2] capitalize">{formattedSelectedDate}</strong></>
                ) : (
                  <strong>Tocá una fecha disponible (puntos <span className="text-rose-400 font-bold">rojos</span> indican reservado).</strong>
                )}
              </span>
            </div>
          </div>

          {/* Right Column: Turn & Personalization Details */}
          <div className="lg:col-span-7 space-y-6">
            {!selectedDate ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[320px] backdrop-blur-md">
                <CalendarIcon className="w-12 h-12 text-[#2C9C8E] mb-4 animate-bounce" />
                <h4 className="font-black text-lg text-white mb-2">Elegí tu Fecha</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xs leading-relaxed">
                  Hacé clic en un día disponible en el calendario para ver los turnos disponibles y comenzar a diseñar tu festejo.
                </p>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                {/* 1. Shifts Selectors */}
                <div className="space-y-3">
                  <label className="text-xs sm:text-sm font-bold text-white/90 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#2C9C8E]" />
                    ¿Qué horario preferís?
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {SHIFTS.map((s) => {
                      const isChosen = selectedShift === s.id;
                      const isOccupied = isShiftOccupied(s.id, selectedDate);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          disabled={isOccupied}
                          onClick={() => setSelectedShift(s.id)}
                          className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between group ${
                            isOccupied
                              ? 'bg-rose-950/15 border-rose-900/30 text-rose-300/40 opacity-60 cursor-not-allowed'
                              : isChosen
                              ? 'bg-[#2C9C8E] border-[#2C9C8E] text-white shadow-lg shadow-[#2C9C8E]/20 cursor-pointer'
                              : 'bg-white/5 border-white/10 hover:border-white/30 text-white cursor-pointer'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm sm:text-base">{s.name}</span>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                isOccupied
                                  ? 'bg-rose-900/40 text-rose-300 border border-rose-700/30'
                                  : isChosen
                                  ? 'bg-white/25 text-white'
                                  : 'bg-[#2C9C8E]/20 text-[#5ce1d2]'
                              }`}>
                                {isOccupied ? 'Ocupado' : s.tag}
                              </span>
                            </div>
                            <p className={`text-xs mt-1 ${isOccupied ? 'text-rose-300/30' : isChosen ? 'text-white/90' : 'text-slate-300'}`}>
                              {isOccupied ? 'Este horario ya tiene una celebración programada.' : s.desc}
                            </p>
                          </div>
                          <span className={`font-black text-xs sm:text-sm shrink-0 ml-2 ${isOccupied ? 'text-rose-400/40 line-through' : isChosen ? 'text-white' : 'text-[#5ce1d2]'}`}>
                            {s.hours}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Simplified Customization */}
                <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-5">
                  <h4 className="text-xs sm:text-sm font-bold text-white/90 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#2C9C8E]" />
                    Personalizá tu celebración
                  </h4>
                  
                  {/* Event Type */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-slate-300">Tipo de celebración:</span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {['Cumpleaños Infantil', 'Egresaditos', 'Cumple de Adultos', 'Festejo Familiar'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedEventType(type)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            selectedEventType === type
                              ? 'bg-white text-[#023047] border-white'
                              : 'bg-transparent border-white/10 hover:border-white/30 text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guests Range */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-slate-300">Invitados estimados:</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['Hasta 15 chicos', '15 a 30 chicos', 'Más de 30 chicos'].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setGuestsRange(range)}
                          className={`px-2 py-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                            guestsRange === range
                              ? 'bg-white text-[#023047] border-white'
                              : 'bg-transparent border-white/10 hover:border-white/30 text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Main WhatsApp Reservation CTA */}
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#2C9C8E] hover:bg-[#207a6f] active:scale-98 text-white font-black py-4 px-6 rounded-2xl shadow-xl transition-all cursor-pointer text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>RESERVAR</span>
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Callback Request Form (At the very bottom of the section) */}
        <div className="max-w-xl mx-auto mt-16 p-6 sm:p-8 bg-[#023047]/40 border-2 border-[#2C9C8E]/50 rounded-3xl text-center shadow-xl backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 mb-3">
            <PhoneCall className="w-4.5 h-4.5 text-[#5ce1d2]" />
            <h4 className="font-extrabold text-sm sm:text-base text-white">
              ¿Preferís dejar tu número y que te llamemos?
            </h4>
          </div>
          <p className="text-xs text-slate-300 mb-5">
            Dejanos tu nombre y teléfono y te contactamos en el día para asesorarte de manera personalizada.
          </p>
          <form onSubmit={handleCallbackSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
            <input
              type="text"
              required
              placeholder="Tu Nombre"
              value={callbackName}
              onChange={(e) => setCallbackName(e.target.value)}
              className="px-4 py-3.5 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/15 focus:border-[#5ce1d2] focus:outline-none rounded-2xl text-sm placeholder-white/45 text-white flex-1 transition"
            />
            <input
              type="tel"
              required
              placeholder="Tu Teléfono (WhatsApp)"
              value={callbackPhone}
              onChange={(e) => setCallbackPhone(e.target.value)}
              className="px-4 py-3.5 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/15 focus:border-[#5ce1d2] focus:outline-none rounded-2xl text-sm placeholder-white/45 text-white flex-1 transition"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#2C9C8E] hover:bg-[#207a6f] text-white font-bold text-xs sm:text-sm rounded-2xl transition cursor-pointer active:scale-95 shadow-md"
            >
              Solicitar Llamada
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
