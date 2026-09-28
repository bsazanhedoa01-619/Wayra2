import React from 'react';
import coffeeBeansImage from '../assets/images/coffee_beans_origin_1790543921317.jpg';

export const ValueProposition: React.FC = () => {
  return (
    <section id="propuesta" className="relative scroll-mt-20 border-b border-[#E8DFD3] bg-[#F4EFE6] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section kicker */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C26B38] uppercase">
            Diseñado para empresas y agencias de turismo en Cusco
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1714]">
            Un café que está a la altura de tu equipo y de tus invitados más exigentes
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Visual Asset: Beans and brewing (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#E5DDCF] shadow-md">
              <img
                src={coffeeBeansImage}
                alt="Café de especialidad de La Convención Cusco, extracción filtrada y granos recién tostados"
                referrerPolicy="no-referrer"
                className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <p className="font-display text-lg font-medium">Origen La Convención, Cusco</p>
                <p className="text-xs text-white/80">Trazabilidad desde el cafetal andino hasta la taza</p>
              </div>
            </div>
          </div>

          {/* Need vs Solution Comparison (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            {/* The problem: El problema habitual */}
            <div className="rounded-xl border border-red-200/60 bg-[#FDF9F6] p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 text-xs font-bold">
                  ✕
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#1E1714]">
                    El problema del coffee break convencional
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5A4F46]">
                    Proveedores genéricos que llegan tarde, termos con café recalentado o soluble, menaje incompleto y la constante incertidumbre logística en plena reunión o capacitación.
                  </p>
                </div>
              </div>
            </div>

            {/* The value proposition: La propuesta de valor de Wayra */}
            <div className="rounded-xl border-2 border-[#C26B38]/30 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C26B38] text-white text-xs font-bold">
                  ✓
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1E1714]">
                    Nuestra propuesta de valor
                  </h3>
                  <p className="mt-2 text-base font-medium text-[#C26B38]">
                    Llevamos la excelencia del café de especialidad de La Convención directamente a tu evento, con puntualidad garantizada y toda la logística resuelta.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A4F46]">
                    Pensado para grupos de 10 a 40 personas. Tu empresa o agencia solo se enfoca en recibir a los asistentes: nosotros nos encargamos del montaje, la temperatura ideal, el menaje completo y el retiro ordenado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
