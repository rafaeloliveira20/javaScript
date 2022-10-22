/*faça um jogo que peça um número a um jogador e um número ao jogador 2
 se o número dos jogadores forem iguais imprima empate, se forem diferente sorteei um numero 0 ou 1
 se o número sorteado for 0 imprima que o vencendor é menor número se o número sorteado for 1 impra que ovencedor foi o maior número*/

 const input = require('readline-sync');
 let play1 = Number(input.question('jogaador 01 diga um numero '));
 let play2 =  Number(input.question('jogaador 02 diga um numero '));

 if (play1 !== play2) {
    let r = Math.random();
    console.log('O numero sorteado foi ',r.toFixed());
    if(r.toFixed() == 0 && play1 < play2){
        console.log('o vencendor é o jogador 01 ');
    }else if(r.toFixed() == 0 && play1 > play2){
        console.log('o vencendor é o jogador 02 ');
    }else if(r.toFixed() == 1 && play1 > play2){
        console.log('o vencendor é o jogador 01 ');
    }else if(r.toFixed() == 1 && play1 < play2){
        console.log('o vencendor é o jogador 02 ');
    }
    
 }else{
    console.log('Empate');
 }
