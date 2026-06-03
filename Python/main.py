import calculos

a = float (input("Digite o valor de a: "))
b = float (input("Digite o valor de b: "))

resultado_soma = calculos.somar(a, b)
resultado_subtracao = calculos.subtrair(a, b)

print("Resultado da soma: ", resultado_soma)
print("Resultado da subtração: ", resultado_subtracao)