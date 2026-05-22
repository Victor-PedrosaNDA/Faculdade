const prompt = require("prompt-sync")();


class calculadora{
    static adicionar(a, b){
        return a+b;
    }
    static subtrair(a,b){
        return a-b;
    }
    static multiplicar(a,b){
        return a*b;
    
    }
    static dividir(a,b){
        if(b === 0){
            throw new Error("Divisão por zero nao eh permitida");
        }
        return a/b;
    }
}
class CalculadoraCientifica extends calculadora{
    static potencia(base, expoente ){
        return Math.pow(base, expoente);
    }
    static raizquadrada(numero){
        if (numero < 0){
            throw new Error("Nao eh possivel calcular raiz quadrada de um numero negativo");
        }
        return Math.sqrt(numero);
    }
    static seno(angulo){
        return Math.sin(angulo);
    }
static cosseno(angulo){
    return Math.cos(angulo);
}
}

const a = 5;
const b = 2;
const base = 4;
const expoente = 6;
const angulo = Math.PI / 4;

console.log('Soma a e b:', calculadora.adicionar(a, b));
console.log('Potência de', base, 'elevado a', expoente, 'é =', CalculadoraCientifica.potencia(base, expoente));
