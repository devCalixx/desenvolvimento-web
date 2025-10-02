import Fornecedor from './fornecedor.js'

class FornecedorEmpresa extends Fornecedor {
    constructor(nome, fone, ie, cnpj) {
        super(nome, fone)
        this.ie = ie
        this.cnpj = cnpj
    }

    setIe(ie) {
        this.ie = ie
    }

    setCnpj(cnpj) {
        this.cnpj = cnpj
    }

    getIe() {
        return this.ie
    }

    getCnpj() {
        return this.cnpj
    }

}

export default FornecedorEmpresa