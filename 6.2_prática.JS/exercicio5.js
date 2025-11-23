const leia = require('readline-sync');

let codigo = 0;
let quantidade = 0;
let produto = '';
let preco = 0;

codigo = leia.questionInt('Código do Produto: ');
quantidade = leia.questionInt('Quantidade: ');

switch (codigo) {
    case 1:
        produto = 'Cachorro Quente';
        preco = 10.00;
        break;

    case 2:
        produto = 'X-Salada';
        preco = 15.00;
        break;

    case 3:
        produto = 'X-Bacon';
        preco = 18.00;
        break;

    case 4:
        produto = 'Bauru';
        preco = 12.00;
        break;

    case 5:
        produto = 'Refrigerante';
        preco = 8.00;
        break;

    case 6:
        produto = 'Suco de laranja';
        preco = 13.00;
        break;

    default:
        console.log('\nCódigo inválido! Digite um número entre 1 e 6.');
        process.exit();
}

let total = quantidade * preco;

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);