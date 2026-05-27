#include <stdio.h>

struct Esfera {
    float raio;
    float area;
    float volume;
};

struct Esfera calcularEsfera(float r) {
    struct Esfera e;
    e.raio = r;
    e.area = 4 * 3.1415 * r * r;
    e.volume = (4.0 / 3.0) * 3.1415 * r * r * r;
    return e;
}

int main() {
    float r;

    printf("Digite o raio da esfera: ");
    scanf("%f", &r);

    struct Esfera resultado = calcularEsfera(r);

    printf("\nResultados:\n");
    printf("Raio = %.2f\n", resultado.raio);
    printf("Area = %.2f\n", resultado.area);
    printf("Volume = %.2f\n", resultado.volume);

    return 0;
}