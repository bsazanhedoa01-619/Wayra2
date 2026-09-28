import React from 'react';

interface FooterProps {
  onOpenPrivacyNotice: () => void;
  onCtaClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyNotice, onCtaClick }) => {
  return (
    <footer className="border-t border-[#E8DFD3] bg-[#1E1714] text-[#D8CCC0] py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Brand & Purpose (5 cols) */}
          <div className="md:col-span-5">
            <span className="font-display text-2xl font-bold text-white tracking-tight">
              Wayra Café
            </span>
            <p className="mt-3 text-sm leading-relaxed text-[#B3A495] max-w-sm">
              Servicio especializado de coffee break y café de especialidad de La Convención para reuniones, capacitaciones y eventos corporativos de 10 a 40 personas en Cusco.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center rounded-lg bg-[#C26B38] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#A85728] focus-visible:outline-2 focus-visible:outline-[#C26B38] cursor-pointer"
              >
                Solicitar cotización para mi evento
              </button>
            </div>
          </div>

          {/* Col 2: Datos de contacto (4 cols) - Rigorously [POR CONFIRMAR] */}
          <div className="md:col-span-4">
            <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
              Datos de contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#B3A495]">
              <li className="flex items-start gap-2">
                <span className="font-medium text-white">Ubicación:</span>
                <span>A pasos de la Plaza de Armas, Cusco · <span className="text-[#C26B38] font-mono text-xs">[POR CONFIRMAR: Dirección exacta]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-white">Teléfono / WhatsApp:</span>
                <span className="text-[#C26B38] font-mono text-xs">[POR CONFIRMAR: Celular / WhatsApp corporativo]</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-white">Correo electrónico:</span>
                <span className="text-[#C26B38] font-mono text-xs">[POR CONFIRMAR: Correo oficial para cotizaciones]</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-white">Horario de atención:</span>
                <span className="text-[#C26B38] font-mono text-xs">[POR CONFIRMAR: Horarios de atención y reservas]</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Aviso de privacidad breve y enlaces (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
              Privacidad y Legal
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-[#B3A495]">
              <strong>Aviso de privacidad breve:</strong> Wayra Café recolecta los datos proporcionados únicamente con el propósito de generar tu cotización personalizada y coordinar los detalles del servicio de coffee break. No comercializamos ni transferimos tus datos a terceros.
            </p>
            <div className="mt-3">
              <button
                type="button"
                onClick={onOpenPrivacyNotice}
                className="text-xs text-[#C26B38] underline hover:text-[#E28A58] focus-visible:outline-1 focus-visible:outline-[#C26B38] cursor-pointer"
              >
                Ver aviso de privacidad completo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#382E28] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
          <p>© {new Date().getFullYear()} Wayra Café. Todos los derechos reservados. Cusco, Perú.</p>
          <p className="text-center sm:text-right">
            Café de especialidad de La Convención · Eventos corporativos de 10 a 40 personas
          </p>
        </div>
      </div>
    </footer>
  );
};
