// criar um script que exiba o primeiro número divisível por 19, dentro do intervalo de 100 a 200

var i = 0;
var x = 0;
var y = 0;

i = x = 100;
y = 200;

do {
    if (i % 19 == 0) {
        console.log("O primeiro número divisível por 19 entre " + x + " e " + y + " é " + i);
        break
    }

    i++ 
} while (x < i < y)