const prompt = require("prompt-sync")();


let n1=parseFloat(prompt("Nota 1: "));
if(n1>=0 && n1<=10){
    console.log("Notas aceitas .");
}
else {
    console.log("Notas erradas .");
    return 1;
}
let n2=parseFloat(prompt("Nota 2: "));
if(n2>=0 && n2<=10){
    console.log("Notas aceitas .");
}
else {
    console.log("Notas erradas .");
    return 1;
}
let A=parseFloat(prompt("Atividade: "));
if(A>=0 && A<=10){
    console.log("Notas aceitas .");
}
else {
    console.log("Notas erradas .");
    return 1;
}

let media= n1*0.35 + n2*0.35 +A*0.30;

if(media>=9 && media<=10){
console.log("Situação aprovado, com Menção SS, Sua média é: ",media);
}
else if(media>=7 && media<=8.9){
console.log("Situação aprovado, com Menção MS, Sua média é:",media);
}
else if(media>=5 && media<=6.9){
console.log("Situação aprovado, com Menção MM, Sua média é:",media);
}
else if(media>=3 && media<=4.9){
    console.log("Situação Reprovado, com Menção MI, Sua média é:",media);
    let NR=parseFloat(prompt("Nota de recuperação: "));
       if(NR>n1 && NR<=n2){
         let media1=NR*0.35 +N2*0.35 + A*0.30;
            if(media1>=9 && media1<=10){
               console.log("Situação aprovado, com Menção SS, Sua média é: ",media);
               }
         else if(media1>=7 && media1<=8.9){
             console.log("Situação aprovado, com Menção MS, Sua média é:",media);
             }
        else if(media1>=5 && media1<=6.9){
           console.log("Situação aprovado, com Menção MM, Sua média é:",media1);
             }
       else{
           console.log("Situação Reprovado, com Menção MI, Sua média é:",media1);
           }
   
    }
   
else{
    let media1=n1*0.35 +NR*0.35 + A*0.30;
   
    if(media1>=9 && media1<=10){
        console.log("Situação aprovado, com Menção SS, Sua média é: ",media1);
         }
    else if(media1>=7 && media1<=8.9){
         console.log("Situação aprovado, com Menção MS, Sua média é:",media1);
        }
    else if(media1>=5 && media1<=6.9){
          console.log("Situação aprovado, com Menção MM, Sua média é:",media1);
           }
    else{
        console.log("Situação Reprovado, com Menção MI, Sua média é:",media1);
     }
 }


}

else if(media>=0.1 && media<=2.9){
      console.log("Situação Reprovado, com Menção II, Sua média é:",media);


     let NR=parseFloat(prompt("Nota de recuperação: "));
   if(NR>n1 && NR<=n2){
       let media1=NR*0.35 +N2*0.35 + A*0.30;
   
        if(media1>=9 && media1<=10){
           console.log("Situação aprovado, com Menção SS, Sua média é: ",media);
        }
   else if(media1>=7 && media1<=8.9){
      console.log("Situação aprovado, com Menção MS, Sua média é:",media);
      }
    else if(media1>=5 && media1<=6.9){
      console.log("Situação aprovado, com Menção MM, Sua média é:",media);
       }
     else{
         console.log("Situação Reprovado, com Menção MI, Sua média é:",media1);
      }
   

}
else{
    let media1=n1*0.35 +NR*0.35 + A*0.30;
   
   
    if(media1>=9 && media1<=10){
       console.log("Situação aprovado, com Menção SS, Sua média é: ",media1);
}
      else if(media1>=7 && media1<=8.9){
           console.log("Situação aprovado, com Menção MS, Sua média é:",media1);
}
    else if(media1>=5 && media1<=6.9){
      console.log("Situação aprovado, com Menção MM, Sua média é:",media1);
}
    else{
       console.log("Situação Reprovado, com Menção MI, Sua média é:",media1);
}
}



}
else{
    console.log("Situação Reprovado, com Mençao SR, Sua média é:",media);
}