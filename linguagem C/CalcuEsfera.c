#include <stdio.h>

void esfera(float raio, float *area, float *volume) {
    *area = 4 * 3.1418 * raio * raio;
    *volume = (4.0 / 3.0) * 3.1418 * raio * raio * raio;
}

int main() {
    float raio, area, volume;

    printf("Digite o raio da esfera: ");
    scanf("%f", &raio);

    esfera(raio, &area, &volume);

    printf("\nResultados:\n");
    printf("Raio = %.2f\n", raio);
    printf("Area = %.2f\n", area);
    printf("Volume = %.2f\n", volume);

    return 0;
}