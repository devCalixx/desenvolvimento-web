salario = 1000;

if (salario < 500) {
    novoSalario = salario * 0.15 + salario;
} else if ((salario >= 500) && (salario <= 1000)) {
    novoSalario = salario * 0.1 + salario; 
} else {
    novoSalario = salario * 0.05 + salario;
}

novoSalarioArredondado = novoSalario.toFixed(2);

console.log("O salário antigo era: R$" + salario);
console.log("O salário novo é: R$" + novoSalarioArredondado);