#include <stdio.h>
#include <stdlib.h>

int main (){

    int *ptr_a;

    ptr_a = malloc(sizeof(int));

    if(ptr_a == NULL){
        printf("Erro ao alocar memoria\n");
        exit (1);
    }

    printf("Endereco de ptr_a: %p\n", ptr_a);
    *ptr_a = 90;
    printf("Conteudo de ptr_a: %d\n", *ptr_a);

    free(ptr_a);


    return 0;
}