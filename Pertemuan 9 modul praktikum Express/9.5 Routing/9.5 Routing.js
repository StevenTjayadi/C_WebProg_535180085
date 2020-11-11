var express = require('express');

var app = express();

app.get('/' , function(req,res){res.send('Helloworld')})
app.post('/', function(req,res){res.send('Ini Post Request')})
app.put('/user' , function(req,res){res.send('PUT Request dijalankan')})
app.delete('/user' , function(req,res){res.send('Delete Request pada suatu user!')})

app.use(express.static('public'));

// specified port

app.listen(3000);