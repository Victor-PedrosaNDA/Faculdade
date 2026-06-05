import {
  calcularSalarioBruto,
  calcularINSS,
  calcularIR,
  calcularContribuicaoSindical,
  calcularSalarioLiquido,
} from "./calculo.js";
import { ImprimirContraCheque, RelatorioGeral } from "./folhasalario.js";
import readline from "readline";

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

async function calcularFolhaPagamento(ListaProfessores) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const perguntar = (texto) => new Promise((resolve) => rl.question(texto, resolve));

  for (let p of ListaProfessores) {
    p.salarioBruto = calcularSalarioBruto(p.HorasTrabalhadas);
    p.inss = calcularINSS(p.salarioBruto);
    p.ir = calcularIR(p.salarioBruto);
    p.ContribuicaoSindical = calcularContribuicaoSindical(p.salarioBruto);
    
    let entrada = await perguntar(`Informe o valor do emprestimo para o(a) professor(a) ${p.nome} (0 caso nao possua): `);
    let valorEmprestimo = parseFloat(entrada) || 0;
    p.emprestimo = valorEmprestimo;

    p.salarioLiquido = calcularSalarioLiquido(
      p.salarioBruto,
      p.inss,
      p.ir,
      p.ContribuicaoSindical,
      p.emprestimo
    );
  }

  rl.close();

  for (let i = 0; i < ListaProfessores.length; i++) {
    ImprimirContraCheque(ListaProfessores[i]);
  }

  RelatorioGeral(ListaProfessores);
}

calcularFolhaPagamento(ListaProfessores);