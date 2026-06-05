export function ImprimirContraCheque(Professor) {
  console.log("=====================");
  console.log("====Contra-Cheque====");
  console.log("=====================");
  console.log("Nome do Funcionário: " + Professor.nome);
  console.log("Horas semanais: " + Professor.HorasTrabalhadas);
  console.log("Salário Bruto: R$ " + Professor.salarioBruto);
  console.log("INSS: R$ " + Professor.inss);
  console.log("IR: R$ " + Professor.ir);
  console.log("Contribuição Sindical: R$ " + Professor.ContribuicaoSindical);
  console.log("Empréstimo Consignado: R$ " + Professor.emprestimo);
  console.log("Salário Líquido: R$ " + Professor.salarioLiquido);
  console.log("\n");
}

export function RelatorioGeral(ListaProfessores) {
  let totalBrutoEmpresa = 0;
  let totalLiquidoEmpresa = 0;

  for (let i = 0; i < ListaProfessores.length; i++) {
    totalBrutoEmpresa = totalBrutoEmpresa + ListaProfessores[i].salarioBruto;
    totalLiquidoEmpresa = totalLiquidoEmpresa + ListaProfessores[i].salarioLiquido;
  }

  console.log("=====================");
  console.log("===Relatório Geral===");
  console.log("=====================");
  console.log("Total de professores: " + ListaProfessores.length);
  console.log("Total salario Bruto pago pela empresa: R$ " + totalBrutoEmpresa);
  console.log("Total salario Líquido pago pela empresa: R$ " + totalLiquidoEmpresa);
}