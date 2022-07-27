import {
  rutOptionalDotsAndDashRegex,
  cleanRut,
  isRutValidInModule11,
  isRutNumberOver1Million,
  isRutMocked,
} from '@/utils';

/**
 * Comprueba que un RUT sea válido, sin importar si tiene puntos o guiones.
 * @param rut
 */
export const isRutValid = (rut: string): boolean => {
  if (!rutOptionalDotsAndDashRegex.test(rut)) {
    return false;
  }

  const rutNumber = Number.parseInt(cleanRut(rut).slice(0, -1));
  if (!isRutNumberOver1Million(rutNumber)) {
    return false;
  }
  if (isRutMocked(rut)) {
    return false;
  }
  return isRutValidInModule11(rut);
};
