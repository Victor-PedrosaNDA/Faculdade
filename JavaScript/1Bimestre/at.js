const prompt = require("prompt-sync")();
            let a = parseFloat(prompt("Digite um numero entre 0 e 9: "));

                    if (Number.isNaN(a)) {
                    console.log("Digite um numero valido");
                    } else if (a < 0 || a > 9) {
                      console.log("Numero fora da faixa...");
                    } else {
                         if (a < 5 && a % 2 == 0) {
                 console.log("Amarelo e Verde");
  }
  else if(a<6 && a%2!=0){
    console.log("Azul e vermelho");
  }
  else if(a>5 && a%2==0){
        console.log("Preto e Branco");
    }       

    else {
        console.log("Laranja e cinza");

    }
}