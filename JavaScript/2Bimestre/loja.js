const prompt = require("prompt-sync")();

class LojaAutomotores {
    constructor(preco) {
        this.preco = preco;
    }

    calcularParcelado(parcelas) {
        const juros = 1.3; // 30% de juros
        return (this.preco * juros) / parcelas;
    }
}

class CarroPequeno extends LojaAutomotores {
    constructor(preco) {
        super(preco);
    }
}
class CarroGrande extends LojaAutomotores {
    constructor(preco) {
        super(preco);
    }
}
class Moto extends LojaAutomotores {
    constructor(preco) {
        super(preco);
    }
}

function comprarVeiculo(preco) {
    let veiculo;
    if (preco <= 10000) {
        veiculo = new Moto(preco);
    } else if (preco <= 90000) {
        veiculo = new CarroPequeno(preco);
    } else if (preco <= 200000) {
        veiculo = new CarroGrande(preco);
    } else {
        console.log("Nao vendemos carros com valor acima de 200 mil reais");
        return;
    }

    console.log("\nOPCOES DE PARCELAMENTO");
    console.log("1 - 12x sem juros");
    console.log("2 - 24x sem juros");
    console.log("3 - 48x com juros");

    const opcao = prompt("Escolha a opcao de parcelamento: ");

    let parcelas;
    switch (opcao) {
        case '1':
            parcelas = 12;
            break;
        case '2':
            parcelas = 24;
            break;
        case '3':
            parcelas = 48;
            break;
        default:
            console.log("Opcao invalida! Usando 12x como padrao.");
            parcelas = 12;
    }

    const valorParcela = veiculo.calcularParcelado(parcelas);
    console.log('\nPreco total: R$', veiculo.preco);
    console.log(`Parcelas: ${parcelas}x de R$`, valorParcela.toFixed(2));
}

const preco = parseFloat(prompt("Digite o preco do veiculo: R$ "));
comprarVeiculo(preco);
