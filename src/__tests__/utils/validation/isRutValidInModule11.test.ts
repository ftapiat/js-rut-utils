import { isRutValidInModule11 } from '@/utils';

test('Comprueba que varios RUT limpios reales sean validos', () => {
  const rutList: string[] = ['123747216', '190721418', '221501861', '104073557', '19128206k', '53724841'];

  for (const rut of rutList) {
    expect(isRutValidInModule11(rut)).toBeTruthy();
  }
});

test('Comprueba que varios RUT limpios reales e incorrectos sean inválidos', () => {
  const rutList: string[] = ['123747217', '190721413', '221501865', '104073558', '191282069', '5372484k'];

  for (const rut of rutList) {
    expect(isRutValidInModule11(rut)).toBeFalsy();
  }
});
