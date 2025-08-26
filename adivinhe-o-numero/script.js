const numeroSecreto = function(max) {
    return Math.floor(Math.random() * max)
}

const contarTentativa = () => {
    contador++
    elementoContador.textContent = "Tentativas: " + contador + "/" + tentativaMaxima
}

function iniciarJogo () {
    numero = numeroSecreto(21)
    contador = 0
    jogoAtivo = true
    palpitesDados = []

    mensagem.textContent = "Jogo iniciado! Tente adivinhar o número."
    elementoContador.textContent = "Tentativas: 0/" + tentativaMaxima
    historico.textContent = "Números já usados: nenhum"

    btnValidar.style.display = "inline-block"
    btnReiniciar.style.display = "none"
    document.getElementById("palpite").value = ""
}

function validarNumero() {
    if (!jogoAtivo) return

    let palpite = Number(document.getElementById("palpite").value)

    if (isNaN(palpite)) {
        mensagem.textContent = "Por favor, insira um número válido;"
        return
    } else if (palpite > 20) {
        mensagem.textContent = "Digite um número entre 0 e 20."
        return
    } else if (palpite < 0) {
        mensagem.textContent = "Digite um número positivo."
        return
    }

    if(palpitesDados.includes(palpite)) {
        mensagem.textContent = "Você já tentou o número " + palpite + ". Tente outro!"
        return
    }

    palpitesDados.push(palpite)
    historico.textContent = "Números já usados: " + palpitesDados.join(", ")

    contarTentativa()

    if (palpite < numero) {
        mensagem.textContent = palpite + " é menor que o número."
    } else if (palpite > numero) {
        mensagem.textContent = palpite + " é maior que o número."
    } else {
        mensagem.textContent = "Parabéns! Você acertou! O número era " + numero
        finalizarJogo()
        return
    }

    if (contador >= tentativaMaxima) {
        mensagem.textContent = "Você excedeu seu número de tentativas. O número era " + numero
        finalizarJogo()
    }
}

function finalizarJogo() {
    jogoAtivo = false
    btnValidar.style.display = "none"
    btnReiniciar.style.display = "inline-block"
}

function reiniciarJogo() {
    iniciarJogo()
}

let numero = 0
let contador = 0
const tentativaMaxima = 10
let jogoAtivo = true
let palpitesDados = []

const mensagem = document.getElementById("mensagem")
const elementoContador = document.getElementById("contador")
const historico = document.getElementById("historico")
const btnValidar = document.getElementById("btnValidar")
const btnReiniciar = document.getElementById("btnReiniciar")

iniciarJogo()