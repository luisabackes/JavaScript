const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionInt('Digite o salario: ');
abono = leia.questionInt('Digite o abono: ');
novoSalario = salario + abono;

console.log(`Novo salário: ${novoSalario}`);