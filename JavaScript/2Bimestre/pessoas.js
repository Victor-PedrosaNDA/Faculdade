const prompt = require("prompt-sync")();

class pessoa {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    
    }

falar(){
    console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);

}
}

const pessoa1 = new pessoa("João", 25);
const pessoa2 = new pessoa("Maria", 30);

pessoa1.falar();
pessoa2.falar();