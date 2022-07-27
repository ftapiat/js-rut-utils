/**
 * Genera el dígito verificador del número de un RUT chileno.
 * El dígito puede ser un carácter numérico o la letra K mayúscula.
 *
 * Basado en https://es.wikipedia.org/wiki/Rol_%C3%9Anico_Tributario
 *
 * @param rutNumber
 */
export const generateDv = (rutNumber: number): string => {
  // Reordena el número de RUT en un arreglo de números que comienza desde el final.
  //  Ejemplo -> 199827081 -> [1, 8, 0, 7, 2, 8, 9, 9, 1]
  const reversedRutNumbers: number[] = [...rutNumber.toString()]
    .reverse()
    .map((numberString: string) => Number.parseInt(numberString, 10));

  let sum = 0;
  for (const [index, reversedRutNumber] of reversedRutNumbers.entries()) {
    const numberToMultiply = (index % 6) + 2;
    sum += reversedRutNumber * numberToMultiply;
  }

  const sumDivision = Math.trunc(sum / 11);
  const divisionResult = sum - 11 * sumDivision;
  const result = 11 - divisionResult;

  if (result === 11) {
    return '0';
  }

  if (result === 10) {
    return 'K';
  }

  return result.toString();
};
