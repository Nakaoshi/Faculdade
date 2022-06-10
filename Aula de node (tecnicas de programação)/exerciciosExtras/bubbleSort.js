// Implemente o algoritmo "bubble sort" para um array de números
function bubbleSort(ar) {
 var shouldSort = true;
 var length = ar.length;
 while(shouldSort) {
 shouldSort = false;
 length--;
 for (var i = 0; i < length; i++) {
 var a = ar[i];
 if ( a > ar[i+1] ) {
 ar[i] = ar[i+1];
 ar[i+1] = a;
 shouldSort = true;
 }
 }
 }
}
var ar = [23, 1000, 1, -1, 8, 3];
console.log(ar);
bubbleSort(ar);
console.log(ar);