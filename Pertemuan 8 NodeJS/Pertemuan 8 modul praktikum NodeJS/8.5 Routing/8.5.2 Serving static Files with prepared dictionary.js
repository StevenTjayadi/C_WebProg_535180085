const port = 3000,

    http =  require('http'), 
    httpStatus = require('http-status-codes'),
    fs = require("fs");

const routemap = {
    "/" : "views/index.html"
};

http.
    createServer((req,res) => {
        res.writeHead(httpStatus.OK, {
        "Content-Type" : "text/html"
        });
        if(routemap[req,url]){
            fs.readFile(routemap[req,url], (error, data) =>{
                res.write(data);
                res.end();
            });
            //res.end(routeResponseMap[req.url]);
        }
        else{
            res.end("<h1>Sorry Not found</h1>");
        }
    });
    .listen(port);



