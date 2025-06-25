const taxasDeCambio = {
  USD: { BRL: 5.3, EUR: 0.91, GBP: 0.78, JPY: 157.2, CHF: 0.89, USD: 1 },
  BRL: { USD: 0.19, EUR: 0.17, GBP: 0.15, JPY: 29.6, CHF: 0.17, BRL: 1 },
  EUR: { USD: 1.1, BRL: 5.8, GBP: 0.85, JPY: 172.3, CHF: 0.98, EUR: 1 },
  GBP: { USD: 1.27, BRL: 6.8, EUR: 1.17, JPY: 202.6, CHF: 1.14, GBP: 1 },
  JPY: { USD: 0.0064, BRL: 0.034, EUR: 0.0058, GBP: 0.0049, CHF: 0.0056, JPY: 1 },
  CHF: { USD: 1.12, BRL: 6.1, EUR: 1.02, GBP: 0.87, JPY: 179.3, CHF: 1 },
};

function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;
  const resultadoEl = document.getElementById("resultado");

  if (isNaN(valor) || valor <= 0) {
    resultadoEl.textContent = "Por favor, insira um valor válido.";
    return;
  }

  const taxa = taxasDeCambio[de][para];
  const convertido = valor * taxa;

  resultadoEl.textContent = `${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
}