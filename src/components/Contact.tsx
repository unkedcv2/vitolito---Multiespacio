import { useState } from 'react';
import { MessageCircle, MapPin, Phone, Instagram, Send, CheckCircle2, Calendar } from 'lucide-react';
import { VITOLITO_INFO } from '../data/vitolitoData';
import fondoBlanco from '../assets/images/backgrounds/fondo_vitolito_blanco.jfif';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Cumpleaños Infantil',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `¡Hola Vitolito! Mi nombre es ${formData.name}. Me gustaría consultar para un ${formData.eventType}.${
      formData.comments ? ` Detalles: ${formData.comments}` : ''
    } (Tel: ${formData.phone})`;

    const whatsappUrl = `https://wa.me/${VITOLITO_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const directWhatsAppUrl = `https://wa.me/${VITOLITO_INFO.whatsappNumber}?text=${encodeURIComponent(
    '¡Hola Vitolito! Me gustaría consultar disponibilidad e información para un cumpleaños.'
  )}`;

  return (
    <section
      id="contacto"
      className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden"
      style={{
        backgroundImage: `url(${fondoBlanco})`,
        backgroundSize: '580px auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-50/75 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C9C8E]/15 text-[#2C9C8E] text-xs sm:text-sm font-bold uppercase tracking-wide">
            <MessageCircle className="w-4 h-4" />
            <span>Atención Directa & Personalizada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#023047] tracking-tight">
            ¿Listos para festejar en Vitolito?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Escribinos directamente por WhatsApp o completá el formulario y te respondemos con toda la información para organizar tu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Information Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#023047] text-white shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2C9C8E]/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-black tracking-tight text-white">
                Consultanos al instante
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Respondemos consultas sobre disponibilidad de fechas, presupuestos de cumpleaños, fiestas de egresaditos y visitas guiadas al salón.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  id="contact-box-whatsapp-btn"
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#2C9C8E] hover:bg-[#207a6f] text-white text-base font-bold py-4 px-6 rounded-2xl shadow-lg transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Escribinos por WhatsApp</span>
                </a>

                <a
                  href="#reservas"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-3 px-6 rounded-2xl border border-white/20 transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#2C9C8E]" />
                  <span>Ver Calendario de Fechas</span>
                </a>
              </div>
            </div>

            {/* Official contact data cards */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Información del Multiespacio
              </h4>

              <div className="flex items-start gap-3 text-slate-700 text-sm">
                <div className="w-9 h-9 rounded-xl bg-[#2C9C8E]/15 text-[#2C9C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#023047]">Zona</p>
                  <p className="text-slate-600">City Bell, Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 text-sm">
                <div className="w-9 h-9 rounded-xl bg-[#2C9C8E]/15 text-[#2C9C8E] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#023047]">Teléfono</p>
                  <a
                    href={`tel:${VITOLITO_INFO.phone.replace(/\s|-/g, '')}`}
                    className="text-[#2C9C8E] font-bold hover:underline"
                  >
                    {VITOLITO_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 text-sm">
                <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#023047]">Instagram</p>
                  <a
                    href={VITOLITO_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 font-bold hover:underline"
                  >
                    {VITOLITO_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Consultation form column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
              <h3 className="text-2xl font-black text-[#023047] mb-2">
                Envianos tu consulta rápida
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Te respondemos por WhatsApp a la brevedad con la disponibilidad y las opciones.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#2C9C8E]/15 border border-[#2C9C8E]/30 flex items-center gap-3 text-[#023047] text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2C9C8E] shrink-0" />
                  <span>
                    ¡Gracias! Tu mensaje fue preparado y se abrirá WhatsApp con los datos de tu consulta.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2C9C8E] text-slate-800 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Teléfono o WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej: 221 123 4567"
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2C9C8E] text-slate-800 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-event-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tipo de Celebración
                    </label>
                    <select
                      id="contact-event-type"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2C9C8E] text-slate-800 text-sm bg-white"
                    >
                      <option value="Cumpleaños Infantil">Cumpleaños Infantil</option>
                      <option value="Fiesta de Egresaditos">Fiesta de Egresaditos</option>
                      <option value="Comunión / Bautismo">Comunión / Bautismo</option>
                      <option value="Cumpleaños de Adultos">Cumpleaños de Adultos</option>
                      <option value="Celebración Familiar">Celebración Familiar</option>
                      <option value="Otra Celebración">Otra Celebración</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-comments" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Fecha estimada o consultas adicionales
                  </label>
                  <textarea
                    id="contact-comments"
                    rows={4}
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="Contanos la fecha que tenés en mente, edad del cumpleañero/a, cantidad estimada de invitados..."
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2C9C8E] text-slate-800 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#023047] hover:bg-[#011f2e] text-white font-black py-4 px-6 rounded-2xl shadow-lg transition-all active:scale-95 text-base"
                >
                  <Send className="w-4 h-4 text-[#2C9C8E]" />
                  <span>Enviar consulta a WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
