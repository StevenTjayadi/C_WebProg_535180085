var fs = require("fs");

console.log("Open File");

fs.open('input.txt' , 'r+' , function(err, fd){
    if (err){
        return console.error(err);
    }
    console.log("File opened Successfully");
});

