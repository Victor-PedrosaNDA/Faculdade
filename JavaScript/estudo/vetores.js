const prompt = require("prompt-sync")();
//lista de comandos uteis 
const a=[1,2,3,4];
const b=Array.of(1,2,3,4);
const c=[2,'Ano',[1,'b']];
const matriz=[[1,2,3],
              [4,5,6],
              [7,8,9]];
             
console.log("Resposta: ",a);
console.log("Resposta: ",b);
console.log("Resposta: ",c);
console.log("Resposta: ",matriz[1][0]);
console.log("Resposta: ",a.length);//tamanho do vetor
a.length=3;//corta o vetor
console.log("Resposta: ",a);
a.push(5);//coloca o elemento no final
console.log("Resposta: ",a);
a.unshift(6);//coloca o elemento no inicio
console.log("Resposta: ",a);
a.pop();//elimina ultimo elemento a entrar na pilha
console.log("Resposta: ",a);
a.shift();//elimina primeiro elemento em entrar na pilha
console.log("Resposta vetor A: ",a);
let j=a.indexOf(9)//busca o elemento do vetor, se esta mostra 1 se não mostra -1
console.log("Resposta: ",j);
let d=a.concat(b);
console.log("vetor concatenado: ",d);
d.sort();//organiza elementos em ordem alfabética
console.log("vetor organizado de forma crescente: ",d);
d.reverse();
console.log("vetor invertido: ",d);
d.splice(1, 2); //elimina elemntos do vetor de origem e modifica ele
console.log("elimina elementos: ",d);