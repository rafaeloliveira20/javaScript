/*Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).*/

const input = require('readline-sync');
let F = Number(input.question("Diga o valor da temperatura em Fahrenheit "));
let c = 5*((F-32)/9);
console.log(`o valor de ${F} F em Celsius é: ${c.toFixed(1)} C`);