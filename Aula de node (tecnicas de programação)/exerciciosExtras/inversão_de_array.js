// Criar uma função para inverter um array
function inverterArray(ar){
 var ar2 = [];
 for(var i = ar.length - 1; i >= 0; i--) {
 ar2.push(ar[i]);
 }
 return ar2;
}
var ar = [1, 2, 3];
var ar2 = inverterArray(ar);
console.log(ar2); 