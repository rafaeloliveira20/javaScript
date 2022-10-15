/*Faça um Programa que converta metros para centímetros.*/

const input = require('readline-sync');
let centimetro = Number(input.question('informe o valor em centimetros a ser convertido '));
let metro = centimetro/100;
console.log('o valor em metros é ',metro);
