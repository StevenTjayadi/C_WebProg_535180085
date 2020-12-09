var fs = require("fs");

console.log("Writing to existing File");
fs.writeFile('input.txt' , 'Simple Learning Node Js' , function(err){
    if (err){
        return console.error(err);
    }
    console.log("Data File wrote Successfully");
    console.log("Let's read newly written data");

    fs.readFile('input.txt' , function(err, data){
        if (err) {
            return console.log(err);
        }
        console.log("Asynchronous read = " + data.toString());
    });
});


