const prompt = require("prompt-sync")();


function fatorial(numero){
    let resultado = 1;
    for (let i = numero; i > 1; i--) {
        resultado *= i;
    }
    return (resultado)
}

function juros(c,i,t){
    let M=c*Math.pow((1+i),t);
    return (M);
}

function exponencial(x){
    let e=Math.exp(x);
    console.log("A exponencial é: ", e)
}

function multiplicacao(a,b){
    console.log("A multiplicação é: ",a*b)
}

console.log("MENU DE OPÇÕES");
console.log("1. Fatorial");
console.log("2. Calculo de juros");
console.log("3. Exponencial");
console.log("4. Multiplicação");
let opc = prompt("Digite a opção: ");

switch(opc){
 case '1':{
     let num=parseFloat(prompt("Digite o numero para calcular o fatorial: "));
     console.log("O fatorial é: ",fatorial(num));
     break;
 }
 case '2':{
     let c=parseFloat(prompt("Digite capital: "));
     let i=parseFloat(prompt("Digite o juros 0 e 1%: "));
     let t=parseFloat(prompt("Digite o tempo da divida: "));
     console.log("O Montante é: ",juros(c,i,t));
     break;
 }
 case '3':{
     let x=parseFloat(prompt("Digite numero da exponencial: "));
     exponencial(x);
     break;
 }
 case '4':{
     let a=parseFloat(prompt("Digite numero 1:  "));
     let b=parseFloat(prompt("Digite o numero 2: "));
     multiplicacao(a,b);
     break;
 }
    default:{
        console.log("Opção Invalida");
    }
 }