import Fornecedor from './fornecedor.js'

class FornecedorEmpresa extends Fornecedor {
    #ie 
    #cnpj

    constructor(nome, fone, ie, cnpj) {
        super(nome, fone)
        this.#ie = ie
        this.#cnpj = cnpj
    }

    setRg(ie) {
        this.#ie = ie
    }

    setCpf(cnpj) {
        this.#cnpj = cnpj
    }

    getIe() {
        return this.#ie
    }

    getCnpj() {
        return this.#cnpj
    }

}

export default FornecedorEmpresa