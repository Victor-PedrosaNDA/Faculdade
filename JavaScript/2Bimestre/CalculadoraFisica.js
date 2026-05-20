const prompt = require("prompt-sync")();

class CalculadoraFisica {
    static densidade(massa, volume) {
        if (volume === 0) throw new Error("Volume nao pode ser zero");
        return massa / volume;
    }
    static ConversaoCelsiusParaFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    static ConversaoCelsiusParaKelvin(celsius) {
        return celsius + 273;
    }
}

class Termodinamica extends CalculadoraFisica {
    static CalorSensivel(massa, calorEspecifico, tempInicial, tempFinal) {
        const deltaT = tempFinal - tempInicial;
        return massa * calorEspecifico * deltaT;
    }
    static Pressao(forca, area) {
        if (area === 0) throw new Error("Area nao pode ser zero");
        return forca / area;
    }
    static VelocidadeMedia(distancia, tempo) {
        if (tempo === 0) throw new Error("Tempo nao pode ser zero");
        return distancia / tempo;
    }
}

console.log("\n--- Menu - Calculo Fisico e Termodinamico ---");
console.log("1 -> Densidade");
console.log("2 -> Conversao Celsius para Fahrenheit");
console.log("3 -> Conversao Celsius para Kelvin");
console.log("4 -> Calor Sensivel");
console.log("5 -> Pressao");
console.log("6 -> Velocidade Media");

const opcao = prompt("Escolha uma opção: ");

let massa, volume, celsius, forca, area, distancia, tempo;

switch (opcao) {
    case '1':
        massa = parseFloat(prompt("Digite a massa: "));
        volume = parseFloat(prompt("Digite o volume: "));
        console.log("Densidade:", Termodinamica.densidade(massa, volume));
        break;

    case '2':
        celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
        console.log("Temperatura em Fahrenheit:", Termodinamica.ConversaoCelsiusParaFahrenheit(celsius));
        break;

    case '3':
        celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
        console.log("Temperatura em Kelvin:", Termodinamica.ConversaoCelsiusParaKelvin(celsius));
        break;

    case '4':
        massa = parseFloat(prompt("Digite a massa: "));
        const calorEspecifico = parseFloat(prompt("Digite o calor especifico: "));
        const tempoInicial = parseFloat(prompt("Digite a temperatura inicial: "));
        const tempoFinal = parseFloat(prompt("Digite a temperatura final: "));
        console.log("Calor Sensível:", Termodinamica.CalorSensivel(massa, calorEspecifico, tempoInicial, tempoFinal));
        break;

    case '5':
        forca = parseFloat(prompt("Digite a força: "));
        area = parseFloat(prompt("Digite a área: "));
        console.log("Pressão:", Termodinamica.Pressao(forca, area));
        break;

    case '6':
        distancia = parseFloat(prompt("Digite a distância: "));
        tempo = parseFloat(prompt("Digite o tempo: "));
        console.log("Velocidade média:", Termodinamica.VelocidadeMedia(distancia, tempo));
        break;

    default:
        console.log("Opção inválida!");
        break;
}