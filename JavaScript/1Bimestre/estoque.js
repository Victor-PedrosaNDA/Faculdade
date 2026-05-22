const prompt = require("prompt-sync")();
        
        let estoque = [];
        let opcao = prompt(
                "Escolha uma opcao:\n1 - Adicionar Produto\n2 - Remover Produto\n3 - Listar produtos em ordem crescente\n4 - Buscar produto no estoque\n5 - Organizar Produtos em ordem crescente\n6 - Organizar Produtos em ordem decrescente\n7 - Concatenar produtos\n8 - Sair\n"
        );

                if (opcao === "1") {
                let carro1 = prompt("Digite o nome do primeiro carro: ");
                let carro2 = prompt("Digite o nome do segundo carro: ");
                         estoque.push(carro1, carro2);
                                console.log("Produtos adicionados!");


}
                else if (opcao === "2"){
                        let removido = estoque.pop();
                                console.log("Produto"+ removido + "removido!");
                }

                else if (opcao === "3"){
                        let listar = estoque.pop();
                        console.log("Produtos: ", estoque);
                }
                
                else if(opcao === "4"){
                        let buscar = estoque.includes();
                        console.log("Buscar produto: ", estoque);
                }

                else if (opcao === "5"){
                        let crescente = estoque.sort();
                        console.log("Produtos ordem crescente: ", estoque);
                }

                else if (opcao === "6"){
                        let decrescente = estoque.reverse();
                        console.log("Produtos ordem decrescente: ", estoque);
                }

                else if (opcao === "7"){
                        let listanova=["Jetta", "FuscaTSI", "BMWM3", "Focus","fuscaopreto"];
                        let concatenar = estoque.concat(listanova);
                        console.log("Concatenar produtos: ", estoque);
                }
                
                
                else {
    console.log("Erro: Opção inválida.");
                }


                

          
          