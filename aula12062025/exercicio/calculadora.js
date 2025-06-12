// calculadora com as operações básicas e duas matemáticas (que podemos escolher)
// vai ter desvio condicional
// fazer com switch, função tradicional, de seta, anônima e laços de repetição
// fazer com html e css

const resultado = document.querySelector(".resultado")
const botoes = document.querySelectorAll(".teclas button")

function updateResult(originClear = false) {
    resultado.innerText = originClear ? 0: numeroAtual.replace(".", ",")
}

let numeroAtual = ''
let primeiroNumero = null
let operadorAtual = null
let segundoNumero = ''
let novoNumero = true
let restart = false

// FUNÇÃO DE SETA
const soma = (a, b) => {
    return a+b
}

// FUNÇÃO ANÔNIMA
const subtracao = function(a, b) {
    console.log(a - b)
}

// FUNÇÃO NORMAL
function multiplicacao(a, b) {
    return a * b
}

const divisao = (a, b) => {
    return a / b
}

const raiz = function(a) {
    console.log(Math.sqrt(a))
}

function potencia(a, b) {
    return Math.pow(a, b)
}

function escreverNumero(elementId) {
    return 
}

//estado atual



const display = document.getElementById('display')

const atualizarDisplay = (valor) => {
    if (novoNumero) {
        display.textContent = valor
        novoNumero = false
    } else {
        display.textContent = display.textContent === '0' ? valor: display.textContent + valor
    }
}

const limpar = () => {
    primeiroNumero = null
    operadorAtual = null
    segundoNumero = ''
    novoNumero = true
    display.textContent = '0'
}

const calcular = () => {
    if (operadorAtual && primeiroNumero !== null && segundoNumero !== '') {
        const num1 = primeiroNumero
        const num2 = parseFloat(segundoNumero)
        let resultado

        switch(operadorAtual) {
            case '+':
                resultado = soma(num1, num2)
                break
            case '-':
                resultado = subtracao(num1, num2)
                break
            case '*':
                resultado = multiplicacao(num1, num2)
                break
            case '/':
                resultado = num2 !== 0 ? divisao(num1, num2): 'Não é possível dividir por zero'
                break
            case '√':
                resultado = raiz(num2 || num1)
                break
            case '^':
                resultado = potencia(num1, num2)
                break
            default:
                resultado: 'Erro!'
        }


    }
}