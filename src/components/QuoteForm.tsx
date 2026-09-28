import React, { useState } from 'react';
import { QuoteFormData, FormErrors } from '../types';

/** * Conectar aquí el webhook (Make, Zapier, Google Sheets o endpoint propio)
 * que recibirá las solicitudes de cotización en producción.
 */
export const WEBHOOK_URL = 'https://hook.us2.make.com/pa9mldwtfa38n5ua09nshk67cjgo7g44';

interface QuoteFormProps {
  onOpenPrivacyNotice: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ onOpenPrivacyNotice }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    nombre: '',
    empresa: '',
    correo: '',
    celular: '',
    fecha: '',
    personas: '',
    consentimiento: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Por favor ingresa tu nombre y apellido.';
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = 'Por favor ingresa el nombre de la empresa o agencia.';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'Por favor ingresa tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Por favor ingresa un correo electrónico válido.';
    }

    if (!formData.celular.trim()) {
      newErrors.celular = 'Por favor ingresa tu número de celular.';
    } else if (formData.celular.replace(/\D/g, '').length < 8) {
      newErrors.celular = 'Ingresa un número de celular de al menos 8 dígitos.';
    }

    if (!formData.fecha) {
      newErrors.fecha = 'Por favor selecciona la fecha tentativa del evento.';
    }

    const numPersonas = parseInt(formData.personas, 10);
    if (!formData.personas) {
      newErrors.personas = 'Por favor ingresa el número de personas.';
    } else if (isNaN(numPersonas) || numPersonas < 10 || numPersonas > 40) {
      newErrors.personas = 'El servicio está diseñado para grupos de 10 a 40 personas.';
    }

    if (!formData.consentimiento) {
      newErrors.consentimiento = 'Debes aceptar el uso de tus datos para procesar tu cotización.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      // In future: if WEBHOOK_URL is set, we could dispatch fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify(formData) })
      if (WEBHOOK_URL) {
        try {
          fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }).catch((err) => console.warn('Webhook delivery notice:', err));
        } catch (error) {
          console.warn('Webhook not reached:', error);
        }
      }

      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      empresa: '',
      correo: '',
      celular: '',
      fecha: '',
      personas: '',
      consentimiento: false,
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="cotizacion" className="scroll-mt-20 border-b border-[#E8DFD3] bg-[#FAF7F2] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C26B38] uppercase">
            Cotización sin compromiso
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1714]">
            Solicita tu cotización de coffee break para Cusco
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A4F46] max-w-xl mx-auto">
            Completa los datos de tu evento. Te enviaremos una propuesta formal ajustada al número de asistentes y a tu agenda.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-[#E8DFD3] bg-white p-6 sm:p-10 shadow-sm">
          {isSubmitted && submittedData ? (
            /* Mensaje de agradecimiento en la misma página sin recargar */
            <div
              role="alert"
              className="py-6 text-center animate-fade-in"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F4EFE6] text-[#C26B38]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold text-[#1E1714]">
                ¡Gracias por solicitar tu cotización, {submittedData.nombre.split(' ')[0]}!
              </h3>

              <p className="mt-2 text-base text-[#4A4036] max-w-lg mx-auto">
                Hemos recibido la información de tu evento para <strong className="font-semibold">{submittedData.empresa}</strong>. Nuestro equipo en Cusco se pondrá en contacto contigo a través de <strong className="font-semibold">{submittedData.correo}</strong> o a tu celular <strong className="font-semibold">{submittedData.celular}</strong> en un plazo máximo de 24 horas laborables.
              </p>

              {/* Resumen de solicitud recibida */}
              <div className="mt-6 mx-auto max-w-md rounded-xl border border-[#E8DFD3] bg-[#FAF7F2] p-5 text-left text-xs sm:text-sm text-[#5A4F46]">
                <p className="font-semibold text-[#1E1714] text-xs uppercase tracking-wider mb-2">
                  Detalles registrados para tu evento:
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between border-b border-[#E8DFD3]/60 pb-1">
                    <span className="text-[#7C6651]">Empresa o agencia:</span>
                    <span className="font-medium text-[#1E1714]">{submittedData.empresa}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DFD3]/60 pb-1">
                    <span className="text-[#7C6651]">Fecha tentativa:</span>
                    <span className="font-medium text-[#1E1714]">{submittedData.fecha}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DFD3]/60 pb-1">
                    <span className="text-[#7C6651]">Asistentes:</span>
                    <span className="font-medium text-[#1E1714]">{submittedData.personas} personas</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#7C6651]">Servicio:</span>
                    <span className="font-medium text-[#1E1714]">Café de especialidad La Convención & Logística</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center rounded-lg border border-[#C26B38] px-6 py-2.5 text-sm font-semibold text-[#C26B38] transition-colors hover:bg-[#C26B38]/5 focus-visible:outline-2 focus-visible:outline-[#C26B38] cursor-pointer"
                >
                  Enviar otra solicitud de cotización
                </button>
              </div>
            </div>
          ) : (
            /* Formulario activo */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre y apellido */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-[#1E1714]"
                  >
                    Nombre y apellido <span className="text-[#C26B38]">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Carmen Quispe"
                    aria-invalid={!!errors.nombre}
                    aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                    className={`mt-1.5 block w-full rounded-lg border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1E1714] placeholder-[#A09386] transition-colors focus:bg-white focus:outline-none ${
                      errors.nombre
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#D9CEBF] focus:border-[#C26B38] focus:ring-1 focus:ring-[#C26B38]'
                    }`}
                  />
                  {errors.nombre && (
                    <p id="nombre-error" className="mt-1 text-xs text-red-600">
                      {errors.nombre}
                    </p>
                  )}
                </div>

                {/* Nombre de la empresa o agencia */}
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm font-semibold text-[#1E1714]"
                  >
                    Nombre de la empresa o agencia <span className="text-[#C26B38]">*</span>
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ej. Andes Expeditions / Consultora Cusco"
                    aria-invalid={!!errors.empresa}
                    aria-describedby={errors.empresa ? 'empresa-error' : undefined}
                    className={`mt-1.5 block w-full rounded-lg border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1E1714] placeholder-[#A09386] transition-colors focus:bg-white focus:outline-none ${
                      errors.empresa
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#D9CEBF] focus:border-[#C26B38] focus:ring-1 focus:ring-[#C26B38]'
                    }`}
                  />
                  {errors.empresa && (
                    <p id="empresa-error" className="mt-1 text-xs text-red-600">
                      {errors.empresa}
                    </p>
                  )}
                </div>

                {/* Correo electrónico */}
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-semibold text-[#1E1714]"
                  >
                    Correo electrónico <span className="text-[#C26B38]">*</span>
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="contacto@empresa.com"
                    aria-invalid={!!errors.correo}
                    aria-describedby={errors.correo ? 'correo-error' : undefined}
                    className={`mt-1.5 block w-full rounded-lg border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1E1714] placeholder-[#A09386] transition-colors focus:bg-white focus:outline-none ${
                      errors.correo
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#D9CEBF] focus:border-[#C26B38] focus:ring-1 focus:ring-[#C26B38]'
                    }`}
                  />
                  {errors.correo && (
                    <p id="correo-error" className="mt-1 text-xs text-red-600">
                      {errors.correo}
                    </p>
                  )}
                </div>

                {/* Número de celular */}
                <div>
                  <label
                    htmlFor="celular"
                    className="block text-sm font-semibold text-[#1E1714]"
                  >
                    Número de celular <span className="text-[#C26B38]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="Ej. +51 984 000 000"
                    aria-invalid={!!errors.celular}
                    aria-describedby={errors.celular ? 'celular-error' : undefined}
                    className={`mt-1.5 block w-full rounded-lg border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1E1714] placeholder-[#A09386] transition-colors focus:bg-white focus:outline-none ${
                      errors.celular
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#D9CEBF] focus:border-[#C26B38] focus:ring-1 focus:ring-[#C26B38]'
                    }`}
                  />
                  {errors.celular && (
                    <p id="celular-error" className="mt-1 text-xs text-red-600">
                      {errors.celular}
                    </p>
                  )}
                </div>

                {/* Fecha tentativa del evento */}
                <div>
                  <label
                    htmlFor="fecha"
                    className="block text-sm font-semibold text-[#1E1714]"
                  >
                    Fecha tentativa del evento <span className="text-[#C26B38]">*</span>
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    aria-invalid={!!errors.fecha}
                    aria-describedby={errors.fecha ? 'fecha-error' : undefined}
                    className={`mt-1.5 block w-full rounded-lg border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1E1714] transition-colors focus:bg-white focus:outline-none ${
                      errors.fecha
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#D9CEBF] focus:border-[#C26B38] focus:ring-1 focus:ring-[#C26B38]'
                    }`}
                  />
                  {errors.fecha && (
                    <p id="fecha-error" className="mt-1 text-xs text-red-600">
                      {errors.fecha}
                    </p>
                  )}
                </div>

                {/* Número de personas (10-40) */}
                <div>
                  <label
                    htmlFor="personas"
                    className="block text-sm font-semibold text-[#1E1714]"
                  >
                    Número de personas (10 a 40) <span className="text-[#C26B38]">*</span>
                  </label>
                  <input
                    type="number"
                    id="personas"
                    name="personas"
                    min="10"
                    max="40"
                    value={formData.personas}
                    onChange={handleChange}
                    placeholder="Cantidad de asistentes (10 - 40)"
                    aria-invalid={!!errors.personas}
                    aria-describedby={errors.personas ? 'personas-error' : undefined}
                    className={`mt-1.5 block w-full rounded-lg border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1E1714] placeholder-[#A09386] transition-colors focus:bg-white focus:outline-none ${
                      errors.personas
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#D9CEBF] focus:border-[#C26B38] focus:ring-1 focus:ring-[#C26B38]'
                    }`}
                  />
                  {errors.personas && (
                    <p id="personas-error" className="mt-1 text-xs text-red-600">
                      {errors.personas}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-[#7C6651]">
                    Servicio exclusivo para eventos de 10 a 40 personas.
                  </p>
                </div>
              </div>

              {/* Casilla de consentimiento obligatoria */}
              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consentimiento"
                    name="consentimiento"
                    checked={formData.consentimiento}
                    onChange={handleChange}
                    aria-invalid={!!errors.consentimiento}
                    aria-describedby={errors.consentimiento ? 'consentimiento-error' : undefined}
                    className="mt-1 h-4 w-4 rounded border-[#D9CEBF] text-[#C26B38] focus:ring-[#C26B38] cursor-pointer"
                  />
                  <label
                    htmlFor="consentimiento"
                    className="text-xs sm:text-sm leading-relaxed text-[#4A4036] cursor-pointer"
                  >
                    Autorizo a Wayra Café a utilizar estos datos exclusivamente para elaborar y enviar la cotización solicitada y coordinar la disponibilidad de mi evento, conforme al{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacyNotice}
                      className="text-[#C26B38] underline hover:text-[#A85728] focus-visible:outline-1 focus-visible:outline-[#C26B38]"
                    >
                      aviso de privacidad
                    </button>
                    . <span className="text-[#C26B38]">*</span>
                  </label>
                </div>
                {errors.consentimiento && (
                  <p id="consentimiento-error" className="mt-1 text-xs text-red-600">
                    {errors.consentimiento}
                  </p>
                )}
              </div>

              {/* Submit CTA Button - EXACT TEXT FROM BRIEF */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-[#C26B38] px-8 py-4 text-base font-bold text-white shadow-md shadow-[#C26B38]/20 transition-all duration-200 hover:bg-[#A85728] hover:shadow-lg hover:shadow-[#C26B38]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C26B38] active:translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  Solicitar cotización para mi evento
                </button>
                <p className="mt-2.5 text-center text-xs text-[#7C6651]">
                  Respuesta formal con desglose y disponibilidad en menos de 24 horas.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
