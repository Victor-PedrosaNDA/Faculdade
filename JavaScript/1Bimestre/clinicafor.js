const prompt = require("prompt-sync")();

for (let i = 1; i <= 5; i++) {

    console.log("Cadastro de Paciente ");
    
    let nome = prompt("Nome do paciente: ");
    let peso = parseFloat(prompt("Peso do paciente: "));
    let altura = parseFloat(prompt("Altura do paciente: "));
    
    
    let imc = peso / (altura * altura);
    if (peso <= 20) {
        console.log("Voce vai morrer!");
        
    }
    
    let classificacao = "";
    
    
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5) {
        classificacao = "Peso normal";
    } else if (imc >= 25) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30)  {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35) {
        classificacao = "Obesidade grau II";
    } else if (imc >= 40) {
        classificacao = "Obesidade grau III";
    }
    
    
    let mensagem = "";
    
    switch (classificacao) {
        case "Abaixo do peso":
            mensagem = "Atenção! É importante procurar orientação nutricional.";
            break;
            case "Peso normal":
                mensagem = "Parabéns! Você está com um peso saudável!";
                break;
                case "Sobrepeso":
            mensagem = "Fique atento! Pequenas mudanças podem melhorar sua saúde.";
            break;
            case "Obesidade grau I":
                mensagem = "Recomenda-se acompanhamento médico.";
                break;
                case "Obesidade grau II":
                    mensagem = "Importante buscar ajuda profissional especializada.";
                    break;
                    case "Obesidade grau III":
                        mensagem = "Risco elevado à saúde! Procure orientação.";
                        break;
                    }
                    
                    console.log(mensagem);
                }