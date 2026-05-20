const prompt = require("prompt-sync")();
let n1 = parseFloat(prompt("Digite a Nota 1: "));
let n2 = parseFloat(prompt("Digite a Nota 2: "));

let total = n1*0.4 + n2*0.6;

console.log("A média semestral é:", total);

if (total>=5){
    console.log("Aprovado");
} else if (total<2){
    console.log("Reprovado direto");
} else {
    let sub = parseFloat(prompt("Digite a nota da P3: "));
 
    if(sub >= n1 && sub < n2) {
        let total1 = sub*0.4 + n2*0.6;
       
        if (total1 >=5) {
            console.log("Aprovado, média: ", total1);
        } else {
            console.log("Reprovado, média: ", total1);
        }
    } else {
        let total1 = n1*0.4 + sub*0.6;
       
        if(total1>=5) {
            console.log("Aprovado, média: ", total1);
        }else {
            console.log("Reprovado, média: ", total1);
        }
    }
}