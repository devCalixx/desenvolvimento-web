const valores = [7.7, 8.9, 6.3, 9.2] // essa variável não guarda esses valores, ela guarda o endereço de memória onde está esse array. Podemos mudar o conteúdo, mas não podemos mudar o endereço de memória. const no caso não é um tipo, const é um modificador e o tipo é Array. A quantidade de espaços dentro do Array pode mudar, como também seu conteúdo. só o endereço de memória que é constante
console.log(valores[0], valores[3]) // exibir o CONTEÚDO que está no índice 0 e 3
console.log(valores[4]) // como não há esse índice, exibirá "undefined"

valores[4] = 10 // incluindo um valor diretamente
console.log(valores[4]) // exibir o valor no índice

valores[10] = 20 // inserindo valor no índice 10
console.log(valores) // exibe os índices 0, 1, 2, 3 e 4, diz que há 5 índices vazios, e depois exibe o índice 10

console.log(valores.length) // indica quantas posições há no array, começando do 1

// inserindo mais valores on array
valores.push({id: 3}, false, null, "teste") // insere esses valores no final do array. esse "{id: 3}" é outra forma de declarar um objeto. "id" é o identificador, a chave. "3" é o valor
console.log(valores)

console.log(valores.pop()) // mostra o último valor do array, que foi retirado
delete valores[0] // deleta o primeiro item do array
console.log(valores)

console.log(typeof valores) // exibe o tipo do array, que no caso, é objeto