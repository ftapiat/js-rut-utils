import { generateRut, isRutValid, rutForcedDotsAndDashRegex } from '@/utils';

test('Genera RUT y valida que funcione', () => {
  expect(isRutValid(generateRut())).toBe(true);
});

test('Genera RUT formateado con puntos y guión', () => {
  expect(isRutValid(generateRut(true))).toBe(true);
  expect(rutForcedDotsAndDashRegex.test(generateRut(true))).toBe(true);
});
