const prompt = require("prompt-sync")();
console.log("Este programa calcula a funcao exponencial com uma serie de Taylor de ordem 5: ");

        let x = parseFloat(prompt("Digite o valor de x: "));
        if(x==0){
            console.log("A resposta eh um, deve colocar um valor diferente..");

        }
        else{
            let T1=x;
            let T2=x**2/2;
            let T3=x**3/6;
            let T4=x**4/24;
            let T5=x**5/120;
                let resultado=1+T1+T2+T3+T4+T5;
                console.log("O resultado exponencial e^x=: ", resultado);  
            }