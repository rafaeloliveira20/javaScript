/*João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas*/

const input = require('readline-sync');
 let peso = Number(input.question("Diga o peso dos peixes em Kg "))
 if( peso > 50){
    let excesso = peso - 50;
    multa = excesso*4
    console.log(`Houve um execesso de ${excesso} por tanto a multa a ser paga 
    sera de ${multa} R$`);
 }else{
    console.log("Não há multa a ser paga");
 }