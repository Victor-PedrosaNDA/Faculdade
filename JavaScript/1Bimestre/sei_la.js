const prompt = require("prompt-sync")();

        let precoOriginal = 0;


       console.log("--Escolha o tipo do valor do carro que deseja comprar--");
       console.log("Tipo 1 - Carros de R$ 53.000,00");
       console.log("Tipo 2 - Carros de R$ 83.000,00");
       console.log("Tipo 3 - Carros de R$ 100.000,00");
       console.log("Tipo 4 - Carros de R$ 120.000,00");
       console.log("Tipo 5 - Carros de R$ 145.000,00");
       let opcao = prompt("Digite uma opção: ");
       

         switch(opcao){
            case '1':{
                precoOriginal = 53000;
                console.log("O valor do carro é: R$ 53.000,00");
                break;
            }
            case '2':{
                precoOriginal = 83000;
                console.log("O valor do carro é: R$ 83.000,00");
                break;
            }
            case '3':{
                precoOriginal = 100000;
                console.log("O valor do carro é: R$ 100.000,00");
                break;
            }
            case '4':{
                precoOriginal = 120000;
                console.log("O valor do carro é: R$ 120.000,00");
                break;
            }
            case '5':{
                precoOriginal = 145000;
                console.log("O valor do carro é: R$ 145.000,00");
                break;
            }
            default:{
                console.log("Opção Invalida");
                return;
            }
        }
            console.log("Escolha forma de pagamento");
            console.log("1 - A vista");
            console.log("2 - Pagar metade");
            console.log("3 - Pagar uma quarta parte ou menos ");
            let opcao2 = prompt("Digite a opção: ");

            switch(opcao2){
                case '1':{
                    let desconto = precoOriginal * 0.10;
                    let precoFinal = precoOriginal - desconto;
                    console.log("O valor do carro com desconto é: R$ ", precoFinal);
                    break;
                }
                case '2':{
                    let juros = precoOriginal * 0.02;
                    let precoFinal2 = precoOriginal + juros;
                    let parcela = precoFinal2 / 48;
                    console.log("O valor total do carro com juros ao ano eh: R$ ", juros);
                    console.log("O valor das parcelas eh: R$ ", parcela);
                    console.log("Valor do carro em 48x: R$ ", precoFinal2);
                    break;
                }
                case '3':{
                    let juros3 = precoOriginal * 0.04;
                    let precoFinal3 = precoOriginal + juros3;
                    let parcela3 = precoFinal3 / 48;
                    console.log("O valor total do carro com juros ao ano eh: R$ ", juros3);
                    console.log("O valor das parcelas eh: R$ ", parcela3);
                    console.log("Valor do carro em 48x: R$ ", precoFinal3);
                    break; 
                }
                default:{
                    console.log("Forma de pagamento invalida");
                    return;
                }
            }
        