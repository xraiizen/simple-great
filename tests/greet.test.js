const greet = require('../index'); // Ajustez le chemin d'accès selon l'organisation de votre projet

test('greeting in English', () => {
  expect(greet('John')).toBe('Hello, John!');
});

test('greeting in French', () => {
  expect(greet('John', 'fr')).toBe('Bonjour, John!');
});
