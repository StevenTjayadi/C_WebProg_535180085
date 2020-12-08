const MongoDB = require('mongodb').MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "Men_Category_Suit";

MongoDB.connect(dbURL , (error , client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("Men_Suit")
      .insertOne({
          Image : "kategori/Men/men.png",
          Name : "Baju Sample",
          Description : "Sample contoh penampilan baju pria",
          Color : "B" ,
          List_Price : 500000 ,
          Category : "Men" ,
          Filter : "Normal" ,
          Discount : 0 ,
          Price : 500000 ,
          Save : 0 
      }, (error , db) => {
          if (error) throw error;
          console.log(db);
      })
});