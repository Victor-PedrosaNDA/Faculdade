#include <iostream>

using namespace std;

class pessoa {
    private:
        string nome;
        int idade;

        public:
        void cadastrar(string n, int i) {
            nome = n;
            idade = i;
        }
        void mostrar(){
            cout << "Nome: " << nome << endl;
            cout << "Idade: " << idade << endl;
        }
};

int main ()
{
    pessoa p1;
    p1.cadastrar ("Victor", 21);
    p1.mostrar();
    return 0;
}