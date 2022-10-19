/*Faça um Programa que verifique se uma letra digitada é vogal ou consoante.*/

const input = require('readline-sync');
let letra = String(input.question("Diga uma letra "));
let vogais = ["A","E","I","O","U","a","e","i","o","u"];
if(vogais.includes(letra)){
    console.log("a letra é uma vogal");
}else{
    console.log("a Letra é uma consoante");
}