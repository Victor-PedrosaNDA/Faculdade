#include <stdio.h>

void calcularIMC(float *peso, float *altura, float *imc) {
    *imc = *peso / ((*altura) * (*altura));
}

int main() {
    float peso, altura, imc;

    printf("Digite o peso (kg): ");
    scanf("%f", &peso);

    printf("Digite a altura (m): ");
    scanf("%f", &altura);

    calcularIMC(&peso, &altura, &imc);

    printf("Seu IMC é: %.2f\n", imc);

    return 0;
}