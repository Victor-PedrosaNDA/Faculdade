#include <stdio.h>



float CalcularAreaCilindro(float raio, float altura) {
    float pi = 3.14;
    float area = 2 * pi * raio * (raio + altura);
    printf("A area do cilindro eh: %.2f\n", area);
    return area;
}

float CalcularAreaEsfera(float raio) {
    float pi = 3.14;
    float area = 4 * pi * raio * raio;
    printf("A area da esfera eh: %.2f\n", area);
    return area;
}

float CalcularAreaRetangulo(float base, float altura) {
    float area = base * altura;
    printf("A area do retangulo eh: %.2f\n", area);
    return area;
}

void calcularAreaCircunferencia(float raio) {
    float pi = 3.14;
    float area = pi * raio * raio;
    printf("O raio informado foi: %.2f\n", raio);
    printf("A area da circunferencia eh: %.2f\n", area);
}

void calcularVolumeEsfera(float raio) {
    float pi = 3.14;
    float volume = (4.0 / 3.0) * pi * raio * raio * raio;
    printf("O raio informado foi: %.2f\n", raio);
    printf("O volume da esfera eh: %.2f\n", volume);
}

void calcularVolumeCilindro(float raio, float altura) {
    float pi = 3.14;
    float volume = pi * raio * raio * altura;
    printf("O raio informado foi: %.2f\n", raio);
    printf("A altura informada foi: %.2f\n", altura);
    printf("O volume do cilindro eh: %.2f\n", volume);
}



int main() {
    int op;
    float raio, altura, base;

    printf("--- Calculadora Area e Volume ---\n");
    printf("1 -> Area cilindro\n");
    printf("2 -> Area esfera\n");
    printf("3 -> Area retangulo\n");
    printf("4 -> Area circunferencia\n");
    printf("5 -> Volume esfera\n");
    printf("6 -> Volume Cilindro\n");
    printf("Escolha uma opcao: ");
    
    
    scanf("%d", &op);

    switch (op) {
        case 1:
            printf("Digite o raio e a altura do cilindro: ");
            scanf("%f %f", &raio, &altura);
            CalcularAreaCilindro(raio, altura);
            break;
        case 2:
            printf("Digite o raio da esfera: ");
            scanf("%f", &raio);
            CalcularAreaEsfera(raio);
            break;
        case 3:
            printf("Digite a base e a altura do retangulo: ");
            scanf("%f %f", &base, &altura);
            CalcularAreaRetangulo(base, altura);
            break;
        case 4:
            printf("Digite o raio da circunferencia: ");
            scanf("%f", &raio);
            calcularAreaCircunferencia(raio);
            break;
        case 5:
            printf("Digite o raio da esfera: ");
            scanf("%f", &raio);
            calcularVolumeEsfera(raio);
            break;
        case 6:
            printf("Digite o raio e a altura do cilindro: ");
            scanf("%f %f", &raio, &altura);
            calcularVolumeCilindro(raio, altura);
            break;
        default:
            printf("Opcao invalida!\n");
    }

    return 0;
}