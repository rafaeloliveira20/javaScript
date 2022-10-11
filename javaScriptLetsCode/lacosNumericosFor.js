const input = require('readline-sync');

let nota;
let media;
let soma = 0;

for(let i = 1; i<=3;i++){
    nota =Number(input.question(`informa a nota ${i} do aluno: `))
    soma = soma + nota;
    media = soma/3;
}
console.log("a média é ",media);