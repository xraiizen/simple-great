function greet(name, language = 'en') {
    const greetings = {
        en: `Hello, ${name}!`,
        fr: `Bonjour, ${name}!`,
        es: `Hola, ${name}!`,
        de: `Hallo, ${name}!`,
        pt: `Olá, ${name}!`,
        it: `Ciao, ${name}!`,
    };

    return greetings[language] || greetings.en;
}

module.exports = greet;
