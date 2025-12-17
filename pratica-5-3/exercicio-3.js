const leia = require('readline-sync');

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = leia.questionFloat('Digite o salario bruto: ');
adicionalNoturno = leia.questionFloat('Digite o adicional noturno: ');
horasExtras = leia.questionFloat('Digite o valor das horas extras: ');
descontos = leia.questionFloat('Digite o total de descontos: ');

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`Salario líquido= ${salarioLiquido}`);