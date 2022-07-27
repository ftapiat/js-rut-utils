import { isRutMocked } from '@/utils';

test('Ruts construidos usando el mismo número para cada carácter da True', () => {
  const rutList: string[] = [];

  // recorre desde el número 1 al 9
  for (let i = 1; i <= 9; i++) {
    // Registra un rut falso con el número de carácter actual
    const fakedRut: string = `${String(i).repeat(8)}-${i}`;
    rutList.push(fakedRut);
  }

  for (const rut of rutList) {
    expect(isRutMocked(rut)).toBeTruthy();
  }
});