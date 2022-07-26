import { exampleHelloWorld } from '@/function';

test('Retorna "Hola mundo"', () => {
  expect(exampleHelloWorld()).toBe('Hola mundo');
});
