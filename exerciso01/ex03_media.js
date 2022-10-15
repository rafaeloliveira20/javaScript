/*Faça um Programa que peça as 4 notas bimestrais e mostre a média.*/

const input = require('readline-sync');
let nota;
let soma = 0;
let media;
for(let i =1; i <=4; i++){
    nota = Number(input.question(`informe a ${i}  nota `));
    soma = soma + nota;
    media = soma/4
}
console.log("A sua média é ",media);