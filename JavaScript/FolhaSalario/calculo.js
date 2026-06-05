export function calcularSalarioBruto(horasSemanais) {
  let resultado = horasSemanais * 4.5 * 50;
  return resultado;
}

export function calcularINSS(salarioBruto) {
  let resultado = salarioBruto * 0.11;
  return resultado;
}

export function calcularIR(salarioBruto) {
  if (salarioBruto <= 2500) {
    return 0;
  } else if (salarioBruto <= 5000) {
    return salarioBruto * 0.075;
  } else {
    return salarioBruto * 0.15;
  }
}

export function calcularContribuicaoSindical(salarioBruto) {
  let resultado = salarioBruto * 0.02;
  return resultado;
}

export function calcularSalarioLiquido(salarioBruto, inss, ir, sindicato, emprestimo) {
  let totalDescontos = inss + ir + sindicato + emprestimo;
  let resultado = salarioBruto - totalDescontos;
  return resultado;
}