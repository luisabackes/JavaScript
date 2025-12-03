const leia = require('readline-sync');

let num1 = 0;
let num2 = 0;

num1 = leia.questionInt('Digite o primeiro número do intervalo: ');
num2 = leia.questionInt('Digite o último número do intervalo: ');

if (num1 >= num2) {
    console.log('Intervalo inválido. O primeiro número deve ser menor que o segundo.');
    process.exit();
}

console.log(`No intervalo entre ${num1} e ${num2}:`);

for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e 5`);
    }
}