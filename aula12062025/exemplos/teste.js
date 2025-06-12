let x = 1
while (x<5) {
    console.log("esse é o número " + x)
    x++
}

// let numero = [10, 11] ----> array do tipo função
// Array objeto = new Array() |___ array do tipo objeto ----> objeto anônimo
    // Array = classe
    // objeto = variável que será armazenada na área de stack
    // new = instancial, inicializa
    // Array = método construtor (tem o mesmo nome da classe) ----> serve para inicializar a classe ----> se estiver vazio, os atributos serão definidos como "null", que não é zero
    // o método construtor é sempre público
// métodos Array: push, pop
// classe object: classe mãe que faz parte da linguagem. Ela já tem vários métodos nativos, e por isso, não é necessária a importação de algumas classes
// classes filhas de object: Array, String, Math
    // métodos String: toUppercase, toLowercase
    // métodos Math: pow(), sqrt()
// orientação a objetos: abstração da vida para montar um projeto lógico
// tem como objetivo gerar modelos
// nome da classe -- atributos -- métodos
    // ex: nome da classe = Pessoa; atributo = corDeCabelo: String; atributo = nome: String
    // quando encapsulamos, colocamos um sinal de menos (-) na frente. quando é público, colocamos um sinal de (+)
    // então, se houverem classes filhas da classe Pessoa e o atributo estiver encapsulado, elas não podem acessar. se não estiver encapsulado, dentro daquela classe filha o atributo pode ser chamado
    // na orientação a objetos, existe o encapsulamento público, privado, package e protegido (mistura do público com privado. só quem é autorizado acessa)
// palavra reservada para classe = class
// objetos não armazenam valor, mas sim endereço de memória
// não é uma boa prática de programação juntar tipos diferentes em um mesmo array. se houver necessidade do tipo string, booleano e inteiro, três arrays devem ser criados