const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('Lista.xlsx');
const nomeFolha = workbook.SheetNames[0];
const planilha = workbook.Sheets[nomeFolha];


const dados = XLSX.utils.sheet_to_json(planilha, { header: 1 });

let texto = "";


for (let i = 1; i < dados.length; i++) {
    let linha = dados[i];

    if (linha.length > 0) {
        texto = texto + linha[0] + "," + linha[1] + "," + linha[2] + "," + linha[3] + "," + linha[4] + "," + linha[5] + "\n";
    }
}

texto = texto.trim();
fs.writeFileSync('dados.txt', texto);
console.log("Arquivo dados.txt atualizado com sucesso!");