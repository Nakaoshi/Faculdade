// Contar a quantidade de palavras em um texto
function contarPalavras(text) {
 var existe_separador = true;
 var palavras = 0;
 for (var c of text) {
 if (separador (c)) {
 existe_separador = true;
 continue;
 }
 if (existe_separador) {
 palavras ++;
 existe_separador = false;
 }
 }
 return palavras;
}
function separador(c) {
 var separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
 return separadores.includes(c);
}
console.log(contarPalavras (""));
console.log(contarPalavras (" "));
console.log(contarPalavras ("Corno"));
console.log(contarPalavras ("Super Corno"));
console.log(contarPalavras (" ULTRA SUPER CORNO"));
console.log(contarPalavras ("MAS CARA TU É MUITO CORNO RAPÁ"));