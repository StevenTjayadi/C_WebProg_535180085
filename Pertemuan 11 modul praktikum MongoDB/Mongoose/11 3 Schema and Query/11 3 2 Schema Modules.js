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

//const Member = require("./models/Member");

// Type 1

var member1 = new Member({
    Image : "kategori/Men/men.png",
    Name : "Baju Sample 2",
    Description : "Sample contoh penampilan baju pria kedua dengan monggose plot",
    Color : "None" ,
    List_Price : 340000 ,
    Category : "Men" ,
    Filter : "Normal" ,
    Discount : 0 ,
    Price : 340000 ,
    Save : 0 
});

member1.save((error , savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});
