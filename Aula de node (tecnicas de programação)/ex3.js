var numInteiro = 15
var  valor1 = Math.trunc(numInteiro)

if(numInteiro <=0){
    console.log('numero invalido')
}if(numInteiro >= 1){
    valor3 = 0;
    valor1 = 4;
    for(var i=1; i<=valor1; i++) {

      valor3 = valor3 + 1/i;

     console.log(Math.trunc(valor3));
    }
}