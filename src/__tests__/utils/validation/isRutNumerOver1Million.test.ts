import { isRutNumberOver1Million } from '@/utils';

test('Un rut mayor a 1 millón da True', () => {
  expect(isRutNumberOver1Million(1_000_000)).toBeTruthy();
  expect(isRutNumberOver1Million(11_000_000)).toBeTruthy();
  expect(isRutNumberOver1Million(44_444_444)).toBeTruthy();
  expect(isRutNumberOver1Million(150_000_000)).toBeTruthy();
});

test('Un rut menor a 1 millón da False', () => {
  expect(isRutNumberOver1Million(999_999)).toBeFalsy();
});