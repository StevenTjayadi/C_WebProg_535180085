var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send("Hello World")
})

// specified port

app.listen(3000);

