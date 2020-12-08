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

var myQuery = Member.findOne({
    Name : "Baju Sample 2"
})
    .where("Category" , /boldly/);

myQuery.exec((error,data) => {
    if (data) console.log(data.Name);
})