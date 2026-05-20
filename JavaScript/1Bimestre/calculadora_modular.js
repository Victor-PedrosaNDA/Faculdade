const prompt = require("prompt-sync")();

function fatorial(numero) {
    let resultado = 1;
    for (let i = numero; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

function exponencial(x) {
    let soma = 0;
    for (let i = 0; i <= 15; i++) {
        soma += Math.pow(x, i) / fatorial(i);
    }
    return soma;
}

function calcularSeno(graus) {
    let x = graus * (Math.PI / 180);
    let soma = 0;
    for (let i = 0; i < 15; i++) {
        let expoente = 2 * i + 1;
        let sinal = Math.pow(-1, i);
        soma += sinal * (Math.pow(x, expoente) / fatorial(expoente));
    }
    return soma;
}

function calcularCosseno(graus) {
    let x = graus * (Math.PI / 180);
    let soma = 0;
    for (let i = 0; i < 15; i++) {
        let expoente = 2 * i;
        let sinal = Math.pow(-1, i);
        soma += sinal * (Math.pow(x, expoente) / fatorial(expoente));
    }
    return soma;
}

function calcularLogNatural(x) {
    if (x <= 0);
    let y = (x - 1) / (x + 1);
    let soma = 0;
    for (let i = 0; i < 25; i++) {
        let k = 2 * i + 1;
        soma += (1 / k) * Math.pow(y, k);
    }
    return 2 * soma;
}

function calcularRaiz(num) {
    if (num < 0) ;
    let x = num / 2 || 1;
    for (let i = 0; i < 10; i++) {
        x = 0.5 * (x + num / x);
    }
    return x;
}

console.log("MENU DE OPÇÕES");
console.log("1. Fatorial");
console.log("2. Exponencial");
console.log("3. Raiz quadrada");
console.log("4. Seno");
console.log("5. Cosseno");
console.log("6. Logaritimo Natural ln");
console.log("7. Logaritmo (base 10)");

let opc = prompt("Escolha uma opção valida seu acefalo: ");

switch (opc) {
    case '1': {
        let num = parseFloat(prompt("Digite o número: "));
        console.log("Resultado:", fatorial(num));
        break;
    }
    case '2': {
        let x = parseFloat(prompt("Digite o expoente: "));
        console.log("Resultado:", exponencial(x));
        break;
    }
    case '3': {
        let num = parseFloat(prompt("Digite o número: "));
        console.log("Resultado:", calcularRaiz(num));
        break;
    }
    case '4': {
        let num = parseFloat(prompt("Digite o ângulo em graus: "));
        console.log("Resultado:", calcularSeno(num));
        break;
    }
    case '5': {
        let num = parseFloat(prompt("Digite o ângulo em graus: "));
        console.log("Resultado:", calcularCosseno(num));
        break;
    }
    case '6': {
        let num = parseFloat(prompt("Digite o número: "));
        console.log("Resultado:", calcularLogNatural(num));
        break;
    }
    case '7': {
        let num = parseFloat(prompt("Digite o número: "));
        let res = calcularLogNatural(num) / calcularLogNatural(10);
        console.log("Resultado:", res);
        break;
    }
    default:
        console.log("Eu disse uma opcao valida, voce eh burro?");
        
}