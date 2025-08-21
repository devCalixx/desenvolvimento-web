const numeroSecreto = function(max) {
    return Math.floor(Math.random() * max)
}

let numero = numeroSecreto(21)

let contador = 0
const elementoContador = document.getElementById("contador")

function iniciarJogo() {
        let palpite = document.getElementById("palpite").value
        let mensagem = document.getElementById("mensagem")
        const validarNumero = function(){
            if (palpite === '') {
                mensagem.textContent = "Por favor, insira um número."
            } else if (palpite > 20) {
                mensagem.textContent = "Por favor, insira um número menor ou igual a 20."
            } else if (palpite < 0) {
                mensagem.textContent = "Por favor, insira um número positivo."
            } else {
                if (palpite < numero) {
                    mensagem.textContent = palpite + " é menor que o número."
                } else if (palpite > numero) {
                    mensagem.textContent = palpite + " é maior que o número."
                } else {
                    mensagem.textContent = "Parabéns! Você acertou! O número era " + palpite
                }
            }
            return palpite
        }
}

if (tentativaAtual > tentativaMaxima) {
    alert("Você excedeu seu número de tentativas. Jogue novamente.")
}

console.log(numero)