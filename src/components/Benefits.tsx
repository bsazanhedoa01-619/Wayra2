import React from 'react';
import breakfastImage from '../assets/images/catering_breakfast_spread_1790543932176.jpg';
import cuscoImage from '../assets/images/cusco_location_historic_1790543940082.jpg';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="scroll-mt-20 border-b border-[#E8DFD3] bg-[#FAF7F2] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C26B38] uppercase">
            Beneficios diseñados para tu tranquilidad
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1714]">
            Tres razones por las que tu evento saldrá impecable con Wayra Café
          </h2>
          <p className="mt-3 text-base text-[#5A4F46]">
            No solo servimos café: garantizamos que tu empresa proyecte profesionalismo y cuidado en cada detalle ante clientes, directores y aliados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Benefit 1 */}
          <div className="flex flex-col rounded-2xl border border-[#E8DFD3] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4EFE6] text-[#C26B38]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>

            <h3 className="mt-6 font-display text-xl font-bold text-[#1E1714]">
              Café de origen con historia
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#5A4F46]">
              <strong className="text-[#1E1714]">Lo que ganas:</strong> Servimos café de especialidad de productores de La Convención, con trazabilidad garantizada en cada taza. Sorprende a tus invitados con una experiencia sensorial auténtica que deja una impresión memorable de tu empresa o agencia.
            </p>

            <div className="mt-6 pt-4 border-t border-[#F0EBE1] text-xs text-[#7C6651]">
              Variedades arábicas selectas de alta montaña cusqueña
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col rounded-2xl border border-[#E8DFD3] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4EFE6] text-[#C26B38]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="mt-6 font-display text-xl font-bold text-[#1E1714]">
              Logística impecable
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#5A4F46]">
              <strong className="text-[#1E1714]">Lo que ganas:</strong> Olvídate de los imprevistos; entregamos todo el menaje necesario y cumplimos estrictamente con el horario de tu agenda. Todo listo y caliente antes de que tu equipo o clientes salgan de la sala de reuniones.
            </p>

            <div className="mt-6 pt-4 border-t border-[#F0EBE1] text-xs text-[#7C6651]">
              Montaje puntual, menaje elegante y cero retrasos
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col rounded-2xl border border-[#E8DFD3] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4EFE6] text-[#C26B38]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <h3 className="mt-6 font-display text-xl font-bold text-[#1E1714]">
              A pasos de la Plaza de Armas
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#5A4F46]">
              <strong className="text-[#1E1714]">Lo que ganas:</strong> Ubicación estratégica en el corazón de Cusco, facilitando la coordinación y entrega rápida para tu equipo o invitados. Coordinación inmediata con hoteles céntricos, salas de conferencias y oficinas turísticas.
            </p>

            <div className="mt-6 pt-4 border-t border-[#F0EBE1] text-xs text-[#7C6651]">
              Respuesta ágil en el centro histórico y zonas corporativas
            </div>
          </div>
        </div>

        {/* Visual Support Grid with real photos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#EFE9DF]">
            <img
              src={breakfastImage}
              alt="Desayunos frescos y complementos artesanales para eventos corporativos en Cusco"
              referrerPolicy="no-referrer"
              className="aspect-16/9 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
              <p className="font-display text-base font-bold">Desayunos frescos y acompañamientos</p>
              <p className="text-xs text-white/80">Opciones horneadas y frescas para complementar el café de especialidad</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#EFE9DF]">
            <img
              src={cuscoImage}
              alt="Calles históricas de Cusco cerca a la Plaza de Armas donde opera Wayra Café"
              referrerPolicy="no-referrer"
              className="aspect-16/9 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
              <p className="font-display text-base font-bold">En el centro neurálgico de Cusco</p>
              <p className="text-xs text-white/80">Conexión ágil con hoteles, casonas de eventos y oficinas corporativas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
