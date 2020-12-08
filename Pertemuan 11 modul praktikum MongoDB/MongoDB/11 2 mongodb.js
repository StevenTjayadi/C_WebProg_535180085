var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Men_Category_Suit";

MongoClient.connect(url , function(err , db){
    if (err){
        throw err;
    }
    else{
        console.log("Connected!");
    }
    db.close();
});