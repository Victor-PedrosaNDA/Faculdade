const prompt = require("prompt-sync")();

function escolherProduto(codigo) {
    switch (codigo) {
        case '1':
            return { nome: "Hamburguer", preco: 15.00 };
        case '2':
            return { nome: "Pizza", preco: 25.00 };
        case '3':
            return { nome: "Refrigerante", preco: 8.00 };
        case '4':
            return { nome: "Batata frita", preco: 12.00 };
        default:
            return null;
    }
}

function calcularValorTotal(preco, quantidade) {
    return preco * quantidade;
}

function calcularDesconto(totalBruto) {
    let valorFinal;
    if (totalBruto > 100) {
        valorFinal = totalBruto - (totalBruto * 0.1);
    } else if (totalBruto >= 50 && totalBruto <= 100) {
        valorFinal = totalBruto - (totalBruto * 0.05);
    } else {
        valorFinal = totalBruto;
    }
    return valorFinal;
}

function exibirResumo(produto, quantidade, totalBruto, totalComDesconto) {
    console.log("\nResumo do pedido: \n");
    console.log("Produto: " + produto);
    console.log("Quantidade: " + quantidade);
    console.log("Valor total: R$" + totalBruto);
    console.log("Valor com desconto: R$" + totalComDesconto);
}

console.log("Menu Cardapio.\n ");
console.log("Codigo 1- Hamburguer: R$15,00");
console.log("Codigo 2- Pizza: R$25,00");
console.log("Codigo 3- Refrigerante: R$8,00");
console.log("Codigo 4- Batata frita: R$12,00");

let pedido = prompt("Digite o codigo do pedido: ");
let quantidade = Number(prompt("Digite a quantidade: "));

let produtoSelecionado = escolherProduto(pedido);

if (produtoSelecionado === null) {
    console.log("Erro, pedido invalido");
} else {
    let totalBruto = calcularValorTotal(produtoSelecionado.preco, quantidade);
    let totalComDesconto = calcularDesconto(totalBruto);
    
    exibirResumo(produtoSelecionado.nome, quantidade, totalBruto, totalComDesconto);
}  
    