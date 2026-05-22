class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    exibirInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo} - Ano: ${this.ano}`);
    }
}

const carro1 = new Carro("Honda", "Civic", 2020);
const carro2 = new Carro("Toyota", "Corolla", 2019);

carro1.exibirInfo();
carro2.exibirInfo();