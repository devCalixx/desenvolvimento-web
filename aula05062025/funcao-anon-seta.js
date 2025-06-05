// Trabalhando com funções
// function imprimirSoma (a,b) {}

// criação de função anônima
const imprimirSoma = function(a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)

// função de seta - arrow function
const soma = (a,b) => {
    return a+b
}

console.log(soma(2,3))

// retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(5,2))

const imprimir1 = a => console.log(a)
imprimir1('Bacana!')