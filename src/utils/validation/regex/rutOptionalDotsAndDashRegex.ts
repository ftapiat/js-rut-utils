/**
 * Patrón que comprueba si el RUT cumple con la estructura de un RUT Chileno.
 * Funciona con o sin puntos y guiones.
 */
export const rutOptionalDotsAndDashRegex = /^0*(\d{1,3}(\.?\d{3})*)-?([\dKk])$/;
