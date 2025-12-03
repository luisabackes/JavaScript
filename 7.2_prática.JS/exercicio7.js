const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log('Vetor:', vetor.join(' | '));

let numeroProcurado = leia.questionInt('Digite o numero que voce deseja encontrar: ');

let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroProcurado) {
        posicao = i;
        break;
    }
}

if (posicao !== -1) {
    console.log(`O numero ${numeroProcurado} está localizado na posição: ${posicao}`);

} else {
    console.log(`O numero ${numeroProcurado} não foi encontrado!`);
}