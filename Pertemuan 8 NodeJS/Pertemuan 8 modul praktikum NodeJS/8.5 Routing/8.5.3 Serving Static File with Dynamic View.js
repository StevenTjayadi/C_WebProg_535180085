const port = 3000,

    http =  require('http'), 
    httpStatus = require('http-status-codes'),
    fs = require("fs");

const getViewUrl = (url) => {
    return 'view$(url).html';
};

http.createServer((req,res) => {
    let viewURL = getViewUrl(req.url);

    fs.readFile(viewURL, (error, data) => {
        if (error){
            res.writeHead(httpStatus.NOT_FOUND);
            res.write("<h1>File Not Found</h1>");
        }
        else {
            res.writeHead(httpStatus.OK, {
                "Content-Type" : "text/html"
            });
            res.write(data);
        }
        res.end();
    });
});
    .listen(port);

console.log("Server start di port : ? ${port}");