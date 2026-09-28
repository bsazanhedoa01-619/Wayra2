import React from 'react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E8DFD3] bg-[#FAF7F2]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-2xl font-bold tracking-tight text-[#1E1714] transition-colors hover:text-[#C26B38] focus-visible:outline-2 focus-visible:outline-[#C26B38]"
        >
          Wayra Café
        </a>

        {/* Zone 2: Clean navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4036]"
        >
          <a
            href="#propuesta"
            className="transition-colors hover:text-[#C26B38] focus-visible:outline-2 focus-visible:outline-[#C26B38] rounded-sm py-1"
          >
            Propuesta
          </a>
          <a
            href="#beneficios"
            className="transition-colors hover:text-[#C26B38] focus-visible:outline-2 focus-visible:outline-[#C26B38] rounded-sm py-1"
          >
            Beneficios
          </a>
          <a
            href="#como-funciona"
            className="transition-colors hover:text-[#C26B38] focus-visible:outline-2 focus-visible:outline-[#C26B38] rounded-sm py-1"
          >
            Cómo funciona
          </a>
          <a
            href="#por-confirmar"
            className="transition-colors hover:text-[#C26B38] focus-visible:outline-2 focus-visible:outline-[#C26B38] rounded-sm py-1"
          >
            Por confirmar
          </a>
        </nav>

        {/* Zone 3: Primary action button with exact CTA label */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="group inline-flex items-center justify-center rounded-lg bg-[#C26B38] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#A85728] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C26B38] active:translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <span>Solicitar cotización para mi evento</span>
          </button>
        </div>
      </div>
    </header>
  );
};
