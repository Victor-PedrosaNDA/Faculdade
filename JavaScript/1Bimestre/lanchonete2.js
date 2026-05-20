const prompt = require("prompt-sync")();


function escolherProduto(codigo) {
    switch (codigo) {
        case '1':
            return { nome: "Hambúrguer", preco: 15.00 };
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


function aplicarDesconto(totalBruto) {
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


function exibirResumo(produto, quantidade, totalComDesconto) {
    console.log("\n--- Resumo do pedido ---");
    console.log("Produto: " + produto);
    console.log("Quantidade: " + quantidade);
    console.log("Valor com desconto: R$ " + totalComDesconto);
}



let codigoPedido = prompt("Digite o número do pedido (1 a 4): ");
let quantidadePedido = Number(prompt("Digite a quantidade: "));

let produto = escolherProduto(codigoPedido);

if (produto === null) {
    console.log("Erro: Código inválido!");
} else {
    let total = calcularValorTotal(produto.preco, quantidadePedido);
    let totalFinal = aplicarDesconto(total);
    
    exibirResumo(produto.nome, quantidadePedido, totalFinal);
}