// Imprimir todas as tabuadas do número 1 ao 10
function ImprimirTabuada(n) {
 for (var i = 1; i <= 10; i++) {
 var linha = n + " * " + i + " = " + n * i;
 console.log(linha);
 }
}
for (var i = 1; i <= 10; i++) {
 ImprimirTabuada(i);
 console.log("");
}