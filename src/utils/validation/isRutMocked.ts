import { cleanRut } from '@/utils';

/**
 * Valida si el rut entregado corresponde a un valor generator, como por ejemplo que tenga todos los números iguales.
 * Ejemplo 11.111.111-1 o 22.222.222-2.
 * @param rut
 */
export const isRutMocked = (rut: string): boolean => {
  const rutCleaned = cleanRut(rut);
  return [...rutCleaned].every((char) => char === rutCleaned[0]);
};
