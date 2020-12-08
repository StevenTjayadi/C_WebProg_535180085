const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://127.0.0.1:27017/Men_Category_Suit",
    {useNewUrlParser : true}
);

const db = mongoose.connection;

db.once("open" , () =>{
    console.log("Successfully connected to MongoDB using Mongoose");
});

const memberSchema = mongoose.Schema({
    Image : String,
    Name : String,
    Description : String,
    Color : String ,
    List_Price : Number ,
    Category : String ,
    Filter : String ,
    Discount : Number ,
    Price : Number ,
    Save : Number
});

const Member = mongoose.model("Member" , memberSchema);

// Update 

Member.updateOne({Name : "Contoh Baju 3"} , {credit : 1031000} , (err, raw) => {
    
    Member.findOne({Name : "Contoh Baju 2"}).exec((error, data) => {
        if (data) console.log("Find one : " + JSON.stringify(data));
    });
});