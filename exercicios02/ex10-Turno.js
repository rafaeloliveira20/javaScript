/*Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/

const input = require('readline-sync');

let turno = String(input.question('em que turno você estuda M-matutino ou V-Vespertino ou N- Noturno? '));
if(turno === "M"){
    console.log('Bom Dia');
}else if(turno === "V"){
    console.log("Boa Tarde!");
}else if(turno === "N"){
    console.log("Boa Noite!");
}else{
    console.log("inválido");
}