import { cleanRut } from '@/utils';

test('Limpia un RUT con puntos y guión', () => {
  expect(cleanRut('30.686.957-4')).toBe('306869574');
});

test('No modifica RUT sin puntos ni guión', () => {
  expect(cleanRut('306869574')).toBe('306869574');
});
