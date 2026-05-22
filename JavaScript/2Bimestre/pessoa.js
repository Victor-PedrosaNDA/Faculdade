const prompt = require("prompt-sync")();

class pessoa{
    constructor (nome, idade, sexo, dataDeNascimento){
    if(nome === undefined){
        throw new Error("O nome eh obrigatorio: ");
    }else {
        this.nome = nome;
    }
    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
    }
    
    
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos`);
    }
    static tipo(){
        console.log("Funçao Estatica");

    }
}

const pessoa1 = new pessoa ("João", 30, "Masculino", "01/01/1990");
pessoa1.apresentar();
pessoa.tipo();