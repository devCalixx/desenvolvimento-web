import Fornecedor from './fornecedor.js'

class FornecedorPessoa extends Fornecedor {
    constructor(nome, fone, rg, cpf) {
        super(nome, fone)
        this.rg = rg
        this.cpf = cpf
    }

    setRg(rg) {
        this.rg = rg
    }

    setCpf(cpf) {
        this.cpf = cpf
    }

    getRg() {
        return this.rg
    }

    getCpf() {
        return this.cpf
    }

}

export default FornecedorPessoa