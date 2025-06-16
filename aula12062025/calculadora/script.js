let expressao = "";

function adicionar(valor) {
    expressao += valor;
    document.getElementById("tela").value = expressao;
}

const limpar = function () {
    expressao = "";
    document.getElementById("tela").value = "";
}

const resultado = () => {
    try{
        const operadores = ['+', '-', '*', '/', '^', '√'];
        let operadorEncontrado = operadores.find(op => expressao.includes(op));
    
        let resultadoFinal;

        if (expressao.trim() === "") {
            document.getElementById("tela").value = "Nada para calcular";
            return;
        }

        switch (operadorEncontrado) {
            case '+': {
                const [a, b] = expressao.split('+').map(Number);
                resultadoFinal = a + b;
                break;
            }
            case '-': {
                const [a, b] = expressao.split('-').map(Number);
                resultadoFinal = a - b;
                break;
            }
            case '*': {
                const [a, b] = expressao.split('*').map(Number);
                resultadoFinal = a * b;
                break;
            }
            case '^': {
                const [a, b] = expressao.split('^').map(Number);
                resultadoFinal = Math.pow(a, b);
                break;
            }
            case '/': {
                const [a, b] = expressao.split('/').map(Number);
                if (b === 0){
                    resultadoFinal = "Erro: não é possível dividir por zero"
                } else {
                    resultadoFinal = a / b;
                }
                break;
            }
            case '√': {
                const num = Number(expressao.replace('√', ''));

                if (num < 0) {
                    resultadoFinal = "Erro: número negativo"
                } else {
                    resultadoFinal = Math.sqrt(num);
                }
                break;
            }
            default:
                resultadoFinal = "Erro";
        }

        let mostrar = "";
        for (let i = 0; i < 3; i++) {
            mostrar += ".";
        }

        document.getElementById("tela").value = "Calculando" + mostrar;

        setTimeout(() => {
            document.getElementById("tela").value = resultadoFinal;
        }, 500);

        expressao = "";
    } catch (e) {
        document.getElementById("tela").value = "Erro"
        expressao = "";
    }
}