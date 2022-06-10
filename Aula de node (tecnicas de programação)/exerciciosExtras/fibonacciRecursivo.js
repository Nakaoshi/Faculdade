// Criar uma função para imprimir os 10 primeiros números da sequência de Fibonacci usando recursividade
function localizarFibonacci(n) {
 if (n == 0)
 return 0;
 if (n == 1)
 return 1;
 return localizarFibonacci(n - 1) + localizarFibonacci(n - 2);
}
var n = localizarFibonacci(10);
console.log(n);