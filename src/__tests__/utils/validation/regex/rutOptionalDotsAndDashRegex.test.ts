import { rutOptionalDotsAndDashRegex } from '@/utils';

test('Rut con puntos y guión es válido', () => {
  const rut = '11.111.111-1';
  expect(rutOptionalDotsAndDashRegex.test(rut)).toBeTruthy();
});

test('Rut sin puntos y guión es válido', () => {
  const rut = '11111111-1';
  expect(rutOptionalDotsAndDashRegex.test(rut)).toBeTruthy();
});

test('Rut sin puntos ni guión es válido', () => {
  const rut = '111111111';
  expect(rutOptionalDotsAndDashRegex.test(rut)).toBeTruthy();
});

test('Rut incorrecto que cumple el formato sigue siendo válido', () => {
  const rut = '01.132.111-1';
  expect(rutOptionalDotsAndDashRegex.test(rut)).toBeTruthy();
});

test('Rut con letra K (mayúscula y minúscula) es válido', () => {
  let rut = '11111111-K';
  expect(rutOptionalDotsAndDashRegex.test(rut)).toBeTruthy();
  rut = '11111111-k';
  expect(rutOptionalDotsAndDashRegex.test(rut)).toBeTruthy();
});

test('Rut con otros caracteres es inválido', () => {
  const rut = 'abcde';
  expect(rutOptionalDotsAndDashRegex.test(rut)).toBeFalsy();
});
