console.log(typeof Array) // array heterogêneo do tipo função
console.log(typeof new Array) // quando usamos o "new", trabalhamos com o método construtor da classe array; objeto. Esse tipo de array é flexível em relação a tamanho
console.log(typeof []) // objeto

// criar array do tipo objeto

let aprovados = new Array('Júlia', 'Nuno', 'Andréia', 'Alex'); // array tipo objeto
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

// exibir o conteúdo da posição 4

console.log(aprovados[4]);

// inserir dado na posição 4

aprovados[4] = 'Emilly'
console.log(aprovados)

aprovados.push('Caíque')
console.log(aprovados)

// retornar o tamanho do array
console.log(aprovados.length)

//inserir um elemento na posição 9
aprovados[9] = 'Cleusa'
console.log(aprovados)

// comparando o conteúdo do índice 8
console.log(aprovados[8] === undefined) //indefinido, o que será atribuído dentro da função para dizer que nenhum valor foi atribuído
console.log(aprovados[8] === null) //nulo, atribuído quando é necessário inicializar uma variável; não é zero

// colocar em ordem crescente
aprovados.sort()
console.log(aprovados)

// deletar conteúdo da primeira posição
delete aprovados[1]
console.log(aprovados)

// criar array
// splice
aprovados = ['Alex', 'Júlia', 'Nuno', 'Andréia'] // array tipo função
aprovados.splice(1, 1) //primeiro valor indica qual a posição dentro do array, o segundo indica quantos elementos eu quero deletar a partir da posição
console.log(aprovados) // exclui 'Júlia'

aprovados = ['Alex', 'Júlia', 'Nuno', 'Andréia']
aprovados.splice(1, 2)
console.log(aprovados) // exclui 'Júlia' e 'Nuno'

aprovados = ['Alex', 'Júlia', 'Nuno', 'Andréia']
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') // vai até o elemento 1, elimina dois elementos a partir dele e insere de volta esses outros dois
console.log(aprovados) // exclui 'Júlia' e 'Nuno' e insere 'Elemento 1' e 'Elemento 2' no lugar


aprovados = ['Alex', 'Júlia', 'Nuno', 'Andréia']
aprovados.splice(1, 0, 'Elemento 1', 'Elemento 2') // o zero não deleta ninguém, mas a partir da posição 1, serão inseridos esses dois elementos
console.log(aprovados) // mantém tudo, mas na empurra as posições 1 e 2 para frente, colocando 'Elemento 1' e 'Elemento 2' na frente