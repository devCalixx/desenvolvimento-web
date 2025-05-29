// Exemplo 1 - Criando menu para estado civil

let opcao = 'c ';

// Criando o menu

console.log("Escolha\n");
console.log("(s) - solteiro")
console.log("(c) - casado")
console.log("(d) - divorciado \n")

//comparar

switch(opcao) {
    case 's': console.log("Solteiro"); break;
    case 'c': console.log("Casado"); break;
    case 'd': console.log("Divorciado"); break;
    default: console.log("Outros"); break;
}