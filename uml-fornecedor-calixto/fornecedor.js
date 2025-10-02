class Fornecedor {
    constructor (nome="Sem nome", fone="(00) 00000-0000") {
        this.nome = nome;
        this.fone = fone;
    }

    setNome(nome){
        this.nome = nome
    }

    setFone(fone){
        this.fone = fone
    }

    getNome(){
        return this.nome
    }

    getFone(){
        return this.fone
    }
}

export default Fornecedor