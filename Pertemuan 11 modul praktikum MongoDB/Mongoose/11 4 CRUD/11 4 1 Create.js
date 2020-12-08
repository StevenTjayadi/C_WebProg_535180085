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

// Create a new Data
var member_to_insert = new Member({
    Image : "kategori/Men/men.png",
    Name : "Contoh Baju 2",
    Description : "Sample contoh penampilan baju pria",
    Color : "None" ,
    List_Price : 350000 ,
    Category : "Men" ,
    Filter : "Normal" ,
    Discount : 0 ,
    Price : 350000 ,
    Save : 0 ,
    credit : 1701000
});

member_to_insert.save((err , product) => {
    if (err) console.log(err);
    console.log(JSON.stringify(product));
});