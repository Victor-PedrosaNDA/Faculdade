#include <stdio.h>

int calcularFatorial(int n) {
    int f = 1;
    for (int i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}

float calcularSeno(float x) {
    float seno = 0;
    float sinal = 1;
    
    for (int i = 1; i <= 7; i = i + 2) {
        
        float potencia = 1;
        for (int j = 1; j <= i; j++) {
            potencia = potencia * x;
        }
        
        seno = seno + (sinal * (potencia / calcularFatorial(i)));
        sinal = sinal * -1;
    }
    return seno;
}

void calcularCosseno(float x) {
    float cosseno = 0;
    float sinal = 1;

    for (int i = 0; i <= 6; i = i + 2) {
        float potencia = 1;
        for (int j = 1; j <= i; j++) {
            potencia = potencia * x;
        }

        cosseno = cosseno + (sinal * (potencia / calcularFatorial(i)));
        sinal = sinal * -1;
    }
    printf("Resultado do Cosseno: %f\n", cosseno);
}

 void CalcularImc(float peso, float altura){
    float imc = peso / (altura * altura);
    printf("Digite seu peso: ");
    scanf("%f", &peso);
    printf("Digite sua altura: ");
    scanf("%f", &altura);
    printf("O peso informado foi: %.2f\n", peso);
    printf("A altura informada foi: %.2f\n", altura);
    printf("O IMC eh: %.2f\n", imc);

 }

void CalcularMedia(float n1, float n2){
    float media = n1 * 0.40 + n2 * 0.60;
    printf("Digite a primeira nota: ");
    scanf("%f", &n1);
    printf("Digite a segunda nota: ");
    scanf("%f", &n2);
    printf("A sua media eh: %.2f\n", media);

    if(media >=8 && media <=10){
        printf("Parabens, sua mençao eh: SS\n");
    } else if (media >=6 && media <=8){
        printf("Parabens, sua mençao eh: MS\n");
    } else if(media >=5 && media <=6){
        printf("Parabens, sua mençao eh: MM\n");
    } else if (media < 5){
        printf("Sua mençao eh: MI\n");
    }
}

int main(){
    int opc;
            printf("------Menu------\n");
            printf("1- Calcular Fatorial\n");
            printf("2- Calcular Seno\n");
            printf("3- Calcular Cosseno\n");
            printf("4- Calcular IMC\n");
            printf("5- Calcular Média\n");
            printf("6- Sair\n");
            printf("Escolha uma opcao:");
            scanf("%d", &opc);


            switch(opc){
                case 1:
                    int n;
                    printf("Digite um numero para calcular o fatorial: ");
                    scanf("%d", &n);
                    printf("O fatorial de %d eh: %d\n", n, calcularFatorial(n));
                    break;
                case 2:
                    float x;
                    printf("Digite um numero para calcular o seno: ");
                    scanf("%f", &x);
                    printf("O seno de %f eh: %f\n", x, calcularSeno(x));
                    break;
                case 3:
                    float y;
                    printf("Digite um numero para calcular o cosseno: ");
                    scanf("%f", &y);
                    calcularCosseno(y);
                    break;
                case 4:
                    float peso, altura;
                    CalcularImc(peso, altura);
                    break;
                case 5:
                    float n1, n2;
                    CalcularMedia(n1, n2);
                    break;
                case 6:
                    printf("Saindo do programa...\n");
                    break;
                default:
                    printf("Opcao invalida. Tente novamente.\n");
            } 

return 0;
}