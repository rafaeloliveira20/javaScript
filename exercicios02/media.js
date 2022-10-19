const input = require('readline-sync');
let n1 = Number(input.question('diga a primeira nota '));
let n2 = Number(input.question('dia a segunda nota '));
let media = (n1+n2)/2;
console.log('sua media foi de ',media);

if(media >= 7 && media < 10){
    console.log('aprovado');
}else if(media === 10){
    console.log('aprovado com distinção');
}else{
    console.log("reprovado");
}