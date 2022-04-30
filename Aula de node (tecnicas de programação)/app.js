let express = require('express');
let app = express();

app.get('/', function(req,res){
    res.send('ROTA GET');
});

app.get('/sobre', function(req, res){
    res.send('rota 1');
})

app.listen(3000, function(){
    console.log('projeto iniciado na porta 3000')
})