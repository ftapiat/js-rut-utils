import { rutForcedDotsAndDashRegex } from '@/utils';

test('Rut con puntos y guión es válido', () => {
  const rut = '11.111.111-1';
  expect(rutForcedDotsAndDashRegex.test(rut)).toBeTruthy();
});

test('Rut sin puntos y guión es inválido', () => {
  const rut = '11111111-1';
  expect(rutForcedDotsAndDashRegex.test(rut)).toBeFalsy();
});

test('Rut sin puntos y sin guión es inválido', () => {
  const rut = '111111111';
  expect(rutForcedDotsAndDashRegex.test(rut)).toBeFalsy();
});
