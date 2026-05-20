const prompt = require("prompt-sync")();

function calcularMedia() {
    let n1 = parseFloat(prompt("Digite o primeiro número: "));
    let n2 = parseFloat(prompt("Digite o segundo número: "));
    let media = (n1 + n2) / 2;
    console.log("A média dos números é: " + media);
}

function calcularRaiz() {
    let num = parseFloat(prompt("Digite o número para calcular a raiz quadrada: "));
    let resultado = Math.sqrt(num);
    console.log("A raiz quadrada do número é: " + resultado);
}

function calcularSoma() {
    let num1 = parseFloat(prompt("Digite o primeiro número para a soma: "));
    let num2 = parseFloat(prompt("Digite o segundo número para a soma: "));
    let soma = num1 + num2;
    console.log("A soma dos números é: " + soma);
}

function calcularArea() {
    let raio = parseFloat(prompt("Digite o raio da circunferência: "));
    let area = Math.PI * Math.pow(raio, 2);
    console.log("A área da circunferência é: " + area.toFixed(2));
}


function menu() {
    console.log("\n MENU DE OPÇÕES");
    console.log("1. Calcular Média");
    console.log("2. Calcular Raiz Quadrada");
    console.log("3. Calcular Soma");
    console.log("4. Calcular Área da Circunferência");
    console.log("5. Sair");

    let opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            calcularMedia();
            break;
        case "2":
            calcularRaiz();
            break;
        case "3":
            calcularSoma();
            break;
        case "4":
            calcularArea();
            break;
        case "5":
            console.log("Saindo do programa...");
            return; 
        default:
            console.log("Opção Inválida!");
    }
   menu();
}
menu();