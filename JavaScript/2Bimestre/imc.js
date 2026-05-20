const prompt = require("prompt-sync")();

class CalculadoraIMC {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        if (this.altura <= 0) return 0;
        return this.peso / (this.altura ** 2);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 25) return 'Peso normal';
        if (imc < 30) return 'Sobrepeso';
        return 'Obesidade';
    }
}

const pesoInput = prompt("Digite o peso (kg): ").replace(',', '.');
const alturaInput = prompt("Digite a altura (m): ").replace(',', '.');

const peso = parseFloat(pesoInput);
const altura = parseFloat(alturaInput);

if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    const calc = new CalculadoraIMC(peso, altura);
    const imc = calc.calcularIMC();
    const classificacao = calc.classificarIMC();

    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}