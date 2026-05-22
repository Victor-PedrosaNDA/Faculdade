const prompt = require("prompt-sync")();



    class animal{
        constructor(nome){
            this.nome = nome;
        }
        comer(){
            return `${this.nome} está comendo.`;
        }
    }

    class cachorro extends animal{
        latir(){
            return `${this.nome} está latindo.`;
        }
    }

    const meuCachorro = new cachorro("Rex");
    console.log(meuCachorro.comer());
    console.log(meuCachorro.latir());