import { cleanRut } from '@/utils';

/**
 * Comprueba que el RUT sea válido comprobando su Dígito verificador con el cáculo de módulo 11.
 * Más información en: https://es.wikipedia.org/wiki/C%C3%B3digo_de_control , Sección Módulo 11.
 */
export const isRutValidInModule11 = (rut: string): boolean => {
  const rutCleaned = cleanRut(rut);

  let t = Number.parseInt(rutCleaned.slice(0, -1), 10);
  let m = 0;
  let s = 1;

  while (t > 0) {
    s = (s + (t % 10) * (9 - (m++ % 6))) % 11;
    t = Math.floor(t / 10);
  }

  let originalRutDv = rutCleaned.slice(-1);
  // Si el dígito verificador es 'k' se convierte a 'K' para comparar con el dv calculado
  if (originalRutDv === 'k') {
    originalRutDv = 'K';
  }
  const dv = s > 0 ? (s - 1).toString() : 'K';
  return dv === originalRutDv;
};
