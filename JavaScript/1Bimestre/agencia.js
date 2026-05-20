const prompt = require("prompt-sync")();


            console.log("Bem-vindo à agência de viagens!");

let valorPacote = parseFloat(prompt("Digite o valor do pacote que deseja comprar: "));
            


if (valorPacote > 0 && valorPacote <= 15000) {


    let categoria = "";
    if (valorPacote < 3000) {
        categoria = "Menor de R$ 3.000";
    } else if (valorPacote <= 5000) {
        categoria = "Acima de R$ 3.000 até R$ 5.000";
    } else if (valorPacote <= 7000) {
        categoria = "Acima de R$ 5.000 até R$ 7.000";
    } else if (valorPacote <= 10000) {
        categoria = "Acima de R$ 7.000 até R$ 10.000";
    } else {
        categoria = "Acima de R$ 10.000 até R$ 15.000";
    }

    console.log("Categoria do pacote: " + categoria);


    console.log("Opções de pagamento:");
    console.log("1 - À vista (12% desconto)");
    console.log("2 - Entrada 40% (6% juros ao ano)");
    console.log("3 - Entrada 20% (10% juros ao ano)");
    let opcao = prompt("Escolha uma opcao: ");


    if (opcao === "1") {
        
        let valorFinal = valorPacote - (valorPacote * 0.12);
        console.log("Valor final à vista: R$ " + valorFinal);
    } 
    else if (opcao === "2") {
        let entrada = valorPacote * 0.40;
        let restante = valorPacote - entrada;

        let valorComJuros = restante * (1.06 * 1.06 * 1.06);
        let total = entrada + valorComJuros;
        console.log("Entrada: R$ " + entrada);
        console.log("Total: R$ " + total);
        console.log("36 parcelas de: R$ " + (valorComJuros / 36));
    } 
    else if (opcao === "3") {
        let entrada = valorPacote * 0.20;
        let restante = valorPacote - entrada;
        let valorComJuros = restante * (1.10 * 1.10 * 1.10);
        let total = entrada + valorComJuros;
        console.log("Entrada: R$ " + entrada);
        console.log("Total: R$ " + total);
        console.log("36 parcelas de: R$ " + (valorComJuros / 36));
    }

} else {
    console.log("Valor inválido! Digite um valor entre 0 e 15.000.");
}