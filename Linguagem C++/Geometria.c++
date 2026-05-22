#include <iostream>

using namespace std;

class geometria{
    protected:
        float pi = 3.14;
};

class esfera: public geometria{
    private:
        float raio;
    public:
        esfera(float r){
            raio = r;
        }
        float calcularVolume(){
            return (4.0/3.0) * pi * (raio * raio * raio);
        }
};

class circunferencia: public geometria{
    private:
        float raio;
    public:
        circunferencia(float r){
            raio = r;
        }
        float calcularComprimento(){
            return 2 * pi * raio;
        }
};

class cilindro: public geometria{
    private:
        float altura, raio;
    public:
        cilindro(float r, float h){
            raio = r;
            altura = h;
        }
        float calcularArea(){
            return 2 * pi * raio * (raio + altura);
        }
        float calcularVolume(){
            return pi * raio * raio * altura;
        }
};

int main(){
    int opc;
    float r, h;

    cout << "Escolha uma opcao:\n1 - Calcular Esfera\n2 - Calcular Circunferencia\n3 - Calcular Cilindro\nOpcao: ";
    cin >> opc;
    switch (opc){
        case 1: {
            cout << "Digite o raio da esfera: ";
            cin >> r;
            esfera e1(r);
            cout << "O volume da esfera eh: " << e1.calcularVolume() << endl;
            break;
        }
        case 2: {
            cout << "Digite o raio da circunferencia: ";
            cin >> r;
            circunferencia c1(r);
            cout << "O comprimento da circunferencia eh: " << c1.calcularComprimento() << endl;
            break;
        }
        case 3: {
            cout << "Digite o raio do cilindro: ";
            cin >> r;
            cout << "Digite a altura do cilindro: ";
            cin >> h;
            cilindro c2(r, h);
            cout << "A area do cilindro eh: " << c2.calcularArea() << endl;
            cout << "O volume do cilindro eh: " << c2.calcularVolume() << endl;
            break;
        }
        default:
            cout << "Opcao invalida!" << endl;
            break;
    }
    
    return 0;
}