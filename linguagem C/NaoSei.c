#include <stdio.h>

int main (){

    int x = 10;
    int *p = &x;
    int **pp = &p;

    printf("O valor de x : %d\n", x);
    printf("Endereco de x: %p\n", &x);
    printf("O valor de p( endereço de x): %p\n", p);
    printf("O valor apontado por p (valor de x): %d\n", *p);
    printf("Endereço de p: %p\n", &p);
    printf("Valor de pp (endereço de p): %p\n", pp);
    printf("O valor apontado por pp (endereço de x): %p\n", *pp);
    printf("O valor apontado por pp (valor de x): %d\n", **pp);

    return 0;
}