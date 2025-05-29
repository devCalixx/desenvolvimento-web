//Exemplo 3 - Qual a estação?

mes = 'dezembro'

console.log("Em que estação estamos?")

switch(mes){
    case 'dezembro' || 'janeiro' || 'fevereiro':
        console.log("Estamos no verão!"); break;
    case 'março' || 'abril' || 'maio':
        console.log("Estamos no outono!"); break;
    case 'junho' || 'julho' || 'agosto':
        console.log("Estamos no inverno!"); break;
    case 'setembro' || 'outubro' || 'novembro':
        console.log("Estamos na primavera!"); break;
    default:
        console.log("Mês inválido"); break;
}