/**
 * Valida que el RUT corresponda a un número mayor o igual a 1 millón.
 * @param rutNumber
 */
export const isRutNumberOver1Million = (rutNumber: number): boolean => {
  return rutNumber >= 1_000_000;
};
