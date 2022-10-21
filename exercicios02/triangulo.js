// peça 3 números e verifique se eles formam um triângulo.
// se for triângulo diga se é equilatero, isocales ou escaleno.
const input = require('readline-sync');
console.log('Diga três valores');
let A = Number(input.question());
let B = Number(input.question());
let C = Number(input.question());

if(A < B + C && B < A+C && C < A+B ){
    console.log('forma um triangulo');
    if(A == B && B== C){
        console.log('triangulo equilatero');
    }else if(A == B || A == C || B == C){
        console.log('triangulo isosales');
    }else{
        console.log('triangulo escaleno5');
    }
}else{
    console.log('não forma um triangulo');
}