const { json } = require('express');
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

// Read or Find the file
var findoneQuery = Member.findOne({ Name : "Contoh Baju 2"})
findoneQuery.exec((error, data) => {
    if (data) console.log("Find one : " + JSON.stringify(data));
});

// Cara melakukan query tanpa inisialisasi variable terlebih dahulu
Member.find({ Name : "Contoh Baju 2"}).exec((error,data) => {
    if (data) console.log("Find one : " + JSON.stringify(data));
});

