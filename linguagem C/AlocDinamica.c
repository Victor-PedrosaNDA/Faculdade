#include <stdio.h>
#include <stdlib.h>


int main (){

    int *v = malloc(5 * sizeof(int));
    if(v == NULL)

    for (int i = 0; i < 5; i++) v[i] = i * 10;
    for (int i = 0; i < 5; i++) printf("%d", v[i]);

    free(v);
        

    return 0;
}