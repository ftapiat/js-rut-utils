import { formatRut } from '@/utils';

test('Agrega puntos y guión a un RUT sin puntos ni guión', () => {
  expect(formatRut("306869574")).toBe('30.686.957-4');
});

test('No modifica RUT con puntos y guión', () => {
  expect(formatRut('30.686.957-4')).toBe('30.686.957-4');
});