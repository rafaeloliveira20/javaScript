let numero = 10;
const input = require('readline-sync')

let num = Number(input.question("diga um numero "));

while(num != numero){
    console.log("você errou");
    num = input.question("diga um numero ");
}
console.log("acertou miseravi");