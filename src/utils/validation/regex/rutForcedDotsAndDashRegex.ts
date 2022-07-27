/**
 * Patrón que comprueba si el RUT cumple con la estructura de un RUT Chileno con puntos y guión.
 */
export const rutForcedDotsAndDashRegex = /^0*(\d{1,3}(\.\d{3})*)-([\dKk])$/;
