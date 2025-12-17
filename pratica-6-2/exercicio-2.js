const leia = require('readline-sync');

let numero = 0;

numero = leia.questionInt('Digite um número: ');

let tipo = (numero % 2 === 0) ? 'par' : 'ímpar';

let sinal = (numero >= 0) ? 'positivo' : 'negativo';

console.log(`\nO número ${numero} é ${tipo} e ${sinal}.`);