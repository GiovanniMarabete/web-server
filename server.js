var express = require('express');
var app = express();
var PORT = '3000';
var request = require('request');

app.get('/about', function (req , res){
    res.send('We are The Best!!!');
});

app.get('/meta', function (req , res){
    request('http://169.254.169.254/latest/meta-data/public-hostname', function (error, response, body) {
  //if (!error && response.statusCode == 200) 
   //var META = $body
   //console.log(body)
 // });
    res.send(body);
})});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function(){
    console.log('We are listening on Port: ' + PORT);
});


