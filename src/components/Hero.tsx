import React from 'react';
import heroImage from '../assets/images/hero_wayra_coffee_1790543911440.jpg';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden border-b border-[#E8DFD3] bg-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Hero Copy (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed metadata separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-[#7C6651]">
              <span>Coffee Break & Catering Corporativo</span>
              <span aria-hidden="true">·</span>
              <span>10 a 40 personas</span>
              <span aria-hidden="true">·</span>
              <span>Cusco</span>
            </div>

            {/* The ONLY H1 of the entire page */}
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.12] text-[#1E1714] text-balance">
              Haz que tus reuniones en Cusco destaquen con café de especialidad.
            </h1>

            {/* Subtítulo del brief */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#4A4036] max-w-2xl text-pretty">
              Elevamos el estándar de tus eventos corporativos con café trazable, desayunos frescos y un servicio puntual que cuida cada detalle.
            </p>

            {/* High-visibility CTA button and reassurance */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#C26B38] px-8 py-4 text-base font-bold text-white shadow-md shadow-[#C26B38]/20 transition-all duration-200 hover:bg-[#A85728] hover:shadow-lg hover:shadow-[#C26B38]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C26B38] active:translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                Solicitar cotización para mi evento
              </button>
            </div>

            {/* Trust line */}
            <div className="mt-6 flex items-center gap-4 text-xs sm:text-sm text-[#7C6651]">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#C26B38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Respuesta en menos de 24h
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#C26B38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Menaje y montaje incluido
              </span>
            </div>
          </div>

          {/* Focal Image Asset (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#EFE9DF] shadow-xl">
                <img
                  src={heroImage}
                  alt="Montaje de coffee break corporativo con café de especialidad servido para reunión ejecutiva en Cusco"
                  referrerPolicy="no-referrer"
                  className="aspect-16/10 w-full object-cover lg:aspect-4/3 transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Floating caption detail with authentic Cusco coffee note */}
              <div className="mt-3 text-right">
                <p className="text-xs text-[#7C6651]">
                  Granos de especialidad de La Convención tostados artesanalmente en Cusco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
