import { cleanRut } from '@/utils';

/**
 * Agrega puntos y guión a un RUT.
 * @param rut
 */
export const formatRut = (rut: string): string => {
  const rutCleaned = cleanRut(rut);
  let result = rutCleaned.slice(-4, -1) + '-' + rutCleaned.slice(Math.max(0, rutCleaned.length - 1));
  for (let index = 4; index < rutCleaned.length; index += 3) {
    result = rutCleaned.slice(-3 - index, -index) + '.' + result;
  }

  return result;
};
