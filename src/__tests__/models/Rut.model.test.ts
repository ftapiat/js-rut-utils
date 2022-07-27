import { RutModel } from '@/models';
import { RutIsMalformedError } from '@/errors';
import { isRutValid } from '@/utils';

test('Constructor "fromString" genera RUT correctamente', () => {
  const rutList = ['10.407.355-7', '10407355-7', '104073557'];
  for (let string of rutList) {
    const rut = RutModel.fromString(string);
    expect(rut.number).toBe(10_407_355);
    expect(rut.dv).toBe('7');
  }
});

test('Constructor "fromNumber" genera DV correcto', () => {
  const rut = RutModel.fromNumber(10_407_355);
  expect(rut.dv).toBe('7');
});

test('Constructor "random" crea RUT aleatorio válido', () => {
  const rut = RutModel.random();
  expect(isRutValid(rut.cleaned)).toBeTruthy();
});

test('Propiedad "formatted" entrega el RUT formateado', () => {
  const rut = new RutModel(10_407_355, '7');
  expect(rut.formatted).toBe('10.407.355-7');
});

test('Propiedad "cleaned" entrega el RUT y su DV sin puntos ni guión', () => {
  const rut = new RutModel(10_407_355, '7');
  expect(rut.cleaned).toBe('104073557');
});

test('RUT malformado arroja error', () => {
  expect(() => new RutModel(11_111_111, '1')).toThrow(RutIsMalformedError);
  expect(() => new RutModel(111_111, '6')).toThrow(RutIsMalformedError);
  expect(() => new RutModel(19_101_178, '5')).toThrow(RutIsMalformedError);
  expect(() => new RutModel(44_444_444, '4')).toThrow(RutIsMalformedError);
});
