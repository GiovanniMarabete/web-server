var express = require('express');
var app = express();
var PORT = '3000';

app.get('/about', function (req , res){
    res.send('We are The Best!!!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function(){
    console.log('We are listening on Port: ' + PORT);
});


