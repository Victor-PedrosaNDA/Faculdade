#include <stdio.h>
#include <stdlib.h>

int main (){

    int i;
    int *v;
    v = (int*)malloc(sizeof(int)*10);
     v[0]=10;
     v[1]=11;
     v[2]=12;
     v[9]=19;

     for (i=0; i<10; i++)
        printf("v[%d]: %d ", i, v[i]);
     
    printf("Endereco d ev [0]: %p\n",v);

    free(v);

    return 0;
}