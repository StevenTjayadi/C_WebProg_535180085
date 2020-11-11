var fs = require("fs");
var buf = new Buffer(1024);

console.log("Opening to existing File");
fs.open('input.txt' , 'r+' , function(err,fd){
    if (err){
        return console.error(err);
    }
    console.log("Data File opened Successfully");
    console.log("Going to read data file");

    fs.read(fd, buf, 0, buf.length, 0 ,function(err, bytes){
        if (err) {
            return console.log(err);
        }
        console.log(bytes + " Bytes read");

        // print only read bytes to avoid junk
        if (bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }

        // Closes the opened file
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("File closed successfully");
        });
    });
});

