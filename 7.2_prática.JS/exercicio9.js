const leia = require('readline-sync');

let matriz = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;
const tamanho = 3;

for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = leia.questionInt(`Digite o elemento da posicao [${i}][${j}]: `);
    }
}

console.log('\nMatriz 3x3:');

for (let i = 0; i < tamanho; i++) {
    let linha = '';
    for (let j = 0; j < tamanho; j++) {
        linha += matriz[i][j] + '\t';
    }
    console.log(linha);
}

console.log('\nElementos da Diagonal Principal:');
for (let i = 0; i < tamanho; i++) {
    console.log(matriz[i][i]);
    somaDiagonalPrincipal += matriz[i][i];
}
console.log(`Soma da Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log('\nElementos da Diagonal Secundária:');
for (let i = 0; i < tamanho; i++) {
    console.log(matriz[i][tamanho - 1 - i]);
    somaDiagonalSecundaria += matriz[i][tamanho - 1 - i];
}
console.log(`Soma da Diagonal Secundária: ${somaDiagonalSecundaria}`);