const prompt = require("prompt-sync")();

    n=1;
    for (let i=0; i<=n ; i++){
        
        nota1=parseFloat(prompt("Digite a nota 1: "));
        nota2=parseFloat(prompt("Digite a nota 2: "));
        Atividade=parseFloat(prompt("Digite a nota da atividade: "));
        let media=nota1*0.35+nota2*0.35+Atividade*0.3;
            console.log("A media do estudante eh: ", media);
    }
            console.log("Agora com While: ");
        let j=0;
        while(j<=n){
           nota1=parseFloat(prompt("Digite a nota 1: "));
        nota2=parseFloat(prompt("Digite a nota 2: "));
        Atividade=parseFloat(prompt("Digite a nota da atividade: "));
        let media=nota1*0.35+nota2*0.35+Atividade*0.3;
            console.log("A media do estudante eh: ", media);
        }

        console.log("Agora com Do While: ");
        let k=0;
        do{
            nota1=parseFloat(prompt("Digite a nota 1: "));
        nota2=parseFloat(prompt("Digite a nota 2: "));
        Atividade=parseFloat(prompt("Digite a nota da atividade: "));
        let media=nota1*0.35+nota2*0.35+Atividade*0.3;
            console.log("A media do estudante eh: ", media);
        }while(k<=n);