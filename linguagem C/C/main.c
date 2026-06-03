#include <stdio.h>
#include "calculos.h"

int main() {
    float a, b;

    printf("Digite o valor de a: ");
    scanf("%f", &a);

    printf("Digite o valor de b: ");
    scanf("%f", &b);

    float resultado_soma = somar(a, b);
    float resultado_subtracao = subtrair(a, b);

    printf("Resultado da soma: %.2f\n", resultado_soma);
    printf("Resultado da subtração: %.2f\n", resultado_subtracao);

    return 0;
}