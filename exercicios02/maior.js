/*Faça um Programa que leia três números e mostre o maior deles.*/
const input = require('readline-sync');
console.log("Diga o valor de três números");
let n1 = Number(input.question());
let n2 = Number(input.question());
let n3 = Number(input.question());

if (n3 > n2 && n1) {
    console.log(`${n3} é o maior deles`);
}else if(n2 > n1 && n3){
    console.log(`${n2} é o maior deles`);
}else if(n1 > n2 && n3){
    console.log(`${n1} é o maior deles`);
}