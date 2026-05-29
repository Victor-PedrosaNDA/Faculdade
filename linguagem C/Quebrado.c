#include <stdio.h>
#include <stdlib.h>

void calcularMedia(float *n1, float *n2, float *media) {
    printf("\nMedia\n");
    printf("Digite a nota 1: ");
    scanf("%f", n1);
    printf("Digite a nota 2: ");
    scanf("%f", n2);

    *media = (*n1 * 0.4) + (*n2 * 0.6);

    printf("\nNota 1: %.2f", *n1);
    printf("\nNota 2: %.2f", *n2);
    printf("\nMedia: %.2f\n", *media);

    if (*media >= 9.0) {
        printf("Mencao: SS - Aprovado\n");
    } else if (*media >= 7.0) {
        printf("Mencao: MS - Aprovado\n");
    } else if (*media >= 5.0) {
        printf("Mencao: MM - Aprovado\n");
    } else if (*media >= 3.0) {
        printf("Mencao: MI - Reprovado\n");
    } else {
        printf("Mencao: II - Reprovado\n");
    }
}

void calcularNascimento(int *dia, int *mes, int *ano, int *soma) {
    printf("\nSoma data de nascimento\n");
    printf("Digite o dia: ");
    scanf("%d", dia);
    printf("Digite o mes: ");
    scanf("%d", mes);
    printf("Digite o ano: ");
    scanf("%d", ano);

    *soma = *dia + *mes + *ano;

    printf("\nData inserida: %02d/%02d/%d", *dia, *mes, *ano);
    printf("\nSoma dos valores: %d\n", *soma);
}

void converterTemperatura(float *celsius, float *fahrenheit, float *kelvin) {
    printf("\n Conversao\n");
    printf("Digite a temperatura em Celsius: ");
    scanf("%f", celsius);

    *fahrenheit = (*celsius * 9 / 5) + 32;
    *kelvin = *celsius + 273.15;

    printf("\nCelsius: %.2f C", *celsius);
    printf("\nFahrenheit: %.2f F", *fahrenheit);
    printf("\nKelvin: %.2f K\n", *kelvin);
}

void calcularEletrica(float *potencia, float *corrente, float *resistencia) {
    float tensao = 220.0;
    printf("\nCalculo Eletrica\n");
    printf("Digite a potencia (W): ");
    scanf("%f", potencia);

    *corrente = *potencia / tensao;
    *resistencia = tensao / *corrente;

    printf("\nPotencia: %.2f W", *potencia);
    printf("\nTensao: 220.00 V");
    printf("\nCorrente: %.2f A", *corrente);
    printf("\nResistencia: %.2f Ohms\n", *resistencia);
}

void calcularAreaTriangulo(float *base, float *altura, float *area) {
    printf("\nTriangulo retangulo\n");
    printf("Digite a base: ");
    scanf("%f", base);
    printf("Digite a altura: ");
    scanf("%f", altura);

    *area = (*base * *altura) / 2;

    printf("\nBase: %.2f", *base);
    printf("\nAltura: %.2f", *altura);
    printf("\nArea calculada: %.2f\n", *area);
}

int main() {
    int opcao;
    
    float nota1, nota2, mediaFinal;
    int dia, mes, ano, soma;
    float c, f, k;
    float pot, corr, res;
    float base, altura, area;

    printf("Menu Principal\n");
    printf("\n1 - Calcular Media Ponderada");
    printf("\n2 - Somar Data de Nascimento");
    printf("\n3 - Converter Temperatura");
    printf("\n4 - Calcular Grandezas Eletricas");
    printf("\n5 - Calcular Area do Triangulo");
    printf("\n0 - Sair do Programa");
    printf("\nEscolha uma opcao: ");
    scanf("%d", &opcao);

    switch(opcao) {
        case 1:
            calcularMedia(&nota1, &nota2, &mediaFinal);
            break;
        case 2:
            calcularNascimento(&dia, &mes, &ano, &soma);
            break;
        case 3:
            converterTemperatura(&c, &f, &k);
            break;
        case 4:
            calcularEletrica(&pot, &corr, &res);
            break;
        case 5:
            calcularAreaTriangulo(&base, &altura, &area);
            break;
        case 0:
            printf("\nSaindo do programa...\n");
            break;
        default:
            printf("\nOpcao invalida!\n");
    }

    return 0;
}