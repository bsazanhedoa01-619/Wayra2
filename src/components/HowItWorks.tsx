import React from 'react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const steps = [
    {
      number: '01',
      title: 'Cuéntanos los datos de tu evento',
      description:
        'Indícanos la fecha tentativa, la empresa o agencia y la cantidad de asistentes (de 10 a 40 personas) mediante el formulario en menos de 2 minutos.',
    },
    {
      number: '02',
      title: 'Recibe tu cotización y propuesta',
      description:
        'Te enviamos una propuesta detallada con café de especialidad de La Convención, opciones de desayunos frescos y el cálculo exacto según tu agenda.',
    },
    {
      number: '03',
      title: 'Disfruta tu reunión con logística resuelta',
      description:
        'Llegamos antes del inicio, instalamos todo el menaje necesario, garantizamos la temperatura ideal del café y cuidamos cada detalle hasta el cierre.',
    },
  ];

  return (
    <section id="como-funciona" className="scroll-mt-20 border-b border-[#E8DFD3] bg-[#F4EFE6] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C26B38] uppercase">
            Proceso ágil y sin complicaciones
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1714]">
            Cómo funciona el servicio de Wayra Café
          </h2>
          <p className="mt-3 text-base text-[#5A4F46]">
            Tres pasos simples para asegurar el coffee break de tu próxima reunión en Cusco.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col rounded-2xl border border-[#E8DFD3] bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-[#C26B38]">
                  {step.number}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#C26B38]/30"></span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-[#1E1714]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A4F46]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Repeat CTA after Steps */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center rounded-xl bg-[#C26B38] px-8 py-3.5 text-base font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#A85728] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C26B38] active:translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Solicitar cotización para mi evento
          </button>
        </div>
      </div>
    </section>
  );
};
