const port = 3000,

    http =  require('http'), 
    httpStatus = require('http-status-codes'),

    app = http.createServer();

app.on("Request" , (req, res) => {
    res.writeHead(httpStatus.OK, {
        "Content-Type" : "text/html"
    });
    let responseMessage = "<h1>This will show on the screen</h1>";
    res.end(responseMessage);
});

app.listen(port);

console.log("Server start di port : ? ${port}");