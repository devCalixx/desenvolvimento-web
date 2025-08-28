// criando uma classe

class Fornecedor {

    // criando o construtor
    constructor (nome="Sem nome", fone="(00) 0000-0000") {

        //atributo = variável
        this.nome = nome;
    }

    //criando os setters

    setNome (nome) {
        this.nome = nome
    }

    setFone (fone) {
        this.fone = fone
    }

    //criando os getters
    getNome() {
        return this.nome
    }

    getFone() {
        return this.fone
    }

}

console.log("Testando classe fornecedor")

//criando objeto (instância)
//com dados iniciais

const fornecedor = new Fornecedor("Tecidos & Companhia", "(11) 91234-5678")

class FornecedorPessoa extends Fornecedor {

}