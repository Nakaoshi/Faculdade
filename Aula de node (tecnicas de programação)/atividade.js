let express = require('express');
let app = express();

app.get('/', function(req,res){
    res.send('ROTA GET');
});

app.get('/fib/:T', function(req, res){
   function fibonachi(n1,n2,n3,numeroFinal, T){
    var numeroFinal = 4
    var n1 = 2
    var n2 = 7 
    var n3 = 3
    var T = req.params.T
    console.log(`numero de repetições é ${T}`)
    console.log(n1)
    console.log(n2)
    console.log(n3)
    while(numeroFinal<= T){

        n1= n1*2;
        numeroFinal++;
        console.log(n1)

        if(numeroFinal <= T){

            n2 = n2*3;
            console.log(n2);
            numeroFinal++;

        }if(numeroFinal <= T){

            n3 = n3 * 4
            console.log(n3);
            numeroFinal++;

        }
        
    }}
   res.send(fibonachi(n1,n2,n3).toString())
   
   
   
});
app.listen(3000, function(){
    console.log('projeto iniciado na porta 3000')
})