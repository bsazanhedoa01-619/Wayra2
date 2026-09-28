export interface QuoteFormData {
  nombre: string;
  empresa: string;
  correo: string;
  celular: string;
  fecha: string;
  personas: string;
  consentimiento: boolean;
}

export interface FormErrors {
  nombre?: string;
  empresa?: string;
  correo?: string;
  celular?: string;
  fecha?: string;
  personas?: string;
  consentimiento?: string;
}
