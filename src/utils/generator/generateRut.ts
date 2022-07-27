import { generateDv, formatRut } from '@/utils';

/**
 * Genera un RUT de un largo de 7 a 8 dígitos con DV.
 * Si se le agrega la propiedad formatted, retornará el RUT con puntos y guion.
 *
 * @param formatted
 */
export const generateRut = (formatted = false): string => {
  const min = 1_000_000;
  const max = 99_999_999;
  const rutNumber = Math.floor(Math.random() * (max - min) + min).toString();
  const rut = `${rutNumber}${generateDv(Number.parseInt(rutNumber))}`;

  if (formatted) {
    return formatRut(rut);
  }

  return rut;
};
