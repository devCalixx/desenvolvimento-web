// array com laço de repetição
// criando um array de objetos chamados 'alunos'

const alunos = [
    {aluno: 'Henrique', nota: 8},
    {aluno: 'Anabela', nota: 10},
    {aluno: 'Fernando', nota: 9},
    {aluno: 'Bianca', nota: 7}
]

// criação de variáveis
let index = 0 // iteração
let somaDasNotas = 0 // recebe soma das notas
let totalAlunos = alunos.length // armazena número total

// utilizando o laço do...while
do {
    somaDasNotas += alunos[index].nota
    index++
} while(index < totalAlunos)

// calculando a média
let media = somaDasNotas / totalAlunos
console.log(media)