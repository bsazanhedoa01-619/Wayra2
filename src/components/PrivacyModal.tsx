import React from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-xl rounded-2xl border border-[#E8DFD3] bg-[#FAF7F2] p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-4">
          <h3 id="privacy-title" className="font-display text-xl font-bold text-[#1E1714]">
            Aviso de Privacidad y Protección de Datos
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#5A4F46] hover:bg-[#E8DFD3] focus-visible:outline-2 focus-visible:outline-[#C26B38] cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 max-h-[60vh] space-y-4 overflow-y-auto pr-2 text-sm leading-relaxed text-[#4A4036]">
          <p>
            <strong>Responsable del tratamiento:</strong> Wayra Café, con operaciones en Cusco, Perú.
          </p>
          <p>
            <strong>Finalidad del tratamiento:</strong> Los datos personales recopilados a través del formulario de cotización (nombre, empresa, correo electrónico, número de celular, fecha y cantidad de personas) serán utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Elaborar y remitir la cotización del servicio de coffee break y catering.</li>
            <li>Coordinar detalles logísticos, horarios y requerimientos del evento.</li>
            <li>Dar seguimiento formal a la propuesta enviada.</li>
          </ul>
          <p>
            <strong>Confidencialidad:</strong> Nos comprometemos a no compartir, transferir ni vender tus datos de contacto a ningún tercero con fines comerciales ni publicitarios.
          </p>
          <p>
            <strong>Derechos de acceso y rectificación:</strong> Puedes solicitar en cualquier momento la actualización o eliminación de tus datos de contacto comunicándote con nuestro canal oficial <span className="font-mono text-xs text-[#C26B38]">[POR CONFIRMAR: Correo de contacto legal]</span>.
          </p>
        </div>

        <div className="mt-6 border-t border-[#E8DFD3] pt-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-[#C26B38] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#A85728] focus-visible:outline-2 focus-visible:outline-[#C26B38] cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
