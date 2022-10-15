/*Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número]. */
const input = require('readline-sync')
let numero = Number(input.question("informe um numero "))
console.log("O numero informado foi ",numero);