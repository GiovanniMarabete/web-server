var express = require('express');
var app = express();
var PORT = '3000';

//app.get('/', function (req , res){
    //res.send('Hello Express!');
//});

//var meta  = new AWS.MetadataService();

//meta.request("/latest/meta-data/instance-id", function(err, data){
   // console.log(data);
//});

app.get('/about', function (req , res){
    res.send('We are The Best!!!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function(){
    console.log('We are listening on Port: ' + PORT);
});


