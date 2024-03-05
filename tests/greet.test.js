const greet = require('../index');

test('greeting in English', () => {
  expect(greet('John')).toBe('Hello, John!');
});

test('greeting in French', () => {
  expect(greet('John', 'fr')).toBe('Bonjour, John!');
});

test('greeting in Spanish', () => {
  expect(greet('John', 'es')).toBe('Hola, John!');
});

test('greeting in Deutsch', () => {
  expect(greet('John', 'de')).toBe('Hallo, John!');
});

test('greeting in Portuguese', () => {
  expect(greet('John', 'pt')).toBe('Olá, John!');
});

test('greeting in Italian', () => {
  expect(greet('John', 'it')).toBe('Ciao, John!');
});
