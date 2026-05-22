#include <iostream>

using namespace std;

class Calculadora {
public:
    double somar(double a, double b) {
        return a + b;
    }

    double subtrair(double a, double b) {
        return a - b;
    }

    double multiplicar(double a, double b) {
        return a * b;
    }

    double dividir(double a, double b) {
        if (b == 0) {
            cout << "Erro: Divisao por zero!" << endl;
            return 0;
        }
        return a / b;
    }
};

int main() {
    Calculadora calc;
    double n1, n2;
    int opcao;

    cout << "Digite o primeiro numero: ";
    cin >> n1;
    cout << "Digite o segundo numero: ";
    cin >> n2;

    cout << "Escolha a operacao:\n1 - Soma\n2 - Subtracao\n3 - Multiplicacao\n4 - Divisao\nOpcao: ";
    cin >> opcao;

    cout << "Resultado: ";
    switch (opcao) {
        case 1:
            cout << calc.somar(n1, n2) << endl;
            break;
        case 2:
            cout << calc.subtrair(n1, n2) << endl;
            break;
        case 3:
            cout << calc.multiplicar(n1, n2) << endl;
            break;
        case 4:
            cout << calc.dividir(n1, n2) << endl;
            break;
        default:
            cout << "Opcao invalida!" << endl;
            break;
    }

    return 0;
}