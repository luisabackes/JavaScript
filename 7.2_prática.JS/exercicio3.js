const leia = require('readline-sync');

let idade = 0;
let totalMenores21 = 0;
let totalMaiores50 = 0;

while (true) {
    idade = leia.questionInt('Digite uma idade: ');

    if (idade < 0) {
        break;
    }

    if (idade < 21) {
        totalMenores21++;
    } else if (idade > 50) {
        totalMaiores50++;
    }
}

console.log(`Total de pessoas menores de 21 anos: ${totalMenores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${totalMaiores50}`);