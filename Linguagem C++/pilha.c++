#include <iostream>

using namespace std;

using pilha = struct no {
    int valor;
    no* prox;
};

#define TAMANHO 10

class Pilha {
    private:
     int vetPilha[TAMANHO];
     int topo;
     public:
     Pilha(){
        topo = 0;
     }
      ~Pilha(){

      }

      void push(int n){
        if (topo == TAMANHO){
            cout<< "Pilha cheia!\n";
        }else{
            vetPilha [topo] = n;
            topo++;
        }
        }

        int pop(){
            if (topo == 0){
                cout << "Pilha vazia!"<< endl;
                return -1;
            }else{
                topo--;
                return vetPilha [topo];
            }
            }
        };
        int main(){
            Pilha p1;
            cout << "Empilhando 10, 20, 30... \n";
            p1.push(10);
            p1.push(20);
            p1.push(30);

            cout << "Desempilhando... \n";
            cout << p1.pop() << endl;
            cout << p1.pop() << endl;
            cout << p1.pop() << endl;
            cout <<"Empilhando 40.. \n";
            p1.push(40);
            cout << "Desempilhando... \n";
            cout << p1.pop() << endl;
            cout << p1.pop() << endl;
            cout << "Testando pop em pilha vazia: \n";
            p1.pop();
            return 0;
        }