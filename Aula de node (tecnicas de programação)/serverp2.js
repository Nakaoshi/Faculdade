let express = require('express');
let app = express();

app.get('/', function(req,res){
    res.send('ROTA GET');
});

app.get('/nm/:N/:M', function(req, res){
        let p1 = req.params.N
        let p2 = req.params.M
        let soma = parseInt(p1) + parseInt(p2)
        res.send("parametro1 = " + p1.toString() + 
        " parametro2 = " + p2.toString() + " soma = " + soma.toString());

    });


    app.get('/calculadora/:x/:y/:op', function(req, res){
        let valor = req.params.x
        let valor1 = req.params.y
        let operacao = req.params.op
        parseInt(valor);
        parseInt(valor1);


     function calcular(valor,valor1,operacao){ 
         switch(operacao){
             case "+":  resultado = valor + valor1 
             case "-": resultado = valor - valor1 
             case "*": resultado = valor * valor1 
             case "": resultado = valor / valor1 
         }
        return resultado
     }  
        
    


        res.send(calcular(valor, valor1 ,operacao).toString())
    })


app.listen(3000, function(){
    console.log('projeto iniciado na porta 3000')
})