const prompt = require("prompt-sync")();

class FiguraGeometrica {
    static calcularAreaCirculo(raio) {
        return Math.PI * raio * raio;
    }

    static calcularAreaQuadrado(lado) {
        return lado * lado;
    }

    static calcularAreaRetangulo(largura, altura) {
        return largura * altura;
    }

    static calcularVolumeEsfera(raio) {
        return (4/3) * Math.PI * Math.pow(raio, 3);
    }

    static calcularAreaEsfera(raio) {
        return 4 * Math.PI * Math.pow(raio, 2);
    }
}

console.log("Menu (Calculadora de Figuras Geométricas)");
console.log("1 -> Area circulo");
console.log("2 -> Area quadrada");
console.log("3 -> Area retangular");
console.log("4 -> Volume esfera");
console.log("5 -> Area esfera");

const opcao = prompt("Escolha uma opção: ");

switch (opcao) {
    case "1":
        const rCirculo = parseFloat(prompt("Digite o raio: "));
        console.log("Área do círculo:", FiguraGeometrica.calcularAreaCirculo(rCirculo));
        break;

    case "2":
        const lQuadrado = parseFloat(prompt("Digite o lado: "));
        console.log("Área do quadrado:", FiguraGeometrica.calcularAreaQuadrado(lQuadrado));
        break;

    case "3":
        const larg = parseFloat(prompt("Digite a largura: "));
        const alt = parseFloat(prompt("Digite a altura: "));
        console.log("Área do retângulo:", FiguraGeometrica.calcularAreaRetangulo(larg, alt));
        break;

    case "4":
        const rVolEsfera = parseFloat(prompt("Digite o raio da esfera: "));
        console.log("Volume da esfera:", FiguraGeometrica.calcularVolumeEsfera(rVolEsfera));
        break;

    case "5":
        const rAreaEsfera = parseFloat(prompt("Digite o raio da esfera: "));
        console.log("Área da esfera:", FiguraGeometrica.calcularAreaEsfera(rAreaEsfera));
        break;

    default:
        console.log("Opção inválida.");
        break;
}