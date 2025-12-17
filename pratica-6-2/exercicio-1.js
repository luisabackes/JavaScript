const leia = require('readline-sync');

let A = 0;
let B = 0;
let C = 0;

A = leia.questionInt('Digite o número A: ');
B = leia.questionInt('Digite o número B: ');
C = leia.questionInt('Digite o número C: ');

let soma = A + B;

console.log(`\n${A} + ${B} = ${soma} ${soma > C ? ">" : soma < C ? "<" : "="} ${C}`);

if (soma > C) {
    console.log(`\nA soma de A + B é maior que C.`);

} else if (soma < C) {
    console.log(`\nA soma de A + B é menor que C.`);

} else {
    console.log(`\nA soma de A + B é igual a C.`);
}