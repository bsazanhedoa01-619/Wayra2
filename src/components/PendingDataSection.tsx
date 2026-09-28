import React from 'react';

export const PendingDataSection: React.FC = () => {
  const pendingItems = [
    {
      title: 'Dirección exacta del local',
      status: '[POR CONFIRMAR]',
      description:
        'Ubicado en el corazón de Cusco, a pasos de la Plaza de Armas. La dirección física exacta y punto de despacho se confirmará en la publicación oficial.',
      tag: 'Ubicación física',
    },
    {
      title: 'Opciones de paquetes de desayunos',
      status: '[POR CONFIRMAR]',
      description:
        'Variedad de complementos para el café: panes artesanales, opciones dulces, saladas y frutas frescas. La carta desglosada por paquete está en proceso de validación final.',
      tag: 'Menú gastronómico',
    },
    {
      title: 'Área de cobertura para delivery',
      status: '[POR CONFIRMAR]',
      description:
        'Radio de entrega prioritario en el Centro Histórico de Cusco y zonas corporativas adyacentes. El mapa de kilometraje exacto se detallará antes del lanzamiento.',
      tag: 'Logística de entrega',
    },
    {
      title: 'Redes sociales y WhatsApp empresarial',
      status: '[POR CONFIRMAR]',
      description:
        'Los canales de atención directa por WhatsApp corporativo y perfiles oficiales se vincularán al completar la configuración técnica de la cuenta.',
      tag: 'Canales de contacto',
    },
  ];

  return (
    <section id="por-confirmar" className="scroll-mt-20 border-b border-[#E8DFD3] bg-[#F4EFE6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C26B38] uppercase">
            Transparencia operativa
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#1E1714]">
            Datos en proceso de confirmación previa a la publicación
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A4F46]">
            Para brindarte un servicio sin sorpresas ni datos ambiguos, detallamos los parámetros operativos que estamos afinando para el lanzamiento:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pendingItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#E0D5C5] bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#7C6651]">
                    {item.tag}
                  </span>
                  <span className="inline-flex items-center rounded bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200/80">
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-[#1E1714]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A4F46]">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0EBE1] text-xs text-[#8C7A6B] flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-[#C26B38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Si necesitas este dato para tu cotización actual, indícalo en el formulario.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
