import { isRutValid } from '@/utils';

test('Rut sin puntos y con guión es válido', () => {
  const rut = '10407355-7';
  expect(isRutValid(rut)).toBeTruthy();
});

test('Rut menor a 1 millón es inválido', () => {
  const rut = '19.982-6';
  expect(isRutValid(rut)).toBeFalsy();
});

test('Rut 44.444.444-4 es inválido', () => {
  const rut = '44.444.444-4';
  expect(isRutValid(rut)).toBeFalsy();
});
