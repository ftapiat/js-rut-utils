import { generateDv } from '@/utils';

test('Genera DV correcto para RUT de DV numérico', () => {
  expect(generateDv(30_686_957)).toBe('4');
});

test('Genera DV correcto para RUT de DV "K"', () => {
  expect(generateDv(7_156_553)).toBe('K');
});
