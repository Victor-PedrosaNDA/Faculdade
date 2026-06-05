export function ImprimirContraCheque(Professor) {
  console.log("=====================");
  console.log("====Contra-Cheque====");
  console.log("=====================");
  console.log("Nome do Funcionário: " + Professor.nome);
  console.log("Horas trabalhadas: " + Professor.HorasTrabalhadas);
  console.log("Salário Bruto: " + Professor.salarioBruto);
  console.log("INSS: " + Professor.inss);
  console.log("IR: " + Professor.ir);
  console.log("Contribuição Sindical: " + Professor.ContribuicaoSindical);
  console.log("Empréstimo Consignado: " + Professor.emprestimo);
  console.log("Salário Líquido: " + Professor.salarioLiquido);
}

export function RelatorioGeral(ListaProfessores) {
  let totalBrutoEmpresa = 0;
  let totalLiquidoEmpresa = 0;

  for (let i = 0; i < ListaProfessores.length; i++) {
    totalBrutoEmpresa += ListaProfessores[i].salarioBruto;
    totalLiquidoEmpresa += ListaProfessores[i].salarioLiquido;
  }

  console.log("=====================");
  console.log("===Relatório Geral===");
  console.log("=====================");
  console.log("Total de professores: " + ListaProfessores.length);
  console.log("Total salario Bruto pago pela empresa: " + totalBrutoEmpresa);
  console.log("Total salario Líquido pago pela empresa: " + totalLiquidoEmpresa);
}