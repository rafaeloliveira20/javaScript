
/*Faça um Programa que peça dois números e imprima a soma.*/
const input = require('readline-sync');
let num1 = Number(input.question('informe um numero '));
let num2 = Number(input.question('informe o segundo numero '));
console.log("a soma dos dois é ",num1 + num2);