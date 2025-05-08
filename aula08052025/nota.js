prova1 = 5;
prova2 = 10;
tr = 2;
faltas = 20;

media = ((prova1 * 0.4) + (prova2 * 0.6)) * 0.7 + tr;
mediaArredondada = media.toFixed(2);

if (faltas >= 24) {
    console.log("O aluno foi reprovado por faltas, tendo " + faltas + " faltas");
} else {
    if (mediaArredondada >= 6) {
        console.log("O aluno foi aprovado com média " + mediaArredondada);
    } else if ((mediaArredondada >= 3) && (mediaArredondada < 6)) {
        console.log("O aluno está de exame com média " + mediaArredondada);
    } else {
        console.log("O aluno foi reprovado com média " + mediaArredondada);
    }
}
