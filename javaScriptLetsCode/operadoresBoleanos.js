const numero = 10;

console.log(numero > 20);
console.log(numero == 10);
console.log(numero == '10');
console.log(10 === "10"); // falso. '===' Compara os tipos de váriaveis.

console.clear()

console.log(10 != 10);
console.log(1 !== '10')

let idade = 18;
let tenhoCnh = true

const possoDirigir = idade >= 18 && tenhoCnh === true; 
console.log(possoDirigir)

idade = 30;
let votoFacutativo = idade < 18 || idade > 70;
console.log(votoFacutativo)