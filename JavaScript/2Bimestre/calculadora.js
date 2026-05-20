const prompt = require("prompt-sync")();

class Calculadora {
    somar(num1, num2) {
        return num1 + num2;
    }
    subtrair(num1, num2) {
        return num1 - num2;
    }
    multiplicar(num1, num2) {
        return num1 * num2;
    }
    dividir(num1, num2) {
        if (num2 === 0) {
            return "Erro: Divisão por zero não é permitida.";
        }
        return num1 / num2;
    }
    raizQuadrada(num) {
        return Math.sqrt(num);
    }
    logaritmo(num) {
        return Math.log10(num);
    }
    exponencial(numero, expoente) {
        return numero ** expoente;
    }
}

const calc = new Calculadora();
console.log('Soma:', calc.somar(5, 3));
console.log('Subtração:', calc.subtrair(5, 3));
console.log('Multiplicação:', calc.multiplicar(5, 3));
console.log('Divisão:', calc.dividir(6, 2));
console.log('Raiz Quadrada:', calc.raizQuadrada(9));
console.log('Logaritmo:', calc.logaritmo(100));
console.log('Exponencial:', calc.exponencial(2, 3));