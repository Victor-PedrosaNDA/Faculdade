export function calcularSalarioBruto(horastrabalhadas) {
  return horastrabalhadas * 4.5 * 50;
}

export function calcularINSS(salariobruto) {
  return salariobruto * 0.11;
}

export function calcularIR(salarioBruto) {
  return salarioBruto * 0.075;
}

export function calcularContribuicaoSindical(salarioBruto) {
  return salarioBruto * 0.01;
}

export function calcularSalarioLiquido(
  salarioBruto,
  inss,
  ir,
  contribuicaoSindical,
  emprestimo
) {
  let TotalDescontos = inss + ir + contribuicaoSindical + emprestimo;
  return salarioBruto - TotalDescontos;
}