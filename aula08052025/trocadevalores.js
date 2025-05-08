let a = 10;
let b = 20;

console.log("Valor de A antes da troca: " + a);
console.log("Valor de B antes da troca: " + b + "\n");

[a,b] = [b,a];

console.log("Valor de A depois da troca: " + a);
console.log("Valor de B depois da troca: " + b);