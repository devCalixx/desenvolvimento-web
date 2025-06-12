// criando um array de objeto
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: "Bianca"} // isso não é um array. não temos o colchete. ele foi montado desse jeito para ser exibido do mesmo jeito que um array
console.log(quaseArray)

// trabalhando com a classe mãe Object
Object.defineProperty(quaseArray, 'toString', { // defineProperty é um método de Object. Ele vai modificar o conteúdo da variável 'quaseArray'. O método 'toString' vai converter para o tipo String
    value: function() {return Object.values(this)}, // uma função é definida para referenciar o objeto (que será pegado através do método 'this'. ela é como se fosse o 'self' do python. referencia os métodos e atributos dentro da pŕopria classe)
    enumerable: false // na hora de exibir, ele vai tirar os números
})
// isso é tudo pra transformar um array de objeto em string

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bianca'] // isso é um array
console.log(quaseArray.toString(), meuArray)