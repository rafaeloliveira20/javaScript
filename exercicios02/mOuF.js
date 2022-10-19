/*Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.*/

const input = require('readline-sync');

let letra = String(input.question("diga seu sexo "));
if(letra === "M"){
    console.log("Sexo masculino");
} else if(letra === "F"){
    console.log("Sexo feminino");
}else{
    console.log("sexo invalido");
}