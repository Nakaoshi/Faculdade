// Retornar a maior string de um array
function maiorString(arr) {
 var maior = '';
 for (var i = 0; i < arr.length; i++) {
 if (arr[i].length > maior.length) {
 maior = arr[i];
 }
 }
 return maior;
}
console.log(maiorString(['Sao Paulo', 'Rio de Janeiro', 'Amazonas', 'Pernambuco', 'Santa Catarina', 'Rio Grande do Norte', 'Sergipe']));