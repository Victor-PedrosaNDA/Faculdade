#include <iostream>

using namespace std;

class IMC{
    private:
    float peso;
    float altura;
    public:
    
        IMC(float p, float a){
            peso = p;
            altura = a;
        }
        float calcularIMC(){
            return peso / (altura * altura);
        }

        void classificarIMC(){
            float imc = calcularIMC();
            cout << "IMC = " << imc << endl;
            if (imc < 18.5){
                cout << "Abaixo do peso" << endl;
            } else if (imc >= 18.5 && imc < 25){
                cout << "Peso normal" << endl;
            } else if (imc >= 25 && imc < 30){
                cout << "Sobrepeso" << endl;
            } else {
                cout << "Obesidade" << endl;
            }
        }

        float somar(float a, float b){
            return a + b;
        }

        void subtrair(float a, float b){
            cout << "Subtracao = " << a - b << endl;
        }
};

int main(){
    float peso,altura;
    cout << "Digite o peso (kg): ";
    cin >> peso;

    cout << "Digite a altura (m): ";
    cin >> altura;

    IMC pessoa(peso, altura);
    pessoa.classificarIMC();

    float resultadoSoma = pessoa.somar(10, 5);
    cout << "Soma = " << resultadoSoma << endl;

    pessoa.subtrair(10, 5);

    return 0;
}