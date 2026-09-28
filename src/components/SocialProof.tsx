import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="border-b border-[#E8DFD3] bg-[#FAF7F2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C26B38] uppercase">
            Confianza y profesionalismo
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#1E1714]">
            La experiencia de empresas y agencias en Cusco
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A4F46]">
            Diseñado para cumplir con los estándares de eventos corporativos, congresos y reuniones ejecutivas.
          </p>
        </div>

        {/* Testimonial Placeholder Card - strictly marked as [POR CONFIRMAR] without fake quotes or names */}
        <div className="mt-10 mx-auto max-w-2xl">
          <div className="relative rounded-2xl border-2 border-dashed border-[#D9CEBF] bg-white p-8 sm:p-10 shadow-sm text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F4EFE6] text-[#C26B38]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="mt-4 inline-flex items-center rounded bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 border border-amber-200">
              [POR CONFIRMAR] Espacio reservado para testimonio de cliente
            </div>

            <p className="mt-4 text-sm sm:text-base italic leading-relaxed text-[#7C6651]">
              «[POR CONFIRMAR: Cita testimonial real de empresa o agencia de turismo en Cusco destacando la puntualidad, la calidad del café de La Convención y la tranquilidad de tener la logística resuelta]»
            </p>

            <div className="mt-6 border-t border-[#F0EBE1] pt-4">
              <p className="text-sm font-bold text-[#1E1714]">
                [POR CONFIRMAR: Nombre y Cargo del Responsable de Evento]
              </p>
              <p className="text-xs text-[#7C6651]">
                [POR CONFIRMAR: Empresa o Agencia de Turismo, Cusco]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
