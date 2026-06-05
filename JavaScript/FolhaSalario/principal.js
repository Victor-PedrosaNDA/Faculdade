import {
  calcularSalarioBruto,
  calcularINSS,
  calcularIR,
  calcularContribuicaoSindical,
  calcularSalarioLiquido,
} from "./calculo.js";

import { ImprimirContraCheque, RelatorioGeral } from "./folhasalario.js";

import fs from "fs";

let ListaProfessores = [
  { nome: "João", HorasTrabalhadas: 160 },
  { nome: "Maria", HorasTrabalhadas: 120 },
  { nome: "Pedro", HorasTrabalhadas: 200 },
  { nome: "Ana", HorasTrabalhadas: 180 },
  { nome: "Carlos", HorasTrabalhadas: 194 },
  { nome: "Gabriel", HorasTrabalhadas: 260 },
  { nome: "Laura", HorasTrabalhadas: 100 },
  { nome: "Mariana", HorasTrabalhadas: 189 },
  { nome: "Guilherme", HorasTrabalhadas: 210 },
  { nome: "Leonardo", HorasTrabalhadas: 150 },
  { nome: "Valentina", HorasTrabalhadas: 110 },
  { nome: "Beatriz", HorasTrabalhadas: 234 },
  { nome: "Alice", HorasTrabalhadas: 185 },
  { nome: "Arthur", HorasTrabalhadas: 100 },
  { nome: "Rafael", HorasTrabalhadas: 105 },
];

function calcularFolhaPagamento(Lista) {
  for (let i = 0; i < Lista.length; i++) {
    let p = Lista[i];

    p.salarioBruto = calcularSalarioBruto(p.HorasTrabalhadas);
    p.inss = calcularINSS(p.salarioBruto);
    p.ir = calcularIR(p.salarioBruto);
    p.ContribuicaoSindical = calcularContribuicaoSindical(p.salarioBruto);

    console.log("Digite o valor do emprestimo para " + p.nome + " (ou 0 se nao tiver):");
    
    let buffer = Buffer.alloc(1024);
    let bytesLidos = fs.readSync(process.stdin.fd, buffer, 0, 1024, null);
    let textoDigitado = buffer.toString("utf8", 0, bytesLidos).trim();
    
    p.emprestimo = parseFloat(textoDigitado) || 0;

    p.salarioLiquido = calcularSalarioLiquido(
      p.salarioBruto,
      p.inss,
      p.ir,
      p.ContribuicaoSindical,
      p.emprestimo
    );
  }

  for (let i = 0; i < Lista.length; i++) {
    ImprimirContraCheque(Lista[i]);
  }

  RelatorioGeral(Lista);
}

calcularFolhaPagamento(ListaProfessores);