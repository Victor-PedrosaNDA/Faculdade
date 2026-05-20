const prompt = require("prompt-sync")();
console.log(
  "Este codigo resolve uma equacao de segunda ordem do tipo: ax^2 + bx + c",
);
            let a = parseFloat(prompt("Digite o valor de a: "));
                let b = parseFloat(prompt("Digite o valor de b: "));
                    let c = parseFloat(prompt("Digite o valor de c: "));

            if (a == 0) {
                     console.log("O polinomio nao eh de segunda ordem, tente novamente: ");
            } else {
                let delta = b**2 - 4*a*c;
                if (delta > 0) {
                        let x1 = (-b + Math.sqrt(delta)) / (2*a);
                        let x2 = (-b - Math.sqrt(delta)) / (2*a);
                            console.log("A raiz 1 eh: ", x1);
                            console.log("A raiz 2 eh: ", x2);
                    } else if (delta == 0) {
                        let x1 = -b / (2*a);
                            console.log("A raiz 1 eh: ", x1);
                            console.log("A raiz 2 eh: ", x1);
                        } else {
                console.log("A raiz nao faz parte dos numeros reais ");
  }
}