import Fornecedor from './fornecedor.js'
import FornecedorPessoa from './fornecedorpessoa.js'

const fornecedor = new Fornecedor("Pedro", "(11) 98765-4321")
console.log(`Dados do fornecedor: Nome: ${fornecedor.getNome()}, Fone: ${fornecedor.getFone()}`)

const fornecedorpessoa = new FornecedorPessoa("Maria", "(11) 12345-6789", "12-345-678.90", "123.456.789-00")
console.log(`Dados do fornecedor: Nome: ${fornecedorpessoa.getNome()}, Fone: ${fornecedorpessoa.getFone()}, Rg: ${fornecedorpessoa.getRg()}, Cpf: ${fornecedorpessoa.getCpf()}`)
