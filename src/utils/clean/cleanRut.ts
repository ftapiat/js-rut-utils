/**
 * Elimina cualquier carácter que no sea número o "k" si está en la última posición.
 * @param rut Rut a limpiar
 * @returns string
 */
export const cleanRut = (rut: string): string => {
  return rut.replace(/^0+|[^\dKk]+/g, '');
};
