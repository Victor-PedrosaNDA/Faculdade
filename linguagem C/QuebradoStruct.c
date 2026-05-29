#include <stdio.h>
#include <stdlib.h>

struct Aluno {
    float n1;
    float n2;
    float media;
};

struct Nascimento {
    int dia;
    int mes;
    int ano;
    int soma;
};

struct Temperatura {
    float celsius;
    float fahrenheit;
    float kelvin;
};

struct Eletrica {
    float potencia;
    float corrente;
    float resistencia;
};

struct Triangulo {
    float base;
    float altura;
    float area;
};

void calcularMedia(struct Aluno *a) {
    printf("\nMedia\n");
    printf("Digite a nota 1: ");
    scanf("%f", &a->n1);
    printf("Digite a nota 2: ");
    scanf("%f", &a->n2);

    a->media = (a->n1 * 0.4) + (a->n2 * 0.6);

    printf("\nNota 1: %.2f", a->n1);
    printf("\nNota 2: %.2f", a->n2);
    printf("\nMedia: %.2f\n", a->media);

    if (a->media >= 9.0) {
        printf("Mencao: SS - Aprovado\n");
    } else if (a->media >= 7.0) {
        printf("Mencao: MS - Aprovado\n");
    } else if (a->media >= 5.0) {
        printf("Mencao: MM - Aprovado\n");
    } else if (a->media >= 3.0) {
        printf("Mencao: MI - Reprovado\n");
    } else {
        printf("Mencao: II - Reprovado\n");
    }
}

void calcularNascimento(struct Nascimento *n) {
    printf("\nSoma data de nascimento\n");
    printf("Digite o dia: ");
    scanf("%d", &n->dia);
    printf("Digite o mes: ");
    scanf("%d", &n->mes);
    printf("Digite o ano: ");
    scanf("%d", &n->ano);

    n->soma = n->dia + n->mes + n->ano;

    printf("\nData inserida: %02d/%02d/%d", n->dia, n->mes, n->ano);
    printf("\nSoma dos valores: %d\n", n->soma);
}

void converterTemperatura(struct Temperatura *t) {
    printf("\n Conversao\n");
    printf("Digite a temperatura em Celsius: ");
    scanf("%f", &t->celsius);

    t->fahrenheit = (t->celsius * 9 / 5) + 32;
    t->kelvin = t->celsius + 273.15;

    printf("\nCelsius: %.2f C", t->celsius);
    printf("\nFahrenheit: %.2f F", t->fahrenheit);
    printf("\nKelvin: %.2f K\n", t->kelvin);
}

void calcularEletrica(struct Eletrica *e) {
    float tensao = 220.0;
    printf("\nCalculo Eletrica\n");
    printf("Digite a potencia (W): ");
    scanf("%f", &e->potencia);

    e->corrente = e->potencia / tensao;
    e->resistencia = tensao / e->corrente;

    printf("\nPotencia: %.2f W", e->potencia);
    printf("\nTensao: 220.00 V");
    printf("\nCorrente: %.2f A", e->corrente);
    printf("\nResistencia: %.2f Ohms\n", e->resistencia);
}

void calcularAreaTriangulo(struct Triangulo *tri) {
    printf("\nTriangulo retangulo\n");
    printf("Digite a base: ");
    scanf("%f", &tri->base);
    printf("Digite a altura: ");
    scanf("%f", &tri->altura);

    tri->area = (tri->base * tri->altura) / 2;

    printf("\nBase: %.2f", tri->base);
    printf("\nAltura: %.2f", tri->altura);
    printf("\nArea calculada: %.2f\n", tri->area);
}

int main() {
    int opcao;
    
    struct Aluno aluno1;
    struct Nascimento data;
    struct Temperatura temp;
    struct Eletrica eletro;
    struct Triangulo t;

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
            calcularMedia(&aluno1);
            break;
        case 2:
            calcularNascimento(&data);
            break;
        case 3:
            converterTemperatura(&temp);
            break;
        case 4:
            calcularEletrica(&eletro);
            break;
        case 5:
            calcularAreaTriangulo(&t);
            break;
        case 0:
            printf("\nSaindo do programa...\n");
            break;
        default:
            printf("\nOpcao invalida!\n");
    }

    return 0;
}