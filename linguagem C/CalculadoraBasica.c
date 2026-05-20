#include <stdio.h>

float soma(float a, float b) {
    return a + b;
}

float subtrai(float a, float b) {
    return a - b;
}

float multiplicar(float N1, float N2) {
    float resultado;
    resultado = N1 * N2;
    return (resultado);
}

float divide(float a, float b) {
    if (b != 0)
        return a / b;
    else {
        printf("Erro: divisão por zero!\n");
        return 0;
    }
}

int main() {
    float num1, num2, resultado;
    char op;

    printf("Digite a operação (+, -, *, /): ");
    scanf(" %c", &op);

    printf("Digite dois números: ");
    scanf("%f %f", &num1, &num2);

    switch (op) {
        case '+': 
            resultado = soma(num1, num2); 
            break;
        case '-': 
            resultado = subtrai(num1, num2); 
            break;
        case '*': 
            resultado = multiplicar(num1, num2); 
            break;
        case '/': 
            resultado = divide(num1, num2); 
            break;
        default:
            printf("Operador inválido!\n");
            return 1;
    }

    if (!(op == '/' && num2 == 0))
        printf("Resultado: %.2f\n", resultado);

    return 0;
}