const clientes = [
    {Nome: "Ana Silva", Altura: 1.65, Peso: 60},
    {Nome: "Bruno Costa", Altura: 1.80, Peso: 95},
    {Nome: "Carla Dias", Altura: 1.60, Peso: 45},
    {Nome: "Daniel Meireles", Altura: 1.75, Peso: 72},
    {Nome: "Elisa Borges", Altura: 1.68, Peso: 92}
  ];
  
const calcularIMC = (peso, altura) => peso / (altura ** 2);
  
function classificarImc(imc) {
    switch (true) {
        case (imc < 19.1): 
            return "Abaixo do peso";
        case (imc < 25.8): 
            return "Peso normal";
        case (imc < 27.3): 
            return "Pouco acima do peso";
        case (imc < 32.3): 
            return "Acima do peso";
        case (imc >= 32.3): 
            return "Obesidade";
        default: 
            return "Valor inválido";
    }
}
  
const gerarRelatorio = function() {
    const corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = "";

    clientes.forEach(cliente => {
        const imc = calcularIMC(cliente.Peso, cliente.Altura);
        const classificacao = classificarImc(imc);

    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${cliente.Nome}</td>
        <td>${imc.toFixed(2)}</td>
        <td>${classificacao}</td>
    `;

    corpoTabela.appendChild(linha);
  });
}