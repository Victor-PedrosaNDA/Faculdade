#include <stdio.h>

void somar(float *a, float *b, float *resultado) {
    *resultado = *a + *b;
}

void subtrair(float *a, float *b, float *resultado) {
    *resultado = *a - *b;
}

void multiplicar(float *a, float *b, float *resultado) {
    *resultado = *a * *b;
}

void dividir(float *a, float *b, float *resultado) {
    if (*b != 0) {
        *resultado = *a / *b;
    } else {
        printf("Erro: divisao por zero!\n");
    }
}

int main() {
    float num1, num2, resultado;
    float *p1 = &num1, *p2 = &num2, *res = &resultado;
    char operacao;

    printf("Digite o primeiro numero: ");
    scanf("%f", p1);

    printf("Digite o segundo numero: ");
    scanf("%f", p2);

    printf("Escolha a operacao (+, -, *, /): ");
    scanf(" %c", &operacao);

    switch (operacao) {
        case '+':
            somar(p1, p2, res);
            printf("Resultado: %.2f\n", resultado);
            break;
        case '-':
            subtrair(p1, p2, res);
            printf("Resultado: %.2f\n", resultado);
            break;
        case '*':
            multiplicar(p1, p2, res);
            printf("Resultado: %.2f\n", resultado);
            break;
        case '/':
            dividir(p1, p2, res);
            if (*p2 != 0) {
                printf("Resultado: %.2f\n", resultado);
            }
            break;
        default:
            printf("Operacao invalida!\n");
    }

    return 0;
}