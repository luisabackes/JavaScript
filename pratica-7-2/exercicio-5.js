const leia = require('readline-sync');

let numero = 0;
let somaPositivos = 0;

do {
    numero = leia.questionInt('Digite um numero: ');

    if (numero > 0) {
        somaPositivos += numero;
    }

} while (numero !== 0);

console.log(`A soma dos números positivos digitados é: ${somaPositivos}`);