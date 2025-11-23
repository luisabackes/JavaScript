const leia = require('readline-sync');

let nome = '';
let cargoCodigo = 0;
let salario = 0;
let cargo = '';
let reajuste = 0;

nome = leia.question('Nome do colaborador: ');
cargoCodigo = leia.questionInt('Cargo: ');
salario = leia.questionFloat('Salário: R$ ');

switch (cargoCodigo) {
    case 1:
        cargo = 'Gerente';
        reajuste = 0.10;
        break;

    case 2:
        cargo = 'Vendedor';
        reajuste = 0.07;
        break;

    case 3:
        cargo = 'Supervisor';
        reajuste = 0.09;
        break;

    case 4:
        cargo = 'Motorista';
        reajuste = 0.06;
        break;

    case 5:
        cargo = 'Estoquista';
        reajuste = 0.05;
        break;

    case 6:
        cargo = 'Técnico de TI';
        reajuste = 0.08;
        break;

    default:
        console.log('\nCódigo inválido! Digite um número entre 1 e 6.');
        process.exit();
}

let novoSalario = salario + (reajuste * salario);

console.log(`\nNome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);