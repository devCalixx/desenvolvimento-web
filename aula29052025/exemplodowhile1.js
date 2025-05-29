// Exemplo 1 - Validação do sexo

do {

    let texto = "Feminino";
    var sexo = texto.charAt(0);

    if(sexo != 'F' && sexo != 'M')
        console.log("Sexo inválido, ERRO.")

} while (sexo != 'F' && sexo != 'M');

console.log("Sexo validado!")